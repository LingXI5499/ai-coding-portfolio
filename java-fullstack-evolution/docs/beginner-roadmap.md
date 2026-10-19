# 从第一次运行到独立复现：Java Web 入门路线

这份路线连接十个独立版本与真实代码。无需预先熟练使用 Spring 或 Vue；建议先能阅读 Java 类、方法、接口、集合与异常，理解最基本的 SELECT/INSERT/UPDATE/DELETE，并认识 HTML 表单和 JavaScript 的 async/await。不熟悉时可以边做边补，先完成一个小闭环。

## 先理解你正在启动什么

- JDK 运行 Java 程序。Spring Boot 是后端应用，监听 HTTP 端口。
- Maven 解析 `pom.xml`、下载 Java 依赖、执行测试和打包。项目自带 Wrapper。
- MySQL Server 保存数据；数据库客户端只是连接和管理它的工具。
- Node/npm 运行前端工具链，浏览器运行构建后的 JavaScript。
- Vite 开发代理把页面发出的 `/api` 请求转给后端。上线使用前端构建产物。
- 一个端口代表一个监听入口；数据库名代表连接后的数据范围，两者互不替代。

先阅读 [环境安装](environment-windows.md)，也可以使用 [总览博客安装附录](publication/java-fullstack-evolution-blog.md)。Java 固定为 17，Node 固定为 24.x；每次只启动一版。

## 第一个可验证的闭环

从系列目录启动 V01：

```powershell
cd V01-employee-crud/backend
.\mvnw.cmd -v
.\mvnw.cmd test
.\mvnw.cmd spring-boot:run '-Dspring-boot.run.profiles=demo'
```

打开本机 8081 端口的页面，创建一位虚构员工。按 F12 打开 Network，再创建一条数据，回答这些问题：

1. 请求路径和 HTTP 方法是什么？请求体中包含哪些字段？
2. Controller 的哪个方法接收它，`@RequestBody` 把什么变成什么？
3. Service 在什么事务中调用哪条 Mapper SQL？
4. 数据库如何生成 ID？响应状态为什么是 201？
5. 刷新页面时为什么会再次发送 GET，而不是复用刚才的 POST？

依次阅读 V01 的 `controller/EmployeeController.java`、`service/impl/EmployeeServiceImpl.java`、`mapper/EmployeeMapper.java`、`resources/mapper/EmployeeMapper.xml` 和静态页面脚本。Java 包路径为 `backend/src/main/java/com/lingxi/evolution/`。

demo 数据随进程退出清空。完成页面闭环后，建立 V01 的专属 MySQL 库并导入本版 SQL，配置环境变量后用默认配置启动；创建记录、重启、再查询，才能验证持久化。

## 十次练习与完成标准

| 顺序 | 运行版本 | 亲手完成的任务 | 能说明什么才算完成 |
| --- | --- | --- | --- |
| 1 | V01 | 员工增删改查、组合筛选、翻页 | HTTP 请求如何经过业务层进入数据库，total 与 records 有何区别 |
| 2 | V02 | 分别提交正常字段、空字段和不存在的 ID | DTO、Entity、VO 各承担什么责任，HTTP 状态与业务 code 如何配合 |
| 3 | V03 | 对同一个 API 分别使用 XHR、Fetch、Axios | HTTP 失败、网络失败和取消请求的区别；浏览器同源与代理的关系 |
| 4 | V04 | 从列表进入详情、编辑、刷新路由 | Vue 组件、响应式数据、Router 与 HTTP 模块如何协作 |
| 5 | V05 | 注册、登录、刷新、退出 | Cookie 与 Session 分别保存什么；CSRF Token 为什么要由服务端签发 |
| 6 | V06 | 猜错密码、改密、验证旧会话 | 限流窗口、身份版本、会话撤销各自处理什么问题 |
| 7 | V07 | USER 请求管理员接口，ADMIN 查询用户 | Filter、Interceptor、认证、授权和控制器的先后关系 |
| 8 | V08 | 刷新访问凭据，尝试重用旧刷新凭据 | JWT 完整性、访问有效期、刷新轮换和撤销边界 |
| 9 | V09 | 修改资料、找回密码、禁用/恢复、全设备退出 | 跨用户权限、一次性重置凭据、状态流转与审计 |
| 10 | V10 | 统计图、审计联表分页、私有图片上传、空库迁移 | 图表数据如何聚合，文件为何需要所有权与补偿，构建如何交付 |

每次先通过 README 运行，再追踪一条请求，接着修改一项小需求，最后执行测试。可以把列表默认每页 10 条改成自己需要的值，但要同时核对服务端上限和页面控件。先修改本版，不向其他版本添加源码引用。

## 三条综合请求链路

### 普通 JSON 业务

