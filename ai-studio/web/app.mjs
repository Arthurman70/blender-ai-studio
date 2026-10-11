// SPDX-License-Identifier: GPL-3.0-or-later
import * as THREE from 'three';
import {OrbitControls} from './vendor/OrbitControls.js';
import {GLTFLoader} from './vendor/GLTFLoader.js';
const $=id=>document.getElementById(id);
let token=new URLSearchParams(location.hash.slice(1)).get('token')||sessionStorage.getItem('blenderToken')||'';
history.replaceState(null,'',location.pathname);$('token').value=token;
let selected=null, sceneData=null, busy=false, model=null;
const renderer=new THREE.WebGLRenderer({canvas:$('viewport'),antialias:true,alpha:true});
renderer.setPixelRatio(Math.min(devicePixelRatio,2));renderer.toneMapping=THREE.ACESFilmicToneMapping;
const world=new THREE.Scene(),camera=new THREE.PerspectiveCamera(42,1,.01,1000);
camera.position.set(11,-15,11);camera.up.set(0,0,1);
const controls=new OrbitControls(camera,renderer.domElement);controls.enableDamping=true;
world.add(new THREE.HemisphereLight(0xc5e8ff,0x605442,3));
const light=new THREE.DirectionalLight(0xffffff,3);light.position.set(4,-6,12);world.add(light);
const grid=new THREE.GridHelper(30,30,0x49605f,0x283a40);grid.rotation.x=Math.PI/2;world.add(grid);
const loader=new GLTFLoader();
new ResizeObserver(()=>{const el=$('stage');renderer.setSize(el.clientWidth,el.clientHeight,false);camera.aspect=el.clientWidth/el.clientHeight;camera.updateProjectionMatrix();}).observe($('stage'));
renderer.setAnimationLoop(()=>{controls.update();renderer.render(world,camera);});
function report(value){$('output').textContent=typeof value==='string'?value:JSON.stringify(value,null,2);}
async function api(route,body){const r=await fetch(route,{method:body===undefined?'GET':'POST',headers:{Authorization:'Bearer '+token,'Content-Type':'application/json'},body:body===undefined?undefined:JSON.stringify(body)});const d=await r.json();if(!r.ok)throw new Error(d.error);return d;}
async function command(method,params={}){const job=await api('/api/commands',{method,params});$('jobStatus').textContent=method+' · queued';const end=Date.now()+600000;while(Date.now()<end){const r=await api('/api/jobs/'+job.id);$('jobStatus').textContent=method+' · '+r.state;if(r.state==='error')throw new Error(r.error);if(r.state==='done')return r.result;await new Promise(resolve=>setTimeout(resolve,200));}throw new Error('Still pending: '+job.id+'. Poll with MCP or HTTP before retrying.');}
async function action(fn){if(busy)return;busy=true;document.querySelectorAll('button').forEach(b=>b.disabled=true);try{await fn();$('jobStatus').textContent='Complete';}catch(e){report(e.message);$('jobStatus').textContent='Error';}finally{busy=false;document.querySelectorAll('button').forEach(b=>b.disabled=false);}}
async function asset(name){const r=await fetch('/api/asset?path='+encodeURIComponent(name),{headers:{Authorization:'Bearer '+token}});if(!r.ok)throw new Error('Asset unavailable');return r;}
function dispose(object){object.traverse(o=>{o.geometry?.dispose();for(const m of (Array.isArray(o.material)?o.material:[o.material]))if(m){for(const v of Object.values(m))if(v?.isTexture)v.dispose();m.dispose();}});}
async function refresh(fit=false){sceneData=await command('scene');$('sceneName').textContent=sceneData.name+' · '+sceneData.objects.length+' objects';$('objects').replaceChildren();for(const obj of sceneData.objects){const b=document.createElement('button');b.className='object'+(selected===obj.name?' selected':'');const icon=document.createElement('span');icon.textContent=obj.type==='MESH'?'◇':obj.type==='LIGHT'?'☼':'○';b.append(icon,document.createTextNode(obj.name));b.onclick=()=>select(obj.name);$('objects').append(b);}if(selected)select(selected);const exp=await command('export',{path:'browser-preview.glb'});const data=await (await asset(exp.asset)).arrayBuffer();const gltf=await loader.parseAsync(data,'');if(model){world.remove(model);dispose(model);}model=gltf.scene;
// glTF is Y-up; Blender and the surrounding browser workspace are Z-up.
model.rotation.x=Math.PI/2;world.add(model);model.updateMatrixWorld(true);$('empty').hidden=sceneData.objects.length>0;
if(fit){const hero=gltf.cameras[0];if(hero){const pos=hero.getWorldPosition(new THREE.Vector3());const direction=hero.getWorldDirection(new THREE.Vector3());camera.position.copy(pos);controls.target.copy(pos).addScaledVector(direction,Math.max(pos.length(),1));if(hero.isOrthographicCamera){camera.position.copy(controls.target).addScaledVector(direction,-(hero.top-hero.bottom)/(2*Math.tan(THREE.MathUtils.degToRad(camera.fov/2))));}}else{const box=new THREE.Box3().setFromObject(model);const center=box.getCenter(new THREE.Vector3());const radius=Math.max(box.getSize(new THREE.Vector3()).length()*.6,2);controls.target.copy(center);camera.position.copy(center).add(new THREE.Vector3(1,-1.5,1).normalize().multiplyScalar(radius*1.8));}controls.update();}}
function select(name){const obj=sceneData.objects.find(o=>o.name===name);if(!obj){$('inspector').hidden=true;return;}selected=name;$('inspector').hidden=false;$('selectedName').textContent=name;$('fields').replaceChildren();for(const field of ['location','rotation','scale']){const label=document.createElement('label');label.textContent=field==='rotation'?'Rotation · radians':field[0].toUpperCase()+field.slice(1);const row=document.createElement('div');row.className='triple';obj[field].forEach((v,i)=>{const input=document.createElement('input');input.type='number';input.step='.1';input.value=Number(v.toFixed(4));input.id=field+i;input.setAttribute('aria-label',field+' '+'XYZ'[i]);row.append(input);});$('fields').append(label,row);}document.querySelectorAll('.object').forEach(b=>b.classList.toggle('selected',b.textContent.slice(1)===name));}
async function status(){if(!token)return;try{const s=await api('/api/status');$('status').textContent=s.ready?'● Blender connected':s.running?'Starting Blender…':'● Ready to launch';}catch{$('status').textContent='Token required';}}
$('connect').onclick=()=>{token=$('token').value.trim();sessionStorage.setItem('blenderToken',token);status();};
$('launch').onclick=()=>action(async()=>{await api('/api/launch',{desktop:$('mode').value==='desktop'});for(let i=0;i<100;i++){if((await api('/api/status')).ready){await refresh(true);await status();return;}await new Promise(r=>setTimeout(r,300));}throw new Error('Blender is still starting; check session log.');});
$('refresh').onclick=()=>action(()=>refresh());
$('apply').onclick=()=>action(async()=>{const params={name:selected};for(const key of ['location','rotation','scale'])params[key]=[0,1,2].map(i=>Number($(key+i).value));report(await command('transform',params));await refresh();});
$('run').onclick=()=>action(async()=>{report(await command('python',{code:$('code').value}));await refresh();});
$('code').onkeydown=e=>{if(e.ctrlKey&&e.key==='Enter')$('run').click();};
$('demo').onclick=()=>action(async()=>{const example=await api('/api/example');$('code').value=example.code;report(await command('python',example));await refresh(true);});
$('save').onclick=()=>action(async()=>report(await command('save',{path:'studio-scene.blend'})));
$('render').onclick=()=>action(async()=>{const r=await command('render',{path:'browser-render.png',width:1000,height:750});const blob=await (await asset(r.asset)).blob();const old=$('renderImage').src;$('renderImage').src=URL.createObjectURL(blob);if(old.startsWith('blob:'))URL.revokeObjectURL(old);$('viewRender').onclick();report(r);});
$('view3d').onclick=()=>{$('renderImage').hidden=true;$('view3d').classList.add('active');$('viewRender').classList.remove('active');};
$('viewRender').onclick=()=>{$('renderImage').hidden=false;$('viewRender').classList.add('active');$('view3d').classList.remove('active');};
$('codeTab').onclick=()=>{$('codePanel').hidden=false;$('toolsPanel').hidden=true;$('codeTab').classList.add('active');$('toolsTab').classList.remove('active');};
$('toolsTab').onclick=()=>{$('codePanel').hidden=true;$('toolsPanel').hidden=false;$('toolsTab').classList.add('active');$('codeTab').classList.remove('active');search();};
async function search(){await action(async()=>{const data=await command('catalog',{query:$('search').value,limit:80});$('toolCount').textContent=data.total+' matches · '+data.operator_count+' registered operators';$('tools').replaceChildren();for(const op of data.operators){const b=document.createElement('button');b.textContent=op.id;b.onclick=()=>{$('operator').value=op.id;$('signature').textContent=JSON.stringify(op,null,2);$('kwargs').value='{}';};$('tools').append(b);}});}
$('search').onkeydown=e=>{if(e.key==='Enter')search();};
$('runOperator').onclick=()=>action(async()=>{report(await command('operator',{id:$('operator').value,kwargs:JSON.parse($('kwargs').value),context:JSON.parse($('context').value)}));await refresh();});
sessionStorage.setItem('blenderToken',token);status();setInterval(status,5000);
if(token)api('/api/status').then(s=>{if(s.ready)action(()=>refresh(true));}).catch(()=>{});
