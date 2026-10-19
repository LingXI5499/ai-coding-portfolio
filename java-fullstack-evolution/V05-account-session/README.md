# V05 · 注册、登录与手写 Session

## 本版解决的问题

数据库保存账户和密码哈希；HttpSession 保存用户 ID 与身份版本；浏览器只自动发送 HttpOnly 会话 Cookie。

## 演进关系与实现变化

基于 V04 的项目快照升级，保留上一版目录。本版本只读取自己的 backend 与 frontend。本版移除员工业务，把前端与持久化模型转为账户体系。

SessionGuard 对所有写请求验证服务端同步 CSRF 令牌，登录成功后 changeSessionId，注销 invalidate。AccountService 用 BCrypt(12) 验证密码，响应通过 UserVO 排除哈希。

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

不依赖其他版本的源码、父 POM 或运行目录。可以把本目录单独复制到仓库外安装、构建。后端 8085，数据库 `java_fullstack_v05`。独立性检查与真实执行记录见 [验收记录](../docs/verification.md)。

## 数据库初始化

在 backend 目录启动 MySQL 客户端，以下操作由具有建库权限的本地管理员执行：
```powershell
mysql -u root -p
```
```sql
CREATE DATABASE java_fullstack_v05 CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE java_fullstack_v05;
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
$env:DB_URL='jdbc:mysql://localhost:3306/java_fullstack_v05?serverTimezone=UTC'
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

打包：`.\mvnw.cmd clean verify`；可运行 JAR 在 `backend/target/evolution-v05-1.0.0.jar`，不提交构建产物。

另开终端，从本版本根目录执行：
```powershell
cd frontend
npm ci
npm test
npm run dev
```
访问 <http://127.0.0.1:5175>。Vite 的 `/api` 代理指向 8085。只启动本版本，不同时启动十版。

构建与本机生产包预览：
```powershell
npm run build
npm run preview
```
预览端口 5275，也代理到本机后端；生产部署使用 [部署指南](../docs/deployment.md) 中的 Nginx，不能把 Vite 开发服务器用于公网。

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

## 验收步骤

1. 先执行后端测试、前端测试和构建，确认命令退出码为 0。
2. 按上面的数据库步骤初始化，启动后端与前端。
3. 逐项操作：注册、错误密码、登录、me、注销；开发工具查看 Cookie 的 HttpOnly 和 SameSite。
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

密码使用 BCrypt(12)，限制 12–64 字符且 UTF-8 不超过 72 字节。账户响应不含密码哈希。Cookie 使用 HttpOnly、SameSite=Strict；开发 HTTP 允许 Secure=false，生产必须 HTTPS 与 Secure=true。手写 Session 是过渡教学实现，不能当作成熟认证框架。20 分钟闲置超时，登录更新会话 ID。

Cookie 的 SameSite 不能替代 CSRF Token；登录、注册同样必须受保护。前端先 GET /api/auth/csrf，再在 X-CSRF-TOKEN 请求头中发送服务端令牌。

## 下一版本

V06：Session 安全加固

教程：[V05 文章草稿](../docs/articles/V05-account-session.md)。完整安全边界见 [security-model.md](../docs/security-model.md)。