`Vue 页面 → Axios → HTTP → Security（需要时）→ Controller → Query/DTO → Service → Mapper 接口 → XML SQL → MySQL → VO/ApiResponse → 页面`

查询条件来自 URL，写入字段来自 JSON；它们都需要服务端校验。`#{}` 绑定值，不用字符串替换拼接输入。创建或修改后重新查询结果，列表总数由数据库统计。

### 登录与身份恢复

Session 版本：登录验证后在服务端保存身份，浏览器自动携带会话 Cookie。JWT 版本：访问凭据保存在前端内存，通过 Bearer 请求头发送；页面重载后使用 HttpOnly 刷新 Cookie恢复身份。后者的 Cookie 端点仍需要 CSRF，不能把刷新令牌放到 localStorage。

重点阅读 V05 的 `SessionGuard`，V07 的 `SecurityConfig`，以及 V08 的 `TokenService` 和 `TokenMapper.xml`。注释说明了会话 ID 轮换、刷新凭据条件更新、重放撤销与事务策略。

### V10 文件上传

`FilesPage → FormData → Bearer 鉴权 → FileController → ImageNormalizer → 账户行锁与配额 → AssetStorage → uploaded_file + audit_event → 事务提交`

输入只接受真实 PNG/JPEG，输入和重新编码后都不超过 2 MiB，最多 400 万像素。重新编码去掉原图片元数据；原文件名只作为显示文本，存储 key 使用随机值。下载从当前主体判断所有权，前端拿到 Blob 再预览，令牌不进入 URL。

数据库事务不能替文件或 OSS 回滚，所以服务层注册事务完成回调：事务失败时删除已写对象。进程崩溃或补偿存储失败仍可能产生孤儿对象，真实部署需要定期对账和清理，不能宣称这里实现了跨系统原子事务。

## Spring 的几个核心概念在哪里看

| 概念 | 项目中的具体位置 | 需要理解的原因 |
| --- | --- | --- |
| IoC / DI | Service 构造函数、`FileStorageConfig` 的 `@Bean` | 对象依赖由容器提供，业务逻辑可以替换存储实现并单独测试 |
| 自动配置 | `SpringbootDemoApplication`、starter、`application*.yml` | 按依赖与条件装配 Web、数据源等基础设施，显式配置可以覆盖默认值 |
| 配置隔离 | demo/test/prod、环境变量 | 演示、测试和生产使用不同的数据与凭据范围 |
| AOP | V10 `ObservedOperation`、`OperationTimingAspect` | 在业务方法外围记录固定操作名、成功状态和耗时，不复制日志代码 |
| 事务 | Service 的 `@Transactional`、刷新消费 SQL、文件回滚补偿 | 事务边界与数据库写入范围需要明确，外部副作用要单独处理 |
| Filter / Interceptor | Spring Security 过滤链、V05/V06 `SessionGuard` | 处理位置和职责不同，不能互相当作同一件事 |
| 生命周期 | Vue `onMounted`/`onBeforeUnmount`、`ReportChart` | 加载数据、取消过期结果、释放图表和 Blob URL，避免页面切换后泄漏资源 |

Spring AOP 依赖代理，通常只有经代理调用的方法受到增强。`this.method()`、private 方法和手动 `new` 出来的业务对象，不会自动得到同样的事务或切面效果。不要把“贴上注解”当成增强已经生效的证据；通过回滚、日志与测试确认。

## 使用 AI 解释和复现代码

一次只提供一个版本、一个问题和必要错误信息，先清除真实密码、Cookie、令牌、邮箱凭据和个人资料。可使用以下提问结构：

```text
我在学习本仓库 V04，使用 JDK 17、MyBatis XML 和 Vue。
请先阅读 EmployeeController、EmployeeServiceImpl、EmployeeMapper.xml
与员工列表页面，说明一次带条件分页请求的完整链路。
接着解释每一层为什么存在，并给出我可以亲手验证的正常与失败场景。
如需修改代码，请保持本版本独立、使用逻辑关联、保留参数绑定，
指出修改文件和验证命令；不确定的版本行为请对照官方文档。
```

复现时可以暂时移开某个版本的业务文件，在另一个自己的练习目录手写相同链路，再与版本源码比较。保留测试和依赖锁定，把“解释得通”与“实际运行通过”一起作为学习依据。

## 学习完成后的自查

能独立完成一个带校验、错误处理、条件分页与权限边界的接口；能在页面上正确处理成功和失败；能定位一次 SQL 或认证问题；能说明文件上传的安全约束、配置来源、测试范围与部署前仍需验证的事项。掌握这些以后，再按业务需要学习复杂权限、分布式会话和更大的工程结构。

图片知识点与源码逐项对应见 [技术覆盖矩阵](technology-coverage.md)，接口调试见 [调试指南](api-debugging.md)。
