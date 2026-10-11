# Blender capability and integration analysis

Baseline: Blender 4.5.3 LTS, official commit `67807e1800cc`. Analysis combines the
source tree, Blender's documented automation model, runtime RNA inspection and
targeted execution. It is an architectural and API inventory, not a line-by-line
audit of Blender or an exhaustive execution test of every tool.

## Why this hook covers broad functionality

Blender separates datablocks (`bpy.data`), editor state (`bpy.context`), actions
(`bpy.ops`), registered type metadata (RNA), and dependency-graph evaluation.
Hardcoding a small list of primitives would miss most capabilities. This fork
exposes all of those surfaces, plus arbitrary trusted Python for functions that
cannot be described as a single operator. Operators implemented in C++, Python
and macros share this entry point. Poll checks protect against invalid contexts;
they do not prove that an operation is appropriate for a particular scene.

The inventory contains every operator successfully registered in the baseline
runtime: **2,397**, with no introspection errors, plus **3,766 RNA types**.
Operator defaults with dynamic enum callbacks can be empty outside their UI
context. A discovered operator may need selection, a specific object mode, a
visible editor, a cache, an asset or an optional dependency before it can run.

## Subsystems

| Capability | Tools and data | Automation path and limitations | Source anchors |
|---|---|---|---|
| Object/scene management | collections, parenting, transforms, duplication, constraints, visibility, scenes, view layers | `bpy.data`, `object`, `collection`, `scene`, dependency graph; shared context and undo require care | `editors/object`, `blenkernel`, `depsgraph` |
| Mesh modeling | primitives, extrude, inset, bevel, bridge, loop cuts, merge, dissolve, normals, attributes, boolean editing | `mesh`, `transform`, `bmesh`; edit-mode selection differs from object mode | `editors/mesh`, `bmesh`, `geometry` |
| Modifiers | subdivision, bevel, boolean, array, mirror, remesh, shrinkwrap, deform, weld, weighted normals | RNA modifier stack; dependency graph exposes evaluated output; costs grow with topology | `modifiers` |
| Curves/surfaces/text | Bezier/NURBS, handles, paths, surface editing, bevel, extrusion, font geometry | `curve`, `curves`, `font`, datablocks; conversion loses parametric data | `editors/curve`, `editors/curves`, `blenfont` |
| Sculpting | brushes, masks, face sets, dynamic topology, remesh, sculpt transforms, multires | `sculpt`, paint data, tool settings; stroke operators often require a VIEW_3D region and samples | `editors/sculpt_paint` |
| Painting | texture, vertex, weight and image paint; brushes, palettes and stencil settings | `paint`, image pixels, color attributes, vertex groups; interactive strokes are context-sensitive | `editors/sculpt_paint`, `editors/space_image` |
| UV editing | unwrap, seams, pin, packing, projection, stitch, alignment and selection | `uv`, mesh loop UV data; correct edit mode and face selection are necessary | `editors/uvedit` |
| Geometry Nodes | procedural geometry, fields, instancing, attributes, simulation/repeat zones | create node groups, sockets, nodes, links and modifiers via RNA/Python; inspect evaluated geometry | `nodes/geometry`, `functions`, `geometry` |
| Shading | materials, PBR inputs, shader nodes, textures, displacement, world shaders | node trees and sockets; render output is authoritative, GLB supports only a subset | `nodes/shader`, `gpu`, `draw` |
| Rigging | armatures, edit/pose bones, skin weights, constraints, IK, bone collections | `armature`, `pose`, vertex groups and constraints; bones require correct modes | `editors/armature`, `animrig`, `ikplugin` |
| Animation | keyframes, F-curves, interpolation, actions, NLA, drivers, shape keys | `anim`, `action`, `graph`, `nla`, RNA keyframe and driver methods; evaluation at requested frames | `editors/animation`, `animrig`, `editors/space_graph`, `editors/space_nla` |
| Physics | rigid/soft bodies, cloth, collision, fluid/smoke, particles, force fields and caches | `rigidbody`, `fluid`, `ptcache`, modifiers and physics settings; simulations need bake time, files and frame order | `editors/physics`, `simulation`, `intern/mantaflow`, `intern/rigidbody` |
| Hair/particles | curves-based grooming, legacy particles, emission and point data | curves and particle datablocks/operators; some legacy functions depend on retained subsystems | `editors/curves`, `editors/pointcloud`, `blenkernel` |
| Grease Pencil | drawing, stroke/layer editing, fills, materials, modifiers and animation | `grease_pencil`, drawing data, paint/sculpt operators; API differs from earlier GP versions | `editors/grease_pencil`, `shader_fx` |
| Rendering | Cycles, Eevee, Workbench, cameras, lights, passes, color management and baking | `render`, scene settings and Python; GPU/backend availability is machine-specific | `render`, `draw`, `intern/cycles` |
| Compositing | render layers, masks, color operations, glare, transforms, output nodes | compositor node trees and `render`; viewport preview does not reproduce compositor | `compositor`, `nodes/composite` |
| Tracking/masking | footage, tracks, camera/object solve, stabilization, mask curves | `clip`, `mask` and movie-clip data; needs source footage and editor context | `editors/space_clip`, `editors/mask`, `intern/libmv` |
| Video/audio | sequencer strips, cuts, transitions, effects, timing, mixing and export | `sequencer`, scene sequence data, render settings; codecs and media files vary | `sequencer`, `editors/space_sequencer`, `intern/audaspace` |
| Assets/files/interchange | blend libraries, link/append, asset browser, glTF, USD, Alembic, OBJ/STL and other installed formats | native `wm`, `import_scene`, `export_scene` and Python; inspect inventory for installed formats | `io`, `asset_system`, `blenloader`, `scripts/addons_core` |
| UI/workspaces/tools | windows, editor areas, active tools, gizmos, menus, shortcuts, text and console | `screen`, `wm`, `workspace`, `view3d`, context overrides; desktop session required for many actions | `windowmanager`, `editors/interface`, `editors/screen`, `editors/space_view3d` |
| Extensions/preferences | add-on enable/disable, preferences, registered operators and panels | Python/operator access; refresh inventory after registration; third-party code is independently trusted | `scripts/modules`, `scripts/addons_core`, `editors/space_userpref` |

