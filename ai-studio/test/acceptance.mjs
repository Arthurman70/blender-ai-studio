// SPDX-License-Identifier: GPL-3.0-or-later
// Runs against a disposable, newly launched session. It replaces that session's scene.
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import {spawn} from 'node:child_process';
import {fileURLToPath} from 'node:url';
import {api,command,readSession} from '../client.mjs';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const report={checks:[],started:new Date().toISOString()};
async function check(name,fn){await fn();report.checks.push(name);console.log('PASS '+name);}
const s=readSession();
await check('Blender process ready',async()=>{for(let i=0;i<100;i++){if((await api('/api/status')).ready)return;await new Promise(r=>setTimeout(r,200));}assert.fail('Blender did not become ready');});
await check('Registered operators and RNA types enumerated',async()=>{
  const catalog=await command('catalog',{full:true});
  assert.ok(catalog.operator_count>1000);assert.ok(catalog.type_count>1000);assert.equal(catalog.errors.length,0);
  assert.ok(catalog.operators.some(op=>op.id==='mesh.primitive_cube_add'));
  fs.mkdirSync(path.join(root,'docs'),{recursive:true});
  fs.writeFileSync(path.join(root,'docs','operator-catalog.json'),JSON.stringify(catalog,null,2));
  report.operator_count=catalog.operator_count;report.type_count=catalog.type_count;
});
await check('RNA properties and functions discoverable',async()=>{const type=await command('type',{name:'Object'});assert.ok(type.properties.some(p=>p.id==='location'));assert.ok(type.functions.some(f=>f.id==='keyframe_insert')||type.functions.length>0);});
await check('Create geometry through generic operator',async()=>{const r=await command('operator',{id:'mesh.primitive_cube_add',kwargs:{size:2,location:[2,3,4]}});assert.equal(r.finished,true);});
await check('Data paths read and write actual scene state',async()=>{await command('set',{path:'bpy.context.object.location',value:[4,5,6]});assert.deepEqual(await command('get',{path:'bpy.context.object.location'}),[4,5,6]);});
await check('Expressions cannot execute through data-path route',async()=>{await assert.rejects(()=>command('get',{path:'bpy.ops.object.delete()'}),/data path/);});
await check('Context errors are actionable and do not crash session',async()=>{await assert.rejects(()=>command('operator',{id:'mesh.subdivide'}),/poll failed/);assert.ok((await command('status')).version);});
await check('Syntax errors are reported and next command succeeds',async()=>{await assert.rejects(()=>command('python',{code:'if : invalid'}));assert.equal((await command('python',{code:'result = 6 * 7'})).result,42);});
await check('File helpers reject workspace traversal',async()=>{await assert.rejects(()=>command('save',{path:'../escape.blend'}),/inside/);});
await check('Build procedural observatory through AI Python hook',async()=>{const code=fs.readFileSync(path.join(root,'examples','observatory.py'),'utf8');const r=await command('python',{code});assert.ok(r.result.objects>50);report.scene=r.result;});
await check('Browser transform route edits and restores named object',async()=>{await command('transform',{name:'Aster • ocean world',location:[.1,0,2.75]});assert.equal((await command('get',{path:'bpy.data.objects["Aster • ocean world"].location'}))[0]>.09,true);await command('transform',{name:'Aster • ocean world',location:[0,0,2.75]});});
await check('Animation responds to frame changes',async()=>{await command('frame',{frame:120});const v=await command('get',{path:'bpy.data.objects["Aster • ocean world"].rotation_euler'});assert.ok(v[2]>2);await command('frame',{frame:1});});
await check('Geometry nodes and bevel modifiers evaluate',async()=>{const r=await command('python',{code:'obj=bpy.data.objects["Geometry Nodes • calibration satellite"]\nresult={"vertices":len(obj.evaluated_get(bpy.context.evaluated_depsgraph_get()).data.vertices),"nodes":len(obj.modifiers[0].node_group.nodes)}'});assert.equal(r.result.vertices,8);assert.equal(r.result.nodes,3);});
await check('Save and reopen .blend with bridge surviving reload',async()=>{await command('save',{path:'aster-observatory.blend'});await command('open',{path:'aster-observatory.blend'});assert.equal((await command('scene')).name,'Aster Observatory');});
await check('Export GLB and retrieve it over authenticated HTTP',async()=>{const r=await command('export',{path:'aster-observatory.glb'});const response=await fetch(s.url+'/api/asset?path='+r.asset,{headers:{Authorization:'Bearer '+s.token}});const bytes=Buffer.from(await response.arrayBuffer());assert.equal(bytes.toString('ascii',0,4),'glTF');assert.ok(bytes.length>10000);report.glb_bytes=bytes.length;});
await check('MCP initialize, tool listing and live scene call',async()=>{
  const child=spawn(process.execPath,[path.join(root,'mcp.mjs')],{stdio:['pipe','pipe','pipe']});
  let output='';child.stdout.on('data',b=>output+=b);
  child.stdin.end([{id:1,method:'initialize',params:{protocolVersion:'2024-11-05'}},{id:2,method:'tools/list'},{id:3,method:'tools/call',params:{name:'blender_scene',arguments:{}}}].map(v=>JSON.stringify({jsonrpc:'2.0',...v})).join('\n')+'\n');
  await new Promise((resolve,reject)=>{child.on('error',reject);child.on('exit',code=>code===0?resolve():reject(new Error('MCP exit '+code)));});
  const results=output.trim().split('\n').map(l=>JSON.parse(l));assert.equal(results.length,3);assert.equal(results[1].result.tools.length,7);assert.equal(JSON.parse(results[2].result.content[0].text).name,'Aster Observatory');
});
await check('Cycles renders PNG through AI command API',async()=>{const r=await command('render',{path:'aster-observatory.png',width:1200,height:1000},s,600000);const bytes=fs.readFileSync(r.path);assert.equal(bytes.toString('hex',0,8),'89504e470d0a1a0a');assert.ok(bytes.length>50000);report.png_bytes=bytes.length;});
await command('save',{path:'aster-observatory.blend'});
report.completed=new Date().toISOString();report.version=(await command('status')).version;
fs.writeFileSync(path.join(root,'docs','acceptance-report.json'),JSON.stringify(report,null,2));
console.log(JSON.stringify(report,null,2));
