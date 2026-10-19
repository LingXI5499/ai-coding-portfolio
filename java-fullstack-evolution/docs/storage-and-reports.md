# V10 综合练习：图表、联表查询与私有文件上传

这组功能集中在 V10，不改变前九版的业务范围。先按本版 README 启动后端与前端，使用学习账户登录；管理员授权沿用 [安全模型](security-model.md)。

## 统计与审计页面

管理员打开 `/dashboard`。Element Plus 提供输入、表格、按钮、分页与提示；ECharts 使用按需注册的饼图、折线图和 SVGRenderer。`ReportChart.vue` 在组件挂载时初始化，尺寸变化时 resize，卸载时 dispose。

`GET /api/admin/dashboard` 返回 `totalUsers`、`userStates`、`activityDays`。服务层只取状态聚合与七日窗口，不把所有账户和事件传给浏览器。无事件的日期补零。时间按 UTC 自然日解释，数据库会话需保持 UTC：V10 默认 MySQL URL 使用 `connectionTimeZone=UTC&forceConnectionTimeZoneToSession=true`；自定义 DB_URL 时保留这些参数。demo H2 和默认测试连接执行对应的 UTC 初始化。

审计接口为 `GET /api/admin/audit-events`，参数包含 `keyword`（用户名包含）、`action`（固定动作精确匹配）、`page` 和 `pageSize`。COUNT 与当前页复用条件，排序为事件 ID 降序。核心 SQL 位于 `ReportingMapper.xml`：

```sql
SELECT a.id, a.user_id, u.username, a.action, a.created_at
FROM audit_event a
LEFT JOIN app_user u ON u.id = a.user_id
WHERE u.username LIKE ? ESCAPE '!'
ORDER BY a.id DESC
LIMIT ? OFFSET ?;
```

LEFT JOIN 保留没有用户主体的系统事件；传入用户名条件时，条件自然只匹配有相应账户的事件。公开 VO 没有密码哈希、令牌摘要和内部存储地址。接口授权统一在 `/api/admin/**` 安全规则中执行。

## 上传与读取的接口

| 方法与路径 | 输入 | 返回 |
| --- | --- | --- |
| POST `/api/files` | Bearer + multipart，字段 `file` | 201 + UploadedFileVO |
| GET `/api/files` | Bearer + page/pageSize | 当前账户文件分页 |
| GET `/api/files/{id}/content` | Bearer | 200 二进制 PNG；不返回 JSON envelope |

所有者只取认证主体。请求参数中的 ownerId 或 userId 无法改变所属范围；其他账户请求同一文件 ID 得到 404，匿名得到 401。列表与下载不提供公共对象 URL。

输入接受 PNG/JPEG，限制为 2 MiB、最多 400 万像素。后端读取真实格式和尺寸后重新编码 PNG，去掉原元数据，再检查输出大小；扩展名、Content-Type 或前端校验都不能替代此过程。原文件名被截断并清理路径与控制字符，仅用于显示，存储 key 是后端生成的随机值。

每个账户最多保留 20 张学习图片。账户行锁和配额检查在上传事务内执行。这个最小模块提供上传、分页与读取，不提供完整媒体库管理和自助删除；长期使用时需设计保留期、删除与配额恢复流程。

`uploaded_file` 字段包括 id、user_id、object_key、original_name、content_type、size、sha256、created_at。user_id 是逻辑关联，`(user_id,id)` 索引辅助所属查询和排序；object_key 有唯一约束。读取时校验大小与 SHA-256，防止元数据和对象内容不一致。

## 事务与外部副作用

上传顺序为图片验证、锁定账户、配额检查、注册补偿、存储对象、插入元数据和记录审计。`@Transactional` 回滚数据库；`TransactionSynchronization.afterCompletion` 在失败后尝试删除新对象。

这不是跨数据库与对象存储的原子事务。进程在写文件后崩溃、网络结果不确定或补偿删除失败，都需要后续对象清单与元数据对账。真实服务还应有上传频率、总容量、扫描、备份和数据留存策略。

## 默认本地存储

`FILES_STORAGE=local`，默认文件根目录为应用工作目录下的 `.local-uploads/`，被 Git 忽略，且不映射为静态资源。目录只应由服务进程和授权的本机用户访问。正式部署把 `FILES_LOCAL_ROOT` 指向持久化私有目录，不放到前端 dist 或 Nginx root 下。

