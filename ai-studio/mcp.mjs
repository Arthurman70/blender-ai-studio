// SPDX-License-Identifier: GPL-3.0-or-later
import readline from 'node:readline';
import {api,command} from './client.mjs';
const obj=properties=>({type:'object',properties,additionalProperties:false});
const tool=(name,description,properties,required=[])=>({name,description,inputSchema:{...obj(properties),required}});
const string={type:'string'},object={type:'object'},integer={type:'integer'};
const tools=[
  tool('blender_launch','Launch a local Blender session; desktop enables editor-dependent tools.',{desktop:{type:'boolean'}}),
  tool('blender_status','Check launcher readiness and process state.',{}),
  tool('blender_scene','Inspect objects, transforms, materials, mesh counts, frame and UI context.',{}),
  tool('blender_catalog','Discover live operator signatures. Search, then use blender_command operator.',{query:string,offset:integer,limit:integer}),
  tool('blender_python','Execute trusted Python with full bpy access. Set result for structured output. Full local user privileges; no sandbox.',{code:string},['code']),
  tool('blender_command','Run an operator, inspect RNA types, get/set data paths, transform, frame, save/open, render, export GLB or batch. See API.md.',{method:{type:'string',enum:['status','scene','catalog','type','operator','python','get','set','transform','frame','save','open','render','export','batch']},params:object},['method']),
  tool('blender_job','Poll a job after a wait timeout; do not blindly retry a mutation.',{id:string},['id'])
];
async function handle(req) {
  if(req.method==='initialize') return {protocolVersion:'2024-11-05',capabilities:{tools:{}},serverInfo:{name:'blender-ai-studio',version:'0.1.0'}};
  if(req.method==='ping') return {};
  if(req.method==='tools/list') return {tools};
  if(req.method==='tools/call') {
    const {name,arguments:a={}}=req.params;
    try {
      let result;
      if(name==='blender_launch')result=await api('/api/launch',a);
      else if(name==='blender_status')result=await api('/api/status');
      else if(name==='blender_job')result=await api('/api/jobs/'+encodeURIComponent(a.id));
      else if(name==='blender_command')result=await command(a.method,a.params||{});
      else if(['blender_scene','blender_catalog','blender_python'].includes(name))result=await command(name.slice(8),a);
      else throw new Error('Unknown tool');
      return {content:[{type:'text',text:JSON.stringify(result)}]};
    } catch(e) {return {isError:true,content:[{type:'text',text:e.message}]};}
  }
  throw Object.assign(new Error('Method not found'),{code:-32601});
}
const lines=readline.createInterface({input:process.stdin,crlfDelay:Infinity});
for await(const line of lines) {
  let req;
  try {req=JSON.parse(line);}catch {process.stdout.write(JSON.stringify({jsonrpc:'2.0',id:null,error:{code:-32700,message:'Parse error'}})+'\n');continue;}
  if(req.id===undefined)continue;
  try {process.stdout.write(JSON.stringify({jsonrpc:'2.0',id:req.id,result:await handle(req)})+'\n');}
  catch(e){process.stdout.write(JSON.stringify({jsonrpc:'2.0',id:req.id,error:{code:e.code||-32603,message:e.message}})+'\n');}
}
