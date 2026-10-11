// SPDX-License-Identifier: GPL-3.0-or-later
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import {spawn} from 'node:child_process';
import {fileURLToPath} from 'node:url';

export const ROOT = path.dirname(fileURLToPath(import.meta.url));
export const METHODS = ['status','scene','catalog','type','operator','python','get','set','transform','frame','save','open','render','export','batch'];
const MIME = {'.html':'text/html', '.mjs':'text/javascript', '.js':'text/javascript', '.css':'text/css', '.png':'image/png', '.glb':'model/gltf-binary', '.blend':'application/octet-stream', '.json':'application/json'};

export function inside(root, name) {
  const target = path.resolve(root, name);
  const rel = path.relative(root, target);
  if (rel.startsWith('..') || path.isAbsolute(rel)) throw new Error('Path is outside workspace');
  if (fs.existsSync(target)) {
    const real = fs.realpathSync(target);
    const realRel = path.relative(fs.realpathSync(root), real);
    if (realRel.startsWith('..') || path.isAbsolute(realRel)) throw new Error('Symlink is outside workspace');
  }
  return target;
}

export function createStudio(options = {}) {
  const base = options.base || path.join(ROOT, '.runtime');
  const runtime = path.join(base, crypto.randomUUID());
  const workspace = path.resolve(options.workspace || path.join(base, 'workspace'));
  const token = crypto.randomBytes(32).toString('hex');
  for (const p of ['inbox','outbox']) fs.mkdirSync(path.join(runtime,p),{recursive:true,mode:0o700});
  fs.mkdirSync(workspace,{recursive:true});
  const jobs = new Map();
  let child = null, sequence = 0, session = null, closing = false, exitInfo = null;
  const executable = options.blender || process.env.BLENDER_BIN || path.resolve(ROOT,'../../blender-runtime/blender-4.5.3-windows-x64/blender.exe');
  function read(file) { try {return JSON.parse(fs.readFileSync(file,'utf8'));} catch {return null;} }
  function status() {
    return {running:!!child, ready:!!child && !!read(path.join(runtime,'ready.json')),
      blender:child ? read(path.join(runtime,'ready.json')) : null, exit:exitInfo, workspace,
      jobs:jobs.size, methods:METHODS};
  }
  function launch(desktop=false) {
    if(child) return status();
    if(!fs.existsSync(executable)) throw new Error('Blender executable not found. Set BLENDER_BIN or --blender.');
    fs.rmSync(path.join(runtime,'ready.json'),{force:true});
    const args = ['--factory-startup','--disable-autoexec'];
    if(!desktop) args.push('--background');
    args.push('--python',path.join(ROOT,'bootstrap.py'));
    const log = fs.openSync(path.join(runtime,'blender.log'),'a');
    child = spawn(executable,args,{env:{...process.env,BLENDER_AI_RUNTIME:runtime,BLENDER_AI_WORKSPACE:workspace},
      windowsHide:!desktop,stdio:['ignore',log,log]});
    fs.closeSync(log);
    const finish = (code,signal,error) => {
      child = null; exitInfo = {code,signal,error};
      for(const [id,j] of jobs) {
        const response=read(path.join(runtime,'outbox',j.file));
        if(!response || response.state==='running') {
          fs.rmSync(path.join(runtime,'inbox',j.file),{force:true});
          fs.writeFileSync(path.join(runtime,'outbox',j.file),JSON.stringify({id,state:'error',error:'Blender exited; in-flight changes may have been applied'}));
        }
      }
    };
    child.once('error',e=>finish(null,null,e.message));
    child.once('exit',(code,signal)=>finish(code,signal,null));
    return status();
  }
  function jobState(id) {
    const job = jobs.get(id);
    if(!job) return null;
    return read(path.join(runtime,'outbox',job.file)) || read(path.join(runtime,'outbox',job.file.replace('.json','.running.json'))) || {id,state:'queued'};
  }
  function enqueue(command) {
    if(!status().ready) throw new Error('Launch Blender and wait until ready');
    if(!command || !METHODS.includes(command.method)) throw new Error('Unknown method');
    const active = [...jobs.keys()].filter(id=>['queued','running'].includes(jobState(id).state));
    if(active.length>=100) throw new Error('Queue is full');
    // Keep finished records bounded. In-flight commands are never expired or retried.
    if(jobs.size>=1000) {
      const old = [...jobs.keys()].find(id=>!active.includes(id));
      if(old) {fs.rmSync(path.join(runtime,'outbox',jobs.get(old).file),{force:true}); jobs.delete(old);}
    }
    const id=crypto.randomUUID();
    const file=String(++sequence).padStart(10,'0')+'-'+id+'.json';
    const temp=path.join(runtime,'inbox',file+'.tmp');
    fs.writeFileSync(temp,JSON.stringify({id,method:command.method,params:command.params||{}}));
    jobs.set(id,{file,method:command.method});
    fs.renameSync(temp,path.join(runtime,'inbox',file));
    // Audit deliberately excludes Python source, tokens and user data.
    fs.appendFileSync(path.join(runtime,'audit.jsonl'),JSON.stringify({at:new Date().toISOString(),id,method:command.method})+'\n');
    return {id,state:'queued'};
  }
  const server=http.createServer(async(req,res)=>{
    const send=(code,value)=>{res.writeHead(code,{'Content-Type':'application/json','Cache-Control':'no-store'});res.end(JSON.stringify(value));};
    try {
      const port=server.address().port;
      const allowedHosts=new Set([`127.0.0.1:${port}`,`localhost:${port}`]);
      if(!allowedHosts.has(req.headers.host)) return send(403,{error:'Host rejected'});
      if(req.headers.origin && ![...allowedHosts].map(h=>'http://'+h).includes(req.headers.origin)) return send(403,{error:'Origin rejected'});
      const url=new URL(req.url,'http://127.0.0.1');
      res.setHeader('X-Content-Type-Options','nosniff');
      res.setHeader('Referrer-Policy','no-referrer');
      res.setHeader('X-Frame-Options','DENY');
      if(url.pathname.startsWith('/api/')) {
        const supplied=Buffer.from(req.headers.authorization||'');
        const expected=Buffer.from('Bearer '+token);
        if(supplied.length!==expected.length || !crypto.timingSafeEqual(supplied,expected)) return send(401,{error:'Session token required'});
        if(req.method==='GET' && url.pathname==='/api/status') return send(200,status());
        if(req.method==='GET' && url.pathname==='/api/example') return send(200,{code:fs.readFileSync(path.join(ROOT,'examples','observatory.py'),'utf8')});
        if(req.method==='GET' && url.pathname.startsWith('/api/jobs/')) {
          const job=jobState(url.pathname.split('/').pop());
          return send(job?200:404,job||{error:'Unknown or expired job'});
        }
        if(req.method==='GET' && url.pathname==='/api/asset') {
          const file=inside(workspace,url.searchParams.get('path')||'');
          const ext=path.extname(file);
          if(!['.png','.glb','.blend','.json'].includes(ext) || !fs.statSync(file).isFile()) return send(404,{error:'Asset not found'});
          res.writeHead(200,{'Content-Type':MIME[ext],'Cache-Control':'no-store'});
          fs.createReadStream(file).pipe(res); return;
        }
        if(req.method!=='POST') return send(404,{error:'Not found'});
        if(!(req.headers['content-type']||'').startsWith('application/json')) return send(415,{error:'JSON required'});
        const chunks=[];let length=0;
        for await(const chunk of req) {length+=chunk.length;if(length>2*1024*1024) {send(413,{error:'Request too large'});return;}chunks.push(chunk);}
        const body=Buffer.concat(chunks).toString('utf8');
        let data;
        try {data=JSON.parse(body||'{}');} catch{return send(400,{error:'Invalid JSON'});}
        if(url.pathname==='/api/launch') return send(200,launch(data.desktop===true));
        if(url.pathname==='/api/commands') return send(202,enqueue(data));
        return send(404,{error:'Not found'});
      }
      if(req.method!=='GET') return send(405,{error:'GET required'});
      const filename=url.pathname==='/'?'index.html':decodeURIComponent(url.pathname.slice(1));
      const file=inside(path.join(ROOT,'web'),filename);
      if(!fs.existsSync(file)||!fs.statSync(file).isFile()) return send(404,{error:'Not found'});
      res.writeHead(200,{'Content-Type':MIME[path.extname(file)]||'application/octet-stream'});
      fs.createReadStream(file).pipe(res);
    } catch(e) { if(!res.headersSent) send(400,{error:e.message});else res.destroy(); }
  });
  server.requestTimeout=15000;
  server.headersTimeout=10000;
  return {
    runtime,workspace,token,server,launch,enqueue,jobState,status,
    async start(port=0) {
      await new Promise((resolve,reject)=>{server.once('error',reject);server.listen(port,'127.0.0.1',resolve);});
      session={url:`http://127.0.0.1:${server.address().port}`,token,workspace,runtime,pid:process.pid};
      fs.writeFileSync(options.session||path.join(base,'session.json'),JSON.stringify(session,null,2),{mode:0o600});
      return session;
    },
    async close() {
      if(closing)return;closing=true;
      if(child) {const running=child; await new Promise(resolve=>{running.once('exit',resolve);running.kill();setTimeout(resolve,3000).unref();});}
      server.closeAllConnections();
      await new Promise(resolve=>server.close(resolve));
    }
  };
}

if(process.argv[1] && path.resolve(process.argv[1])===fileURLToPath(import.meta.url)) {
  const arg=name=>{const i=process.argv.indexOf(name);return i<0?undefined:process.argv[i+1];};
  const studio=createStudio({blender:arg('--blender'),workspace:arg('--workspace'),session:arg('--session')});
  const session=await studio.start(Number(arg('--port')||8765));
  console.log(`AI Studio: ${session.url}\nSession credentials: ${path.join(ROOT,'.runtime','session.json')}`);
  if(process.argv.includes('--start')) studio.launch(process.argv.includes('--desktop'));
  for(const signal of ['SIGINT','SIGTERM']) process.on(signal,async()=>{await studio.close();process.exit(0);});
}
