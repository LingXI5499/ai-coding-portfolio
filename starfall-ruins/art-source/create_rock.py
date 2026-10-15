"""Build the first low-poly rock asset with Blender 5.2 LTS."""

import math
import random
from pathlib import Path

import bpy
from mathutils import Vector


ROOT = Path(__file__).resolve().parent
bpy.ops.object.select_all(action="SELECT")
bpy.ops.object.delete(use_global=False)
bpy.context.scene.unit_settings.system = "METRIC"
bpy.context.scene.unit_settings.scale_length = 1.0

bpy.ops.mesh.primitive_ico_sphere_add(subdivisions=2, radius=1.0)
rock = bpy.context.object
rock.name = "SM_Rock_01"
rock.data.name = "SM_Rock_01_Mesh"
randomizer = random.Random(20260928)
for vertex in rock.data.vertices:
    direction = vertex.co.normalized()
    variation = randomizer.uniform(0.82, 1.18)
    vertex.co = Vector((
        direction.x * variation * 1.0,
        direction.y * variation * 0.75,
        direction.z * variation * 0.65,
    ))

for polygon in rock.data.polygons:
    polygon.use_smooth = False

low = min(v.co.z for v in rock.data.vertices)
for vertex in rock.data.vertices:
    vertex.co.z -= low

material = bpy.data.materials.new("M_Rock_Gray")
material.diffuse_color = (0.39, 0.41, 0.43, 1.0)
material.use_nodes = True
principled = material.node_tree.nodes.get("Principled BSDF")
principled.inputs["Base Color"].default_value = material.diffuse_color
principled.inputs["Roughness"].default_value = 0.92
rock.data.materials.append(material)

bpy.context.view_layer.objects.active = rock
bpy.ops.object.transform_apply(location=False, rotation=True, scale=True)
bpy.ops.wm.save_as_mainfile(filepath=str(ROOT / "rock.blend"))
bpy.ops.export_scene.fbx(
    filepath=str(ROOT.parent / "Assets" / "Art" / "Models" / "SM_Rock_01.fbx"),
    use_selection=True,
    object_types={"MESH"},
    apply_unit_scale=True,
    bake_space_transform=True,
    axis_forward="-Z",
    axis_up="Y",
)
print(f"Rock vertices={len(rock.data.vertices)} faces={len(rock.data.polygons)}")
