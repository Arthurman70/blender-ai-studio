# Registered operator reference

Generated from Blender 4.5.3 LTS: **2397 operators**, **3766 RNA types**, **77 operator categories**.

This index covers every registered operator in the tested runtime. It records native descriptions; it is not a claim that every operator has been executed. Full parameter types, defaults, ranges and enumerations are in [operator-catalog.json](operator-catalog.json). Query `catalog` for live signatures and `type` for RNA properties/functions.

| Category | Operators |
|---|---:|
| [action](#action) | 38 |
| [anim](#anim) | 61 |
| [armature](#armature) | 48 |
| [asset](#asset) | 17 |
| [boid](#boid) | 8 |
| [brush](#brush) | 13 |
| [buttons](#buttons) | 6 |
| [cachefile](#cachefile) | 5 |
| [camera](#camera) | 2 |
| [clip](#clip) | 92 |
| [cloth](#cloth) | 1 |
| [collection](#collection) | 9 |
| [console](#console) | 21 |
| [constraint](#constraint) | 18 |
| [curve](#curve) | 51 |
| [curves](#curves) | 30 |
| [cycles](#cycles) | 3 |
| [dpaint](#dpaint) | 5 |
| [ed](#ed) | 13 |
| [export_anim](#export_anim) | 1 |
| [export_scene](#export_scene) | 2 |
| [extensions](#extensions) | 32 |
| [file](#file) | 40 |
| [fluid](#fluid) | 14 |
| [font](#font) | 23 |
| [geometry](#geometry) | 10 |
| [gizmogroup](#gizmogroup) | 2 |
| [gpencil](#gpencil) | 8 |
| [graph](#graph) | 65 |
| [grease_pencil](#grease_pencil) | 116 |
| [image](#image) | 49 |
| [import_anim](#import_anim) | 1 |
| [import_curve](#import_curve) | 1 |
| [import_scene](#import_scene) | 2 |
| [info](#info) | 7 |
| [lattice](#lattice) | 8 |
| [marker](#marker) | 11 |
| [mask](#mask) | 39 |
| [material](#material) | 3 |
| [mball](#mball) | 8 |
| [mesh](#mesh) | 161 |
| [nla](#nla) | 39 |
| [node](#node) | 147 |
| [object](#object) | 242 |
| [outliner](#outliner) | 72 |
| [paint](#paint) | 54 |
| [paintcurve](#paintcurve) | 8 |
| [palette](#palette) | 7 |
| [particle](#particle) | 36 |
| [pointcloud](#pointcloud) | 7 |
| [pose](#pose) | 51 |
| [poselib](#poselib) | 11 |
| [preferences](#preferences) | 35 |
| [ptcache](#ptcache) | 7 |
| [render](#render) | 13 |
| [rigidbody](#rigidbody) | 13 |
| [scene](#scene) | 37 |
| [screen](#screen) | 39 |
| [script](#script) | 3 |
| [sculpt](#sculpt) | 40 |
| [sculpt_curves](#sculpt_curves) | 4 |
| [sequencer](#sequencer) | 100 |
| [sound](#sound) | 7 |
| [spreadsheet](#spreadsheet) | 7 |
| [surface](#surface) | 6 |
| [text](#text) | 43 |
| [text_editor](#text_editor) | 1 |
| [texture](#texture) | 4 |
| [transform](#transform) | 27 |
| [ui](#ui) | 34 |
| [uilist](#uilist) | 3 |
| [uv](#uv) | 49 |
| [view2d](#view2d) | 14 |
| [view3d](#view3d) | 67 |
| [wm](#wm) | 117 |
| [workspace](#workspace) | 7 |
| [world](#world) | 2 |

## action

| Operator | Description |
|---|---|
| `action.bake_keys` | Add keyframes on every frame between the selected keyframes |
| `action.clean` | Simplify F-Curves by removing closely spaced keyframes |
| `action.clickselect` | Select keyframes by clicking on them |
| `action.copy` | Copy selected keyframes to the internal clipboard |
| `action.delete` | Remove all selected keyframes |
| `action.duplicate` | Make a copy of all selected keyframes |
| `action.duplicate_move` | Make a copy of all selected keyframes and move them |
| `action.easing_type` | Set easing type for the F-Curve segments starting from the selected keyframes |
| `action.extrapolation_type` | Set extrapolation mode for selected F-Curves |
| `action.frame_jump` | Set the current frame to the average frame value of selected keyframes |
| `action.handle_type` | Set type of handle for selected keyframes |
| `action.interpolation_type` | Set interpolation mode for the F-Curve segments starting from the selected keyframes |
| `action.keyframe_insert` | Insert keyframes for the specified channels |
| `action.keyframe_type` | Set type of keyframe for the selected keyframes |
| `action.layer_next` | Switch to editing action in animation layer above the current action in the NLA Stack |
| `action.layer_prev` | Switch to editing action in animation layer below the current action in the NLA Stack |
| `action.markers_make_local` | Move selected scene markers to the active Action as local 'pose' markers |
| `action.mirror` | Flip selected keyframes over the selected mirror line |
| `action.new` | Create new action |
| `action.paste` | Paste keyframes from the internal clipboard for the selected channels, starting on the current frame |
| `action.previewrange_set` | Set Preview Range based on extents of selected Keyframes |
| `action.push_down` | Push action down on to the NLA stack as a new strip |
| `action.select_all` | Toggle selection of all keyframes |
| `action.select_box` | Select all keyframes within the specified region |
| `action.select_circle` | Select keyframe points using circle selection |
| `action.select_column` | Select all keyframes on the specified frame(s) |
| `action.select_lasso` | Select keyframe points using lasso selection |
| `action.select_leftright` | Select keyframes to the left or the right of the current frame |
| `action.select_less` | Deselect keyframes on ends of selection islands |
| `action.select_linked` | Select keyframes occurring in the same F-Curves as selected ones |
| `action.select_more` | Select keyframes beside already selected ones |
| `action.snap` | Snap selected keyframes to the times specified |
| `action.stash` | Store this action in the NLA stack as a non-contributing strip for later use |
| `action.stash_and_create` | Store this action in the NLA stack as a non-contributing strip for later use, and create a new action |
| `action.unlink` | Unlink this action from the active action slot (and/or exit Tweak Mode) |
| `action.view_all` | Reset viewable area to show full keyframe range |
| `action.view_frame` | Move the view to the current frame |
| `action.view_selected` | Reset viewable area to show selected keyframes range |

## anim

| Operator | Description |
|---|---|
| `anim.change_frame` | Interactively change the current frame number |
| `anim.channel_select_keys` | Select all keyframes of channel under mouse |
| `anim.channel_view_pick` | Reset viewable area to show the channel under the cursor |
| `anim.channels_bake` | Create keyframes following the current shape of F-Curves of selected channels |
| `anim.channels_clean_empty` | Delete all empty animation data containers from visible data-blocks |
| `anim.channels_click` | Handle mouse clicks over animation channels |
| `anim.channels_collapse` | Collapse (close) all selected expandable animation channels |
| `anim.channels_delete` | Delete all selected animation channels |
| `anim.channels_editable_toggle` | Toggle editability of selected channels |
| `anim.channels_expand` | Expand (open) all selected expandable animation channels |
| `anim.channels_fcurves_enable` | Clear 'disabled' tag from all F-Curves to get broken F-Curves working again |
| `anim.channels_group` | Add selected F-Curves to a new group |
| `anim.channels_move` | Rearrange selected animation channels |
| `anim.channels_rename` | Rename animation channel under mouse |
| `anim.channels_select_all` | Toggle selection of all animation channels |
| `anim.channels_select_box` | Select all animation channels within the specified region |
| `anim.channels_select_filter` | Start entering text which filters the set of channels shown to only include those with matching names |
| `anim.channels_setting_disable` | Disable specified setting on all selected animation channels |
| `anim.channels_setting_enable` | Enable specified setting on all selected animation channels |
| `anim.channels_setting_toggle` | Toggle specified setting on all selected animation channels |
| `anim.channels_ungroup` | Remove selected F-Curves from their current groups |
| `anim.channels_view_selected` | Reset viewable area to show the selected channels |
| `anim.clear_useless_actions` | Mark actions with no F-Curves for deletion after save and reload of file preserving "action libraries" |
| `anim.convert_legacy_action` | Convert a legacy Action to a layered Action on the active object |
| `anim.copy_driver_button` | Copy the driver for the highlighted button |
| `anim.driver_button_add` | Add driver for the property under the cursor |
| `anim.driver_button_edit` | Edit the drivers for the connected property represented by the highlighted button |
| `anim.driver_button_remove` | Remove the driver(s) for the connected property(s) represented by the highlighted button |
| `anim.end_frame_set` | Set the current frame as the preview or scene end frame |
| `anim.keyframe_clear_button` | Clear all keyframes on the currently active property |
| `anim.keyframe_clear_v3d` | Remove all keyframe animation for selected objects |
| `anim.keyframe_delete` | Delete keyframes on the current frame for all properties in the specified Keying Set |
| `anim.keyframe_delete_button` | Delete current keyframe of current UI-active property |
| `anim.keyframe_delete_by_name` | Alternate access to 'Delete Keyframe' for keymaps to use |
| `anim.keyframe_delete_v3d` | Remove keyframes on current frame for selected objects and bones |
| `anim.keyframe_insert` | Insert keyframes on the current frame using either the active keying set, or the user preferences if no keying set is active |
| `anim.keyframe_insert_button` | Insert a keyframe for current UI-active property |
| `anim.keyframe_insert_by_name` | Alternate access to 'Insert Keyframe' for keymaps to use |
| `anim.keyframe_insert_menu` | Insert Keyframes for specified Keying Set, with menu of available Keying Sets if undefined |
| `anim.keying_set_active_set` | Set a new active keying set |
| `anim.keying_set_add` | Add a new (empty) keying set to the active Scene |
| `anim.keying_set_export` | Export Keying Set to a Python script |
| `anim.keying_set_path_add` | Add empty path to active keying set |
| `anim.keying_set_path_remove` | Remove active Path from active keying set |
| `anim.keying_set_remove` | Remove the active keying set |
| `anim.keyingset_button_add` | Add current UI-active property to current keying set |
| `anim.keyingset_button_remove` | Remove current UI-active property from current keying set |
| `anim.merge_animation` | Merge the animation of the selected objects into the action of the active object. Actions are not deleted by this, but might end up with zero users |
| `anim.paste_driver_button` | Paste the driver in the internal clipboard to the highlighted button |
| `anim.previewrange_clear` | Clear preview range |
| `anim.previewrange_set` | Interactively define frame range used for playback |
| `anim.scene_range_frame` | Reset the horizontal view to the current scene frame range, taking the preview range into account if it is active |
| `anim.separate_slots` | Move all slots of the action on the active object into newly created, separate actions. All users of those slots will be reassigned to the new actions. The current action won't be deleted but will be empty and might end up having zero users |
| `anim.slot_channels_move_to_new_action` | Move the selected slots into a newly created action |
| `anim.slot_new_for_id` | Create a new action slot for this data-block, to hold its animation |
| `anim.slot_unassign_from_constraint` | Un-assign the action slot from this constraint |
| `anim.slot_unassign_from_id` | Un-assign the action slot, effectively making this data-block non-animated |
| `anim.slot_unassign_from_nla_strip` | Un-assign the action slot from this NLA strip, effectively making it non-animated |
| `anim.start_frame_set` | Set the current frame as the preview or scene start frame |
| `anim.update_animated_transform_constraints` | Update f-curves/drivers affecting Transform constraints (use it with files from 2.70 and earlier) |
| `anim.view_curve_in_graph_editor` | Frame the property under the cursor in the Graph Editor |

## armature

| Operator | Description |
|---|---|
| `armature.align` | Align selected bones to the active bone (or to their parent) |
| `armature.assign_to_collection` | Assign all selected bones to a collection, or unassign them, depending on whether the active bone is already assigned or not |
| `armature.autoside_names` | Automatically renames the selected bones according to which side of the target axis they fall on |
| `armature.bone_primitive_add` | Add a new bone located at the 3D cursor |
| `armature.calculate_roll` | Automatically fix alignment of select bones' axes |
| `armature.click_extrude` | Create a new bone going from the last selected joint to the mouse position |
| `armature.collection_add` | Add a new bone collection |
| `armature.collection_assign` | Add selected bones to the chosen bone collection |
| `armature.collection_create_and_assign` | Create a new bone collection and assign all selected bones |
| `armature.collection_deselect` | Deselect bones of active Bone Collection |
| `armature.collection_move` | Change position of active Bone Collection in list of Bone collections |
| `armature.collection_remove` | Remove the active bone collection |
| `armature.collection_remove_unused` | Remove all bone collections that have neither bones nor children. This is done recursively, so bone collections that only have unused children are also removed |
| `armature.collection_select` | Select bones in active Bone Collection |
| `armature.collection_show_all` | Show all bone collections |
| `armature.collection_unassign` | Remove selected bones from the active bone collection |
| `armature.collection_unassign_named` | Unassign the named bone from this bone collection |
| `armature.collection_unsolo_all` | Clear the 'solo' setting on all bone collections |
| `armature.copy_bone_color_to_selected` | Copy the bone color of the active bone to all selected bones |
| `armature.delete` | Remove selected bones from the armature |
| `armature.dissolve` | Dissolve selected bones from the armature |
| `armature.duplicate` | Make copies of the selected bones within the same armature |
| `armature.duplicate_move` | Make copies of the selected bones within the same armature and move them |
| `armature.extrude` | Create new bones from the selected joints |
| `armature.extrude_forked` | Create new bones from the selected joints and move them |
| `armature.extrude_move` | Create new bones from the selected joints and move them |
| `armature.fill` | Add bone between selected joint(s) and/or 3D cursor |
| `armature.flip_names` | Flips (and corrects) the axis suffixes of the names of selected bones |
| `armature.hide` | Tag selected bones to not be visible in Edit Mode |
| `armature.move_to_collection` | Move bones to a collection |
| `armature.parent_clear` | Remove the parent-child relationship between selected bones and their parents |
| `armature.parent_set` | Set the active bone as the parent of the selected bones |
| `armature.reveal` | Reveal all bones hidden in Edit Mode |
| `armature.roll_clear` | Clear roll for selected bones |
| `armature.select_all` | Toggle selection status of all bones |
| `armature.select_hierarchy` | Select immediate parent/children of selected bones |
| `armature.select_less` | Deselect those bones at the boundary of each selection region |
| `armature.select_linked` | Select all bones linked by parent/child connections to the current selection |
| `armature.select_linked_pick` | (De)select bones linked by parent/child connections under the mouse cursor |
| `armature.select_mirror` | Mirror the bone selection |
| `armature.select_more` | Select those bones connected to the initial selection |
| `armature.select_similar` | Select similar bones by property types |
| `armature.separate` | Isolate selected bones into a separate armature |
| `armature.shortest_path_pick` | Select shortest path between two bones |
| `armature.split` | Split off selected bones from connected unselected bones |
| `armature.subdivide` | Break selected bones into chains of smaller bones |
| `armature.switch_direction` | Change the direction that a chain of bones points in (head and tail swap) |
| `armature.symmetrize` | Enforce symmetry, make copies of the selection or use existing |

## asset

| Operator | Description |
|---|---|
| `asset.assign_action` | Set this pose Action as active Action on the active Object |
| `asset.bundle_install` | Copy the current .blend file into an Asset Library. Only works on standalone .blend files (i.e. when no other files are referenced) |
| `asset.catalog_delete` | Remove an asset catalog from the asset library (contained assets will not be affected and show up as unassigned) |
| `asset.catalog_new` | Create a new catalog to put assets in |
| `asset.catalog_redo` | Redo the last undone edit to the asset catalogs |
| `asset.catalog_undo` | Undo the last edit to the asset catalogs |
| `asset.catalog_undo_push` | Store the current state of the asset catalogs in the undo buffer |
| `asset.catalogs_save` | Make any edits to any catalogs permanent by writing the current set up to the asset library |
| `asset.clear` | Delete all asset metadata and turn the selected asset data-blocks back into normal data-blocks |
| `asset.clear_single` | Delete all asset metadata and turn the asset data-block back into a normal data-block |
| `asset.library_refresh` | Reread assets and asset catalogs from the asset library on disk |
| `asset.mark` | Enable easier reuse of selected data-blocks through the Asset Browser, with the help of customizable metadata (like previews, descriptions and tags) |
| `asset.mark_single` | Enable easier reuse of a data-block through the Asset Browser, with the help of customizable metadata (like previews, descriptions and tags) |
| `asset.open_containing_blend_file` | Open the blend file that contains the active asset |
| `asset.screenshot_preview` | Capture a screenshot to use as a preview for the selected asset |
| `asset.tag_add` | Add a new keyword tag to the active asset |
| `asset.tag_remove` | Remove an existing keyword tag from the active asset |

## boid

| Operator | Description |
|---|---|
| `boid.rule_add` | Add a boid rule to the current boid state |
| `boid.rule_del` | Delete current boid rule |
| `boid.rule_move_down` | Move boid rule down in the list |
| `boid.rule_move_up` | Move boid rule up in the list |
| `boid.state_add` | Add a boid state to the particle system |
| `boid.state_del` | Delete current boid state |
| `boid.state_move_down` | Move boid state down in the list |
| `boid.state_move_up` | Move boid state up in the list |

## brush

| Operator | Description |
|---|---|
| `brush.asset_activate` | Activate a brush asset as current sculpt and paint tool |
| `brush.asset_delete` | Delete the active brush asset |
| `brush.asset_edit_metadata` | Edit asset information like the catalog, preview image, tags, or author |
| `brush.asset_load_preview` | Choose a preview image for the brush |
| `brush.asset_revert` | Revert the active brush settings to the default values from the asset library |
| `brush.asset_save` | Update the active brush asset in the asset library with current settings |
| `brush.asset_save_as` | Save a copy of the active brush asset into the default asset library, and make it the active brush |
| `brush.curve_preset` | Set brush shape |
| `brush.scale_size` | Change brush size by a scalar |
| `brush.sculpt_curves_falloff_preset` | Set Curve Falloff Preset |
| `brush.stencil_control` | Control the stencil brush |
| `brush.stencil_fit_image_aspect` | When using an image texture, adjust the stencil size to fit the image aspect ratio |
| `brush.stencil_reset_transform` | Reset the stencil transformation to the default |

## buttons

| Operator | Description |
|---|---|
| `buttons.clear_filter` | Clear the search filter |
| `buttons.context_menu` | Display properties editor context_menu |
| `buttons.directory_browse` | Open a directory browser, hold Shift to open the file, Alt to browse containing directory |
| `buttons.file_browse` | Open a file browser, hold Shift to open the file, Alt to browse containing directory |
| `buttons.start_filter` | Start entering filter text |
| `buttons.toggle_pin` | Keep the current data-block displayed |

## cachefile

| Operator | Description |
|---|---|
| `cachefile.layer_add` | Add an override layer to the archive |
| `cachefile.layer_move` | Move layer in the list, layers further down the list will overwrite data from the layers higher up |
| `cachefile.layer_remove` | Remove an override layer from the archive |
| `cachefile.open` | Load a cache file |
| `cachefile.reload` | Update objects paths list with new data from the archive |

## camera

| Operator | Description |
|---|---|
| `camera.preset_add` | Add or remove a Camera Preset |
| `camera.safe_areas_preset_add` | Add or remove a Safe Areas Preset |

## clip

| Operator | Description |
|---|---|
| `clip.add_marker` | Place new marker at specified location |
| `clip.add_marker_at_click` | Place new marker at the desired (clicked) position |
| `clip.add_marker_move` | Add new marker and move it on movie |
| `clip.add_marker_slide` | Add new marker and slide it with mouse until mouse button release |
| `clip.apply_solution_scale` | Apply scale on solution itself to make distance between selected tracks equals to desired |
| `clip.average_tracks` | Average selected tracks into active |
| `clip.bundles_to_mesh` | Create vertex cloud using coordinates of reconstructed tracks |
| `clip.camera_preset_add` | Add or remove a Tracking Camera Intrinsics Preset |
| `clip.change_frame` | Interactively change the current frame number |
| `clip.clean_tracks` | Clean tracks with high error values or few frames |
| `clip.clear_solution` | Clear all calculated data |
| `clip.clear_track_path` | Clear tracks after/before current position or clear the whole track |
| `clip.constraint_to_fcurve` | Create F-Curves for object which will copy object's movement caused by this constraint |
| `clip.copy_tracks` | Copy the selected tracks to the internal clipboard |
| `clip.create_plane_track` | Create new plane track out of selected point tracks |
| `clip.cursor_set` | Set 2D cursor location |
| `clip.delete_marker` | Delete marker for current frame from selected tracks |
| `clip.delete_proxy` | Delete movie clip proxy files from the hard drive |
| `clip.delete_track` | Delete selected tracks |
| `clip.detect_features` | Automatically detect features and place markers to track |
| `clip.disable_markers` | Disable/enable selected markers |
| `clip.dopesheet_select_channel` | Select movie tracking channel |
| `clip.dopesheet_view_all` | Reset viewable area to show full keyframe range |
| `clip.filter_tracks` | Filter tracks which has weirdly looking spikes in motion curves |
| `clip.frame_jump` | Jump to special frame |
| `clip.graph_center_current_frame` | Scroll view so current frame would be centered |
| `clip.graph_delete_curve` | Delete track corresponding to the selected curve |
| `clip.graph_delete_knot` | Delete curve knots |
| `clip.graph_disable_markers` | Disable/enable selected markers |
| `clip.graph_select` | Select graph curves |
| `clip.graph_select_all_markers` | Change selection of all markers of active track |
| `clip.graph_select_box` | Select curve points using box selection |
| `clip.graph_view_all` | View all curves in editor |
| `clip.hide_tracks` | Hide selected tracks |
| `clip.hide_tracks_clear` | Clear hide selected tracks |
| `clip.join_tracks` | Join selected tracks |
| `clip.keyframe_delete` | Delete a keyframe from selected tracks at current frame |
| `clip.keyframe_insert` | Insert a keyframe to selected tracks at current frame |
| `clip.lock_selection_toggle` | Toggle Lock Selection option of the current clip editor |
| `clip.lock_tracks` | Lock/unlock selected tracks |
| `clip.mode_set` | Set the clip interaction mode |
| `clip.new_image_from_plane_marker` | Create new image from the content of the plane marker |
| `clip.open` | Load a sequence of frames or a movie file |
| `clip.paste_tracks` | Paste tracks from the internal clipboard |
| `clip.prefetch` | Prefetch frames from disk for faster playback/tracking |
| `clip.rebuild_proxy` | Rebuild all selected proxies and timecode indices in the background |
| `clip.refine_markers` | Refine selected markers positions by running the tracker from track's reference to current frame |
| `clip.reload` | Reload clip |
| `clip.select` | Select tracking markers |
| `clip.select_all` | Change selection of all tracking markers |
| `clip.select_box` | Select markers using box selection |
| `clip.select_circle` | Select markers using circle selection |
| `clip.select_grouped` | Select all tracks from specified group |
| `clip.select_lasso` | Select markers using lasso selection |
| `clip.set_active_clip` | (undocumented operator) |
| `clip.set_axis` | Set the direction of a scene axis by rotating the camera (or its parent if present). This assumes that the selected track lies on a real axis connecting it to the origin |
| `clip.set_origin` | Set active marker as origin by moving camera (or its parent if present) in 3D space |
| `clip.set_plane` | Set plane based on 3 selected bundles by moving camera (or its parent if present) in 3D space |
| `clip.set_scale` | Set scale of scene by scaling camera (or its parent if present) |
| `clip.set_scene_frames` | Set scene's start and end frame to match clip's start frame and length |
| `clip.set_solution_scale` | Set object solution scale using distance between two selected tracks |
| `clip.set_solver_keyframe` | Set keyframe used by solver |
| `clip.set_viewport_background` | Set current movie clip as a camera background in 3D Viewport (works only when a 3D Viewport is visible) |
| `clip.setup_tracking_scene` | Prepare scene for compositing 3D objects into this footage |
| `clip.slide_marker` | Slide marker areas |
| `clip.slide_plane_marker` | Slide plane marker areas |
| `clip.solve_camera` | Solve camera motion from tracks |
| `clip.stabilize_2d_add` | Add selected tracks to 2D translation stabilization |
| `clip.stabilize_2d_remove` | Remove selected track from translation stabilization |
| `clip.stabilize_2d_rotation_add` | Add selected tracks to 2D rotation stabilization |
| `clip.stabilize_2d_rotation_remove` | Remove selected track from rotation stabilization |
| `clip.stabilize_2d_rotation_select` | Select tracks which are used for rotation stabilization |
| `clip.stabilize_2d_select` | Select tracks which are used for translation stabilization |
| `clip.track_color_preset_add` | Add or remove a Clip Track Color Preset |
| `clip.track_copy_color` | Copy color to all selected tracks |
| `clip.track_markers` | Track selected markers |
| `clip.track_settings_as_default` | Copy tracking settings from active track to default settings |
| `clip.track_settings_to_track` | Copy tracking settings from active track to selected tracks |
| `clip.track_to_empty` | Create an Empty object which will be copying movement of active track |
| `clip.tracking_object_new` | Add new object for tracking |
| `clip.tracking_object_remove` | Remove object for tracking |
| `clip.tracking_settings_preset_add` | Add or remove a motion tracking settings preset |
| `clip.update_image_from_plane_marker` | Update current image used by plane marker from the content of the plane marker |
| `clip.view_all` | View whole image with markers |
| `clip.view_center_cursor` | Center the view so that the cursor is in the middle of the view |
| `clip.view_ndof` | Use a 3D mouse device to pan/zoom the view |
| `clip.view_pan` | Pan the view |
| `clip.view_selected` | View all selected elements |
| `clip.view_zoom` | Zoom in/out the view |
| `clip.view_zoom_in` | Zoom in the view |
| `clip.view_zoom_out` | Zoom out the view |
| `clip.view_zoom_ratio` | Set the zoom ratio (based on clip size) |

## cloth

| Operator | Description |
|---|---|
| `cloth.preset_add` | Add or remove a Cloth Preset |

## collection

| Operator | Description |
|---|---|
| `collection.create` | Create an object collection from selected objects |
| `collection.export_all` | Invoke all configured exporters on this collection |
| `collection.exporter_add` | Add Exporter |
| `collection.exporter_export` | Invoke the export operation |
| `collection.exporter_remove` | Remove Exporter |
| `collection.objects_add_active` | Add selected objects to one of the collections the active-object is part of. Optionally add to "All Collections" to ensure selected objects are included in the same collections as the active object |
| `collection.objects_remove` | Remove selected objects from a collection |
| `collection.objects_remove_active` | Remove the object from an object collection that contains the active object |
| `collection.objects_remove_all` | Remove selected objects from all collections |

## console

| Operator | Description |
|---|---|
| `console.autocomplete` | Evaluate the namespace up until the cursor and give a list of options or complete the name if there is only one |
| `console.banner` | Print a message when the terminal initializes |
| `console.clear` | Clear text by type |
| `console.clear_line` | Clear the line and store in history |
| `console.copy` | Copy selected text to clipboard |
| `console.copy_as_script` | Copy the console contents for use in a script |
| `console.delete` | Delete text by cursor position |
| `console.execute` | Execute the current console line as a Python expression |
| `console.history_append` | Append history at cursor position |
| `console.history_cycle` | Cycle through history |
| `console.indent` | Add 4 spaces at line beginning |
| `console.indent_or_autocomplete` | Indent selected text or autocomplete |
| `console.insert` | Insert text at cursor position |
| `console.language` | Set the current language for this console |
| `console.move` | Move cursor position |
| `console.paste` | Paste text from clipboard |
| `console.scrollback_append` | Append scrollback text by type |
| `console.select_all` | Select all the text |
| `console.select_set` | Set the console selection |
| `console.select_word` | Select word at cursor position |
| `console.unindent` | Delete 4 spaces from line beginning |

## constraint

| Operator | Description |
|---|---|
| `constraint.add_target` | Add a target to the constraint |
| `constraint.apply` | Apply constraint and remove from the stack |
| `constraint.childof_clear_inverse` | Clear inverse correction for Child Of constraint |
| `constraint.childof_set_inverse` | Set inverse correction for Child Of constraint |
| `constraint.copy` | Duplicate constraint at the same position in the stack |
| `constraint.copy_to_selected` | Copy constraint to other selected objects/bones |
| `constraint.delete` | Remove constraint from constraint stack |
| `constraint.disable_keep_transform` | Set the influence of this constraint to zero while trying to maintain the object's transformation. Other active constraints can still influence the final transformation |
| `constraint.followpath_path_animate` | Add default animation for path used by constraint if it isn't animated already |
| `constraint.limitdistance_reset` | Reset limiting distance for Limit Distance Constraint |
| `constraint.move_down` | Move constraint down in constraint stack |
| `constraint.move_to_index` | Change the constraint's position in the list so it evaluates after the set number of others |
| `constraint.move_up` | Move constraint up in constraint stack |
| `constraint.normalize_target_weights` | Normalize weights of all target bones |
| `constraint.objectsolver_clear_inverse` | Clear inverse correction for Object Solver constraint |
| `constraint.objectsolver_set_inverse` | Set inverse correction for Object Solver constraint |
| `constraint.remove_target` | Remove the target from the constraint |
| `constraint.stretchto_reset` | Reset original length of bone for Stretch To Constraint |

## curve

| Operator | Description |
|---|---|
| `curve.cyclic_toggle` | Make active spline closed/opened loop |
| `curve.de_select_first` | (De)select first of visible part of each NURBS |
| `curve.de_select_last` | (De)select last of visible part of each NURBS |
| `curve.decimate` | Simplify selected curves |
| `curve.delete` | Delete selected control points or segments |
| `curve.dissolve_verts` | Delete selected control points, correcting surrounding handles |
| `curve.draw` | Draw a freehand spline |
| `curve.duplicate` | Duplicate selected control points |
| `curve.duplicate_move` | Duplicate curve and move |
| `curve.extrude` | Extrude selected control point(s) |
| `curve.extrude_move` | Extrude curve and move result |
| `curve.handle_type_set` | Set type of handles for selected control points |
| `curve.hide` | Hide (un)selected control points |
| `curve.make_segment` | Join two curves by their selected ends |
| `curve.match_texture_space` | Match texture space to object's bounding box |
| `curve.normals_make_consistent` | Recalculate the direction of selected handles |
| `curve.pen` | Construct and edit splines |
| `curve.primitive_bezier_circle_add` | Construct a Bézier Circle |
| `curve.primitive_bezier_curve_add` | Construct a Bézier Curve |
| `curve.primitive_nurbs_circle_add` | Construct a Nurbs Circle |
| `curve.primitive_nurbs_curve_add` | Construct a Nurbs Curve |
| `curve.primitive_nurbs_path_add` | Construct a Path |
| `curve.radius_set` | Set per-point radius which is used for bevel tapering |
| `curve.reveal` | Reveal hidden control points |
| `curve.select_all` | (De)select all control points |
| `curve.select_less` | Deselect control points at the boundary of each selection region |
| `curve.select_linked` | Select all control points linked to the current selection |
| `curve.select_linked_pick` | Select all control points linked to already selected ones |
| `curve.select_more` | Select control points at the boundary of each selection region |
| `curve.select_next` | Select control points following already selected ones along the curves |
| `curve.select_nth` | Deselect every Nth point starting from the active one |
| `curve.select_previous` | Select control points preceding already selected ones along the curves |
| `curve.select_random` | Randomly select some control points |
| `curve.select_row` | Select a row of control points including active one. Successive use on the same point switches between U/V directions |
| `curve.select_similar` | Select similar curve points by property type |
| `curve.separate` | Separate selected points from connected unselected points into a new object |
| `curve.shade_flat` | Set shading to flat |
| `curve.shade_smooth` | Set shading to smooth |
| `curve.shortest_path_pick` | Select shortest path between two selections |
| `curve.smooth` | Flatten angles of selected points |
| `curve.smooth_radius` | Interpolate radii of selected points |
| `curve.smooth_tilt` | Interpolate tilt of selected points |
| `curve.smooth_weight` | Interpolate weight of selected points |
| `curve.spin` | Extrude selected boundary row around pivot point and current view axis |
| `curve.spline_type_set` | Set type of active spline |
| `curve.spline_weight_set` | Set softbody goal weight for selected points |
| `curve.split` | Split off selected points from connected unselected points |
| `curve.subdivide` | Subdivide selected segments |
| `curve.switch_direction` | Switch direction of selected splines |
| `curve.tilt_clear` | Clear the tilt of selected control points |
| `curve.vertex_add` | Add a new control point (linked to only selected end-curve one, if any) |

## curves

| Operator | Description |
|---|---|
| `curves.add_bezier` | Add new bezier curve |
| `curves.add_circle` | Add new circle curve |
| `curves.attribute_set` | Set values of the active attribute for selected elements |
| `curves.convert_from_particle_system` | Add a new curves object based on the current state of the particle system |
| `curves.convert_to_particle_system` | Add a new or update an existing hair particle system on the surface object |
| `curves.curve_type_set` | Set type of selected curves |
| `curves.cyclic_toggle` | Make active curve closed/opened loop |
| `curves.delete` | Remove selected control points or curves |
| `curves.draw` | Draw a freehand curve |
| `curves.duplicate` | Copy selected points or curves |
| `curves.duplicate_move` | Make copies of selected elements and move them |
| `curves.extrude` | Extrude selected control point(s) |
| `curves.extrude_move` | Extrude curve and move result |
| `curves.handle_type_set` | Set the handle type for bezier curves |
| `curves.sculptmode_toggle` | Enter/Exit sculpt mode for curves |
| `curves.select_all` | (De)select all control points |
| `curves.select_ends` | Select end points of curves |
| `curves.select_less` | Shrink the selection by one point |
| `curves.select_linked` | Select all points in curves with any point selection |
| `curves.select_linked_pick` | Select all points in the curve under the cursor |
| `curves.select_more` | Grow the selection by one point |
| `curves.select_random` | Randomizes existing selection or create new random selection |
| `curves.separate` | Separate selected geometry into a new object |
| `curves.set_selection_domain` | Change the mode used for selection masking in curves sculpt mode |
| `curves.snap_curves_to_surface` | Move curves so that the first point is exactly on the surface mesh |
| `curves.split` | Split selected points |
| `curves.subdivide` | Subdivide selected curve segments |
| `curves.surface_set` | Use the active object as surface for selected curves objects and set it as the parent |
| `curves.switch_direction` | Reverse the direction of the selected curves |
| `curves.tilt_clear` | Clear the tilt of selected control points |

## cycles

| Operator | Description |
|---|---|
| `cycles.denoise_animation` | Denoise rendered animation sequence using current scene and view layer settings. Requires denoising data passes and output to OpenEXR multilayer files |
| `cycles.merge_images` | Combine OpenEXR multi-layer images rendered with different sample ranges into one image with reduced noise |
| `cycles.use_shading_nodes` | Enable nodes on a material, world or light |

## dpaint

| Operator | Description |
|---|---|
| `dpaint.bake` | Bake dynamic paint image sequence surface |
| `dpaint.output_toggle` | Add or remove Dynamic Paint output data layer |
| `dpaint.surface_slot_add` | Add a new Dynamic Paint surface slot |
| `dpaint.surface_slot_remove` | Remove the selected surface slot |
| `dpaint.type_toggle` | Toggle whether given type is active or not |

## ed

| Operator | Description |
|---|---|
| `ed.flush_edits` | Flush edit data from active editing modes |
| `ed.lib_id_fake_user_toggle` | Save this data-block even if it has no users |
| `ed.lib_id_generate_preview` | Create an automatic preview for the selected data-block |
| `ed.lib_id_generate_preview_from_object` | Create a preview for this asset by rendering the active object |
| `ed.lib_id_load_custom_preview` | Choose an image to help identify the data-block visually |
| `ed.lib_id_override_editable_toggle` | Set if this library override data-block can be edited |
| `ed.lib_id_remove_preview` | Remove the preview of this data-block |
| `ed.lib_id_unlink` | Remove a usage of a data-block, clearing the assignment |
| `ed.redo` | Redo previous action |
| `ed.undo` | Undo previous action |
| `ed.undo_history` | Redo specific action in history |
| `ed.undo_push` | Add an undo state (internal use only) |
| `ed.undo_redo` | Undo and redo previous action |

## export_anim

| Operator | Description |
|---|---|
| `export_anim.bvh` | Save a BVH motion capture file from an armature |

## export_scene

| Operator | Description |
|---|---|
| `export_scene.fbx` | Write a FBX file |
| `export_scene.gltf` | Export scene as glTF 2.0 file |

## extensions

| Operator | Description |
|---|---|
| `extensions.package_disable` | Turn off this extension |
| `extensions.package_install` | Download and install the extension |
| `extensions.package_install_files` | Install extensions from files into a locally managed repository |
| `extensions.package_install_marked` | (undocumented operator) |
| `extensions.package_mark_clear` | (undocumented operator) |
| `extensions.package_mark_clear_all` | (undocumented operator) |
| `extensions.package_mark_set` | (undocumented operator) |
| `extensions.package_mark_set_all` | (undocumented operator) |
| `extensions.package_obsolete_marked` | Zeroes package versions, useful for development - to test upgrading |
| `extensions.package_show_clear` | (undocumented operator) |
| `extensions.package_show_set` | (undocumented operator) |
| `extensions.package_show_settings` | (undocumented operator) |
| `extensions.package_theme_disable` | Turn off this theme |
| `extensions.package_theme_enable` | Turn off this theme |
| `extensions.package_uninstall` | Disable and uninstall the extension |
| `extensions.package_uninstall_marked` | (undocumented operator) |
| `extensions.package_uninstall_system` | (undocumented operator) |
| `extensions.package_upgrade_all` | Upgrade all the extensions to their latest version for all the remote repositories |
| `extensions.repo_enable_from_drop` | (undocumented operator) |
| `extensions.repo_lock_all` | Lock repositories - to test locking |
| `extensions.repo_refresh_all` | Scan extension & legacy add-ons for changes to modules & meta-data (similar to restarting). Any issues are reported as warnings |
| `extensions.repo_sync` | (undocumented operator) |
| `extensions.repo_sync_all` | Refresh the list of extensions for all the remote repositories |
| `extensions.repo_unlock` | Remove the repository file-system lock |
| `extensions.repo_unlock_all` | Unlock repositories - to test unlocking |
| `extensions.status_clear` | (undocumented operator) |
| `extensions.status_clear_errors` | (undocumented operator) |
| `extensions.userpref_allow_online` | Allow internet access. Blender may access configured online extension repositories. Installed third party add-ons may access the internet for their own functionality |
| `extensions.userpref_allow_online_popup` | Allow internet access. Blender may access configured online extension repositories. Installed third party add-ons may access the internet for their own functionality |
| `extensions.userpref_show_for_update` | Open extensions preferences |
| `extensions.userpref_show_online` | Show system preferences "Network" panel to allow online access |
| `extensions.userpref_tags_set` | Set the value of all tags |

## file

| Operator | Description |
|---|---|
| `file.autopack_toggle` | Automatically pack all external files into the .blend file |
| `file.bookmark_add` | Add a bookmark for the selected/active directory |
| `file.bookmark_cleanup` | Delete all invalid bookmarks |
| `file.bookmark_delete` | Delete selected bookmark |
| `file.bookmark_move` | Move the active bookmark up/down in the list |
| `file.cancel` | Cancel file operation |
| `file.delete` | Move selected files to the trash or recycle bin |
| `file.directory_new` | Create a new directory |
| `file.edit_directory_path` | Start editing directory field |
| `file.execute` | Execute selected file |
| `file.external_operation` | Perform external operation on a file or folder |
| `file.filenum` | Increment number in filename |
| `file.filepath_drop` | (undocumented operator) |
| `file.find_missing_files` | Try to find missing external files |
| `file.hidedot` | Toggle hide hidden dot files |
| `file.highlight` | Highlight selected file(s) |
| `file.make_paths_absolute` | Make all paths to external files absolute |
| `file.make_paths_relative` | Make all paths to external files relative to current .blend |
| `file.mouse_execute` | Perform the current execute action for the file under the cursor (e.g. open the file) |
| `file.next` | Move to next folder |
| `file.pack_all` | Pack all used external files into this .blend |
| `file.pack_libraries` | Store all data-blocks linked from other .blend files in the current .blend file. Library references are preserved so the linked data-blocks can be unpacked again |
| `file.parent` | Move to parent directory |
| `file.previous` | Move to previous folder |
| `file.refresh` | Refresh the file list |
| `file.rename` | Rename file or file directory |
| `file.report_missing_files` | Report all missing external files |
| `file.reset_recent` | Reset recent files |
| `file.select` | Handle mouse clicks to select and activate items |
| `file.select_all` | Select or deselect all files |
| `file.select_bookmark` | Select a bookmarked directory |
| `file.select_box` | Activate/select the file(s) contained in the border |
| `file.select_walk` | Select/Deselect files by walking through them |
| `file.smoothscroll` | Smooth scroll to make editable file visible |
| `file.sort_column_ui_context` | Change sorting to use column under cursor |
| `file.start_filter` | Start entering filter text |
| `file.unpack_all` | Unpack all files packed into this .blend to external ones |
| `file.unpack_item` | Unpack this file to an external file |
| `file.unpack_libraries` | Restore all packed linked data-blocks to their original locations |
| `file.view_selected` | Scroll the selected files into view |

## fluid

| Operator | Description |
|---|---|
| `fluid.bake_all` | Bake Entire Fluid Simulation |
| `fluid.bake_data` | Bake Fluid Data |
| `fluid.bake_guides` | Bake Fluid Guiding |
| `fluid.bake_mesh` | Bake Fluid Mesh |
| `fluid.bake_noise` | Bake Fluid Noise |
| `fluid.bake_particles` | Bake Fluid Particles |
| `fluid.free_all` | Free Entire Fluid Simulation |
| `fluid.free_data` | Free Fluid Data |
| `fluid.free_guides` | Free Fluid Guiding |
| `fluid.free_mesh` | Free Fluid Mesh |
| `fluid.free_noise` | Free Fluid Noise |
| `fluid.free_particles` | Free Fluid Particles |
| `fluid.pause_bake` | Pause Bake |
| `fluid.preset_add` | Add or remove a Fluid Preset |

## font

| Operator | Description |
|---|---|
| `font.case_set` | Set font case |
| `font.case_toggle` | Toggle font case |
| `font.change_character` | Change font character code |
| `font.change_spacing` | Change font spacing |
| `font.delete` | Delete text by cursor position |
| `font.line_break` | Insert line break at cursor position |
| `font.move` | Move cursor to position type |
| `font.move_select` | Move the cursor while selecting |
| `font.open` | Load a new font from a file |
| `font.select_all` | Select all text |
| `font.select_word` | Select word under cursor |
| `font.selection_set` | Set cursor selection |
| `font.style_set` | Set font style |
| `font.style_toggle` | Toggle font style |
| `font.text_copy` | Copy selected text to clipboard |
| `font.text_cut` | Cut selected text to clipboard |
| `font.text_insert` | Insert text at cursor position |
| `font.text_insert_unicode` | Insert Unicode Character |
| `font.text_paste` | Paste text from clipboard |
| `font.text_paste_from_file` | Paste contents from file |
| `font.textbox_add` | Add a new text box |
| `font.textbox_remove` | Remove the text box |
| `font.unlink` | Unlink active font data-block |

## geometry

| Operator | Description |
|---|---|
| `geometry.attribute_add` | Add attribute to geometry |
| `geometry.attribute_convert` | Change how the attribute is stored |
| `geometry.attribute_remove` | Remove attribute from geometry |
| `geometry.color_attribute_add` | Add color attribute to geometry |
| `geometry.color_attribute_convert` | Change how the color attribute is stored |
| `geometry.color_attribute_duplicate` | Duplicate color attribute |
| `geometry.color_attribute_remove` | Remove color attribute from geometry |
| `geometry.color_attribute_render_set` | Set default color attribute used for rendering |
| `geometry.execute_node_group` | Execute a node group on geometry |
| `geometry.geometry_randomization` | Toggle geometry randomization for debugging purposes |

## gizmogroup

| Operator | Description |
|---|---|
| `gizmogroup.gizmo_select` | Select the currently highlighted gizmo |
| `gizmogroup.gizmo_tweak` | Tweak the active gizmo |

## gpencil

| Operator | Description |
|---|---|
| `gpencil.annotate` | Make annotations on the active data |
| `gpencil.annotation_active_frame_delete` | Delete the active frame for the active Annotation Layer |
| `gpencil.annotation_add` | Add new Annotation data-block |
| `gpencil.data_unlink` | Unlink active Annotation data-block |
| `gpencil.layer_annotation_add` | Add new Annotation layer or note for the active data-block |
| `gpencil.layer_annotation_move` | Move the active Annotation layer up/down in the list |
| `gpencil.layer_annotation_remove` | Remove active Annotation layer |
| `gpencil.tint_flip` | Switch tint colors |

## graph

| Operator | Description |
|---|---|
| `graph.bake_keys` | Add keyframes on every frame between the selected keyframes |
| `graph.blend_offset` | Shift selected keys to the value of the neighboring keys as a block |
| `graph.blend_to_default` | Blend selected keys to their default value from their current position |
| `graph.blend_to_ease` | Blends keyframes from current state to an ease-in or ease-out curve |
| `graph.blend_to_neighbor` | Blend selected keyframes to their left or right neighbor |
| `graph.breakdown` | Move selected keyframes to an inbetween position relative to adjacent keys |
| `graph.butterworth_smooth` | Smooth an F-Curve while maintaining the general shape of the curve |
| `graph.clean` | Simplify F-Curves by removing closely spaced keyframes |
| `graph.click_insert` | Insert new keyframe at the cursor position for the active F-Curve |
| `graph.clickselect` | Select keyframes by clicking on them |
| `graph.copy` | Copy selected keyframes to the internal clipboard |
| `graph.cursor_set` | Interactively set the current frame and value cursor |
| `graph.decimate` | Decimate F-Curves by removing keyframes that influence the curve shape the least |
| `graph.delete` | Remove all selected keyframes |
| `graph.driver_delete_invalid` | Delete all visible drivers considered invalid |
| `graph.driver_variables_copy` | Copy the driver variables of the active driver |
| `graph.driver_variables_paste` | Add copied driver variables to the active driver |
| `graph.duplicate` | Make a copy of all selected keyframes |
| `graph.duplicate_move` | Make a copy of all selected keyframes and move them |
| `graph.ease` | Align keyframes on a ease-in or ease-out curve |
| `graph.easing_type` | Set easing type for the F-Curve segments starting from the selected keyframes |
| `graph.equalize_handles` | Ensure selected keyframes' handles have equal length, optionally making them horizontal. Automatic, Automatic Clamped, or Vector handle types will be converted to Aligned |
| `graph.euler_filter` | Fix large jumps and flips in the selected Euler Rotation F-Curves arising from rotation values being clipped when baking physics |
| `graph.extrapolation_type` | Set extrapolation mode for selected F-Curves |
| `graph.fmodifier_add` | Add F-Modifier to the active/selected F-Curves |
| `graph.fmodifier_copy` | Copy the F-Modifier(s) of the active F-Curve |
| `graph.fmodifier_paste` | Add copied F-Modifiers to the selected F-Curves |
| `graph.frame_jump` | Place the cursor on the midpoint of selected keyframes |
| `graph.gaussian_smooth` | Smooth the curve using a Gaussian filter |
| `graph.ghost_curves_clear` | Clear F-Curve snapshots (Ghosts) for active Graph Editor |
| `graph.ghost_curves_create` | Create snapshot (Ghosts) of selected F-Curves as background aid for active Graph Editor |
| `graph.handle_type` | Set type of handle for selected keyframes |
| `graph.hide` | Hide selected curves from Graph Editor view |
| `graph.interpolation_type` | Set interpolation mode for the F-Curve segments starting from the selected keyframes |
| `graph.keyframe_insert` | Insert keyframes for the specified channels |
| `graph.keyframe_jump` | Jump to previous/next keyframe |
| `graph.keys_to_samples` | Convert selected channels to an uneditable set of samples to save storage space |
| `graph.match_slope` | Blend selected keys to the slope of neighboring ones |
| `graph.mirror` | Flip selected keyframes over the selected mirror line |
| `graph.paste` | Paste keyframes from the internal clipboard for the selected channels, starting on the current frame |
| `graph.previewrange_set` | Set Preview Range based on range of selected keyframes |
| `graph.push_pull` | Exaggerate or minimize the value of the selected keys |
| `graph.reveal` | Make previously hidden curves visible again in Graph Editor view |
| `graph.samples_to_keys` | Convert selected channels from samples to keyframes |
| `graph.scale_average` | Scale selected key values by their combined average |
| `graph.scale_from_neighbor` | Increase or decrease the value of selected keys in relationship to the neighboring one |
| `graph.select_all` | Toggle selection of all keyframes |
| `graph.select_box` | Select all keyframes within the specified region |
| `graph.select_circle` | Select keyframe points using circle selection |
| `graph.select_column` | Select all keyframes on the specified frame(s) |
| `graph.select_key_handles` | For selected keyframes, select/deselect any combination of the key itself and its handles |
| `graph.select_lasso` | Select keyframe points using lasso selection |
| `graph.select_leftright` | Select keyframes to the left or the right of the current frame |
| `graph.select_less` | Deselect keyframes on ends of selection islands |
| `graph.select_linked` | Select keyframes occurring in the same F-Curves as selected ones |
| `graph.select_more` | Select keyframes beside already selected ones |
| `graph.shear` | Affect the value of the keys linearly, keeping the same relationship between them using either the left or the right key as reference |
| `graph.smooth` | Apply weighted moving means to make selected F-Curves less bumpy |
| `graph.snap` | Snap selected keyframes to the chosen times/values |
| `graph.snap_cursor_value` | Place the cursor value on the average value of selected keyframes |
| `graph.sound_to_samples` | Bakes a sound wave to samples on selected channels |
| `graph.time_offset` | Shifts the value of selected keys in time |
| `graph.view_all` | Reset viewable area to show full keyframe range |
| `graph.view_frame` | Move the view to the current frame |
| `graph.view_selected` | Reset viewable area to show selected keyframe range |

## grease_pencil

| Operator | Description |
|---|---|
| `grease_pencil.active_frame_delete` | Delete the active Grease Pencil frame(s) |
| `grease_pencil.bake_grease_pencil_animation` | Bake Grease Pencil object transform to Grease Pencil keyframes |
| `grease_pencil.brush_stroke` | Draw a new stroke in the active Grease Pencil object |
| `grease_pencil.caps_set` | Change curve caps mode (rounded or flat) |
| `grease_pencil.clean_loose` | Remove loose points |
| `grease_pencil.convert_curve_type` | Convert type of selected curves |
| `grease_pencil.copy` | Copy the selected Grease Pencil points or strokes to the internal clipboard |
| `grease_pencil.cyclical_set` | Close or open the selected stroke adding a segment from last to first point |
| `grease_pencil.delete` | Delete selected strokes or points |
| `grease_pencil.delete_breakdown` | Remove breakdown frames generated by interpolating between two Grease Pencil frames |
| `grease_pencil.delete_frame` | Delete Grease Pencil Frame(s) |
| `grease_pencil.dissolve` | Delete selected points without splitting strokes |
| `grease_pencil.duplicate` | Duplicate the selected points |
| `grease_pencil.duplicate_move` | Make copies of the selected Grease Pencil strokes and move them |
| `grease_pencil.erase_box` | Erase points in the box region |
| `grease_pencil.erase_lasso` | Erase points in the lasso region |
| `grease_pencil.extrude` | Extrude the selected points |
| `grease_pencil.extrude_move` | Extrude selected points and move them |
| `grease_pencil.fill` | Fill with color the shape formed by strokes |
| `grease_pencil.frame_clean_duplicate` | Remove any keyframe that is a duplicate of the previous one |
| `grease_pencil.frame_duplicate` | Make a copy of the active Grease Pencil frame(s) |
| `grease_pencil.insert_blank_frame` | Insert a blank frame on the current scene frame |
| `grease_pencil.interpolate` | Interpolate Grease Pencil strokes between frames |
| `grease_pencil.interpolate_sequence` | Generate 'in-betweens' to smoothly interpolate between Grease Pencil frames |
| `grease_pencil.join_selection` | New stroke from selected points/strokes |
| `grease_pencil.layer_active` | Set the active Grease Pencil layer |
| `grease_pencil.layer_add` | Add a new Grease Pencil layer in the active object |
| `grease_pencil.layer_duplicate` | Make a copy of the active Grease Pencil layer |
| `grease_pencil.layer_duplicate_object` | Make a copy of the active Grease Pencil layer to selected object |
| `grease_pencil.layer_group_add` | Add a new Grease Pencil layer group in the active object |
| `grease_pencil.layer_group_color_tag` | Change layer group icon |
| `grease_pencil.layer_group_remove` | Remove Grease Pencil layer group in the active object |
| `grease_pencil.layer_hide` | Hide selected/unselected Grease Pencil layers |
| `grease_pencil.layer_isolate` | Make only active layer visible/editable |
| `grease_pencil.layer_lock_all` | Lock all Grease Pencil layers to prevent them from being accidentally modified |
| `grease_pencil.layer_mask_add` | Add new layer as masking |
| `grease_pencil.layer_mask_remove` | Remove Layer Mask |
| `grease_pencil.layer_mask_reorder` | Reorder the active Grease Pencil mask layer up/down in the list |
| `grease_pencil.layer_merge` | Combine layers based on the mode into one layer |
| `grease_pencil.layer_move` | Move the active Grease Pencil layer or Group |
| `grease_pencil.layer_remove` | Remove the active Grease Pencil layer |
| `grease_pencil.layer_reveal` | Show all Grease Pencil layers |
| `grease_pencil.material_copy_to_object` | Append Materials of the active Grease Pencil to other object |
| `grease_pencil.material_hide` | Hide active/inactive Grease Pencil material(s) |
| `grease_pencil.material_isolate` | Toggle whether the active material is the only one that is editable and/or visible |
| `grease_pencil.material_lock_all` | Lock all Grease Pencil materials to prevent them from being accidentally modified |
| `grease_pencil.material_lock_unselected` | Lock any material not used in any selected stroke |
| `grease_pencil.material_lock_unused` | Lock and hide any material not used |
| `grease_pencil.material_reveal` | Unhide all hidden Grease Pencil materials |
| `grease_pencil.material_select` | Select/Deselect all Grease Pencil strokes using current material |
| `grease_pencil.material_unlock_all` | Unlock all Grease Pencil materials so that they can be edited |
| `grease_pencil.move_to_layer` | Move selected strokes to another layer |
| `grease_pencil.outline` | Convert selected strokes to perimeter |
| `grease_pencil.paintmode_toggle` | Enter/Exit paint mode for Grease Pencil strokes |
| `grease_pencil.paste` | Paste Grease Pencil points or strokes from the internal clipboard to the active layer |
| `grease_pencil.primitive_arc` | Create predefined Grease Pencil stroke arcs |
| `grease_pencil.primitive_box` | Create predefined Grease Pencil stroke boxes |
| `grease_pencil.primitive_circle` | Create predefined Grease Pencil stroke circles |
| `grease_pencil.primitive_curve` | Create predefined Grease Pencil stroke curve shapes |
| `grease_pencil.primitive_line` | Create predefined Grease Pencil stroke lines |
| `grease_pencil.primitive_polyline` | Create predefined Grease Pencil stroke polylines |
| `grease_pencil.relative_layer_mask_add` | Mask active layer with layer above or below |
| `grease_pencil.remove_fill_guides` | Remove all the strokes that were created from the fill tool as guides |
| `grease_pencil.reorder` | Change the display order of the selected strokes |
| `grease_pencil.reproject` | Reproject the selected strokes from the current viewpoint as if they had been newly drawn (e.g. to fix problems from accidental 3D cursor movement or accidental viewport changes, or for matching deforming geometry) |
| `grease_pencil.reset_uvs` | Reset UV transformation to default values |
| `grease_pencil.sculpt_paint` | Sculpt strokes in the active Grease Pencil object |
| `grease_pencil.sculptmode_toggle` | Enter/Exit sculpt mode for Grease Pencil strokes |
| `grease_pencil.select_all` | (De)select all visible strokes |
| `grease_pencil.select_alternate` | Select alternated points in strokes with already selected points |
| `grease_pencil.select_ends` | Select end points of strokes |
| `grease_pencil.select_less` | Shrink the selection by one point |
| `grease_pencil.select_linked` | Select all points in curves with any point selection |
| `grease_pencil.select_more` | Grow the selection by one point |
| `grease_pencil.select_random` | Selects random points from the current strokes selection |
| `grease_pencil.select_similar` | Select all strokes with similar characteristics |
| `grease_pencil.separate` | Separate the selected geometry into a new Grease Pencil object |
| `grease_pencil.set_active_material` | Set the selected stroke material as the active material |
| `grease_pencil.set_curve_resolution` | Set resolution of selected curves |
| `grease_pencil.set_curve_type` | Set type of selected curves |
| `grease_pencil.set_handle_type` | Set the handle type for bezier curves |
| `grease_pencil.set_material` | Set active material |
| `grease_pencil.set_selection_mode` | Change the selection mode for Grease Pencil strokes |
| `grease_pencil.set_start_point` | Select which point is the beginning of the curve |
| `grease_pencil.set_uniform_opacity` | Set all stroke points to same opacity |
| `grease_pencil.set_uniform_thickness` | Set all stroke points to same thickness |
| `grease_pencil.snap_cursor_to_selected` | Snap cursor to center of selected points |
| `grease_pencil.snap_to_cursor` | Snap selected points/strokes to the cursor |
| `grease_pencil.snap_to_grid` | Snap selected points to the nearest grid points |
| `grease_pencil.stroke_material_set` | Assign the active material slot to the selected strokes |
| `grease_pencil.stroke_merge_by_distance` | Merge points by distance |
| `grease_pencil.stroke_reset_vertex_color` | Reset vertex color for all or selected strokes |
| `grease_pencil.stroke_simplify` | Simplify selected strokes |
| `grease_pencil.stroke_smooth` | Smooth selected strokes |
| `grease_pencil.stroke_split` | Split selected points to a new stroke |
| `grease_pencil.stroke_subdivide` | Subdivide between continuous selected points of the stroke adding a point half way between them |
| `grease_pencil.stroke_subdivide_smooth` | Subdivide strokes and smooth them |
| `grease_pencil.stroke_switch_direction` | Change direction of the points of the selected strokes |
| `grease_pencil.stroke_trim` | Delete stroke points in between intersecting strokes |
| `grease_pencil.texture_gradient` | Draw a line to set the fill material gradient for the selected strokes |
| `grease_pencil.trace_image` | Extract Grease Pencil strokes from image |
| `grease_pencil.vertex_brush_stroke` | Draw on vertex colors in the active Grease Pencil object |
| `grease_pencil.vertex_color_brightness_contrast` | Adjust vertex color brightness/contrast |
| `grease_pencil.vertex_color_hsv` | Adjust vertex color HSV values |
| `grease_pencil.vertex_color_invert` | Invert RGB values |
| `grease_pencil.vertex_color_levels` | Adjust levels of vertex colors |
| `grease_pencil.vertex_color_set` | Set active color to all selected vertex |
| `grease_pencil.vertex_group_normalize` | Normalize weights of the active vertex group |
| `grease_pencil.vertex_group_normalize_all` | Normalize the weights of all vertex groups, so that for each vertex, the sum of all weights is 1.0 |
| `grease_pencil.vertex_group_smooth` | Smooth the weights of the active vertex group |
| `grease_pencil.vertexmode_toggle` | Enter/Exit vertex paint mode for Grease Pencil strokes |
| `grease_pencil.weight_brush_stroke` | Draw weight on stroke points in the active Grease Pencil object |
| `grease_pencil.weight_invert` | Invert the weight of active vertex group |
| `grease_pencil.weight_sample` | Set the weight of the Draw tool to the weight of the vertex under the mouse cursor |
| `grease_pencil.weight_toggle_direction` | Toggle Add/Subtract for the weight paint draw tool |
| `grease_pencil.weightmode_toggle` | Enter/Exit weight paint mode for Grease Pencil strokes |

## image

| Operator | Description |
|---|---|
| `image.add_render_slot` | Add a new render slot |
| `image.change_frame` | Interactively change the current frame number |
| `image.clear_render_border` | Clear the boundaries of the render region and disable render region |
| `image.clear_render_slot` | Clear the currently selected render slot |
| `image.clipboard_copy` | Copy the image to the clipboard |
| `image.clipboard_paste` | Paste new image from the clipboard |
| `image.convert_to_mesh_plane` | Convert selected reference images to textured mesh plane |
| `image.curves_point_set` | Set black point or white point for curves |
| `image.cycle_render_slot` | Cycle through all non-void render slots |
| `image.external_edit` | Edit image in an external application |
| `image.file_browse` | Open an image file browser, hold Shift to open the file, Alt to browse containing directory |
| `image.flip` | Flip the image |
| `image.import_as_mesh_planes` | Create mesh plane(s) from image files with the appropriate aspect ratio |
| `image.invert` | Invert image's channels |
| `image.match_movie_length` | Set image's user's length to the one of this video |
| `image.new` | Create a new image |
| `image.open` | Open image |
| `image.open_images` | (undocumented operator) |
| `image.pack` | Pack an image as embedded data into the .blend file |
| `image.project_apply` | Project edited image back onto the object |
| `image.project_edit` | Edit a snapshot of the 3D Viewport in an external image editor |
| `image.read_viewlayers` | Read all the current scene's view layers from cache, as needed |
| `image.reload` | Reload current image from disk |
| `image.remove_render_slot` | Remove the current render slot |
| `image.render_border` | Set the boundaries of the render region and enable render region |
| `image.replace` | Replace current image by another one from disk |
| `image.resize` | Resize the image |
| `image.rotate_orthogonal` | Rotate the image |
| `image.sample` | Use mouse to sample a color in current image |
| `image.sample_line` | Sample a line and show it in Scope panels |
| `image.save` | Save the image with current name and settings |
| `image.save_all_modified` | Save all modified images |
| `image.save_as` | Save the image with another name and/or settings |
| `image.save_sequence` | Save a sequence of images |
| `image.tile_add` | Adds a tile to the image |
| `image.tile_fill` | Fill the current tile with a generated image |
| `image.tile_remove` | Removes a tile from the image |
| `image.unpack` | Save an image packed in the .blend file to disk |
| `image.view_all` | View the entire image |
| `image.view_center_cursor` | Center the view so that the cursor is in the middle of the view |
| `image.view_cursor_center` | Set 2D Cursor To Center View location |
| `image.view_ndof` | Use a 3D mouse device to pan/zoom the view |
| `image.view_pan` | Pan the view |
| `image.view_selected` | View all selected UVs |
| `image.view_zoom` | Zoom in/out the image |
| `image.view_zoom_border` | Zoom in the view to the nearest item contained in the border |
| `image.view_zoom_in` | Zoom in the image (centered around 2D cursor) |
| `image.view_zoom_out` | Zoom out the image (centered around 2D cursor) |
| `image.view_zoom_ratio` | Set zoom ratio of the view |

## import_anim

| Operator | Description |
|---|---|
| `import_anim.bvh` | Load a BVH motion capture file |

## import_curve

| Operator | Description |
|---|---|
| `import_curve.svg` | Load a SVG file |

## import_scene

| Operator | Description |
|---|---|
| `import_scene.fbx` | Load a FBX file |
| `import_scene.gltf` | Load a glTF 2.0 file |

## info

| Operator | Description |
|---|---|
| `info.report_copy` | Copy selected reports to clipboard |
| `info.report_delete` | Delete selected reports |
| `info.report_replay` | Replay selected reports |
| `info.reports_display_update` | Update the display of reports in Blender UI (internal use) |
| `info.select_all` | Change selection of all visible reports |
| `info.select_box` | Toggle box selection |
| `info.select_pick` | Select reports by index |

## lattice

| Operator | Description |
|---|---|
| `lattice.flip` | Mirror all control points without inverting the lattice deform |
| `lattice.make_regular` | Set UVW control points a uniform distance apart |
| `lattice.select_all` | Change selection of all UVW control points |
| `lattice.select_less` | Deselect vertices at the boundary of each selection region |
| `lattice.select_mirror` | Select mirrored lattice points |
| `lattice.select_more` | Select vertex directly linked to already selected ones |
| `lattice.select_random` | Randomly select UVW control points |
| `lattice.select_ungrouped` | Select vertices without a group |

## marker

| Operator | Description |
|---|---|
| `marker.add` | Add a new time marker |
| `marker.camera_bind` | Bind the selected camera to a marker on the current frame |
| `marker.delete` | Delete selected time marker(s) |
| `marker.duplicate` | Duplicate selected time marker(s) |
| `marker.make_links_scene` | Copy selected markers to another scene |
| `marker.move` | Move selected time marker(s) |
| `marker.rename` | Rename first selected time marker |
| `marker.select` | Select time marker(s) |
| `marker.select_all` | Change selection of all time markers |
| `marker.select_box` | Select all time markers using box selection |
| `marker.select_leftright` | Select markers on and left/right of the current frame |

## mask

| Operator | Description |
|---|---|
| `mask.add_feather_vertex` | Add vertex to feather |
| `mask.add_feather_vertex_slide` | Add new vertex to feather and slide it |
| `mask.add_vertex` | Add vertex to active spline |
| `mask.add_vertex_slide` | Add new vertex and slide it |
| `mask.copy_splines` | Copy the selected splines to the internal clipboard |
| `mask.cyclic_toggle` | Toggle cyclic for selected splines |
| `mask.delete` | Delete selected control points or splines |
| `mask.duplicate` | Duplicate selected control points and segments between them |
| `mask.duplicate_move` | Duplicate mask and move |
| `mask.feather_weight_clear` | Reset the feather weight to zero |
| `mask.handle_type_set` | Set type of handles for selected control points |
| `mask.hide_view_clear` | Reveal temporarily hidden mask layers |
| `mask.hide_view_set` | Temporarily hide mask layers |
| `mask.layer_move` | Move the active layer up/down in the list |
| `mask.layer_new` | Add new mask layer for masking |
| `mask.layer_remove` | Remove mask layer |
| `mask.new` | Create new mask |
| `mask.normals_make_consistent` | Recalculate the direction of selected handles |
| `mask.parent_clear` | Clear the mask's parenting |
| `mask.parent_set` | Set the mask's parenting |
| `mask.paste_splines` | Paste splines from the internal clipboard |
| `mask.primitive_circle_add` | Add new circle-shaped spline |
| `mask.primitive_square_add` | Add new square-shaped spline |
| `mask.select` | Select spline points |
| `mask.select_all` | Change selection of all curve points |
| `mask.select_box` | Select curve points using box selection |
| `mask.select_circle` | Select curve points using circle selection |
| `mask.select_lasso` | Select curve points using lasso selection |
| `mask.select_less` | Deselect spline points at the boundary of each selection region |
| `mask.select_linked` | Select all curve points linked to already selected ones |
| `mask.select_linked_pick` | (De)select all points linked to the curve under the mouse cursor |
| `mask.select_more` | Select more spline points connected to initial selection |
| `mask.shape_key_clear` | Remove mask shape keyframe for active mask layer at the current frame |
| `mask.shape_key_feather_reset` | Reset feather weights on all selected points animation values |
| `mask.shape_key_insert` | Insert mask shape keyframe for active mask layer at the current frame |
| `mask.shape_key_rekey` | Recalculate animation data on selected points for frames selected in the dopesheet |
| `mask.slide_point` | Slide control points |
| `mask.slide_spline_curvature` | Slide a point on the spline to define its curvature |
| `mask.switch_direction` | Switch direction of selected splines |

## material

| Operator | Description |
|---|---|
| `material.copy` | Copy the material settings and nodes |
| `material.new` | Add a new material |
| `material.paste` | Paste the material settings and nodes |

## mball

| Operator | Description |
|---|---|
| `mball.delete_metaelems` | Delete selected metaball element(s) |
| `mball.duplicate_metaelems` | Duplicate selected metaball element(s) |
| `mball.duplicate_move` | Make copies of the selected metaball elements and move them |
| `mball.hide_metaelems` | Hide (un)selected metaball element(s) |
| `mball.reveal_metaelems` | Reveal all hidden metaball elements |
| `mball.select_all` | Change selection of all metaball elements |
| `mball.select_random_metaelems` | Randomly select metaball elements |
| `mball.select_similar` | Select similar metaballs by property types |

## mesh

| Operator | Description |
|---|---|
| `mesh.attribute_set` | Set values of the active attribute for selected elements |
| `mesh.average_normals` | Average custom normals of selected vertices |
| `mesh.beautify_fill` | Rearrange some faces to try to get less degenerated geometry |
| `mesh.bevel` | Cut into selected items at an angle to create bevel or chamfer |
| `mesh.bisect` | Cut geometry along a plane (click-drag to define plane) |
| `mesh.blend_from_shape` | Blend in shape from a shape key |
| `mesh.bridge_edge_loops` | Create a bridge of faces between two or more selected edge loops |
| `mesh.colors_reverse` | Flip direction of face corner color attribute inside faces |
| `mesh.colors_rotate` | Rotate face corner color attribute inside faces |
| `mesh.convex_hull` | Enclose selected vertices in a convex polyhedron |
| `mesh.customdata_custom_splitnormals_add` | Add a custom split normals layer, if none exists yet |
| `mesh.customdata_custom_splitnormals_clear` | Remove the custom split normals layer, if it exists |
| `mesh.customdata_mask_clear` | Clear vertex sculpt masking data from the mesh |
| `mesh.customdata_skin_add` | Add a vertex skin layer |
| `mesh.customdata_skin_clear` | Clear vertex skin layer |
| `mesh.decimate` | Simplify geometry by collapsing edges |
| `mesh.delete` | Delete selected vertices, edges or faces |
| `mesh.delete_edgeloop` | Delete an edge loop by merging the faces on each side |
| `mesh.delete_loose` | Delete loose vertices, edges or faces |
| `mesh.dissolve_degenerate` | Dissolve zero area faces and zero length edges |
| `mesh.dissolve_edges` | Dissolve edges, merging faces |
| `mesh.dissolve_faces` | Dissolve faces |
| `mesh.dissolve_limited` | Dissolve selected edges and vertices, limited by the angle of surrounding geometry |
| `mesh.dissolve_mode` | Dissolve geometry based on the selection mode |
| `mesh.dissolve_verts` | Dissolve vertices, merge edges and faces |
| `mesh.dupli_extrude_cursor` | Duplicate and extrude selected vertices, edges or faces towards the mouse cursor |
| `mesh.duplicate` | Duplicate selected vertices, edges or faces |
| `mesh.duplicate_move` | Duplicate mesh and move |
| `mesh.edge_collapse` | Collapse isolated edge and face regions, merging data such as UVs and color attributes. This can collapse edge-rings as well as regions of connected faces into vertices |
| `mesh.edge_face_add` | Add an edge or face to selected |
| `mesh.edge_rotate` | Rotate selected edge or adjoining faces |
| `mesh.edge_split` | Split selected edges so that each neighbor face gets its own copy |
| `mesh.edgering_select` | Select an edge ring |
| `mesh.edges_select_sharp` | Select all sharp enough edges |
| `mesh.extrude_context` | Extrude selection |
| `mesh.extrude_context_move` | Extrude region together along the average normal |
| `mesh.extrude_edges_indiv` | Extrude individual edges only |
| `mesh.extrude_edges_move` | Extrude edges and move result |
| `mesh.extrude_faces_indiv` | Extrude individual faces only |
| `mesh.extrude_faces_move` | Extrude each individual face separately along local normals |
| `mesh.extrude_manifold` | Extrude, dissolves edges whose faces form a flat surface and intersect new edges |
| `mesh.extrude_region` | Extrude region of faces |
| `mesh.extrude_region_move` | Extrude region and move result |
| `mesh.extrude_region_shrink_fatten` | Extrude region together along local normals |
| `mesh.extrude_repeat` | Extrude selected vertices, edges or faces repeatedly |
| `mesh.extrude_vertices_move` | Extrude vertices and move result |
| `mesh.extrude_verts_indiv` | Extrude individual vertices only |
| `mesh.face_make_planar` | Flatten selected faces |
| `mesh.face_split_by_edges` | Weld loose edges into faces (splitting them into new faces) |
| `mesh.faces_mirror_uv` | Copy mirror UV coordinates on the X axis based on a mirrored mesh |
| `mesh.faces_select_linked_flat` | Select linked faces by angle |
| `mesh.faces_shade_flat` | Display faces flat |
| `mesh.faces_shade_smooth` | Display faces smooth (using vertex normals) |
| `mesh.fill` | Fill a selected edge loop with faces |
| `mesh.fill_grid` | Fill grid from two loops |
| `mesh.fill_holes` | Fill in holes (boundary edge loops) |
| `mesh.flip_normals` | Flip the direction of selected faces' normals (and of their vertices) |
| `mesh.flip_quad_tessellation` | Flips the tessellation of selected quads |
| `mesh.hide` | Hide (un)selected vertices, edges or faces |
| `mesh.inset` | Inset new faces into selected faces |
| `mesh.intersect` | Cut an intersection into faces |
| `mesh.intersect_boolean` | Cut solid geometry from selected to unselected |
| `mesh.knife_project` | Use other objects outlines and boundaries to project knife cuts |
| `mesh.knife_tool` | Cut new topology |
| `mesh.loop_multi_select` | Select a loop of connected edges by connection type |
| `mesh.loop_select` | Select a loop of connected edges |
| `mesh.loop_to_region` | Select region of faces inside of a selected loop of edges |
| `mesh.loopcut` | Add a new loop between existing loops |
| `mesh.loopcut_slide` | Cut mesh loop and slide it |
| `mesh.mark_freestyle_edge` | (Un)mark selected edges as Freestyle feature edges |
| `mesh.mark_freestyle_face` | (Un)mark selected faces for exclusion from Freestyle feature edge detection |
| `mesh.mark_seam` | (Un)mark selected edges as a seam |
| `mesh.mark_sharp` | (Un)mark selected edges as sharp |
| `mesh.merge` | Merge selected vertices |
| `mesh.merge_normals` | Merge custom normals of selected vertices |
| `mesh.mod_weighted_strength` | Set/Get strength of face (used in Weighted Normal modifier) |
| `mesh.normals_make_consistent` | Make face and vertex normals point either outside or inside the mesh |
| `mesh.normals_tools` | Custom normals tools using Normal Vector of UI |
| `mesh.offset_edge_loops` | Create offset edge loop from the current selection |
| `mesh.offset_edge_loops_slide` | Offset edge loop slide |
| `mesh.point_normals` | Point selected custom normals to specified Target |
| `mesh.poke` | Split a face into a fan |
| `mesh.polybuild_delete_at_cursor` | (undocumented operator) |
| `mesh.polybuild_dissolve_at_cursor` | (undocumented operator) |
| `mesh.polybuild_extrude_at_cursor_move` | (undocumented operator) |
| `mesh.polybuild_face_at_cursor` | (undocumented operator) |
| `mesh.polybuild_face_at_cursor_move` | (undocumented operator) |
| `mesh.polybuild_split_at_cursor` | (undocumented operator) |
| `mesh.polybuild_split_at_cursor_move` | (undocumented operator) |
| `mesh.polybuild_transform_at_cursor` | (undocumented operator) |
| `mesh.polybuild_transform_at_cursor_move` | (undocumented operator) |
| `mesh.primitive_circle_add` | Construct a circle mesh |
| `mesh.primitive_cone_add` | Construct a conic mesh |
| `mesh.primitive_cube_add` | Construct a cube mesh that consists of six square faces |
| `mesh.primitive_cube_add_gizmo` | Construct a cube mesh |
| `mesh.primitive_cylinder_add` | Construct a cylinder mesh |
| `mesh.primitive_grid_add` | Construct a subdivided plane mesh |
| `mesh.primitive_ico_sphere_add` | Construct a spherical mesh that consists of equally sized triangles |
| `mesh.primitive_monkey_add` | Construct a Suzanne mesh |
| `mesh.primitive_plane_add` | Construct a filled planar mesh with 4 vertices |
| `mesh.primitive_torus_add` | Construct a torus mesh |
| `mesh.primitive_uv_sphere_add` | Construct a spherical mesh with quad faces, except for triangle faces at the top and bottom |
| `mesh.quads_convert_to_tris` | Triangulate selected faces |
| `mesh.region_to_loop` | Select boundary edges around the selected faces |
| `mesh.remove_doubles` | Merge vertices based on their proximity |
| `mesh.reveal` | Reveal all hidden vertices, edges and faces |
| `mesh.rip` | Disconnect vertex or edges from connected geometry |
| `mesh.rip_edge` | Extend vertices along the edge closest to the cursor |
| `mesh.rip_edge_move` | Extend vertices and move the result |
| `mesh.rip_move` | Rip polygons and move the result |
| `mesh.screw` | Extrude selected vertices in screw-shaped rotation around the cursor in indicated viewport |
| `mesh.select_all` | (De)select all vertices, edges or faces |
| `mesh.select_axis` | Select all data in the mesh on a single axis |
| `mesh.select_by_attribute` | Select elements based on the active boolean attribute |
| `mesh.select_by_pole_count` | Select vertices at poles by the number of connected edges. In edge and face mode the geometry connected to the vertices is selected |
| `mesh.select_face_by_sides` | Select vertices or faces by the number of face sides |
| `mesh.select_interior_faces` | Select faces where all edges have more than 2 face users |
| `mesh.select_less` | Deselect vertices, edges or faces at the boundary of each selection region |
| `mesh.select_linked` | Select all vertices connected to the current selection |
| `mesh.select_linked_pick` | (De)select all vertices linked to the edge under the mouse cursor |
| `mesh.select_loose` | Select loose geometry based on the selection mode |
| `mesh.select_mirror` | Select mesh items at mirrored locations |
| `mesh.select_mode` | Change selection mode |
| `mesh.select_more` | Select more vertices, edges or faces connected to initial selection |
| `mesh.select_next_item` | Select the next element (using selection order) |
| `mesh.select_non_manifold` | Select all non-manifold vertices or edges |
| `mesh.select_nth` | Deselect every Nth element starting from the active vertex, edge or face |
| `mesh.select_prev_item` | Select the previous element (using selection order) |
| `mesh.select_random` | Randomly select vertices |
| `mesh.select_similar` | Select similar vertices, edges or faces by property types |
| `mesh.select_similar_region` | Select similar face regions to the current selection |
| `mesh.select_ungrouped` | Select vertices without a group |
| `mesh.separate` | Separate selected geometry into a new mesh |
| `mesh.set_normals_from_faces` | Set the custom normals from the selected faces ones |
| `mesh.set_sharpness_by_angle` | Set edge sharpness based on the angle between neighboring faces |
| `mesh.shape_propagate_to_all` | Apply selected vertex locations to all other shape keys |
| `mesh.shortest_path_pick` | Select shortest path between two selections |
| `mesh.shortest_path_select` | Selected shortest path between two vertices/edges/faces |
| `mesh.smooth_normals` | Smooth custom normals based on adjacent vertex normals |
| `mesh.solidify` | Create a solid skin by extruding, compensating for sharp angles |
| `mesh.sort_elements` | The order of selected vertices/edges/faces is modified, based on a given method |
| `mesh.spin` | Extrude selected vertices in a circle around the cursor in indicated viewport |
| `mesh.split` | Split off selected geometry from connected unselected geometry |
| `mesh.split_normals` | Split custom normals of selected vertices |
| `mesh.subdivide` | Subdivide selected edges |
| `mesh.subdivide_edgering` | Subdivide perpendicular edges to the selected edge-ring |
| `mesh.symmetrize` | Enforce symmetry (both form and topological) across an axis |
| `mesh.symmetry_snap` | Snap vertex pairs to their mirrored locations |
| `mesh.tris_convert_to_quads` | Merge triangles into four sided polygons where possible |
| `mesh.unsubdivide` | Un-subdivide selected edges and faces |
| `mesh.uv_texture_add` | Add UV map |
| `mesh.uv_texture_remove` | Remove UV map |
| `mesh.uvs_reverse` | Flip direction of UV coordinates inside faces |
| `mesh.uvs_rotate` | Rotate UV coordinates inside faces |
| `mesh.vert_connect` | Connect selected vertices of faces, splitting the face |
| `mesh.vert_connect_concave` | Make all faces convex |
| `mesh.vert_connect_nonplanar` | Split non-planar faces that exceed the angle threshold |
| `mesh.vert_connect_path` | Connect vertices by their selection order, creating edges, splitting faces |
| `mesh.vertices_smooth` | Flatten angles of selected vertices |
| `mesh.vertices_smooth_laplacian` | Laplacian smooth of selected vertices |
| `mesh.wireframe` | Create a solid wireframe from faces |

## nla

| Operator | Description |
|---|---|
| `nla.action_pushdown` | Push action down onto the top of the NLA stack as a new strip |
| `nla.action_sync_length` | Synchronize the length of the referenced Action with the length used in the strip |
| `nla.action_unlink` | Unlink this action from the active action slot (and/or exit Tweak Mode) |
| `nla.actionclip_add` | Add an Action-Clip strip (i.e. an NLA Strip referencing an Action) to the active track |
| `nla.apply_scale` | Apply scaling of selected strips to their referenced Actions |
| `nla.bake` | Bake all selected objects location/scale/rotation animation to an action |
| `nla.channels_click` | Handle clicks to select NLA tracks |
| `nla.clear_scale` | Reset scaling of selected strips |
| `nla.click_select` | Handle clicks to select NLA Strips |
| `nla.delete` | Delete selected strips |
| `nla.duplicate` | Duplicate selected NLA-Strips, adding the new strips to new track(s) |
| `nla.duplicate_linked_move` | Duplicate Linked selected NLA-Strips, adding the new strips to new track(s) |
| `nla.duplicate_move` | Duplicate selected NLA-Strips, adding the new strips to new track(s) |
| `nla.fmodifier_add` | Add F-Modifier to the active/selected NLA-Strips |
| `nla.fmodifier_copy` | Copy the F-Modifier(s) of the active NLA-Strip |
| `nla.fmodifier_paste` | Add copied F-Modifiers to the selected NLA-Strips |
| `nla.make_single_user` | Make linked action local to each strip |
| `nla.meta_add` | Add new meta-strips incorporating the selected strips |
| `nla.meta_remove` | Separate out the strips held by the selected meta-strips |
| `nla.move_down` | Move selected strips down a track if there's room |
| `nla.move_up` | Move selected strips up a track if there's room |
| `nla.mute_toggle` | Mute or un-mute selected strips |
| `nla.previewrange_set` | Set Preview Range based on extends of selected strips |
| `nla.select_all` | Select or deselect all NLA-Strips |
| `nla.select_box` | Use box selection to grab NLA-Strips |
| `nla.select_leftright` | Select strips to the left or the right of the current frame |
| `nla.selected_objects_add` | Make selected objects appear in NLA Editor by adding Animation Data |
| `nla.snap` | Move start of strips to specified time |
| `nla.soundclip_add` | Add a strip for controlling when speaker plays its sound clip |
| `nla.split` | Split selected strips at their midpoints |
| `nla.swap` | Swap order of selected strips within tracks |
| `nla.tracks_add` | Add NLA-Tracks above/after the selected tracks |
| `nla.tracks_delete` | Delete selected NLA-Tracks and the strips they contain |
| `nla.transition_add` | Add a transition strip between two adjacent selected strips |
| `nla.tweakmode_enter` | Enter tweaking mode for the action referenced by the active strip to edit its keyframes |
| `nla.tweakmode_exit` | Exit tweaking mode for the action referenced by the active strip |
| `nla.view_all` | Reset viewable area to show full strips range |
| `nla.view_frame` | Move the view to the current frame |
| `nla.view_selected` | Reset viewable area to show selected strips range |

## node

| Operator | Description |
|---|---|
| `node.activate_viewer` | Activate selected viewer node in compositor and geometry nodes |
| `node.add_closure_zone` | Add a Closure zone |
| `node.add_collection` | Add a collection info node to the current node editor |
| `node.add_color` | Add a color node to the current node editor |
| `node.add_empty_group` | Add a group node with an empty group |
| `node.add_foreach_geometry_element_zone` | Add a For Each Geometry Element zone that allows executing nodes e.g. for each vertex separately |
| `node.add_group` | Add an existing node group to the current node editor |
| `node.add_group_asset` | Add a node group asset to the active node tree |
| `node.add_group_input_node` | Add a Group Input node with selected sockets to the current node editor |
| `node.add_image` | Add a image/movie file as node to the current node editor |
| `node.add_import_node` | Add an import node to the node tree |
| `node.add_mask` | Add a mask node to the current node editor |
| `node.add_material` | Add a material node to the current node editor |
| `node.add_node` | Add a node to the active tree |
| `node.add_object` | Add an object info node to the current node editor |
| `node.add_repeat_zone` | Add a repeat zone that allows executing nodes a dynamic number of times |
| `node.add_reroute` | Add a reroute node |
| `node.add_simulation_zone` | Add simulation zone input and output nodes to the active tree |
| `node.attach` | Attach active node to a frame |
| `node.backimage_fit` | Fit the background image to the view |
| `node.backimage_move` | Move node backdrop |
| `node.backimage_sample` | Use mouse to sample background image |
| `node.backimage_zoom` | Zoom in/out the background image |
| `node.bake_node_item_add` | Add item below active item |
| `node.bake_node_item_move` | Move active item |
| `node.bake_node_item_remove` | Remove active item |
| `node.capture_attribute_item_add` | Add item below active item |
| `node.capture_attribute_item_move` | Move active item |
| `node.capture_attribute_item_remove` | Remove active item |
| `node.clear_viewer_border` | Clear the boundaries for viewer operations |
| `node.clipboard_copy` | Copy the selected nodes to the internal clipboard |
| `node.clipboard_paste` | Paste nodes from the internal clipboard to the active node tree |
| `node.closure_input_item_add` | Add item below active item |
| `node.closure_input_item_move` | Move active item |
| `node.closure_input_item_remove` | Remove active item |
| `node.closure_output_item_add` | Add item below active item |
| `node.closure_output_item_move` | Move active item |
| `node.closure_output_item_remove` | Remove active item |
| `node.collapse_hide_unused_toggle` | Toggle collapsed nodes and hide unused sockets |
| `node.combine_bundle_item_add` | Add item below active item |
| `node.combine_bundle_item_move` | Move active item |
| `node.combine_bundle_item_remove` | Remove active item |
| `node.connect_to_output` | Connect active node to the active output node of the node tree |
| `node.cryptomatte_layer_add` | Add a new input layer to a Cryptomatte node |
| `node.cryptomatte_layer_remove` | Remove layer from a Cryptomatte node |
| `node.deactivate_viewer` | Deactivate selected viewer node in geometry nodes |
| `node.default_group_width_set` | Set the width based on the parent group node in the current context |
| `node.delete` | Remove selected nodes |
| `node.delete_reconnect` | Remove nodes and reconnect nodes as if deletion was muted |
| `node.detach` | Detach selected nodes from parents |
| `node.detach_translate_attach` | Detach nodes, move and attach to frame |
| `node.duplicate` | Duplicate selected nodes |
| `node.duplicate_move` | Duplicate selected nodes and move them |
| `node.duplicate_move_keep_inputs` | Duplicate selected nodes keeping input links and move them |
| `node.duplicate_move_linked` | Duplicate selected nodes, but not their node trees, and move them |
| `node.enum_definition_item_add` | Add item below active item |
| `node.enum_definition_item_move` | Move active item |
| `node.enum_definition_item_remove` | Remove active item |
| `node.evaluate_closure_input_item_add` | Add item below active item |
| `node.evaluate_closure_input_item_move` | Move active item |
| `node.evaluate_closure_input_item_remove` | Remove active item |
| `node.evaluate_closure_output_item_add` | Add item below active item |
| `node.evaluate_closure_output_item_move` | Move active item |
| `node.evaluate_closure_output_item_remove` | Remove active item |
| `node.find_node` | Search for a node by name and focus and select it |
| `node.foreach_geometry_element_zone_generation_item_add` | Add item below active item |
| `node.foreach_geometry_element_zone_generation_item_move` | Move active item |
| `node.foreach_geometry_element_zone_generation_item_remove` | Remove active item |
| `node.foreach_geometry_element_zone_input_item_add` | Add item below active item |
| `node.foreach_geometry_element_zone_input_item_move` | Move active item |
| `node.foreach_geometry_element_zone_input_item_remove` | Remove active item |
| `node.foreach_geometry_element_zone_main_item_add` | Add item below active item |
| `node.foreach_geometry_element_zone_main_item_move` | Move active item |
| `node.foreach_geometry_element_zone_main_item_remove` | Remove active item |
| `node.format_string_item_add` | Add item below active item |
| `node.format_string_item_move` | Move active item |
| `node.format_string_item_remove` | Remove active item |
| `node.gltf_settings_node_operator` | Add a node to the active tree for glTF export |
| `node.group_edit` | Edit node group |
| `node.group_insert` | Insert selected nodes into a node group |
| `node.group_make` | Make group from selected nodes |
| `node.group_separate` | Separate selected nodes from the node group |
| `node.group_ungroup` | Ungroup selected nodes |
| `node.hide_socket_toggle` | Toggle unused node socket display |
| `node.hide_toggle` | Toggle hiding of selected nodes |
| `node.index_switch_item_add` | Add bake item |
| `node.index_switch_item_remove` | Remove an item from the index switch |
| `node.insert_offset` | Automatically offset nodes on insertion |
| `node.interface_item_duplicate` | Add a copy of the active item to the interface |
| `node.interface_item_make_panel_toggle` | Make the active boolean socket a toggle for its parent panel |
| `node.interface_item_new` | Add a new item to the interface |
| `node.interface_item_remove` | Remove active item from the interface |
| `node.interface_item_unlink_panel_toggle` | Make the panel toggle a stand-alone socket |
| `node.join` | Attach selected nodes to a new common frame |
| `node.join_named` | Create a new frame node around the selected nodes and name it immediately |
| `node.link` | Use the mouse to create a link between two nodes |
| `node.link_make` | Make a link between selected output and input sockets |
| `node.link_viewer` | Link to viewer node |
| `node.links_cut` | Use the mouse to cut (remove) some links |
| `node.links_detach` | Remove all links to selected nodes, and try to connect neighbor nodes together |
| `node.links_mute` | Use the mouse to mute links |
| `node.move_detach_links` | Move a node to detach links |
| `node.move_detach_links_release` | Move a node to detach links |
| `node.mute_toggle` | Toggle muting of selected nodes |
| `node.new_geometry_node_group_assign` | Create a new geometry node group and assign it to the active modifier |
| `node.new_geometry_node_group_tool` | Create a new geometry node group for a tool |
| `node.new_geometry_nodes_modifier` | Create a new modifier with a new geometry node group |
| `node.new_node_tree` | Create a new node tree |
| `node.node_color_preset_add` | Add or remove a Node Color Preset |
| `node.node_copy_color` | Copy color to all selected nodes |
| `node.options_toggle` | Toggle option buttons display for selected nodes |
| `node.output_file_add_socket` | Add a new input to a file output node |
| `node.output_file_move_active_socket` | Move the active input of a file output node up or down the list |
| `node.output_file_remove_active_socket` | Remove the active input from a file output node |
| `node.parent_set` | Attach selected nodes |
| `node.preview_toggle` | Toggle preview display for selected nodes |
| `node.read_viewlayers` | Read all render layers of all used scenes |
| `node.render_changed` | Render current scene, when input node's layer has been changed |
| `node.repeat_zone_item_add` | Add item below active item |
| `node.repeat_zone_item_move` | Move active item |
| `node.repeat_zone_item_remove` | Remove active item |
| `node.resize` | Resize a node |
| `node.select` | Select the node under the cursor |
| `node.select_all` | (De)select all nodes |
| `node.select_box` | Use box selection to select nodes |
| `node.select_circle` | Use circle selection to select nodes |
| `node.select_grouped` | Select nodes with similar properties |
| `node.select_lasso` | Select nodes using lasso selection |
| `node.select_link_viewer` | Select node and link it to a viewer node |
| `node.select_linked_from` | Select nodes linked from the selected ones |
| `node.select_linked_to` | Select nodes linked to the selected ones |
| `node.select_same_type_step` | Activate and view same node type, step by step |
| `node.separate_bundle_item_add` | Add item below active item |
| `node.separate_bundle_item_move` | Move active item |
| `node.separate_bundle_item_remove` | Remove active item |
| `node.shader_script_update` | Update shader script node with new sockets and options from the script |
| `node.simulation_zone_item_add` | Add item below active item |
| `node.simulation_zone_item_move` | Move active item |
| `node.simulation_zone_item_remove` | Remove active item |
| `node.translate_attach` | Move nodes and attach to frame |
| `node.translate_attach_remove_on_cancel` | Move nodes and attach to frame |
| `node.tree_path_parent` | Go to parent node tree |
| `node.view_all` | Resize view so you can see all nodes |
| `node.view_selected` | Resize view so you can see selected nodes |
| `node.viewer_border` | Set the boundaries for viewer operations |
| `node.viewer_shortcut_get` | Activate a specific viewer node using 1,2,..,9 keys |
| `node.viewer_shortcut_set` | Create a viewer shortcut for the selected node by pressing ctrl+1,2,..9 |

## object

| Operator | Description |
|---|---|
| `object.add` | Add an object to the scene |
| `object.add_modifier_menu` | (undocumented operator) |
| `object.add_named` | Add named object |
| `object.align` | Align objects |
| `object.anim_transforms_to_deltas` | Convert object animation for normal transforms to delta transforms |
| `object.armature_add` | Add an armature object to the scene |
| `object.assign_property_defaults` | Assign the current values of custom properties as their defaults, for use as part of the rest pose state in NLA track mixing |
| `object.bake` | Bake image textures of selected objects |
| `object.bake_image` | Bake image textures of selected objects |
| `object.camera_add` | Add a camera object to the scene |
| `object.camera_custom_update` | Update custom camera with new parameters from the shader |
| `object.clear_override_library` | Delete the selected local overrides and relink their usages to the linked data-blocks if possible, else reset them and mark them as non editable |
| `object.collection_add` | Add an object to a new collection |
| `object.collection_external_asset_drop` | Add the dragged collection to the scene |
| `object.collection_instance_add` | Add a collection instance |
| `object.collection_link` | Add an object to an existing collection |
| `object.collection_objects_select` | Select all objects in collection |
| `object.collection_remove` | Remove the active object from this collection |
| `object.collection_unlink` | Unlink the collection from all objects |
| `object.constraint_add` | Add a constraint to the active object |
| `object.constraint_add_with_targets` | Add a constraint to the active object, with target (where applicable) set to the selected objects/bones |
| `object.constraints_clear` | Clear all constraints from the selected objects |
| `object.constraints_copy` | Copy constraints to other selected objects |
| `object.convert` | Convert selected objects to another type |
| `object.correctivesmooth_bind` | Bind base pose in Corrective Smooth modifier |
| `object.curves_empty_hair_add` | Add an empty curve object to the scene with the selected mesh as surface |
| `object.curves_random_add` | Add a curves object with random curves to the scene |
| `object.data_instance_add` | Add an object data instance |
| `object.data_transfer` | Transfer data layer(s) (weights, edge sharp, etc.) from active to selected meshes |
| `object.datalayout_transfer` | Transfer layout of data layer(s) from active to selected meshes |
| `object.delete` | Delete selected objects |
| `object.drop_geometry_nodes` | (undocumented operator) |
| `object.drop_named_material` | (undocumented operator) |
| `object.duplicate` | Duplicate selected objects |
| `object.duplicate_move` | Duplicate the selected objects and move them |
| `object.duplicate_move_linked` | Duplicate the selected objects, but not their object data, and move them |
| `object.duplicates_make_real` | Make instanced objects attached to this object real |
| `object.editmode_toggle` | Toggle object's edit mode |
| `object.effector_add` | Add an empty object with a physics effector to the scene |
| `object.empty_add` | Add an empty object to the scene |
| `object.empty_image_add` | Add an empty image type to scene with data |
| `object.explode_refresh` | Refresh data in the Explode modifier |
| `object.forcefield_toggle` | Toggle object's force field |
| `object.geometry_node_bake_delete_single` | Delete baked data of a single bake node or simulation |
| `object.geometry_node_bake_pack_single` | Pack baked data from disk into the .blend file |
| `object.geometry_node_bake_single` | Bake a single bake node or simulation |
| `object.geometry_node_bake_unpack_single` | Unpack baked data from the .blend file to disk |
| `object.geometry_node_tree_copy_assign` | Copy the active geometry node group and assign it to the active modifier |
| `object.geometry_nodes_input_attribute_toggle` | Switch between an attribute and a single value to define the data for every element |
| `object.geometry_nodes_move_to_nodes` | Move inputs and outputs from in the modifier to a new node group |
| `object.grease_pencil_add` | Add a Grease Pencil object to the scene |
| `object.grease_pencil_dash_modifier_segment_add` | Add a segment to the dash modifier |
| `object.grease_pencil_dash_modifier_segment_move` | Move the active dash segment up or down |
| `object.grease_pencil_dash_modifier_segment_remove` | Remove the active segment from the dash modifier |
| `object.grease_pencil_time_modifier_segment_add` | Add a segment to the time modifier |
| `object.grease_pencil_time_modifier_segment_move` | Move the active time segment up or down |
| `object.grease_pencil_time_modifier_segment_remove` | Remove the active segment from the time modifier |
| `object.hide_collection` | Show only objects in collection (Shift to extend) |
| `object.hide_render_clear_all` | Reveal all render objects by setting the hide render flag |
| `object.hide_view_clear` | Reveal temporarily hidden objects |
| `object.hide_view_set` | Temporarily hide objects from the viewport |
| `object.hook_add_newob` | Hook selected vertices to a newly created object |
| `object.hook_add_selob` | Hook selected vertices to the first selected object |
| `object.hook_assign` | Assign the selected vertices to a hook |
| `object.hook_recenter` | Set hook center to cursor position |
| `object.hook_remove` | Remove a hook from the active object |
| `object.hook_reset` | Recalculate and clear offset transformation |
| `object.hook_select` | Select affected vertices on mesh |
| `object.instance_offset_from_cursor` | Set offset used for collection instances based on cursor position |
| `object.instance_offset_from_object` | Set offset used for collection instances based on the active object position |
| `object.instance_offset_to_cursor` | Set cursor position to the offset used for collection instances |
| `object.isolate_type_render` | Hide unselected render objects of same type as active by setting the hide render flag |
| `object.join` | Join selected objects into active object |
| `object.join_shapes` | Add the vertex positions of selected objects as shape keys or update existing shape keys with matching names |
| `object.join_uvs` | Transfer UV Maps from active to selected objects (needs matching geometry) |
| `object.laplaciandeform_bind` | Bind mesh to system in laplacian deform modifier |
| `object.light_add` | Add a light object to the scene |
| `object.light_linking_blocker_collection_new` | Create new light linking collection used by the active emitter |
| `object.light_linking_blockers_link` | Light link selected blockers to the active emitter object |
| `object.light_linking_blockers_select` | Select all objects which block light from this emitter |
| `object.light_linking_receiver_collection_new` | Create new light linking collection used by the active emitter |
| `object.light_linking_receivers_link` | Light link selected receivers to the active emitter object |
| `object.light_linking_receivers_select` | Select all objects which receive light from this emitter |
| `object.light_linking_unlink_from_collection` | Remove this object or collection from the light linking collection |
| `object.lightprobe_add` | Add a light probe object |
| `object.lightprobe_cache_bake` | Bake irradiance volume light cache |
| `object.lightprobe_cache_free` | Delete cached indirect lighting |
| `object.lineart_bake_strokes` | Bake Line Art for current Grease Pencil object |
| `object.lineart_clear` | Clear all strokes in current Grease Pencil object |
| `object.link_to_collection` | Link objects to a collection |
| `object.location_clear` | Clear the object's location |
| `object.make_dupli_face` | Convert objects into instanced faces |
| `object.make_links_data` | Transfer data from active object to selected objects |
| `object.make_links_scene` | Link selection to another scene |
| `object.make_local` | Make library linked data-blocks local to this file |
| `object.make_override_library` | Create a local override of the selected linked objects, and their hierarchy of dependencies |
| `object.make_single_user` | Make linked data local to each object |
| `object.material_slot_add` | Add a new material slot |
| `object.material_slot_assign` | Assign active material slot to selection |
| `object.material_slot_copy` | Copy material to selected objects |
| `object.material_slot_deselect` | Deselect by active material slot |
| `object.material_slot_move` | Move the active material up/down in the list |
| `object.material_slot_remove` | Remove the selected material slot |
| `object.material_slot_remove_all` | Remove all materials |
| `object.material_slot_remove_unused` | Remove unused material slots |
| `object.material_slot_select` | Select by active material slot |
| `object.meshdeform_bind` | Bind mesh to cage in mesh deform modifier |
| `object.metaball_add` | Add an metaball object to the scene |
| `object.mode_set` | Sets the object interaction mode |
| `object.mode_set_with_submode` | Sets the object interaction mode |
| `object.modifier_add` | Add a procedural operation/effect to the active object |
| `object.modifier_add_node_group` | Add a procedural operation/effect to the active object |
| `object.modifier_apply` | Apply modifier and remove from the stack |
| `object.modifier_apply_as_shapekey` | Apply modifier as a new shape key and remove from the stack |
| `object.modifier_convert` | Convert particles to a mesh object |
| `object.modifier_copy` | Duplicate modifier at the same position in the stack |
| `object.modifier_copy_to_selected` | Copy the modifier from the active object to all selected objects |
| `object.modifier_move_down` | Move modifier down in the stack |
| `object.modifier_move_to_index` | Change the modifier's index in the stack so it evaluates after the set number of others |
| `object.modifier_move_up` | Move modifier up in the stack |
| `object.modifier_remove` | Remove a modifier from the active object |
| `object.modifier_set_active` | Activate the modifier to use as the context |
| `object.modifiers_clear` | Clear all modifiers from the selected objects |
| `object.modifiers_copy_to_selected` | Copy modifiers to other selected objects |
| `object.move_to_collection` | Move objects to a collection |
| `object.multires_base_apply` | Modify the base mesh to conform to the displaced mesh |
| `object.multires_external_pack` | Pack displacements from an external file |
| `object.multires_external_save` | Save displacements to an external file |
| `object.multires_higher_levels_delete` | Deletes the higher resolution mesh, potential loss of detail |
| `object.multires_rebuild_subdiv` | Rebuilds all possible subdivisions levels to generate a lower resolution base mesh |
| `object.multires_reshape` | Copy vertex coordinates from other object |
| `object.multires_subdivide` | Add a new level of subdivision |
| `object.multires_unsubdivide` | Rebuild a lower subdivision level of the current base mesh |
| `object.ocean_bake` | Bake an image sequence of ocean data |
| `object.origin_clear` | Clear the object's origin |
| `object.origin_set` | Set the object's origin, by either moving the data, or set to center of data, or use 3D cursor |
| `object.parent_clear` | Clear the object's parenting |
| `object.parent_inverse_apply` | Apply the object's parent inverse to its data |
| `object.parent_no_inverse_set` | Set the object's parenting without setting the inverse parent correction |
| `object.parent_set` | Set the object's parenting |
| `object.particle_system_add` | Add a particle system |
| `object.particle_system_remove` | Remove the selected particle system |
| `object.paths_calculate` | Generate motion paths for the selected objects |
| `object.paths_clear` | (undocumented operator) |
| `object.paths_update` | Recalculate motion paths for selected objects |
| `object.paths_update_visible` | Recalculate all visible motion paths for objects and poses |
| `object.pointcloud_random_add` | Add a point cloud object to the scene |
| `object.posemode_toggle` | Enable or disable posing/selecting bones |
| `object.quadriflow_remesh` | Create a new quad based mesh using the surface data of the current mesh. All data layers will be lost |
| `object.quick_explode` | Make selected objects explode |
| `object.quick_fur` | Add a fur setup to the selected objects |
| `object.quick_liquid` | Make selected objects liquid |
| `object.quick_smoke` | Use selected objects as smoke emitters |
| `object.randomize_transform` | Randomize objects location, rotation, and scale |
| `object.reset_override_library` | Reset the selected local overrides to their linked references values |
| `object.rotation_clear` | Clear the object's rotation |
| `object.scale_clear` | Clear the object's scale |
| `object.select_all` | Change selection of all visible objects in scene |
| `object.select_by_type` | Select all visible objects that are of a type |
| `object.select_camera` | Select the active camera |
| `object.select_grouped` | Select all visible objects grouped by various properties |
| `object.select_hierarchy` | Select object relative to the active object's position in the hierarchy |
| `object.select_less` | Deselect objects at the boundaries of parent/child relationships |
| `object.select_linked` | Select all visible objects that are linked |
| `object.select_mirror` | Select the mirror objects of the selected object e.g. "L.sword" and "R.sword" |
| `object.select_more` | Select connected parent/child objects |
| `object.select_pattern` | Select objects matching a naming pattern |
| `object.select_random` | Select or deselect random visible objects |
| `object.select_same_collection` | Select object in the same collection |
| `object.shade_auto_smooth` | Add modifier to automatically set the sharpness of mesh edges based on the angle between the neighboring faces |
| `object.shade_flat` | Render and display faces uniform, using face normals |
| `object.shade_smooth` | Render and display faces smooth, using interpolated vertex normals |
| `object.shade_smooth_by_angle` | Set the sharpness of mesh edges based on the angle between the neighboring faces |
| `object.shaderfx_add` | Add a visual effect to the active object |
| `object.shaderfx_copy` | Duplicate effect at the same position in the stack |
| `object.shaderfx_move_down` | Move effect down in the stack |
| `object.shaderfx_move_to_index` | Change the effect's position in the list so it evaluates after the set number of others |
| `object.shaderfx_move_up` | Move effect up in the stack |
| `object.shaderfx_remove` | Remove a effect from the active Grease Pencil object |
| `object.shape_key_add` | Add shape key to the object |
| `object.shape_key_clear` | Reset the weights of all shape keys to 0 or to the closest value respecting the limits |
| `object.shape_key_copy` | Duplicate the active shape key |
| `object.shape_key_lock` | Change the lock state of all shape keys of active object |
| `object.shape_key_mirror` | Mirror the current shape key along the local X axis |
| `object.shape_key_move` | Move the active shape key up/down in the list |
| `object.shape_key_remove` | Remove shape key from the object |
| `object.shape_key_retime` | Resets the timing for absolute shape keys |
| `object.shape_key_transfer` | Copy the active shape key of another selected object to this one |
| `object.simulation_nodes_cache_bake` | Bake simulations in geometry nodes modifiers |
| `object.simulation_nodes_cache_calculate_to_frame` | Calculate simulations in geometry nodes modifiers from the start to current frame |
| `object.simulation_nodes_cache_delete` | Delete cached/baked simulations in geometry nodes modifiers |
| `object.skin_armature_create` | Create an armature that parallels the skin layout |
| `object.skin_loose_mark_clear` | Mark/clear selected vertices as loose |
| `object.skin_radii_equalize` | Make skin radii of selected vertices equal on each axis |
| `object.skin_root_mark` | Mark selected vertices as roots |
| `object.speaker_add` | Add a speaker object to the scene |
| `object.subdivision_set` | Sets a Subdivision Surface level (1 to 5) |
| `object.surfacedeform_bind` | Bind mesh to target in surface deform modifier |
| `object.text_add` | Add a text object to the scene |
| `object.track_clear` | Clear tracking constraint or flag from object |
| `object.track_set` | Make the object track another object, using various methods/constraints |
| `object.transfer_mode` | Switches the active object and assigns the same mode to a new one under the mouse cursor, leaving the active mode in the current one |
| `object.transform_apply` | Apply the object's transformation to its data |
| `object.transform_axis_target` | Interactively point cameras and lights to a location (Ctrl translates) |
| `object.transform_to_mouse` | Snap selected item(s) to the mouse location |
| `object.transforms_to_deltas` | Convert normal object transforms to delta transforms, any existing delta transforms will be included as well |
| `object.unlink_data` | (undocumented operator) |
| `object.update_shapes` | Update existing shape keys with the vertex positions of selected objects with matching names |
| `object.vertex_group_add` | Add a new vertex group to the active object |
| `object.vertex_group_assign` | Assign the selected vertices to the active vertex group |
| `object.vertex_group_assign_new` | Assign the selected vertices to a new vertex group |
| `object.vertex_group_clean` | Remove vertex group assignments which are not required |
| `object.vertex_group_copy` | Make a copy of the active vertex group |
| `object.vertex_group_copy_to_selected` | Replace vertex groups of selected objects by vertex groups of active object |
| `object.vertex_group_deselect` | Deselect all selected vertices assigned to the active vertex group |
| `object.vertex_group_invert` | Invert active vertex group's weights |
| `object.vertex_group_levels` | Add some offset and multiply with some gain the weights of the active vertex group |
| `object.vertex_group_limit_total` | Limit deform weights associated with a vertex to a specified number by removing lowest weights |
| `object.vertex_group_lock` | Change the lock state of all or some vertex groups of active object |
| `object.vertex_group_mirror` | Mirror vertex group, flip weights and/or names, editing only selected vertices, flipping when both sides are selected otherwise copy from unselected |
| `object.vertex_group_move` | Move the active vertex group up/down in the list |
| `object.vertex_group_normalize` | Normalize weights of the active vertex group, so that the highest ones are now 1.0 |
| `object.vertex_group_normalize_all` | Normalize all weights of all vertex groups, so that for each vertex, the sum of all weights is 1.0 |
| `object.vertex_group_quantize` | Set weights to a fixed number of steps |
| `object.vertex_group_remove` | Delete the active or all vertex groups from the active object |
| `object.vertex_group_remove_from` | Remove the selected vertices from active or all vertex group(s) |
| `object.vertex_group_select` | Select all the vertices assigned to the active vertex group |
| `object.vertex_group_set_active` | Set the active vertex group |
| `object.vertex_group_smooth` | Smooth weights for selected vertices |
| `object.vertex_group_sort` | Sort vertex groups |
| `object.vertex_parent_set` | Parent selected objects to the selected vertices |
| `object.vertex_weight_copy` | Copy weights from active to selected |
| `object.vertex_weight_delete` | Delete this weight from the vertex (disabled if vertex group is locked) |
| `object.vertex_weight_normalize_active_vertex` | Normalize active vertex's weights |
| `object.vertex_weight_paste` | Copy this group's weight to other selected vertices (disabled if vertex group is locked) |
| `object.vertex_weight_set_active` | Set as active vertex group |
| `object.visual_geometry_to_objects` | Convert geometry and instances into editable objects and collections |
| `object.visual_transform_apply` | Apply the object's visual transformation to its data |
| `object.volume_add` | Add a volume object to the scene |
| `object.volume_import` | Import OpenVDB volume file |
| `object.voxel_remesh` | Calculates a new manifold mesh based on the volume of the current mesh. All data layers will be lost |
| `object.voxel_size_edit` | Modify the mesh voxel size interactively used in the voxel remesher |

## outliner

| Operator | Description |
|---|---|
| `outliner.action_set` | Change the active action used |
| `outliner.animdata_operation` | (undocumented operator) |
| `outliner.clear_filter` | Clear the search filter |
| `outliner.collection_color_tag_set` | Set a color tag for the selected collections |
| `outliner.collection_disable` | Disable viewport display in the view layers |
| `outliner.collection_disable_render` | Do not render this collection |
| `outliner.collection_drop` | Drag to move to collection in Outliner |
| `outliner.collection_duplicate` | Recursively duplicate the collection, all its children, objects and object data |
| `outliner.collection_duplicate_linked` | Recursively duplicate the collection, all its children and objects, with linked object data |
| `outliner.collection_enable` | Enable viewport display in the view layers |
| `outliner.collection_enable_render` | Render the collection |
| `outliner.collection_exclude_clear` | Include collection in the active view layer |
| `outliner.collection_exclude_set` | Exclude collection from the active view layer |
| `outliner.collection_hide` | Hide the collection in this view layer |
| `outliner.collection_hide_inside` | Hide all the objects and collections inside the collection |
| `outliner.collection_hierarchy_delete` | Delete selected collection hierarchies |
| `outliner.collection_holdout_clear` | Clear masking of collection in the active view layer |
| `outliner.collection_holdout_set` | Mask collection in the active view layer |
| `outliner.collection_indirect_only_clear` | Clear collection contributing only indirectly in the view layer |
| `outliner.collection_indirect_only_set` | Set collection to only contribute indirectly (through shadows and reflections) in the view layer |
| `outliner.collection_instance` | Instance selected collections to active scene |
| `outliner.collection_isolate` | Hide all but this collection and its parents |
| `outliner.collection_link` | Link selected collections to active scene |
| `outliner.collection_new` | Add a new collection inside selected collection |
| `outliner.collection_objects_deselect` | Deselect objects in collection |
| `outliner.collection_objects_select` | Select objects in collection |
| `outliner.collection_show` | Show the collection in this view layer |
| `outliner.collection_show_inside` | Show all the objects and collections inside the collection |
| `outliner.constraint_operation` | (undocumented operator) |
| `outliner.data_operation` | (undocumented operator) |
| `outliner.datastack_drop` | Copy or reorder modifiers, constraints, and effects |
| `outliner.delete` | Delete selected objects and collections |
| `outliner.drivers_add_selected` | Add drivers to selected items |
| `outliner.drivers_delete_selected` | Delete drivers assigned to selected items |
| `outliner.expanded_toggle` | Expand/Collapse all items |
| `outliner.hide` | Hide selected objects and collections |
| `outliner.highlight_update` | Update the item highlight based on the current mouse position |
| `outliner.id_copy` | Copy the selected data-blocks to the internal clipboard |
| `outliner.id_delete` | Delete the ID under cursor |
| `outliner.id_linked_relocate` | Replace the active linked ID (and its dependencies if any) by another one, from the same or a different library |
| `outliner.id_operation` | General data-block management operations |
| `outliner.id_paste` | Paste data-blocks from the internal clipboard |
| `outliner.id_remap` | (undocumented operator) |
| `outliner.item_activate` | Handle mouse clicks to select and activate items |
| `outliner.item_drag_drop` | Drag and drop element to another place |
| `outliner.item_openclose` | Toggle whether item under cursor is enabled or closed |
| `outliner.item_rename` | Rename the active element |
| `outliner.keyingset_add_selected` | Add selected items (blue-gray rows) to active Keying Set |
| `outliner.keyingset_remove_selected` | Remove selected items (blue-gray rows) from active Keying Set |
| `outliner.lib_operation` | (undocumented operator) |
| `outliner.lib_relocate` | Relocate the library under cursor |
| `outliner.liboverride_operation` | Create, reset or clear library override hierarchies |
| `outliner.liboverride_troubleshoot_operation` | Advanced operations over library override to help fix broken hierarchies |
| `outliner.material_drop` | Drag material to object in Outliner |
| `outliner.modifier_operation` | (undocumented operator) |
| `outliner.object_operation` | (undocumented operator) |
| `outliner.operation` | Context menu for item operations |
| `outliner.orphans_manage` | Open a window to manage unused data |
| `outliner.orphans_purge` | Clear all orphaned data-blocks without any users from the file |
| `outliner.parent_clear` | Drag to clear parent in Outliner |
| `outliner.parent_drop` | Drag to parent in Outliner |
| `outliner.scene_drop` | Drag object to scene in Outliner |
| `outliner.scene_operation` | Context menu for scene operations |
| `outliner.scroll_page` | Scroll page up or down |
| `outliner.select_all` | Toggle the Outliner selection of items |
| `outliner.select_box` | Use box selection to select tree elements |
| `outliner.select_walk` | Use walk navigation to select tree elements |
| `outliner.show_active` | Open up the tree and adjust the view so that the active object is shown centered |
| `outliner.show_hierarchy` | Open all object entries and close all others |
| `outliner.show_one_level` | Expand/collapse all entries by one level |
| `outliner.start_filter` | Start entering filter text |
| `outliner.unhide_all` | Unhide all objects and collections |

## paint

| Operator | Description |
|---|---|
| `paint.add_simple_uvs` | Add cube map UVs on mesh |
| `paint.add_texture_paint_slot` | Add a paint slot |
| `paint.brush_colors_flip` | Swap primary and secondary brush colors |
| `paint.face_select_all` | Change selection for all faces |
| `paint.face_select_hide` | Hide selected faces |
| `paint.face_select_less` | Deselect Faces connected to existing selection |
| `paint.face_select_linked` | Select linked faces |
| `paint.face_select_linked_pick` | Select linked faces under the cursor |
| `paint.face_select_loop` | Select face loop under the cursor |
| `paint.face_select_more` | Select Faces connected to existing selection |
| `paint.face_vert_reveal` | Reveal hidden faces and vertices |
| `paint.grab_clone` | Move the clone source image |
| `paint.hide_show` | Hide/show some vertices |
| `paint.hide_show_all` | Hide/show all vertices |
| `paint.hide_show_lasso_gesture` | Hide/show some vertices |
| `paint.hide_show_line_gesture` | Hide/show some vertices |
| `paint.hide_show_masked` | Hide/show all masked vertices above a threshold |
| `paint.hide_show_polyline_gesture` | Hide/show some vertices |
| `paint.image_from_view` | Make an image from biggest 3D view for reprojection |
| `paint.image_paint` | Paint a stroke into the image |
| `paint.mask_box_gesture` | Mask within a rectangle defined by the cursor |
| `paint.mask_flood_fill` | Fill the whole mask with a given value, or invert its values |
| `paint.mask_lasso_gesture` | Mask within a shape defined by the cursor |
| `paint.mask_line_gesture` | Mask to one side of a line defined by the cursor |
| `paint.mask_polyline_gesture` | Mask within a shape defined by the cursor |
| `paint.project_image` | Project an edited render from the active camera back onto the object |
| `paint.sample_color` | Use the mouse to sample a color in the image |
| `paint.texture_paint_toggle` | Toggle texture paint mode in 3D view |
| `paint.vert_select_all` | Change selection for all vertices |
| `paint.vert_select_hide` | Hide selected vertices |
| `paint.vert_select_less` | Deselect Vertices connected to existing selection |
| `paint.vert_select_linked` | Select linked vertices |
| `paint.vert_select_linked_pick` | Select linked vertices under the cursor |
| `paint.vert_select_more` | Select Vertices connected to existing selection |
| `paint.vert_select_ungrouped` | Select vertices without a group |
| `paint.vertex_color_brightness_contrast` | Adjust vertex color brightness/contrast |
| `paint.vertex_color_dirt` | Generate a dirt map gradient based on cavity |
| `paint.vertex_color_from_weight` | Convert active weight into gray scale vertex colors |
| `paint.vertex_color_hsv` | Adjust vertex color Hue/Saturation/Value |
| `paint.vertex_color_invert` | Invert RGB values |
| `paint.vertex_color_levels` | Adjust levels of vertex colors |
| `paint.vertex_color_set` | Fill the active vertex color layer with the current paint color |
| `paint.vertex_color_smooth` | Smooth colors across vertices |
| `paint.vertex_paint` | Paint a stroke in the active color attribute layer |
| `paint.vertex_paint_toggle` | Toggle the vertex paint mode in 3D view |
| `paint.visibility_filter` | Edit the visibility of the current mesh |
| `paint.visibility_invert` | Invert the visibility of all vertices |
| `paint.weight_from_bones` | Set the weights of the groups matching the attached armature's selected bones, using the distance between the vertices and the bones |
| `paint.weight_gradient` | Draw a line to apply a weight gradient to selected vertices |
| `paint.weight_paint` | Paint a stroke in the current vertex group's weights |
| `paint.weight_paint_toggle` | Toggle weight paint mode in 3D view |
| `paint.weight_sample` | Use the mouse to sample a weight in the 3D view |
| `paint.weight_sample_group` | Select one of the vertex groups available under current mouse position |
| `paint.weight_set` | Fill the active vertex group with the current paint weight |

## paintcurve

| Operator | Description |
|---|---|
| `paintcurve.add_point` | Add New Paint Curve Point |
| `paintcurve.add_point_slide` | Add new curve point and slide it |
| `paintcurve.cursor` | Place cursor |
| `paintcurve.delete_point` | Remove Paint Curve Point |
| `paintcurve.draw` | Draw curve |
| `paintcurve.new` | Add new paint curve |
| `paintcurve.select` | Select a paint curve point |
| `paintcurve.slide` | Select and slide paint curve point |

## palette

| Operator | Description |
|---|---|
| `palette.color_add` | Add new color to active palette |
| `palette.color_delete` | Remove active color from palette |
| `palette.color_move` | Move the active Color up/down in the list |
| `palette.extract_from_image` | Extract all colors used in Image and create a Palette |
| `palette.join` | Join Palette Swatches |
| `palette.new` | Add new palette |
| `palette.sort` | Sort Palette Colors |

## particle

| Operator | Description |
|---|---|
| `particle.brush_edit` | Apply a stroke of brush to the particles |
| `particle.connect_hair` | Connect hair to the emitter mesh |
| `particle.copy_particle_systems` | Copy particle systems from the active object to selected objects |
| `particle.delete` | Delete selected particles or keys |
| `particle.disconnect_hair` | Disconnect hair from the emitter mesh |
| `particle.duplicate_particle_system` | Duplicate particle system within the active object |
| `particle.dupliob_copy` | Duplicate the current instance object |
| `particle.dupliob_move_down` | Move instance object down in the list |
| `particle.dupliob_move_up` | Move instance object up in the list |
| `particle.dupliob_refresh` | Refresh list of instance objects and their weights |
| `particle.dupliob_remove` | Remove the selected instance object |
| `particle.edited_clear` | Undo all edition performed on the particle system |
| `particle.hair_dynamics_preset_add` | Add or remove a Hair Dynamics Preset |
| `particle.hide` | Hide selected particles |
| `particle.mirror` | Duplicate and mirror the selected particles along the local X axis |
| `particle.new` | Add new particle settings |
| `particle.new_target` | Add a new particle target |
| `particle.particle_edit_toggle` | Toggle particle edit mode |
| `particle.rekey` | Change the number of keys of selected particles (root and tip keys included) |
| `particle.remove_doubles` | Remove selected particles close enough of others |
| `particle.reveal` | Show hidden particles |
| `particle.select_all` | (De)select all particles' keys |
| `particle.select_less` | Deselect boundary selected keys of each particle |
| `particle.select_linked` | Select all keys linked to already selected ones |
| `particle.select_linked_pick` | Select nearest particle from mouse pointer |
| `particle.select_more` | Select keys linked to boundary selected keys of each particle |
| `particle.select_random` | Select a randomly distributed set of hair or points |
| `particle.select_roots` | Select roots of all visible particles |
| `particle.select_tips` | Select tips of all visible particles |
| `particle.shape_cut` | Cut hair to conform to the set shape object |
| `particle.subdivide` | Subdivide selected particles segments (adds keys) |
| `particle.target_move_down` | Move particle target down in the list |
| `particle.target_move_up` | Move particle target up in the list |
| `particle.target_remove` | Remove the selected particle target |
| `particle.unify_length` | Make selected hair the same length |
| `particle.weight_set` | Set the weight of selected keys |

## pointcloud

| Operator | Description |
|---|---|
| `pointcloud.attribute_set` | Set values of the active attribute for selected elements |
| `pointcloud.delete` | Remove selected points |
| `pointcloud.duplicate` | Copy selected points |
| `pointcloud.duplicate_move` | Make copies of selected elements and move them |
| `pointcloud.select_all` | (De)select all point cloud |
| `pointcloud.select_random` | Randomizes existing selection or create new random selection |
| `pointcloud.separate` | Separate selected geometry into a new point cloud |

## pose

| Operator | Description |
|---|---|
| `pose.armature_apply` | Apply the current pose as the new rest pose |
| `pose.autoside_names` | Automatically renames the selected bones according to which side of the target axis they fall on |
| `pose.blend_to_neighbor` | Blend from current position to previous or next keyframe |
| `pose.blend_with_rest` | Make the current pose more similar to, or further away from, the rest pose |
| `pose.breakdown` | Create a suitable breakdown pose on the current frame |
| `pose.constraint_add` | Add a constraint to the active bone |
| `pose.constraint_add_with_targets` | Add a constraint to the active bone, with target (where applicable) set to the selected Objects/Bones |
| `pose.constraints_clear` | Clear all constraints from the selected bones |
| `pose.constraints_copy` | Copy constraints to other selected bones |
| `pose.copy` | Copy the current pose of the selected bones to the internal clipboard |
| `pose.flip_names` | Flips (and corrects) the axis suffixes of the names of selected bones |
| `pose.hide` | Tag selected bones to not be visible in Pose Mode |
| `pose.ik_add` | Add IK Constraint to the active Bone |
| `pose.ik_clear` | Remove all IK Constraints from selected bones |
| `pose.loc_clear` | Reset locations of selected bones to their default values |
| `pose.paste` | Paste the stored pose on to the current pose |
| `pose.paths_calculate` | Calculate paths for the selected bones |
| `pose.paths_clear` | (undocumented operator) |
| `pose.paths_range_update` | Update frame range for motion paths from the Scene's current frame range |
| `pose.paths_update` | Recalculate paths for bones that already have them |
| `pose.propagate` | Copy selected aspects of the current pose to subsequent poses already keyframed |
| `pose.push` | Exaggerate the current pose in regards to the breakdown pose |
| `pose.quaternions_flip` | Flip quaternion values to achieve desired rotations, while maintaining the same orientations |
| `pose.relax` | Make the current pose more similar to its breakdown pose |
| `pose.reveal` | Reveal all bones hidden in Pose Mode |
| `pose.rot_clear` | Reset rotations of selected bones to their default values |
| `pose.rotation_mode_set` | Set the rotation representation used by selected bones |
| `pose.scale_clear` | Reset scaling of selected bones to their default values |
| `pose.select_all` | Toggle selection status of all bones |
| `pose.select_constraint_target` | Select bones used as targets for the currently selected bones |
| `pose.select_grouped` | Select all visible bones grouped by similar properties |
| `pose.select_hierarchy` | Select immediate parent/children of selected bones |
| `pose.select_linked` | Select all bones linked by parent/child connections to the current selection |
| `pose.select_linked_pick` | Select bones linked by parent/child connections under the mouse cursor |
| `pose.select_mirror` | Mirror the bone selection |
| `pose.select_parent` | Select bones that are parents of the currently selected bones |
| `pose.selection_set_add` | Create a new empty Selection Set |
| `pose.selection_set_add_and_assign` | Create a new Selection Set with the currently selected bones |
| `pose.selection_set_assign` | Add selected bones to Selection Set |
| `pose.selection_set_copy` | Copy the selected Selection Set(s) to the clipboard |
| `pose.selection_set_delete_all` | Remove all Selection Sets from this Armature |
| `pose.selection_set_deselect` | Remove Selection Set bones from current selection |
| `pose.selection_set_move` | Move the active Selection Set up/down the list of sets |
| `pose.selection_set_paste` | Add new Selection Set(s) from the clipboard |
| `pose.selection_set_remove` | Remove a Selection Set from this Armature |
| `pose.selection_set_remove_bones` | Remove the selected bones from all Selection Sets |
| `pose.selection_set_select` | Select the bones from this Selection Set |
| `pose.selection_set_unassign` | Remove selected bones from Selection Set |
| `pose.transforms_clear` | Reset location, rotation, and scaling of selected bones to their default values |
| `pose.user_transforms_clear` | Reset pose bone transforms to keyframed state |
| `pose.visual_transform_apply` | Apply final constrained position of pose bones to their transform |

## poselib

| Operator | Description |
|---|---|
| `poselib.apply_pose_asset` | Apply the given Pose Action to the rig |
| `poselib.asset_delete` | Delete the selected Pose Asset |
| `poselib.asset_modify` | Update the selected pose asset in the asset library from the currently selected bones. The mode defines how the asset is updated |
| `poselib.blend_pose_asset` | Blend the given Pose Action to the rig |
| `poselib.convert_old_object_poselib` | Create a pose asset for each pose marker in this legacy pose library data-block |
| `poselib.convert_old_poselib` | Create a pose asset for each pose marker in the current action |
| `poselib.copy_as_asset` | Create a new pose asset on the clipboard, to be pasted into an Asset Browser |
| `poselib.create_pose_asset` | Create a new asset from the selected bones in the scene |
| `poselib.paste_asset` | Paste the Asset that was previously copied using Copy As Asset |
| `poselib.pose_asset_select_bones` | Select those bones that are used in this pose |
| `poselib.restore_previous_action` | Switch back to the previous Action, after creating a pose asset |

## preferences

| Operator | Description |
|---|---|
| `preferences.addon_disable` | Turn off this add-on |
| `preferences.addon_enable` | Turn on this add-on |
| `preferences.addon_expand` | Display information and preferences for this add-on |
| `preferences.addon_install` | Install an add-on |
| `preferences.addon_refresh` | Scan add-on directories for new modules |
| `preferences.addon_remove` | Delete the add-on from the file system |
| `preferences.addon_show` | Show add-on preferences |
| `preferences.app_template_install` | Install an application template |
| `preferences.asset_library_add` | Add a directory to be used by the Asset Browser as source of assets |
| `preferences.asset_library_remove` | Remove a path to a .blend file, so the Asset Browser will not attempt to show it anymore |
| `preferences.associate_blend` | Use this installation for .blend files and to display thumbnails |
| `preferences.autoexec_path_add` | Add path to exclude from auto-execution |
| `preferences.autoexec_path_remove` | Remove path to exclude from auto-execution |
| `preferences.copy_prev` | Copy settings from previous version |
| `preferences.extension_repo_add` | Add a new repository used to store extensions |
| `preferences.extension_repo_remove` | Remove an extension repository |
| `preferences.extension_url_drop` | Handle dropping an extension URL |
| `preferences.keyconfig_activate` | (undocumented operator) |
| `preferences.keyconfig_export` | Export key configuration to a Python script |
| `preferences.keyconfig_import` | Import key configuration from a Python script |
| `preferences.keyconfig_remove` | Remove key config |
| `preferences.keyconfig_test` | Test key configuration for conflicts |
| `preferences.keyitem_add` | Add key map item |
| `preferences.keyitem_remove` | Remove key map item |
| `preferences.keyitem_restore` | Restore key map item |
| `preferences.keymap_restore` | Restore key map(s) |
| `preferences.reset_default_theme` | Reset to the default theme colors |
| `preferences.script_directory_add` | (undocumented operator) |
| `preferences.script_directory_remove` | (undocumented operator) |
| `preferences.studiolight_copy_settings` | Copy Studio Light settings to the Studio Light editor |
| `preferences.studiolight_install` | Install a user defined light |
| `preferences.studiolight_new` | Save custom studio light from the studio light editor settings |
| `preferences.studiolight_uninstall` | Delete Studio Light |
| `preferences.theme_install` | Load and apply a Blender XML theme file |
| `preferences.unassociate_blend` | Remove this installation's associations with .blend files |

## ptcache

| Operator | Description |
|---|---|
| `ptcache.add` | Add new cache |
| `ptcache.bake` | Bake physics |
| `ptcache.bake_all` | Bake all physics |
| `ptcache.bake_from_cache` | Bake from cache |
| `ptcache.free_bake` | Delete physics bake |
| `ptcache.free_bake_all` | Delete all baked caches of all objects in the current scene |
| `ptcache.remove` | Delete current cache |

## render

| Operator | Description |
|---|---|
| `render.color_management_white_balance_preset_add` | Add or remove a white balance preset |
| `render.cycles_integrator_preset_add` | Add an Integrator Preset |
| `render.cycles_performance_preset_add` | Add an Performance Preset |
| `render.cycles_sampling_preset_add` | Add a Sampling Preset |
| `render.cycles_viewport_sampling_preset_add` | Add a Viewport Sampling Preset |
| `render.eevee_raytracing_preset_add` | Add or remove an EEVEE ray-tracing preset |
| `render.opengl` | Take a snapshot of the active viewport |
| `render.play_rendered_anim` | Play back rendered frames/movies using an external player |
| `render.preset_add` | Add or remove a Render Preset |
| `render.render` | Render active scene |
| `render.shutter_curve_preset` | Set shutter curve |
| `render.view_cancel` | Cancel show render view |
| `render.view_show` | Toggle show render view |

## rigidbody

| Operator | Description |
|---|---|
| `rigidbody.bake_to_keyframes` | Bake rigid body transformations of selected objects to keyframes |
| `rigidbody.connect` | Create rigid body constraints between selected rigid bodies |
| `rigidbody.constraint_add` | Add Rigid Body Constraint to active object |
| `rigidbody.constraint_remove` | Remove Rigid Body Constraint from Object |
| `rigidbody.mass_calculate` | Automatically calculate mass values for Rigid Body Objects based on volume |
| `rigidbody.object_add` | Add active object as Rigid Body |
| `rigidbody.object_remove` | Remove Rigid Body settings from Object |
| `rigidbody.object_settings_copy` | Copy Rigid Body settings from active object to selected |
| `rigidbody.objects_add` | Add selected objects as Rigid Bodies |
| `rigidbody.objects_remove` | Remove selected objects from Rigid Body simulation |
| `rigidbody.shape_change` | Change collision shapes for selected Rigid Body Objects |
| `rigidbody.world_add` | Add Rigid Body simulation world to the current scene |
| `rigidbody.world_remove` | Remove Rigid Body simulation world from the current scene |

## scene

| Operator | Description |
|---|---|
| `scene.delete` | Delete active scene |
| `scene.freestyle_add_edge_marks_to_keying_set` | Add the data paths to the Freestyle Edge Mark property of selected edges to the active keying set |
| `scene.freestyle_add_face_marks_to_keying_set` | Add the data paths to the Freestyle Face Mark property of selected polygons to the active keying set |
| `scene.freestyle_alpha_modifier_add` | Add an alpha transparency modifier to the line style associated with the active lineset |
| `scene.freestyle_color_modifier_add` | Add a line color modifier to the line style associated with the active lineset |
| `scene.freestyle_fill_range_by_selection` | Fill the Range Min/Max entries by the min/max distance between selected mesh objects and the source object (either a user-specified object or the active camera) |
| `scene.freestyle_geometry_modifier_add` | Add a stroke geometry modifier to the line style associated with the active lineset |
| `scene.freestyle_lineset_add` | Add a line set into the list of line sets |
| `scene.freestyle_lineset_copy` | Copy the active line set to the internal clipboard |
| `scene.freestyle_lineset_move` | Change the position of the active line set within the list of line sets |
| `scene.freestyle_lineset_paste` | Paste the internal clipboard content to the active line set |
| `scene.freestyle_lineset_remove` | Remove the active line set from the list of line sets |
| `scene.freestyle_linestyle_new` | Create a new line style, reusable by multiple line sets |
| `scene.freestyle_modifier_copy` | Duplicate the modifier within the list of modifiers |
| `scene.freestyle_modifier_move` | Move the modifier within the list of modifiers |
| `scene.freestyle_modifier_remove` | Remove the modifier from the list of modifiers |
| `scene.freestyle_module_add` | Add a style module into the list of modules |
| `scene.freestyle_module_move` | Change the position of the style module within in the list of style modules |
| `scene.freestyle_module_open` | Open a style module file |
| `scene.freestyle_module_remove` | Remove the style module from the stack |
| `scene.freestyle_stroke_material_create` | Create Freestyle stroke material for testing |
| `scene.freestyle_thickness_modifier_add` | Add a line thickness modifier to the line style associated with the active lineset |
| `scene.gltf2_action_filter_refresh` | Refresh list of actions |
| `scene.gpencil_brush_preset_add` | Add or remove grease pencil brush preset |
| `scene.gpencil_material_preset_add` | Add or remove Grease Pencil material preset |
| `scene.new` | Add new scene by type |
| `scene.new_sequencer` | Add new scene by type in the sequence editor and assign to active strip |
| `scene.render_view_add` | Add a render view |
| `scene.render_view_remove` | Remove the selected render view |
| `scene.view_layer_add` | Add a view layer |
| `scene.view_layer_add_aov` | Add a Shader AOV |
| `scene.view_layer_add_lightgroup` | Add a Light Group |
| `scene.view_layer_add_used_lightgroups` | Add all used Light Groups |
| `scene.view_layer_remove` | Remove the selected view layer |
| `scene.view_layer_remove_aov` | Remove Active AOV |
| `scene.view_layer_remove_lightgroup` | Remove Active Lightgroup |
| `scene.view_layer_remove_unused_lightgroups` | Remove all unused Light Groups |

## screen

| Operator | Description |
|---|---|
| `screen.actionzone` | Handle area action zones for mouse actions/gestures |
| `screen.animation_cancel` | Cancel animation, returning to the original frame |
| `screen.animation_play` | Play animation |
| `screen.animation_step` | Step through animation by position |
| `screen.area_close` | Close selected area |
| `screen.area_dupli` | Duplicate selected area into new window |
| `screen.area_join` | Join selected areas into new window |
| `screen.area_move` | Move selected area edges |
| `screen.area_options` | Operations for splitting and merging |
| `screen.area_split` | Split selected area into new windows |
| `screen.area_swap` | Swap selected areas screen positions |
| `screen.back_to_previous` | Revert back to the original screen layout, before fullscreen area overlay |
| `screen.delete` | Delete active screen |
| `screen.drivers_editor_show` | Show drivers editor in a separate window |
| `screen.frame_jump` | Jump to first/last frame in frame range |
| `screen.frame_offset` | Move current frame forward/backward by a given number |
| `screen.header_toggle_menus` | Expand or collapse the header pull-down menus |
| `screen.info_log_show` | Show info log in a separate window |
| `screen.keyframe_jump` | Jump to previous/next keyframe |
| `screen.marker_jump` | Jump to previous/next marker |
| `screen.new` | Add a new screen |
| `screen.redo_last` | Display parameters for last action performed |
| `screen.region_blend` | Blend in and out overlapping region |
| `screen.region_context_menu` | Display region context menu |
| `screen.region_flip` | Toggle the region's alignment (left/right or top/bottom) |
| `screen.region_quadview` | Split selected area into camera, front, right, and top views |
| `screen.region_scale` | Scale selected area |
| `screen.region_toggle` | Hide or unhide the region |
| `screen.repeat_history` | Display menu for previous actions performed |
| `screen.repeat_last` | Repeat last action |
| `screen.screen_full_area` | Toggle display selected area as fullscreen/maximized |
| `screen.screen_set` | Cycle through available screens |
| `screen.screenshot` | Capture a picture of the whole Blender window |
| `screen.screenshot_area` | Capture a picture of an editor |
| `screen.space_context_cycle` | Cycle through the editor context by activating the next/previous one |
| `screen.space_type_set_or_cycle` | Set the space type or cycle subtype |
| `screen.spacedata_cleanup` | Remove unused settings for invisible editors |
| `screen.userpref_show` | Edit user preferences and system settings |
| `screen.workspace_cycle` | Cycle through workspaces |

## script

| Operator | Description |
|---|---|
| `script.execute_preset` | Load a preset |
| `script.python_file_run` | Run Python file |
| `script.reload` | Reload scripts |

## sculpt

| Operator | Description |
|---|---|
| `sculpt.brush_stroke` | Sculpt a stroke into the geometry |
| `sculpt.cloth_filter` | Applies a cloth simulation deformation to the entire mesh |
| `sculpt.color_filter` | Applies a filter to modify the active color attribute |
| `sculpt.detail_flood_fill` | Flood fill the mesh with the selected detail setting |
| `sculpt.dynamic_topology_toggle` | Dynamic topology alters the mesh topology while sculpting |
| `sculpt.dyntopo_detail_size_edit` | Modify the detail size of dyntopo interactively |
| `sculpt.expand` | Generic sculpt expand operator |
| `sculpt.face_set_box_gesture` | Add a face set in a rectangle defined by the cursor |
| `sculpt.face_set_change_visibility` | Change the visibility of the Face Sets of the sculpt |
| `sculpt.face_set_edit` | Edits the current active Face Set |
| `sculpt.face_set_extract` | Create a new mesh object from the selected Face Set |
| `sculpt.face_set_lasso_gesture` | Add a face set in a shape defined by the cursor |
| `sculpt.face_set_line_gesture` | Add a face set to one side of a line defined by the cursor |
| `sculpt.face_set_polyline_gesture` | Add a face set in a shape defined by the cursor |
| `sculpt.face_sets_create` | Create a new Face Set |
| `sculpt.face_sets_init` | Initializes all Face Sets in the mesh |
| `sculpt.face_sets_randomize_colors` | Generates a new set of random colors to render the Face Sets in the viewport |
| `sculpt.mask_by_color` | Creates a mask based on the active color attribute |
| `sculpt.mask_filter` | Applies a filter to modify the current mask |
| `sculpt.mask_from_boundary` | Creates a mask based on the boundaries of the surface |
| `sculpt.mask_from_cavity` | Creates a mask based on the curvature of the surface |
| `sculpt.mask_init` | Creates a new mask for the entire mesh |
| `sculpt.mesh_filter` | Applies a filter to modify the current mesh |
| `sculpt.optimize` | Recalculate the sculpt BVH to improve performance |
| `sculpt.paint_mask_extract` | Create a new mesh object from the current paint mask |
| `sculpt.paint_mask_slice` | Slices the paint mask from the mesh |
| `sculpt.project_line_gesture` | Project the geometry onto a plane defined by a line |
| `sculpt.sample_color` | Sample the vertex color of the active vertex |
| `sculpt.sample_detail_size` | Sample the mesh detail on clicked point |
| `sculpt.sculptmode_toggle` | Toggle sculpt mode in 3D view |
| `sculpt.set_persistent_base` | Reset the copy of the mesh that is being sculpted on |
| `sculpt.set_pivot_position` | Sets the sculpt transform pivot position |
| `sculpt.symmetrize` | Symmetrize the topology modifications |
| `sculpt.trim_box_gesture` | Execute a boolean operation on the mesh and a rectangle defined by the cursor |
| `sculpt.trim_lasso_gesture` | Execute a boolean operation on the mesh and a shape defined by the cursor |
| `sculpt.trim_line_gesture` | Remove a portion of the mesh on one side of a line |
| `sculpt.trim_polyline_gesture` | Execute a boolean operation on the mesh and a polygonal shape defined by the cursor |
| `sculpt.uv_sculpt_grab` | Grab UVs |
| `sculpt.uv_sculpt_pinch` | Pinch UVs |
| `sculpt.uv_sculpt_relax` | Relax UVs |

## sculpt_curves

| Operator | Description |
|---|---|
| `sculpt_curves.brush_stroke` | Sculpt curves using a brush |
| `sculpt_curves.min_distance_edit` | Change the minimum distance used by the density brush |
| `sculpt_curves.select_grow` | Select curves which are close to curves that are selected already |
| `sculpt_curves.select_random` | Randomizes existing selection or create new random selection |

## sequencer

| Operator | Description |
|---|---|
| `sequencer.change_effect_type` | Replace effect strip with another that takes the same number of inputs |
| `sequencer.change_path` | (undocumented operator) |
| `sequencer.change_scene` | Change Scene assigned to Strip |
| `sequencer.connect` | Link selected strips together for simplified group selection |
| `sequencer.copy` | Copy the selected strips to the internal clipboard |
| `sequencer.crossfade_sounds` | Do cross-fading volume animation of two selected sound strips |
| `sequencer.cursor_set` | Set 2D cursor location |
| `sequencer.deinterlace_selected_movies` | Deinterlace all selected movie sources |
| `sequencer.delete` | Delete selected strips from the sequencer |
| `sequencer.disconnect` | Unlink selected strips so that they can be selected individually |
| `sequencer.duplicate` | Duplicate the selected strips |
| `sequencer.duplicate_move` | Duplicate selected strips and move them |
| `sequencer.effect_strip_add` | Add an effect to the sequencer, most are applied on top of existing strips |
| `sequencer.enable_proxies` | Enable selected proxies on all selected Movie and Image strips |
| `sequencer.export_subtitles` | Export .srt file containing text strips |
| `sequencer.fades_add` | Adds or updates a fade animation for either visual or audio strips |
| `sequencer.fades_clear` | Removes fade animation from selected strips |
| `sequencer.gap_insert` | Insert gap at current frame to first strips at the right, independent of selection or locked state of strips |
| `sequencer.gap_remove` | Remove gap at current frame to first strip at the right, independent of selection or locked state of strips |
| `sequencer.image_strip_add` | Add an image or image sequence to the sequencer |
| `sequencer.images_separate` | On image sequence strips, it returns a strip for each image |
| `sequencer.lock` | Lock strips so they can't be transformed |
| `sequencer.mask_strip_add` | Add a mask strip to the sequencer |
| `sequencer.meta_make` | Group selected strips into a meta-strip |
| `sequencer.meta_separate` | Put the contents of a meta-strip back in the sequencer |
| `sequencer.meta_toggle` | Toggle a meta-strip (to edit enclosed strips) |
| `sequencer.movie_strip_add` | Add a movie strip to the sequencer |
| `sequencer.movieclip_strip_add` | Add a movieclip strip to the sequencer |
| `sequencer.mute` | Mute (un)selected strips |
| `sequencer.offset_clear` | Clear strip offsets from the start and end frames |
| `sequencer.paste` | Paste strips from the internal clipboard |
| `sequencer.preview_duplicate_move` | Duplicate selected strips and move them |
| `sequencer.reassign_inputs` | Reassign the inputs for the effect strip |
| `sequencer.rebuild_proxy` | Rebuild all selected proxies and timecode indices |
| `sequencer.refresh_all` | Refresh the sequencer editor |
| `sequencer.reload` | Reload strips in the sequencer |
| `sequencer.rename_channel` | (undocumented operator) |
| `sequencer.rendersize` | Set render size and aspect from active strip |
| `sequencer.retiming_add_freeze_frame_slide` | Add freeze frame and move it |
| `sequencer.retiming_add_transition_slide` | Add smooth transition between 2 retimed segments and change its duration |
| `sequencer.retiming_freeze_frame_add` | Add freeze frame |
| `sequencer.retiming_key_add` | Add retiming Key |
| `sequencer.retiming_key_delete` | Delete selected retiming keys from the sequencer |
| `sequencer.retiming_reset` | Reset strip retiming |
| `sequencer.retiming_segment_speed_set` | Set speed of retimed segment |
| `sequencer.retiming_show` | Show retiming keys in selected strips |
| `sequencer.retiming_transition_add` | Add smooth transition between 2 retimed segments |
| `sequencer.sample` | Use mouse to sample color in current frame |
| `sequencer.scene_frame_range_update` | Update frame range of scene strip |
| `sequencer.scene_strip_add` | Add a strip to the sequencer using a Blender scene as a source |
| `sequencer.scene_strip_add_new` | Create a new Strip and assign a new Scene as source |
| `sequencer.select` | Select a strip (last selected becomes the "active strip") |
| `sequencer.select_all` | Select or deselect all strips |
| `sequencer.select_box` | Select strips using box selection |
| `sequencer.select_grouped` | Select all strips grouped by various properties |
| `sequencer.select_handle` | Select strip handle |
| `sequencer.select_handles` | Select gizmo handles on the sides of the selected strip |
| `sequencer.select_less` | Shrink the current selection of adjacent selected strips |
| `sequencer.select_linked` | Select all strips adjacent to the current selection |
| `sequencer.select_linked_pick` | Select a chain of linked strips nearest to the mouse pointer |
| `sequencer.select_more` | Select more strips adjacent to the current selection |
| `sequencer.select_side` | Select strips on the nominated side of the selected strips |
| `sequencer.select_side_of_frame` | Select strips relative to the current frame |
| `sequencer.set_range_to_strips` | Set the frame range to the selected strips start and end |
| `sequencer.slip` | Slip the contents of selected strips |
| `sequencer.snap` | Frame where selected strips will be snapped |
| `sequencer.sound_strip_add` | Add a sound strip to the sequencer |
| `sequencer.split` | Split the selected strips in two |
| `sequencer.split_multicam` | Split multicam strip and select camera |
| `sequencer.strip_color_tag_set` | Set a color tag for the selected strips |
| `sequencer.strip_jump` | Move frame to previous edit point |
| `sequencer.strip_modifier_add` | Add a modifier to the strip |
| `sequencer.strip_modifier_copy` | Copy modifiers of the active strip to all selected strips |
| `sequencer.strip_modifier_equalizer_redefine` | Redefine equalizer graphs |
| `sequencer.strip_modifier_move` | Move modifier up and down in the stack |
| `sequencer.strip_modifier_remove` | Remove a modifier from the strip |
| `sequencer.strip_transform_clear` | Reset image transformation to default value |
| `sequencer.strip_transform_fit` | (undocumented operator) |
| `sequencer.swap` | Swap active strip with strip to the right or left |
| `sequencer.swap_data` | Swap 2 sequencer strips |
| `sequencer.swap_inputs` | Swap the two inputs of the effect strip |
| `sequencer.text_cursor_move` | Move cursor in text |
| `sequencer.text_cursor_set` | Set cursor position in text |
| `sequencer.text_delete` | Delete text at cursor position |
| `sequencer.text_deselect_all` | Deselect all characters |
| `sequencer.text_edit_copy` | Copy text to clipboard |
| `sequencer.text_edit_cut` | Cut text to clipboard |
| `sequencer.text_edit_mode_toggle` | Toggle text editing |
| `sequencer.text_edit_paste` | Paste text from clipboard |
| `sequencer.text_insert` | Insert text at cursor position |
| `sequencer.text_line_break` | Insert line break at cursor position |
| `sequencer.text_select_all` | Select all characters |
| `sequencer.unlock` | Unlock strips so they can be transformed |
| `sequencer.unmute` | Unmute (un)selected strips |
| `sequencer.view_all` | View all the strips in the sequencer |
| `sequencer.view_all_preview` | Zoom preview to fit in the area |
| `sequencer.view_frame` | Move the view to the current frame |
| `sequencer.view_ghost_border` | Set the boundaries of the border used for offset view |
| `sequencer.view_selected` | Zoom the sequencer on the selected strips |
| `sequencer.view_zoom_ratio` | Change zoom ratio of sequencer preview |

## sound

| Operator | Description |
|---|---|
| `sound.bake_animation` | Update the audio animation cache |
| `sound.mixdown` | Mix the scene's audio to a sound file |
| `sound.open` | Load a sound file |
| `sound.open_mono` | Load a sound file as mono |
| `sound.pack` | Pack the sound into the current blend file |
| `sound.unpack` | Unpack the sound to the samples filename |
| `sound.update_animation_flags` | Update animation flags |

## spreadsheet

| Operator | Description |
|---|---|
| `spreadsheet.add_row_filter_rule` | Add a filter to remove rows from the displayed data |
| `spreadsheet.change_spreadsheet_data_source` | Change visible data source in the spreadsheet |
| `spreadsheet.fit_column` | Resize a spreadsheet column to the width of the data |
| `spreadsheet.remove_row_filter_rule` | Remove a row filter from the rules |
| `spreadsheet.reorder_columns` | Change the order of columns |
| `spreadsheet.resize_column` | Resize a spreadsheet column |
| `spreadsheet.toggle_pin` | Turn on or off pinning |

## surface

| Operator | Description |
|---|---|
| `surface.primitive_nurbs_surface_circle_add` | Construct a Nurbs surface Circle |
| `surface.primitive_nurbs_surface_curve_add` | Construct a Nurbs surface Curve |
| `surface.primitive_nurbs_surface_cylinder_add` | Construct a Nurbs surface Cylinder |
| `surface.primitive_nurbs_surface_sphere_add` | Construct a Nurbs surface Sphere |
| `surface.primitive_nurbs_surface_surface_add` | Construct a Nurbs surface Patch |
| `surface.primitive_nurbs_surface_torus_add` | Construct a Nurbs surface Torus |

## text

| Operator | Description |
|---|---|
| `text.autocomplete` | Show a list of used text in the open document |
| `text.comment_toggle` | (undocumented operator) |
| `text.convert_whitespace` | Convert whitespaces by type |
| `text.copy` | Copy selected text to clipboard |
| `text.cursor_set` | Set cursor position |
| `text.cut` | Cut selected text to clipboard |
| `text.delete` | Delete text by cursor position |
| `text.duplicate_line` | Duplicate the current line |
| `text.find` | Find specified text |
| `text.find_set_selected` | Find specified text and set as selected |
| `text.indent` | Indent selected text |
| `text.indent_or_autocomplete` | Indent selected text or autocomplete |
| `text.insert` | Insert text at cursor position |
| `text.jump` | Jump cursor to line |
| `text.jump_to_file_at_point` | Jump to a file for the text editor |
| `text.line_break` | Insert line break at cursor position |
| `text.line_number` | The current line number |
| `text.make_internal` | Make active text file internal |
| `text.move` | Move cursor to position type |
| `text.move_lines` | Move the currently selected line(s) up/down |
| `text.move_select` | Move the cursor while selecting |
| `text.new` | Create a new text data-block |
| `text.open` | Open a new text data-block |
| `text.overwrite_toggle` | Toggle overwrite while typing |
| `text.paste` | Paste text from clipboard |
| `text.reload` | Reload active text data-block from its file |
| `text.replace` | Replace text with the specified text |
| `text.replace_set_selected` | Replace text with specified text and set as selected |
| `text.resolve_conflict` | When external text is out of sync, resolve the conflict |
| `text.run_script` | Run active script |
| `text.save` | Save active text data-block |
| `text.save_as` | Save active text file with options |
| `text.scroll` | (undocumented operator) |
| `text.scroll_bar` | (undocumented operator) |
| `text.select_all` | Select all text |
| `text.select_line` | Select text by line |
| `text.select_word` | Select word under cursor |
| `text.selection_set` | Set text selection |
| `text.start_find` | Start searching text |
| `text.to_3d_object` | Create 3D text object from active text data-block |
| `text.unindent` | Unindent selected text |
| `text.unlink` | Unlink active text data-block |
| `text.update_shader` | Update users of this shader, such as custom cameras and script nodes, with its new sockets and options |

## text_editor

| Operator | Description |
|---|---|
| `text_editor.preset_add` | Add or remove a Text Editor Preset |

## texture

| Operator | Description |
|---|---|
| `texture.new` | Add a new texture |
| `texture.slot_copy` | Copy the material texture settings and nodes |
| `texture.slot_move` | Move texture slots up and down |
| `texture.slot_paste` | Copy the texture settings and nodes |

## transform

| Operator | Description |
|---|---|
| `transform.bbone_resize` | Scale selected bendy bones display size |
| `transform.bend` | Bend selected items between the 3D cursor and the mouse |
| `transform.create_orientation` | Create transformation orientation from selection |
| `transform.delete_orientation` | Delete transformation orientation |
| `transform.edge_bevelweight` | Change the bevel weight of edges |
| `transform.edge_crease` | Change the crease of edges |
| `transform.edge_slide` | Slide an edge loop along a mesh |
| `transform.from_gizmo` | Transform selected items by mode type |
| `transform.mirror` | Mirror selected items around one or more axes |
| `transform.push_pull` | Push/Pull selected items |
| `transform.resize` | Scale (resize) selected items |
| `transform.rotate` | Rotate selected items |
| `transform.rotate_normal` | Rotate split normal of selected items |
| `transform.select_orientation` | Select transformation orientation |
| `transform.seq_slide` | Slide a sequence strip in time |
| `transform.shear` | Shear selected items along the given axis |
| `transform.shrink_fatten` | Shrink/fatten selected vertices along normals |
| `transform.skin_resize` | Scale selected vertices' skin radii |
| `transform.tilt` | Tilt selected control vertices of 3D curve |
| `transform.tosphere` | Move selected items outward in a spherical shape around geometric center |
| `transform.trackball` | Trackball style rotation of selected items |
| `transform.transform` | Transform selected items by mode type |
| `transform.translate` | Move selected items |
| `transform.vert_crease` | Change the crease of vertices |
| `transform.vert_slide` | Slide a vertex along a mesh |
| `transform.vertex_random` | Randomize vertices |
| `transform.vertex_warp` | Warp vertices around the cursor |

## ui

| Operator | Description |
|---|---|
| `ui.assign_default_button` | Set this property's current value as the new default |
| `ui.button_execute` | Presses active button |
| `ui.button_string_clear` | Unsets the text of the active button |
| `ui.copy_as_driver_button` | Create a new driver with this property as input, and copy it to the internal clipboard. Use Paste Driver to add it to the target property, or Paste Driver Variables to extend an existing driver |
| `ui.copy_data_path_button` | Copy the RNA data path for this property to the clipboard |
| `ui.copy_driver_to_selected_button` | Copy the property's driver from the active item to the same property of all selected items, if the same property exists |
| `ui.copy_python_command_button` | Copy the Python command matching this button |
| `ui.copy_to_selected_button` | Copy the property's value from the active item to the same property of all selected items if the same property exists |
| `ui.drop_color` | Drop colors to buttons |
| `ui.drop_material` | Drag material to Material slots in Properties |
| `ui.drop_name` | Drop name to button |
| `ui.editsource` | Edit UI source code of the active button |
| `ui.eyedropper_bone` | Sample a bone from the 3D View or the Outliner to store in a property |
| `ui.eyedropper_color` | Sample a color from the Blender window to store in a property |
| `ui.eyedropper_colorramp` | Sample a color band |
| `ui.eyedropper_colorramp_point` | Point-sample a color band |
| `ui.eyedropper_depth` | Sample depth from the 3D view |
| `ui.eyedropper_driver` | Pick a property to use as a driver target |
| `ui.eyedropper_grease_pencil_color` | Sample a color from the Blender Window and create Grease Pencil material |
| `ui.eyedropper_id` | Sample a data-block from the 3D View to store in a property |
| `ui.jump_to_target_button` | Switch to the target object or bone |
| `ui.list_start_filter` | Start entering filter text for the list in focus |
| `ui.override_idtemplate_clear` | Delete the selected local override and relink its usages to the linked data-block if possible, else reset it and mark it as non editable |
| `ui.override_idtemplate_make` | Create a local override of the selected linked data-block, and its hierarchy of dependencies |
| `ui.override_idtemplate_reset` | Reset the selected local override to its linked reference values |
| `ui.override_remove_button` | Remove an override operation |
| `ui.override_type_set_button` | Create an override operation, or set the type of an existing one |
| `ui.reloadtranslation` | Force a full reload of UI translation |
| `ui.reset_default_button` | Reset this property's value to its default value |
| `ui.unset_property_button` | Clear the property and use default or generated value in operators |
| `ui.view_drop` | Drag and drop onto a data-set or item within the data-set |
| `ui.view_item_rename` | Rename the active item in the data-set view |
| `ui.view_scroll` | (undocumented operator) |
| `ui.view_start_filter` | Start entering filter text for the data-set in focus |

## uilist

| Operator | Description |
|---|---|
| `uilist.entry_add` | Add an entry to the list after the current active item |
| `uilist.entry_move` | Move an entry in the list up or down |
| `uilist.entry_remove` | Remove the selected entry from the list |

## uv

| Operator | Description |
|---|---|
| `uv.align` | Aligns selected UV vertices on a line |
| `uv.align_rotation` | Align the UV island's rotation |
| `uv.average_islands_scale` | Average the size of separate UV islands, based on their area in 3D space |
| `uv.copy` | Copy selected UV vertices |
| `uv.cube_project` | Project the UV vertices of the mesh over the six faces of a cube |
| `uv.cursor_set` | Set 2D cursor location |
| `uv.cylinder_project` | Project the UV vertices of the mesh over the curved wall of a cylinder |
| `uv.export_layout` | Export UV layout to file |
| `uv.follow_active_quads` | Follow UVs from active quads along continuous face loops |
| `uv.hide` | Hide (un)selected UV vertices |
| `uv.lightmap_pack` | Pack each face's UVs into the UV bounds |
| `uv.mark_seam` | Mark selected UV edges as seams |
| `uv.minimize_stretch` | Reduce UV stretching by relaxing angles |
| `uv.pack_islands` | Transform all islands so that they fill up the UV/UDIM space as much as possible |
| `uv.paste` | Paste selected UV vertices |
| `uv.pin` | Set/clear selected UV vertices as anchored between multiple unwrap operations |
| `uv.project_from_view` | Project the UV vertices of the mesh as seen in current 3D view |
| `uv.randomize_uv_transform` | Randomize the UV island's location, rotation, and scale |
| `uv.remove_doubles` | Selected UV vertices that are within a radius of each other are welded together |
| `uv.reset` | Reset UV projection |
| `uv.reveal` | Reveal all hidden UV vertices |
| `uv.rip` | Rip selected vertices or a selected region |
| `uv.rip_move` | Unstitch UVs and move the result |
| `uv.seams_from_islands` | Set mesh seams according to island setup in the UV editor |
| `uv.select` | Select UV vertices |
| `uv.select_all` | Change selection of all UV vertices |
| `uv.select_box` | Select UV vertices using box selection |
| `uv.select_circle` | Select UV vertices using circle selection |
| `uv.select_edge_ring` | Select an edge ring of connected UV vertices |
| `uv.select_lasso` | Select UVs using lasso selection |
| `uv.select_less` | Deselect UV vertices at the boundary of each selection region |
| `uv.select_linked` | Select all UV vertices linked to the active UV map |
| `uv.select_linked_pick` | Select all UV vertices linked under the mouse |
| `uv.select_loop` | Select a loop of connected UV vertices |
| `uv.select_mode` | Change UV selection mode |
| `uv.select_more` | Select more UV vertices connected to initial selection |
| `uv.select_overlap` | Select all UV faces which overlap each other |
| `uv.select_pinned` | Select all pinned UV vertices |
| `uv.select_similar` | Select similar UVs by property types |
| `uv.select_split` | Select only entirely selected faces |
| `uv.shortest_path_pick` | Select shortest path between two selections |
| `uv.shortest_path_select` | Selected shortest path between two vertices/edges/faces |
| `uv.smart_project` | Projection unwraps the selected faces of mesh objects |
| `uv.snap_cursor` | Snap cursor to target type |
| `uv.snap_selected` | Snap selected UV vertices to target type |
| `uv.sphere_project` | Project the UV vertices of the mesh over the curved surface of a sphere |
| `uv.stitch` | Stitch selected UV vertices by proximity |
| `uv.unwrap` | Unwrap the mesh of the object being edited |
| `uv.weld` | Weld selected UV vertices together |

## view2d

| Operator | Description |
|---|---|
| `view2d.edge_pan` | Pan the view when the mouse is held at an edge |
| `view2d.ndof` | Use a 3D mouse device to pan/zoom the view |
| `view2d.pan` | Pan the view |
| `view2d.reset` | Reset the view |
| `view2d.scroll_down` | Scroll the view down |
| `view2d.scroll_left` | Scroll the view left |
| `view2d.scroll_right` | Scroll the view right |
| `view2d.scroll_up` | Scroll the view up |
| `view2d.scroller_activate` | Scroll view by mouse click and drag |
| `view2d.smoothview` | (undocumented operator) |
| `view2d.zoom` | Zoom in/out the view |
| `view2d.zoom_border` | Zoom in the view to the nearest item contained in the border |
| `view2d.zoom_in` | Zoom in the view |
| `view2d.zoom_out` | Zoom out the view |

## view3d

| Operator | Description |
|---|---|
| `view3d.bone_select_menu` | Menu bone selection |
| `view3d.camera_background_image_add` | Add a new background image to the active camera |
| `view3d.camera_background_image_remove` | Remove a background image from the camera |
| `view3d.camera_to_view` | Set camera view to active view |
| `view3d.camera_to_view_selected` | Move the camera so selected objects are framed |
| `view3d.clear_render_border` | Clear the boundaries of the border render and disable border render |
| `view3d.clip_border` | Set the view clipping region |
| `view3d.copybuffer` | Copy the selected objects to the internal clipboard |
| `view3d.cursor3d` | Set the location of the 3D cursor |
| `view3d.dolly` | Dolly in/out in the view |
| `view3d.drop_world` | Drop a world into the scene |
| `view3d.edit_mesh_extrude_individual_move` | Extrude each individual face separately along local normals |
| `view3d.edit_mesh_extrude_manifold_normal` | Extrude manifold region along normals |
| `view3d.edit_mesh_extrude_move_normal` | Extrude region together along the average normal |
| `view3d.edit_mesh_extrude_move_shrink_fatten` | Extrude region together along local normals |
| `view3d.fly` | Interactively fly around the scene |
| `view3d.interactive_add` | Interactively add an object |
| `view3d.localview` | Toggle display of selected object(s) separately and centered in view |
| `view3d.localview_remove_from` | Move selected objects out of local view |
| `view3d.move` | Move the view |
| `view3d.navigate` | Interactively navigate around the scene (uses the mode (walk/fly) preference) |
| `view3d.ndof_all` | Pan and rotate the view with the 3D mouse |
| `view3d.ndof_orbit` | Orbit the view using the 3D mouse |
| `view3d.ndof_orbit_zoom` | Orbit and zoom the view using the 3D mouse |
| `view3d.ndof_pan` | Pan the view with the 3D mouse |
| `view3d.object_as_camera` | Set the active object as the active camera for this view or scene |
| `view3d.object_mode_pie_or_toggle` | (undocumented operator) |
| `view3d.pastebuffer` | Paste objects from the internal clipboard |
| `view3d.render_border` | Set the boundaries of the border render and enable border render |
| `view3d.rotate` | Rotate the view |
| `view3d.ruler_add` | Add ruler |
| `view3d.ruler_remove` | (undocumented operator) |
| `view3d.select` | Select and activate item(s) |
| `view3d.select_box` | Select items using box selection |
| `view3d.select_circle` | Select items using circle selection |
| `view3d.select_lasso` | Select items using lasso selection |
| `view3d.select_menu` | Menu object selection |
| `view3d.smoothview` | (undocumented operator) |
| `view3d.snap_cursor_to_active` | Snap 3D cursor to the active item |
| `view3d.snap_cursor_to_center` | Snap 3D cursor to the world origin |
| `view3d.snap_cursor_to_grid` | Snap 3D cursor to the nearest grid division |
| `view3d.snap_cursor_to_selected` | Snap 3D cursor to the middle of the selected item(s) |
| `view3d.snap_selected_to_active` | Snap selected item(s) to the active item |
| `view3d.snap_selected_to_cursor` | Snap selected item(s) to the 3D cursor |
| `view3d.snap_selected_to_grid` | Snap selected item(s) to their nearest grid division |
| `view3d.toggle_matcap_flip` | Flip MatCap |
| `view3d.toggle_shading` | Toggle shading type in 3D viewport |
| `view3d.toggle_xray` | Transparent scene display. Allow selecting through items |
| `view3d.transform_gizmo_set` | Set the current transform gizmo |
| `view3d.view_all` | View all objects in scene |
| `view3d.view_axis` | Use a preset viewpoint |
| `view3d.view_camera` | Toggle the camera view |
| `view3d.view_center_camera` | Center the camera view, resizing the view to fit its bounds |
| `view3d.view_center_cursor` | Center the view so that the cursor is in the middle of the view |
| `view3d.view_center_lock` | Center the view lock offset |
| `view3d.view_center_pick` | Center the view to the Z-depth position under the mouse cursor |
| `view3d.view_lock_clear` | Clear all view locking |
| `view3d.view_lock_to_active` | Lock the view to the active object/bone |
| `view3d.view_orbit` | Orbit the view |
| `view3d.view_pan` | Pan the view in a given direction |
| `view3d.view_persportho` | Switch the current view from perspective/orthographic projection |
| `view3d.view_roll` | Roll the view |
| `view3d.view_selected` | Move the view to the selection center |
| `view3d.walk` | Interactively walk around the scene |
| `view3d.zoom` | Zoom in/out in the view |
| `view3d.zoom_border` | Zoom in the view to the nearest object contained in the border |
| `view3d.zoom_camera_1_to_1` | Match the camera to 1:1 to the render output |

## wm

| Operator | Description |
|---|---|
| `wm.alembic_export` | Export current scene in an Alembic archive |
| `wm.alembic_import` | Load an Alembic archive |
| `wm.append` | Append from a Library .blend file |
| `wm.batch_rename` | Rename multiple items at once |
| `wm.blend_strings_utf8_validate` | Check and fix all strings in current .blend file to be valid UTF-8 Unicode (needed for some old, 2.4x area files) |
| `wm.call_asset_shelf_popover` | Open a predefined asset shelf in a popup |
| `wm.call_menu` | Open a predefined menu |
| `wm.call_menu_pie` | Open a predefined pie menu |
| `wm.call_panel` | Open a predefined panel |
| `wm.clear_recent_files` | Clear the recent files list |
| `wm.collada_export` | Save a Collada file (Deprecated) |
| `wm.collada_import` | Load a Collada file (Deprecated) |
| `wm.collection_export_all` | Invoke all configured exporters for all collections |
| `wm.console_toggle` | Toggle System Console |
| `wm.context_collection_boolean_set` | Set boolean values for a collection of items |
| `wm.context_cycle_array` | Set a context array value (useful for cycling the active mesh edit mode) |
| `wm.context_cycle_enum` | Toggle a context value |
| `wm.context_cycle_int` | Set a context value (useful for cycling active material, shape keys, groups, etc.) |
| `wm.context_menu_enum` | (undocumented operator) |
| `wm.context_modal_mouse` | Adjust arbitrary values with mouse input |
| `wm.context_pie_enum` | (undocumented operator) |
| `wm.context_scale_float` | Scale a float context value |
| `wm.context_scale_int` | Scale an int context value |
| `wm.context_set_boolean` | Set a context value |
| `wm.context_set_enum` | Set a context value |
| `wm.context_set_float` | Set a context value |
| `wm.context_set_id` | Set a context value to an ID data-block |
| `wm.context_set_int` | Set a context value |
| `wm.context_set_string` | Set a context value |
| `wm.context_set_value` | Set a context value |
| `wm.context_toggle` | Toggle a context value |
| `wm.context_toggle_enum` | Toggle a context value |
| `wm.debug_menu` | Open a popup to set the debug level |
| `wm.doc_view` | Open online reference docs in a web browser |
| `wm.doc_view_manual` | Load online manual |
| `wm.doc_view_manual_ui_context` | View a context based online manual in a web browser |
| `wm.drop_blend_file` | (undocumented operator) |
| `wm.drop_import_file` | Operator that allows file handlers to receive file drops |
| `wm.fbx_import` | Import FBX file into current scene |
| `wm.grease_pencil_export_pdf` | Export Grease Pencil to PDF |
| `wm.grease_pencil_export_svg` | Export Grease Pencil to SVG |
| `wm.grease_pencil_import_svg` | Import SVG into Grease Pencil |
| `wm.id_linked_relocate` | Relocate a linked ID, i.e. select another ID to link, and remap its local usages to that newly linked data-block). Currently only designed as an internal operator, not directly exposed to the user |
| `wm.interface_theme_preset_add` | Add a custom theme to the preset list |
| `wm.interface_theme_preset_remove` | Remove a custom theme from the preset list |
| `wm.interface_theme_preset_save` | Save a custom theme in the preset list |
| `wm.keyconfig_preset_add` | Add a custom keymap configuration to the preset list |
| `wm.keyconfig_preset_remove` | Remove a custom keymap configuration from the preset list |
| `wm.lib_reload` | Reload the given library |
| `wm.lib_relocate` | Relocate the given library to one or several others |
| `wm.link` | Link from a Library .blend file |
| `wm.memory_statistics` | Print memory statistics to the console |
| `wm.obj_export` | Save the scene to a Wavefront OBJ file |
| `wm.obj_import` | Load a Wavefront OBJ scene |
| `wm.open_mainfile` | Open a Blender file |
| `wm.operator_cheat_sheet` | List all the operators in a text-block, useful for scripting |
| `wm.operator_defaults` | Set the active operator to its default values |
| `wm.operator_pie_enum` | (undocumented operator) |
| `wm.operator_preset_add` | Add or remove an Operator Preset |
| `wm.operator_presets_cleanup` | Remove outdated operator properties from presets that may cause problems |
| `wm.owner_disable` | Disable add-on for workspace |
| `wm.owner_enable` | Enable add-on for workspace |
| `wm.path_open` | Open a path in a file browser |
| `wm.ply_export` | Save the scene to a PLY file |
| `wm.ply_import` | Import an PLY file as an object |
| `wm.previews_batch_clear` | Clear selected .blend file's previews |
| `wm.previews_batch_generate` | Generate selected .blend file's previews |
| `wm.previews_clear` | Clear data-block previews (only for some types like objects, materials, textures, etc.) |
| `wm.previews_ensure` | Ensure data-block previews are available and up-to-date (to be saved in .blend file, only for some types like materials, textures, etc.) |
| `wm.properties_add` | Add your own property to the data-block |
| `wm.properties_context_change` | Jump to a different tab inside the properties editor |
| `wm.properties_edit` | Change a custom property's type, or adjust how it is displayed in the interface |
| `wm.properties_edit_value` | Edit the value of a custom property |
| `wm.properties_remove` | Internal use (edit a property data_path) |
| `wm.quit_blender` | Quit Blender |
| `wm.radial_control` | Set some size property (e.g. brush size) with mouse wheel |
| `wm.read_factory_settings` | Load factory default startup file and preferences. To make changes permanent, use "Save Startup File" and "Save Preferences" |
| `wm.read_factory_userpref` | Load factory default preferences. To make changes to preferences permanent, use "Save Preferences" |
| `wm.read_history` | Reloads history and bookmarks |
| `wm.read_homefile` | Open the default file |
| `wm.read_userpref` | Load last saved preferences |
| `wm.recover_auto_save` | Open an automatically saved file to recover it |
| `wm.recover_last_session` | Open the last closed file ("quit.blend") |
| `wm.redraw_timer` | Simple redraw timer to test the speed of updating the interface |
| `wm.revert_mainfile` | Reload the saved file |
| `wm.save_as_mainfile` | Save the current file in the desired location |
| `wm.save_homefile` | Make the current file the default startup file |
| `wm.save_mainfile` | Save the current Blender file |
| `wm.save_userpref` | Make the current preferences default |
| `wm.search_menu` | Pop-up a search over all menus in the current context |
| `wm.search_operator` | Pop-up a search over all available operators in current context |
| `wm.search_single_menu` | Pop-up a search for a menu in current context |
| `wm.set_stereo_3d` | Toggle 3D stereo support for current window (or change the display mode) |
| `wm.splash` | Open the splash screen with release info |
| `wm.splash_about` | Open a window with information about Blender |
| `wm.stl_export` | Save the scene to an STL file |
| `wm.stl_import` | Import an STL file as an object |
| `wm.sysinfo` | Generate system information, saved into a text file |
| `wm.tool_set_by_brush_type` | Look up the most appropriate tool for the given brush type and activate that |
| `wm.tool_set_by_id` | Set the tool by name (for key-maps) |
| `wm.tool_set_by_index` | Set the tool by index (for key-maps) |
| `wm.toolbar` | (undocumented operator) |
| `wm.toolbar_fallback_pie` | (undocumented operator) |
| `wm.toolbar_prompt` | Leader key like functionality for accessing tools |
| `wm.url_open` | Open a website in the web browser |
| `wm.url_open_preset` | Open a preset website in the web browser |
| `wm.usd_export` | Export current scene in a USD archive |
| `wm.usd_import` | Import USD stage into current scene |
| `wm.window_close` | Close the current window |
| `wm.window_fullscreen_toggle` | Toggle the current window full-screen |
| `wm.window_new` | Create a new window |
| `wm.window_new_main` | Create a new main window with its own workspace and scene selection |
| `wm.xr_navigation_fly` | Move/turn relative to the VR viewer or controller |
| `wm.xr_navigation_grab` | Navigate the VR scene by grabbing with controllers |
| `wm.xr_navigation_reset` | Reset VR navigation deltas relative to session base pose |
| `wm.xr_navigation_teleport` | Set VR viewer location to controller raycast hit location |
| `wm.xr_session_toggle` | Open a view for use with virtual reality headsets, or close it if already opened |

## workspace

| Operator | Description |
|---|---|
| `workspace.add` | Add a new workspace by duplicating the current one or appending one from the user configuration |
| `workspace.append_activate` | Append a workspace and make it the active one in the current window |
| `workspace.delete` | Delete the active workspace |
| `workspace.duplicate` | Add a new workspace |
| `workspace.reorder_to_back` | Reorder workspace to be last in the list |
| `workspace.reorder_to_front` | Reorder workspace to be first in the list |
| `workspace.scene_pin_toggle` | Remember the last used scene for the current workspace and switch to it whenever this workspace is activated again |

## world

| Operator | Description |
|---|---|
| `world.convert_volume_to_mesh` | Convert the volume of a world to a mesh. The world's volume used to be rendered by EEVEE Legacy. Conversion is needed for it to render properly |
| `world.new` | Create a new world Data-Block |
