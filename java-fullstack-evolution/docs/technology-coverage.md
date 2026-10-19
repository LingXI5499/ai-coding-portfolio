# 学习地图与真实代码的对应关系

图示是技术学习范围，下面区分可运行实现、配套操作和可选扩展。表中路径都相对于 `java-fullstack-evolution/`；Java 源码位于各版 `backend/src/main/java/com/lingxi/evolution/`。

| 图片中的知识点 | 本项目中的落点 | 验证与范围 |
| --- | --- | --- |
| Vue、Router、Axios、表单与路由 | V04–V10 `frontend/src/`；V03 另外对照 XHR/Fetch | 页面、组件与真实浏览器回归 |
| Element Plus | V10 `DashboardPage.vue`、`FilesPage.vue` | 表格、输入框、按钮、分页、状态提示；依赖锁文件固定 |
| ECharts | V10 `ReportChart.vue` 与统计页 | 状态饼图、近七日事件折线图；组件释放与真实 SVG 渲染 |
| REST / JSON | `controller/`、DTO、VO、`api.js` | 正常与失败状态、响应契约、输入校验 |
| Apifox / Postman / Bruno | [API 调试指南](api-debugging.md) | 可选客户端，按本地 OpenAPI 导入与 Cookie/Bearer 约定操作 |
| Controller / Service / Mapper | 十版独立后端 | 构造函数注入、分层职责与请求链路 |
| 参数校验与全局异常 | V02 起 DTO/Query 与 `GlobalExceptionHandler` | 400/401/403/404/409/413/429/500/503 等边界 |
| 统一响应、DTO / Entity / VO | V02 起 `ApiResponse`、`dto/`、`entity/`、`vo/` | 不返回密码哈希、存储 key 或内部凭据 |
| Query / PageQuery | 员工条件、管理员条件、审计条件 | COUNT 与当前页复用条件；分页上限、空结果和越界 |
| MyBatis XML、DataSource、连接池 | 每版 `pom.xml`、`application.yml`、`mapper/` | 使用 Spring Boot 数据源与 HikariCP；默认测试 H2，CI MySQL 8.4 |
| CRUD、条件查询、分页 | V01–V04 员工，V07–V10 管理员 | 数据库分页，页面与契约测试 |
| 多表查询 | V10 `ReportingMapper.xml` | `audit_event LEFT JOIN app_user`，管理员条件分页 |
| 聚合与图表数据 | V10 `ReportingService`、`ReportingMapper` | GROUP BY、COUNT、日期范围、七日补零，不在前端拉全量数据统计 |
| 主键、唯一约束、索引 | 资源目录 SQL、V10 V4 上传表 | 所有关联为逻辑关联；`(user_id,id)` 等索引辅助所属查询 |
| Cookie / Session / JWT | V05–V10 安全配置与身份服务 | CSRF、会话更新、令牌轮换、撤销、状态与角色权限 |
| Filter / Interceptor | V05/V06 `SessionGuard`，V07 起安全过滤链 | 分别阅读手写流程与框架流程 |
| Bean / IoC / DI / 自动配置 | 启动类、构造函数、`FileStorageConfig` | 一个存储接口选择本地或 OSS Bean，入口配置与 profile 对照 |
| AOP / SLF4J | V10 `annotation/ObservedOperation`、`aspect/OperationTimingAspect` | 只记录固定动作、成功状态与耗时；不记录参数、结果与异常消息 |
| `@Transactional` | 各版 Service、刷新消费、V10 上传补偿 | 数据库原子性、账户行锁、外部文件回滚补偿；不是分布式事务 |
| 文件上传 | V10 `FileController`、`FileService`、`ImageNormalizer` | 图片真实性、类型、大小、像素、配额、所有权、SHA-256 完整性 |
| 阿里云 OSS | V10 `storage/OssAssetStorage`、`FileStorageConfig` | 真实 SDK 适配器与环回协议测试；真实云账号、RAM 权限与 Bucket 尚需验收 |
| JDK 17、Maven、JUnit | 每版 Wrapper、测试与 POM | Java 17 编译、独立测试与打包 |
| Git、Linux、Nginx、JAR 与前端构建 | GitHub Actions、V10 `deploy/` | CI 已运行；Linux 服务、TLS 和恢复按目标环境验收 |
| OpenAPI 接口文档 | V10 `/v3/api-docs` 与 Swagger UI | 本地查看与导入调试工具，生产关闭 |
| Lombok | 可选学习内容 | 实体保留显式访问方法，便于初学者理解；无需安装插件即可编译 |
| Maven 分模块、继承聚合与私服 | [工程化扩展说明](engineering-extension.md) | 文档解释独立工程与聚合的差异、私服配置；当前十版不组成共同父工程 |

图中的学生、图书、库存等是可应用的业务方向。本系列以员工 CRUD 和账户体系为具体示例，读者可以在理解分层、查询与权限后替换业务模型；没有把图中所有业务系统分别实现。

## V10 三条新增验证链路

1. USER 登录后上传一张虚构图片，查询自己的文件并预览；其他账户读取该 ID 返回 404，匿名返回 401。
2. ADMIN 打开统计页，查看状态与七日曲线，再用用户名和动作筛选审计事件；USER 访问报表 API 返回 403。
3. 创建 V10 空库，Flyway 执行 V1–V4。事务回滚测试验证元数据与已存对象一起清理；真正云端故障和进程崩溃仍需运维对账。

安装、配置和逐版操作沿 [入门路线](beginner-roadmap.md) 进行。真实验证记录见 [verification.md](verification.md)。
