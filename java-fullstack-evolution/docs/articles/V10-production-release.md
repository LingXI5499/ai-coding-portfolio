# V10：迁移、自动化测试与生产交付

**摘要：** 本篇通过一个独立可运行项目讲解迁移、自动化测试与生产交付。从请求行为出发，追踪代码、数据与失败路径，完成可重复的验收。

**标签：** Java 17 / Spring Boot / 账户安全 / JWT / Vue 3

## 学习目标

- 说明本版本解决的实际问题，以及上一版为什么需要演进。
- 沿浏览器 → HTTP → Controller → Service → Mapper → 数据库定位行为。
- 运行正常与失败场景，用响应、测试断言和数据库结果判断实现。

## 先决条件与环境

基于 V09 的项目快照升级，保留上一版目录。本版本只读取自己的 backend 与 frontend。

准备 JDK 17、MySQL 8.4、Git、Node 24.15.0。Maven Wrapper 随项目提供，不要求安装全局 Maven。前置配置见 [Windows 安装指南](../environment-windows.md)。项目目录为 [`V10-production-ready`](../../V10-production-ready/README.md)，运行前进入其 `backend/`。

## 原理与实现选择

生产交付包括可重复构建、数据库版本控制、可观测性和恢复策略。通过本机测试并不自动证明线上部署、邮件或 TLS 可用。

Flyway 按 V1–V4 创建账户、刷新令牌、重置、审计与上传元数据表；不在启动时清表。ProductionGuard 拒绝缺少生产凭据、关闭 Secure Cookie 或非 MySQL 数据源的配置。

迁移不能靠删除 Flyway 历史表回滚。先备份数据库，验证恢复；优先前向修复，必要时恢复备份并回退到兼容旧模式的应用版本。

本系列用逻辑外键：关联字段建索引，Service 在写入前确认父记录存在；账户只改变状态，不物理删除用户行。不要在数据库创建物理外键。

## 关键代码

真实文件：[`V10-production-ready/backend/src/main/java/com/lingxi/evolution/config/ProductionGuard.java`](../../V10-production-ready/backend/src/main/java/com/lingxi/evolution/config/ProductionGuard.java)。下面节选真实实现，完整方法与其依赖请沿链接阅读。

```java
    public InitializingBean productionRequirements(Environment env) {
        return () -> {
            if (!"true".equals(env.getProperty("COOKIE_SECURE"))) {
                throw new IllegalStateException("Production requires COOKIE_SECURE=true");
            }
            String url = env.getProperty("DB_URL", "");
            if (!url.startsWith("jdbc:mysql:")) {
                throw new IllegalStateException("Production requires explicit MySQL DB_URL");
            }
            for (String name :
                    new String[] {
                        "DB_USERNAME",
                        "DB_PASSWORD",
                        "JWT_SECRET",
                        "MAIL_HOST",
                        "MAIL_USERNAME",
                        "MAIL_PASSWORD",
                        "MAIL_FROM"
                    }) {
                if (env.getProperty(name, "").isBlank()) {
                    throw new IllegalStateException("Production requires " + name);
                }
            }
        };
    }
```

Controller 绑定 HTTP 输入，业务决策保留在 Service；Mapper XML 用参数绑定，不拼接输入。异常返回包含可排查的 traceId，但不返回 SQL、密码、Cookie、令牌或堆栈。

## 命令及其含义

```powershell
cd V10-production-ready/backend
.\mvnw.cmd -v       # 确认实际使用 Java 17
.\mvnw.cmd test     # 默认使用隔离 H2，运行真实 XML Mapper 与 Web 测试
.\mvnw.cmd clean verify  # 清理、测试并打包本版本
.\mvnw.cmd spring-boot:run '-Dspring-boot.run.profiles=demo'
```

最后一条使用内存数据库，便于先观察链路；正式学习持久化时，按本版 README 创建 `java_fullstack_v10`、导入资源目录 SQL（V10 改由 Flyway 执行迁移），设置 DB_URL、DB_USERNAME、DB_PASSWORD，再不带 demo profile 启动。后端端口 8090。

## 前端实现

实际源码：[`V10-production-ready/frontend/src/api.js`](../../V10-production-ready/frontend/src/api.js)。

HTTP 模块只负责通信和响应解包，页面处理加载、错误、空状态以及成功后的导航；服务端继续承担输入验证和授权。

```powershell
cd V10-production-ready/frontend
npm ci       # 按本版本 package-lock.json 安装精确依赖
npm test     # 请求契约与页面行为测试
npm run dev  # 前端端口 5180，API 代理到 8090
```

前端 accessToken 和 CSRF Token 保存在 api.js 的模块闭包内，不进入 Web Storage。页面重新加载时先拿 CSRF，再通过刷新 Cookie 恢复账户。并发 401 共享一次刷新 Promise，避免刷新凭据被重复消费。

## 实际运行与验收

