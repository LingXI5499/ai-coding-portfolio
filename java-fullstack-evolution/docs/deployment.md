# V10 生产交付与恢复步骤

这里提供可执行的部署配置和操作说明。目标 Linux、Nginx、SMTP、TLS 与备份恢复尚需在实际服务器验收；本机 demo 不等于部署完成。

## 构建与环境变量

在 V10/backend 执行 `./mvnw clean verify`，在 V10/frontend 执行 `npm ci && npm test && npm run build`。Windows 使用 `mvnw.cmd`。交付的是 backend/target/evolution-v10-1.0.0.jar 与 frontend/dist 内容，构建产物不进入 Git。

| 变量 | 说明 |
| --- | --- |
| SPRING_PROFILES_ACTIVE | prod |
| DB_URL | 指向专属 MySQL 8.4 数据库 java_fullstack_v10，生产 JDBC 参数应符合服务器 TLS 配置 |
| DB_USERNAME / DB_PASSWORD | 数据库账户与秘密 |
| JWT_SECRET | Base64/Base64URL 编码的至少 32 随机字节，不能使用口令或示例常量 |
| COOKIE_SECURE | 必须 true；ProductionGuard 会校验 |
| MAIL_HOST / MAIL_PORT | SMTP 地址与端口，默认 587 |
| MAIL_USERNAME / MAIL_PASSWORD / MAIL_FROM | SMTP 认证及发件地址；仅通过环境注入 |
| SERVER_ADDRESS | 建议 127.0.0.1，外部只访问 Nginx |
| PORT | 默认 8090 |

环境变量名称模板在 [V10/.env.example](../V10-production-ready/.env.example)。Spring Boot **不会自动读取 .env 文件**；请通过 systemd EnvironmentFile、容器环境或 IDEA Run Configuration 注入。模板中的空值必须补齐，不能当成可用凭据。

在 PowerShell 用密码学随机源生成 JWT_SECRET，仅设置当前环境，不打印值：

```powershell
$keyBytes=New-Object byte[] 32
$rng=[Security.Cryptography.RandomNumberGenerator]::Create()
try { $rng.GetBytes($keyBytes) } finally { $rng.Dispose() }
$env:JWT_SECRET=[Convert]::ToBase64String($keyBytes)
```

JWT 是对称签名，只把密钥交给受信任的服务进程。轮换后旧访问令牌失效，需要让用户重新登录；多实例必须共享当前签名配置和限流/会话设计，当前系列并未实现多实例运维。

## 空库安装

1. 安装并验证 JDK 17、MySQL 8.4；创建 java_fullstack_v10，不导入 V09 SQL。
2. 迁移账户授予 DML 与 CREATE/ALTER/INDEX，按最小权限连接。首次启动使用配置完整的 prod 环境。
3. Flyway 在 db/migration 中依次执行 V1 账户、V2 刷新凭据、V3 重置与审计。不会清空数据。
4. 查询 `flyway_schema_history` 确认三个版本成功；查询表和索引。执行 `db/orphan-check.sql`，结果为空。
5. 可改用仅 DML 的运行账户启动已迁移应用；后续迁移使用单独授权过程。不要把建库权限给运行账户。
6. 访问本机 `/actuator/health` 取得 UP；配置 Nginx/TLS 后通过公网域名再做注册、登录、刷新、改密、邮件和注销验收。

```bash
java -jar evolution-v10-1.0.0.jar --spring.profiles.active=prod
```

没有生产秘密或 COOKIE_SECURE=true 时会拒绝启动。生产禁用 OpenAPI，错误响应不含内部配置，健康只显示状态。不要临时启用 demo、调试日志或浏览器可读刷新 Cookie 来绕过配置失败。

## Nginx 与服务进程

将 frontend/dist 内容发布到 `/srv/evolution/frontend`，JAR 放在 `/srv/evolution/backend/`。参考配置在 [V10/deploy/](../V10-production-ready/deploy/)。把 Nginx 配置中的域名、证书、目录改成实际值，执行 `nginx -t` 后加载。

Nginx 同域提供静态页面和 /api 代理。`try_files` 让 Vue history 路由刷新后仍返回 index.html；/api 的错误不能落入该回退。后端只绑定回环，Nginx 到本机后端用 HTTP，浏览器到 Nginx 必须 HTTPS，因此 Secure Cookie 仍正常工作。

systemd 使用专用低权限用户，EnvironmentFile 放在仓库之外 `/etc/evolution/runtime.env`，权限 0600。不要在进程命令行、访问日志或 GitHub Actions 输出秘密。示例服务未配置邮件和 TLS，不能原样宣称上线成功。

## 升级、失败和回滚

1. 升级前记录应用版本与 Flyway 当前版本，停写或采取一致性备份方案，用 MySQL 官方备份工具导出数据库；备份保存到受保护位置。
2. 在隔离库恢复备份，试跑新版本迁移与关键业务测试。仅“备份命令成功”不足以证明可恢复。
3. 新迁移只追加更高序号，不修改已在目标库执行过的 V1/V2/V3。生产关闭 destructive clean，不删除历史表跳过校验。
4. 迁移失败时暂停发布，检查状态并决定前向修复；不要对未知中间状态盲目 repair。只有确认数据库与迁移记录一致后才处理历史元数据。
5. 应用回退只适用于旧应用仍兼容当前模式；不兼容时停止服务，恢复已验证备份，并发布匹配的应用。恢复会丢失备份之后的写入，需要提前确定窗口。

从 V09 的学习数据库到 V10 默认采用新库安装。迁移存量用户需要单独的数据迁移与校验方案；本系列不自动对一个已有 V09 库 baseline，也不把删除数据当作升级。

## 仍需目标环境验证

真实 SMTP/邮件可达性、邮箱所有权确认、TLS 与域名、进程权限、备份恢复、目标 MySQL 运行账户权限、入口限流、日志与审计留存、性能/并发容量。CI 的 MySQL 服务验证 SQL 和业务测试，不覆盖这些运维条件。
