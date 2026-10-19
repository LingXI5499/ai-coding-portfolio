# 验收清单

这份文件描述可重复的验收动作，不预先代表通过。真实命令、结果和限制见 [verification.md](verification.md)。所有版本使用 JDK 17 与逻辑外键，SQL 位于 backend/src/main/resources/db。

| 版本 | 自动化关注点 | 页面与手工验收 |
| --- | --- | --- |
| V01 | XML CRUD、参数绑定、删除后 404 | Fetch 新增/查询/编辑/删除，MySQL 重启持久化 |
| V02 | DTO 校验、404、错误结构、未知异常脱敏 | 展示服务端提示，观察非 200 错误状态 |
| V03 | 三种客户端错误处理、生产构建 | 分别查询和新增、400/断网/取消、Axios 员工编辑删除 |
| V04 | Vue 列表空态/错误态、CRUD API | 新建、编辑、详情、删除、路由刷新、404 |
| V05 | 哈希、注册/登录/me/注销、CSRF、ID 轮换 | Cookie 属性、未登录页面、注销后私有 API 拒绝 |
| V06 | 限流与恢复、禁用、改密撤销、CSRF | 20 分钟闲置超时，登录成功更新会话 ID |
| V07 | 真实表单过滤器、401/403、限流、ADMIN | 刷新 Session 保持身份、退出清除、安全链迁移 |
| V08 | JWT 过期/篡改/畸形/缺声明、刷新过期、轮换/重放/并发 | 内存令牌、刷新恢复、Cookie CSRF 与注销 |
| V09 | 资料越权、改密/重置一次性、过期、邮件失败、限流、全设备退出、禁用恢复、逻辑关联 | 本地邮件投递、账户软注销、管理员界面 |
| V10 | 同 V09 + Flyway 空库与重复迁移、健康、OpenAPI、生产配置拒绝不安全值 | 打包 JAR、Vue 产物、CI、部署和恢复操作检查 |

## 逐版命令

进入每个版本 backend 执行：

```powershell
.\mvnw.cmd -v
.\mvnw.cmd clean verify
```

V03–V10 的 frontend 执行：

```powershell
npm ci
npm test
npm run build
```

系列 scripts/verify.ps1 按相同目录逐版执行并在首个失败时返回非零。需要浏览器的功能还应运行 V10/frontend 的 `npm run test:e2e`；该脚本自行启动测试服务，准备步骤见 [浏览器测试说明](../V10-production-ready/frontend/scripts/README.md)。

## 数据与安全检查

1. 确认版本目录正好 V01–V10，没有第十一个版本或聚合 POM。
2. 每版单独复制到仓库之外可构建，不读取 sibling 源码。
3. 检查 SQL 没有物理外键；关联字段有索引，服务拒绝不存在的用户关联；orphan-check.sql 返回空。
4. 不提交 target、node_modules、dist、.local-mail、.env、application-local.yml、数据库文件、IDE 配置。
5. 注册响应不含哈希，数据库不含明文密码；SQL 注入字符串只作为参数值。
6. Cookie 凭据写请求缺失/伪造 CSRF 返回 403，未认证读取返回 401，USER 访问管理员返回 403。
7. JWT 必要声明、签名和过期均校验；重放刷新不复活，注销后不能刷新；全设备退出拒绝旧身份。
8. 找回响应不泄露账户存在性；重置令牌过期、一次使用、请求频率和投递失败均验证。
9. root README 只新增一个作品入口并更新数量；其他已有作品的工作区改动不混入本次提交。

## 生产检查

目标环境实际完成 HTTPS、SMTP、最小数据库权限、启动/停止/重启、备份恢复、日志脱敏、审计留存与容量测量后才可宣称部署完成。没有目标服务器验证时保留 NOT_VERIFIED。