1. 执行本篇命令并查看退出码。交付时真实执行结果集中记录在 [verification.md](../verification.md)，本文不把示例输出当成通过证据。
2. 验证：空库迁移、重复迁移零变更、健康检查、OpenAPI、全套后端/前端测试、生产构建与 CI。
3. 在 Network 中核对请求方法、Content-Type、状态码和 JSON；比较 UI 提示与服务端返回。
4. 故意停止后端、提交无效输入或使用无效身份，确认错误不会显示为成功。
5. 查数据库确认变更；MySQL 持久化与 H2 内存演示分开记录。

## 常见错误与排查

- Java 版本不一致：同时检查 `java -version` 与 `.\mvnw.cmd -v`，以 Maven 实际 JDK 为准。
- 连接失败：先看服务与库名，再检查环境变量；不要修改为共享另一个版本数据库。
- 400：核对 DTO 字段、校验范围与 Content-Type；未知字段也会被拒绝。
- 401：检查登录、过期、禁用和身份版本；403：检查权限与 Cookie 端点 CSRF。
- 页面空白：查看控制台与 Network，确认当前版本的 Vite 端口和代理目标一致。

## 综合练习：组件、图表、联表与文件

本版将前面的请求、校验、权限、数据库和配置连接起来：`DashboardPage.vue` 使用 Element Plus 表格/输入/分页，`ReportChart.vue` 使用 ECharts SVG 图表，后端 `ReportingMapper.xml` 通过状态聚合与审计 LEFT JOIN 返回有界结果。图表实例在组件卸载时释放，日期缺失由服务层补零。

文件练习的请求链为：`FilesPage → FormData → FileController → ImageNormalizer → FileService → AssetStorage → uploaded_file + audit_event`。所有者来自 Bearer 主体，前端没有 userId 授权入口。输入校验真实格式、2 MiB 大小、400 万像素，并重新编码去掉图片元数据；随机 key 与私有目录不向前端公开。

`FileStorageConfig` 根据配置注入本地或 OSS 实现，演示同一业务对不同基础设施的依赖。数据库事务不能自动回滚文件，因此 FileService 注册事务完成回调，在失败后尝试删除对象；崩溃与清理失败仍需后续对账。

`ObservedOperation` 与 `OperationTimingAspect` 演示 AOP：只输出固定动作名、成功状态和耗时，不输出请求参数或响应内容，也不承担身份授权。读取核心方法中的注释，再在正常上传和错误图片时观察差异。

完整字段、接口、源码位置、OSS 配置与验证步骤见 [存储与报表练习](../storage-and-reports.md)。使用本地适配即可完成入门，不需要云账号；真实 OSS 需要另外核对地域、私有 Bucket、最小权限和凭据生命周期。V4 迁移建立上传元数据表，保留 V1–V3 的迁移内容和校验历史。

## 与上一版本的差异

基于 V09 的项目快照升级，保留上一版目录。本版本只读取自己的 backend 与 frontend。

本版的核心变化是：Flyway 按 V1–V4 创建账户、刷新令牌、重置、审计与上传元数据表；不在启动时清表。ProductionGuard 拒绝缺少生产凭据、关闭 Secure Cookie 或非 MySQL 数据源的配置。

## 局限与下一篇

限流与演示会话默认只适合单实例；邮箱未做所有权验证；部署前需要按安全清单补齐运维配置。

本系列到此保持十版。真实生产邮件、TLS、备份恢复与性能需要在目标环境另行验收。

## 官方资料

- [MyBatis XML 与参数绑定](https://mybatis.org/mybatis-3/sqlmap-xml.html)
- [Spring MVC 请求体与校验](https://docs.spring.io/spring-framework/reference/web/webmvc/mvc-controller/ann-methods/requestbody.html)
- [Spring Security 6.5 CSRF](https://docs.spring.io/spring-security/reference/6.5/servlet/exploits/csrf.html)
- [Vue 工具链](https://vuejs.org/guide/scaling-up/tooling)

更多对应版本参考见 [references.md](../references.md)。


## 补充实战：条件查询与分页

本版管理员用户列表已从固定截断列表升级为数据库分页。查询参数封装在 [`UserQuery.java`](../../V10-production-ready/backend/src/main/java/com/lingxi/evolution/query/UserQuery.java)，动态条件与计数实现在 [`AccountMapper.xml`](../../V10-production-ready/backend/src/main/resources/mapper/AccountMapper.xml)。两者在本版目录内完整保留。

先按筛选条件执行 COUNT，再读取 LIMIT/OFFSET 当前页；前端只渲染 `records`，分页控件读取 total 与 totalPages。搜索和切换每页条数都回到第 1 页，空结果与超出最后一页有明确行为。

学习时至少验证：组合条件、第一页/下一页、每页 5/10/100 条、空结果、越界页、非法 pageSize，以及 `%`/`_` 按普通字符搜索。服务端集成测试还覆盖 205 条记录，证明可以查到旧版 200 条截断范围之外的数据。

API 的列表返回结构发生变化，调用方必须从 `page.records` 读取行数据。完整原理、请求例子、响应 JSON、真实路径与手动步骤见 [条件分页指南](../query-and-pagination.md)。此项补充不增加第十一个版本。
