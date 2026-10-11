<!--
Keep this document short & concise,
linking to external resources instead of including content in-line.
See 'release/text/readme.html' for the end user read-me.
-->

Blender AI Studio
=================

Experimental Blender 4.5.3 LTS fork with a local browser workspace, MCP tools,
HTTP command API, live operator discovery, and full trusted Python access.
**[Get started →](ai-studio/README.md)** · [Capability analysis](ai-studio/docs/CAPABILITIES.md) ·
[Every registered operator](ai-studio/docs/OPERATORS.md) · [API](ai-studio/docs/API.md)

![AI-generated observatory test scene](ai-studio/docs/aster-observatory.png)

The upstream Blender engine is retained. This fork adds a main-thread Python
bridge and an external launcher; the tested distribution uses the official
Blender runtime with these source modules, without rebuilding the C++ engine.

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
