# Windows + IntelliJ IDEA 环境安装

本系列统一 **JDK 17**，这是用户在开发过程中的最新选择。不要照旧规格安装 JDK 21，也不要为了构建项目修改系统 JAVA_HOME。MySQL 8.4、Node 24 LTS 是推荐环境；十个版本各自运行，无需同时启动。

## 下载与安装检查

| 工具 | 官方入口 | 配置与检查 |
| --- | --- | --- |
| JDK 17 | [Temurin](https://adoptium.net/temurin/releases/?version=17) | 选择 Windows x64 JDK 17；JAVA_HOME 指向 JDK 根目录，PATH 添加 `%JAVA_HOME%\bin` |
| IntelliJ IDEA | [下载](https://www.jetbrains.com/idea/download/) | 打开具体版本的 backend/pom.xml，Project SDK、Maven Runner、Run Configuration 均选 JDK 17 |
| MySQL 8.4 | [社区版](https://dev.mysql.com/downloads/mysql/8.4.html) | 安装 Server，初始化管理员密码；确认服务运行及 3306 端口，Workbench 可选 |
| Git for Windows | [下载](https://git-scm.com/download/win) | PowerShell 中可运行 git；保留仓库 LF 行尾约定 |
| Node 24 LTS | [下载](https://nodejs.org/en/download/) | 前端需要；安装后新开终端，执行 node 与 npm 检查 |
| Maven Wrapper | 随 backend 提交 | 不要求全局安装 Maven，首次调用会下载指定的 Maven 发行包 |

```powershell
java -version
where.exe java
$env:JAVA_HOME
& "$env:JAVA_HOME/bin/java.exe" -version
git --version
node -v
npm -v
# 进入某版本的 backend 后
.\mvnw.cmd -v
```

`java -version` 使用 PATH，而 Maven Wrapper 优先使用 JAVA_HOME。本机曾出现 PATH 的 Java 21 与 JAVA_HOME 的 Java 17 不一致，因此判断构建环境时一定看 `mvnw.cmd -v`。本系列编译 release=17，不能靠默认 PATH 推测。

IDEA 依次检查 Project Structure → Project SDK、Settings → Build Tools → Maven → Runner JRE，以及运行配置的 JRE。Maven Home 选 Wrapper。修改环境变量后新开终端；已有终端不会自动刷新。

## 数据库与最小权限

在具体版本的 **backend 工作目录**打开终端，执行 `mysql -u root -p`，由本机管理员创建该版数据库。下面以 V01 为例，其余版本将 v01 改成对应两位版本号：

```sql
CREATE DATABASE java_fullstack_v01 CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE java_fullstack_v01;
SOURCE src/main/resources/db/init.sql;
SHOW TABLES;
SHOW INDEX FROM employee;
```

V05 起检查表名 `app_user`；V08 起有 `refresh_token`；V09 起再有 `password_reset` 与 `audit_event`。V10 不导入 init.sql，由 Flyway 在空数据库中执行 `db/migration/`。

开发账户不要使用 root。用数据库管理工具创建 `lab@localhost`，在本机设置强密码，按版本授予 `SELECT, INSERT, UPDATE, DELETE` 权限。初始化表结构由管理员完成。V10 的迁移账户另需 `CREATE, ALTER, INDEX`；生产中建议先用迁移账户迁移，再用仅 DML 的运行账户启动已迁移版本。不要把示例用户名误当成已经创建好的账户。

**所有关联都是逻辑外键。** 索引辅助查询，服务层负责写入前校验；不允许在 GUI 中额外创建物理外键。V08–V10 的 `db/orphan-check.sql` 提供只读孤儿排查，结果应为空。

## 配置连接信息

在 IDEA Run Configuration 的 Environment variables 中设置 `DB_URL`、`DB_USERNAME`、`DB_PASSWORD`。也可在 PowerShell 中设置，仅对当前终端及其子进程生效：

```powershell
$env:DB_URL='jdbc:mysql://localhost:3306/java_fullstack_v01?serverTimezone=UTC'
$env:DB_USERNAME='lab'
$dbSecret=Read-Host '数据库密码' -AsSecureString
$credential=[pscredential]::new('lab',$dbSecret)
$env:DB_PASSWORD=$credential.GetNetworkCredential().Password
.\mvnw.cmd spring-boot:run
# 服务停止后清除当前进程的凭据
Remove-Item Env:DB_PASSWORD
```

也可复制 `src/main/resources/application-local.example.yml` 为同目录的 `application-local.yml`，仅在本机填值，用 local profile 启动。该文件已忽略；提交前仍需检查 `git status`。

## 第一次启动

1. 进入想学习的 Vxx 目录，阅读其 README，确认数据库名及端口。
2. 在 backend 执行 `mvnw.cmd -v` 和 `mvnw.cmd test`。测试默认使用 H2，无需本机数据库凭据。
3. 创建专属 MySQL 数据库、导入资源目录 SQL；V10 让 Flyway 迁移。
4. 配置连接环境变量，执行 `mvnw.cmd spring-boot:run`。
5. V01/V02 直接打开后端地址。V03 起另开终端进入同版本 frontend，执行以下命令。

```powershell
npm ci
npm test
npm run dev
# 单独检查生产构建
npm run build
```

V03–V10 前端依次使用 5173–5180，后端依次 8083–8090。开发代理目标在当前 frontend/vite.config.js。页面通过同源 `/api` 调用，不需要任意 Origin 的 CORS。

没有 MySQL 时，可以先执行 `mvnw.cmd spring-boot:run '-Dspring-boot.run.profiles=demo'`。该模式只是内存演示，进程退出清空，不能证明 MySQL 持久化。

## 测试隔离与切换

`TEST_DB_URL`、`TEST_DB_DRIVER`、`TEST_DB_USERNAME`、`TEST_DB_PASSWORD` 仅用于明确的集成数据库；未设置时测试使用 H2。测试会建表并写入测试数据，绝不指向生产或用户学习数据库。CI 从 MySQL 8.4 的十个空库开始验证。

停止时对前后端两个终端按 Ctrl+C；IDEA 点 Stop。切换版本先停止旧版，退出旧账户，再打开新端口。清理测试数据前核对库名；不要把删除整个 MySQL 数据目录当作重置步骤。

## V10 综合练习与可选环境

Element Plus 与 ECharts 由 V10 的 `npm ci` 下载，无需全局安装或浏览器插件。默认上传存储为应用工作目录中的 `.local-uploads/`，无需云账号；目录必须是服务私有目录。真实 OSS 的 Bucket、RAM、环境变量与验收见 [存储和报表指南](storage-and-reports.md)。

V10 自定义 MySQL DB_URL 应保留 `connectionTimeZone=UTC&forceConnectionTimeZoneToSession=true`，保证按 UTC 自然日聚合。H2 演示与默认测试自动设置 UTC；用 MySQL 运行测试时，还应将 `TEST_DB_INIT_SQL` 设置为 `SET time_zone = '+00:00'`，CI 已配置。

初次学习可按 [入门路线](beginner-roadmap.md)；可选接口客户端见 [调试指南](api-debugging.md)，Maven 继承、聚合与私服见 [工程化扩展](engineering-extension.md)。

## 常见故障

- `release version 17 not supported`：Wrapper 正在用旧 JDK，检查 JAVA_HOME、IDEA Maven Runner。
- MySQL `Access denied`：检查账户的 host、权限及密码环境变量，避免把密码粘贴到报错截图。
- `Unknown database`：库名未建或版本号错；不同版本禁止共享同一个库。
- `Table already exists`：初始化 SQL只应在新库使用；索引创建不负责兼容已初始化的任意旧结构。生产只走 Flyway。
- 517x/808x 占用：`Get-NetTCPConnection -LocalPort 端口` 查看所属进程，确认后停止对应服务。
- npm PowerShell 执行策略问题：使用 `npm.cmd`，不需要全局降低执行策略。
- Wrapper 下载失败：检查代理或 Maven Central 可达性；勿使用来源不明的脚本替换 Wrapper。
- Vue 生产页面刷新 404：配置 Nginx `try_files` 回退到 index.html；API location 单独代理，不能把接口错误变成 SPA 页面。
