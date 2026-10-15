# Starfall Ruins · 星陨遗迹

Unity 3D 玩法原型：WASD 移动、空格跳跃、鼠标视角，收集星碎片并激活祭坛，解锁传送门完成目标。核心脚本在 Assets/Scripts，场景和关卡构建工具在 Assets/Scenes 与 Assets/Editor。

使用 Unity Hub 导入当前目录。原工程编辑器版本为 Unity 6000.3.25f1，见 ProjectSettings/ProjectVersion.txt；首次打开需要恢复 Packages 中锁定的依赖。

1. 打开 Assets/Scenes/MainScene.unity，进入 Play Mode 检查当前场景。
2. 点击 Game 画面后控制角色，Esc 释放鼠标。
3. 如需构建星陨遗迹关卡，在编辑器中查看 BuildStarfallRuinsV01.cs 的 MenuItem 入口；该工具会重建场景，先保存当前改动。

保留完整 Assets、Packages、ProjectSettings 和资源 .meta，避免丢失 Unity GUID 引用。art-source/rock.blend 与 create_rock.py 保留 Blender 岩石源文件和生成脚本，导出的 FBX 位于 Assets/Art/Models。

Library、Logs、缓存、IDE 工程文件和历史恢复场景不纳入 Git。原项目的本机环境修复与 MCP 接入脚本不随集合发布。本次整理不代表新增玩法已通过完整 Play Mode 验收。
