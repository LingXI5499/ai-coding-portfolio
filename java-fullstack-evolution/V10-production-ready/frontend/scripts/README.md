# 真实浏览器验收

browser-smoke.mjs 使用本版本锁定的 Playwright，在真实 Chromium 中逐版操作页面。它是测试编排脚本，不属于任一应用的运行时依赖。

先从系列目录运行 `scripts/verify.ps1`，准备十个已测试的 JAR、八个 frontend 的依赖与 dist。V10 的前端安装包含 Playwright 包；如果机器尚无匹配浏览器，在 V10/frontend 执行 `npx playwright install chromium`。本次交付使用机器上已存在的匹配 Chromium，没有重新下载浏览器。

然后在 V10/frontend 执行：

```powershell
npm run test:e2e
```

脚本自行启动和停止测试 JAR 与 Vite preview，使用动态空闲端口和临时 H2 数据库，不需要预先启动应用，不占用既有 808x 服务。每个版本的临时工作目录、服务日志与截图位于 frontend/test-results，已被 Git 忽略。测试只终止自己创建的子进程。

仅检查一版时：

```powershell
$env:SMOKE_VERSION='V09'
npm run test:e2e
Remove-Item Env:SMOKE_VERSION
```

V01/V02 验证页面新增、修改、刷新与删除；V03 验证三种客户端查询、新增、HTTP 400 和网络失败；V04 验证 Vue CRUD、详情与路由刷新；V05–V10 验证注册、登录、刷新页面、Cookie、CSRF 和退出。V06 起操作改密；V09 起修改资料、检查手机布局、从私有开发投递目录读取本次重置邮件并完成密码重置。

测试失败返回非零退出码；不会输出 Cookie、密码或令牌。此脚本使用 demo/H2，不能代替 MySQL 持久化、真实 SMTP、HTTPS 或服务器部署验收。

CI 设置 `SMOKE_MYSQL=true`，注入仅供临时服务使用的 DB_USERNAME/DB_PASSWORD，按版本选择已初始化的隔离 MySQL 8.4 数据库。该模式还会在 V01 页面编辑后重启后端，核对记录仍存在。不能将这些测试变量指向生产数据库。

条件分页补充：V01–V04 通过 API 建立测试员工，再在页面组合姓名、部门、性别和年龄条件，验证每页 5 条、下一页、新条件回第一页、空结果与重置；V03 同时核对三种客户端返回相同分页元数据。CI 的 MySQL 模式还会通过临时数据库创建 ADMIN 与测试用户，验证 V07–V10 管理页的关键字/状态/角色筛选、翻页，以及 V09/V10 恢复用户后当前筛选结果的变化。没有新增公开提权或测试接口。

V10 另上传测试浏览器生成的 2×2 PNG，操作文件列表、带认证的 Blob 预览和手机宽度布局；CI 的 ADMIN 流程继续操作 ECharts 统计页与审计用户名/动作筛选。V10 文档响应套用 deploy/nginx.conf 中的 CSP，检查组件和预览未被策略拦截。该检查不代表真实 Nginx/TLS 已部署。
