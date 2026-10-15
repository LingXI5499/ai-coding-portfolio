# Asterway · 星行纪

个人成长产品的 Vue 前端原型。18 个页面覆盖目标、任务、计划、习惯、专注、复盘、成长模板、知识库、社区、消息和成就。

技术：Vue 3、TypeScript、Vite、Pinia、Vue Router、Zod。

```powershell
npm ci
npm run dev
```

默认访问 http://127.0.0.1:5173/。本集合已把原 asterway-web 内容放到当前目录，无需再进入二级目录。

```powershell
npm test
npm run build
npm run test:e2e
```

浏览器测试默认用 Edge；设置 CI=1 并安装 Playwright Chromium 可改用 Chromium。Hash 路由，dist 可静态托管。

业务数据在当前浏览器本地保存，可在设置中导入、导出和重置。成长伙伴采用本地规则；社区、消息、会员与账号是演示，没有真实后端、开放大模型调用或支付。随项目提供的短视频与插画为演示内容。
