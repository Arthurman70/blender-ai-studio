# SPDX-License-Identifier: GPL-3.0-or-later
"""Deterministic scene exercising meshes, modifiers, shaders, nodes, lights and animation."""
import bpy
import math
import random
from mathutils import Vector

random.seed(42)
bpy.ops.object.select_all(action='SELECT')
bpy.ops.object.delete(use_global=False)
for data in list(bpy.data.materials):
    bpy.data.materials.remove(data)

def material(name, color, metal=0.0, rough=.35, emission=0):
    m=bpy.data.materials.new(name)
    m.diffuse_color=(*color,1)
    m.use_nodes=True
    bs=m.node_tree.nodes.get('Principled BSDF')
    bs.inputs['Base Color'].default_value=(*color,1)
    bs.inputs['Metallic'].default_value=metal
    bs.inputs['Roughness'].default_value=rough
    if emission:
        bs.inputs['Emission Color'].default_value=(*color,1)
        bs.inputs['Emission Strength'].default_value=emission
    return m

navy=material('Midnight ceramic',(.017,.043,.075),.5,.3)
brass=material('Brushed champagne brass',(.68,.38,.13),.8,.28)
teal=material('Lagoon enamel',(.025,.32,.32),.5,.24)
cream=material('Ivory porcelain',(.72,.82,.77),.2,.32)
glow=material('Warm signal light',(1,.48,.11),.2,.25,4)
blueglow=material('Cyan signal light',(.06,.6,.8),.1,.2,3)
floor=material('Backdrop',(.013,.024,.043),.15,.42)

def finish(obj,name,mat,bevel=0):
    obj.name=name
    obj.data.materials.append(mat)
    if obj.type=='MESH':
        for p in obj.data.polygons:p.use_smooth=True
    if bevel:
        mod=obj.modifiers.new('Precision edge rounding','BEVEL');mod.width=bevel;mod.segments=3
        obj.modifiers.new('Weighted normals','WEIGHTED_NORMAL')
    return obj

def cylinder(name,radius,depth,z,mat,vertices=96):
    bpy.ops.mesh.primitive_cylinder_add(vertices=vertices,radius=radius,depth=depth,location=(0,0,z))
    return finish(bpy.context.object,name,mat,.045)

def sphere(name,loc,radius,mat):
    bpy.ops.mesh.primitive_uv_sphere_add(segments=48,ring_count=24,radius=radius,location=loc)
    return finish(bpy.context.object,name,mat)

def ring(name,radius,tube,loc,mat,rotation=(0,0,0)):
    bpy.ops.mesh.primitive_torus_add(major_segments=128,minor_segments=16,major_radius=radius,minor_radius=tube,location=loc,rotation=rotation)
    return finish(bpy.context.object,name,mat)

def bar(name,a,b,radius,mat):
    delta=Vector(b)-Vector(a)
    bpy.ops.mesh.primitive_cylinder_add(vertices=24,radius=radius,depth=delta.length,location=(Vector(a)+Vector(b))*.5)
    obj=finish(bpy.context.object,name,mat)
    obj.rotation_euler=delta.to_track_quat('Z','Y').to_euler()
    return obj

scene=bpy.context.scene
scene.name='Aster Observatory'
cylinder('Floating plinth',3.15,.42,.1,navy)
cylinder('Lower brass reveal',3.19,.08,.02,brass)
cylinder('Upper brass rim',3.17,.09,.33,brass)
cylinder('Instrument deck',2.97,.08,.41,teal)
ring('Deck navigation light',2.85,.018,(0,0,.47),blueglow)
cylinder('Central pedestal',.84,.78,.86,navy)
cylinder('Pedestal collar',.91,.1,1.28,brass)
cylinder('Pedestal inset',.9,.04,1.34,blueglow)
planet=sphere('Aster • ocean world',(0,0,2.75),1.12,teal)
noise=teal.node_tree.nodes.new('ShaderNodeTexNoise');noise.inputs['Scale'].default_value=4
ramp=teal.node_tree.nodes.new('ShaderNodeValToRGB')
ramp.color_ramp.elements[0].position=.34;ramp.color_ramp.elements[0].color=(.005,.055,.09,1)
ramp.color_ramp.elements[1].position=.66;ramp.color_ramp.elements[1].color=(.18,.67,.49,1)
teal.node_tree.links.new(noise.outputs['Fac'],ramp.inputs['Fac'])
teal.node_tree.links.new(ramp.outputs['Color'],teal.node_tree.nodes.get('Principled BSDF').inputs['Base Color'])
planet.rotation_euler.z=0;planet.keyframe_insert(data_path='rotation_euler',frame=1)
planet.rotation_euler.z=math.tau;planet.keyframe_insert(data_path='rotation_euler',frame=240)
ring('Meridian gimbal',1.5,.048,(0,0,2.75),brass,(math.pi/2,.25,.3))
ring('Inclined orbital gimbal',1.76,.036,(0,0,2.75),brass,(.65,.4,0))
ring('Equatorial halo',1.32,.018,(0,0,2.75),blueglow)
bar('Axis spindle',(0,0,1.3),(0,0,4.2),.055,brass)
sphere('North signal',(0,0,4.26),.11,glow)
sphere('Orbiting moon',(1.54,0,3.38),.22,cream)
for i in range(36):
    angle=math.tau*i/36
    bpy.ops.mesh.primitive_cube_add(size=1,location=(2.58*math.cos(angle),2.58*math.sin(angle),.49))
    obj=finish(bpy.context.object,f'Compass tick {i+1:02}',brass)
    obj.scale=(.20 if i%3==0 else .11,.025,.017);obj.rotation_euler.z=angle
