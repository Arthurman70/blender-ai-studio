# Blender AI Studio — Local Blender Workspace and MCP Tools

[![Download control kit prerelease](https://img.shields.io/badge/Download%20control%20kit%20prerelease-7c3aed?style=for-the-badge)](https://github.com/Arthurman70/blender-ai-studio/releases/download/ai-studio-v0.1.0/blender-ai-studio-0.1.0-control-kit.zip) [![Download demo blend](https://img.shields.io/badge/Download%20demo%20blend-2563eb?style=for-the-badge)](https://github.com/Arthurman70/blender-ai-studio/releases/download/ai-studio-v0.1.0/aster-observatory.blend)

[Product guide](ai-studio/README.md) · [Rendered demo](ai-studio/docs/aster-observatory.png) · [MCP setup](ai-studio/README.md#connect-an-ai) · [FAQ](#frequently-asked-questions)

**Experimental v0.1.0 control kit.** Requires a separate Blender 4.5.3 installation and Node.js 20+. Tested on Windows x64. The kit is a local automation layer, not a standalone Blender installer or an included AI model.

**Downloads and setup:** [Download control kit prerelease](https://github.com/Arthurman70/blender-ai-studio/releases/download/ai-studio-v0.1.0/blender-ai-studio-0.1.0-control-kit.zip) · [Download demo blend](https://github.com/Arthurman70/blender-ai-studio/releases/download/ai-studio-v0.1.0/aster-observatory.blend)

Experimental Blender 4.5.3 LTS fork with a local browser workspace, MCP tools,
HTTP command API, live operator discovery, and full trusted Python access.
**[Get started →](ai-studio/README.md)** · [Capability analysis](ai-studio/docs/CAPABILITIES.md) ·
[Every registered operator](ai-studio/docs/OPERATORS.md) · [API](ai-studio/docs/API.md)

![AI-generated observatory test scene](ai-studio/docs/aster-observatory.png)

The upstream Blender engine is retained. This fork adds a main-thread Python
bridge and an external launcher; the tested distribution uses the official
Blender runtime with these source modules, without rebuilding the C++ engine.

## Frequently asked questions

Answers describe this repository and its documented scope as of **October 23, 2026**.

### Can an AI assistant control Blender through MCP?

Blender AI Studio exposes a local Blender process through MCP tools, an HTTP API and a browser workspace. An MCP-capable client can inspect the scene, discover operators and submit commands. Follow the [connection guide](ai-studio/README.md#connect-an-ai); the project supplies Blender tools, not a conversational model.

### What does the Blender AI Studio download include?

The v0.1.0 prerelease control kit contains the launcher and control modules used with a separately installed Blender runtime. It is not a newly compiled standalone Blender installer. The release also includes an observatory scene, GLB preview and rendered image for examining an example result.

### Do I need to build Blender from source to try the control kit?

No. The documented launcher loads the bridge into stock Blender 4.5.3. Install Node.js 20 or newer and point `BLENDER_BIN` at Blender, then follow [Start](ai-studio/README.md#start). Building the full C++ fork is a separate workflow and was not validated for this release.

### Does Blender AI Studio need an API key or a paid AI subscription?

The local workspace, launcher, HTTP interface and MCP adapter do not require a model API key or subscription. Your chosen AI client may have its own costs and access requirements. You can also use the browser, CLI or HTTP interface without an AI client.

### Can I use Blender in a web browser with this project?

You can open a local browser workspace to inspect a GLB scene preview, transform objects, search operators, run Python and start renders. Blender itself still runs as a local process. The preview is not a streamed Blender desktop, and Blender-specific shaders or effects may only appear accurately in the final render.

### Does it support every Blender tool and add-on?

It can discover registered operators and expose Python access, but discovery does not prove that every workflow has been tested. Modal tools, editor context, third-party add-ons and device-specific features need their own validation. Consult the [capability guide](ai-studio/docs/CAPABILITIES.md) for tested scope and limitations.

### Which operating systems and Blender versions are tested?

The documented setup was tested on Windows x64 with Blender 4.5.3 and Node.js 20 or newer. Other systems can supply their own Blender executable, but the project does not claim those platforms or newer Blender versions have been validated.

### Is it safe to expose the Blender control server on the internet?

The server is designed for local use on `127.0.0.1` with a session token. Python and generic operator commands have the Blender process’s full permissions; they are not sandboxed. Keep the server and session token private and connect only trusted clients. See [Implementation and trust](ai-studio/README.md#implementation-and-trust).

### Can I save a blend file, export GLB and render a scene?

Those workflows are demonstrated by the included observatory example and documented acceptance checks. Use the [sample release assets](https://github.com/Arthurman70/blender-ai-studio/releases/tag/ai-studio-v0.1.0) and [API reference](ai-studio/docs/API.md) to inspect the result and commands. Save your work before stopping the launcher, which terminates its Blender process.

### Is Blender AI Studio an official Blender Foundation product?

No. It is an independent experimental fork and automation layer that preserves Blender’s upstream engine and notices. The new bridge and launcher are GPL-3.0-or-later, and vendored Three.js retains its MIT notice. Upstream Blender resources and licensing are linked below.

Upstream Blender
----------------

Blender is the free and open source 3D creation suite.
It supports the entirety of the 3D pipeline—modeling, rigging, animation, simulation, rendering, compositing,
motion tracking and video editing.

![Blender screenshot](https://code.blender.org/wp-content/uploads/2018/12/springrg.jpg "Blender screenshot")

Project Pages
-------------

- [Main Website](http://www.blender.org)
- [Reference Manual](https://docs.blender.org/manual/en/latest/index.html)
- [User Community](https://www.blender.org/community/)

Development
-----------

- [Build Instructions](https://developer.blender.org/docs/handbook/building_blender/)
- [Code Review & Bug Tracker](https://projects.blender.org)
- [Developer Forum](https://devtalk.blender.org)
- [Developer Documentation](https://developer.blender.org/docs/)


License
-------

Blender as a whole is licensed under the GNU General Public License, Version 3.
Individual files may have a different but compatible license.

See [blender.org/about/license](https://www.blender.org/about/license) for details.
