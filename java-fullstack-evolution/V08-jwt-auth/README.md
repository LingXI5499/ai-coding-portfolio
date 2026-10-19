# V08 · JWT 与刷新令牌轮换

## 本版解决的问题

Access Token 是带签名的短期 JWT；Refresh Token 是服务端登记的随机凭据。签名提供完整性，不提供 Payload 保密。

## 演进关系与实现变化

基于 V07 的项目快照升级，保留上一版目录。本版本只读取自己的 backend 与 frontend。

JwtConfig 固定 HS256、issuer、audience、时间与必要声明；刷新令牌只有 SHA-256 摘要入库。TokenMapper.consume 使用条件更新实现一次性消费，事务中签发后继令牌；检测重放会撤销整个令牌家族。

本次开发依照用户补充要求：**JDK 17、backend/frontend 分离、全部逻辑外键、SQL 放在 resources 中**。

## 请求链路与结构

浏览器 → HTTP 客户端 → Controller → Service → MyBatis XML → 本版数据库。
```text
backend/
  pom.xml、mvnw、mvnw.cmd、.mvn/wrapper/
  src/main/java/com/lingxi/evolution/{controller,service,mapper,entity,...}
  src/main/resources/{application*.yml,mapper,db}
  src/test/{java,resources}
frontend/{package.json,package-lock.json,vite.config.js,src/}
```

## 环境与独立性

JDK 17、Spring Boot 3.5.16、MyBatis Starter 3.0.5、Maven Wrapper 3.9.16、MySQL 8.4。前端使用 Node 24.15.0；依赖由自己的锁文件固定。

不依赖其他版本的源码、父 POM 或运行目录。可以把本目录单独复制到仓库外安装、构建。后端 8088，数据库 `java_fullstack_v08`。独立性检查与真实执行记录见 [验收记录](../docs/verification.md)。

## 数据库初始化

在 backend 目录启动 MySQL 客户端，以下操作由具有建库权限的本地管理员执行：
```powershell
mysql -u root -p
```
```sql
CREATE DATABASE java_fullstack_v08 CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE java_fullstack_v08;
SOURCE src/main/resources/db/init.sql;
SHOW TABLES;
```
应用连接使用环境变量。开发账户创建及最小权限见 [Windows 指南](../docs/environment-windows.md)。本版本独立数据库，禁止改为其他版本的数据库名。

## 首次运行、测试与构建

从本版本根目录执行：
```powershell
cd backend
java -version
.\mvnw.cmd -v
$env:DB_URL='jdbc:mysql://localhost:3306/java_fullstack_v08?serverTimezone=UTC'
$env:DB_USERNAME='lab'
# DB_PASSWORD 通过 IDEA Run Configuration 或当前终端安全输入设置，勿写入仓库。
.\mvnw.cmd test
.\mvnw.cmd spring-boot:run
```
测试默认使用隔离的 H2，不读取本机数据库密码。只有设置 `TEST_DB_*` 才切到显式的集成数据库；不得指向实际业务库。

没有 MySQL 时可使用可运行的内存演示模式：
```powershell
.\mvnw.cmd spring-boot:run '-Dspring-boot.run.profiles=demo'
```
**demo 停止后丢失数据，不能作为 MySQL 持久化验收证据。**

打包：`.\mvnw.cmd clean verify`；可运行 JAR 在 `backend/target/evolution-v08-1.0.0.jar`，不提交构建产物。

另开终端，从本版本根目录执行：
```powershell
cd frontend
npm ci
npm test
npm run dev
```
访问 <http://127.0.0.1:5178>。Vite 的 `/api` 代理指向 8088。只启动本版本，不同时启动十版。

构建与本机生产包预览：
```powershell
npm run build
npm run preview
```
预览端口 5278，也代理到本机后端；生产部署使用 [部署指南](../docs/deployment.md) 中的 Nginx，不能把 Vite 开发服务器用于公网。

## API 示例