Source anchors above are relative to `source/blender`, except paths beginning
with `intern` or `scripts`, which are relative to the repository root.

## DingCAD relationship

The local DingCAD Studio design provided the workflow reference: one native
scene, several clients, scene code editable as text, measured feedback, and a
browser preview. This implementation preserves Blender's engine and datablocks,
using Python in place of DingCAD's JavaScript/Manifold evaluator. It does not
reuse DingCAD's modeling kernel, scene language, VR application or exporters.
Blender offers a much broader art pipeline, while exact CAD solids and mechanical
constraints are a different problem from Blender's primarily mesh-based workflows.

## Tested versus available

Executed and asserted: command discovery; operator mesh creation; safe data-path
parsing; transform edits; invalid-context and Python-error recovery; a procedural
76-object scene; a Geometry Nodes transform; bevel stack presence/evaluation in
the scene; keyframe changes; `.blend` round trip; GLB export; PNG/Cycles render;
MCP transport; desktop viewport operator; persistent timer after desktop file reload.
HTTP tests verify tokens, origin/host rejection, JSON requirements and traversal.

The observatory includes procedural shaders, area lights, text and a compositor
glow chain; those are visible in its rendered output. It is not a simulation,
rigging, sculpting, tracking, video-editing or extension certification suite.
The native C++ executable used for testing is the official binary. This release
does not claim a fresh C++ build, all-platform compatibility, unrestricted remote
desktop mouse control, real-time video streaming, or exhaustive correctness of
all 2,397 operators. The generic interfaces make those additional workflows
accessible, but they need their own context/data and acceptance tests.

## Primary references

- [Official Blender source mirror](https://github.com/blender/blender/tree/v4.5.3)
- [Blender 4.5 manual](https://docs.blender.org/manual/en/4.5/)
- [Blender 4.5 Python API](https://docs.blender.org/api/4.5/)
- [Operators and overrides](https://docs.blender.org/api/4.5/bpy.ops.html)
- [Context](https://docs.blender.org/api/4.5/bpy.types.Context.html)
- [Threading limitations](https://docs.blender.org/api/4.5/info_gotchas_threading.html)
- [Application timers](https://docs.blender.org/api/4.5/bpy.app.timers.html)
- [Source build instructions](https://developer.blender.org/docs/handbook/building_blender/)
