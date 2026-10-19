# Java 全栈进化实验室｜Java Full-Stack Evolution Lab

十个完整、独立的项目快照，从员工 CRUD 走到账户安全与生产交付。每个版本都有自己的后端、测试、数据库资源；V03 起拥有独立前端和锁文件。系列作为作品集合中的一个作品，与浏览器教学模型 java-web-lab 并存。

**技术基线：JDK 17（按用户最新要求）、Spring Boot 3.5.16、MyBatis Starter 3.0.5、MySQL 8.4、Node 24.15.0。所有关联使用逻辑外键。**

| 版本 | 本版主题 | 后端 | 前端 | 数据库 |
| --- | --- | --- | --- | --- |
| [V01](V01-employee-crud/README.md) | 员工 CRUD 与最小全栈联调 | 8081 | 同源 | `java_fullstack_v01` |
| [V02](V02-api-contract/README.md) | DTO、VO 与可预测的 API 契约 | 8082 | 同源 | `java_fullstack_v02` |
| [V03](V03-http-clients/README.md) | 同一个 API：XHR、Fetch 与 Axios | 8083 | 5173 | `java_fullstack_v03` |
| [V04](V04-vue-fullstack/README.md) | Vue 3 全栈单页应用 | 8084 | 5174 | `java_fullstack_v04` |
| [V05](V05-account-session/README.md) | 注册、登录与手写 Session | 8085 | 5175 | `java_fullstack_v05` |
| [V06](V06-session-hardening/README.md) | Session 安全加固 | 8086 | 5176 | `java_fullstack_v06` |
| [V07](V07-spring-security-session/README.md) | Spring Security 接管 Session | 8087 | 5177 | `java_fullstack_v07` |
| [V08](V08-jwt-auth/README.md) | JWT 与刷新令牌轮换 | 8088 | 5178 | `java_fullstack_v08` |
| [V09](V09-account-lifecycle/README.md) | 账户生命周期与权限边界 | 8089 | 5179 | `java_fullstack_v09` |
| [V10](V10-production-ready/README.md) | 迁移、自动化测试与生产交付 | 8090 | 5180 | `java_fullstack_v10` |

## 先运行一个版本

```powershell
cd V01-employee-crud/backend
.\mvnw.cmd -v
.\mvnw.cmd test
.\mvnw.cmd spring-boot:run '-Dspring-boot.run.profiles=demo'
```
打开 <http://127.0.0.1:8081>。demo 使用内存数据库，停止后清空。MySQL 持久化安装步骤在每版 README。

Vue 版本以 V10 为例，分别在两个终端执行：
```powershell
cd V10-production-ready/backend
.\mvnw.cmd spring-boot:run '-Dspring-boot.run.profiles=demo'
```
```powershell
cd V10-production-ready/frontend
npm ci
npm run dev
```
打开 <http://127.0.0.1:5180>。先注册再登录；默认没有预置管理员或公开密码。管理员由数据库所有者为自己注册的账户显式赋予 ADMIN，方法见安全说明。

## 结构

```text
java-fullstack-evolution/
  V01-employee-crud/                backend/（含静态前端）
  V02-api-contract/                 backend/（含静态前端）
  V03-http-clients/                 backend/ + frontend/
  V04-vue-fullstack/                backend/ + frontend/
  V05-account-session/              backend/ + frontend/
  V06-session-hardening/            backend/ + frontend/
  V07-spring-security-session/      backend/ + frontend/
  V08-jwt-auth/                     backend/ + frontend/
  V09-account-lifecycle/            backend/ + frontend/
  V10-production-ready/             backend/ + frontend/
  docs/                            系列指南 + articles/（十篇文章）
  scripts/verify.ps1                逐版检查，不是公共源码或统一 Maven 工程
```
SQL 位于每版 `backend/src/main/resources/db/`；V10 在其中使用 `migration/`。不创建公共源码、父聚合 POM、子模块、嵌套 Git 或源码软链接。

## 文档与验证

- [Windows + IDEA 环境安装](docs/environment-windows.md)
- [架构与原理](docs/architecture.md)、[API 演进](docs/api-evolution.md)
- [安全模型](docs/security-model.md)、[生产部署](docs/deployment.md)
- [验收清单](docs/acceptance-checklist.md)、[真实验证记录](docs/verification.md)
- [十篇文章索引](docs/articles/README.md)、[官方资料](docs/references.md)

从系列目录执行 `powershell -ExecutionPolicy Bypass -File scripts/verify.ps1` 可逐版进行后端 clean verify、前端 npm ci/test/build。没有系列级统一启动命令。

第三方 Maven Wrapper 保留 Apache 2.0 头，许可见 [THIRD-PARTY.md](THIRD-PARTY.md)。
