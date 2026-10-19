# AI Coding Portfolio · AI Coding 作品集合

九个独立项目的源码集合，涵盖交互展示、教学平台、效率工具、Android、Python 和 Unity。每个一级目录是一项作品，分别安装依赖、运行和构建；整个集合由一个 Git 仓库管理。

| 目录 | 作品 | 主要内容 | 技术 |
| --- | --- | --- | --- |
| [atlasflow](atlasflow/) | 全球地图相册 | 三维地球、真实地理照片、照片墙与摄像头手势 | Vue / TypeScript / MapLibre / MediaPipe |
| [frontend-lab](frontend-lab/) | 界面实验室 | 263 个实验、源码编辑、实时预览与开发手册 | HTML / CSS / JavaScript |
| [java-web-lab](java-web-lab/) | Java Web 实验室 | 请求链路、可执行 SQL、架构与并发教学模型 | JavaScript / Three.js / SQLite WASM |
| [resume-studio](resume-studio/) | 简历工作室 | 编辑、A4 预览、岗位版本、本地备份与 PDF | Vue / TypeScript / Express / Playwright |
| [asterway](asterway/) | 星行纪 | 目标、任务、习惯、专注、复盘和成长社区原型 | Vue / TypeScript / Pinia |
| [musiclingxi](musiclingxi/) | 离线音乐播放器 | 播放队列、同步歌词、Android 后台与锁屏控制 | JavaScript / Capacitor / Android |
| [ai-intelligence-daily](ai-intelligence-daily/) | AI 情报日报 | 公开信息聚合、每日刷新和可选 AI 摘要 | Python / FastAPI / SQLite |
| [starfall-ruins](starfall-ruins/) | 星陨遗迹 | 移动跳跃、碎片收集、祭坛与传送门 | Unity / C# / Blender |
| [java-fullstack-evolution](java-fullstack-evolution/) | Java 全栈进化实验室 | 十个独立项目，从 CRUD、HTTP、Vue 到账户认证、安全与部署 | Java / Spring Boot / MyBatis / MySQL / Vue / Spring Security |

## 开始使用

先进入具体项目，阅读对应 README。JavaScript 项目建议使用 Node.js 24 LTS；Python 项目按其 requirements.txt 安装；Unity 项目按 ProjectVersion.txt 选择编辑器。

```powershell
cd atlasflow
npm ci
npm run dev
```

各应用独立启动，默认端口可能相同，不需要同时运行全部作品。集合不使用 Git 子模块，也不包含嵌套 .git；克隆一次即可获得九项作品。

## 内容说明

- 保留源码、必要运行资源、依赖锁文件、测试和构建配置。
- 简历演示使用虚构资料与中性占位头像，不含原始简历或个人照片。
- 音乐项目只含空音频占位文件，不含真实音频和歌词正文；可自行导入本地音频。
- 星行纪是前端原型，成长伙伴采用本地规则；Java Web 实验室的 Java 片段用于教学，SQL 在浏览器内执行。
- frontend-lab 的 handbook 是产品内容，保留按需加载的数据；历史分析报告、原始材料、截图验收报告不纳入集合。
- 不纳入 node_modules、虚拟环境、Unity Library、Android 构建缓存、数据库、密钥、构建产物和开发过程文档。

## Git 管理

建议 GitHub 仓库名称：**ai-coding-portfolio**。这是从各原项目当前工作目录整理的新快照，不合并原仓库历史；原目录与原历史保留。

GitHub 创建同名空仓库后，在本目录设置远程地址并推送 main 分支。创建时无需额外生成 README、.gitignore 或 License，因为本地已有集合说明和忽略规则。

## 本次整理验证（2026-10-15）

| 项目 | 新目录中的实际检查 |
| --- | --- |
| AtlasFlow | 33 项测试、类型检查与生产构建通过 |
| Frontend Lab | 263 个实验回归、教学检查、1,009 份手册数据与浏览器流程通过 |
| Java Web Lab | 22 项测试（含 46 个 SQL 实验）和生产构建通过 |
| Resume Studio | 16 项单元测试、构建、3 项浏览器场景、生产模式单页中文 PDF 导出通过 |
| Asterway | 38 项业务测试、类型检查与生产构建通过 |
| MusicLingXi | 43 项测试、资源检查、歌词降级检查、Web 构建与 Android 插件/资源同步通过 |
| AI 情报日报 | 13 项测试通过；未对实时外部数据源做可用性认证 |
| Starfall Ruins | 12 个玩法脚本、场景与 56 个资源 GUID 保留，无因精简造成的本地资源引用缺失；未重新执行 Unity Play Mode 或独立游戏构建 |

测试产生的依赖、构建产物和报告在验证后清理，不纳入源码快照。Android 真机、摄像头手势和 Unity 玩法需要在对应设备及编辑器中继续体验。

第三方代码、字体、模型、贴图与课程来源说明见 [NOTICE.md](NOTICE.md) 和各项目保留的署名文件；集合未统一变更各素材的许可。