for i in range(6):
    a=math.tau*i/6
    x,y=2.22*math.cos(a),2.22*math.sin(a)
    sphere(f'Deck beacon {i+1}',(x,y,.56),.065,glow)
    bar(f'Landing leg {i+1}',(x,y,-.04),(x*1.15,y*1.15,-.52),.11,navy)
    sphere(f'Landing foot {i+1}',(x*1.15,y*1.15,-.52),.15,brass)

# A geometry-node network creates a small calibration satellite.
bpy.ops.mesh.primitive_cube_add(size=.35,location=(-1.7,.7,1.15))
satellite=finish(bpy.context.object,'Geometry Nodes • calibration satellite',cream)
group=bpy.data.node_groups.new('Calibration geometry','GeometryNodeTree')
group.interface.new_socket(name='Geometry',in_out='INPUT',socket_type='NodeSocketGeometry')
group.interface.new_socket(name='Geometry',in_out='OUTPUT',socket_type='NodeSocketGeometry')
inp=group.nodes.new('NodeGroupInput');out=group.nodes.new('NodeGroupOutput')
transform=group.nodes.new('GeometryNodeTransform');transform.inputs['Rotation'].default_value=(.3,.2,.4)
group.links.new(inp.outputs['Geometry'],transform.inputs['Geometry']);group.links.new(transform.outputs['Geometry'],out.inputs['Geometry'])
satellite.modifiers.new('Parametric calibration','NODES').node_group=group

bpy.ops.object.text_add(location=(-1.42,-2.02,.50),rotation=(0,0,0))
label=bpy.context.object;label.name='ASTER / OBSERVATORY';label.data.body='A S T E R   /   0 1';label.data.size=.20;label.data.extrude=.004;label.data.materials.append(cream)
bpy.ops.mesh.primitive_plane_add(size=200,location=(0,0,-.7));finish(bpy.context.object,'Infinite studio floor',floor)

def aim(obj,target):obj.rotation_euler=(Vector(target)-obj.location).to_track_quat('-Z','Y').to_euler()
def area(name,loc,color,power,size):
    data=bpy.data.lights.new(name,'AREA');data.energy=power;data.color=color;data.shape='DISK';data.size=size
    obj=bpy.data.objects.new(name,data);scene.collection.objects.link(obj);obj.location=loc;aim(obj,(0,0,1.6))
area('Warm key',(1,-6,9),(1,.79,.55),1500,7)
area('Cool rim',(3,4,6),(.26,.68,1),1900,5)
area('Soft fill',(-5,-1,4),(.54,1,.84),950,5)
camdata=bpy.data.cameras.new('Hero lens');camera=bpy.data.objects.new('Hero camera',camdata);scene.collection.objects.link(camera)
camera.location=(8,-11,8);aim(camera,(0,0,1.65));camdata.type='ORTHO';camdata.ortho_scale=9.3;scene.camera=camera
scene.render.engine='CYCLES';scene.cycles.samples=48;scene.cycles.use_denoising=True
scene.render.resolution_x=1200;scene.render.resolution_y=1000;scene.render.resolution_percentage=100
scene.world.use_nodes=True;scene.world.node_tree.nodes['Background'].inputs[0].default_value=(.055,.09,.15,1);scene.world.node_tree.nodes['Background'].inputs[1].default_value=.35
scene.view_settings.view_transform='AgX'
scene.use_nodes=True
tree=scene.node_tree;tree.nodes.clear();layers=tree.nodes.new('CompositorNodeRLayers');glare=tree.nodes.new('CompositorNodeGlare');glare.glare_type='FOG_GLOW';glare.quality='HIGH';glare.threshold=1.5
out=tree.nodes.new('CompositorNodeComposite');tree.links.new(layers.outputs['Image'],glare.inputs['Image']);tree.links.new(glare.outputs['Image'],out.inputs['Image'])
scene.frame_start=1;scene.frame_end=240;scene.frame_set(1)
result={'scene':scene.name,'objects':len(scene.objects),'features':['mesh modeling','bevel modifiers','PBR shaders','procedural textures','geometry nodes','keyframes','text','area lights','Cycles','compositor']}
