// SPDX-License-Identifier: GPL-3.0-or-later
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
export const sessionPath = process.env.BLENDER_AI_SESSION || path.join(path.dirname(fileURLToPath(import.meta.url)),'.runtime','session.json');
export function readSession() {return JSON.parse(fs.readFileSync(sessionPath,'utf8'));}
export async function api(route,body,session=readSession()) {
  const response=await fetch(session.url+route,{method:body===undefined?'GET':'POST',headers:{Authorization:'Bearer '+session.token,'Content-Type':'application/json'},body:body===undefined?undefined:JSON.stringify(body)});
  const data=await response.json();if(!response.ok) throw new Error(data.error);return data;
}
export async function command(method,params={},session=readSession(),timeout=300000) {
  const job=await api('/api/commands',{method,params},session);
  const end=Date.now()+timeout;
  while(Date.now()<end) {
    const state=await api('/api/jobs/'+job.id,undefined,session);
    if(state.state==='error') throw Object.assign(new Error(state.error),{job:state});
    if(state.state==='done') return state.result;
    await new Promise(resolve=>setTimeout(resolve,150));
  }
  throw new Error(`Wait timed out. Job ${job.id} may still be running; poll it before retrying.`);
}
if(process.argv[1] && path.resolve(process.argv[1])===fileURLToPath(import.meta.url)) {
  const [method='status',json='{}']=process.argv.slice(2);
  console.log(JSON.stringify(method==='launch'?await api('/api/launch',JSON.parse(json)):await command(method,JSON.parse(json)),null,2));
}
