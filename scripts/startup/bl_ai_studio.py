# SPDX-License-Identifier: GPL-3.0-or-later
"""AI Studio: a main-thread command bridge. No networking or worker threads in Blender."""
import ast
import contextlib
import io
import json
import os
from pathlib import Path
import time
import traceback

import bpy

_runtime = None
_workspace = None
_catalog = None
_namespace = {}


def plain(value, depth=0):
    if value is None or isinstance(value, (str, bool, int, float)):
        return value
    if depth > 5:
        return repr(value)
    if isinstance(value, dict):
        return {str(k): plain(v, depth + 1) for k, v in value.items()}
    if hasattr(value, "bl_rna"):
        return {"type": value.bl_rna.identifier, "name": getattr(value, "name", None)}
    try:
        return [plain(v, depth + 1) for v in value]
    except TypeError:
        return repr(value)


def atomic_json(path, value):
    temp = path.with_suffix(".tmp")
    temp.write_text(json.dumps(value, ensure_ascii=False), encoding="utf-8")
    # Windows antivirus/indexers may briefly hold a file without delete sharing.
    for attempt in range(40):
        try:
            temp.replace(path)
            return
        except PermissionError:
            if attempt == 39:
                raise
            time.sleep(0.01)


def asset_path(name):
    path = (_workspace / name).resolve()
    if not path.is_relative_to(_workspace):
        raise ValueError("File must be inside the session workspace")
    path.parent.mkdir(parents=True, exist_ok=True)
    return path


def property_info(prop):
    result = {"id": prop.identifier, "name": prop.name, "description": prop.description,
              "type": prop.type, "readonly": prop.is_readonly,
              "array_length": getattr(prop, "array_length", 0)}
    if hasattr(prop, "default"):
        result["default"] = plain(prop.default_array if getattr(prop, "is_array", False) else prop.default)
    if prop.type == 'ENUM':
        result["enum"] = [{"id": e.identifier, "name": e.name, "description": e.description}
                          for e in prop.enum_items]
    if prop.type in {'INT', 'FLOAT'}:
        result.update(min=prop.hard_min, max=prop.hard_max)
    if prop.type in {'POINTER', 'COLLECTION'} and prop.fixed_type:
        result["target_type"] = prop.fixed_type.identifier
    return result


def catalog(refresh=False):
    global _catalog
    if _catalog is None or refresh:
        operators = []
        errors = []
        for category in dir(bpy.ops):
            module = getattr(bpy.ops, category)
            for name in dir(module):
                op_id = category + "." + name
                try:
                    rna = getattr(module, name).get_rna_type()
                    operators.append({"id": op_id, "name": rna.name, "description": rna.description,
                                      "properties": [property_info(p) for p in rna.properties if p.identifier != "rna_type"]})
                except Exception as exc:
                    errors.append({"id": op_id, "error": str(exc)})
        types = []
        for name in dir(bpy.types):
            typ = getattr(bpy.types, name)
            if hasattr(typ, "bl_rna"):
                types.append({"id": name, "description": typ.bl_rna.description,
                              "properties": len(typ.bl_rna.properties), "functions": len(typ.bl_rna.functions)})
        _catalog = {"blender": bpy.app.version_string, "operators": operators, "types": types,
                    "errors": errors, "operator_count": len(operators), "type_count": len(types)}
    return _catalog


def context_info():
    return {"background": bpy.app.background, "mode": bpy.context.mode,
            "active_object": getattr(bpy.context.view_layer.objects.active, "name", None),
            "selected": [o.name for o in bpy.context.view_layer.objects if o.select_get()],
            "windows": [{"index": i, "areas": [{"index": j, "type": a.type}
                         for j, a in enumerate(w.screen.areas)]}
                        for i, w in enumerate(bpy.context.window_manager.windows)]}


def scene_info():
    bpy.context.view_layer.update()
    scene = bpy.context.scene
    return {"name": scene.name, "filepath": bpy.data.filepath, "frame": scene.frame_current,
            "frame_start": scene.frame_start, "frame_end": scene.frame_end,
            "camera": getattr(scene.camera, "name", None), "context": context_info(),
            "objects": [{"name": o.name, "type": o.type, "location": list(o.location),
                         "rotation": list(o.rotation_euler), "scale": list(o.scale),
                         "dimensions": list(o.dimensions), "visible": o.visible_get(),
                         "vertices": len(o.data.vertices) if o.type == 'MESH' else None,
                         "modifiers": [{"name": m.name, "type": m.type} for m in o.modifiers],
                         "materials": [s.material.name if s.material else None for s in o.material_slots]}
                        for o in scene.objects]}


