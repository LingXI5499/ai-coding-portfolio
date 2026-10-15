# Java Web Lab · Java 全栈链路与业务实验室

从 HTTP 请求到高并发架构的交互教学网站，包含 46 个业务 SQL 实验、18 个运行机制节点、165 个概念节点和六阶段架构演示。代码阅读器支持高亮与节点联动，SQL 可在浏览器内执行。

技术：Vite、JavaScript、Three.js、CodeMirror 6、SQLite WASM。

```powershell
npm ci
npm run dev
```

访问 http://127.0.0.1:5178/。

```powershell
npm test
npm run build
```

演讲模式支持方向键切换、空格播放、N 打开笔记、Esc 退出。Java 为只读讲解片段，不包含可运行 Spring Boot 后端；并发、库存、队列、熔断等是教学模型，不输出生产容量结论。dist 可部署到静态托管服务。官方参考及素材来源保留在页面中。
