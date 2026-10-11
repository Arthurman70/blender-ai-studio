// SPDX-License-Identifier: GPL-3.0-or-later
import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import {createStudio,ROOT} from '../server.mjs';
import {api,command} from '../client.mjs';
const studio=createStudio({base:path.join(ROOT,'.runtime','desktop-check')});
const s=await studio.start();
try {
  studio.launch(true);
  for(let i=0;i<100 && !(await api('/api/status',undefined,s)).ready;i++)await new Promise(r=>setTimeout(r,200));
  const status=await command('status',{},s);
  assert.equal(status.context.background,false);
  assert.ok(status.context.windows[0].areas.some(a=>a.type==='VIEW_3D'));
  await command('operator',{id:'mesh.primitive_cube_add',kwargs:{size:1}},s);
  const view=await command('operator',{id:'view3d.view_all',context:{area:'VIEW_3D'}},s);
  assert.equal(view.finished,true);
  await command('save',{path:'desktop-check.blend'},s);
  await command('open',{path:'desktop-check.blend'},s);
  assert.equal((await command('status',{},s)).context.background,false);
  const result={passed:true,version:status.version,checks:['desktop launch','main-thread timer commands','VIEW_3D context override','save and reload preserves timer']};
  fs.writeFileSync(path.join(ROOT,'docs','desktop-report.json'),JSON.stringify(result,null,2));
  console.log(JSON.stringify(result,null,2));
}finally{await studio.close();}
