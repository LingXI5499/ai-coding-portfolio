# 交付验证记录

日期：2026-10-19（Asia/Shanghai）。本文件记录真实执行的本机检查；远程 MySQL/CI 状态见 [GitHub Actions 工作流](https://github.com/LingXI5499/ai-coding-portfolio/actions/workflows/java-fullstack-evolution.yml)。不把静态文件存在当作软件测试通过，也不把本机 demo 当作生产部署。

## 本机环境

Maven Wrapper 实际使用 Oracle JDK **17.0.18**，Maven 3.9.16；Node **24.15.0**，npm 11.12.1。PATH 曾显示 Java 21，但用户已把 JAVA_HOME 切到 JDK 17，因此所有项目 release 改为 17，最终后端构建均在 JDK 17 执行，未修改用户系统环境变量。

固定依赖：Spring Boot 3.5.16、MyBatis Starter 3.0.5、Springdoc 2.8.17（V10）；Vue 3.5.44、Router 5.4.0、Axios 1.20.0、Vite 8.3.4、Vitest 5.0.5。兼容依据见 [references.md](references.md)。

V10 入门综合练习新增固定依赖 Element Plus 2.14.7、ECharts 6.1.0 与 Aliyun OSS Java SDK 3.18.4；本地上传默认不需要云账户。

## 逐版实际结果

后端每版均在自身 backend 运行 Maven Wrapper `clean verify`，包含测试和可执行 JAR 打包。前端每版均在自身 frontend 执行 `npm ci`、`npm test`、`npm run build`。无失败、错误或跳过的测试。

| 版本 | 后端测试 | 后端打包 | 前端测试 | npm ci / build | 真实浏览器流程 |
| --- | ---: | --- | ---: | --- | --- |
| V01 | 7 通过 | 通过 | 同源静态页 | 无 npm 工程 | 通过 |
| V02 | 10 通过 | 通过 | 同源静态页 | 无 npm 工程 | 通过 |
| V03 | 10 通过 | 通过 | 6 通过 | 通过 | 通过 |
| V04 | 10 通过 | 通过 | 6 通过 | 通过 | 通过 |
| V05 | 6 通过 | 通过 | 4 通过 | 通过 | 通过 |
| V06 | 9 通过 | 通过 | 4 通过 | 通过 | 通过 |
| V07 | 16 通过 | 通过 | 8 通过 | 通过 | 通过 |
| V08 | 21 通过 | 通过 | 8 通过 | 通过 | 通过 |
| V09 | 29 通过 | 通过 | 8 通过 | 通过 | 通过 |
| V10 | 44 通过 | 通过 | 16 通过 | 通过 | 通过 |
| 合计 | **162** | **10 版** | **60** | **8 版** | **10 版** |

后端测试报告来自各版 `backend/target/surefire-reports/TEST-*.xml`；前端报告来自各版 verify-local.log。构建目录和日志均忽略，不提交。

## 浏览器与独立性

从 V10/frontend 执行 `npm run test:e2e`，使用真实 Chromium，逐一启动各版 JAR 与生产前端 preview。十版均输出 PASS，没有未处理 pageerror。测试使用本机已有匹配 Chromium；未重新下载浏览器。

- V01/V02：页面新增、修改、刷新、删除。
- V03：XHR、Fetch、Axios 各自查询/新增，以及 HTTP 400 与真实网络失败。
- V04：Vue 创建、编辑、详情、刷新与删除。
- V05–V10：注册、登录、刷新恢复、Cookie HttpOnly/SameSite、缺 CSRF 拒绝、退出后未登录状态。
- V06–V08：页面改密并重新登录。
- V09/V10：资料修改、390px 手机布局无横向溢出、私有开发邮件投递与一次性重置密码。
- V10 综合练习：真实上传 PNG、本人文件列表、Bearer Blob 预览、手机布局；浏览器套用交付 Nginx CSP。远程 MySQL/ADMIN 模式另检查两张 ECharts SVG 图与审计用户名/动作筛选。

条件分页补充后，V01–V04 浏览器还会组合姓名/部门/性别/年龄条件，验证总数、每页 5 条、翻页、新条件回第一页、空结果和重置；V03 的 XHR/Fetch/Axios 返回一致的分页元数据。管理员条件分页在本机由服务端与组件测试覆盖，CI 的 MySQL 模式另外操作 V07–V10 管理员页面，并验证用户恢复后当前条件计数变化。

桌面/手机截图位于 V10/frontend/test-results，不提交含测试运行状态的图像。脚本以动态空闲端口隔离，未停止或修改本机其他占用 808x 的服务。

十个 backend 另外复制到 `E:/Temp/evolution-isolated-projects/` 下逐个运行 Wrapper `-DskipTests package`，全部通过。这项检查只证明脱离仓库的独立解析与打包，不冒充另一轮测试；完整测试结果见上表。

`node scripts/check-structure.mjs` 通过：恰好十个版本、十篇文章、独立 pom/锁文件、release 17、没有聚合模块/源码软链接/嵌套 Git、SQL 无物理外键、MyBatis 无输入字符串替换。文档本地链接另行检查。

## 修复后复测的问题

1. JDK 编译目标与 JAVA_HOME 不一致：按用户要求统一 JDK 17，重跑后端。
2. JWT Cookie CSRF 的请求头名称不一致：统一 X-CSRF-TOKEN。
3. V07 过滤器没有使用自定义 AuthenticationManager：显式绑定，真实登录限流测试通过。
4. Resource Server 的 Bearer CSRF 豁免可能影响 Cookie 刷新：拆分 Cookie/令牌过滤链，带 Bearer 的刷新请求缺 CSRF 仍拒绝。
5. V09 重复上下文初始化会重复创建索引：将索引写入 IF NOT EXISTS 建表语句，H2 与 MySQL 语法兼容。
6. Vue 编辑表单加载期间可能覆盖输入：加载时禁用输入，增加组件回归测试，浏览器编辑流程通过。
7. JWT 缺少必要声明：补充空值/类型校验，确认返回 401 而非服务器异常。
8. 原列表固定截断 200 条：改为同条件 COUNT + LIMIT/OFFSET，新增 44 项后端与 21 项前端测试，验证 205 条数据、组合条件、边界、通配符、权限、迟到响应和删除后的页码回退。

## 条件分页交付范围

V01–V04 员工列表支持 name/department/gender/minAge/maxAge；V07–V10 管理员列表支持 keyword/status/role。统一 page/pageSize，默认 1/10，单页 1–100。V08 同步补齐前端原有管理页所需的管理员列表接口，保持 ADMIN 授权。

列表返回由数组升级为 records/total/page/pageSize/totalPages；API、原生页面、三种客户端、Vue、README 和教程已同步。没有新增版本、数据库表、迁移、物理外键或第三方依赖。详见 query-and-pagination.md。

## 安全与提交边界

密码 BCrypt(12)、UTF-8 72 字节上限、DTO/VO 边界、SQL 参数绑定、Session ID 轮换、CSRF、登录限流、JWT 验签/过期/必要声明、刷新轮换/重放/并发、重置过期/一次使用/邮件失败、USER/ADMIN、跨用户输入、禁用与全设备退出、逻辑关联和孤儿检查均有对应测试。

安全位置索引：V05 起 config/PasswordConfig 与 service/AccountService；V05/V06 config/SessionGuard；V07 config/SecurityConfig；V08 起 config/JwtConfig、service/TokenService、mapper/TokenMapper.xml；V09 起 service/PasswordResetService、LifecycleService、AuditService；V10 config/ProductionGuard。

根 README 从八项改为九项，仅新增本作品入口。NOTICE 只补充 Maven Wrapper 许可。原有 Resume Studio 未提交工作区改动没有纳入本次提交。target/node_modules/dist/.local-mail/.env/application-local.yml/数据库/IDE 文件均被忽略，公开仓库不包含真实密码、令牌或签名密钥。

## MySQL、远程 CI 与未执行项

本机后端使用 H2 MySQL 模式，浏览器使用 demo/H2。**本机没有执行 MySQL 8.4 验收**：没有替换现有 MySQL 服务或读取其本地凭据。仓库工作流独立提供 MySQL 8.4 服务、十个隔离库，运行同一套后端测试及十版浏览器；V01 浏览器还会重启后端验证数据仍存在。该远程运行的实际状态以本文开头的 Actions 链接为准。

以下保持 **NOT_VERIFIED**：真实 OSS 账号与 RAM/Bucket/网络、真实生产 SMTP、邮箱所有权验证、目标服务器 Nginx/TLS、最小权限账户运维、备份恢复演练、真实闲置 20 分钟超时和生产性能/并发容量。相关配置和步骤已交付，但不能宣称已经部署或验证这些环境。

功能限制：邮箱尚未验证；内存限流不跨实例；当前设备退出只撤销刷新凭据，已有访问令牌可用到五分钟过期；账户软注销保留用户行与审计。完整说明见 security-model.md 和 deployment.md。

## 入门综合练习复验

2026-10-19 重新执行 `scripts/verify.ps1`：十版后端 clean verify、八版 npm ci/test/build 全部通过。随后新增 V3→V4 保留原账户数据的迁移用例，再次对 V10 执行 clean verify；后端总计 162，前端总计 60，无失败、错误或跳过。十版浏览器流程也重新全部通过，V10 新增上传与 CSP 行为已真实操作。

V10 新增后端测试覆盖真实图片/伪造内容、像素和大小、私有所有权、20 张配额、内容完整性、数据库回滚后的对象删除、ADMIN 联表/聚合、AOP 不记录参数/结果/异常消息、Flyway V1–V4 与存量 V3 升级。StorageContractTest 使用真实 OSS SDK 与环回 HTTP 服务验证写/读/删及 XML 错误处理，未连接真实云账户。

前端新用例覆盖 FormData、错误输入与上传失败、身份恢复失败、图表实例释放、管理员报表失败与条件请求、二进制 Blob 与 Bearer 头。Session 客户端移除了未使用的令牌代码，已有会话与 CSRF 行为回归通过。

发布内容另检查标题、184 字符摘要、九个标签、十版章节、九组安装/概念附录、配图、链接与 17 段 PowerShell 语法；离线 HTML 在 1440px/390px 宽度无页面横向溢出，目录锚点与图片有效。工具脚本、临时截图与执行日志保留在仓库外，公开文件不包含个人路径或真实凭据。