先 GET `/api/auth/csrf`，保存 Cookie，将响应中的 token 发送在 `X-CSRF-TOKEN` 请求头中。不要在终端打印真实 Cookie 或令牌。
```http
POST /api/auth/register
Content-Type: application/json
X-CSRF-TOKEN: <服务端签发的令牌>

{"username":"learner","password":"<12至64字符的本机学习密码>","nickname":"学习者","email":"learner@example.invalid"}
```
注册返回 201；同名返回 409。GET `/api/auth/me` 需要认证，POST `/api/auth/logout` 注销。
登录使用 `POST /api/auth/login`，JSON 字段 `username`、`password`。
JWT 登录响应包含 `data.accessToken`；受保护请求使用 `Authorization: Bearer <accessToken>`。POST `/api/auth/refresh` 使用 HttpOnly 刷新 Cookie 与 CSRF 请求头，响应会轮换刷新 Cookie。

## 验收步骤

1. 先执行后端测试、前端测试和构建，确认命令退出码为 0。
2. 按上面的数据库步骤初始化，启动后端与前端。
3. 逐项操作：有效、过期、畸形、篡改 JWT；刷新轮换、家族重放撤销、并发仅一个胜出、注销撤销。
4. 打开浏览器 Network，核对 URL、Method、请求体、状态码和响应；Cookie 在 Application 中查看。
5. 重启应用，确认身份恢复/凭据失效行为与文档一致；H2 demo 不做持久化断言。

## 常见错误与停止方式

- `release version 17 not supported`：`.\mvnw.cmd -v` 检查实际 JAVA_HOME；PATH 中 java 与 Maven 所用 JDK 可能不同。
- 数据库连接失败：检查 MySQL 服务、专属库名和 DB_USERNAME/DB_PASSWORD，勿把密码粘贴到日志。
- 端口占用：停止旧进程，或临时设置 `PORT`；修改后同步调整 Vite proxy。
- 401：身份缺失/过期/被撤销；403：权限不足或 CSRF 无效。不要关闭安全功能来绕过。
- Ctrl+C 停止服务；IDEA 使用 Stop。切换版本先退出当前账户，再停两个终端。
- 清理实验数据前确认库名；只在专门的本版测试库执行，生产数据先备份。`mvnw clean` 只删除构建目录。

## 安全限制

密码使用 BCrypt(12)，限制 12–64 字符且 UTF-8 不超过 72 字节。账户响应不含密码哈希。Cookie 使用 HttpOnly、SameSite=Strict；开发 HTTP 允许 Secure=false，生产必须 HTTPS 与 Secure=true。访问令牌默认 5 分钟，刷新令牌 7 天。当前设备退出撤销刷新令牌；已经签发的访问令牌仍可使用到过期。全设备退出/改密/禁用通过身份版本立即失效。每个受保护请求仍会查数据库，不能宣称完全无状态。

Cookie 端点使用独立的 CSRF 过滤链；Bearer API 只接受 Authorization 头。刷新请求不能因为携带 Bearer 就绕过 Cookie CSRF 校验。前端令牌仅保存在模块内存中。

## 下一版本

V09：账户生命周期与权限边界

教程：[V08 文章草稿](../docs/articles/V08-jwt-auth.md)。完整安全边界见 [security-model.md](../docs/security-model.md)。


## 条件查询与分页补充

管理员列表按用户名或昵称关键字查询，并组合账户状态、角色筛选；查询参数不会替代 ADMIN 权限。

```http
GET /api/admin/users?keyword=learner&status=ACTIVE&role=USER&page=1&pageSize=10
```

列表不再返回固定上限 200 条的数组，改为 `records/total/page/pageSize/totalPages` 分页对象。V01 直接返回该对象；V02 起位于 `ApiResponse.data`。默认 page=1、pageSize=10，单页最多 100。`total` 来自相同过滤条件的 COUNT，空结果 totalPages=0；越界的合法页返回空 records，非法参数返回 400。

页面提供查询、重置、上一页、下一页和每页条数。新筛选和切换大小回到第一页，删除或状态变更导致最后一页消失时自动退回有效页。API 升级需要调用方把列表读取改为 `page.records`，不能把分页对象当数组。

实现、完整参数、SQL 原理与验收见 [条件分页指南](../docs/query-and-pagination.md)。本次不新增版本目录、不引入物理外键，也没有新增数据库表或迁移。
