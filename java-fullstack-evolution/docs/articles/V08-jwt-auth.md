# V08：JWT 与刷新令牌轮换

**摘要：** 本篇通过一个独立可运行项目讲解JWT 与刷新令牌轮换。从请求行为出发，追踪代码、数据与失败路径，完成可重复的验收。

**标签：** Java 17 / Spring Boot / 账户安全 / JWT / Vue 3

## 学习目标

- 说明本版本解决的实际问题，以及上一版为什么需要演进。
- 沿浏览器 → HTTP → Controller → Service → Mapper → 数据库定位行为。
- 运行正常与失败场景，用响应、测试断言和数据库结果判断实现。

## 先决条件与环境

基于 V07 的项目快照升级，保留上一版目录。本版本只读取自己的 backend 与 frontend。

准备 JDK 17、MySQL 8.4、Git、Node 24.15.0。Maven Wrapper 随项目提供，不要求安装全局 Maven。前置配置见 [Windows 安装指南](../environment-windows.md)。项目目录为 [`V08-jwt-auth`](../../V08-jwt-auth/README.md)，运行前进入其 `backend/`。

## 原理与实现选择

Access Token 是带签名的短期 JWT；Refresh Token 是服务端登记的随机凭据。签名提供完整性，不提供 Payload 保密。

JwtConfig 固定 HS256、issuer、audience、时间与必要声明；刷新令牌只有 SHA-256 摘要入库。TokenMapper.consume 使用条件更新实现一次性消费，事务中签发后继令牌；检测重放会撤销整个令牌家族。

Cookie 端点使用独立的 CSRF 过滤链；Bearer API 只接受 Authorization 头。刷新请求不能因为携带 Bearer 就绕过 Cookie CSRF 校验。前端令牌仅保存在模块内存中。

本系列用逻辑外键：关联字段建索引，Service 在写入前确认父记录存在；账户只改变状态，不物理删除用户行。不要在数据库创建物理外键。

## 关键代码

真实文件：[`V08-jwt-auth/backend/src/main/java/com/lingxi/evolution/service/TokenService.java`](../../V08-jwt-auth/backend/src/main/java/com/lingxi/evolution/service/TokenService.java)。下面节选真实实现，完整方法与其依赖请沿链接阅读。

```java
    public Issued refresh(String raw) {
        if (raw == null || raw.length() > 128) {
            throw invalid();
        }
        String hash = TokenSecrets.hash(raw);
        var row = tokens.find(hash);
        if (row == null) {
            throw invalid();
        }
        if (tokens.consume(hash, LocalDateTime.ofInstant(clock.instant(), ZoneOffset.UTC)) != 1) {
            tokens.revokeFamily(row.getFamilyId());
            throw invalid();
        }
        return issue(accounts.active(row.getUserId()), row.getFamilyId());
    }
```

Controller 绑定 HTTP 输入，业务决策保留在 Service；Mapper XML 用参数绑定，不拼接输入。异常返回包含可排查的 traceId，但不返回 SQL、密码、Cookie、令牌或堆栈。

## 命令及其含义

```powershell
cd V08-jwt-auth/backend
.\mvnw.cmd -v       # 确认实际使用 Java 17
.\mvnw.cmd test     # 默认使用隔离 H2，运行真实 XML Mapper 与 Web 测试
.\mvnw.cmd clean verify  # 清理、测试并打包本版本
.\mvnw.cmd spring-boot:run '-Dspring-boot.run.profiles=demo'
```

最后一条使用内存数据库，便于先观察链路；正式学习持久化时，按本版 README 创建 `java_fullstack_v08`、导入资源目录 SQL，设置 DB_URL、DB_USERNAME、DB_PASSWORD，再不带 demo profile 启动。后端端口 8088。

## 前端实现

实际源码：[`V08-jwt-auth/frontend/src/api.js`](../../V08-jwt-auth/frontend/src/api.js)。

HTTP 模块只负责通信和响应解包，页面处理加载、错误、空状态以及成功后的导航；服务端继续承担输入验证和授权。

```powershell
cd V08-jwt-auth/frontend
npm ci       # 按本版本 package-lock.json 安装精确依赖
npm test     # 请求契约与页面行为测试
npm run dev  # 前端端口 5178，API 代理到 8088
```

前端 accessToken 和 CSRF Token 保存在 api.js 的模块闭包内，不进入 Web Storage。页面重新加载时先拿 CSRF，再通过刷新 Cookie 恢复账户。并发 401 共享一次刷新 Promise，避免刷新凭据被重复消费。

## 实际运行与验收

1. 执行本篇命令并查看退出码。交付时真实执行结果集中记录在 [verification.md](../verification.md)，本文不把示例输出当成通过证据。
2. 验证：有效、过期、畸形、篡改 JWT；刷新轮换、家族重放撤销、并发仅一个胜出、注销撤销。
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

基于 V07 的项目快照升级，保留上一版目录。本版本只读取自己的 backend 与 frontend。

本版的核心变化是：JwtConfig 固定 HS256、issuer、audience、时间与必要声明；刷新令牌只有 SHA-256 摘要入库。TokenMapper.consume 使用条件更新实现一次性消费，事务中签发后继令牌；检测重放会撤销整个令牌家族。

## 局限与下一篇

限流与演示会话默认只适合单实例；邮箱未做所有权验证；部署前需要按安全清单补齐运维配置。

下一篇进入 V09：账户生命周期与权限边界。

## 官方资料

- [MyBatis XML 与参数绑定](https://mybatis.org/mybatis-3/sqlmap-xml.html)
- [Spring MVC 请求体与校验](https://docs.spring.io/spring-framework/reference/web/webmvc/mvc-controller/ann-methods/requestbody.html)
- [Spring Security 6.5 CSRF](https://docs.spring.io/spring-security/reference/6.5/servlet/exploits/csrf.html)
- [Vue 工具链](https://vuejs.org/guide/scaling-up/tooling)

更多对应版本参考见 [references.md](../references.md)。