本地适配器只接受服务端随机 key，拒绝路径穿越与符号链接；同目录临时写入后原子移动。文件系统需支持同目录原子移动，否则返回存储不可用。

## 切换为阿里云 OSS

默认学习路线不要求购买云服务。OSS 是可选外部存储适配：SDK 已在 POM 中固定，通过 Maven 下载。真实云端配置按 [OSS Java SDK 官方文档](https://help.aliyun.com/zh/oss/developer-reference/oss-java-sdk/) 与 [访问控制说明](https://help.aliyun.com/zh/oss/user-guide/permissions-and-access-control-overview) 核对。

1. 在 OSS 控制台创建与实际部署地域匹配的**私有** Bucket，记录 HTTPS Endpoint、地域 ID 和 Bucket 名。
2. 使用独立 RAM 身份，为该 Bucket 的 `learning-uploads/` 前缀授予 GetObject、PutObject 和补偿所需 DeleteObject。按实际权限策略核实，应用不需要管理全部 Bucket。
3. 将配置注入后端运行环境，不在前端、文章或 Git 中填写真实值。

| 变量 | 示例含义 |
| --- | --- |
| `FILES_STORAGE` | `oss` |
| `OSS_ENDPOINT` | 所选地域的 HTTPS Endpoint |
| `OSS_REGION` | 地域 ID，例如 `cn-hangzhou`，与 Endpoint/Bucket 对应 |
| `OSS_BUCKET` | 自己的私有 Bucket 名称 |
| `OSS_ACCESS_KEY_ID`、`OSS_ACCESS_KEY_SECRET` | 独立 RAM 身份的凭据，通过受保护环境注入 |
| `OSS_SECURITY_TOKEN` | 使用临时凭据时的安全令牌；凭据到期需更新环境并重启 |

当前适配器使用 V4 签名、有界连接/读取超时与一次重试。它不会自动续期 STS；长期生产服务可以继续替换为适合实例角色的自动凭据提供者。缺少必要参数、使用 HTTP Endpoint 或未知存储类型时拒绝启动。

真实 OSS 的地域、权限、网络、计费、生命周期与故障恢复仍需在自己的隔离环境验收。环回 HTTP 契约测试使用真实 SDK 与模拟存储协议，不代表真实云账号已验证。

## AOP 耗时日志

`ObservedOperation` 标记 `FILE_UPLOAD`、`DASHBOARD_READ` 和 `AUDIT_READ`。`OperationTimingAspect` 只记录固定动作名、成功状态和耗时；不读取方法参数、返回对象或异常消息。失败继续向上传播，由全局异常处理转换。

业务审计记录保存在数据库，AOP 耗时属于运维日志，两者责任不同。SDK 及 HTTP wire/header 日志默认关闭，避免外部错误详情或请求头泄露；排错也不要开启输出凭据的调试日志。

日志中的成功表示被调用方法正常返回；如果上层事务之后回滚，仍以事务结果、数据库和补偿结果为准，不能用耗时日志证明最终提交。

## 页面与部署配合

文件请求通过现有 Axios Bearer 拦截器发送。二进制响应保留 Blob；JSON 仍解包 `data`。前端在更换预览和组件卸载时释放 Object URL，图片令牌不进入 URL。

Nginx 请求体上限为 3 MiB，应用再限制单文件 2 MiB；CSP 的 img-src 允许同源 Blob，style-src-attr 允许组件运行时布局所需的样式属性。脚本仍限制为同源，图表关闭动画并使用 richText 提示，浏览器回归会套用交付 CSP。TLS、服务进程权限与持久化目录按目标环境另行验收。

## 亲手验证

先上传虚构 PNG，再用一个不同账户读取同一 ID；尝试伪装扩展名、SVG、超大图片、过大像素和第 21 张图片。ADMIN 查看文件上传审计，在统计页组合用户名与 FILE_UPLOADED 查询；USER 请求报表应为 403。

执行 `mvnw.cmd clean verify`、前端 `npm ci/test/build` 与 `npm run test:e2e`。后端测试覆盖事务补偿、所有权、配额、完整性、错误码、图表聚合和联表查询；CI 在 MySQL 8.4 上继续验证。具体结果见 [verification.md](verification.md)。