def resolve(node):
    """Resolve a data path, never evaluate calls or arbitrary expressions."""
    if isinstance(node, ast.Name) and node.id == "bpy":
        return bpy
    if isinstance(node, ast.Attribute) and not node.attr.startswith("_"):
        return getattr(resolve(node.value), node.attr)
    if isinstance(node, ast.Subscript):
        return resolve(node.value)[ast.literal_eval(node.slice)]
    raise ValueError("Use a bpy data path with attributes and literal indices only")


@contextlib.contextmanager
def override(spec):
    kw = {}
    if spec.get("area") or "window" in spec:
        windows = bpy.context.window_manager.windows
        if not windows:
            raise ValueError("This operation needs a desktop Blender session")
        window = windows[int(spec.get("window", 0))]
        kw["window"] = window
        if spec.get("area"):
            area = next((a for a in window.screen.areas if a.type == spec["area"]), None)
            if not area:
                raise ValueError("Requested editor is not open: " + spec["area"])
            kw.update(area=area)
            region = next((r for r in area.regions if r.type == 'WINDOW'), None)
            if region:
                kw["region"] = region
    if "active_object" in spec:
        obj = bpy.data.objects[spec["active_object"]]
        kw.update(active_object=obj, object=obj)
    if "selected_objects" in spec:
        kw["selected_objects"] = [bpy.data.objects[n] for n in spec["selected_objects"]]
    with bpy.context.temp_override(**kw):
        yield


def dispatch(command):
    method = command["method"]
    p = command.get("params", {})
    if method == "status":
        return {"version": bpy.app.version_string, "pid": os.getpid(), "context": context_info()}
    if method == "scene":
        return scene_info()
    if method == "catalog":
        c = catalog(p.get("refresh", False))
        if p.get("full"):
            return c
        q = p.get("query", "").lower()
        matches = [op for op in c["operators"] if q in (op["id"] + " " + op["description"]).lower()]
        offset = max(0, int(p.get("offset", 0)))
        limit = max(1, min(200, int(p.get("limit", 50))))
        return {"total": len(matches), "operator_count": c["operator_count"], "type_count": c["type_count"],
                "operators": matches[offset:offset + limit], "errors": c["errors"]}
    if method == "type":
        rna = getattr(bpy.types, p["name"]).bl_rna
        return {"name": rna.identifier, "description": rna.description,
                "properties": [property_info(prop) for prop in rna.properties],
                "functions": [{"id": f.identifier, "description": f.description,
                               "parameters": [property_info(a) for a in f.parameters]} for f in rna.functions]}
    if method == "operator":
        category, name = p["id"].split(".", 1)
        if not category.isidentifier() or not name.isidentifier() or name.startswith("_"):
            raise ValueError("Invalid operator id")
        op = getattr(getattr(bpy.ops, category), name)
        with override(p.get("context", {})):
            allowed = op.poll()
            if p.get("poll_only"):
                return {"allowed": allowed, "context": context_info()}
            if not allowed:
                raise ValueError("Operator poll failed; check editor, selection, active object and mode")
            result = op(p.get("execution", "EXEC_DEFAULT"), **p.get("kwargs", {}))
        return {"status": sorted(result), "finished": "FINISHED" in result}
    if method == "python":
        output = io.StringIO()
        _namespace.update(bpy=bpy, workspace=str(_workspace), result=None)
        with contextlib.redirect_stdout(output), contextlib.redirect_stderr(output):
            exec(compile(p["code"], "<AI Studio>", "exec"), _namespace)
        return {"result": plain(_namespace.get("result")), "output": output.getvalue()[-100000:]}
    if method in {"get", "set"}:
        node = ast.parse(p["path"], mode="eval").body
        if method == "get":
            return plain(resolve(node))
        if isinstance(node, ast.Attribute) and not node.attr.startswith("_"):
            setattr(resolve(node.value), node.attr, p["value"])
        elif isinstance(node, ast.Subscript):
            resolve(node.value)[ast.literal_eval(node.slice)] = p["value"]
        else:
            raise ValueError("Invalid assignment target")
        bpy.context.view_layer.update()
        return plain(resolve(node))
    if method == "transform":
        obj = bpy.data.objects[p["name"]]
        for key, attr in (("location", "location"), ("rotation", "rotation_euler"), ("scale", "scale")):
            if key in p:
                setattr(obj, attr, p[key])
        bpy.context.view_layer.update()
        return scene_info()
    if method == "frame":
        bpy.context.scene.frame_set(int(p["frame"]))
        return {"frame": bpy.context.scene.frame_current}
    if method == "save":
        path = asset_path(p.get("path", "scene.blend"))
        bpy.ops.wm.save_as_mainfile(filepath=str(path), check_existing=False)
        return {"path": str(path), "bytes": path.stat().st_size}
    if method == "open":
        path = asset_path(p["path"])
        if not path.is_file():
            raise FileNotFoundError(str(path))
        _namespace.clear()  # Python wrappers from the old file are no longer valid.
        bpy.ops.wm.open_mainfile(filepath=str(path), load_ui=False, use_scripts=False)
        return scene_info()
    if method == "render":
        scene = bpy.context.scene
        path = asset_path(p.get("path", "preview.png"))
        scene.render.filepath = str(path)
        scene.render.image_settings.file_format = 'PNG'
        if "width" in p:
            scene.render.resolution_x = max(64, min(4096, int(p["width"])))
        if "height" in p:
            scene.render.resolution_y = max(64, min(4096, int(p["height"])))
        scene.render.resolution_percentage = 100
        bpy.ops.render.render(write_still=True)
        return {"path": str(path), "asset": path.relative_to(_workspace).as_posix()}
    if method == "export":
        path = asset_path(p.get("path", "scene.glb"))
        bpy.ops.export_scene.gltf(filepath=str(path), export_format='GLB',
                                  export_apply=True, export_cameras=True,
                                  export_animations=p.get("animations", False))
        return {"path": str(path), "asset": path.relative_to(_workspace).as_posix(), "bytes": path.stat().st_size}
    if method == "batch":
        return [dispatch(c) for c in p["commands"]]
    raise ValueError("Unknown command: " + method)


