# API 演进与契约

V01 直接返回员工对象/数组，创建 201，删除 204。V02 起成功与失败使用相同 envelope：`code, message, data, traceId`。SUCCESS 的 data 是公开 VO；失败 data=null。统一结构不覆盖协议状态码。

| 状态 | 含义 |
| --- | --- |
| 200 / 201 / 204 | 成功 / 创建 / V01 删除成功 |
| 400 | 校验、JSON 或类型无效 |
| 401 | 缺少、过期、被撤销的身份或无效凭据 |
| 403 | 权限不足或 Cookie 请求 CSRF 失败 |
| 404 | 资源不存在 |
| 409 | 唯一性或业务冲突 |
| 429 | 登录或密码恢复频率限制 |
| 500 | 内部错误，给 traceId，不给堆栈或 SQL |

## V01–V04：员工

| Method / 路径 | 输入 | 输出与失败 |
| --- | --- | --- |
| GET /api/employees | 无 | 最多 200 条员工；空数组 |
| GET /api/employees/{id} | 整数 ID | 员工，缺失 404 |
| POST /api/employees | name, gender, age, phone, department, salary | 201；V02 起 400 校验 |
| PUT /api/employees/{id} | 同创建字段 | 更新后的员工；404 |
| DELETE /api/employees/{id} | 整数 ID | V01 为 204，V02 起 envelope 200；404 |

V02 起 name 1–50，gender=男/女/未说明，age=18–70，phone 最多 20，department 1–100，salary 非负且最多八位整数、两位小数。VO 只包含上述字段与 id，不包含数据库时间字段。

V03 的三种客户端保留同一路径。V04 升级为 Vue，但不改变 API。V05 移除员工 API，账户域的切换是教学业务范围变化，不是同一路径的兼容升级。

## V05–V10：账户认证

| 首次出现 | Method / 路径 | 输入与凭据 | 返回 |
| --- | --- | --- | --- |
| V05 | GET /api/auth/csrf | 无 | token、headerName，同时建立会话/CSRF Cookie |
| V05 | POST /api/auth/register | username/password/nickname/email + CSRF | 201 UserVO，冲突 409 |
| V05 | POST /api/auth/login | username/password + CSRF | V05–V07 UserVO；V08 起 accessToken/expiresIn/user |
| V05 | GET /api/auth/me | Session 或 Bearer | UserVO，缺失身份 401 |
| V05 | POST /api/auth/logout | Session/Refresh Cookie + CSRF | 当前设备退出 |
| V06 | POST /api/auth/password | currentPassword/newPassword + 已认证身份 | 改密并撤销旧身份；Session 版本还需 CSRF |
| V07 | GET /api/admin/users | ADMIN | 最多 200 个 UserVO，USER 返回 403 |
| V08 | POST /api/auth/refresh | Refresh Cookie + CSRF | 轮换 Cookie 与新的 accessToken/expiresIn/user |

用户名 `[a-z0-9_]{3,32}`；昵称 1–50；密码 12–64 字符且 UTF-8 不超过 72 字节；邮箱可选，最多 254。UserVO 包含 id/username/nickname/email/status/role，不含密码哈希与身份版本。

V07 的登录由 Spring Security 表单过滤器处理，使用 `application/x-www-form-urlencoded`；其他版本登录使用 JSON。前端 HTTP 模块负责该差异。V08 取消 Session 身份，受保护 API 必须发送 Bearer；刷新 Cookie 自动发送到 /api/auth，并有独立 CSRF 防护。

## V09–V10：生命周期

| Method / 路径 | 请求体 | 权限与效果 |
| --- | --- | --- |
| PUT /api/account/profile | nickname, email | 只修改当前主体，不接受 id；未知字段 400 |
| POST /api/auth/logout-all | 无 | 当前主体；全部访问/刷新身份失效 |
| DELETE /api/account | 无 | 当前主体；软注销、撤销凭据，保留用户父行与审计 |
| POST /api/auth/forgot-password | username | CSRF；统一响应；如可用则发送重置邮件 |
| POST /api/auth/reset-password | token, newPassword | CSRF；15 分钟/一次使用；无效 400，限流 429 |
| GET /api/admin/users | 无 | ADMIN；列表不返回哈希 |
| PATCH /api/admin/users/{id}/status | status=ACTIVE/DISABLED | ADMIN，禁止修改自身；缺失 404 |

`/api/account/profile/{其他用户ID}` 不存在，不能把 URL 改成别人的 ID 越权。V10 通过 `/v3/api-docs` 提供可查看的 OpenAPI JSON、`/swagger-ui/index.html` 提供本机 Swagger；生产 profile 禁用。`/actuator/health` 仅暴露状态。
