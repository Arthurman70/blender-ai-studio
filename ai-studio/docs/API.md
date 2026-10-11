# AI control API

Every `/api/` route requires `Authorization: Bearer TOKEN`. JSON POSTs require
`Content-Type: application/json`. The server accepts only its loopback Host and
same-origin browser requests. Token and URL are in `.runtime/session.json`.

| Route | Method | Result |
|---|---|---|
| `/api/status` | GET | Process state, readiness, workspace and supported commands |
| `/api/launch` | POST | Start Blender; body `{"desktop": false}`; existing session is reused |
| `/api/commands` | POST | Enqueue `{"method":"scene","params":{}}`; returns job ID |
| `/api/jobs/ID` | GET | queued/running/done/error; result or traceback when finished |
| `/api/asset?path=NAME` | GET | Workspace PNG, GLB, BLEND or JSON bytes |
| `/api/example` | GET | Included observatory Python source |

Only one command runs at a time. Long renders block later commands. Polling a
job remains responsive because HTTP runs outside Blender. There is no safe
general cancellation of arbitrary Python. Save before long or destructive work.
The last 1,000 job records are retained in the server's memory; completed jobs
may be evicted. Session restart does not restore the prior command registry.

## Commands

| Method | Parameters | Behavior |
|---|---|---|
| `status` | `{}` | Version, process, mode, windows, editor areas and selection |
| `scene` | `{}` | Scene, frame, objects, local transforms, dimensions, base mesh counts, modifiers, material names |
| `catalog` | `query`, `offset`, `limit` (1–200), `refresh`, `full` | Live RNA-derived operator descriptions and parameter schemas; full includes type inventory |
| `type` | `name` | Detailed properties, functions and parameters of a `bpy.types` RNA type |
| `operator` | `id`, `kwargs`, `context`, `execution`, `poll_only` | Generic `bpy.ops` call with poll check; returns native status and finished flag |
| `python` | `code` | Full Python execution with `bpy`, `workspace`; set `result`; returns JSON and captured output |
| `get` | `path` | Read a literal data path, such as `bpy.data.objects["Cube"].location` |
| `set` | `path`, `value` | Assign a JSON-compatible value to a property or indexed item |
| `transform` | `name`, optional `location`, `rotation`, `scale` | Set local transform; rotation is Euler radians |
| `frame` | `frame` | Evaluate scene at a frame |
| `save` | `path` (default `scene.blend`) | Save to workspace; replaces an existing named file |
| `open` | `path` | Reopen a workspace file without loading its UI or autorunning scripts |
| `render` | `path`, optional `width`, `height` (64–4096) | Render camera to PNG with current engine; changes scene render settings |
| `export` | `path`, `animations` | Export evaluated geometry as GLB |
| `batch` | `commands` | Execute commands in order; stops on error without rolling back prior edits |

Paths for save/open/render/export resolve relative to the workspace. Python can
use absolute paths and Blender's native import/export operators for other formats.
The `get` and `set` parser accepts only `bpy` attribute paths and literal indices,
not calls or expressions. It is an ergonomic interface, not the security boundary
of a session that also exposes Python.

```json
{"method":"operator","params":{"id":"mesh.primitive_cube_add","kwargs":{"size":2,"location":[0,0,1]}}}
```

```json
{"method":"operator","params":{"id":"view3d.view_all","context":{"area":"VIEW_3D","window":0},"poll_only":true}}
```

Supported context fields are `window` (index), `area` (editor type),
`active_object` (name), `selected_objects` (names). The override does not
permanently change selection or object mode. Use `bpy` or the corresponding
operators when persistent changes are needed. `EXEC_DEFAULT` is the default
execution context. `INVOKE_DEFAULT` can start a modal interaction; a
`RUNNING_MODAL` status does **not** mean the edit is complete. UI input sequences
are not emulated by this bridge.

```json
{"method":"python","params":{"code":"import bpy\nobj = bpy.data.objects['Cube']\nobj.modifiers.new('Rounded edges', 'BEVEL').width = 0.1\nresult = {'dimensions': list(obj.dimensions)}"}}
```

Python variables persist between calls, but are cleared by the convenience
`open` command to avoid holding invalid wrappers after a file reload. Prefer
looking up objects by name on each call. Do not keep evaluated mesh references
across dependency-graph updates.

## JavaScript client

```js
import {api, command} from './ai-studio/client.mjs';
await api('/api/launch', {desktop: false});
// Poll /api/status until ready, then:
const operators = await command('catalog', {query: 'bevel'});
const scene = await command('scene');
const render = await command('render', {path:'preview.png'});
```

## Adding capabilities

An installed extension's operators appear after `catalog` with `refresh:true`.
For operations without an operator, use RNA or Python: shader/geometry nodes,
custom mesh construction with `bmesh`, animation curves, drivers, armatures,
image pixels, sequencer data and evaluated dependency graphs are all available.
Use the versioned [Blender API](https://docs.blender.org/api/4.5/) for exact behavior.