def pump():
    if _runtime is None:
        return None
    # The external server writes atomically. Never touch bpy from network threads.
    pending = sorted((_runtime / "inbox").glob("*.json"))
    if pending:
        path = pending[0]
        cmd = json.loads(path.read_text(encoding="utf-8"))
        path.unlink()
        out = _runtime / "outbox" / path.name
        started = time.time()
        atomic_json(out.with_suffix(".running.json"), {"id": cmd["id"], "state": "running", "started": started})
        try:
            result = dispatch(cmd)
            response = {"id": cmd["id"], "state": "done", "result": result}
        except BaseException as exc:
            response = {"id": cmd["id"], "state": "error", "error": str(exc), "traceback": traceback.format_exc()}
        response.update(started=started, completed=time.time())
        atomic_json(out, response)
    return 0.05


def start(runtime, workspace):
    global _runtime, _workspace
    _runtime, _workspace = Path(runtime).resolve(), Path(workspace).resolve()
    for folder in (_runtime / "inbox", _runtime / "outbox", _workspace):
        folder.mkdir(parents=True, exist_ok=True)
    atomic_json(_runtime / "ready.json", {"version": bpy.app.version_string, "pid": os.getpid(),
                                         "background": bpy.app.background})
    if not bpy.app.background and not bpy.app.timers.is_registered(pump):
        bpy.app.timers.register(pump, first_interval=0.05, persistent=True)


class AISTUDIO_PT_connection(bpy.types.Panel):
    bl_label = "AI Studio"
    bl_idname = "AISTUDIO_PT_connection"
    bl_space_type = 'VIEW_3D'
    bl_region_type = 'UI'
    bl_category = "AI Studio"

    def draw(self, context):
        self.layout.label(text="Connected" if _runtime else "Start with the AI Studio launcher")
        self.layout.label(text="Browser / HTTP / MCP")
        if _runtime:
            self.layout.label(text="Trusted local AI session", icon='INFO')


def register():
    bpy.utils.register_class(AISTUDIO_PT_connection)


def unregister():
    global _runtime
    _runtime = None
    if bpy.app.timers.is_registered(pump):
        bpy.app.timers.unregister(pump)
    bpy.utils.unregister_class(AISTUDIO_PT_connection)
