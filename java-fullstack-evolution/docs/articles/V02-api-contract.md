# V02：DTO、VO 与可预测的 API 契约

**摘要：** 本篇通过一个独立可运行项目讲解DTO、VO 与可预测的 API 契约。从请求行为出发，追踪代码、数据与失败路径，完成可重复的验收。

**标签：** Java 17 / Spring Boot / HTTP / MyBatis / 原生前端

## 学习目标

- 说明本版本解决的实际问题，以及上一版为什么需要演进。
- 沿浏览器 → HTTP → Controller → Service → Mapper → 数据库定位行为。
- 运行正常与失败场景，用响应、测试断言和数据库结果判断实现。

## 先决条件与环境

基于 V01 的项目快照升级，保留上一版目录。本版本只读取自己的 backend 与 frontend。

准备 JDK 17、MySQL 8.4、Git。Maven Wrapper 随项目提供，不要求安装全局 Maven。前置配置见 [Windows 安装指南](../environment-windows.md)。项目目录为 [`V02-api-contract`](../../V02-api-contract/README.md)，运行前进入其 `backend/`。

## 原理与实现选择

DTO 接收输入，Entity 映射持久化模型，VO 决定哪些字段可以返回。统一响应体与 HTTP 状态分别负责业务描述和协议语义。

EmployeeCreateRequest 与 EmployeeUpdateRequest 使用 Bean Validation；VO 不包含内部时间字段。GlobalExceptionHandler 把校验、冲突和未知异常转换为稳定响应。

统一返回不能替代状态码。201 表示创建成功，400 表示输入无效，404 表示资源不存在，409 表示冲突，500 表示未知服务错误。

本系列用逻辑外键：关联字段建索引，Service 在写入前确认父记录存在；账户只改变状态，不物理删除用户行。不要在数据库创建物理外键。

## 关键代码

真实文件：[`V02-api-contract/backend/src/main/java/com/lingxi/evolution/controller/EmployeeController.java`](../../V02-api-contract/backend/src/main/java/com/lingxi/evolution/controller/EmployeeController.java)。下面节选真实实现，完整方法与其依赖请沿链接阅读。

```java
    public ApiResponse<EmployeeVO> create(@Valid @RequestBody EmployeeCreateRequest request) {
        return ApiResponse.ok(EmployeeVO.from(service.create(request.toEntity())));
    }
```

Controller 绑定 HTTP 输入，业务决策保留在 Service；Mapper XML 用参数绑定，不拼接输入。异常返回包含可排查的 traceId，但不返回 SQL、密码、Cookie、令牌或堆栈。

## 命令及其含义

```powershell
cd V02-api-contract/backend
.\mvnw.cmd -v       # 确认实际使用 Java 17
.\mvnw.cmd test     # 默认使用隔离 H2，运行真实 XML Mapper 与 Web 测试
.\mvnw.cmd clean verify  # 清理、测试并打包本版本
.\mvnw.cmd spring-boot:run '-Dspring-boot.run.profiles=demo'
```

最后一条使用内存数据库，便于先观察链路；正式学习持久化时，按本版 README 创建 `java_fullstack_v02`、导入资源目录 SQL，设置 DB_URL、DB_USERNAME、DB_PASSWORD，再不带 demo profile 启动。后端端口 8082。


## 实际运行与验收

1. 执行本篇命令并查看退出码。交付时真实执行结果集中记录在 [verification.md](../verification.md)，本文不把示例输出当成通过证据。
2. 验证：空字段、过长姓名、错误 ID、SQL 注入字符串与标准 CRUD。
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

基于 V01 的项目快照升级，保留上一版目录。本版本只读取自己的 backend 与 frontend。

本版的核心变化是：EmployeeCreateRequest 与 EmployeeUpdateRequest 使用 Bean Validation；VO 不包含内部时间字段。GlobalExceptionHandler 把校验、冲突和未知异常转换为稳定响应。

## 局限与下一篇

此版本重点在单一链路，不包含完整账户安全或生产运维。

下一篇进入 V03：同一个 API：XHR、Fetch 与 Axios。

## 官方资料

- [MyBatis XML 与参数绑定](https://mybatis.org/mybatis-3/sqlmap-xml.html)
- [Spring MVC 请求体与校验](https://docs.spring.io/spring-framework/reference/web/webmvc/mvc-controller/ann-methods/requestbody.html)
- [Spring Security 6.5 CSRF](https://docs.spring.io/spring-security/reference/6.5/servlet/exploits/csrf.html)
- [Vue 工具链](https://vuejs.org/guide/scaling-up/tooling)

更多对应版本参考见 [references.md](../references.md)。
