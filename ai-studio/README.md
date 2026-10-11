# Blender AI Studio

A local browser workspace and model-independent automation layer for Blender.
This is a source fork of `blender/blender`, pinned to **v4.5.3**, commit
`67807e1800cc48cc7bff3c793525e1179a4d64ca`.

The same Blender process is accessible from the browser, HTTP, a command-line
client, or any AI client that supports MCP stdio or can call HTTP. No model API
key, provider SDK, subscription, or cloud service is required. This project
provides tools to an AI; it does not include a conversational model.

## Start

Requirements: Node.js 20+ and Blender 4.5.3. Tested on Windows x64; other platforms
can supply their own Blender executable but have not been validated.

```powershell
$env:BLENDER_BIN = 'C:\path\to\blender.exe'
node ai-studio/server.mjs --port 0 --start
```

The server prints its local URL and the location of `ai-studio/.runtime/session.json`.
Open the URL, paste the `token` from that file into the Session token field, and
click Connect, then Refresh. A local launch link can also use `/#token=TOKEN`;
the browser immediately removes the fragment and keeps the token in tab session
storage. Do not share that link or the session file.

Omit `--start` to launch Blender using the browser's **Launch Blender** button.
Use `--desktop --start` for an interactive Blender window. Desktop mode supports
editor-dependent operators; background mode is convenient for modeling and
rendering. Mode selection applies only before launch. Stop the server with
Ctrl+C to terminate its Blender process; save your work first.

```powershell
node ai-studio/server.mjs --blender 'C:\path\to\blender.exe' --port 0 --start --desktop
node ai-studio/client.mjs catalog '{"query":"bevel"}'
node ai-studio/client.mjs scene
```

No `npm install` is needed. The server and MCP adapter use Node's standard
library. Three.js 0.186.0 is vendored under its MIT license in `web/vendor`.

## Browser

- Orbitable 3D preview of the current scene using a Blender-generated GLB.
- Object list and editable position, rotation and scale.
- Python editor with structured results and error reporting.
- Searchable live operator signatures, argument and context controls.
- Create the included observatory, save a `.blend`, and render with Blender.

The browser preview is a glTF approximation: procedural shaders, compositor
effects and some Blender-specific features are represented accurately only in
the Blender render. Edits refresh the preview after the command finishes. Edits
from other clients become visible when you click Refresh. This is not a streamed
copy of Blender's desktop UI or Blender compiled to WebAssembly.

## Connect an AI

Add a stdio MCP server to your AI client's configuration (substitute an absolute path):

```json
{
  "mcpServers": {
    "blender-ai-studio": {
      "command": "node",
      "args": ["C:/path/to/blender-ai/ai-studio/mcp.mjs"]
    }
  }
}
```

Start the local server first. If using another session file, set
`BLENDER_AI_SESSION` for the MCP process. Tools: `blender_launch`,
`blender_status`, `blender_scene`, `blender_catalog`, `blender_python`,
`blender_command`, and `blender_job`.

Recommended agent loop: inspect status → search real operator signatures →
inspect context → make a small edit → inspect geometry/state → save → render
and review. Use `bpy` directly for data creation and nodes; use an operator's
poll check and context override for editor actions. See [API.md](docs/API.md).

## Scope and evidence

The generated [catalog](docs/operator-catalog.json) includes **2,397 registered
operators** with parameter metadata and **3,766 RNA type summaries** from the
tested runtime. [OPERATORS.md](docs/OPERATORS.md) indexes every discovered
operator by category. Detailed RNA properties and methods are available through
the `type` command. The catalog includes built-in extensions present in this
runtime; other extensions alter the inventory and require refresh.

[CAPABILITIES.md](docs/CAPABILITIES.md) maps Blender subsystems to automation
entry points and limitations. Enumeration is not a claim that every operation
has been executed or every C++ implementation audited. Modal mouse tools,
third-party add-ons, simulations and device-specific functions require further
workflow-specific validation.

Validated: [17 end-to-end checks](docs/acceptance-report.json),
[four desktop checks](docs/desktop-report.json), and HTTP security regression
tests. The observatory was generated through the same public command interface,
saved, reopened, animated, exported, and rendered using Cycles.

```powershell
node --test ai-studio/test/*.test.mjs
# Replaces the scene in the current test session:
node ai-studio/test/acceptance.mjs
# Starts and closes its own temporary desktop session:
node ai-studio/test/desktop.mjs
```

## Implementation and trust

`scripts/startup/bl_ai_studio.py` is the native Blender hook. Blender's existing
CMake script-directory installation includes it when building this fork. The
`bootstrap.py` launcher also loads the same module into a stock Blender runtime,
making this version usable without a C++ toolchain. A full compiled fork binary
has not been built or validated for this release.

The browser server is an external Node process. It communicates through atomic
local job files. Desktop sessions execute jobs through persistent Blender timers;
background sessions use a main-thread pump. No networking threads touch `bpy`.
Commands are serialized across all clients. Jobs have queued, running, done, and
error states. A wait timeout does not cancel or retry a mutation. Batch commands
are sequential and not transactional; earlier edits remain if a later command fails.

The service binds only to `127.0.0.1`, requires a random session token, validates
Host and Origin, limits request bodies and pending jobs, and confines convenience
file routes to the workspace. **The Python and generic operator APIs have the
Blender process's full local permissions. They are intentionally not sandboxed.**
Use a dedicated OS account/container if connecting an untrusted agent. Do not
publish this control server to the internet. Scene-file autoexecution is disabled
on launch and through the convenience open command. Explicit Python and operator
commands can still access files, network, preferences, add-ons, or exit Blender.

Runtime state, tokens, logs and user scenes stay under ignored `.runtime/`.
The audit file records job IDs, methods and times, never submitted scripts or
tokens. Scripts can still print sensitive information into their own results.

## License

Blender's upstream licensing and notices are preserved. New bridge and launcher
code is GPL-3.0-or-later. Vendored Three.js retains its MIT notice. This is an
independent experimental fork, not an official Blender Foundation product.
