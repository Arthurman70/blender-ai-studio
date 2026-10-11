# SPDX-License-Identifier: GPL-3.0-or-later
"""Load the fork's bridge into a matching stock runtime without recompiling Blender."""
import importlib.util
import os
from pathlib import Path
import sys
import time

import bpy

source = Path(__file__).resolve().parents[1] / "scripts" / "startup" / "bl_ai_studio.py"
if "bl_ai_studio" in sys.modules:
    bridge = sys.modules["bl_ai_studio"]
else:
    spec = importlib.util.spec_from_file_location("bl_ai_studio", source)
    bridge = importlib.util.module_from_spec(spec)
    sys.modules[spec.name] = bridge
    spec.loader.exec_module(bridge)
    bridge.register()
bridge.start(os.environ["BLENDER_AI_RUNTIME"], os.environ["BLENDER_AI_WORKSPACE"])
if bpy.app.background:
    while True:
        bridge.pump()
        time.sleep(0.03)
