# 安全模型与已知限制

本系列是可运行的教学工程，安全行为以代码和测试为依据，不承诺未经评估的生产安全等级。V01–V04 没有账户保护，只在本机使用。

## 密码与输入

V05 起 `config/PasswordConfig.java` 选择 BCrypt work factor 12，`AccountService.validatePassword` 限制 12–64 字符且 UTF-8 不超过 72 字节。密码哈希不是可逆加密，也不能替换成 SHA-256。未注册用户名使用固定进程内 dummy BCrypt 哈希参与比对，降低明显的时间差。

本机测试记录了哈希路径的真实执行；性能取决于部署机器。因子 12 是教学默认，投产前应在目标硬件测量登录延迟与容量，不能宣称其性能已完成生产验证。

SQL 使用 MyBatis `#{}` 参数绑定，不将用户输入代入 SQL 标识符。用户名有唯一索引，重复注册映射为 409；DTO 校验在服务端执行，未知字段拒绝。VO 不返回 passwordHash、authVersion 或令牌摘要。前端使用 Vue 插值或 textContent，不使用用户内容生成 HTML。

## Cookie、Session 与 CSRF

| 版本 | 身份载体 | CSRF 实现 | 撤销 |
| --- | --- | --- | --- |
| V05/V06 | HttpSession 的用户 ID 与版本 | SessionGuard 的服务端同步令牌 | invalidate、闲置超时、auth_version 检查 |
| V07 | Spring SecurityContext + Session | Spring Security HttpSessionCsrfTokenRepository | 框架注销与会话固定防护、业务状态过滤器 |
| V08–V10 | Authorization Bearer JWT | 独立 Cookie 端点过滤链 | 刷新令牌状态与账户身份版本 |

会话 Cookie 是 HttpOnly、SameSite=Strict，生产 Secure=true；默认闲置 20 分钟。登录后更换 Session ID。V05/V06 的过渡实现不能等同成熟框架，V07 移除了重复的手写会话认证。

前端先 GET `/api/auth/csrf`，读取公开响应中的令牌，写请求携带 `X-CSRF-TOKEN`。V08 的 XSRF-TOKEN Cookie 也设为 HttpOnly，由端点返回令牌给同源前端。刷新、注销、登录、注册、找回和重置都使用有 CSRF 保护的 Cookie 过滤链，即使请求带 Bearer 也不能豁免。

JWT 受保护 API 使用另一条过滤链，只从 Authorization 头认证，不把 Cookie 当成身份。该链不要求 CSRF，原因是浏览器不会自动生成 Bearer 请求头；Cookie 端点并未关闭 CSRF。生产必须同源 HTTPS，CORS 没有开放任意 Origin 与 credentials 的组合。

## JWT 与刷新令牌

`JwtConfig` 固定 HS256，至少 32 随机字节密钥。验证 issuer、audience、expiration、subject、role、ver；缺失必要声明同样拒绝。Payload 仅含内部 ID、角色、身份版本和时间等必要声明，不含密码或邮箱。签名不是加密。

Access Token 默认 300 秒，前端仅在 api.js 模块内存保存，不使用 localStorage/sessionStorage。Refresh Token 是 32 字节随机值，有效 7 天，使用 HttpOnly、SameSite=Strict、生产 Secure Cookie，path=/api/auth。数据库只保存 SHA-256 摘要；哈希仅用于这些高熵令牌，不用于密码。

刷新通过条件更新原子消费并生成后继令牌；旧令牌重放会撤销同一家族，防止重复使用。并发测试验证只有一个请求成功；前端共享刷新 Promise，避免自己并发轮换造成重放。当前设备注销撤销该刷新凭据，已有 Access Token 可使用到五分钟过期；这项限制是明确行为。V09 的全设备退出、改密、密码重置、禁用或注销提升 auth_version，在每次请求查询数据库时立即拒绝旧访问身份，同时撤销全部刷新凭据。

JWT 身份验证仍查账户状态与版本，因此不是完全无状态。该设计便于解释即时撤销和禁用，代价是每次请求仍依赖数据库。

## 权限、注销与审计

注册只能获得 USER，不接受输入 role/status/id。个人资料接口从认证主体取 ID，不通过用户提供的 ID 定位账户。ADMIN 路由在服务端过滤链要求 ADMIN；前端隐藏按钮仅用于体验。

管理员没有默认密码。先正常注册自己的账户，再由数据库所有者在正确的版本数据库中执行：

```sql
UPDATE app_user SET role='ADMIN', auth_version=auth_version+1
WHERE username='<你已注册并核实的管理员用户名>' AND status='ACTIVE';
```

随后重新登录。不要开放公开“创建管理员”接口。最小模型只支持查看用户、禁用和恢复；不做角色编辑或复杂 RBAC。管理员不能通过状态接口修改自身。注销是 DELETED 状态，用户名、关联记录和审计仍保留，不承诺符合任意地区的数据删除法规；投产前需要独立的数据留存与删除策略。

V09 的 AuditService 记录内部 user_id、固定 action、时间，不记录密码、Cookie、IP、邮箱或令牌。逻辑关联在服务端验证；审计不设物理外键。生产应限制审计读取权限，定义留存、归档和定期清理计划。

## 找回密码与邮件

PasswordResetService 生成高熵随机令牌，仅存摘要，15 分钟有效，一次消费。再次申请会废弃旧重置凭据；按用户名和请求地址做有界内存限流，使用失败同样计数。未知、不可用、没有邮箱和投递失败对外使用同一成功响应，降低账户枚举。

开发 LocalMailGateway 在 backend/.local-mail 写入单次邮件，目录已忽略且没有 HTTP 读取接口。它包含敏感重置令牌，Windows 用户应确保工作目录仅本人可读，使用后删除文件；POSIX 文件设为 0600。普通应用日志不输出令牌。生产只加载 SmtpMailGateway，SMTP 凭据从环境变量注入，要求 STARTTLS。

邮箱当前没有所有权验证流程；真实邮箱投递、垃圾邮件处理和账户恢复社会工程风险未完成生产验证。生产使用前需补充邮箱确认及适当的恢复策略。

## 环境与运维边界

- `ProductionGuard` 要求显式 MySQL、非空凭据、JWT_SECRET 和 COOKIE_SECURE=true；没有生产密钥时拒绝启动。开发可使用进程随机密钥，重启后旧 Access Token 无法验签。
- 内存限流窗口一分钟，五次失败锁定，容量最多 10000 个键；重启清空、不跨实例共享。生产入口需要合理 IP 限流、容量及日志策略。
- 不记录完整请求体、Authorization 或 Cookie，代理访问日志同样不得加入这些字段；错误返回不暴露内部信息。
- 健康检查只公开 UP/DOWN，生产禁用 OpenAPI 页面，公网仅开放 Nginx HTTPS，后端绑定回环。
- V01–V09 的初始化 SQL 不支持任意存量结构升级；V10 通过 Flyway 前向迁移。备份恢复、TLS、邮件和性能必须在目标环境另行验收。
