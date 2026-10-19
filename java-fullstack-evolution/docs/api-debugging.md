# 从浏览器到接口客户端：调试一条请求

## 先使用浏览器 Network

启动当前版本，在 F12 → Network 中完成一个操作。核对 Method、URL、Query String、Content-Type、Request Payload、Status 和 Response。将失败请求对应到 Controller，继续查看 Query/DTO、Service 与 XML；不要只根据页面是否跳转判断业务是否成功。

V01/V02 的页面与后端同源。V03 起通过 Vite 的 `/api` 代理联调；生产配置由 Nginx 同域提供页面与代理。开发代理不改变服务端授权规则。

## 可选的图形客户端

可选择 [Apifox](https://docs.apifox.com/download)、[Postman](https://www.postman.com/downloads/) 或 [Bruno](https://www.usebruno.com/downloads)。下载与系统架构匹配的桌面安装程序，按向导安装；选一个即可。软件界面会更新，下列步骤描述需要填写的协议内容。

1. 启动 V10 的后端。
2. 打开本机 `/v3/api-docs`，导入客户端支持的 OpenAPI 来源；也可在 `/swagger-ui/index.html` 查看接口。
3. 设置本地 base URL，例如 `http://127.0.0.1:8090`，保留响应 Cookie。
4. 每次使用虚构学习资料，凭据放在客户端私有环境，不同步到公开集合。

## V01–V04：员工条件分页

```http
GET /api/employees?department=研发&minAge=25&page=1&pageSize=5
```

同一请求改变为 `page=0`，应得到 400。改为不存在的部门得到空记录；合法页码超过末页保留真实总数。V01 直接读取分页对象，V02 起读取响应 `data`。URL 中中文由客户端进行编码。

## V05–V07：Session 和 CSRF

1. GET `/api/auth/csrf`，从原始响应的 `data.token` 读取令牌，并保留服务端 Cookie。
2. POST `/api/auth/register`，在 `X-CSRF-TOKEN` 请求头中填写该令牌；JSON 字段为 username、password、nickname 和可选 email。
3. POST `/api/auth/login`。V05/V06 使用 JSON；V07 选择 `application/x-www-form-urlencoded`，提交 username、password。
4. 登录后 GET `/api/auth/csrf` 更新令牌，再 GET `/api/auth/me`，客户端继续发送会话 Cookie。
5. POST `/api/auth/logout` 携带有效 CSRF。移除令牌后重试写请求，验证 403。

密码为自己设置的 12–64 字符学习密码，UTF-8 不超过 72 字节。不要把密码哈希复制进登录请求。

## V08–V10：Bearer 与刷新 Cookie

先获取 CSRF Cookie/Token，再用 JSON 登录。响应 `data.accessToken` 是短期访问 JWT，`Set-Cookie` 另行下发 HttpOnly 刷新凭据。

```http
GET /api/auth/me
Authorization: Bearer <登录得到的访问令牌>
```

刷新使用 POST `/api/auth/refresh`，客户端发送 Cookie 与 `X-CSRF-TOKEN`，保存新的访问令牌和轮换 Cookie。手动重用旧刷新凭据会触发令牌家族撤销，独立测试账户用于此练习。

Cookie 登录/刷新端点与 Bearer 业务接口由不同过滤链处理。添加 Bearer 头不能让刷新请求跳过 CSRF；业务接口也不能仅凭刷新 Cookie 取得身份。

## V10：文件与报表

| 请求 | 发送内容 | 预期 |
| --- | --- | --- |
| POST `/api/files` | Bearer；multipart 表单，文件字段名 `file` | 201，返回元数据 |
| GET `/api/files?page=1&pageSize=5` | Bearer | 只返回当前主体的文件分页 |
| GET `/api/files/{id}/content` | Bearer | 本人 200/image/png；他人 ID 返回 404；匿名 401 |
| GET `/api/admin/dashboard` | ADMIN Bearer | 账户状态聚合与七个 UTC 自然日事件数 |
| GET `/api/admin/audit-events?keyword=learner&action=FILE_UPLOADED` | ADMIN Bearer | 联表分页，包含账户名称与审计动作 |

multipart 的 Content-Type 由客户端随 boundary 自动生成，不要手写只有 `multipart/form-data` 的不完整请求头。文件只接受有效 PNG/JPEG，输入与重新编码后均不超过 2 MiB、最多 400 万像素。不要上传真实证件或个人照片作为公共学习数据。

文件响应是二进制，不套 JSON envelope；浏览器通过带认证的 Axios 请求获取 Blob，再创建临时预览 URL。令牌不能塞进图片 URL。图片内容不通过 Nginx 的公共目录暴露。

## 按错误类型定位

400 检查输入与格式，401 检查身份，403 检查权限或 Cookie CSRF，404 核对资源及所属账户，409 核对唯一性与配额，413 检查上传大小，429 检查频率，503 检查私有存储。收到 500 时用 traceId 排查服务端，向他人提供日志前清理敏感信息。
