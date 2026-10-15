/* 原有 50 个实验，源码已展开为可阅读的格式。 */
const LEGACY_DEMOS = [
  {
    "cat": "layout",
    "id": "single",
    "title": "单栏阅读",
    "subtitle": "所有正文集中在一条主阅读线上，从上向下阅读。",
    "html": "<header class=\"sitehead\">\n  <strong>◈ atelier.</strong>\n  <nav>\n    <a href=\"#\">探索</a>\n    <a href=\"#\">专题</a>\n    <a href=\"#\">关于</a>\n  </nav>\n  <button class=\"small-btn\">登录</button>\n</header>\n<main class=\"single\">\n  <span class=\"chip\">慢生活</span>\n  <h1>在城市与山野之间，重新发现生活</h1>\n  <p class=\"muted\">2026 年 10 月 · 阅读 8 分钟</p>\n  <div class=\"cover\">✺</div>\n  <p>\n    一篇文章不需要被过多的侧边信息包围。读者只要沿着同一条阅读线，自上而下看标题、图片和段落。\n  </p>\n  <h2>留下一点空间</h2>\n  <p>我们用较舒适的行宽让文字自然换行，长文章也不必始终左右移动视线。</p>\n  <p>有时候，简单的结构反而最容易进入阅读状态。</p>\n</main>",
    "css": ".single {\n  max-width: 690px;\n  padding: 34px 22px 65px;\n  margin: 0 auto;\n  background: white;\n}\n.single h1 {\n  font-size: 2rem;\n  line-height: 1.3;\n  margin: 5px 0;\n}\n.single h2 {\n  font-size: 1.2rem;\n  margin-top: 26px;\n}\n.single > p {\n  line-height: 1.9;\n  color: #5b6b7d;\n}\n.single .cover {\n  height: 175px;\n  margin: 22px 0;\n}",
    "js": "",
    "what": "页面主要只有一块正文区域。不是屏幕上只有一个元素，而是所有内容沿同一个方向排下来。",
    "uses": [
      "文章详情",
      "博客",
      "新闻长文",
      "手机阅读"
    ],
    "observe": [
      "标题、图片、段落沿同一条阅读线排列",
      "宽屏时正文通常不会无限变宽",
      "没有常驻侧栏，注意力集中"
    ],
    "challenge": "试着把 .single 的 max-width 从 690px 改成 1000px，再切换电脑 / 手机比较阅读效果。",
    "tags": [
      "PC",
      "手机",
      "阅读"
    ],
    "doc": "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout",
    "level": "入门",
    "minutes": 10,
    "module": "页面模式"
  },
  {
    "cat": "layout",
    "id": "two",
    "title": "双栏布局",
    "subtitle": "主要内容占大块空间，旁边配一列导航或补充信息。",
    "html": "<header class=\"sitehead\">\n  <strong>◈ atelier.</strong>\n  <nav>\n    <a href=\"#\">探索</a>\n    <a href=\"#\">专题</a>\n    <a href=\"#\">关于</a>\n  </nav>\n  <button class=\"small-btn\">登录</button>\n</header>\n<div class=\"two demo-pad\">\n  <aside class=\"side\">\n    <b>文档分类</b>\n    <a href=\"#\" class=\"selected\">快速开始</a>\n    <a href=\"#\" class=\"\">前端基础</a>\n    <a href=\"#\" class=\"\">产品设计</a>\n    <a href=\"#\" class=\"\">常见问题</a>\n    <a href=\"#\" class=\"\">更新日志</a>\n  </aside>\n  <main class=\"surface article-box\">\n    <span class=\"chip\">知识中心</span>\n    <h1 class=\"feature-title\">欢迎来到帮助中心</h1>\n    <p class=\"muted\">从这里开始了解最常用的功能。</p>\n    <div class=\"cover\">▤</div>\n    <h3>第一步：熟悉页面结构</h3>\n    <div class=\"line\"></div>\n    <div class=\"line mid\"></div>\n    <div class=\"line short\"></div>\n  </main>\n</div>",
    "css": ".two {\n  display: grid;\n  grid-template-columns: 180px minmax(0, 1fr);\n  gap: var(--lab-gap);\n  max-width: 970px;\n  margin: auto;\n}\n.article-box {\n  padding: 24px;\n  min-width: 0;\n}\n.article-box .cover {\n  height: 130px;\n}\n@media (max-width: 650px) {\n  .two {\n    grid-template-columns: 1fr;\n  }\n  .two .side {\n    display: flex;\n    gap: 6px;\n    overflow: auto;\n    align-items: center;\n  }\n  .two .side b {\n    white-space: nowrap;\n  }\n  .two .side a {\n    white-space: nowrap;\n  }\n}",
    "js": "",
    "what": "把内容分成“主角”和“帮手”。可以左边导航、右边正文，也可以左边正文、右边相关推荐。",
    "uses": [
      "帮助中心",
      "知识库",
      "博客+侧栏",
      "管理页面"
    ],
    "observe": [
      "主栏更宽，辅助栏更窄",
      "辅助栏通常放目录、筛选或推荐",
      "切换手机时，两栏可能变上下结构"
    ],
    "challenge": "修改 grid-template-columns 的 180px，观察左侧栏变宽时正文会怎样。",
    "tags": [
      "PC",
      "导航"
    ],
    "doc": "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout",
    "level": "入门",
    "minutes": 10,
    "module": "页面模式"
  },
  {
    "cat": "layout",
    "id": "three",
    "title": "三栏布局",
    "subtitle": "左边章节树、中间正文、右边当前文章目录。",
    "html": "<header class=\"sitehead\">\n  <strong>◈ atelier.</strong>\n  <nav>\n    <a href=\"#\">探索</a>\n    <a href=\"#\">专题</a>\n    <a href=\"#\">关于</a>\n  </nav>\n  <button class=\"small-btn\">登录</button>\n</header>\n<div class=\"three demo-pad\">\n  <nav class=\"side chapter\">\n    <b>课程目录</b>\n    <a href=\"#\" class=\"selected\">01 · 学习路线</a>\n    <a href=\"#\" class=\"\">02 · HTML 基础</a>\n    <a href=\"#\" class=\"\">03 · CSS 基础</a>\n    <a href=\"#\" class=\"\">04 · 页面布局</a>\n    <a href=\"#\" class=\"\">05 · JavaScript</a>\n  </nav>\n  <main class=\"surface reading\">\n    <small class=\"muted\">课程 / HTML 基础</small>\n    <h1 class=\"feature-title\">理解网页的结构</h1>\n    <p>浏览器会根据页面的结构与样式，将内容呈现在屏幕上。</p>\n    <div class=\"cover\">◫</div>\n    <h3>什么是布局？</h3>\n    <p>布局决定内容如何排列，以及不同区域之间怎样分配空间。</p>\n    <div class=\"line\"></div>\n    <div class=\"line mid\"></div>\n  </main>\n  <aside class=\"side toc\">\n    <b>本页目录</b>\n    <a href=\"#\" class=\"selected\">简介</a>\n    <a href=\"#\" class=\"\">页面区域</a>\n    <a href=\"#\" class=\"\">常见布局</a>\n    <a href=\"#\" class=\"\">动手练习</a>\n  </aside>\n</div>",
    "css": ".three {\n  display: grid;\n  grid-template-columns: 160px minmax(0, 1fr) 135px;\n  gap: var(--lab-gap);\n}\n.reading {\n  padding: 20px;\n  min-width: 0;\n}\n.reading p {\n  font-size: 0.85rem;\n  color: #6d7f90;\n}\n.reading .cover {\n  height: 110px;\n}\n@media (max-width: 840px) {\n  .three {\n    grid-template-columns: 160px minmax(0, 1fr);\n  }\n  .toc {\n    display: none;\n  }\n}\n@media (max-width: 520px) {\n  .three {\n    grid-template-columns: minmax(0, 1fr);\n  }\n  .chapter {\n    display: none;\n  }\n}",
    "js": "",
    "what": "三块同时可见的区域，各自分工。通常是“左侧找章节、中间读正文、右侧在本文内跳转”。",
    "uses": [
      "技术文档",
      "教程网站",
      "大型知识库"
    ],
    "observe": [
      "最重要的正文占中间最大的空间",
      "左右侧栏承担不同层级的导航",
      "窄屏先收起右边，再收起左边"
    ],
    "challenge": "切换电脑、平板、手机预览，逐个观察左右侧栏是否仍显示。",
    "tags": [
      "PC",
      "响应式",
      "文档"
    ],
    "doc": "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout",
    "level": "入门",
    "minutes": 10,
    "module": "页面模式"
  },
  {
    "cat": "layout",
    "id": "grid",
    "title": "规则网格",
    "subtitle": "多个内容块按统一行列整齐摆放，方便快速比较。",
    "html": "<header class=\"sitehead\">\n  <strong>◈ atelier.</strong>\n  <nav>\n    <a href=\"#\">探索</a>\n    <a href=\"#\">专题</a>\n    <a href=\"#\">关于</a>\n  </nav>\n  <button class=\"small-btn\">登录</button>\n</header>\n<main class=\"demo-pad\">\n  <div class=\"shop-title\">\n    <div>\n      <h2>今日精选</h2>\n      <p class=\"muted\">发现一些值得喜欢的小物件</p>\n    </div>\n    <button class=\"small-btn\">筛选商品</button>\n  </div>\n  <div class=\"card-grid\">\n    <article class=\"item\">\n      <div class=\"picture shade1\">✦</div>\n      <div class=\"itembody\">\n        <b>设计灵感</b>\n        <p>用清晰、简单的方式呈现内容</p>\n      </div>\n    </article>\n    <article class=\"item\">\n      <div class=\"picture shade2\">◇</div>\n      <div class=\"itembody\">\n        <b>发现新世界</b>\n        <p>用清晰、简单的方式呈现内容</p>\n      </div>\n    </article>\n    <article class=\"item\">\n      <div class=\"picture shade3\">▧</div>\n      <div class=\"itembody\">\n        <b>探索未知</b>\n        <p>用清晰、简单的方式呈现内容</p>\n      </div>\n    </article>\n    <article class=\"item\">\n      <div class=\"picture shade4\">◉</div>\n      <div class=\"itembody\">\n        <b>创意作品</b>\n        <p>用清晰、简单的方式呈现内容</p>\n      </div>\n    </article>\n    <article class=\"item\">\n      <div class=\"picture shade5\">❋</div>\n      <div class=\"itembody\">\n        <b>精选推荐</b>\n        <p>用清晰、简单的方式呈现内容</p>\n      </div>\n    </article>\n    <article class=\"item\">\n      <div class=\"picture shade6\">△</div>\n      <div class=\"itembody\">\n        <b>每周阅读</b>\n        <p>用清晰、简单的方式呈现内容</p>\n      </div>\n    </article>\n    <article class=\"item\">\n      <div class=\"picture shade1\">✦</div>\n      <div class=\"itembody\">\n        <b>设计灵感</b>\n        <p>用清晰、简单的方式呈现内容</p>\n      </div>\n    </article>\n    <article class=\"item\">\n      <div class=\"picture shade2\">◇</div>\n      <div class=\"itembody\">\n        <b>发现新世界</b>\n        <p>用清晰、简单的方式呈现内容</p>\n      </div>\n    </article>\n    <article class=\"item\">\n      <div class=\"picture shade3\">▧</div>\n      <div class=\"itembody\">\n        <b>探索未知</b>\n        <p>用清晰、简单的方式呈现内容</p>\n      </div>\n    </article>\n  </div>\n</main>",
    "css": ".shop-title {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 15px;\n  gap: 12px;\n}\n.shop-title h2 {\n  margin: 0;\n  font-size: 1.45rem;\n}\n.shop-title p {\n  margin: 4px 0 0;\n}\n.picture {\n  height: 110px;\n}\n.item:hover {\n  box-shadow: 0 8px 24px #30405a12;\n  transform: translateY(-2px);\n  transition: 0.15s;\n}",
    "js": "",
    "what": "每个卡片占据相对规则的格子，行和列比较整齐，适合展示同一类对象。",
    "uses": [
      "商品列表",
      "作品集",
      "应用商店",
      "图片目录"
    ],
    "observe": [
      "卡片宽度通常一致",
      "用户可以横向比较多个商品",
      "手机空间不足时自动减少列数"
    ],
    "challenge": "把 card-grid 的列数从 repeat(3,...) 改成 repeat(4,...)，看看何时开始拥挤。",
    "tags": [
      "PC",
      "手机",
      "商品"
    ],
    "doc": "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout",
    "level": "入门",
    "minutes": 10,
    "module": "页面模式"
  },
  {
    "cat": "layout",
    "id": "masonry",
    "title": "瀑布流布局",
    "subtitle": "列宽接近，但卡片高低不一，像错落的照片墙。",
    "html": "<header class=\"sitehead\">\n  <strong>◈ atelier.</strong>\n  <nav>\n    <a href=\"#\">探索</a>\n    <a href=\"#\">专题</a>\n    <a href=\"#\">关于</a>\n  </nav>\n  <button class=\"small-btn\">登录</button>\n</header>\n<main class=\"demo-pad\">\n  <h2>灵感瀑布</h2>\n  <p class=\"muted\">发现风景、建筑与生活灵感</p>\n  <div class=\"masonry\">\n    <article class=\"pin\">\n      <div class=\"pin-img shade1\" style=\"height: 170px\">☼</div>\n      <b>山谷晨光</b>\n      <small>灵感收藏 · 1k</small>\n    </article>\n    <article class=\"pin\">\n      <div class=\"pin-img shade2\" style=\"height: 100px\">◈</div>\n      <b>室内一角</b>\n      <small>灵感收藏 · 2k</small>\n    </article>\n    <article class=\"pin\">\n      <div class=\"pin-img shade3\" style=\"height: 145px\">☁</div>\n      <b>海边旅行</b>\n      <small>灵感收藏 · 3k</small>\n    </article>\n    <article class=\"pin\">\n      <div class=\"pin-img shade4\" style=\"height: 205px\">✿</div>\n      <b>花园生活</b>\n      <small>灵感收藏 · 4k</small>\n    </article>\n    <article class=\"pin\">\n      <div class=\"pin-img shade5\" style=\"height: 124px\">▦</div>\n      <b>城市建筑</b>\n      <small>灵感收藏 · 5k</small>\n    </article>\n    <article class=\"pin\">\n      <div class=\"pin-img shade6\" style=\"height: 186px\">☕</div>\n      <b>下午茶</b>\n      <small>灵感收藏 · 6k</small>\n    </article>\n    <article class=\"pin\">\n      <div class=\"pin-img shade1\" style=\"height: 130px\">◉</div>\n      <b>摄影笔记</b>\n      <small>灵感收藏 · 7k</small>\n    </article>\n    <article class=\"pin\">\n      <div class=\"pin-img shade2\" style=\"height: 168px\">⛺</div>\n      <b>清晨露营</b>\n      <small>灵感收藏 · 8k</small>\n    </article>\n    <article class=\"pin\">\n      <div class=\"pin-img shade3\" style=\"height: 112px\">☀</div>\n      <b>日落时分</b>\n      <small>灵感收藏 · 9k</small>\n    </article>\n    <article class=\"pin\">\n      <div class=\"pin-img shade4\" style=\"height: 195px\">◌</div>\n      <b>纸张纹理</b>\n      <small>灵感收藏 · 10k</small>\n    </article>\n  </div>\n</main>",
    "css": ".masonry {\n  columns: 4 125px;\n  column-gap: var(--lab-gap);\n}\n.pin {\n  break-inside: avoid;\n  margin-bottom: var(--lab-gap);\n  border: 1px solid #ebeff2;\n  background: white;\n  border-radius: var(--lab-radius);\n  overflow: hidden;\n}\n.pin-img {\n  display: grid;\n  place-items: center;\n  font-size: 2.6rem;\n  color: #ffffffc9;\n}\n.pin b {\n  display: block;\n  font-size: 0.8rem;\n  padding: 7px 9px 0;\n}\n.pin small {\n  display: block;\n  color: #8c9ba7;\n  font-size: 0.65rem;\n  padding: 3px 9px 10px;\n}\n@media (max-width: 450px) {\n  .masonry {\n    columns: 2;\n  }\n}",
    "js": "",
    "what": "与规则网格不同，这种布局允许图片高度不一样，并尽量利用列内剩余空间。",
    "uses": [
      "Pinterest 风格图片墙",
      "摄影作品",
      "装修灵感",
      "旅行图集"
    ],
    "observe": [
      "高卡片旁边可以出现多张矮卡片",
      "空间利用率高，但阅读顺序可能不直观",
      "图片内容是主角，说明通常很短"
    ],
    "challenge": "把 .masonry 的 columns:4 125px 改成 columns:2 125px，观察排列方式。",
    "tags": [
      "PC",
      "手机",
      "图片"
    ],
    "doc": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_multicol_layout",
    "level": "入门",
    "minutes": 10,
    "module": "页面模式"
  },
  {
    "cat": "layout",
    "id": "feed",
    "title": "信息流布局",
    "subtitle": "一条接一条的动态内容，适合持续浏览。",
    "html": "<header class=\"sitehead\">\n  <strong>◈ atelier.</strong>\n  <nav>\n    <a href=\"#\">探索</a>\n    <a href=\"#\">专题</a>\n    <a href=\"#\">关于</a>\n  </nav>\n  <button class=\"small-btn\">登录</button>\n</header>\n<div class=\"feed-wrap demo-pad\">\n  <main>\n    <div class=\"feed-filter\">发现　　关注　　热门</div>\n    <article class=\"post\">\n      <div class=\"post-author\">\n        <span class=\"avatar shade1\">林</span>\n        <div>\n          <b>城市观察</b>\n          <small>1 小时前 · 公开</small>\n        </div>\n      </div>\n      <p>分享一下今天在咖啡馆看到的有趣设计。</p>\n      <div class=\"post-media shade1\">◈　✦　◌</div>\n      <div class=\"post-actions\">♡ 喜欢　 ◯ 评论　 ↗ 分享</div>\n    </article>\n    <article class=\"post\">\n      <div class=\"post-author\">\n        <span class=\"avatar shade2\">木</span>\n        <div>\n          <b>旅行笔记</b>\n          <small>2 小时前 · 公开</small>\n        </div>\n      </div>\n      <p>周末徒步，沿途风景太舒服了！</p>\n      <div class=\"post-media shade2\">◈　✦　◌</div>\n      <div class=\"post-actions\">♡ 喜欢　 ◯ 评论　 ↗ 分享</div>\n    </article>\n    <article class=\"post\">\n      <div class=\"post-author\">\n        <span class=\"avatar shade3\">小</span>\n        <div>\n          <b>日常记录</b>\n          <small>3 小时前 · 公开</small>\n        </div>\n      </div>\n      <p>一些关于阅读和成长的小想法。</p>\n      <div class=\"post-media shade3\">◈　✦　◌</div>\n      <div class=\"post-actions\">♡ 喜欢　 ◯ 评论　 ↗ 分享</div>\n    </article>\n    <article class=\"post\">\n      <div class=\"post-author\">\n        <span class=\"avatar shade4\">星</span>\n        <div>\n          <b>产品设计</b>\n          <small>4 小时前 · 公开</small>\n        </div>\n      </div>\n      <p>把复杂问题拆开，总能发现新的答案。</p>\n      <div class=\"post-media shade4\">◈　✦　◌</div>\n      <div class=\"post-actions\">♡ 喜欢　 ◯ 评论　 ↗ 分享</div>\n    </article>\n  </main>\n  <aside class=\"side feed-side\">\n    <b>正在讨论</b>\n    <a href=\"#\" class=\"selected\">#城市生活</a>\n    <a href=\"#\" class=\"\">#摄影爱好者</a>\n    <a href=\"#\" class=\"\">#前端设计</a>\n    <a href=\"#\" class=\"\">#周末旅行</a>\n  </aside>\n</div>",
    "css": ".feed-wrap {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) 185px;\n  gap: var(--lab-gap);\n  max-width: 920px;\n  margin: auto;\n}\n.feed-filter {\n  padding: 13px;\n  background: white;\n  border-radius: 10px;\n  margin-bottom: 12px;\n  font-size: 0.86rem;\n  font-weight: 700;\n}\n.post {\n  background: #fff;\n  border: 1px solid #e8edf0;\n  border-radius: var(--lab-radius);\n  padding: 15px;\n  margin-bottom: var(--lab-gap);\n}\n.post-author {\n  display: flex;\n  gap: 9px;\n  align-items: center;\n}\n.avatar {\n  border-radius: 50%;\n  display: grid;\n  place-items: center;\n  width: 33px;\n  height: 33px;\n  font-size: 0.75rem;\n}\n.post-author b {\n  display: block;\n  font-size: 0.82rem;\n}\n.post-author small {\n  display: block;\n  color: #9aa8b3;\n  font-size: 0.68rem;\n}\n.post p {\n  font-size: 0.83rem;\n}\n.post-media {\n  height: 95px;\n  border-radius: 8px;\n  display: grid;\n  place-items: center;\n  color: #ffffffbd;\n}\n.post-actions {\n  padding-top: 10px;\n  color: #90a0ae;\n  font-size: 0.7rem;\n}\n@media (max-width: 620px) {\n  .feed-wrap {\n    grid-template-columns: 1fr;\n  }\n  .feed-side {\n    display: none;\n  }\n}",
    "js": "",
    "what": "按某种顺序连续展示动态、新闻或帖子，一般每条都可以独立点赞、评论或打开详情。",
    "uses": [
      "微博风格动态",
      "社区首页",
      "新闻资讯",
      "评论流"
    ],
    "observe": [
      "内容常按时间或推荐顺序排列",
      "单条消息是相对完整的内容单元",
      "主信息流旁边可以附带热门话题"
    ],
    "challenge": "把 .feed-wrap 改成一栏，比较没有右侧热门话题时的阅读感受。",
    "tags": [
      "PC",
      "手机",
      "社交"
    ],
    "doc": "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout",
    "level": "入门",
    "minutes": 10,
    "module": "页面模式"
  },
  {
    "cat": "layout",
    "id": "dashboard",
    "title": "仪表盘布局",
    "subtitle": "数字、图表和状态模块组合在同一工作界面。",
    "html": "<div class=\"dash\">\n  <aside class=\"dash-sidebar\">\n    <b>◈ Orbit 数据</b>\n    <a href=\"#\" class=\"selected\">◫ 总览</a>\n    <a href=\"#\" class=\"\">▥ 用户</a>\n    <a href=\"#\" class=\"\">◷ 流量</a>\n    <a href=\"#\" class=\"\">▣ 报表</a>\n    <a href=\"#\" class=\"\">⚙ 设置</a>\n  </aside>\n  <main class=\"dash-main\">\n    <div class=\"dash-top\">\n      <h2>业务总览</h2>\n      <span class=\"muted\">最近 30 天　▾</span>\n    </div>\n    <div class=\"kpis\">\n      <div class=\"kpi\">\n        <small>总访问量</small>\n        <b>24,892</b>\n        <span>↗ 较上期上升</span>\n      </div>\n      <div class=\"kpi\">\n        <small>活跃用户</small>\n        <b>8,132</b>\n        <span>↗ 较上期上升</span>\n      </div>\n      <div class=\"kpi\">\n        <small>转化次数</small>\n        <b>1,046</b>\n        <span>↗ 较上期上升</span>\n      </div>\n      <div class=\"kpi\">\n        <small>增长率</small>\n        <b>+12.8%</b>\n        <span>↗ 较上期上升</span>\n      </div>\n    </div>\n    <div class=\"charts\">\n      <div class=\"chart surface\">\n        <h4>访问趋势</h4>\n        <div class=\"bars\">\n          <i style=\"height: 38%\"></i>\n          <i style=\"height: 55%\"></i>\n          <i style=\"height: 47%\"></i>\n          <i style=\"height: 72%\"></i>\n          <i style=\"height: 60%\"></i>\n          <i style=\"height: 86%\"></i>\n          <i style=\"height: 65%\"></i>\n          <i style=\"height: 80%\"></i>\n          <i style=\"height: 97%\"></i>\n          <i style=\"height: 71%\"></i>\n          <i style=\"height: 88%\"></i>\n          <i style=\"height: 100%\"></i>\n        </div>\n        <small>周一　　　　　　　　　　　　　　　周日</small>\n      </div>\n      <div class=\"chart surface\">\n        <h4>访客来源</h4>\n        <div class=\"donut\"></div>\n        <p class=\"muted\" style=\"text-align: center\">直接访问 · 搜索 · 推荐</p>\n      </div>\n    </div>\n  </main>\n</div>",
    "css": ".dash {\n  display: grid;\n  grid-template-columns: 170px minmax(0, 1fr);\n  min-height: 390px;\n}\n.dash-sidebar {\n  padding: 20px 10px;\n  background: #182f3c;\n  color: #edf6f9;\n}\n.dash-sidebar > b {\n  display: block;\n  margin: 0 10px 24px;\n  font-size: 0.9rem;\n}\n.dash-sidebar a {\n  display: block;\n  padding: 10px;\n  color: #bad0d3;\n  font-size: 0.78rem;\n  border-radius: 7px;\n}\n.dash-sidebar a.selected {\n  background: #365261;\n  color: white;\n}\n.dash-main {\n  padding: 22px;\n  min-width: 0;\n}\n.dash-top {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 8px;\n}\n.dash-top h2 {\n  margin: 0;\n}\n.kpis {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: var(--lab-gap);\n  margin-top: 17px;\n}\n.kpi {\n  background: #fff;\n  padding: 13px;\n  border: 1px solid #e6ecf1;\n  border-radius: var(--lab-radius);\n}\n.kpi small,\n.kpi span {\n  display: block;\n  color: #8494a2;\n  font-size: 0.66rem;\n}\n.kpi b {\n  display: block;\n  font-size: 1.3rem;\n  margin: 7px 0;\n}\n.kpi span {\n  color: #159b74;\n}\n.charts {\n  display: grid;\n  grid-template-columns: 1.55fr 1fr;\n  gap: var(--lab-gap);\n  margin-top: var(--lab-gap);\n}\n.chart {\n  padding: 15px;\n}\n.chart h4 {\n  margin: 0 0 20px;\n}\n.bars {\n  height: 125px;\n  display: flex;\n  align-items: end;\n  gap: 6px;\n  border-bottom: 1px solid #dfebf3;\n}\n.bars i {\n  flex: 1;\n  background: linear-gradient(#70a6e9, #c5dafa);\n  border-radius: 3px 3px 0 0;\n}\n.chart small {\n  font-size: 0.58rem;\n  color: #a2b0bc;\n}\n.donut {\n  margin: auto;\n  width: 120px;\n  height: 120px;\n  border-radius: 50%;\n  background: conic-gradient(#2563eb 0 45%, #65cab5 45% 78%, #f4c66a 78% 100%);\n  position: relative;\n}\n.donut:after {\n  content: '';\n  position: absolute;\n  inset: 26px;\n  background: white;\n  border-radius: 50%;\n}\n@media (max-width: 700px) {\n  .dash {\n    grid-template-columns: 1fr;\n  }\n  .dash-sidebar {\n    display: none;\n  }\n  .kpis {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .charts {\n    grid-template-columns: 1fr;\n  }\n}",
    "js": "",
    "what": "不是单一图表，而是由“关键数字、趋势、图形、筛选”共同构成的综合信息面板。",
    "uses": [
      "运营后台",
      "数据分析",
      "项目监控",
      "财务看板"
    ],
    "observe": [
      "顶部指标负责快速概览",
      "图表用来观察趋势和结构",
      "后台导航和数据面板有清晰边界"
    ],
    "challenge": "将 KPI 的四列改为两列，看看信息密度如何变化。",
    "tags": [
      "PC",
      "后台",
      "数据"
    ],
    "doc": "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout",
    "level": "入门",
    "minutes": 10,
    "module": "页面模式"
  },
  {
    "cat": "layout",
    "id": "split",
    "title": "左右分屏工作区",
    "subtitle": "同一个任务需要同时对照两个区域：如编辑与预览。",
    "html": "<header class=\"edit-top\">\n  <b>◈ Markdown 工作台</b>\n  <span>文档：产品介绍</span>\n  <button class=\"small-btn\" id=\"syncBtn\">更新预览</button>\n</header>\n<div class=\"split\">\n  <section class=\"workpane\">\n    <div class=\"pane-head\">✎ 编辑区</div>\n    <textarea id=\"draft\">\n# 一次清晰的写作\n\n写下你的想法。\n\n- 左边编辑\n- 右边查看最终效果</textarea>\n  </section>\n  <section class=\"workpane\">\n    <div class=\"pane-head\">◩ 预览区</div>\n    <div class=\"render\" id=\"result\">\n      <h2>一次清晰的写作</h2>\n      <p>写下你的想法。</p>\n      <p>\n        • 左边编辑\n        <br />\n        • 右边查看最终效果\n      </p>\n    </div>\n  </section>\n</div>",
    "css": ".edit-top {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 8px;\n  background: white;\n  padding: 14px 18px;\n  border-bottom: 1px solid #e8edf1;\n}\n.edit-top span {\n  font-size: 0.72rem;\n  color: #788999;\n}\n.split {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: var(--lab-gap);\n  padding: 15px;\n  min-height: 330px;\n}\n.workpane {\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n  border: 1px solid #e6ecf1;\n  border-radius: var(--lab-radius);\n  overflow: hidden;\n  background: white;\n}\n.pane-head {\n  background: #f7f9fb;\n  border-bottom: 1px solid #e8edf1;\n  padding: 11px;\n  font-size: 0.76rem;\n}\n.workpane textarea {\n  resize: none;\n  min-height: 270px;\n  border: 0;\n  padding: 16px;\n  outline: none;\n  flex: 1;\n  font-size: 0.85rem;\n  line-height: 1.8;\n}\n.render {\n  padding: 16px;\n  line-height: 1.8;\n  font-size: 0.85rem;\n}\n@media (max-width: 500px) {\n  .split {\n    grid-template-columns: 1fr;\n  }\n  .workpane textarea {\n    min-height: 110px;\n  }\n}",
    "js": "document.getElementById('syncBtn').addEventListener('click', () => {\n  const text = document.getElementById('draft').value;\n  const dest = document.getElementById('result');\n  dest.textContent = '';\n  text\n    .split(/\\n+/)\n    .filter(Boolean)\n    .forEach((line) => {\n      const el = document.createElement(line.startsWith('# ') ? 'h2' : 'p');\n      el.textContent = line.replace(/^# /, '').replace(/^- /, '• ');\n      dest.append(el);\n    });\n});",
    "what": "屏幕分成两个相互关联的工作区，方便一边编辑、一边检查结果。",
    "uses": [
      "Markdown 编辑器",
      "代码工具",
      "邮件写作",
      "设计平台"
    ],
    "observe": [
      "两个区域通常同等重要",
      "用户在同一任务中反复对照左右两边",
      "手机空间不足时会切换上下或标签页"
    ],
    "challenge": "试着编辑左侧文本并点击「更新预览」；再将左右 1fr 1fr 改成 2fr 1fr。",
    "tags": [
      "PC",
      "编辑器",
      "可操作"
    ],
    "doc": "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout",
    "level": "入门",
    "minutes": 15,
    "module": "页面模式"
  },
  {
    "cat": "layout",
    "id": "immersive",
    "title": "全屏沉浸布局",
    "subtitle": "主体占据几乎整个可用画面，控制工具退居边缘。",
    "html": "<div class=\"immersive\">\n  <div class=\"world\">\n    ✦\n    <span>世界就在眼前</span>\n    <small>把注意力交给眼前的内容</small>\n  </div>\n  <header class=\"immersive-head\">\n    <b>◈ Horizon</b>\n    <nav>目的地　灵感　探索</nav>\n    <button class=\"glass-btn\">开始探索 ↗</button>\n  </header>\n  <div class=\"immersive-bottom\">\n    <span>01 / 04　　◉ ━━━ ○ ○</span>\n    <span>向下滚动 ↓</span>\n  </div>\n</div>",
    "css": ".immersive {\n  position: relative;\n  height: 390px;\n  color: #fff;\n  overflow: hidden;\n  background: radial-gradient(\n    circle at 40% 28%,\n    #9bbbc7 0,\n    #657e91 25%,\n    #263f5d 62%,\n    #12273c 100%\n  );\n}\n.immersive:before {\n  content: '';\n  position: absolute;\n  bottom: -90px;\n  left: -10%;\n  width: 120%;\n  height: 200px;\n  background: #0f3547;\n  transform: rotate(-8deg);\n  border-radius: 50%;\n}\n.immersive-head {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  padding: 20px 26px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 10px;\n  font-size: 0.8rem;\n}\n.immersive-head nav {\n  opacity: 0.75;\n}\n.glass-btn {\n  color: white;\n  border: 1px solid #ffffff70;\n  background: #ffffff24;\n  padding: 9px 13px;\n  border-radius: 30px;\n}\n.world {\n  position: absolute;\n  inset: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  font-size: 6rem;\n  color: #fff8;\n}\n.world span {\n  font-size: 2rem;\n  font-weight: 760;\n  letter-spacing: 0.1em;\n  color: white;\n}\n.world small {\n  font-size: 0.85rem;\n  color: #ffffffb8;\n  margin-top: 12px;\n}\n.immersive-bottom {\n  position: absolute;\n  bottom: 20px;\n  left: 26px;\n  right: 26px;\n  display: flex;\n  justify-content: space-between;\n  font-size: 0.7rem;\n}\n@media (max-width: 460px) {\n  .world span {\n    font-size: 1.4rem;\n  }\n  .immersive-head nav {\n    display: none;\n  }\n}",
    "js": "",
    "what": "用大图、地图、画布、视频或 3D 场景占据视觉中心，让周围控制保持简洁。",
    "uses": [
      "地图",
      "展示型首页",
      "在线视频",
      "在线演示"
    ],
    "observe": [
      "内容不像文章那样局限在窄窄的正文列",
      "控制入口位于顶部或边缘",
      "不适合高密度数据录入页面"
    ],
    "challenge": "修改 immersive 高度与背景渐变，观察主画面对注意力的影响。",
    "tags": [
      "PC",
      "手机",
      "展示"
    ],
    "doc": "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout",
    "level": "入门",
    "minutes": 10,
    "module": "页面模式"
  },
  {
    "cat": "layout",
    "id": "landing",
    "title": "分区式展示页",
    "subtitle": "按照主题分成多个横向板块，用户滚动时依次了解产品。",
    "html": "<header class=\"sitehead\">\n  <strong>◈ atelier.</strong>\n  <nav>\n    <a href=\"#\">探索</a>\n    <a href=\"#\">专题</a>\n    <a href=\"#\">关于</a>\n  </nav>\n  <button class=\"small-btn\">登录</button>\n</header>\n<section class=\"hero-landing\">\n  <span>NEW PRODUCT · 2026</span>\n  <h1>\n    给好想法一个\n    <br />\n    更清晰的开始\n  </h1>\n  <p>记录、整理、分享，让创意从此生长。</p>\n  <button class=\"small-btn\">立即体验　→</button>\n</section>\n<section class=\"section-band\">\n  <div>\n    <h2>让每一个想法都有去处</h2>\n    <p>轻松捕捉灵感，保留创造的每一步。</p>\n  </div>\n  <div class=\"band-art\">✳</div>\n</section>\n<section class=\"section-band second\">\n  <div class=\"band-art\">◫</div>\n  <div>\n    <h2>专注真正重要的内容</h2>\n    <p>从零开始建立自己的工作空间。</p>\n  </div>\n</section>",
    "css": ".hero-landing {\n  padding: 58px 22px;\n  text-align: center;\n  background: linear-gradient(135deg, #f3faf4, #e2eefb);\n}\n.hero-landing span {\n  font-size: 0.68rem;\n  color: var(--lab-accent);\n  font-weight: 800;\n  letter-spacing: 2px;\n}\n.hero-landing h1 {\n  font-size: 2.5rem;\n  line-height: 1.25;\n  margin: 16px 0;\n}\n.hero-landing p {\n  color: #8190a1;\n}\n.section-band {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  align-items: center;\n  gap: 25px;\n  padding: 30px 9%;\n  background: white;\n}\n.section-band p {\n  color: #7f90a0;\n}\n.section-band h2 {\n  font-size: 1.25rem;\n}\n.section-band.second {\n  background: #f5f9ff;\n}\n.band-art {\n  height: 130px;\n  display: grid;\n  place-items: center;\n  background: linear-gradient(120deg, #d0eadd, #a8cceb);\n  border-radius: var(--lab-radius);\n  font-size: 4rem;\n  color: #4f91ae;\n}\n@media (max-width: 520px) {\n  .section-band {\n    grid-template-columns: 1fr;\n  }\n  .hero-landing h1 {\n    font-size: 1.8rem;\n  }\n}",
    "js": "",
    "what": "整页不是固定几栏，而是由一个接一个的主题区块组成，每块承载不同卖点。",
    "uses": [
      "企业官网",
      "产品首页",
      "活动专题",
      "品牌介绍"
    ],
    "observe": [
      "首屏往往最醒目",
      "下面区块可以图文交错",
      "移动端通常转为上下排列"
    ],
    "challenge": "将 .section-band 的两列改成 1fr，看看品牌介绍页如何变成垂直故事线。",
    "tags": [
      "PC",
      "手机",
      "官网"
    ],
    "doc": "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout",
    "level": "入门",
    "minutes": 10,
    "module": "页面模式"
  },
  {
    "cat": "layout",
    "id": "table",
    "title": "表格管理布局",
    "subtitle": "大量记录放在统一列中，便于比较、筛选和批量处理。",
    "html": "<div class=\"table-shell\">\n  <div class=\"table-head\">\n    <div>\n      <h2>订单管理</h2>\n      <p class=\"muted\">管理所有已创建的订单记录</p>\n    </div>\n    <button class=\"small-btn\">+ 新建订单</button>\n  </div>\n  <div class=\"table-tools\">\n    <input type=\"search\" placeholder=\"⌕ 搜索订单号 / 客户\" />\n    <button>状态 ▾</button>\n    <button>日期 ▾</button>\n  </div>\n  <div class=\"table-scroll\">\n    <table>\n      <thead>\n        <tr>\n          <th>订单号</th>\n          <th>客户</th>\n          <th>金额</th>\n          <th>状态</th>\n          <th>日期</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td><b>#10028</b></td>\n          <td>李同学</td>\n          <td>¥299</td>\n          <td><span class=\"status\">已完成</span></td>\n          <td>10-11</td>\n        </tr>\n        <tr>\n          <td><b>#10027</b></td>\n          <td>王女士</td>\n          <td>¥580</td>\n          <td><span class=\"status pending\">待处理</span></td>\n          <td>10-10</td>\n        </tr>\n        <tr>\n          <td><b>#10026</b></td>\n          <td>小明</td>\n          <td>¥125</td>\n          <td><span class=\"status\">已完成</span></td>\n          <td>10-9</td>\n        </tr>\n        <tr>\n          <td><b>#10025</b></td>\n          <td>刘先生</td>\n          <td>¥1099</td>\n          <td><span class=\"status\">已完成</span></td>\n          <td>10-8</td>\n        </tr>\n        <tr>\n          <td><b>#10024</b></td>\n          <td>林小姐</td>\n          <td>¥460</td>\n          <td><span class=\"status pending\">待处理</span></td>\n          <td>10-7</td>\n        </tr>\n        <tr>\n          <td><b>#10023</b></td>\n          <td>陈女士</td>\n          <td>¥219</td>\n          <td><span class=\"status\">已完成</span></td>\n          <td>10-6</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n  <p class=\"muted\">共 6 条示例记录 · 第 1 页</p>\n</div>",
    "css": ".table-shell {\n  padding: 24px;\n}\n.table-head {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.table-head h2 {\n  margin: 0;\n}\n.table-tools {\n  display: flex;\n  gap: 8px;\n  margin: 17px 0;\n}\n.table-tools input {\n  flex: 1;\n  min-width: 0;\n  background: white;\n}\n.table-tools input,\n.table-tools button {\n  padding: 10px;\n  border: 1px solid #e2e8f0;\n  border-radius: 7px;\n  font-size: 0.75rem;\n}\n.table-scroll {\n  overflow: auto;\n  background: white;\n  border-radius: var(--lab-radius);\n  border: 1px solid #e8edf1;\n}\ntable {\n  width: 100%;\n  border-collapse: collapse;\n  min-width: 530px;\n}\nth,\ntd {\n  text-align: left;\n  padding: 13px;\n  border-bottom: 1px solid #edf1f4;\n  font-size: 0.73rem;\n}\nth {\n  background: #f9fafc;\n  color: #83919b;\n  font-weight: 500;\n}\ntd {\n  color: #556575;\n}\n.status {\n  background: #e2f7ee;\n  color: #12805c;\n  padding: 4px 7px;\n  border-radius: 4px;\n}\n.status.pending {\n  background: #fff3db;\n  color: #af7815;\n}",
    "js": "",
    "what": "每一条数据对应一行，每个字段对应一列；最适合比较记录、筛选状态和批量操作。",
    "uses": [
      "订单后台",
      "用户管理",
      "库存管理",
      "报表明细"
    ],
    "observe": [
      "所有记录使用相同字段顺序",
      "工具栏位于表格上方",
      "手机上宽表格可能需要滚动或专门的详情页"
    ],
    "challenge": "给表格增加一列“备注”，切换手机视图观察横向滚动。",
    "tags": [
      "PC",
      "后台",
      "数据"
    ],
    "doc": "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout",
    "level": "入门",
    "minutes": 10,
    "module": "页面模式"
  },
  {
    "cat": "layout",
    "id": "kanban",
    "title": "任务看板布局",
    "subtitle": "按“待办、进行中、已完成”等状态分列展示任务。",
    "html": "<div class=\"board\">\n  <div class=\"board-header\">\n    <h2>项目协作看板</h2>\n    <button class=\"small-btn\">+ 新建任务</button>\n  </div>\n  <div class=\"board-columns\">\n    <section class=\"lane\">\n      <h3>\n        <span class=\"dot d0\"></span>\n        待处理\n        <small>3</small>\n      </h3>\n      <div class=\"task\">\n        <span class=\"chip\">设计</span>\n        <b>整理需求说明</b>\n        <small>◷ 10 月 12 日</small>\n      </div>\n      <div class=\"task\">\n        <span class=\"chip\">开发</span>\n        <b>收集用户反馈</b>\n        <small>◷ 10 月 13 日</small>\n      </div>\n      <div class=\"task\">\n        <span class=\"chip\">文档</span>\n        <b>明确视觉方向</b>\n        <small>◷ 10 月 14 日</small>\n      </div>\n      <div class=\"add-task\">+ 添加卡片</div>\n    </section>\n    <section class=\"lane\">\n      <h3>\n        <span class=\"dot d1\"></span>\n        进行中\n        <small>2</small>\n      </h3>\n      <div class=\"task\">\n        <span class=\"chip\">设计</span>\n        <b>完成首页布局</b>\n        <small>◷ 10 月 13 日</small>\n      </div>\n      <div class=\"task\">\n        <span class=\"chip\">开发</span>\n        <b>优化导航栏</b>\n        <small>◷ 10 月 14 日</small>\n      </div>\n      <div class=\"add-task\">+ 添加卡片</div>\n    </section>\n    <section class=\"lane\">\n      <h3>\n        <span class=\"dot d2\"></span>\n        待审核\n        <small>2</small>\n      </h3>\n      <div class=\"task\">\n        <span class=\"chip\">设计</span>\n        <b>移动端适配</b>\n        <small>◷ 10 月 14 日</small>\n      </div>\n      <div class=\"task\">\n        <span class=\"chip\">开发</span>\n        <b>编写交互说明</b>\n        <small>◷ 10 月 15 日</small>\n      </div>\n      <div class=\"add-task\">+ 添加卡片</div>\n    </section>\n    <section class=\"lane\">\n      <h3>\n        <span class=\"dot d3\"></span>\n        已完成\n        <small>1</small>\n      </h3>\n      <div class=\"task\">\n        <span class=\"chip\">设计</span>\n        <b>创建项目仓库</b>\n        <small>◷ 10 月 15 日</small>\n      </div>\n      <div class=\"add-task\">+ 添加卡片</div>\n    </section>\n  </div>\n</div>",
    "css": ".board {\n  padding: 17px;\n  min-height: 370px;\n}\n.board-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 16px;\n}\n.board-header h2 {\n  margin: 0;\n}\n.board-columns {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(135px, 1fr));\n  gap: var(--lab-gap);\n  overflow: auto;\n}\n.lane {\n  background: #edf2f6;\n  border-radius: var(--lab-radius);\n  padding: 11px;\n}\n.lane h3 {\n  font-size: 0.82rem;\n  display: flex;\n  gap: 7px;\n  align-items: center;\n  margin: 0 0 12px;\n}\n.lane h3 small {\n  font-size: 0.7rem;\n  color: #92a2b0;\n}\n.dot {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: #94a3b8;\n}\n.dot.d1 {\n  background: #42a1e1;\n}\n.dot.d2 {\n  background: #e5a649;\n}\n.dot.d3 {\n  background: #30a67f;\n}\n.task {\n  background: white;\n  border: 1px solid #e5eaf0;\n  padding: 10px;\n  margin-bottom: 9px;\n  border-radius: 8px;\n}\n.task .chip {\n  font-size: 0.62rem;\n  padding: 3px 6px;\n}\n.task b {\n  display: block;\n  font-size: 0.77rem;\n}\n.task small {\n  font-size: 0.65rem;\n  color: #91a0ae;\n}\n.add-task {\n  font-size: 0.7rem;\n  color: #899aa8;\n  padding: 5px;\n}",
    "js": "",
    "what": "列表示状态，卡片表示任务。用户关心“工作进行到了哪一步”，而不仅是记录字段。",
    "uses": [
      "Trello 风格任务管理",
      "团队项目",
      "敏捷开发",
      "内容发布流程"
    ],
    "observe": [
      "每列对应一个固定状态",
      "卡片可以独立代表一项任务",
      "列很多时横向滚动比强行压窄更合理"
    ],
    "challenge": "将四列改为三列并调整任务归属，看看工作状态如何重新组织。",
    "tags": [
      "PC",
      "管理",
      "协作"
    ],
    "doc": "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout",
    "level": "入门",
    "minutes": 10,
    "module": "页面模式"
  },
  {
    "cat": "layout",
    "id": "mobile",
    "title": "移动端底部导航",
    "subtitle": "手机应用常见的首页结构：顶部内容 + 底部主要入口。",
    "html": "<div class=\"phone-app\">\n  <header class=\"phone-top\">\n    <b>发现</b>\n    <span>⌕　☻</span>\n  </header>\n  <section class=\"phone-feed\">\n    <h2>今天想探索什么？</h2>\n    <p class=\"muted\">发现值得收藏的内容</p>\n    <div class=\"phone-cards\">\n      <article class=\"item\">\n        <div class=\"picture shade1\">✦</div>\n        <div class=\"itembody\">\n          <b>设计灵感</b>\n          <p>用清晰、简单的方式呈现内容</p>\n        </div>\n      </article>\n      <article class=\"item\">\n        <div class=\"picture shade2\">◇</div>\n        <div class=\"itembody\">\n          <b>发现新世界</b>\n          <p>用清晰、简单的方式呈现内容</p>\n        </div>\n      </article>\n      <article class=\"item\">\n        <div class=\"picture shade3\">▧</div>\n        <div class=\"itembody\">\n          <b>探索未知</b>\n          <p>用清晰、简单的方式呈现内容</p>\n        </div>\n      </article>\n      <article class=\"item\">\n        <div class=\"picture shade4\">◉</div>\n        <div class=\"itembody\">\n          <b>创意作品</b>\n          <p>用清晰、简单的方式呈现内容</p>\n        </div>\n      </article>\n    </div>\n  </section>\n  <nav class=\"bottom-nav\">\n    <button class=\"active\">\n      ⌂\n      <small>首页</small>\n    </button>\n    <button>\n      ⌕\n      <small>搜索</small>\n    </button>\n    <button>\n      ♡\n      <small>收藏</small>\n    </button>\n    <button>\n      ☻\n      <small>我的</small>\n    </button>\n  </nav>\n</div>",
    "css": ".phone-app {\n  height: 420px;\n  max-width: 430px;\n  margin: auto;\n  display: flex;\n  flex-direction: column;\n  background: #fbfcfd;\n  border-left: 1px solid #e8ecf1;\n  border-right: 1px solid #e8ecf1;\n}\n.phone-top {\n  padding: 17px;\n  display: flex;\n  justify-content: space-between;\n  background: white;\n}\n.phone-feed {\n  overflow: auto;\n  flex: 1;\n  padding: 14px;\n}\n.phone-feed h2 {\n  font-size: 1.2rem;\n  margin: 0;\n}\n.phone-feed p {\n  font-size: 0.75rem;\n}\n.phone-cards {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: var(--lab-gap);\n}\n.phone-cards .picture {\n  height: 77px;\n  min-height: 77px;\n  font-size: 1.6rem;\n}\n.phone-cards .itembody {\n  padding: 8px;\n}\n.phone-cards .itembody b {\n  font-size: 0.7rem;\n}\n.phone-cards .itembody p {\n  display: none;\n}\n.bottom-nav {\n  margin-top: auto;\n  background: white;\n  border-top: 1px solid #e8edf1;\n  display: flex;\n  justify-content: space-around;\n  padding: 9px 0;\n}\n.bottom-nav button {\n  background: transparent;\n  border: 0;\n  color: #9baabb;\n  font-size: 1.15rem;\n}\n.bottom-nav button small {\n  display: block;\n  font-size: 0.58rem;\n}\n.bottom-nav button.active {\n  color: var(--lab-accent);\n}",
    "js": "",
    "what": "底部放少量最常用的主要入口，主内容在上方切换。它是常见移动端导航模式，并非唯一布局。",
    "uses": [
      "手机首页",
      "生活服务 App",
      "社区 App",
      "内容平台"
    ],
    "observe": [
      "顶部往往是标题和当前页面操作",
      "底部入口数量通常有限",
      "中间内容可以是列表、网格或文章"
    ],
    "challenge": "尝试把底部入口增加到 7 个，看看文字与点击区域会发生什么。",
    "tags": [
      "手机",
      "导航"
    ],
    "doc": "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout",
    "level": "入门",
    "minutes": 10,
    "module": "页面模式"
  },
  {
    "cat": "html",
    "id": "semantic",
    "title": "页面结构标签",
    "subtitle": "header、nav、main、section、article、aside、footer 承担不同职责。",
    "html": "<header class=\"semantic-header\">\n  <strong>◈ 我的阅读站</strong>\n  <nav>\n    <a href=\"#\">首页</a>\n    　\n    <a href=\"#\">文章</a>\n    　\n    <a href=\"#\">关于</a>\n  </nav>\n</header>\n<div class=\"semantic-layout\">\n  <main>\n    <article>\n      <header>\n        <small>ARTICLE · 阅读</small>\n        <h1>认识 HTML 的页面结构</h1>\n      </header>\n      <section>\n        <h2>一、为什么需要语义？</h2>\n        <p>标签不仅负责容纳内容，也帮助说明这块内容的用途。</p>\n      </section>\n      <section>\n        <h2>二、常见的区域</h2>\n        <p>正文、导航、边栏和页脚，都有适合自己的角色。</p>\n      </section>\n    </article>\n  </main>\n  <aside>\n    <h3>相关内容</h3>\n    <p>HTML 基础</p>\n    <p>网页布局</p>\n  </aside>\n</div>\n<footer class=\"semantic-footer\">© 2026 我的阅读站 · 示例页脚</footer>",
    "css": ".semantic-header,\n.semantic-footer {\n  padding: 15px 21px;\n  background: #183e49;\n  color: #fff;\n}\n.semantic-header {\n  display: flex;\n  justify-content: space-between;\n  gap: 10px;\n}\n.semantic-header nav {\n  font-size: 0.77rem;\n}\n.semantic-layout {\n  display: grid;\n  grid-template-columns: 1fr 175px;\n  gap: var(--lab-gap);\n  padding: 23px;\n}\n.semantic-layout article,\n.semantic-layout aside {\n  background: white;\n  border: 1px solid #e9eef2;\n  border-radius: var(--lab-radius);\n  padding: 20px;\n}\n.semantic-layout h1 {\n  font-size: 1.45rem;\n}\n.semantic-layout h2 {\n  font-size: 1rem;\n}\n.semantic-layout p {\n  color: #77889a;\n  font-size: 0.85rem;\n}\n.semantic-footer {\n  text-align: center;\n  font-size: 0.72rem;\n}\n@media (max-width: 550px) {\n  .semantic-layout {\n    grid-template-columns: 1fr;\n  }\n}",
    "js": "",
    "what": "HTML 语义标签描述区域“是什么”：页头、导航、主内容、文章、小节、辅助区、页脚。它们不是固定的颜色或位置。",
    "uses": [
      "企业网站",
      "博客",
      "新闻页面"
    ],
    "observe": [
      "一个 article 可以包含自己的 header 和 section",
      "aside 用来补充内容，不等于必须在右边",
      "footer 可以是整个页面或文章内部的收尾"
    ],
    "challenge": "将 aside 的内容移动到 main 下面，保持 HTML 语义不变，看看视觉是否仍然合理。",
    "tags": [
      "语义",
      "结构"
    ],
    "doc": "https://developer.mozilla.org/zh-CN/docs/Web/HTML/Reference/Elements",
    "level": "入门",
    "minutes": 10,
    "module": "元素实践"
  },
  {
    "cat": "html",
    "id": "div",
    "title": "div 通用容器",
    "subtitle": "实际项目经常用 div 给元素分组，但它本身没有特定语义。",
    "html": "<div class=\"outer\">\n  <div class=\"headerbox\">\n    <div class=\"logobox\">◈ DIV WORLD</div>\n    <div class=\"linksbox\">首页　服务　作品　关于</div>\n  </div>\n  <div class=\"contentbox\">\n    <div class=\"leftbox\">\n      <b>左边的 div</b>\n      <p>可以当导航容器</p>\n    </div>\n    <div class=\"rightbox\">\n      <h2>右边的 div</h2>\n      <p>同样的 div，也可以包住正文、卡片或表格。</p>\n      <div class=\"innerbox\">这里还是一个 div</div>\n    </div>\n  </div>\n  <div class=\"footerbox\">底部的 div</div>\n</div>",
    "css": ".outer {\n  padding: 18px;\n}\n.outer > div,\n.contentbox > div,\n.innerbox {\n  border: 2px dashed #9cb9b2;\n  border-radius: var(--lab-radius);\n}\n.headerbox {\n  display: flex;\n  justify-content: space-between;\n  padding: 15px;\n  background: #e6f4ed;\n}\n.logobox {\n  font-weight: bold;\n}\n.linksbox {\n  font-size: 0.8rem;\n}\n.contentbox {\n  display: grid;\n  grid-template-columns: 1fr 2fr;\n  gap: var(--lab-gap);\n  margin: 12px 0;\n}\n.contentbox > div {\n  padding: 19px;\n  background: #fff;\n}\n.contentbox p {\n  font-size: 0.85rem;\n  color: #8491a0;\n}\n.innerbox {\n  background: #e8f0ff !important;\n  padding: 15px;\n}\n.footerbox {\n  padding: 14px;\n  text-align: center;\n  background: #f4e8d4;\n}\n@media (max-width: 460px) {\n  .contentbox {\n    grid-template-columns: 1fr;\n  }\n}",
    "js": "",
    "what": "div 就是一个通用的分组盒子。很多布局确实由 div 组成，但它不会自动变成侧边栏或三栏，外观是样式决定的。",
    "uses": [
      "页面分组",
      "卡片容器",
      "布局包装",
      "组件内部"
    ],
    "observe": [
      "每个虚线边框都是一个不同层级的 div",
      "div 可以嵌套 div",
      "有明确内容职责时可优先考虑语义标签"
    ],
    "challenge": "把 contentbox 的两列比例从 1fr 2fr 改成 2fr 1fr。",
    "tags": [
      "div",
      "容器",
      "基础"
    ],
    "doc": "https://developer.mozilla.org/zh-CN/docs/Web/HTML/Reference/Elements",
    "level": "入门",
    "minutes": 10,
    "module": "元素实践"
  },
  {
    "cat": "html",
    "id": "heading",
    "title": "标题、段落与文字",
    "subtitle": "标题用于划分内容层次，段落用于承载连续文字。",
    "html": "<article class=\"text-study\">\n  <h1>一级标题：文章主标题</h1>\n  <p>一段普通的文字，用于解释一个完整的想法。HTML 的标题表示结构，不只是字体大小。</p>\n  <h2>二级标题：大章节</h2>\n  <p>\n    这里解释这一章的主要内容，包含一个\n    <strong>重要词语</strong>\n    和一段\n    <em>强调内容</em>\n    。\n  </p>\n  <h3>三级标题：子话题</h3>\n  <p>\n    我们还可以使用\n    <mark>标记文字</mark>\n    ，例如突出一个关键词。\n  </p>\n  <blockquote>这是引用文字，常用于引出别人的观点。</blockquote>\n  <small>补充说明：文字元素各自有不同的使用场景。</small>\n</article>",
    "css": ".text-study {\n  max-width: 690px;\n  margin: auto;\n  background: white;\n  padding: 22px 27px;\n}\n.text-study h1 {\n  font-size: 1.7rem;\n}\n.text-study h2 {\n  font-size: 1.26rem;\n  margin-top: 30px;\n}\n.text-study h3 {\n  font-size: 1rem;\n}\n.text-study p {\n  font-size: 0.87rem;\n  color: #586b7b;\n  line-height: 1.9;\n}\n.text-study blockquote {\n  margin: 18px 0;\n  padding: 14px 18px;\n  border-left: 3px solid var(--lab-accent);\n  background: #f4f8ff;\n}\n.text-study small {\n  color: #92a1a9;\n}",
    "js": "",
    "what": "h1–h6 表示标题层级，p 表示段落；strong、em、mark 负责不同的文本意义。",
    "uses": [
      "博客文章",
      "产品说明",
      "课程内容"
    ],
    "observe": [
      "标题大小不同，但真正重要的是层级关系",
      "强调文字不是每句话都要加粗",
      "引用内容与普通段落区分"
    ],
    "challenge": "把一个 h2 改为 h3，观察默认样式与文章结构。",
    "tags": [
      "文本",
      "标题"
    ],
    "doc": "https://developer.mozilla.org/zh-CN/docs/Web/HTML/Reference/Elements",
    "level": "入门",
    "minutes": 10,
    "module": "元素实践"
  },
  {
    "cat": "html",
    "id": "lists",
    "title": "有序列表与无序列表",
    "subtitle": "步骤有先后顺序时用 ol；并列事项用 ul。",
    "html": "<main class=\"example-two\">\n  <section class=\"surface example-card\">\n    <h2>制作一杯咖啡</h2>\n    <p class=\"muted\">有严格步骤顺序</p>\n    <ol>\n      <li>准备咖啡豆</li>\n      <li>研磨成咖啡粉</li>\n      <li>冲泡并等待萃取</li>\n      <li>倒入杯子</li>\n    </ol>\n  </section>\n  <section class=\"surface example-card\">\n    <h2>旅行行李清单</h2>\n    <p class=\"muted\">物品可以没有固定顺序</p>\n    <ul>\n      <li>手机与充电器</li>\n      <li>身份证件</li>\n      <li>换洗衣物</li>\n      <li>水和零食</li>\n    </ul>\n  </section>\n</main>",
    "css": ".example-two {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: var(--lab-gap);\n  padding: 25px;\n}\n.example-card {\n  padding: 19px;\n}\n.example-card h2 {\n  margin: 0;\n  font-size: 1.25rem;\n}\n.example-card li {\n  padding: 10px 0;\n  border-bottom: 1px solid #edf1f5;\n  font-size: 0.84rem;\n}\n@media (max-width: 520px) {\n  .example-two {\n    grid-template-columns: 1fr;\n  }\n}",
    "js": "",
    "what": "列表能让一组相关信息更清楚。有顺序的步骤与没顺序的清单，应该选择不同标签。",
    "uses": [
      "操作教程",
      "导航列表",
      "任务清单"
    ],
    "observe": [
      "ol 默认有数字编号",
      "ul 默认使用项目符号",
      "列表项统一用 li"
    ],
    "challenge": "把第一个 ol 改为 ul，观察步骤的阅读方式如何变化。",
    "tags": [
      "列表"
    ],
    "doc": "https://developer.mozilla.org/zh-CN/docs/Web/HTML/Reference/Elements",
    "level": "入门",
    "minutes": 10,
    "module": "元素实践"
  },
  {
    "cat": "html",
    "id": "table-el",
    "title": "数据表格",
    "subtitle": "一行是一条记录，一列是一类字段。",
    "html": "<div class=\"tablebox\">\n  <h2>课程安排表</h2>\n  <p>适合精确比较结构化数据。</p>\n  <table>\n    <caption>本周学习计划</caption>\n    <thead>\n      <tr>\n        <th scope=\"col\">日期</th>\n        <th scope=\"col\">主题</th>\n        <th scope=\"col\">时长</th>\n        <th scope=\"col\">完成</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td>周一</td>\n        <td>HTML 基础</td>\n        <td>45 分钟</td>\n        <td>✓</td>\n      </tr>\n      <tr>\n        <td>周二</td>\n        <td>CSS 排版</td>\n        <td>60 分钟</td>\n        <td>✓</td>\n      </tr>\n      <tr>\n        <td>周三</td>\n        <td>JS 交互</td>\n        <td>50 分钟</td>\n        <td>—</td>\n      </tr>\n      <tr>\n        <td>周四</td>\n        <td>综合练习</td>\n        <td>90 分钟</td>\n        <td>—</td>\n      </tr>\n    </tbody>\n  </table>\n</div>",
    "css": ".tablebox {\n  padding: 25px;\n}\n.tablebox h2 {\n  margin: 0;\n}\n.tablebox p {\n  color: #8193a3;\n}\n.tablebox table {\n  border-collapse: collapse;\n  width: 100%;\n  background: white;\n  margin-top: 20px;\n  border-radius: 12px;\n  overflow: hidden;\n}\n.tablebox caption {\n  color: #8295a5;\n  font-size: 0.74rem;\n  margin-bottom: 10px;\n}\n.tablebox th,\n.tablebox td {\n  padding: 14px;\n  text-align: left;\n  border-bottom: 1px solid #e7edf2;\n  font-size: 0.8rem;\n}\n.tablebox th {\n  background: #e7f0ff;\n  color: #4b729c;\n}",
    "js": "",
    "what": "table 用于有明确行列关系的真实数据，而不是拿来给整个网页硬做左右两栏。",
    "uses": [
      "成绩单",
      "订单",
      "数据比较",
      "课表"
    ],
    "observe": [
      "表头字段对应每一行的数据",
      "caption 是表格标题",
      "简单对比数据用表格比很多卡片更高效"
    ],
    "challenge": "增加一列“学习地点”，再切到手机宽度看表格的表现。",
    "tags": [
      "表格",
      "数据"
    ],
    "doc": "https://developer.mozilla.org/zh-CN/docs/Web/HTML/Reference/Elements",
    "level": "入门",
    "minutes": 10,
    "module": "元素实践"
  },
  {
    "cat": "html",
    "id": "forms",
    "title": "原生表单与输入控件",
    "subtitle": "常用文本、邮箱、数字、日期、下拉、多选等输入形式。",
    "html": "<form class=\"form-demo\" id=\"sampleForm\">\n  <h2>报名体验课程</h2>\n  <label>\n    姓名\n    <input name=\"username\" placeholder=\"请输入姓名\" required />\n  </label>\n  <label>\n    邮箱\n    <input type=\"email\" name=\"email\" placeholder=\"you@example.com\" required />\n  </label>\n  <div class=\"rowform\">\n    <label>\n      学习时长（小时）\n      <input type=\"number\" name=\"hours\" min=\"1\" max=\"10\" value=\"2\" />\n    </label>\n    <label>\n      开始日期\n      <input type=\"date\" name=\"date\" />\n    </label>\n  </div>\n  <label>\n    感兴趣的内容\n    <select>\n      <option>HTML 网页结构</option>\n      <option>CSS 视觉设计</option>\n      <option>JavaScript 交互</option>\n    </select>\n  </label>\n  <fieldset>\n    <legend>学习设备</legend>\n    <label>\n      <input type=\"checkbox\" checked />\n      电脑\n    </label>\n    <label>\n      <input type=\"checkbox\" />\n      手机\n    </label>\n  </fieldset>\n  <label>\n    补充说明\n    <textarea rows=\"2\" placeholder=\"说说你的想法...\"></textarea>\n  </label>\n  <button class=\"btn\" type=\"submit\">提交报名</button>\n  <output id=\"formResult\" aria-live=\"polite\"></output>\n</form>",
    "css": ".form-demo {\n  max-width: 580px;\n  margin: 18px auto;\n  padding: 22px;\n  background: white;\n  border: 1px solid #e6edf2;\n  border-radius: var(--lab-radius);\n}\n.form-demo h2 {\n  margin: 0 0 18px;\n}\n.form-demo > label,\n.rowform label {\n  display: block;\n  margin-bottom: 12px;\n  font-size: 0.76rem;\n  font-weight: 650;\n}\n.form-demo label > input:not([type='checkbox']),\n.form-demo select,\n.form-demo textarea {\n  display: block;\n  margin-top: 6px;\n  width: 100%;\n  padding: 10px;\n  border: 1px solid #dbe4e9;\n  border-radius: 7px;\n  background: #fff;\n}\n.rowform {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: var(--lab-gap);\n}\n.form-demo fieldset {\n  border: 1px solid #e4ebf0;\n  margin-bottom: 12px;\n  border-radius: 7px;\n}\n.form-demo fieldset label {\n  font-size: 0.77rem;\n  margin-right: 12px;\n}\n.form-demo output {\n  display: block;\n  color: #13876a;\n  font-size: 0.77rem;\n  margin-top: 9px;\n}\n@media (max-width: 450px) {\n  .rowform {\n    grid-template-columns: 1fr;\n  }\n}",
    "js": "document.getElementById('sampleForm').addEventListener('submit', (event) => {\n  event.preventDefault();\n  document.getElementById('formResult').textContent =\n    '已完成前端表单验证（演示模式，未提交到服务器）';\n});",
    "what": "浏览器原生表单不仅有文本框，还包括邮箱、数字、日期、下拉选择、复选框等。",
    "uses": [
      "注册",
      "搜索",
      "信息录入",
      "提交申请"
    ],
    "observe": [
      "不同 input type 对应不同默认行为",
      "required、min、max 等属性影响输入约束",
      "示例不会真正发送到服务器"
    ],
    "challenge": "将姓名的 required 删除，尝试留空提交。",
    "tags": [
      "表单",
      "输入",
      "原生"
    ],
    "doc": "https://developer.mozilla.org/zh-CN/docs/Web/HTML/Reference/Elements",
    "level": "入门",
    "minutes": 15,
    "module": "元素实践"
  },
  {
    "cat": "html",
    "id": "native-details",
    "title": "原生折叠详情",
    "subtitle": "details + summary 不写 JS 也可以展开和收起内容。",
    "html": "<div class=\"faq\">\n  <h2>常见问题</h2>\n  <details open>\n    <summary>这个项目需要安装框架吗？</summary>\n    <p>不需要，直接使用浏览器打开 HTML 文件即可。</p>\n  </details>\n  <details>\n    <summary>我可以自己修改示例代码吗？</summary>\n    <p>可以。修改编辑区中的内容，再点击运行代码。</p>\n  </details>\n  <details>\n    <summary>所有交互都必须用 JavaScript 吗？</summary>\n    <p>不是。例如 details 本身就能提供原生折叠行为。</p>\n  </details>\n  <details>\n    <summary>手机能用吗？</summary>\n    <p>可以通过上方设备切换查看基本适配效果。</p>\n  </details>\n</div>",
    "css": ".faq {\n  max-width: 650px;\n  margin: 20px auto;\n  padding: 17px;\n}\n.faq h2 {\n  text-align: center;\n  margin: 0 0 20px;\n}\n.faq details {\n  background: white;\n  border: 1px solid #e7edf2;\n  border-radius: var(--lab-radius);\n  margin-bottom: var(--lab-gap);\n  padding: 14px 16px;\n}\n.faq summary {\n  cursor: pointer;\n  font-size: 0.86rem;\n  font-weight: 700;\n}\n.faq details p {\n  color: #708596;\n  font-size: 0.8rem;\n  line-height: 1.8;\n  margin: 10px 0 3px;\n}",
    "js": "",
    "what": "details 是浏览器自带的折叠容器；用户点击 summary 即可显示或隐藏更多信息。",
    "uses": [
      "常见问题",
      "附加说明",
      "简单折叠内容"
    ],
    "observe": [
      "不用写事件监听也能交互",
      "summary 是可点击的标题",
      "open 属性决定默认是否展开"
    ],
    "challenge": "删除第一个 details 的 open 属性，再点击标题试试看。",
    "tags": [
      "details",
      "原生交互"
    ],
    "doc": "https://developer.mozilla.org/zh-CN/docs/Web/HTML/Reference/Elements",
    "level": "入门",
    "minutes": 10,
    "module": "元素实践"
  },
  {
    "cat": "html",
    "id": "media",
    "title": "图片、SVG 与音视频容器",
    "subtitle": "HTML 可以展示图片，也可以内嵌清晰的 SVG 矢量图。",
    "html": "<div class=\"media-demo\">\n  <h2>网页里的媒体内容</h2>\n  <div class=\"media-grid\">\n    <figure>\n      <svg viewBox=\"0 0 260 160\" role=\"img\" aria-label=\"山脉和太阳的矢量图\">\n        <defs>\n          <linearGradient id=\"sky\" x1=\"0\" x2=\"1\" y1=\"0\" y2=\"1\">\n            <stop stop-color=\"#a9dbef\" />\n            <stop offset=\"1\" stop-color=\"#e5d9fd\" />\n          </linearGradient>\n        </defs>\n        <rect width=\"260\" height=\"160\" rx=\"10\" fill=\"url(#sky)\" />\n        <circle cx=\"195\" cy=\"43\" r=\"23\" fill=\"#ffedb0\" />\n        <path d=\"M0 150 L75 42 L151 150Z\" fill=\"#7b9bbb\" />\n        <path d=\"M72 160 L176 55 L260 160Z\" fill=\"#56789b\" />\n      </svg>\n      <figcaption>SVG：矢量图形，可清晰缩放</figcaption>\n    </figure>\n    <figure>\n      <div class=\"fake-photo\">🌄</div>\n      <figcaption>图片：文章配图、商品照片等</figcaption>\n    </figure>\n  </div>\n  <div class=\"media-tip\">\n    <b>音频和视频</b>\n    <p>\n      常见标签有 audio 和\n      video。真实播放需要相应的媒体文件；当前离线演示不包含外部视频素材。\n    </p>\n    <audio controls preload=\"none\" aria-label=\"无音源的音频控件演示\"></audio>\n  </div>\n</div>",
    "css": ".media-demo {\n  padding: 22px;\n}\n.media-demo h2 {\n  margin: 0 0 18px;\n}\n.media-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: var(--lab-gap);\n}\nfigure {\n  margin: 0;\n  background: white;\n  border: 1px solid #e5ecf2;\n  border-radius: var(--lab-radius);\n  padding: 13px;\n}\nfigure svg,\n.fake-photo {\n  width: 100%;\n  height: 145px;\n  object-fit: cover;\n  border-radius: 8px;\n}\n.fake-photo {\n  display: grid;\n  place-items: center;\n  background: linear-gradient(120deg, #a5c4d1, #f0dcae);\n  font-size: 4rem;\n}\nfigcaption {\n  font-size: 0.77rem;\n  color: #788c9c;\n  margin-top: 9px;\n}\n.media-tip {\n  background: white;\n  padding: 17px;\n  margin-top: var(--lab-gap);\n  border-radius: var(--lab-radius);\n}\n.media-tip p {\n  color: #7f91a1;\n  font-size: 0.75rem;\n}\n.media-tip audio {\n  width: 100%;\n  max-width: 330px;\n}\n@media (max-width: 480px) {\n  .media-grid {\n    grid-template-columns: 1fr;\n  }\n}",
    "js": "",
    "what": "img 通常展示图片；svg 直接描述矢量图形；audio、video 提供媒体播放控件。",
    "uses": [
      "作品展示",
      "教育网站",
      "音乐播放器",
      "视频课程"
    ],
    "observe": [
      "SVG 在不同尺寸下仍很清晰",
      "figure + figcaption 给媒体增加说明",
      "没有资源文件时，播放器不会凭空播放"
    ],
    "challenge": "修改 SVG 中 circle 的颜色和位置，再运行查看变化。",
    "tags": [
      "SVG",
      "音视频",
      "图片"
    ],
    "doc": "https://developer.mozilla.org/zh-CN/docs/Web/HTML/Reference/Elements",
    "level": "入门",
    "minutes": 10,
    "module": "元素实践"
  },
  {
    "cat": "html",
    "id": "links",
    "title": "链接、导航与锚点",
    "subtitle": "a 标签用于跳转，按钮更适合执行当前页面的动作。",
    "html": "<div class=\"link-demo\">\n  <nav class=\"link-nav\">\n    <a href=\"about:srcdoc#intro\">简介</a>\n    <a href=\"about:srcdoc#features\">功能</a>\n    <a href=\"about:srcdoc#contact\">联系</a>\n  </nav>\n  <section id=\"intro\">\n    <h2>简介</h2>\n    <p>这是第一个分区。点击上方链接可以尝试定位到页面中的不同区域。</p>\n  </section>\n  <section id=\"features\">\n    <h2>功能</h2>\n    <p>链接是导航入口，而按钮常用于执行当前页面的操作，例如切换状态或提交。</p>\n  </section>\n  <section id=\"contact\">\n    <h2>联系</h2>\n    <p>这个演示使用页面内部锚点，没有跳转到外部网站。</p>\n    <a href=\"about:srcdoc#intro\" class=\"btn\">返回顶部 ↑</a>\n  </section>\n</div>",
    "css": ".link-demo {\n  background: white;\n  max-width: 700px;\n  margin: auto;\n}\n.link-nav {\n  padding: 15px;\n  background: #eaf2ff;\n  display: flex;\n  justify-content: space-around;\n  position: sticky;\n  top: 0;\n}\n.link-nav a {\n  color: var(--lab-accent);\n  font-weight: 700;\n  font-size: 0.8rem;\n}\n.link-demo section {\n  padding: 30px;\n  min-height: 210px;\n  scroll-margin-top: 55px;\n  border-bottom: 1px solid #eff3f6;\n}\n.link-demo section p {\n  font-size: 0.82rem;\n  color: #708394;\n}\n.link-demo .btn {\n  display: inline-block;\n  margin-top: 8px;\n}",
    "js": "",
    "what": "a 表示可导航的目标；按钮更适合某个动作。锚点还可以在同一页面跳转到指定 id。",
    "uses": [
      "网站导航",
      "长文目录",
      "页内定位"
    ],
    "observe": [
      "导航链接对应不同的 id",
      "当前页面不用额外的 JS 也能做锚点跳转",
      "使用恰当的链接文本便于理解目标"
    ],
    "challenge": "修改第二个链接的 href，让它跳转到第三个分区。",
    "tags": [
      "链接",
      "锚点",
      "导航"
    ],
    "doc": "https://developer.mozilla.org/zh-CN/docs/Web/HTML/Reference/Elements",
    "level": "入门",
    "minutes": 10,
    "module": "元素实践"
  },
  {
    "cat": "html",
    "id": "native-ui",
    "title": "常用原生元素组合",
    "subtitle": "进度、时间、代码和按钮都可以通过 HTML 表达。",
    "html": "<div class=\"html-catalog\">\n  <h2>原生界面小组件</h2>\n  <div class=\"micro-grid\">\n    <section>\n      <h3>学习进度</h3>\n      <progress value=\"65\" max=\"100\">65%</progress>\n      <p>当前已完成 65%</p>\n    </section>\n    <section>\n      <h3>音量范围</h3>\n      <input type=\"range\" min=\"0\" max=\"100\" value=\"45\" />\n      <p>拖动滑块试试</p>\n    </section>\n    <section>\n      <h3>时间</h3>\n      <time datetime=\"2026-10-11\">2026 年 10 月 11 日</time>\n      <p>time 表示机器也能读取的时间。</p>\n    </section>\n    <section>\n      <h3>代码与快捷键</h3>\n      <code>const x = 10;</code>\n      <p>\n        运行：\n        <kbd>Ctrl</kbd>\n        +\n        <kbd>Enter</kbd>\n      </p>\n    </section>\n    <section>\n      <h3>按钮状态</h3>\n      <button class=\"btn\">正常按钮</button>\n      <button disabled>不可用</button>\n    </section>\n    <section>\n      <h3>提示和引用</h3>\n      <p>\n        请阅读\n        <abbr title=\"HyperText Markup Language\">HTML</abbr>\n        的基本定义。\n      </p>\n    </section>\n  </div>\n</div>",
    "css": ".html-catalog {\n  padding: 22px;\n}\n.html-catalog h2 {\n  margin: 0 0 20px;\n}\n.micro-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: var(--lab-gap);\n}\n.micro-grid section {\n  background: white;\n  border: 1px solid #e6edf1;\n  padding: 17px;\n  border-radius: var(--lab-radius);\n  min-width: 0;\n}\n.micro-grid h3 {\n  font-size: 0.85rem;\n  margin: 0 0 14px;\n}\n.micro-grid p {\n  font-size: 0.75rem;\n  color: #7b8c9d;\n}\n.micro-grid progress,\n.micro-grid input {\n  width: 100%;\n  accent-color: var(--lab-accent);\n}\n.micro-grid code {\n  color: #b74762;\n}\n.micro-grid kbd {\n  border: 1px solid #d3d9df;\n  border-radius: 4px;\n  padding: 2px 5px;\n}\n.micro-grid button:disabled {\n  opacity: 0.45;\n}\n@media (max-width: 480px) {\n  .micro-grid {\n    grid-template-columns: 1fr;\n  }\n}",
    "js": "",
    "what": "HTML 自带不少实用元素，常见的进度条、时间、代码标记和按钮，不需要全都从 div 自己造。",
    "uses": [
      "表单",
      "在线课程",
      "开发文档",
      "状态展示"
    ],
    "observe": [
      "progress 自带进度可视化",
      "range 可直接拖动",
      "disabled 让按钮进入不可用状态"
    ],
    "challenge": "把 progress 的 value 改成 85，再试着修改 max。",
    "tags": [
      "原生控件",
      "进度"
    ],
    "doc": "https://developer.mozilla.org/zh-CN/docs/Web/HTML/Reference/Elements",
    "level": "入门",
    "minutes": 10,
    "module": "元素实践"
  },
  {
    "cat": "css",
    "id": "box-model",
    "title": "盒模型与间距",
    "subtitle": "内容、内边距、边框、外边距分别影响空间。",
    "html": "<div class=\"box-demo\">\n  <div class=\"outerbox\">\n    <span class=\"name\">外边距 margin</span>\n    <div class=\"borderbox\">\n      <span class=\"name\">边框 border</span>\n      <div class=\"paddingbox\">\n        <span class=\"name\">内边距 padding</span>\n        <div class=\"contentbox\">真正的内容 Content</div>\n      </div>\n    </div>\n  </div>\n</div>",
    "css": ".box-demo {\n  display: grid;\n  place-items: center;\n  min-height: 360px;\n  padding: 30px;\n}\n.outerbox {\n  background: #f4e7ae;\n  padding: 25px;\n  width: min(100%, 430px);\n  text-align: center;\n  border-radius: 8px;\n}\n.name {\n  display: block;\n  font-size: 0.75rem;\n  font-weight: 700;\n  color: #785f38;\n  margin: 0 0 9px;\n}\n.borderbox {\n  border: 8px solid #c9a4e9;\n  background: #bce8da;\n  padding: 25px;\n}\n.paddingbox {\n  background: #bce8da;\n  padding: 12px;\n}\n.contentbox {\n  background: #a9c6ee;\n  padding: 25px 10px;\n  border-radius: 6px;\n  font-weight: 700;\n  font-size: 0.78rem;\n}",
    "js": "",
    "what": "盒模型把一个元素看成四层：内容 → padding → border → margin。它决定元素尺寸和与周围的距离。",
    "uses": [
      "卡片",
      "按钮",
      "页面边距"
    ],
    "observe": [
      "padding 是内容到边框的内部空间",
      "margin 是元素与外部元素的间隔",
      "border 构成可见边界"
    ],
    "challenge": "分别修改 borderbox 的 padding 和 border 厚度，观察哪个区域变化。",
    "tags": [
      "间距",
      "基础"
    ],
    "doc": "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Box_model",
    "level": "入门",
    "minutes": 10,
    "module": "样式实践"
  },
  {
    "cat": "css",
    "id": "flex",
    "title": "Flexbox 一行排列",
    "subtitle": "把按钮、导航、工具项自然地排成一行或一列。",
    "html": "<div class=\"flex-show\">\n  <h2>导航按钮排列</h2>\n  <p class=\"muted\">改变窗口大小看它如何换行</p>\n  <div class=\"flex-row\">\n    <button>首页</button>\n    <button>热门专题</button>\n    <button>全部文章</button>\n    <button>我的收藏</button>\n    <button>设置</button>\n  </div>\n  <h3>三张弹性卡片</h3>\n  <div class=\"flex-cards\">\n    <div>弹性内容 A</div>\n    <div>弹性内容 B</div>\n    <div>弹性内容 C</div>\n  </div>\n</div>",
    "css": ".flex-show {\n  padding: 23px;\n}\n.flex-row {\n  display: flex;\n  gap: var(--lab-gap);\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-between;\n  background: white;\n  padding: 15px;\n  border-radius: var(--lab-radius);\n}\n.flex-row button {\n  background: #e9f0fb;\n  color: var(--lab-accent);\n  border: 0;\n  padding: 12px;\n  border-radius: 7px;\n}\n.flex-cards {\n  display: flex;\n  gap: var(--lab-gap);\n}\n.flex-cards div {\n  flex: 1;\n  min-width: 0;\n  padding: 30px 6px;\n  background: #c9e7d9;\n  border-radius: var(--lab-radius);\n  text-align: center;\n  font-size: 0.78rem;\n}\n.flex-cards div:nth-child(2) {\n  flex: 2;\n  background: #dbe8f8;\n}\n@media (max-width: 430px) {\n  .flex-cards {\n    flex-direction: column;\n  }\n}",
    "js": "",
    "what": "Flexbox 擅长处理一个方向上的排列，比如横向导航、按钮组和纵向列表。",
    "uses": [
      "导航栏",
      "工具栏",
      "按钮组",
      "卡片排列"
    ],
    "observe": [
      "gap 控制项目之间的距离",
      "flex:2 的卡片比 flex:1 占更多剩余空间",
      "flex-wrap 可以让项目换到下一行"
    ],
    "challenge": "将 justify-content:space-between 改成 center，观察所有按钮如何靠拢。",
    "tags": [
      "Flex",
      "排列"
    ],
    "doc": "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Flexbox",
    "level": "入门",
    "minutes": 10,
    "module": "样式实践"
  },
  {
    "cat": "css",
    "id": "grid-css",
    "title": "Grid 行列布局",
    "subtitle": "同时控制横向列与纵向行，适合复杂区域。",
    "html": "<div class=\"grid-demo\">\n  <div class=\"block head\">顶栏 Header</div>\n  <div class=\"block left\">侧边栏 Aside</div>\n  <div class=\"block main\">\n    <strong>正文 Main</strong>\n    <p>占据右边主要空间</p>\n  </div>\n  <div class=\"block foot\">页脚 Footer</div>\n</div>",
    "css": ".grid-demo {\n  display: grid;\n  grid-template-columns: 180px minmax(0, 1fr);\n  grid-template-areas: 'head head' 'left main' 'foot foot';\n  gap: var(--lab-gap);\n  padding: 23px;\n  min-height: 350px;\n}\n.block {\n  border-radius: var(--lab-radius);\n  padding: 21px;\n  font-weight: 700;\n}\n.head {\n  grid-area: head;\n  background: #a2ded0;\n}\n.left {\n  grid-area: left;\n  background: #ffd4b6;\n}\n.main {\n  grid-area: main;\n  background: #cddff7;\n  min-height: 170px;\n}\n.foot {\n  grid-area: foot;\n  background: #dce2e8;\n}\n.main p {\n  font-size: 0.8rem;\n  font-weight: 400;\n}\n@media (max-width: 480px) {\n  .grid-demo {\n    grid-template-columns: 1fr;\n    grid-template-areas: 'head' 'main' 'left' 'foot';\n  }\n}",
    "js": "",
    "what": "Grid 擅长明确的二维区域关系，行与列可以同时定义，也能给区域起名字。",
    "uses": [
      "多栏页面",
      "仪表盘",
      "复杂卡片组合"
    ],
    "observe": [
      "顶栏和页脚跨越两列",
      "左侧与正文共享同一行",
      "移动端可以彻底改变区域排列"
    ],
    "challenge": "将 180px 改成 90px，观察侧栏的压缩效果。",
    "tags": [
      "Grid",
      "布局"
    ],
    "doc": "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Grids",
    "level": "入门",
    "minutes": 10,
    "module": "样式实践"
  },
  {
    "cat": "css",
    "id": "color",
    "title": "颜色、渐变与透明度",
    "subtitle": "纯色、渐变色、透明背景可以营造完全不同的视觉层次。",
    "html": "<div class=\"color-demo\">\n  <h2>三种常见的配色表达</h2>\n  <div class=\"color-tiles\">\n    <div class=\"solid\">\n      纯色背景\n      <span>background-color</span>\n    </div>\n    <div class=\"gradient\">\n      线性渐变\n      <span>linear-gradient</span>\n    </div>\n    <div class=\"opacity\">\n      <div>半透明覆盖层</div>\n      <span>rgba / opacity</span>\n    </div>\n  </div>\n</div>",
    "css": ".color-demo {\n  padding: 26px;\n}\n.color-demo h2 {\n  margin: 0 0 20px;\n}\n.color-tiles {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: var(--lab-gap);\n}\n.color-tiles > div {\n  height: 190px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  border-radius: var(--lab-radius);\n  color: white;\n  font-size: 0.9rem;\n  font-weight: 700;\n}\n.color-tiles span {\n  font-size: 0.65rem;\n  opacity: 0.8;\n  margin-top: 8px;\n}\n.solid {\n  background: var(--lab-accent);\n}\n.gradient {\n  background: linear-gradient(135deg, #65c6b4, #6987ec, #b38edf);\n}\n.opacity {\n  position: relative;\n  background: linear-gradient(140deg, #f9ac6d, #bc5c9d);\n}\n.opacity > div {\n  padding: 16px;\n  background: #ffffff55;\n  backdrop-filter: blur(5px);\n  border-radius: 9px;\n}\n@media (max-width: 550px) {\n  .color-tiles {\n    grid-template-columns: 1fr;\n  }\n  .color-tiles > div {\n    height: 105px;\n  }\n}",
    "js": "",
    "what": "颜色可以表达主次、状态和品牌；渐变是颜色的平滑变化，透明度可以产生叠加层。",
    "uses": [
      "按钮",
      "首页背景",
      "提示状态",
      "卡片"
    ],
    "observe": [
      "纯色是一个固定颜色",
      "渐变包含多个颜色节点",
      "半透明区域可以看到下方背景"
    ],
    "challenge": "把 linear-gradient 的角度改成 0deg、90deg 或 180deg。",
    "tags": [
      "配色",
      "渐变"
    ],
    "doc": "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference",
    "level": "入门",
    "minutes": 10,
    "module": "样式实践"
  },
  {
    "cat": "css",
    "id": "type",
    "title": "字体与排版",
    "subtitle": "字号、行高、字重和文字宽度共同影响阅读感受。",
    "html": "<div class=\"typo-demo\">\n  <section>\n    <small>排版 A · 清晰阅读</small>\n    <h2>设计的意义，是让信息更容易理解。</h2>\n    <p>\n      舒适的行距和段落宽度，让读者在长文中不容易迷失。适当的留白可以形成自然的阅读节奏。\n    </p>\n  </section>\n  <section class=\"bad\">\n    <small>排版 B · 刻意对照</small>\n    <h2>设计的意义，是让信息更容易理解。</h2>\n    <p>过于拥挤的文字通常更难阅读。行高、宽度和字距并不是越小越节省空间就越好。</p>\n  </section>\n</div>",
    "css": ".typo-demo {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: var(--lab-gap);\n  padding: 21px;\n}\n.typo-demo section {\n  background: white;\n  padding: 24px;\n  border-radius: var(--lab-radius);\n  min-width: 0;\n}\n.typo-demo small {\n  color: var(--lab-accent);\n  font-size: 0.7rem;\n}\n.typo-demo h2 {\n  font-size: 1.45rem;\n  line-height: 1.5;\n  letter-spacing: 0.3px;\n}\n.typo-demo p {\n  line-height: 2;\n  font-size: 0.86rem;\n  color: #5b6975;\n}\n.typo-demo .bad h2 {\n  font-size: 1.3rem;\n  line-height: 1.05;\n  letter-spacing: -1.5px;\n}\n.typo-demo .bad p {\n  line-height: 1.1;\n  letter-spacing: -0.5px;\n  color: #8897a6;\n}\n@media (max-width: 510px) {\n  .typo-demo {\n    grid-template-columns: 1fr;\n  }\n}",
    "js": "",
    "what": "文字可读性不是只有“选字体”，还与字号、行距、字距、每行长度有关。",
    "uses": [
      "博客",
      "新闻",
      "知识文档",
      "说明页"
    ],
    "observe": [
      "两栏用相近内容，但阅读体验不同",
      "适当的行高能减少行之间挤压",
      "过长的一行或过密文字会影响扫描"
    ],
    "challenge": "修改第一栏 p 的 line-height，从 2 改成 1.1。",
    "tags": [
      "字体",
      "排版"
    ],
    "doc": "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference",
    "level": "入门",
    "minutes": 10,
    "module": "样式实践"
  },
  {
    "cat": "css",
    "id": "shadow",
    "title": "边框、圆角与阴影",
    "subtitle": "同样一张卡片，边界和阴影会改变层次感。",
    "html": "<div class=\"shadows\">\n  <div class=\"show-card c1\">\n    <b>普通边框</b>\n    <p>清楚界定内容区域。</p>\n  </div>\n  <div class=\"show-card c2\">\n    <b>柔和阴影</b>\n    <p>看起来稍微浮起来。</p>\n  </div>\n  <div class=\"show-card c3\">\n    <b>圆角卡片</b>\n    <p>角的形状也影响观感。</p>\n  </div>\n</div>",
    "css": ".shadows {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: var(--lab-gap);\n  padding: 36px;\n}\n.show-card {\n  height: 180px;\n  padding: 23px;\n  background: white;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  border-radius: var(--lab-radius);\n}\n.show-card p {\n  font-size: 0.8rem;\n  color: #83909c;\n}\n.c1 {\n  border: 2px solid #bad3e8;\n}\n.c2 {\n  box-shadow: 0 16px 32px #183c5a33;\n}\n.c3 {\n  border: 1px solid #e2e8f0;\n  border-radius: 28px;\n}\n@media (max-width: 520px) {\n  .shadows {\n    grid-template-columns: 1fr;\n    padding: 20px;\n  }\n  .show-card {\n    height: 110px;\n  }\n}",
    "js": "",
    "what": "边框负责界定轮廓；圆角改变形状；阴影可以给平面界面增加视觉层次。",
    "uses": [
      "卡片",
      "弹窗",
      "输入框",
      "按钮"
    ],
    "observe": [
      "无阴影的卡片也可以清晰好看",
      "太重的阴影会变得喧宾夺主",
      "圆角大小应保持系统一致"
    ],
    "challenge": "把 c2 的 box-shadow 模糊半径 32px 改成 3px。",
    "tags": [
      "圆角",
      "阴影"
    ],
    "doc": "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference",
    "level": "入门",
    "minutes": 10,
    "module": "样式实践"
  },
  {
    "cat": "css",
    "id": "position",
    "title": "定位与吸顶",
    "subtitle": "正常布局、绝对定位、固定定位和 sticky 表现不同。",
    "html": "<div class=\"position-demo\">\n  <div class=\"position-head\">↟ 这里是 sticky 吸顶工具栏，滚动看看</div>\n  <div class=\"position-card\">\n    <b>这个卡片在正常布局里</b>\n    <p>右上角的小圆点使用 absolute。</p>\n    <span class=\"badge-dot\">3</span>\n  </div>\n  <div class=\"position-row\">内容段落 1：请尝试在这个区域里滚动页面。</div>\n  <div class=\"position-row\">内容段落 2：请尝试在这个区域里滚动页面。</div>\n  <div class=\"position-row\">内容段落 3：请尝试在这个区域里滚动页面。</div>\n  <div class=\"position-row\">内容段落 4：请尝试在这个区域里滚动页面。</div>\n  <div class=\"position-row\">内容段落 5：请尝试在这个区域里滚动页面。</div>\n  <button class=\"floating\">＋</button>\n</div>",
    "css": ".position-demo {\n  position: relative;\n  padding: 0 22px 25px;\n  min-height: 570px;\n}\n.position-head {\n  position: sticky;\n  top: 0;\n  z-index: 2;\n  background: #173e55;\n  color: white;\n  text-align: center;\n  padding: 15px;\n  font-size: 0.82rem;\n}\n.position-card {\n  position: relative;\n  background: white;\n  padding: 30px;\n  margin: 18px 0;\n  border-radius: var(--lab-radius);\n  border: 1px solid #dbe3ef;\n}\n.position-card p {\n  color: #8090a0;\n  font-size: 0.8rem;\n}\n.badge-dot {\n  position: absolute;\n  right: -10px;\n  top: -10px;\n  background: #e94d70;\n  color: white;\n  border-radius: 50%;\n  padding: 5px 11px;\n}\n.position-row {\n  padding: 35px 16px;\n  background: white;\n  border: 1px solid #e5ebef;\n  border-radius: 10px;\n  margin: 12px 0;\n}\n.floating {\n  position: fixed;\n  bottom: 18px;\n  right: 18px;\n  border: 0;\n  color: white;\n  border-radius: 50%;\n  height: 48px;\n  width: 48px;\n  font-size: 1.3rem;\n  background: var(--lab-accent);\n  box-shadow: 0 6px 18px #295db53b;\n}",
    "js": "",
    "what": "定位决定元素是否随着普通内容排列、是否覆盖其他元素，以及滚动时会不会留在可视区域。",
    "uses": [
      "吸顶导航",
      "消息角标",
      "悬浮按钮",
      "工具栏"
    ],
    "observe": [
      "右上角红色徽标与卡片绑定",
      "顶部蓝色条使用 sticky",
      "悬浮加号不跟着段落自然排列"
    ],
    "challenge": "将 position-head 的 sticky 改成 static，滚动比较。",
    "tags": [
      "position",
      "sticky"
    ],
    "doc": "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Positioning",
    "level": "入门",
    "minutes": 10,
    "module": "样式实践"
  },
  {
    "cat": "css",
    "id": "hover",
    "title": "悬浮、焦点与状态",
    "subtitle": "鼠标、键盘进入不同状态时，元素外观可以改变。",
    "html": "<div class=\"states-demo\">\n  <h2>把鼠标放在卡片上</h2>\n  <div class=\"state-cards\">\n    <button class=\"state-card\">\n      <span>↗</span>\n      <b>悬浮效果</b>\n      <small>hover：移动鼠标试试</small>\n    </button>\n    <button class=\"state-card\">\n      <span>⌘</span>\n      <b>键盘焦点</b>\n      <small>使用 Tab 切换到这里</small>\n    </button>\n    <button class=\"state-card\" disabled>\n      <span>⊘</span>\n      <b>禁用状态</b>\n      <small>不能进行操作</small>\n    </button>\n  </div>\n</div>",
    "css": ".states-demo {\n  padding: 28px;\n}\n.state-cards {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: var(--lab-gap);\n}\n.state-card {\n  border: 1px solid #e3eaf1;\n  background: white;\n  border-radius: var(--lab-radius);\n  height: 155px;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  justify-content: center;\n  transition:\n    transform 0.2s,\n    box-shadow 0.2s,\n    color 0.2s;\n}\n.state-card span {\n  font-size: 2rem;\n  color: var(--lab-accent);\n}\n.state-card b {\n  font-size: 0.85rem;\n  margin: 8px;\n}\n.state-card small {\n  color: #8b99a6;\n  font-size: 0.67rem;\n}\n.state-card:hover:not(:disabled) {\n  transform: translateY(-6px);\n  box-shadow: 0 14px 25px #263e542a;\n}\n.state-card:focus-visible {\n  outline: 3px solid var(--lab-accent);\n  outline-offset: 3px;\n}\n.state-card:disabled {\n  opacity: 0.35;\n  cursor: not-allowed;\n}\n@media (max-width: 550px) {\n  .state-cards {\n    grid-template-columns: 1fr;\n  }\n  .state-card {\n    height: 100px;\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .state-card {\n    transition: none;\n  }\n}",
    "js": "",
    "what": "CSS 可以根据元素状态改变外观。鼠标悬浮与键盘焦点是两种不同的状态。",
    "uses": [
      "按钮",
      "卡片",
      "导航",
      "表单"
    ],
    "observe": [
      "hover 对鼠标有效，但触屏不能依赖悬浮",
      "focus-visible 对键盘使用者很重要",
      "disabled 表示不可操作"
    ],
    "challenge": "把 hover 的 translateY(-6px) 改成 -15px，再观察是否太夸张。",
    "tags": [
      "hover",
      "焦点",
      "无障碍"
    ],
    "doc": "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference",
    "level": "入门",
    "minutes": 10,
    "module": "样式实践"
  },
  {
    "cat": "css",
    "id": "transitions",
    "title": "过渡与动画",
    "subtitle": "过渡让状态变化更柔和；动画可执行多个关键帧。",
    "html": "<div class=\"motion-demo\">\n  <h2>把鼠标移动到左边方块上</h2>\n  <div class=\"motion-row\">\n    <div class=\"transition-box\">悬浮我</div>\n    <div class=\"animate-box\">呼吸动画</div>\n    <div class=\"loader\">\n      <i></i>\n      <i></i>\n      <i></i>\n    </div>\n  </div>\n  <p>提示：动效应该帮助理解状态，而不是只为了复杂。</p>\n</div>",
    "css": ".motion-demo {\n  padding: 25px;\n}\n.motion-demo h2 {\n  margin: 0 0 30px;\n}\n.motion-row {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: var(--lab-gap);\n  align-items: center;\n}\n.motion-row > div {\n  height: 140px;\n  border-radius: var(--lab-radius);\n  display: grid;\n  place-items: center;\n  text-align: center;\n  font-size: 0.82rem;\n}\n.transition-box {\n  background: #bdd5fb;\n  color: #365da1;\n  transition:\n    background 0.35s,\n    transform 0.35s;\n}\n.transition-box:hover {\n  transform: rotate(7deg) scale(1.08);\n  background: #edc4d8;\n}\n.animate-box {\n  background: #b4e9d9;\n  color: #2f8073;\n  animation: breathe 2s ease-in-out infinite;\n}\n.loader {\n  display: flex !important;\n  gap: 8px;\n  justify-content: center;\n  background: white;\n}\n.loader i {\n  width: 14px;\n  height: 14px;\n  border-radius: 50%;\n  background: var(--lab-accent);\n  animation: bounce 0.9s infinite alternate;\n}\n.loader i:nth-child(2) {\n  animation-delay: 0.15s;\n}\n.loader i:nth-child(3) {\n  animation-delay: 0.3s;\n}\n@keyframes breathe {\n  50% {\n    transform: scale(0.92);\n    opacity: 0.65;\n  }\n}\n@keyframes bounce {\n  to {\n    transform: translateY(-20px);\n    opacity: 0.4;\n  }\n}\n.motion-demo p {\n  font-size: 0.78rem;\n  color: #8493a0;\n  margin-top: 20px;\n}\n@media (prefers-reduced-motion: reduce) {\n  .animate-box,\n  .loader i {\n    animation: none;\n  }\n  .transition-box {\n    transition: none;\n  }\n}\n@media (max-width: 430px) {\n  .motion-row {\n    grid-template-columns: 1fr;\n  }\n  .motion-row > div {\n    height: 85px;\n  }\n}",
    "js": "",
    "what": "transition 常用于 hover 等状态之间的变化；animation 可自动按关键帧重复播放。",
    "uses": [
      "按钮反馈",
      "页面加载",
      "状态切换",
      "提示动画"
    ],
    "observe": [
      "左边只有悬浮才变化",
      "中间和右边会持续动",
      "尊重系统的减少动画偏好"
    ],
    "challenge": "将 breathe 2s 改成 5s，比对节奏快慢。",
    "tags": [
      "动画",
      "过渡"
    ],
    "doc": "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference",
    "level": "入门",
    "minutes": 10,
    "module": "样式实践"
  },
  {
    "cat": "css",
    "id": "overflow",
    "title": "溢出、滚动与截断",
    "subtitle": "内容超出容器时，可以滚动、裁剪或省略。",
    "html": "<div class=\"overflow-demo\">\n  <h2>长内容该怎么处理？</h2>\n  <div class=\"overflow-grid\">\n    <section class=\"surface\">\n      <h3>限定高度 + 滚动</h3>\n      <div class=\"scroll-box\">\n        <p>这是第 1 段内容，可以在盒子内部单独滚动。</p>\n        <p>这是第 2 段内容，可以在盒子内部单独滚动。</p>\n        <p>这是第 3 段内容，可以在盒子内部单独滚动。</p>\n        <p>这是第 4 段内容，可以在盒子内部单独滚动。</p>\n        <p>这是第 5 段内容，可以在盒子内部单独滚动。</p>\n        <p>这是第 6 段内容，可以在盒子内部单独滚动。</p>\n        <p>这是第 7 段内容，可以在盒子内部单独滚动。</p>\n        <p>这是第 8 段内容，可以在盒子内部单独滚动。</p>\n      </div>\n    </section>\n    <section class=\"surface\">\n      <h3>单行省略号</h3>\n      <p class=\"ellipsis\">\n        这里有一段非常非常非常非常非常非常非常长的文章标题，空间不够时会显示省略号。\n      </p>\n      <h3>自动换行</h3>\n      <p class=\"wraptext\">\n        very-long-file-name-example-with-no-spaces-and-more-letters-2026.zip\n      </p>\n    </section>\n  </div>\n</div>",
    "css": ".overflow-demo {\n  padding: 20px;\n}\n.overflow-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: var(--lab-gap);\n}\n.overflow-grid section {\n  padding: 14px;\n  min-width: 0;\n}\n.overflow-grid h3 {\n  font-size: 0.86rem;\n}\n.scroll-box {\n  height: 180px;\n  overflow: auto;\n  background: #f1f6fe;\n  padding: 10px;\n  border-radius: 8px;\n}\n.scroll-box p {\n  font-size: 0.76rem;\n  border-bottom: 1px solid #dce8f3;\n  padding: 7px;\n}\n.ellipsis {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: block;\n  background: #e8f0ff;\n  padding: 13px;\n}\n.wraptext {\n  overflow-wrap: anywhere;\n  color: #6d849c;\n}\n@media (max-width: 500px) {\n  .overflow-grid {\n    grid-template-columns: 1fr;\n  }\n}",
    "js": "",
    "what": "当内容超过容器宽度或高度，需要决定让它滚动、截断还是换行，否则很容易把页面撑坏。",
    "uses": [
      "长标题",
      "代码",
      "消息列表",
      "手机端表格"
    ],
    "observe": [
      "左边内部有独立滚动",
      "右上只显示一行并带省略号",
      "右下长文件名也能换行"
    ],
    "challenge": "把 scroll-box 的 overflow:auto 改成 hidden，看看内容去哪了。",
    "tags": [
      "溢出",
      "滚动"
    ],
    "doc": "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference",
    "level": "入门",
    "minutes": 10,
    "module": "样式实践"
  },
  {
    "cat": "css",
    "id": "responsive",
    "title": "响应式：三栏变一栏",
    "subtitle": "同样的数据，在不同窗口宽度下自动重新排列。",
    "html": "<div class=\"responsive-demo\">\n  <header>自适应知识中心</header>\n  <div class=\"response-columns\">\n    <aside>\n      课程列表\n      <br />\n      <small>HTML / CSS / JS</small>\n    </aside>\n    <main>\n      <h2>文章正文</h2>\n      <p>窗口变窄以后，正文优先保留。</p>\n      <div class=\"line\"></div>\n      <div class=\"line short\"></div>\n    </main>\n    <aside>\n      文章目录\n      <br />\n      <small>开始 / 练习</small>\n    </aside>\n  </div>\n</div>",
    "css": ".responsive-demo header {\n  background: #1f677e;\n  color: white;\n  padding: 18px;\n  text-align: center;\n  font-weight: 800;\n}\n.response-columns {\n  display: grid;\n  grid-template-columns: 145px minmax(0, 1fr) 135px;\n  gap: var(--lab-gap);\n  padding: 17px;\n}\n.response-columns > aside,\n.response-columns > main {\n  padding: 18px;\n  background: white;\n  border: 1px solid #e5eef3;\n  border-radius: var(--lab-radius);\n}\n.response-columns small {\n  color: #8295a3;\n}\n.response-columns main h2 {\n  margin: 0;\n}\n@media (max-width: 800px) {\n  .response-columns {\n    grid-template-columns: 140px minmax(0, 1fr);\n  }\n  .response-columns > aside:last-child {\n    display: none;\n  }\n}\n@media (max-width: 540px) {\n  .response-columns {\n    grid-template-columns: 1fr;\n  }\n  .response-columns > aside:first-child {\n    display: none;\n  }\n}",
    "js": "",
    "what": "响应式不是把电脑整体缩小，而是根据空间变化，让重要内容保留、次要内容折叠或重排。",
    "uses": [
      "所有多端网页",
      "教程",
      "后台",
      "商品页面"
    ],
    "observe": [
      "大屏三栏",
      "中屏两栏",
      "手机屏只保留正文"
    ],
    "challenge": "切换上方电脑、平板和手机三种尺寸，对照不同断点的实际结果。",
    "tags": [
      "响应式",
      "PC",
      "手机"
    ],
    "doc": "https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Media_queries",
    "level": "入门",
    "minutes": 10,
    "module": "样式实践"
  },
  {
    "cat": "css",
    "id": "container",
    "title": "容器查询：组件自己适配",
    "subtitle": "同一张卡片可以根据父容器宽度改变内部排布。",
    "html": "<div class=\"container-demo\">\n  <h2>同样的组件，放在不同宽度的容器</h2>\n  <div class=\"container-cols\">\n    <div class=\"wide-container\">\n      <article class=\"responsive-card\">\n        <div class=\"responsive-image\">◈</div>\n        <div>\n          <h3>设计简报</h3>\n          <p>宽容器：图片与文字可以横向排列。</p>\n          <button class=\"btn\">阅读全文</button>\n        </div>\n      </article>\n    </div>\n    <div class=\"narrow-container\">\n      <article class=\"responsive-card\">\n        <div class=\"responsive-image\">◈</div>\n        <div>\n          <h3>设计简报</h3>\n          <p>窄容器：自动纵向排列。</p>\n          <button class=\"btn\">阅读全文</button>\n        </div>\n      </article>\n    </div>\n  </div>\n</div>",
    "css": ".container-demo {\n  padding: 19px;\n}\n.container-demo h2 {\n  font-size: 1.1rem;\n}\n.container-cols {\n  display: grid;\n  grid-template-columns: 2fr 1fr;\n  gap: var(--lab-gap);\n  margin-top: 20px;\n}\n.wide-container,\n.narrow-container {\n  container-type: inline-size;\n  min-width: 0;\n}\n.responsive-card {\n  border: 1px solid #e5ecf3;\n  border-radius: var(--lab-radius);\n  background: white;\n  padding: 13px;\n  display: flex;\n  flex-direction: column;\n  gap: var(--lab-gap);\n}\n.responsive-card .responsive-image {\n  background: #c6dff3;\n  border-radius: 8px;\n  height: 115px;\n  display: grid;\n  place-items: center;\n  font-size: 2rem;\n  color: #548ab1;\n}\n.responsive-card p {\n  color: #7c8e9d;\n  font-size: 0.73rem;\n}\n.responsive-card h3 {\n  font-size: 0.9rem;\n  margin: 4px 0;\n}\n.responsive-card .btn {\n  font-size: 0.72rem;\n}\n@container (min-width:340px) {\n  .responsive-card {\n    flex-direction: row;\n  }\n  .responsive-card .responsive-image {\n    width: 42%;\n    flex-shrink: 0;\n    height: auto;\n    min-height: 130px;\n  }\n}\n@media (max-width: 480px) {\n  .container-cols {\n    grid-template-columns: 1fr;\n  }\n}",
    "js": "",
    "what": "媒体查询通常看整个窗口；容器查询则看组件自己的容器宽度。",
    "uses": [
      "复用文章卡片",
      "复杂工作台",
      "响应式组件库"
    ],
    "observe": [
      "左侧宽卡片横向显示",
      "右侧窄卡片纵向显示",
      "与整个浏览器窗口宽度不是一回事"
    ],
    "challenge": "把 @container 的 min-width:340px 改成 180px，观察两边卡片的变化。",
    "tags": [
      "容器查询",
      "适配"
    ],
    "doc": "https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries",
    "level": "入门",
    "minutes": 10,
    "module": "样式实践"
  },
  {
    "cat": "css",
    "id": "transform",
    "title": "变换、旋转与缩放",
    "subtitle": "transform 能在不直接重排普通文档流的情况下改变视觉呈现。",
    "html": "<div class=\"transform-demo\">\n  <h2>不同变换效果</h2>\n  <div class=\"transform-grid\">\n    <div class=\"tcard rotate\">旋转 rotate</div>\n    <div class=\"tcard scale\">缩放 scale</div>\n    <div class=\"tcard translate\">位移 translate</div>\n    <div class=\"tcard skew\">倾斜 skew</div>\n  </div>\n  <p class=\"muted\">把鼠标移上去，观察卡片的变化。</p>\n</div>",
    "css": ".transform-demo {\n  padding: 25px;\n  text-align: center;\n}\n.transform-grid {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: var(--lab-gap);\n  margin: 50px 0;\n}\n.tcard {\n  background: #d4e6fb;\n  color: #32668e;\n  padding: 28px 7px;\n  font-size: 0.8rem;\n  border-radius: var(--lab-radius);\n  transition: transform 0.3s;\n}\n.rotate:hover {\n  transform: rotate(12deg);\n}\n.scale:hover {\n  transform: scale(1.2);\n}\n.translate:hover {\n  transform: translateY(-23px);\n}\n.skew:hover {\n  transform: skew(-12deg);\n}\n@media (max-width: 510px) {\n  .transform-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}",
    "js": "",
    "what": "transform 可以旋转、缩放、移动、倾斜。它修改的是视觉变换，不等于重新安排整个页面结构。",
    "uses": [
      "悬浮反馈",
      "图标",
      "动画",
      "局部视觉效果"
    ],
    "observe": [
      "有的卡片变化后会覆盖邻近空间",
      "视觉移动不一定改变周围元素的位置",
      "过量变换会降低可读性"
    ],
    "challenge": "试着把 rotate(12deg) 改成 rotate(45deg)。",
    "tags": [
      "transform",
      "动效"
    ],
    "doc": "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference",
    "level": "入门",
    "minutes": 10,
    "module": "样式实践"
  },
  {
    "cat": "css",
    "id": "css-selectors",
    "title": "选择器与伪类",
    "subtitle": "同一份 HTML，可以根据标签、类和状态找到不同对象。",
    "html": "<div class=\"selector-demo\">\n  <h2>任务列表</h2>\n  <ul class=\"selector-list\">\n    <li class=\"important\">重要任务：完成首页</li>\n    <li>普通任务：整理文章</li>\n    <li class=\"done\">已完成：创建项目</li>\n    <li>普通任务：优化表单</li>\n  </ul>\n  <button class=\"btn\">把鼠标放在这里</button>\n  <p>试试编辑 li、.important、:hover 对应的 CSS。</p>\n</div>",
    "css": ".selector-demo {\n  padding: 25px;\n}\n.selector-list {\n  list-style: none;\n  padding: 0;\n}\n.selector-list li {\n  padding: 13px;\n  margin-bottom: 9px;\n  background: white;\n  border: 1px solid #e9edf2;\n  border-radius: 8px;\n}\n.selector-list li.important {\n  border-left: 5px solid #f29b63;\n}\n.selector-list li.done {\n  color: #9da9b0;\n  text-decoration: line-through;\n}\n.selector-list li:hover {\n  background: #eef5ff;\n}\n.selector-demo p {\n  font-size: 0.76rem;\n  color: #8193a1;\n}",
    "js": "",
    "what": "选择器决定“给哪些元素应用样式”，例如所有 li、特定类 .important，或鼠标经过的 :hover。",
    "uses": [
      "主题统一",
      "列表状态",
      "按钮反馈"
    ],
    "observe": [
      "基础 li 规则影响所有列表项",
      "类名可以让一个元素单独突出",
      "hover 不是元素本身的数据状态"
    ],
    "challenge": "把 .important 的边框颜色改成蓝色，再移动鼠标观察其他状态。",
    "tags": [
      "选择器",
      "伪类"
    ],
    "doc": "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference",
    "level": "入门",
    "minutes": 10,
    "module": "样式实践"
  },
  {
    "cat": "css",
    "id": "filters",
    "title": "滤镜与裁剪",
    "subtitle": "视觉特效可以模糊、改变饱和度、裁切形状。",
    "html": "<div class=\"filters-demo\">\n  <h2>同一张视觉块的四种表现</h2>\n  <div class=\"filter-grid\">\n    <div>\n      <div class=\"filter-art normal\">◉</div>\n      <small>原始</small>\n    </div>\n    <div>\n      <div class=\"filter-art blur\">◉</div>\n      <small>模糊 blur</small>\n    </div>\n    <div>\n      <div class=\"filter-art gray\">◉</div>\n      <small>灰度 grayscale</small>\n    </div>\n    <div>\n      <div class=\"filter-art clipped\">◉</div>\n      <small>裁剪 clip-path</small>\n    </div>\n  </div>\n</div>",
    "css": ".filters-demo {\n  padding: 24px;\n}\n.filter-grid {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: var(--lab-gap);\n  text-align: center;\n  margin-top: 25px;\n}\n.filter-art {\n  height: 160px;\n  display: grid;\n  place-items: center;\n  background: linear-gradient(120deg, #78c6dd, #d2a7fa, #faab8a);\n  font-size: 4rem;\n  color: white;\n  border-radius: var(--lab-radius);\n}\n.filter-art.blur {\n  filter: blur(4px);\n}\n.filter-art.gray {\n  filter: grayscale(1);\n}\n.filter-art.clipped {\n  clip-path: polygon(50% 0%, 100% 30%, 85% 100%, 15% 100%, 0 30%);\n}\n.filter-grid small {\n  display: block;\n  margin-top: 10px;\n  font-size: 0.76rem;\n  color: #6f8292;\n}\n@media (max-width: 510px) {\n  .filter-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}",
    "js": "",
    "what": "filter 可改变渲染后的视觉效果；clip-path 可以控制元素显示出来的形状。",
    "uses": [
      "图片编辑",
      "头像裁剪",
      "背景特效",
      "品牌视觉"
    ],
    "observe": [
      "模糊会降低信息清晰度",
      "灰度改变颜色而非内容结构",
      "裁剪只显示指定形状内部"
    ],
    "challenge": "将 grayscale(1) 改为 grayscale(.3)。",
    "tags": [
      "滤镜",
      "裁剪"
    ],
    "doc": "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference",
    "level": "入门",
    "minutes": 10,
    "module": "样式实践"
  },
  {
    "cat": "js",
    "id": "events",
    "title": "点击事件与计数器",
    "subtitle": "点击按钮会改变页面中的数字；这就是最容易观察的 DOM 更新。",
    "html": "<div class=\"counter-demo\">\n  <div class=\"counter-icon\">⚡</div>\n  <h2>记录你的每一次点击</h2>\n  <div id=\"count\">0</div>\n  <p class=\"muted\">点击次数</p>\n  <div class=\"counter-actions\">\n    <button id=\"minus\">− 1</button>\n    <button id=\"reset\">重置</button>\n    <button id=\"plus\">+ 1</button>\n  </div>\n</div>",
    "css": ".counter-demo {\n  max-width: 440px;\n  margin: 25px auto;\n  background: white;\n  padding: 33px 22px;\n  text-align: center;\n  border: 1px solid #e9edf2;\n  border-radius: var(--lab-radius);\n}\n.counter-icon {\n  font-size: 2rem;\n}\n.counter-demo h2 {\n  font-size: 1.15rem;\n}\n.counter-demo #count {\n  font-size: 4rem;\n  font-weight: 850;\n  color: var(--lab-accent);\n}\n.counter-actions {\n  display: flex;\n  justify-content: center;\n  gap: var(--lab-gap);\n}\n.counter-actions button {\n  background: #e8f0fb;\n  color: #2b6086;\n  border: 0;\n  padding: 12px 17px;\n  border-radius: 8px;\n}",
    "js": "let n = 0;\nconst value = document.getElementById('count');\nfunction update() {\n  value.textContent = n;\n}\ndocument.getElementById('plus').addEventListener('click', () => {\n  n++;\n  update();\n});\ndocument.getElementById('minus').addEventListener('click', () => {\n  n--;\n  update();\n});\ndocument.getElementById('reset').addEventListener('click', () => {\n  n = 0;\n  update();\n});",
    "what": "通过 addEventListener 监听用户点击，再用 textContent 更新页面。",
    "uses": [
      "点赞",
      "购物数量",
      "投票",
      "计数器"
    ],
    "observe": [
      "只有用户触发后数字才变化",
      "重复点击持续改变状态",
      "重置操作能恢复初始值"
    ],
    "challenge": "将每次 +1 改为 +5，并让重置值改为 10。",
    "tags": [
      "DOM",
      "点击",
      "事件"
    ],
    "doc": "https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Events",
    "level": "入门",
    "minutes": 15,
    "module": "交互实践"
  },
  {
    "cat": "js",
    "id": "tabs-js",
    "title": "标签页切换",
    "subtitle": "一次显示一组内容，点击不同标签切换相应面板。",
    "html": "<div class=\"tabs-demo\">\n  <h2>学习资源</h2>\n  <div class=\"tabs\" role=\"tablist\" aria-label=\"资源分类\">\n    <button class=\"active\" role=\"tab\" aria-selected=\"true\" data-tab=\"html\">HTML</button>\n    <button role=\"tab\" aria-selected=\"false\" data-tab=\"css\">CSS</button>\n    <button role=\"tab\" aria-selected=\"false\" data-tab=\"js\">JavaScript</button>\n  </div>\n  <div id=\"tabPanel\" role=\"tabpanel\">\n    <h3>HTML：内容和结构</h3>\n    <p>定义标题、段落、图片、表格和输入控件。</p>\n  </div>\n</div>",
    "css": ".tabs-demo {\n  max-width: 560px;\n  margin: 25px auto;\n  background: white;\n  padding: 24px;\n  border-radius: var(--lab-radius);\n}\n.tabs-demo h2 {\n  margin: 0 0 15px;\n}\n.tabs {\n  display: flex;\n  border-bottom: 1px solid #e1e9ef;\n}\n.tabs button {\n  border: 0;\n  background: transparent;\n  padding: 14px 18px;\n  color: #93a3b1;\n}\n.tabs button.active {\n  color: var(--lab-accent);\n  border-bottom: 2px solid var(--lab-accent);\n  font-weight: 700;\n}\n#tabPanel {\n  padding: 19px;\n  background: #f4f8fe;\n  margin-top: 14px;\n  border-radius: 9px;\n  min-height: 135px;\n}\n#tabPanel h3 {\n  margin: 0 0 10px;\n}\n#tabPanel p {\n  font-size: 0.84rem;\n  color: #718294;\n}",
    "js": "const tabData = {\n  html: ['HTML：内容和结构', '定义标题、段落、图片、表格和输入控件。'],\n  css: ['CSS：外观与布局', '控制颜色、字体、间距、网格与响应式效果。'],\n  js: ['JavaScript：交互行为', '监听事件、改变内容、校验表单与控制界面状态。'],\n};\ndocument.querySelectorAll('[data-tab]').forEach((button) =>\n  button.addEventListener('click', () => {\n    document.querySelectorAll('[data-tab]').forEach((item) => {\n      item.classList.remove('active');\n      item.setAttribute('aria-selected', 'false');\n    });\n    button.classList.add('active');\n    button.setAttribute('aria-selected', 'true');\n    const [title, desc] = tabData[button.dataset.tab];\n    document.getElementById('tabPanel').innerHTML =\n      '<h3>' + title + '</h3><p>' + desc + '</p>';\n  }),\n);",
    "what": "JS 控制当前被选中的标签，并更新面板内容；这类组件适合少量、同级的内容切换。",
    "uses": [
      "产品详情",
      "个人主页",
      "设置",
      "教程分组"
    ],
    "observe": [
      "选中状态和展示内容要对应",
      "标签切换通常不需要刷新整个页面",
      "真实产品需要完整键盘导航等可访问行为"
    ],
    "challenge": "增加第四个标签“练习”，并在 tabData 中补充内容。",
    "tags": [
      "Tabs",
      "组件"
    ],
    "doc": "https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Events",
    "level": "入门",
    "minutes": 15,
    "module": "交互实践"
  },
  {
    "cat": "js",
    "id": "modal",
    "title": "弹窗与确认",
    "subtitle": "一个浮在页面上方的对话框，支持打开、关闭与 Esc。",
    "html": "<div class=\"dialog-page\">\n  <h2>安全地确认重要操作</h2>\n  <p>一些操作需要用户再确认一次，例如删除记录。</p>\n  <button id=\"openModal\" class=\"btn\">删除示例记录</button>\n  <p id=\"modalResult\" class=\"muted\"></p>\n  <div id=\"overlay\" class=\"overlay\" hidden>\n    <div class=\"dialog\" role=\"dialog\" aria-modal=\"true\" aria-labelledby=\"dialogTitle\">\n      <div class=\"warning\">!</div>\n      <h3 id=\"dialogTitle\">确定删除记录吗？</h3>\n      <p>这是一个演示弹窗。取消后不会改变数据。</p>\n      <div class=\"dialog-actions\">\n        <button id=\"cancelModal\">取消</button>\n        <button id=\"confirmModal\">确认删除</button>\n      </div>\n    </div>\n  </div>\n</div>",
    "css": ".dialog-page {\n  padding: 40px 20px;\n  min-height: 320px;\n  text-align: center;\n}\n.dialog-page p {\n  color: #7d8a97;\n}\n.overlay[hidden] {\n  display: none;\n}\n.overlay {\n  position: fixed;\n  inset: 0;\n  background: #1427399c;\n  display: grid;\n  place-items: center;\n  padding: 16px;\n  z-index: 20;\n}\n.dialog {\n  background: white;\n  border-radius: var(--lab-radius);\n  padding: 27px;\n  max-width: 370px;\n  text-align: center;\n  box-shadow: 0 15px 45px #10283944;\n}\n.dialog .warning {\n  display: grid;\n  place-items: center;\n  border-radius: 50%;\n  height: 42px;\n  width: 42px;\n  background: #ffe9e4;\n  color: #c95d40;\n  font-size: 1.4rem;\n  margin: auto;\n}\n.dialog h3 {\n  margin: 15px 0 5px;\n}\n.dialog p {\n  font-size: 0.8rem;\n}\n.dialog-actions {\n  display: flex;\n  justify-content: center;\n  gap: 12px;\n  margin-top: 24px;\n}\n.dialog-actions button {\n  border: 1px solid #dfe8ef;\n  background: #f7fafc;\n  padding: 10px 18px;\n  border-radius: 8px;\n}\n.dialog-actions button:last-child {\n  background: #d85853;\n  color: white;\n  border-color: #d85853;\n}",
    "js": "const overlay = document.getElementById('overlay');\nconst open = document.getElementById('openModal');\nconst cancel = document.getElementById('cancelModal');\nconst confirm = document.getElementById('confirmModal');\nfunction hide() {\n  overlay.hidden = true;\n  open.focus();\n}\nopen.addEventListener('click', () => {\n  overlay.hidden = false;\n  cancel.focus();\n});\ncancel.addEventListener('click', hide);\nconfirm.addEventListener('click', () => {\n  document.getElementById('modalResult').textContent = '模拟删除成功';\n  hide();\n});\noverlay.addEventListener('click', (event) => {\n  if (event.target === overlay) hide();\n});\ndocument.addEventListener('keydown', (event) => {\n  if (event.key === 'Escape' && !overlay.hidden) hide();\n});",
    "what": "弹窗是覆盖在原页面上的临时交互，通常包含背景遮罩与明确的退出方式。",
    "uses": [
      "删除确认",
      "登录提示",
      "重要通知"
    ],
    "observe": [
      "打开时覆盖当前内容",
      "取消或 Esc 可关闭",
      "真正的完整模态框还需实现焦点限制等无障碍细节"
    ],
    "challenge": "修改弹窗文案，再尝试 Esc、点击遮罩和确认三种不同路径。",
    "tags": [
      "弹窗",
      "状态"
    ],
    "doc": "https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/",
    "level": "入门",
    "minutes": 15,
    "module": "交互实践"
  },
  {
    "cat": "js",
    "id": "search-js",
    "title": "即时搜索与筛选",
    "subtitle": "输入关键词，列表中的项目实时筛选。",
    "html": "<div class=\"search-demo\">\n  <h2>搜索知识文章</h2>\n  <label>\n    <span class=\"sr\">搜索文章</span>\n    <input\n      id=\"query\"\n      type=\"search\"\n      placeholder=\"⌕ 试试输入 HTML、CSS、Java...\"\n      autocomplete=\"off\"\n    />\n  </label>\n  <p id=\"resultCount\" class=\"muted\">找到 6 条结果</p>\n  <div id=\"results\"></div>\n</div>",
    "css": ".search-demo {\n  max-width: 590px;\n  margin: 20px auto;\n  background: #fff;\n  padding: 22px;\n  border-radius: var(--lab-radius);\n}\n.search-demo h2 {\n  margin: 0 0 15px;\n}\n.search-demo input {\n  width: 100%;\n  border: 1px solid #dfe8ef;\n  border-radius: 9px;\n  padding: 12px;\n  outline-color: var(--lab-accent);\n}\n.search-demo .muted {\n  font-size: 0.77rem;\n}\n.result-item {\n  padding: 13px 0;\n  border-bottom: 1px solid #edf0f3;\n}\n.result-item b {\n  display: block;\n  font-size: 0.83rem;\n}\n.result-item span {\n  font-size: 0.73rem;\n  color: #82919f;\n}\n.no-results {\n  padding: 24px;\n  text-align: center;\n  color: #94a1af;\n}",
    "js": "const articles = [\n  'HTML 标签一览',\n  'CSS 网格布局',\n  'JavaScript 事件监听',\n  'HTML 表单基础',\n  'CSS 动画效果',\n  'JavaScript 数组与对象',\n];\nconst q = document.getElementById('query'),\n  list = document.getElementById('results'),\n  count = document.getElementById('resultCount');\nfunction render() {\n  const items = articles.filter((s) =>\n    s.toLowerCase().includes(q.value.trim().toLowerCase()),\n  );\n  count.textContent = '找到 ' + items.length + ' 条结果';\n  list.replaceChildren();\n  if (!items.length) {\n    const p = document.createElement('p');\n    p.className = 'no-results';\n    p.textContent = '没有匹配的文章，换个关键词试试';\n    list.append(p);\n  }\n  items.forEach((text, i) => {\n    const el = document.createElement('div');\n    el.className = 'result-item';\n    const b = document.createElement('b');\n    b.textContent = text;\n    const s = document.createElement('span');\n    s.textContent = '示例文章 · 阅读 ' + (i + 3) + ' 分钟';\n    el.append(b, s);\n    list.append(el);\n  });\n}\nq.addEventListener('input', render);\nrender();",
    "what": "监听输入事件，在已有数据中筛选项目并显示结果数量，不需要连接后端。",
    "uses": [
      "文章搜索",
      "商品过滤",
      "联系人搜索",
      "本地设置"
    ],
    "observe": [
      "输入内容变化就触发更新",
      "没有结果时显示空状态",
      "此示例搜索的是内置本地数组，不是网络接口"
    ],
    "challenge": "往 articles 数组里增加两篇文章，搜索你的关键词。",
    "tags": [
      "搜索",
      "input",
      "过滤"
    ],
    "doc": "https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Events",
    "level": "入门",
    "minutes": 15,
    "module": "交互实践"
  },
  {
    "cat": "js",
    "id": "validation",
    "title": "表单校验与反馈",
    "subtitle": "输入不符合要求时，立即说明原因。",
    "html": "<form class=\"validation\" id=\"register\" novalidate>\n  <h2>创建示例账号</h2>\n  <label>\n    昵称\n    <input id=\"nickname\" placeholder=\"至少 3 个字\" autocomplete=\"off\" />\n  </label>\n  <small id=\"nameError\"></small>\n  <label>\n    邮箱\n    <input id=\"email\" type=\"email\" placeholder=\"例如 hello@example.com\" />\n  </label>\n  <small id=\"emailError\"></small>\n  <label>\n    密码\n    <input id=\"password\" type=\"password\" placeholder=\"至少 6 个字符\" />\n  </label>\n  <small id=\"passwordError\"></small>\n  <button class=\"btn\">提交校验</button>\n  <p id=\"validationResult\" aria-live=\"polite\"></p>\n</form>",
    "css": ".validation {\n  max-width: 480px;\n  margin: 22px auto;\n  background: white;\n  border: 1px solid #e8edf2;\n  border-radius: var(--lab-radius);\n  padding: 25px;\n}\n.validation h2 {\n  margin: 0 0 18px;\n}\n.validation label {\n  display: block;\n  font-size: 0.8rem;\n  font-weight: 700;\n  margin: 15px 0 5px;\n}\n.validation input {\n  display: block;\n  width: 100%;\n  padding: 12px;\n  border: 1px solid #dfe6eb;\n  border-radius: 8px;\n  margin-top: 7px;\n}\n.validation small {\n  color: #dc5354;\n  display: block;\n  min-height: 14px;\n  font-size: 0.69rem;\n}\n.validation button {\n  width: 100%;\n  margin-top: 13px;\n}\n.validation p {\n  font-size: 0.79rem;\n  color: #16856a;\n}",
    "js": "document.getElementById('register').addEventListener('submit', (event) => {\n  event.preventDefault();\n  const name = document.getElementById('nickname').value.trim(),\n    email = document.getElementById('email').value.trim(),\n    password = document.getElementById('password').value;\n  const errors = [\n    name.length < 3 ? '昵称至少 3 个字符' : '',\n    !/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email) ? '请输入有效邮箱地址' : '',\n    password.length < 6 ? '密码至少 6 个字符' : '',\n  ];\n  ['nameError', 'emailError', 'passwordError'].forEach(\n    (id, i) => (document.getElementById(id).textContent = errors[i]),\n  );\n  document.getElementById('validationResult').textContent = errors.some(Boolean)\n    ? '请先修正上面的输入'\n    : '前端校验通过！此处未真正创建账号。';\n});",
    "what": "前端可以检查必填、长度和基本格式，并告诉用户如何修正；真实业务仍需要服务端再次验证。",
    "uses": [
      "注册",
      "登录",
      "下单",
      "资料编辑"
    ],
    "observe": [
      "错误信息出现在对应字段下面",
      "修正数据后可重新提交",
      "示例不保存真实账号或密码"
    ],
    "challenge": "把密码限制从 6 个字符改成 10 个字符。",
    "tags": [
      "表单",
      "校验"
    ],
    "doc": "https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Events",
    "level": "入门",
    "minutes": 15,
    "module": "交互实践"
  },
  {
    "cat": "js",
    "id": "sort",
    "title": "排序与过滤",
    "subtitle": "同一批数据，可以按价格或条件重新排列。",
    "html": "<div class=\"sort-demo\">\n  <div class=\"sort-head\">\n    <h2>商品列表</h2>\n    <select id=\"sorting\" aria-label=\"排序方式\">\n      <option value=\"default\">默认顺序</option>\n      <option value=\"asc\">价格从低到高</option>\n      <option value=\"desc\">价格从高到低</option>\n    </select>\n  </div>\n  <label class=\"only-sale\">\n    <input id=\"saleOnly\" type=\"checkbox\" />\n    只看优惠商品\n  </label>\n  <div id=\"productList\" class=\"products\"></div>\n</div>",
    "css": ".sort-demo {\n  padding: 23px;\n}\n.sort-head {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.sort-head h2 {\n  margin: 0;\n}\n.sort-head select {\n  padding: 10px;\n  border: 1px solid #e5eaf0;\n  border-radius: 8px;\n  background: white;\n  font-size: 0.77rem;\n}\n.only-sale {\n  font-size: 0.75rem;\n  display: block;\n  margin: 15px 0;\n}\n.products {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: var(--lab-gap);\n}\n.product {\n  background: white;\n  border-radius: var(--lab-radius);\n  border: 1px solid #e5ecf0;\n  padding: 12px;\n}\n.product > div {\n  height: 80px;\n  display: grid;\n  place-items: center;\n  background: #e5f1f5;\n  font-size: 2rem;\n  border-radius: 7px;\n}\n.product b,\n.product small {\n  display: block;\n  font-size: 0.75rem;\n  margin-top: 8px;\n}\n.product small {\n  color: var(--lab-accent);\n  font-weight: 700;\n}\n@media (max-width: 470px) {\n  .products {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}",
    "js": "const products = [\n  { name: '便携水杯', price: 79, sale: true, icon: '☕' },\n  { name: '无线耳机', price: 239, sale: false, icon: '♫' },\n  { name: '阅读台灯', price: 159, sale: true, icon: '✦' },\n  { name: '旅行背包', price: 299, sale: false, icon: '▣' },\n  { name: '桌面支架', price: 49, sale: true, icon: '△' },\n  { name: '蓝牙键盘', price: 189, sale: false, icon: '⌨' },\n];\nconst list = document.getElementById('productList');\nfunction draw() {\n  let items = products.filter(\n    (p) => !document.getElementById('saleOnly').checked || p.sale,\n  );\n  const order = document.getElementById('sorting').value;\n  if (order === 'asc') items.sort((a, b) => a.price - b.price);\n  if (order === 'desc') items.sort((a, b) => b.price - a.price);\n  list.replaceChildren();\n  items.forEach((p) => {\n    const card = document.createElement('div');\n    card.className = 'product';\n    const img = document.createElement('div');\n    img.textContent = p.icon;\n    const b = document.createElement('b');\n    b.textContent = p.name + (p.sale ? ' · 优惠' : '');\n    const s = document.createElement('small');\n    s.textContent = '¥' + p.price;\n    card.append(img, b, s);\n    list.append(card);\n  });\n}\ndocument.getElementById('sorting').addEventListener('change', draw);\ndocument.getElementById('saleOnly').addEventListener('change', draw);\ndraw();",
    "what": "排序改变列表顺序，筛选减少候选条目；二者可以同时生效。",
    "uses": [
      "电商",
      "数据管理",
      "搜索结果"
    ],
    "observe": [
      "排序不会改变商品本身的价格",
      "筛选只保留满足条件的对象",
      "同一份原始数据可生成多种展示"
    ],
    "challenge": "在 products 中增加一件价格更低的商品，然后测试升序。",
    "tags": [
      "排序",
      "筛选",
      "数组"
    ],
    "doc": "https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Events",
    "level": "入门",
    "minutes": 15,
    "module": "交互实践"
  },
  {
    "cat": "js",
    "id": "todo",
    "title": "待办清单：增删与完成",
    "subtitle": "一项完整的小交互包含添加、勾选、删除和数量更新。",
    "html": "<div class=\"todo-demo\">\n  <h2>今天要做什么？</h2>\n  <div class=\"add-row\">\n    <input id=\"taskInput\" placeholder=\"写下一项任务\" />\n    <button id=\"addTask\" class=\"btn\">添加</button>\n  </div>\n  <ul id=\"taskList\"></ul>\n  <small id=\"todoFooter\">0 个未完成任务</small>\n</div>",
    "css": ".todo-demo {\n  max-width: 530px;\n  margin: 22px auto;\n  background: white;\n  border-radius: var(--lab-radius);\n  padding: 23px;\n}\n.todo-demo h2 {\n  margin: 0 0 17px;\n}\n.add-row {\n  display: flex;\n  gap: 10px;\n}\n.add-row input {\n  padding: 11px;\n  border: 1px solid #dae4eb;\n  border-radius: 8px;\n  flex: 1;\n  min-width: 0;\n}\n#taskList {\n  list-style: none;\n  padding: 0;\n}\n#taskList li {\n  display: flex;\n  align-items: center;\n  gap: 11px;\n  border-bottom: 1px solid #edf2f5;\n  padding: 13px 2px;\n  font-size: 0.82rem;\n}\n#taskList li span {\n  flex: 1;\n}\n#taskList li.done span {\n  text-decoration: line-through;\n  color: #9aa5b0;\n}\n#taskList li button {\n  border: 0;\n  background: none;\n  color: #c75858;\n  font-size: 1rem;\n}\n#todoFooter {\n  color: #90a1ae;\n  font-size: 0.72rem;\n}",
    "js": "let tasks = [\n  { text: '认识网页三栏布局', done: true },\n  { text: '试一个 CSS 渐变', done: false },\n  { text: '写第一个点击事件', done: false },\n];\nconst ul = document.getElementById('taskList');\nfunction render() {\n  ul.replaceChildren();\n  tasks.forEach((t, i) => {\n    const li = document.createElement('li');\n    if (t.done) li.className = 'done';\n    const check = document.createElement('input');\n    check.type = 'checkbox';\n    check.checked = t.done;\n    check.setAttribute('aria-label', '完成 ' + t.text);\n    check.onchange = () => {\n      t.done = check.checked;\n      render();\n    };\n    const span = document.createElement('span');\n    span.textContent = t.text;\n    const del = document.createElement('button');\n    del.textContent = '×';\n    del.setAttribute('aria-label', '删除 ' + t.text);\n    del.onclick = () => {\n      tasks.splice(i, 1);\n      render();\n    };\n    li.append(check, span, del);\n    ul.append(li);\n  });\n  document.getElementById('todoFooter').textContent =\n    tasks.filter((t) => !t.done).length + ' 个未完成任务（刷新会重置）';\n}\nfunction addTask() {\n  const input = document.getElementById('taskInput');\n  if (!input.value.trim()) return;\n  tasks.push({ text: input.value.trim(), done: false });\n  input.value = '';\n  render();\n}\ndocument.getElementById('addTask').onclick = addTask;\ndocument.getElementById('taskInput').addEventListener('keydown', (e) => {\n  if (e.key === 'Enter') addTask();\n});\nrender();",
    "what": "典型的增删改查小界面：维护数据数组，然后把最新结果渲染到 DOM。这里仅用内存保存，刷新会重置。",
    "uses": [
      "清单",
      "购物车",
      "购物任务",
      "简单管理工具"
    ],
    "observe": [
      "添加会增加条目",
      "勾选会更新完成状态",
      "删除和计数联动"
    ],
    "challenge": "给初始 tasks 增加一项已完成任务，观察计数结果。",
    "tags": [
      "DOM",
      "数组",
      "状态"
    ],
    "doc": "https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Events",
    "level": "入门",
    "minutes": 15,
    "module": "交互实践"
  },
  {
    "cat": "js",
    "id": "carousel",
    "title": "轮播图：上一张与下一张",
    "subtitle": "通过按钮切换当前内容，位置可以循环。",
    "html": "<div class=\"carousel-demo\">\n  <div class=\"slide\" id=\"slide\">\n    <div class=\"slide-icon\" id=\"slideIcon\">◈</div>\n    <h2 id=\"slideTitle\">探索世界</h2>\n    <p id=\"slideDesc\">发现第一段故事</p>\n  </div>\n  <div class=\"slide-controls\">\n    <button id=\"prevSlide\">← 上一张</button>\n    <div id=\"dots\">● ○ ○</div>\n    <button id=\"nextSlide\">下一张 →</button>\n  </div>\n</div>",
    "css": ".carousel-demo {\n  padding: 21px;\n}\n.slide {\n  height: 270px;\n  background: linear-gradient(120deg, #b4d9ed, #8baee3);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  color: #193851;\n  text-align: center;\n  border-radius: var(--lab-radius);\n  transition: background 0.2s;\n}\n.slide-icon {\n  font-size: 4rem;\n  color: #ffffffd4;\n}\n.slide h2 {\n  font-size: 1.7rem;\n  margin: 5px;\n}\n.slide p {\n  font-size: 0.83rem;\n}\n.slide-controls {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-top: 12px;\n}\n.slide-controls button {\n  border: 1px solid #e1e9f0;\n  border-radius: 7px;\n  background: white;\n  padding: 9px 13px;\n  font-size: 0.78rem;\n}\n.slide-controls #dots {\n  color: var(--lab-accent);\n  font-size: 0.78rem;\n}",
    "js": "const slides = [\n  ['◈', '探索世界', '发现第一段故事', 'linear-gradient(120deg,#b4d9ed,#8baee3)'],\n  ['✿', '感受生活', '收藏每一份温柔', 'linear-gradient(120deg,#eac4df,#f8dfb3)'],\n  ['☼', '迎接未来', '从现在开始创造', 'linear-gradient(120deg,#a7debd,#9ecfd3)'],\n];\nlet index = 0;\nfunction update() {\n  const [icon, title, desc, bg] = slides[index];\n  document.getElementById('slideIcon').textContent = icon;\n  document.getElementById('slideTitle').textContent = title;\n  document.getElementById('slideDesc').textContent = desc;\n  document.getElementById('slide').style.background = bg;\n  document.getElementById('dots').textContent = slides\n    .map((_, i) => (i === index ? '●' : '○'))\n    .join(' ');\n}\ndocument.getElementById('prevSlide').onclick = () => {\n  index = (index + slides.length - 1) % slides.length;\n  update();\n};\ndocument.getElementById('nextSlide').onclick = () => {\n  index = (index + 1) % slides.length;\n  update();\n};",
    "what": "轮播组件用一个索引表示当前是哪张，用户前进或后退时更新画面。",
    "uses": [
      "首页展示",
      "图库",
      "产品故事"
    ],
    "observe": [
      "不是换整个网页，只替换当前内容",
      "最后一张可以循环回第一张",
      "小圆点反馈当前所在位置"
    ],
    "challenge": "在 slides 数组中再加一张“星空”卡片。",
    "tags": [
      "轮播",
      "组件"
    ],
    "doc": "https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Events",
    "level": "入门",
    "minutes": 15,
    "module": "交互实践"
  },
  {
    "cat": "js",
    "id": "theme",
    "title": "明暗主题切换",
    "subtitle": "点击开关，让整块界面在亮色和暗色之间切换。",
    "html": "<div class=\"theme-demo\" id=\"themeBox\">\n  <header>\n    <b>◈ 我的工作空间</b>\n    <button id=\"themeSwitch\" aria-pressed=\"false\">☾ 切换到深色</button>\n  </header>\n  <main>\n    <span class=\"chip\">主题演示</span>\n    <h2>不同的环境，同样舒适的阅读</h2>\n    <p>点击右上角按钮切换主题，观察背景、文字和卡片颜色是否同步变化。</p>\n    <div class=\"theme-panel\">\n      <b>设计提示</b>\n      <p>深色主题不等于简单反色，文字对比度与边界也需要调整。</p>\n    </div>\n  </main>\n</div>",
    "css": ".theme-demo {\n  --t-bg: #f4f7fb;\n  --t-card: #fff;\n  --t-ink: #23394c;\n  --t-muted: #788c9c;\n  background: var(--t-bg);\n  color: var(--t-ink);\n  height: 390px;\n  transition:\n    background 0.2s,\n    color 0.2s;\n}\n.theme-demo.dark {\n  --t-bg: #1a2432;\n  --t-card: #263448;\n  --t-ink: #edf4fb;\n  --t-muted: #abbbcd;\n}\n.theme-demo header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 17px 21px;\n}\n.theme-demo header button {\n  background: var(--t-card);\n  color: var(--t-ink);\n  padding: 9px;\n  border: 1px solid #aabbcc55;\n  border-radius: 7px;\n}\n.theme-demo main {\n  padding: 30px;\n}\n.theme-demo main h2 {\n  max-width: 340px;\n}\n.theme-demo main p {\n  color: var(--t-muted);\n  font-size: 0.78rem;\n}\n.theme-panel {\n  background: var(--t-card);\n  padding: 17px;\n  border-radius: var(--lab-radius);\n  margin-top: 20px;\n}\n.theme-panel p {\n  margin: 6px 0;\n}",
    "js": "const box = document.getElementById('themeBox'),\n  button = document.getElementById('themeSwitch');\nbutton.addEventListener('click', () => {\n  const dark = box.classList.toggle('dark');\n  button.setAttribute('aria-pressed', String(dark));\n  button.textContent = dark ? '☼ 切换到亮色' : '☾ 切换到深色';\n});",
    "what": "JS 负责切换主题状态，CSS 自定义属性统一维护背景、文字和卡片颜色。",
    "uses": [
      "阅读网站",
      "工具后台",
      "系统偏好"
    ],
    "observe": [
      "切换后各区域要一起变化",
      "按钮文字描述下一个可执行动作",
      "例子只在当前预览内生效"
    ],
    "challenge": "为深色模式修改 --t-card，让卡片的层次更清楚。",
    "tags": [
      "主题",
      "CSS变量",
      "状态"
    ],
    "doc": "https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Events",
    "level": "入门",
    "minutes": 15,
    "module": "交互实践"
  },
  {
    "cat": "js",
    "id": "progress",
    "title": "异步任务进度模拟",
    "subtitle": "模拟上传或后台任务，展示等待、进度与完成反馈。",
    "html": "<div class=\"upload-demo\">\n  <div class=\"upload-icon\">⇧</div>\n  <h2>上传文件进度模拟</h2>\n  <p>不需要真实文件，仅演示界面状态。</p>\n  <div class=\"bar-track\"><div id=\"uploadBar\"></div></div>\n  <div id=\"uploadText\">准备开始 · 0%</div>\n  <button id=\"startUpload\" class=\"btn\">开始模拟上传</button>\n</div>",
    "css": ".upload-demo {\n  max-width: 470px;\n  margin: 35px auto;\n  background: white;\n  border: 1px solid #e6edf1;\n  border-radius: var(--lab-radius);\n  padding: 34px;\n  text-align: center;\n}\n.upload-icon {\n  font-size: 3rem;\n  color: var(--lab-accent);\n}\n.upload-demo h2 {\n  font-size: 1.15rem;\n}\n.upload-demo p,\n.upload-demo #uploadText {\n  color: #8495a4;\n  font-size: 0.78rem;\n}\n.bar-track {\n  height: 12px;\n  background: #e4eaf2;\n  border-radius: 12px;\n  overflow: hidden;\n  margin: 25px 0 12px;\n}\n.bar-track div {\n  height: 100%;\n  width: 0;\n  background: var(--lab-accent);\n  transition: width 0.2s;\n}\n.upload-demo .btn {\n  margin-top: 21px;\n}",
    "js": "let timer = null;\nconst start = document.getElementById('startUpload');\nstart.onclick = () => {\n  if (timer) return;\n  let p = 0;\n  start.disabled = true;\n  document.getElementById('uploadText').textContent = '正在模拟处理... 0%';\n  timer = setInterval(() => {\n    p = Math.min(100, p + 5);\n    document.getElementById('uploadBar').style.width = p + '%';\n    document.getElementById('uploadText').textContent =\n      p === 100 ? '模拟完成！没有传输真实文件' : '正在模拟处理... ' + p + '%';\n    if (p === 100) {\n      clearInterval(timer);\n      timer = null;\n      start.disabled = false;\n      start.textContent = '重新演示';\n    }\n  }, 180);\n};",
    "what": "模拟异步任务时，界面应有“等待、进行中、完成”的明确状态，不应让用户猜测。",
    "uses": [
      "文件上传",
      "后台导出",
      "长任务",
      "AI 生成"
    ],
    "observe": [
      "进度条随时间变化",
      "进行中禁止重复开始",
      "没有真正访问网络或上传文件"
    ],
    "challenge": "把 setInterval 的 180 改成 600，模拟更慢的网络过程。",
    "tags": [
      "异步",
      "反馈",
      "模拟"
    ],
    "doc": "https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Events",
    "level": "入门",
    "minutes": 15,
    "module": "交互实践"
  },
  {
    "cat": "js",
    "id": "keyboard",
    "title": "键盘事件与快捷键",
    "subtitle": "除了鼠标，键盘输入也可以改变界面状态。",
    "html": "<div class=\"keyboard-demo\">\n  <h2>键盘交互练习</h2>\n  <p>先点击下面的操作区域，再按方向键移动圆点。</p>\n  <div id=\"moveArea\" tabindex=\"0\" role=\"application\" aria-label=\"方向键移动小球\">\n    <div id=\"dot\">●</div>\n  </div>\n  <p id=\"coords\">位置：(2, 2)</p>\n  <p class=\"muted\">支持 ↑ ↓ ← → 四个方向；按 R 复位。</p>\n</div>",
    "css": ".keyboard-demo {\n  padding: 20px;\n  text-align: center;\n}\n.keyboard-demo h2 {\n  margin: 0 0 12px;\n}\n.keyboard-demo p {\n  font-size: 0.82rem;\n  color: #73899a;\n}\n#moveArea {\n  height: 260px;\n  max-width: 480px;\n  margin: 20px auto;\n  border: 2px dashed #93bddf;\n  background-color: #f0f7ff;\n  background-image:\n    linear-gradient(#dbeafc 1px, transparent 1px),\n    linear-gradient(90deg, #dbeafc 1px, transparent 1px);\n  background-size: 20% 20%;\n  position: relative;\n  outline-offset: 4px;\n  border-radius: var(--lab-radius);\n}\n#moveArea:focus {\n  outline: 3px solid #8db8ec;\n}\n#dot {\n  position: absolute;\n  top: 40%;\n  left: 40%;\n  width: 20%;\n  height: 20%;\n  display: grid;\n  place-items: center;\n  transition:\n    top 0.13s,\n    left 0.13s;\n  color: var(--lab-accent);\n  font-size: 2.5rem;\n}",
    "js": "let x = 2,\n  y = 2;\nconst area = document.getElementById('moveArea');\nfunction render() {\n  document.getElementById('dot').style.left = x * 20 + '%';\n  document.getElementById('dot').style.top = y * 20 + '%';\n  document.getElementById('coords').textContent = '位置：(' + x + ', ' + y + ')';\n}\narea.addEventListener('keydown', (e) => {\n  const map = {\n    ArrowLeft: [-1, 0],\n    ArrowRight: [1, 0],\n    ArrowUp: [0, -1],\n    ArrowDown: [0, 1],\n  };\n  if (map[e.key]) {\n    e.preventDefault();\n    x = Math.max(0, Math.min(4, x + map[e.key][0]));\n    y = Math.max(0, Math.min(4, y + map[e.key][1]));\n    render();\n  } else if (e.key.toLowerCase() === 'r') {\n    x = 2;\n    y = 2;\n    render();\n  }\n});",
    "what": "keydown 可以监听特定按键，让方向键控制位置；还应只在合适的焦点区域响应。",
    "uses": [
      "游戏",
      "快捷键",
      "可访问控件",
      "编辑工具"
    ],
    "observe": [
      "必须先让区域获得焦点",
      "方向键改变当前位置",
      "R 键用于重置"
    ],
    "challenge": "将初始 x、y 从 2 改为 0，观察小球的起始位置。",
    "tags": [
      "键盘",
      "keydown"
    ],
    "doc": "https://developer.mozilla.org/en-US/docs/Web/API/Element/keydown_event",
    "level": "入门",
    "minutes": 15,
    "module": "交互实践"
  },
  {
    "cat": "js",
    "id": "drag",
    "title": "拖拽排序练习",
    "subtitle": "拖动卡片改变顺序，演示浏览器原生拖放事件。",
    "html": "<div class=\"drag-demo\">\n  <h2>拖动任务改变顺序</h2>\n  <p class=\"muted\">电脑端可用鼠标拖拽；触屏也可用右侧上下按钮。</p>\n  <ul id=\"dragList\"></ul>\n</div>",
    "css": ".drag-demo {\n  max-width: 570px;\n  margin: 18px auto;\n  background: white;\n  border-radius: var(--lab-radius);\n  padding: 22px;\n}\n.drag-demo h2 {\n  margin: 0 0 8px;\n}\n.drag-demo p {\n  font-size: 0.75rem;\n}\n.drag-demo ul {\n  list-style: none;\n  padding: 0;\n}\n.drag-demo li {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  border: 1px solid #e2e9f0;\n  background: #f9fbfd;\n  margin: 9px 0;\n  padding: 13px;\n  border-radius: 7px;\n  font-size: 0.84rem;\n}\n.drag-demo li.dragging {\n  opacity: 0.38;\n}\n.drag-demo li .handle {\n  color: #91a3b0;\n  cursor: grab;\n}\n.drag-demo li span.task-name {\n  flex: 1;\n}\n.drag-demo li button {\n  background: white;\n  border: 1px solid #dce5ed;\n  border-radius: 5px;\n  padding: 4px 9px;\n}",
    "js": "let values = ['确定需求', '设计页面', '编写代码', '测试交互', '发布上线'];\nlet dragging = null;\nconst list = document.getElementById('dragList');\nfunction move(from, to) {\n  if (to < 0 || to >= values.length) return;\n  const item = values.splice(from, 1)[0];\n  values.splice(to, 0, item);\n  render();\n}\nfunction render() {\n  list.replaceChildren();\n  values.forEach((name, i) => {\n    const li = document.createElement('li');\n    li.draggable = true;\n    li.dataset.index = i;\n    const handle = document.createElement('span');\n    handle.textContent = '⠿';\n    handle.className = 'handle';\n    const title = document.createElement('span');\n    title.className = 'task-name';\n    title.textContent = name;\n    const up = document.createElement('button');\n    up.textContent = '↑';\n    up.setAttribute('aria-label', '上移 ' + name);\n    up.onclick = () => move(i, i - 1);\n    const down = document.createElement('button');\n    down.textContent = '↓';\n    down.setAttribute('aria-label', '下移 ' + name);\n    down.onclick = () => move(i, i + 1);\n    li.append(handle, title, up, down);\n    li.addEventListener('dragstart', () => {\n      dragging = i;\n      li.classList.add('dragging');\n    });\n    li.addEventListener('dragover', (e) => e.preventDefault());\n    li.addEventListener('drop', (e) => {\n      e.preventDefault();\n      if (dragging !== null) move(dragging, i);\n      dragging = null;\n    });\n    li.addEventListener('dragend', () => {\n      dragging = null;\n      li.classList.remove('dragging');\n    });\n    list.append(li);\n  });\n}\nrender();",
    "what": "拖放事件可改变列表项顺序；移动端和键盘用户需要替代操作，所以这里也提供上下按钮。",
    "uses": [
      "任务排序",
      "文件整理",
      "看板",
      "收藏夹"
    ],
    "observe": [
      "拖拽时卡片半透明",
      "松开后列表顺序改变",
      "↑ ↓ 按钮也能完成相同任务"
    ],
    "challenge": "修改 values 数组，为这张流程清单添加“验收设计”步骤。",
    "tags": [
      "拖拽",
      "排序"
    ],
    "doc": "https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Events",
    "level": "入门",
    "minutes": 15,
    "module": "交互实践"
  }
];
const LEGACY_BASE = ":root {\n  --lab-accent: #2563eb;\n  --lab-gap: 16px;\n  --lab-radius: 12px;\n  --lab-font: 15px;\n}\n* {\n  box-sizing: border-box;\n}\nhtml {\n  font-size: var(--lab-font);\n}\nbody {\n  margin: 0;\n  background: #f7f9fb;\n  color: #24313f;\n  font-family:\n    system-ui,\n    -apple-system,\n    \"PingFang SC\",\n    sans-serif;\n  line-height: 1.55;\n}\nbutton,\ninput,\ntextarea,\nselect {\n  font: inherit;\n}\nbutton {\n  cursor: pointer;\n}\na {\n  color: inherit;\n  text-decoration: none;\n}\n.sitehead {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 14px 22px;\n  background: white;\n  border-bottom: 1px solid #e8ecf1;\n}\n.sitehead strong {\n  font-size: 1.15rem;\n  letter-spacing: -0.03em;\n}\n.sitehead nav {\n  display: flex;\n  gap: 17px;\n  margin: auto;\n  color: #6a7c90;\n  font-size: 0.8rem;\n}\n.small-btn,\n.btn {\n  background: var(--lab-accent);\n  border: 0;\n  color: #fff;\n  padding: 9px 14px;\n  border-radius: 8px;\n  font-size: 0.78rem;\n}\n.muted {\n  color: #7a8b9b;\n}\n.surface {\n  background: white;\n  border: 1px solid #e7ecf1;\n  border-radius: var(--lab-radius);\n}\n.item {\n  background: #fff;\n  border: 1px solid #ebeff4;\n  border-radius: var(--lab-radius);\n  overflow: hidden;\n  min-width: 0;\n}\n.itembody {\n  padding: 12px;\n}\n.itembody b {\n  display: block;\n  font-size: 0.86rem;\n}\n.itembody p {\n  font-size: 0.7rem;\n  color: #8594a3;\n  margin: 5px 0;\n}\n.picture {\n  display: grid;\n  place-items: center;\n  min-height: 96px;\n  font-size: 2.6rem;\n}\n.shade1 {\n  background: linear-gradient(135deg, #d6f1ed, #99c9c0);\n  color: #4a9990;\n}\n.shade2 {\n  background: linear-gradient(135deg, #f9decf, #f0ae87);\n  color: #bd7c5b;\n}\n.shade3 {\n  background: linear-gradient(135deg, #cddcf6, #96b5e9);\n  color: #6487c4;\n}\n.shade4 {\n  background: linear-gradient(135deg, #f2d7ef, #ceb3e5);\n  color: #af89bf;\n}\n.shade5 {\n  background: linear-gradient(135deg, #f5e9b9, #e6bc70);\n  color: #a98639;\n}\n.shade6 {\n  background: linear-gradient(135deg, #dbe8db, #9fc7a9);\n  color: #609f6e;\n}\n.center {\n  max-width: 720px;\n  margin: auto;\n}\n.side {\n  background: #fff;\n  border: 1px solid #e8edf1;\n  border-radius: var(--lab-radius);\n  padding: 15px;\n}\n.side a {\n  display: block;\n  padding: 8px;\n  color: #718295;\n  font-size: 0.78rem;\n  border-radius: 7px;\n}\n.side a.selected,\n.side a:hover {\n  background: #e9f0fc;\n  color: var(--lab-accent);\n}\n.feature-title {\n  margin: 0 0 8px;\n  font-size: 1.75rem;\n  line-height: 1.3;\n}\n.cover {\n  height: 135px;\n  border-radius: var(--lab-radius);\n  background: linear-gradient(120deg, #b0d9e2, #d1c9fa);\n  display: grid;\n  place-items: center;\n  color: #fff;\n  font-size: 3rem;\n}\n.line {\n  height: 7px;\n  background: #e7ebf2;\n  border-radius: 6px;\n  margin: 11px 0;\n}\n.line.short {\n  width: 63%;\n}\n.line.mid {\n  width: 82%;\n}\n.chip {\n  display: inline-block;\n  background: #ebf3ff;\n  color: var(--lab-accent);\n  font-size: 0.7rem;\n  padding: 4px 9px;\n  border-radius: 20px;\n  margin: 0 5px 7px 0;\n}\n.demo-pad {\n  padding: 23px;\n}\n.card-grid {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: var(--lab-gap);\n}\n@media (max-width: 680px) {\n  .sitehead {\n    padding: 12px;\n  }\n  .sitehead nav {\n    gap: 9px;\n  }\n  .demo-pad {\n    padding: 12px;\n  }\n  .card-grid {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n@media (max-width: 410px) {\n  .sitehead nav a:last-child {\n    display: none;\n  }\n  .card-grid {\n    grid-template-columns: 1fr;\n  }\n}\n";
