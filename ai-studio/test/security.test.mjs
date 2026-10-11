// SPDX-License-Identifier: GPL-3.0-or-later
import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import http from 'node:http';
import {createStudio,inside} from '../server.mjs';

test('loopback service rejects unauthorized, foreign-origin and malformed requests',async()=>{
  const base=fs.mkdtempSync(path.join(os.tmpdir(),'blender-ai-test-'));
  const studio=createStudio({base,blender:path.join(base,'missing.exe')});
  const s=await studio.start();
  try {
    assert.equal((await fetch(s.url+'/api/status')).status,401);
    const headers={Authorization:'Bearer '+s.token};
    assert.equal((await fetch(s.url+'/api/status',{headers})).status,200);
    assert.equal((await fetch(s.url+'/api/status',{headers:{...headers,Origin:'https://evil.example'}})).status,403);
    const hostStatus=await new Promise((resolve,reject)=>{http.get(s.url+'/api/status',{headers:{...headers,Host:'evil.example'}},res=>{res.resume();resolve(res.statusCode);}).on('error',reject);});
    assert.equal(hostStatus,403);
    assert.equal((await fetch(s.url+'/api/commands',{method:'POST',headers,body:'{}'})).status,415);
    assert.equal((await fetch(s.url+'/api/commands',{method:'POST',headers:{...headers,'Content-Type':'application/json'},body:'{bad'})).status,400);
    assert.equal((await fetch(s.url+'/api/commands',{method:'POST',headers:{...headers,'Content-Type':'application/json'},body:JSON.stringify({method:'scene'})})).status,400);
    assert.equal((await fetch(s.url+'/api/asset?path=../../session.json',{headers})).status,400);
    assert.equal((await fetch(s.url+'/api/jobs/unknown',{headers})).status,404);
    assert.throws(()=>inside(studio.workspace,'../session.json'));
    assert.throws(()=>studio.launch(),/executable not found/);
    const html=await(await fetch(s.url)).text();assert.match(html,/AI STUDIO/);assert.ok(!html.includes(s.token));
  }finally{await studio.close();fs.rmSync(base,{recursive:true,force:true});}
});
