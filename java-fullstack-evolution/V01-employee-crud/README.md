# V01 · 员工 CRUD 与最小全栈联调

## 本版解决的问题

HTTP → Controller → Service → XML Mapper → MySQL。浏览器只发送 JSON，不接触数据库连接。

## 演进关系与实现变化

系列起点；参考用户本地员工示例的字段，修正包名与 XML 命名空间，补齐写入操作。

EmployeeServiceImpl.create 在事务里插入记录，再按数据库生成的主键重新查询。列表支持条件分页，默认每页 10 条、最多 100 条，并返回同条件总数。

本次开发依照用户补充要求：**JDK 17、backend/frontend 分离、全部逻辑外键、SQL 放在 resources 中**。

## 请求链路与结构

浏览器 → HTTP 客户端 → Controller → Service → MyBatis XML → 本版数据库。
```text
backend/
  pom.xml、mvnw、mvnw.cmd、.mvn/wrapper/
  src/main/java/com/lingxi/evolution/{controller,service,mapper,entity,...}
  src/main/resources/{application*.yml,mapper,db}
  src/test/{java,resources}
  src/main/resources/static/{index.html,css,js}
```

## 环境与独立性

JDK 17、Spring Boot 3.5.16、MyBatis Starter 3.0.5、Maven Wrapper 3.9.16、MySQL 8.4。前端由后端同源提供，无需 Node。

不依赖其他版本的源码、父 POM 或运行目录。可以把本目录单独复制到仓库外安装、构建。后端 8081，数据库 `java_fullstack_v01`。独立性检查与真实执行记录见 [验收记录](../docs/verification.md)。

## 数据库初始化

在 backend 目录启动 MySQL 客户端，以下操作由具有建库权限的本地管理员执行：
```powershell
mysql -u root -p
```
```sql
CREATE DATABASE java_fullstack_v01 CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE java_fullstack_v01;
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
$env:DB_URL='jdbc:mysql://localhost:3306/java_fullstack_v01?serverTimezone=UTC'
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
**demo 停止后丢失数据，不能作为 MySQL 持久化验收证据。** 浏览器访问 http://127.0.0.1:8081。

打包：`.\mvnw.cmd clean verify`；可运行 JAR 在 `backend/target/evolution-v01-1.0.0.jar`，不提交构建产物。


## API 示例

```http
POST /api/employees
Content-Type: application/json

{"name":"教学员工","gender":"未说明","age":25,"phone":"","department":"研发部","salary":8000}
```
后续 GET `/api/employees/{id}`、PUT 同路径、DELETE 同路径。列表改为真正的数据库条件分页，默认第 1 页、每页 10 条，最多 100 条。

## 验收步骤

1. 先执行后端测试，确认命令退出码为 0。
2. 按上面的数据库步骤初始化，启动后端。
3. 逐项操作：新增、查询、修改、删除；刷新页面后重新读取数据库。
4. 打开浏览器 Network，核对 URL、Method、请求体、状态码和响应；Cookie 在 Application 中查看。
5. 重启应用后检查 MySQL 中数据仍在；H2 demo 不做持久化断言。

## 常见错误与停止方式

- `release version 17 not supported`：`.\mvnw.cmd -v` 检查实际 JAVA_HOME；PATH 中 java 与 Maven 所用 JDK 可能不同。
- 数据库连接失败：检查 MySQL 服务、专属库名和 DB_USERNAME/DB_PASSWORD，勿把密码粘贴到日志。
- 端口占用：停止旧进程，或临时设置 `PORT`；修改后同步调整 Vite proxy。
- 401：身份缺失/过期/被撤销；403：权限不足或 CSRF 无效。不要关闭安全功能来绕过。
- Ctrl+C 停止服务；IDEA 使用 Stop。切换版本先退出当前账户，再停两个终端。
- 清理实验数据前确认库名；只在专门的本版测试库执行，生产数据先备份。`mvnw clean` 只删除构建目录。

## 安全限制

此版本无认证，员工接口不限制访问；仅用于本机教学。输入通过 MyBatis 参数绑定进入 SQL，浏览器输出通过文本节点 / Vue 插值转义。

不要对浏览器输入使用 innerHTML。页面通过 textContent 写入员工名称，避免把输入当成 HTML。

## 下一版本

V02：DTO、VO 与可预测的 API 契约

教程：[V01 文章草稿](../docs/articles/V01-employee-crud.md)。完整安全边界见 [security-model.md](../docs/security-model.md)。


## 条件查询与分页补充

员工列表按姓名、部门做包含查询，支持性别精确筛选与年龄区间；条件按 AND 组合。

```http
GET /api/employees?name=张&department=研发&minAge=25&maxAge=40&page=1&pageSize=10
```

列表不再返回固定上限 200 条的数组，改为 `records/total/page/pageSize/totalPages` 分页对象。V01 直接返回该对象；V02 起位于 `ApiResponse.data`。默认 page=1、pageSize=10，单页最多 100。`total` 来自相同过滤条件的 COUNT，空结果 totalPages=0；越界的合法页返回空 records，非法参数返回 400。

页面提供查询、重置、上一页、下一页和每页条数。新筛选和切换大小回到第一页，删除或状态变更导致最后一页消失时自动退回有效页。API 升级需要调用方把列表读取改为 `page.records`，不能把分页对象当数组。

实现、完整参数、SQL 原理与验收见 [条件分页指南](../docs/query-and-pagination.md)。本次不新增版本目录、不引入物理外键，也没有新增数据库表或迁移。
