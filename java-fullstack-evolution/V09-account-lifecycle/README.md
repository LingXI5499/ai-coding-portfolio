# V09 · 账户生命周期与权限边界

## 本版解决的问题

账户安全跨越多个请求与设备。身份版本使改密、禁用、全设备退出立即拒绝旧访问令牌；刷新凭据另行撤销。

## 演进关系与实现变化

基于 V08 的项目快照升级，保留上一版目录。本版本只读取自己的 backend 与 frontend。

Profile API 从认证主体取 ID，不接受客户端指定账户；ADMIN 规则在服务端过滤链执行。PasswordResetService 把重置令牌摘要、15 分钟有效期、一次消费、请求限流和邮件失败补偿放入业务流程。

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

不依赖其他版本的源码、父 POM 或运行目录。可以把本目录单独复制到仓库外安装、构建。后端 8089，数据库 `java_fullstack_v09`。独立性检查与真实执行记录见 [验收记录](../docs/verification.md)。

## 数据库初始化

在 backend 目录启动 MySQL 客户端，以下操作由具有建库权限的本地管理员执行：
```powershell
mysql -u root -p
```
```sql
CREATE DATABASE java_fullstack_v09 CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE java_fullstack_v09;
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
$env:DB_URL='jdbc:mysql://localhost:3306/java_fullstack_v09?serverTimezone=UTC'
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

打包：`.\mvnw.cmd clean verify`；可运行 JAR 在 `backend/target/evolution-v09-1.0.0.jar`，不提交构建产物。

另开终端，从本版本根目录执行：
```powershell
cd frontend
npm ci
npm test
npm run dev
```
访问 <http://127.0.0.1:5179>。Vite 的 `/api` 代理指向 8089。只启动本版本，不同时启动十版。

构建与本机生产包预览：
```powershell
npm run build
npm run preview
```
预览端口 5279，也代理到本机后端；生产部署使用 [部署指南](../docs/deployment.md) 中的 Nginx，不能把 Vite 开发服务器用于公网。

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
完整生命周期路径与请求体见 [API 演进](../docs/api-evolution.md)。开发邮件在 **backend 工作目录的 `.local-mail/`**，读取后把重置令牌粘贴到前端找回页面，使用后删除投递文件。

## 验收步骤

1. 先执行后端测试、前端测试和构建，确认命令退出码为 0。
2. 按上面的数据库步骤初始化，启动后端与前端。
3. 逐项操作：本人资料、跨用户 ID 注入、管理员禁用恢复、重置过期/重用、邮件失败、全设备退出、账户软注销。
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

开发投递目录 .local-mail 不提供 HTTP 读取，不能用于生产。生产使用 SMTP 环境变量；邮件发送失败时废弃令牌，对外仍返回统一响应，避免账户枚举。

## 下一版本

V10：迁移、自动化测试与生产交付

教程：[V09 文章草稿](../docs/articles/V09-account-lifecycle.md)。完整安全边界见 [security-model.md](../docs/security-model.md)。
