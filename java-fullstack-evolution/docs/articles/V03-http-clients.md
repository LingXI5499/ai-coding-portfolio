# V03：同一个 API：XHR、Fetch 与 Axios

**摘要：** 本篇通过一个独立可运行项目讲解同一个 API：XHR、Fetch 与 Axios。从请求行为出发，追踪代码、数据与失败路径，完成可重复的验收。

**标签：** Java 17 / Spring Boot / HTTP / MyBatis / 原生前端

## 学习目标

- 说明本版本解决的实际问题，以及上一版为什么需要演进。
- 沿浏览器 → HTTP → Controller → Service → Mapper → 数据库定位行为。
- 运行正常与失败场景，用响应、测试断言和数据库结果判断实现。

## 先决条件与环境

基于 V02 的项目快照升级，保留上一版目录。本版本只读取自己的 backend 与 frontend。

准备 JDK 17、MySQL 8.4、Git、Node 24.15.0。Maven Wrapper 随项目提供，不要求安装全局 Maven。前置配置见 [Windows 安装指南](../environment-windows.md)。项目目录为 [`V03-http-clients`](../../V03-http-clients/README.md)，运行前进入其 `backend/`。

## 原理与实现选择

Ajax 是异步请求和局部更新模式；XHR、Fetch、Axios 是不同的请求实现。HTTP 错误说明收到了响应，网络错误说明没有获得可用响应。

XHR 用事件回调包装 Promise，Fetch 必须检查 response.ok，Axios 把非成功状态转成拒绝。三者均访问 /api/employees，Vite 代理保持浏览器同源。

XHR timeout 和 AbortController 都是客户端取消，不能保证已经提交到数据库的写入被撤销。重复点击新增可能创建多行，不能把取消当成回滚。

本系列用逻辑外键：关联字段建索引，Service 在写入前确认父记录存在；账户只改变状态，不物理删除用户行。不要在数据库创建物理外键。

## 关键代码

真实文件：[`V03-http-clients/backend/src/main/java/com/lingxi/evolution/controller/EmployeeController.java`](../../V03-http-clients/backend/src/main/java/com/lingxi/evolution/controller/EmployeeController.java)。下面节选真实实现，完整方法与其依赖请沿链接阅读。

```java
    public ApiResponse<List<EmployeeVO>> list() {
        return ApiResponse.ok(service.list().stream().map(EmployeeVO::from).toList());
    }
```

Controller 绑定 HTTP 输入，业务决策保留在 Service；Mapper XML 用参数绑定，不拼接输入。异常返回包含可排查的 traceId，但不返回 SQL、密码、Cookie、令牌或堆栈。

## 命令及其含义

```powershell
cd V03-http-clients/backend
.\mvnw.cmd -v       # 确认实际使用 Java 17
.\mvnw.cmd test     # 默认使用隔离 H2，运行真实 XML Mapper 与 Web 测试
.\mvnw.cmd clean verify  # 清理、测试并打包本版本
.\mvnw.cmd spring-boot:run '-Dspring-boot.run.profiles=demo'
```

最后一条使用内存数据库，便于先观察链路；正式学习持久化时，按本版 README 创建 `java_fullstack_v03`、导入资源目录 SQL，设置 DB_URL、DB_USERNAME、DB_PASSWORD，再不带 demo profile 启动。后端端口 8083。

## 前端实现

实际源码：[`V03-http-clients/frontend/src/clients.js`](../../V03-http-clients/frontend/src/clients.js)。

对照页把三种客户端的操作放在同一页面，下半部员工工作台使用 Axios 完成查询、编辑和删除。请求有 10 秒超时，错误输出使用 textContent。

```powershell
cd V03-http-clients/frontend
npm ci       # 按本版本 package-lock.json 安装精确依赖
npm test     # 请求契约与页面行为测试
npm run dev  # 前端端口 5173，API 代理到 8083
```

浏览器请求经 Vite 代理保持同源，不为本地开发开放任意 Origin。

## 实际运行与验收

1. 执行本篇命令并查看退出码。交付时真实执行结果集中记录在 [verification.md](../verification.md)，本文不把示例输出当成通过证据。
2. 验证：分别查询、新增，点击 400 与断网观察差异；取消请求并检查 Network。
3. 在 Network 中核对请求方法、Content-Type、状态码和 JSON；比较 UI 提示与服务端返回。
4. 故意停止后端、提交无效输入或使用无效身份，确认错误不会显示为成功。
5. 查数据库确认变更；MySQL 持久化与 H2 内存演示分开记录。

## 常见错误与排查

- Java 版本不一致：同时检查 `java -version` 与 `.\mvnw.cmd -v`，以 Maven 实际 JDK 为准。
- 连接失败：先看服务与库名，再检查环境变量；不要修改为共享另一个版本数据库。
- 400：核对 DTO 字段、校验范围与 Content-Type；未知字段也会被拒绝。
- 401：检查登录、过期、禁用和身份版本；403：检查权限与 Cookie 端点 CSRF。
- 页面空白：查看控制台与 Network，确认当前版本的 Vite 端口和代理目标一致。

## 与上一版本的差异

基于 V02 的项目快照升级，保留上一版目录。本版本只读取自己的 backend 与 frontend。

本版的核心变化是：XHR 用事件回调包装 Promise，Fetch 必须检查 response.ok，Axios 把非成功状态转成拒绝。三者均访问 /api/employees，Vite 代理保持浏览器同源。

## 局限与下一篇

此版本重点在单一链路，不包含完整账户安全或生产运维。

下一篇进入 V04：Vue 3 全栈单页应用。

## 官方资料

- [MyBatis XML 与参数绑定](https://mybatis.org/mybatis-3/sqlmap-xml.html)
- [Spring MVC 请求体与校验](https://docs.spring.io/spring-framework/reference/web/webmvc/mvc-controller/ann-methods/requestbody.html)
- [Spring Security 6.5 CSRF](https://docs.spring.io/spring-security/reference/6.5/servlet/exploits/csrf.html)
- [Vue 工具链](https://vuejs.org/guide/scaling-up/tooling)

更多对应版本参考见 [references.md](../references.md)。
