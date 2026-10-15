/* 从 curriculum.js 生成的可阅读案例源码。 */
const LESSONS = [
  {
    "cat": "html",
    "id": "html-document",
    "title": "从一份 HTML 文档开始",
    "module": "文档与语义",
    "what": "doctype 声明现代 HTML 文档；head 放元信息，body 放内容。lang 帮助读屏软件选择语言，viewport 让移动端按设备宽度布局。",
    "subtitle": "doctype 声明现代 HTML 文档；head 放元信息，body 放内容。",
    "html": "<!doctype html>\n<html lang=\"zh-CN\">\n  <head>\n    <meta charset=\"utf-8\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\n    <meta name=\"description\" content=\"我的第一份前端作品\" />\n    <title>你好，Web</title>\n  </head>\n  <body>\n    <main class=\"lesson-demo\">\n      <h1>你好，Web</h1>\n      <p>这是一份完整、可读的 HTML 文档。</p>\n    </main>\n  </body>\n</html>",
    "css": "",
    "js": "",
    "observe": [
      "title 显示在浏览器标签，不会成为正文标题。",
      "charset 统一使用 UTF-8。",
      "打开手机预览检查 viewport 的作用。"
    ],
    "challenge": "添加二级标题和一段介绍，再导出 HTML；检查导出文件的标签标题。",
    "quiz": [
      "正文应该放在哪里？",
      [
        "head",
        "body",
        "meta"
      ],
      1,
      "body 承载用户看到的页面内容。"
    ],
    "doc": "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax",
    "uses": [
      "文档与语义",
      "实际页面开发"
    ],
    "tags": [
      "文档与语义",
      "HTML"
    ],
    "level": "入门",
    "minutes": 15,
    "pitfalls": [
      "不要把可见正文放在 head 内。",
      "标签嵌套要正确，段落 p 里不要嵌套 div。"
    ]
  },
  {
    "cat": "html",
    "id": "html-inline",
    "title": "强调、引用与文本语义",
    "module": "文档与语义",
    "what": "strong 表示重要性，em 表示重读强调，mark 标记当前相关内容。视觉上的粗体不等同于语义上的重要。",
    "subtitle": "strong 表示重要性，em 表示重读强调，mark 标记当前相关内容。",
    "html": "<article class=\"lesson-demo\">\n  <h1>一段有语义的笔记</h1>\n  <p>\n    <strong>保存草稿</strong>\n    后再退出，\n    <em>尤其</em>\n    是在网络不稳定的时候。\n  </p>\n  <p>\n    搜索结果：\n    <mark>语义化</mark>\n    HTML。\n  </p>\n  <blockquote cite=\"https://developer.mozilla.org/\">\n    <p>先说明内容的意义，再决定它的外观。</p>\n  </blockquote>\n  <p>\n    术语\n    <abbr title=\"HyperText Markup Language\">HTML</abbr>\n    ，按\n    <kbd>Ctrl</kbd>\n    +\n    <kbd>S</kbd>\n    保存。\n  </p>\n  <p>\n    水：H\n    <sub>2</sub>\n    O；面积：m\n    <sup>2</sup>\n    ；\n    <del>旧价格 99</del>\n    <ins>新价格 79</ins>\n    。\n  </p>\n  <p>\n    更新时间：\n    <time datetime=\"2026-10-11\">2026 年 10 月 11 日</time>\n  </p>\n</article>",
    "css": "",
    "js": "",
    "observe": [
      "abbr 的 title 给出缩略语全称。",
      "datetime 提供机器可读日期。",
      "del 和 ins 表达内容修订。"
    ],
    "challenge": "用 code 标记一个变量名，并用 samp 展示程序输出。",
    "quiz": [
      "哪个标签表示重要内容？",
      [
        "b",
        "strong",
        "span"
      ],
      1,
      "strong 有重要性的语义；b 主要用于引起注意。"
    ],
    "doc": "https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/strong",
    "uses": [
      "文档与语义",
      "实际页面开发"
    ],
    "tags": [
      "文档与语义",
      "HTML"
    ],
    "level": "入门",
    "minutes": 15,
    "pitfalls": []
  },
  {
    "cat": "html",
    "id": "html-description",
    "title": "描述列表与联系信息",
    "module": "文档与语义",
    "what": "dl、dt、dd 表达术语与说明，也适合产品参数。address 表达作者或组织的联系方式，不是任意邮寄地址的通用容器。",
    "subtitle": "dl、dt、dd 表达术语与说明，也适合产品参数。",
    "html": "<main class=\"lesson-demo\">\n  <h1>作品信息</h1>\n  <dl>\n    <dt>技术栈</dt>\n    <dd>HTML、CSS、JavaScript</dd>\n    <dt>开发目标</dt>\n    <dd>让抽象知识可以被操作和观察</dd>\n    <dt>运行环境</dt>\n    <dd>现代桌面与移动浏览器</dd>\n  </dl>\n  <address>\n    维护者：\n    <a href=\"mailto:hello@example.com\">hello@example.com</a>\n  </address>\n</main>",
    "css": "dt {\n  font-weight: 700;\n  margin-top: 16px;\n}\ndd {\n  margin: 4px 0;\n  color: #60746a;\n}",
    "js": "",
    "observe": [
      "一个 dt 后可以跟多个 dd。",
      "默认 dd 缩进可以用 CSS 修改。"
    ],
    "challenge": "添加“设计理念”和两条解释。",
    "quiz": [
      "参数名适合哪一个元素？",
      [
        "dt",
        "dd",
        "li"
      ],
      0,
      "dt 是名称或术语，dd 是相应的描述。"
    ],
    "doc": "https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/dl",
    "uses": [
      "文档与语义",
      "实际页面开发"
    ],
    "tags": [
      "文档与语义",
      "HTML"
    ],
    "level": "入门",
    "minutes": 15,
    "pitfalls": []
  },
  {
    "cat": "html",
    "id": "html-attributes",
    "title": "全局属性与 data-*",
    "module": "文档与语义",
    "what": "id 唯一标识元素，class 用于复用样式，data-* 存放轻量业务信息。hidden 隐藏非当前内容，属性和 DOM 属性之间存在映射。",
    "subtitle": "id 唯一标识元素，class 用于复用样式，data-* 存放轻量业务信息。",
    "html": "<main class=\"lesson-demo\">\n  <h1>课程卡片</h1>\n  <article id=\"course\" class=\"course-card\" data-level=\"beginner\" title=\"入门课程\">\n    <h2>HTML 基础</h2>\n    <p lang=\"en\">Learn by doing.</p>\n    <p id=\"extra\" hidden>每天完成一项实验即可。</p>\n    <button id=\"more\" type=\"button\" aria-expanded=\"false\" aria-controls=\"extra\">\n      阅读建议\n    </button>\n  </article>\n</main>",
    "css": "",
    "js": "const button = document.getElementById('more');\nconst extra = document.getElementById('extra');\n\nbutton.addEventListener('click', () => {\n  extra.hidden = !extra.hidden;\n  button.setAttribute('aria-expanded', String(!extra.hidden));\n  console.log(document.getElementById('course').dataset.level);\n});",
    "observe": [
      "data-level 通过 dataset.level 读取。",
      "aria-expanded 与显示状态同步。"
    ],
    "challenge": "再加一个 data-duration 属性，并在控制台打印出来。",
    "quiz": [
      "同一文档的 id 应该如何设置？",
      [
        "可以随意重复",
        "保持唯一",
        "只能是数字"
      ],
      1,
      "唯一 id 可确保标签关联、锚点和查询的目标清晰。"
    ],
    "doc": "https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes",
    "uses": [
      "文档与语义",
      "实际页面开发"
    ],
    "tags": [
      "文档与语义",
      "HTML"
    ],
    "level": "入门",
    "minutes": 15,
    "pitfalls": []
  },
  {
    "cat": "html",
    "id": "html-figure",
    "title": "图片、替代文本与图注",
    "module": "媒体与嵌入",
    "what": "figure 把图片与 figcaption 图注组合起来。alt 描述有意义的图片；纯装饰图片使用空 alt。width 和 height 预留空间以减少布局跳动。",
    "subtitle": "figure 把图片与 figcaption 图注组合起来。",
    "html": "<main class=\"lesson-demo\">\n  <h1>城市的颜色</h1>\n  <figure>\n    <img\n      src=\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='240'%3E%3Crect width='600' height='240' fill='%23c8ded2'/%3E%3Ccircle cx='420' cy='85' r='50' fill='%23dea952'/%3E%3Cpath d='M0 240L200 70L350 240Z' fill='%23426d59'/%3E%3C/svg%3E\"\n      alt=\"绿色山峰与一轮金色太阳的几何插画\"\n      width=\"600\"\n      height=\"240\"\n    />\n    <figcaption>图 1：用几何图形练习视觉层次。</figcaption>\n  </figure>\n</main>",
    "css": "figure {\n  margin: 0;\n}\nimg {\n  display: block;\n  max-width: 100%;\n  height: auto;\n}\nfigcaption {\n  margin-top: 10px;\n  color: #65766d;\n}",
    "js": "",
    "observe": [
      "禁用图片时 alt 仍能说明含义。",
      "图片按比例缩放而不是拉伸。"
    ],
    "challenge": "把图注改成作品名，为图片设置 loading=\"lazy\"。",
    "quiz": [
      "纯装饰图片的 alt 推荐是什么？",
      [
        "图片",
        "空字符串",
        "省略 alt"
      ],
      1,
      "空 alt 表示无需读屏软件重复朗读装饰内容。"
    ],
    "doc": "https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/img",
    "uses": [
      "媒体与嵌入",
      "实际页面开发"
    ],
    "tags": [
      "媒体与嵌入",
      "HTML"
    ],
    "level": "入门",
    "minutes": 15,
    "pitfalls": []
  },
  {
    "cat": "html",
    "id": "html-picture",
    "title": "picture 与响应式图片",
    "module": "媒体与嵌入",
    "what": "picture 的 source 可以根据媒体条件选择不同构图，img 是回退内容。srcset 与 sizes 则帮助浏览器选择合适分辨率，不能把两种目的混淆。",
    "subtitle": "picture 的 source 可以根据媒体条件选择不同构图，img 是回退内容。",
    "html": "<main class=\"lesson-demo\">\n  <h1>宽屏与窄屏的不同构图</h1>\n  <picture>\n    <source\n      media=\"(max-width: 480px)\"\n      srcset=\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='240'%3E%3Crect width='300' height='240' fill='%23e8be85'/%3E%3Ctext x='30' y='120' font-size='28'%3EMOBILE%3C/text%3E%3C/svg%3E\"\n    />\n    <img\n      src=\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='700' height='240'%3E%3Crect width='700' height='240' fill='%23a7cbb7'/%3E%3Ctext x='240' y='120' font-size='28'%3EDESKTOP%3C/text%3E%3C/svg%3E\"\n      alt=\"随容器宽度切换的示意图\"\n      width=\"700\"\n      height=\"240\"\n    />\n  </picture>\n</main>",
    "css": "img {\n  max-width: 100%;\n  height: auto;\n}",
    "js": "",
    "observe": [
      "切换手机预览后图片内容变成 MOBILE。",
      "img 回退不可省略，alt 写在 img 上。"
    ],
    "challenge": "将 media 的阈值改成 800px，比较三个设备。",
    "quiz": [
      "picture 的替代文字应该放在哪里？",
      [
        "source",
        "picture",
        "img"
      ],
      2,
      "img 是实际的图片元素，并提供回退与替代文本。"
    ],
    "doc": "https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/picture",
    "uses": [
      "媒体与嵌入",
      "实际页面开发"
    ],
    "tags": [
      "媒体与嵌入",
      "HTML"
    ],
    "level": "入门",
    "minutes": 15,
    "pitfalls": []
  },
  {
    "cat": "html",
    "id": "html-media",
    "title": "音频与视频原生控件",
    "module": "媒体与嵌入",
    "what": "audio 和 video 用 controls 提供播放控制，source 指定媒体类型。没有素材时要清楚说明空状态；本实验不依赖外部媒体资源。",
    "subtitle": "audio 和 video 用 controls 提供播放控制，source 指定媒体类型。",
    "html": "<main class=\"lesson-demo\">\n  <h1>选择本地媒体来试播</h1>\n  <label>\n    本地音频\n    <input id=\"audioFile\" type=\"file\" accept=\"audio/*\" />\n  </label>\n  <audio id=\"player\" controls preload=\"metadata\">浏览器不支持 audio。</audio>\n  <label>\n    本地视频\n    <input id=\"videoFile\" type=\"file\" accept=\"video/*\" />\n  </label>\n  <video id=\"video\" controls playsinline width=\"480\">浏览器不支持 video。</video>\n  <p>文件只在当前预览中播放，不会上传。正式视频应配字幕 track。</p>\n</main>",
    "css": "audio,\nvideo {\n  display: block;\n  max-width: 100%;\n  margin: 12px 0;\n}",
    "js": "for (const [inputId, playerId] of [\n  ['audioFile', 'player'],\n  ['videoFile', 'video'],\n]) {\n  let previousUrl;\n  document.getElementById(inputId).addEventListener('change', (event) => {\n    const file = event.target.files[0];\n    if (!file) return;\n    if (previousUrl) URL.revokeObjectURL(previousUrl);\n    previousUrl = URL.createObjectURL(file);\n    document.getElementById(playerId).src = previousUrl;\n  });\n}",
    "observe": [
      "选择文件后播放原生媒体。",
      "object URL 在重新选择文件时释放。"
    ],
    "challenge": "给 video 加 muted，并观察自动播放限制。",
    "quiz": [
      "字幕适合使用哪个标签？",
      [
        "track",
        "summary",
        "caption"
      ],
      0,
      "track 提供字幕或其他定时文本。"
    ],
    "doc": "https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/video",
    "uses": [
      "媒体与嵌入",
      "实际页面开发"
    ],
    "tags": [
      "媒体与嵌入",
      "HTML"
    ],
    "level": "入门",
    "minutes": 15,
    "pitfalls": []
  },
  {
    "cat": "html",
    "id": "html-embed",
    "title": "iframe 与独立浏览上下文",
    "module": "媒体与嵌入",
    "what": "iframe 在文档中嵌入独立页面。sandbox 限制子页面能力，title 帮助用户理解框架内容。本学习工作台也用隔离的 iframe 运行代码。",
    "subtitle": "iframe 在文档中嵌入独立页面。",
    "html": "<main class=\"lesson-demo\">\n  <h1>一个嵌套的迷你页面</h1>\n  <iframe\n    title=\"欢迎卡片示例\"\n    sandbox\n    srcdoc=\"<h2>你好，子页面</h2><p>我的 DOM 与外层页面分开。</p>\"\n  ></iframe>\n  <p>空 sandbox 保留所有限制；添加 allow-scripts 才允许执行脚本。</p>\n</main>",
    "css": "iframe {\n  width: 100%;\n  min-height: 180px;\n  border: 1px solid #b8cfc2;\n  border-radius: 8px;\n}",
    "js": "",
    "observe": [
      "子文档不会继承外部页面 CSS。",
      "srcdoc 中的引号需要正确编码。"
    ],
    "challenge": "把 srcdoc 的标题和段落换成自己的内容。",
    "quiz": [
      "sandbox=\"allow-scripts\" 允许什么？",
      [
        "访问父页面 DOM",
        "执行子页面脚本",
        "自动获得同源身份"
      ],
      1,
      "allow-scripts 只解除脚本执行限制，不等于允许同源访问。"
    ],
    "doc": "https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/iframe",
    "uses": [
      "媒体与嵌入",
      "实际页面开发"
    ],
    "tags": [
      "媒体与嵌入",
      "HTML"
    ],
    "level": "进阶",
    "minutes": 15,
    "pitfalls": []
  },
  {
    "cat": "html",
    "id": "html-input-types",
    "title": "输入类型与浏览器校验",
    "module": "表单与可访问性",
    "what": "email、url、number、date 等 type 提供适合的输入体验。required、min、max、step 和 pattern 声明输入约束，不能替代服务端验证。",
    "subtitle": "email、url、number、date 等 type 提供适合的输入体验。",
    "html": "<main class=\"lesson-demo\">\n  <h1>课程报名</h1>\n  <form id=\"signup\">\n    <label>\n      邮箱\n      <input name=\"email\" type=\"email\" required autocomplete=\"email\" />\n    </label>\n    <label>\n      主页\n      <input name=\"website\" type=\"url\" placeholder=\"https://example.com\" />\n    </label>\n    <label>\n      每周学习小时\n      <input name=\"hours\" type=\"number\" min=\"1\" max=\"40\" step=\"1\" value=\"5\" required />\n    </label>\n    <label>\n      开始日期\n      <input name=\"start\" type=\"date\" required />\n    </label>\n    <button type=\"submit\">检查报名信息</button>\n    <output id=\"formResult\" aria-live=\"polite\"></output>\n  </form>\n</main>",
    "css": "",
    "js": "document.getElementById('signup').addEventListener('submit', (event) => {\n  event.preventDefault();\n  const data = Object.fromEntries(new FormData(event.target));\n  document.getElementById('formResult').textContent =\n    '验证通过：' + data.email + '（本地演示，不提交）';\n});",
    "observe": [
      "无效邮箱会阻止 submit 事件。",
      "只有带 name 的表单控件进入 FormData。"
    ],
    "challenge": "加入一个 required 的 tel 输入框，设置 pattern=\"[0-9]{11}\"。",
    "quiz": [
      "FormData 使用哪个属性作为字段名？",
      [
        "id",
        "name",
        "class"
      ],
      1,
      "id 用于关联与查询；name 才是提交字段名。"
    ],
    "doc": "https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input",
    "uses": [
      "表单与可访问性",
      "实际页面开发"
    ],
    "tags": [
      "表单与可访问性",
      "HTML"
    ],
    "level": "入门",
    "minutes": 15,
    "pitfalls": []
  },
  {
    "cat": "html",
    "id": "html-fieldset",
    "title": "fieldset、label 与选项分组",
    "module": "表单与可访问性",
    "what": "fieldset 和 legend 为相关控件分组。同名 radio 形成单选组，checkbox 可以多选；label 让点击文字也能操作控件。",
    "subtitle": "fieldset 和 legend 为相关控件分组。",
    "html": "<main class=\"lesson-demo\">\n  <h1>定制学习计划</h1>\n  <form>\n    <fieldset>\n      <legend>学习方向（单选）</legend>\n      <label>\n        <input type=\"radio\" name=\"track\" value=\"html\" checked />\n        HTML\n      </label>\n      <label>\n        <input type=\"radio\" name=\"track\" value=\"css\" />\n        CSS\n      </label>\n      <label>\n        <input type=\"radio\" name=\"track\" value=\"js\" />\n        JavaScript\n      </label>\n    </fieldset>\n    <fieldset>\n      <legend>想要练习（多选）</legend>\n      <label>\n        <input type=\"checkbox\" name=\"practice\" value=\"layout\" />\n        页面布局\n      </label>\n      <label>\n        <input type=\"checkbox\" name=\"practice\" value=\"interaction\" />\n        交互开发\n      </label>\n    </fieldset>\n    <label for=\"notes\">学习目标</label>\n    <textarea id=\"notes\" name=\"notes\" rows=\"3\" maxlength=\"200\"></textarea>\n  </form>\n</main>",
    "css": "fieldset {\n  border: 1px solid #cadcd1;\n  border-radius: 8px;\n  margin: 12px 0;\n}",
    "js": "",
    "observe": [
      "点击文字即可切换选项。",
      "改变 radio 的 name 会破坏组内互斥关系。"
    ],
    "challenge": "加入一个“接收提醒”复选框，默认选中。",
    "quiz": [
      "radio 通过什么形成同组？",
      [
        "相同 name",
        "相同 id",
        "相同 value"
      ],
      0,
      "name 相同的单选按钮在同一组里互斥。"
    ],
    "doc": "https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/fieldset",
    "uses": [
      "表单与可访问性",
      "实际页面开发"
    ],
    "tags": [
      "表单与可访问性",
      "HTML"
    ],
    "level": "入门",
    "minutes": 15,
    "pitfalls": []
  },
  {
    "cat": "html",
    "id": "html-select",
    "title": "select、datalist 与 output",
    "module": "表单与可访问性",
    "what": "select 限制用户从给定选项选择，datalist 只提供建议，用户仍可输入其他值。output 用来表示计算结果。",
    "subtitle": "select 限制用户从给定选项选择，datalist 只提供建议，用户仍可输入其他值。",
    "html": "<main class=\"lesson-demo\">\n  <h1>学习预算</h1>\n  <label>\n    计划\n    <select id=\"plan\">\n      <optgroup label=\"学习时长\">\n        <option value=\"15\">每日 15 分钟</option>\n        <option value=\"30\">每日 30 分钟</option>\n      </optgroup>\n    </select>\n  </label>\n  <label>\n    兴趣\n    <input list=\"topics\" placeholder=\"也可以自行输入\" />\n  </label>\n  <datalist id=\"topics\">\n    <option value=\"排版\"></option>\n    <option value=\"动画\"></option>\n    <option value=\"交互\"></option>\n  </datalist>\n  <p>\n    一周学习时间：\n    <output id=\"total\" for=\"plan\">105</output>\n    分钟\n  </p>\n</main>",
    "css": "",
    "js": "document.getElementById('plan').addEventListener('change', (event) => {\n  document.getElementById('total').value = Number(event.target.value) * 7;\n});",
    "observe": [
      "input list 关联 datalist 的 id。",
      "output 的 for 可以关联参与计算的控件。"
    ],
    "challenge": "加入 60 分钟选项，检查结果。",
    "quiz": [
      "datalist 是否限制只能选已有选项？",
      [
        "是",
        "否",
        "只有手机限制"
      ],
      1,
      "datalist 提供输入建议，不强制限制取值。"
    ],
    "doc": "https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/datalist",
    "uses": [
      "表单与可访问性",
      "实际页面开发"
    ],
    "tags": [
      "表单与可访问性",
      "HTML"
    ],
    "level": "入门",
    "minutes": 15,
    "pitfalls": []
  },
  {
    "cat": "html",
    "id": "html-progress-meter",
    "title": "progress 与 meter 的区别",
    "module": "原生组件",
    "what": "progress 表达任务完成进度；meter 表达已知范围中的测量值，例如存储使用量。未知总进度时省略 progress 的 value。",
    "subtitle": "progress 表达任务完成进度；meter 表达已知范围中的测量值，例如存储使用量。",
    "html": "<main class=\"lesson-demo\">\n  <h1>任务与测量</h1>\n  <label>\n    学习完成度\n    <progress value=\"45\" max=\"100\">45%</progress>\n  </label>\n  <label>\n    磁盘使用\n    <meter min=\"0\" max=\"100\" low=\"30\" high=\"80\" optimum=\"20\" value=\"65\">65%</meter>\n  </label>\n  <label>\n    正在寻找资料\n    <progress>正在加载</progress>\n  </label>\n</main>",
    "css": "progress,\nmeter {\n  width: 220px;\n  max-width: 100%;\n  vertical-align: middle;\n}",
    "js": "",
    "observe": [
      "不确定型 progress 由浏览器显示等待状态。",
      "meter 的 high、low、optimum 影响原生颜色。"
    ],
    "challenge": "把 meter 的 value 改成 95，观察变化。",
    "quiz": [
      "显示文件上传任务应选什么？",
      [
        "meter",
        "progress",
        "time"
      ],
      1,
      "progress 专门表示任务的进展。"
    ],
    "doc": "https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/progress",
    "uses": [
      "原生组件",
      "实际页面开发"
    ],
    "tags": [
      "原生组件",
      "HTML"
    ],
    "level": "入门",
    "minutes": 15,
    "pitfalls": []
  },
  {
    "cat": "html",
    "id": "html-dialog",
    "title": "原生 dialog 与表单关闭",
    "module": "原生组件",
    "what": "dialog.showModal() 提供模态顶层、焦点管理和 Esc 关闭。form method=\"dialog\" 可以关闭对话框并设置 returnValue。",
    "subtitle": "dialog.showModal() 提供模态顶层、焦点管理和 Esc 关闭。",
    "html": "<main class=\"lesson-demo\">\n  <h1>原生确认框</h1>\n  <button id=\"open\" type=\"button\">打开学习确认</button>\n  <p id=\"decision\" aria-live=\"polite\">尚未选择</p>\n  <dialog id=\"confirm\" aria-labelledby=\"dialogTitle\">\n    <h2 id=\"dialogTitle\">开始这个实验？</h2>\n    <p>先观察预览，再修改一行代码。</p>\n    <form method=\"dialog\">\n      <button value=\"cancel\">稍后</button>\n      <button value=\"start\" autofocus>开始学习</button>\n    </form>\n  </dialog>\n</main>",
    "css": "dialog {\n  max-width: 85%;\n  border: 0;\n  border-radius: 14px;\n  padding: 28px;\n}\ndialog::backdrop {\n  background: #12342588;\n}",
    "js": "const dialog = document.getElementById('confirm');\ndocument.getElementById('open').addEventListener('click', () => {\n  dialog.returnValue = '';\n  dialog.showModal();\n});\ndialog.addEventListener('close', () => {\n  document.getElementById('decision').textContent =\n    dialog.returnValue === 'start' ? '准备开始！' : '已取消';\n});",
    "observe": [
      "Tab 焦点被限制在模态框内部。",
      "关闭后焦点回到触发按钮。"
    ],
    "challenge": "添加第三个“先看讲解”的选项。",
    "quiz": [
      "哪一个方法打开模态 dialog？",
      [
        "show()",
        "showModal()",
        "open()"
      ],
      1,
      "showModal 打开模态对话框，show 打开非模态对话框。"
    ],
    "doc": "https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/dialog",
    "uses": [
      "原生组件",
      "实际页面开发"
    ],
    "tags": [
      "原生组件",
      "HTML"
    ],
    "level": "入门",
    "minutes": 15,
    "pitfalls": []
  },
  {
    "cat": "html",
    "id": "html-popover",
    "title": "Popover 原生浮层",
    "module": "原生组件",
    "what": "popover 可以用声明式按钮打开，自动浮层支持点击外部或 Esc 关闭。它不是模态框，不会阻止与页面其余部分交互。",
    "subtitle": "popover 可以用声明式按钮打开，自动浮层支持点击外部或 Esc 关闭。",
    "html": "<main class=\"lesson-demo\">\n  <h1>不用 JavaScript 的提示层</h1>\n  <button popovertarget=\"tip\">查看提示</button>\n  <div id=\"tip\" popover>\n    <h2>小提示</h2>\n    <p>先改变一个参数，更容易观察因果关系。</p>\n    <button popovertarget=\"tip\" popovertargetaction=\"hide\">知道了</button>\n  </div>\n</main>",
    "css": "[popover] {\n  max-width: 85%;\n  padding: 24px;\n  border: 1px solid #c8d9cf;\n  border-radius: 12px;\n}",
    "js": "",
    "observe": [
      "popover 与 popovertarget 的 id 对应。",
      "使用前在 MDN 检查目标浏览器兼容性。"
    ],
    "challenge": "将 popover=\"manual\" 并比较点击外部的效果。",
    "quiz": [
      "自动 popover 是否阻止背景交互？",
      [
        "是",
        "否",
        "必须设置 JS"
      ],
      1,
      "popover 是非模态浮层。"
    ],
    "doc": "https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes/popover",
    "uses": [
      "原生组件",
      "实际页面开发"
    ],
    "tags": [
      "原生组件",
      "HTML"
    ],
    "level": "进阶",
    "minutes": 15,
    "pitfalls": []
  },
  {
    "cat": "html",
    "id": "html-template",
    "title": "template 与可复用 DOM 片段",
    "module": "原生组件",
    "what": "template 内的内容不会立即渲染，使用 content.cloneNode(true) 复制后加入页面。避免把用户输入拼进 innerHTML。",
    "subtitle": "template 内的内容不会立即渲染，使用 content.cloneNode(true) 复制后加入页面。",
    "html": "<main class=\"lesson-demo\">\n  <h1>复制课程卡片</h1>\n  <button id=\"add\">添加课程</button>\n  <div id=\"courses\"></div>\n  <template id=\"cardTemplate\">\n    <article class=\"course-card\">\n      <h2></h2>\n      <p>打开源码，观察如何克隆节点。</p>\n    </article>\n  </template>\n</main>",
    "css": ".course-card {\n  padding: 12px;\n  margin-top: 12px;\n  background: #eef5f0;\n  border-radius: 8px;\n}",
    "js": "let count = 0;\ndocument.getElementById('add').addEventListener('click', () => {\n  const fragment = document.getElementById('cardTemplate').content.cloneNode(true);\n  fragment.querySelector('h2').textContent = '课程 ' + ++count;\n  document.getElementById('courses').append(fragment);\n});",
    "observe": [
      "template 本身不可见。",
      "cloneNode(true) 复制所有后代。"
    ],
    "challenge": "在模板加入一个按钮并为新按钮绑定事件。",
    "quiz": [
      "template 的片段在哪里？",
      [
        "innerText",
        "content",
        "value"
      ],
      1,
      "content 是存放模板节点的 DocumentFragment。"
    ],
    "doc": "https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/template",
    "uses": [
      "原生组件",
      "实际页面开发"
    ],
    "tags": [
      "原生组件",
      "HTML"
    ],
    "level": "入门",
    "minutes": 15,
    "pitfalls": []
  },
  {
    "cat": "html",
    "id": "html-accessibility",
    "title": "键盘导航与无障碍命名",
    "module": "表单与可访问性",
    "what": "优先用 button、a 和 label 等原生元素。键盘用户需要可见焦点，输入框需要明确标签，图标按钮需要可访问名称。",
    "subtitle": "优先用 button、a 和 label 等原生元素。",
    "html": "<main class=\"lesson-demo\">\n  <a href=\"#article\">跳到正文</a>\n  <h1>试着只使用键盘</h1>\n  <label for=\"searchField\">搜索课程</label>\n  <input id=\"searchField\" type=\"search\" />\n  <button type=\"button\" aria-label=\"收藏课程\">☆</button>\n  <article id=\"article\" tabindex=\"-1\">\n    <h2>正文区域</h2>\n    <p>按 Tab 移动，按 Enter 激活按钮。</p>\n  </article>\n</main>",
    "css": ":focus-visible {\n  outline: 3px solid #b27a20;\n  outline-offset: 4px;\n}",
    "js": "",
    "observe": [
      "Tab 按 DOM 顺序访问控件。",
      "tabindex=-1 可以程序化聚焦，不加入常规 Tab 顺序。"
    ],
    "challenge": "将图标按钮文字改成“收藏”，思考 aria-label 是否还必要。",
    "quiz": [
      "键盘焦点轮廓应该怎样处理？",
      [
        "全部移除",
        "提供清晰可见的样式",
        "只给鼠标显示"
      ],
      1,
      "焦点指示让键盘用户知道当前操作位置。"
    ],
    "doc": "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Accessibility/HTML",
    "uses": [
      "表单与可访问性",
      "实际页面开发"
    ],
    "tags": [
      "表单与可访问性",
      "HTML"
    ],
    "level": "入门",
    "minutes": 15,
    "pitfalls": []
  },
  {
    "cat": "html",
    "id": "html-table-span",
    "title": "复杂表格与表头关联",
    "module": "文档与语义",
    "what": "caption 描述表格目的，scope 标明行列标题。colspan、rowspan 合并单元格；表格用于数据关系，不用于页面布局。",
    "subtitle": "caption 描述表格目的，scope 标明行列标题。",
    "html": "<main class=\"lesson-demo\">\n  <table>\n    <caption>本周学习安排</caption>\n    <thead>\n      <tr>\n        <th scope=\"col\">阶段</th>\n        <th scope=\"col\">主题</th>\n        <th scope=\"col\">时长</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <th scope=\"row\" rowspan=\"2\">基础</th>\n        <td>HTML 语义</td>\n        <td>30 分钟</td>\n      </tr>\n      <tr>\n        <td>CSS 盒模型</td>\n        <td>45 分钟</td>\n      </tr>\n      <tr>\n        <th scope=\"row\">进阶</th>\n        <td>DOM 事件</td>\n        <td>60 分钟</td>\n      </tr>\n    </tbody>\n    <tfoot>\n      <tr>\n        <th colspan=\"2\" scope=\"row\">合计</th>\n        <td>135 分钟</td>\n      </tr>\n    </tfoot>\n  </table>\n</main>",
    "css": "caption {\n  text-align: left;\n  font-weight: 700;\n  padding-bottom: 14px;\n}",
    "js": "",
    "observe": [
      "合并后每一行仍要对应相同的总列数。",
      "th 与 td 提供不同的语义。"
    ],
    "challenge": "加入一个新阶段，再更新合计时间。",
    "quiz": [
      "横向合并使用哪个属性？",
      [
        "rowspan",
        "colspan",
        "span-row"
      ],
      1,
      "colspan 表示跨越的列数。"
    ],
    "doc": "https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/table",
    "uses": [
      "文档与语义",
      "实际页面开发"
    ],
    "tags": [
      "文档与语义",
      "HTML"
    ],
    "level": "入门",
    "minutes": 15,
    "pitfalls": []
  },
  {
    "cat": "css",
    "id": "css-cascade",
    "title": "级联、继承与优先级",
    "module": "选择器与级联",
    "what": "同一个属性冲突时，级联综合来源、重要性、层、优先级和顺序。颜色可继承，边框通常不继承。",
    "subtitle": "同一个属性冲突时，级联综合来源、重要性、层、优先级和顺序。",
    "html": "<main class=\"lesson-demo\">\n  <h1>级联、继承与优先级</h1>\n  <section class=\"cascade\">\n    <h2 id=\"headline\" class=\"title\">我最终是什么颜色？</h2>\n    <p>这段文字继承父级颜色。</p>\n  </section>\n</main>",
    "css": ".cascade {\n  color: #317051;\n}\nh2 {\n  color: #b45309;\n}\n.title {\n  color: #2563eb;\n}\n#headline {\n  color: #7c3aed;\n}",
    "js": "",
    "observe": [
      "id 选择器优先级高于类选择器。",
      "删除 id 规则后观察 class 规则生效。"
    ],
    "challenge": "删掉两条规则，逐步观察最终颜色。",
    "quiz": [
      "在相同来源和层中，哪个优先级通常更高？",
      [
        "标签",
        "类",
        "id"
      ],
      2,
      "id 的优先级高于类与标签；仍需先考虑级联层和重要性。"
    ],
    "doc": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_cascade/Specificity",
    "uses": [
      "选择器与级联",
      "实际页面开发"
    ],
    "tags": [
      "选择器与级联",
      "CSS"
    ],
    "level": "入门",
    "minutes": 15,
    "pitfalls": []
  },
  {
    "cat": "css",
    "id": "css-layers",
    "title": "@layer 管理样式层",
    "module": "选择器与级联",
    "what": "命名级联层使样式覆盖顺序可控。普通声明中后面的层优先，未分层普通声明高于分层声明；important 的层顺序相反。",
    "subtitle": "命名级联层使样式覆盖顺序可控。",
    "html": "<main class=\"lesson-demo\">\n  <h1>@layer 管理样式层</h1>\n  <button class=\"layer-button\">层控制的按钮</button>\n</main>",
    "css": "@layer reset, components, overrides;\n@layer components {\n  .layer-button {\n    background: #dbeafe;\n    padding: 18px;\n  }\n}\n@layer overrides {\n  button {\n    background: #d2e8da;\n  }\n}",
    "js": "",
    "observe": [
      "低优先级选择器可以在后面的层覆盖前面层。",
      "实验普通声明，不使用 important。"
    ],
    "challenge": "交换层的声明顺序，比较按钮背景。",
    "quiz": [
      "普通声明中谁优先？",
      [
        "前面的层",
        "后面的层",
        "按层名排序"
      ],
      1,
      "普通声明优先采用后声明的层。"
    ],
    "doc": "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@layer",
    "uses": [
      "选择器与级联",
      "实际页面开发"
    ],
    "tags": [
      "选择器与级联",
      "CSS"
    ],
    "level": "进阶",
    "minutes": 15,
    "pitfalls": []
  },
  {
    "cat": "css",
    "id": "css-display",
    "title": "display 与文档流",
    "module": "盒模型与尺寸",
    "what": "block 独占行，inline 在行内排列，inline-block 保留行内位置但可设置尺寸。display:none 移除布局占位，visibility:hidden 保留占位。",
    "subtitle": "block 独占行，inline 在行内排列，inline-block 保留行内位置但可设置尺寸。",
    "html": "<main class=\"lesson-demo\">\n  <h1>display 与文档流</h1>\n  <div class=\"flow\">\n    <span>inline</span>\n    <span>inline</span>\n    <b>inline-block</b>\n    <p>block 独占一行</p>\n    <span>最后一项</span>\n  </div>\n</main>",
    "css": ".flow {\n  border: 1px dashed #9bb8a7;\n  padding: 16px;\n}\n.flow span {\n  background: #e7c78f;\n}\n.flow b {\n  display: inline-block;\n  width: 140px;\n  padding: 12px;\n  background: #cae1d2;\n}\n.flow p {\n  background: #dbeafe;\n}",
    "js": "",
    "observe": [
      "span 默认不独占行。",
      "改 visibility 和 display 比较占位。"
    ],
    "challenge": "把 p 改成 inline-block。",
    "quiz": [
      "隐藏并移除占位使用什么？",
      [
        "visibility: hidden",
        "display: none",
        "opacity: 0"
      ],
      1,
      "display:none 让元素不生成布局盒子。"
    ],
    "doc": "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/display",
    "uses": [
      "盒模型与尺寸",
      "实际页面开发"
    ],
    "tags": [
      "盒模型与尺寸",
      "CSS"
    ],
    "level": "入门",
    "minutes": 15,
    "pitfalls": []
  },
  {
    "cat": "css",
    "id": "css-sizing",
    "title": "box-sizing 与实际宽度",
    "module": "盒模型与尺寸",
    "what": "content-box 的 width 不包含 padding 和 border；border-box 包含它们。相同声明宽度可能生成不同的外部尺寸。",
    "subtitle": "content-box 的 width 不包含 padding 和 border；border-box 包含它们。",
    "html": "<main class=\"lesson-demo\">\n  <h1>box-sizing 与实际宽度</h1>\n  <div class=\"size content\">content-box：200 + 40 + 4 = 244px</div>\n  <div class=\"size border\">border-box：总宽 200px</div>\n</main>",
    "css": ".size {\n  width: 200px;\n  padding: 20px;\n  border: 2px solid #658a74;\n  margin: 12px 0;\n  background: #e6f1e9;\n}\n.content {\n  box-sizing: content-box;\n}\n.border {\n  box-sizing: border-box;\n}",
    "js": "",
    "observe": [
      "边框宽度有左右两边。",
      "border-box 中内容宽度为 156px。"
    ],
    "challenge": "把 padding 改成 30px，重新计算总宽度。",
    "quiz": [
      "border-box 的 width 包含什么？",
      [
        "仅内容",
        "内容、内边距和边框",
        "还包含 margin"
      ],
      1,
      "外边距始终位于声明盒尺寸之外。"
    ],
    "doc": "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/box-sizing",
    "uses": [
      "盒模型与尺寸",
      "实际页面开发"
    ],
    "tags": [
      "盒模型与尺寸",
      "CSS"
    ],
    "level": "入门",
    "minutes": 15,
    "pitfalls": []
  },
  {
    "cat": "css",
    "id": "css-units",
    "title": "px、rem、em 与视口单位",
    "module": "盒模型与尺寸",
    "what": "rem 相对根字号，em 在 font-size 中相对父字号，在多数其他属性中相对自身字号。vw、vh 随视口变化，dvh 更适合动态移动视口。",
    "subtitle": "rem 相对根字号，em 在 font-size 中相对父字号，在多数其他属性中相对自身字号。",
    "html": "<main class=\"lesson-demo\">\n  <h1>px、rem、em 与视口单位</h1>\n  <div class=\"units\">\n    <p class=\"rem\">1.5rem 字号</p>\n    <p class=\"em\">1.5em 字号</p>\n    <div class=\"viewport\">宽度 30vw</div>\n  </div>\n</main>",
    "css": ".units {\n  font-size: 20px;\n}\n.rem {\n  font-size: 1.5rem;\n}\n.em {\n  font-size: 1.5em;\n}\n.viewport {\n  width: 30vw;\n  padding: 1em;\n  background: #d6e9dc;\n}",
    "js": "",
    "observe": [
      "调整右侧根字号，观察 rem。",
      "em 示例使用父字号 20px。"
    ],
    "challenge": "把 .units 字号改成 30px。",
    "quiz": [
      "rem 相对于哪个字号？",
      [
        "父元素",
        "根元素",
        "浏览器宽度"
      ],
      1,
      "rem 始终以根元素字号为基准。"
    ],
    "doc": "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/length",
    "uses": [
      "盒模型与尺寸",
      "实际页面开发"
    ],
    "tags": [
      "盒模型与尺寸",
      "CSS"
    ],
    "level": "入门",
    "minutes": 15,
    "pitfalls": []
  },
  {
    "cat": "css",
    "id": "css-math",
    "title": "calc、min、max 与 clamp",
    "module": "盒模型与尺寸",
    "what": "CSS 数学函数把固定值与相对值组合。clamp(min, preferred, max) 让尺寸在边界内流动，适合响应式字号。",
    "subtitle": "CSS 数学函数把固定值与相对值组合。",
    "html": "<main class=\"lesson-demo\">\n  <h1>calc、min、max 与 clamp</h1>\n  <h2 class=\"fluid-title\">让文字自然适配宽度</h2>\n  <div class=\"math-card\">宽度 min(100%, 480px)</div>\n</main>",
    "css": ".fluid-title {\n  font-size: clamp(22px, 4vw, 48px);\n}\n.math-card {\n  width: min(100%, 480px);\n  padding: calc(12px + 1vw);\n  background: #e5efe7;\n}",
    "js": "",
    "observe": [
      "手机与电脑字号不同但不超过边界。",
      "calc 运算的加减号两侧保留空格。"
    ],
    "challenge": "修改 clamp 的最大字号为 64px。",
    "quiz": [
      "clamp 参数顺序是什么？",
      [
        "最大、理想、最小",
        "最小、理想、最大",
        "理想、最大、最小"
      ],
      1,
      "clamp 在最小与最大值之间约束理想值。"
    ],
    "doc": "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/clamp",
    "uses": [
      "盒模型与尺寸",
      "实际页面开发"
    ],
    "tags": [
      "盒模型与尺寸",
      "CSS"
    ],
    "level": "入门",
    "minutes": 15,
    "pitfalls": []
  },
  {
    "cat": "css",
    "id": "css-margin",
    "title": "外边距折叠",
    "module": "盒模型与尺寸",
    "what": "普通块布局中相邻垂直 margin 可能折叠成较大的值。Flex 和 Grid 子项的外边距不会按同样方式折叠。",
    "subtitle": "普通块布局中相邻垂直 margin 可能折叠成较大的值。",
    "html": "<main class=\"lesson-demo\">\n  <h1>外边距折叠</h1>\n  <div class=\"normal\">\n    <p>普通块：下 30px</p>\n    <p>普通块：上 20px</p>\n  </div>\n  <div class=\"flex-margin\">\n    <p>Flex：下 30px</p>\n    <p>Flex：上 20px</p>\n  </div>\n</main>",
    "css": ".normal,\n.flex-margin {\n  border: 1px solid #b5ccbd;\n  padding: 10px;\n  margin: 15px 0;\n}\n.normal p,\n.flex-margin p {\n  background: #deeddf;\n  margin: 0;\n}\n.normal p:first-child,\n.flex-margin p:first-child {\n  margin-bottom: 30px;\n}\n.normal p:last-child,\n.flex-margin p:last-child {\n  margin-top: 20px;\n}\n.flex-margin {\n  display: flex;\n  flex-direction: column;\n}",
    "js": "",
    "observe": [
      "普通块间距为 30px，Flex 间距为 50px。",
      "边框避免父子 margin 折叠干扰实验。"
    ],
    "challenge": "把普通容器也改成 flex。",
    "quiz": [
      "两个正的相邻折叠 margin 如何计算？",
      [
        "相加",
        "取较大值",
        "取较小值"
      ],
      1,
      "简单的两个正 margin 折叠后取较大值。"
    ],
    "doc": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing",
    "uses": [
      "盒模型与尺寸",
      "实际页面开发"
    ],
    "tags": [
      "盒模型与尺寸",
      "CSS"
    ],
    "level": "入门",
    "minutes": 15,
    "pitfalls": []
  },
  {
    "cat": "css",
    "id": "css-logical",
    "title": "逻辑属性与书写方向",
    "module": "盒模型与尺寸",
    "what": "inline 和 block 按书写方向定义尺寸与边界。padding-inline、margin-block 等逻辑属性能减少左右方向的硬编码。",
    "subtitle": "inline 和 block 按书写方向定义尺寸与边界。",
    "html": "<main class=\"lesson-demo\">\n  <h1>逻辑属性与书写方向</h1>\n  <div class=\"logical\" dir=\"ltr\">LTR → 阅读方向</div>\n  <div class=\"logical\" dir=\"rtl\">RTL ← 阅读方向</div>\n</main>",
    "css": ".logical {\n  border-inline-start: 5px solid #457c5d;\n  padding-inline: 18px;\n  padding-block: 12px;\n  margin-block: 14px;\n  background: #e9f2ec;\n}",
    "js": "",
    "observe": [
      "dir=rtl 时起始边框转到右边。",
      "逻辑属性更适合多语言界面。"
    ],
    "challenge": "设置 writing-mode:vertical-rl 比较起始边。",
    "quiz": [
      "inline-start 在 RTL 中通常是哪边？",
      [
        "左",
        "右",
        "下"
      ],
      1,
      "水平方向的 RTL 行内起始侧在右边。"
    ],
    "doc": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_logical_properties_and_values",
    "uses": [
      "盒模型与尺寸",
      "实际页面开发"
    ],
    "tags": [
      "盒模型与尺寸",
      "CSS"
    ],
    "level": "入门",
    "minutes": 15,
    "pitfalls": []
  },
  {
    "cat": "css",
    "id": "css-flex-grow",
    "title": "Flex 伸缩与 min-width",
    "module": "布局机制",
    "what": "flex-grow 分配剩余空间，flex-shrink 分担不足空间，flex-basis 是分配前的基准。长内容需要 min-width:0 才能按预期收缩。",
    "subtitle": "flex-grow 分配剩余空间，flex-shrink 分担不足空间，flex-basis 是分配前的基准。",
    "html": "<main class=\"lesson-demo\">\n  <h1>Flex 伸缩与 min-width</h1>\n  <div class=\"flex-lab\">\n    <div>A：1 份</div>\n    <div>B：2 份</div>\n    <div>C：1 份</div>\n  </div>\n</main>",
    "css": ".flex-lab {\n  display: flex;\n  gap: 12px;\n}\n.flex-lab > div {\n  flex: 1 1 0;\n  min-width: 0;\n  padding: 20px;\n  background: #dbeade;\n}\n.flex-lab > div:nth-child(2) {\n  flex-grow: 2;\n  background: #ecdcbf;\n}",
    "js": "",
    "observe": [
      "第二项获得两份可分配空间。",
      "gap 不参与 flex-grow 比例。"
    ],
    "challenge": "把第二项 flex-grow 改成 3。",
    "quiz": [
      "分配剩余空间由什么控制？",
      [
        "flex-grow",
        "flex-shrink",
        "order"
      ],
      0,
      "grow 控制剩余空间分配的相对比例。"
    ],
    "doc": "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/flex",
    "uses": [
      "布局机制",
      "实际页面开发"
    ],
    "tags": [
      "布局机制",
      "CSS"
    ],
    "level": "入门",
    "minutes": 15,
    "pitfalls": []
  },
  {
    "cat": "css",
    "id": "css-grid-areas",
    "title": "Grid 命名区域",
    "module": "布局机制",
    "what": "grid-template-areas 用区域名字描述页面结构。每个同名区域必须形成矩形，媒体查询可以重排区域而不修改 DOM。",
    "subtitle": "grid-template-areas 用区域名字描述页面结构。",
    "html": "<main class=\"lesson-demo\">\n  <h1>Grid 命名区域</h1>\n  <div class=\"areas\">\n    <header>页头</header>\n    <nav>导航</nav>\n    <article>主要内容</article>\n    <footer>页脚</footer>\n  </div>\n</main>",
    "css": ".areas {\n  display: grid;\n  grid-template-columns: 130px 1fr;\n  grid-template-areas: 'header header' 'nav main' 'footer footer';\n  gap: 12px;\n}\n.areas > * {\n  padding: 20px;\n  background: #e1ede4;\n}\n.areas header {\n  grid-area: header;\n}\n.areas nav {\n  grid-area: nav;\n}\n.areas article {\n  grid-area: main;\n}\n.areas footer {\n  grid-area: footer;\n}\n@media (max-width: 480px) {\n  .areas {\n    grid-template-columns: 1fr;\n    grid-template-areas: 'header' 'nav' 'main' 'footer';\n  }\n}",
    "js": "",
    "observe": [
      "宽屏导航在左边，窄屏回到一列。",
      "可视顺序不要与阅读和焦点顺序冲突。"
    ],
    "challenge": "增加一个右侧 aside 区域。",
    "quiz": [
      "同名网格区域应是什么形状？",
      [
        "任意形状",
        "矩形",
        "圆形"
      ],
      1,
      "不规则同名区域使声明无效。"
    ],
    "doc": "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/grid-template-areas",
    "uses": [
      "布局机制",
      "实际页面开发"
    ],
    "tags": [
      "布局机制",
      "CSS"
    ],
    "level": "入门",
    "minutes": 15,
    "pitfalls": []
  },
  {
    "cat": "css",
    "id": "css-auto-fit",
    "title": "auto-fit 与自适应卡片",
    "module": "布局机制",
    "what": "repeat(auto-fit,minmax(...)) 根据可用空间自动确定列数。min(100%,180px) 避免极窄设备溢出。",
    "subtitle": "repeat(auto-fit,minmax(...)) 根据可用空间自动确定列数。",
    "html": "<main class=\"lesson-demo\">\n  <h1>auto-fit 与自适应卡片</h1>\n  <div class=\"auto-grid\">\n    <article>HTML</article>\n    <article>CSS</article>\n    <article>JavaScript</article>\n    <article>Web API</article>\n  </div>\n</main>",
    "css": ".auto-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(min(100%, 180px), 1fr));\n  gap: 16px;\n}\n.auto-grid article {\n  padding: 32px 20px;\n  background: #dfede3;\n  border-radius: 10px;\n}",
    "js": "",
    "observe": [
      "无需多个断点即可自动改变列数。",
      "auto-fit 折叠空轨道，auto-fill 保留空轨道。"
    ],
    "challenge": "将最小卡片宽度改为 240px。",
    "quiz": [
      "auto-fit 会如何处理空轨道？",
      [
        "折叠",
        "始终保留",
        "改为一列"
      ],
      0,
      "auto-fit 将空轨道折叠，剩余轨道可扩展。"
    ],
    "doc": "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/repeat",
    "uses": [
      "布局机制",
      "实际页面开发"
    ],
    "tags": [
      "布局机制",
      "CSS"
    ],
    "level": "入门",
    "minutes": 15,
    "pitfalls": []
  },
  {
    "cat": "css",
    "id": "css-stacking",
    "title": "z-index 与层叠上下文",
    "module": "布局机制",
    "what": "z-index 在当前层叠上下文比较。transform、opacity 等可能建立新上下文，子元素再大的 z-index 也不能逃出父上下文。",
    "subtitle": "z-index 在当前层叠上下文比较。",
    "html": "<main class=\"lesson-demo\">\n  <h1>z-index 与层叠上下文</h1>\n  <div class=\"stack\">\n    <div class=\"parent\">\n      父层 1\n      <div class=\"child\">子层 999</div>\n    </div>\n    <div class=\"other\">另一个父层 2</div>\n  </div>\n</main>",
    "css": ".stack {\n  position: relative;\n  height: 230px;\n}\n.parent {\n  position: relative;\n  z-index: 1;\n  width: 200px;\n  height: 150px;\n  padding: 12px;\n  background: #c6dfce;\n}\n.child {\n  position: absolute;\n  z-index: 999;\n  top: 70px;\n  left: 80px;\n  width: 200px;\n  padding: 25px;\n  background: #d9bb82;\n}\n.other {\n  position: absolute;\n  z-index: 2;\n  top: 100px;\n  left: 150px;\n  padding: 40px;\n  background: #b8cfea;\n}",
    "js": "",
    "observe": [
      "子层 999 仍被另一个父层 2 覆盖。",
      "提高 parent 的层级会改变结果。"
    ],
    "challenge": "把 parent 的 z-index 改为 3。",
    "quiz": [
      "子元素能靠极大 z-index 逃出父上下文吗？",
      [
        "能",
        "不能",
        "只能在手机上"
      ],
      1,
      "层叠上下文整体作为一个单元参与父级排序。"
    ],
    "doc": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_positioned_layout/Stacking_context",
    "uses": [
      "布局机制",
      "实际页面开发"
    ],
    "tags": [
      "布局机制",
      "CSS"
    ],
    "level": "进阶",
    "minutes": 15,
    "pitfalls": []
  },
  {
    "cat": "css",
    "id": "css-pseudo",
    "title": "伪元素与生成内容",
    "module": "选择器与级联",
    "what": "::before、::after 创建装饰性生成内容；::first-letter 可以修饰首字。重要信息应在 HTML 中，不能只依赖 CSS content。",
    "subtitle": "::before、::after 创建装饰性生成内容；::first-letter 可以修饰首字。",
    "html": "<main class=\"lesson-demo\">\n  <h1>伪元素与生成内容</h1>\n  <p class=\"quote\">每次修改一个变量，才能看清变化的原因。</p>\n  <p class=\"dropcap\">从一个很小的页面开始，让每次改动都有可见的反馈。</p>\n</main>",
    "css": ".quote::before {\n  content: '“';\n  color: #a17835;\n  font-size: 3rem;\n  vertical-align: middle;\n}\n.quote::after {\n  content: '”';\n  color: #a17835;\n  font-size: 3rem;\n  vertical-align: middle;\n}\n.dropcap::first-letter {\n  float: left;\n  font-size: 3rem;\n  line-height: 1;\n  margin-inline-end: 10px;\n}",
    "js": "",
    "observe": [
      "伪元素不是真实 DOM 节点。",
      "首字下沉使用 float 使文字环绕。"
    ],
    "challenge": "用 ::after 添加一个装饰性圆点。",
    "quiz": [
      "关键提示只写在 content 里是否合适？",
      [
        "合适",
        "不合适",
        "只要颜色足够深"
      ],
      1,
      "关键信息应该作为实际 HTML 内容存在。"
    ],
    "doc": "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Selectors/Pseudo-elements",
    "uses": [
      "选择器与级联",
      "实际页面开发"
    ],
    "tags": [
      "选择器与级联",
      "CSS"
    ],
    "level": "入门",
    "minutes": 15,
    "pitfalls": []
  },
  {
    "cat": "css",
    "id": "css-has",
    "title": ":has 与关系选择器",
    "module": "选择器与级联",
    "what": ":has() 可以根据后代或相邻元素的状态选择父级。复杂选择器要兼顾性能，并检查目标浏览器支持。",
    "subtitle": ":has() 可以根据后代或相邻元素的状态选择父级。",
    "html": "<main class=\"lesson-demo\">\n  <h1>:has 与关系选择器</h1>\n  <label class=\"choice\">\n    <input type=\"checkbox\" />\n    我愿意每天练习 15 分钟\n  </label>\n  <label class=\"choice\">\n    <input type=\"checkbox\" />\n    我会记录学习笔记\n  </label>\n</main>",
    "css": ".choice {\n  padding: 20px;\n  border: 1px solid #cbdccf;\n  border-radius: 10px;\n}\n.choice:has(input:checked) {\n  background: #e2f0e7;\n  border-color: #427a58;\n}",
    "js": "",
    "observe": [
      "勾选后父级卡片也改变外观。",
      "不需要 JavaScript 切换 class。"
    ],
    "challenge": "加一个 :has(input:focus-visible) 样式。",
    "quiz": [
      "哪个规则选中包含勾选框的父卡片？",
      [
        ".choice:checked",
        ".choice:has(input:checked)",
        "input:has(.choice)"
      ],
      1,
      ":has 匹配存在相应关系元素的目标。"
    ],
    "doc": "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Selectors/:has",
    "uses": [
      "选择器与级联",
      "实际页面开发"
    ],
    "tags": [
      "选择器与级联",
      "CSS"
    ],
    "level": "进阶",
    "minutes": 15,
    "pitfalls": []
  },
  {
    "cat": "css",
    "id": "css-background",
    "title": "背景图层与混合",
    "module": "视觉与排版",
    "what": "多个 background 图层按前面的在上方叠加。渐变可作为背景图，background-size 和 position 控制尺寸及位置。",
    "subtitle": "多个 background 图层按前面的在上方叠加。",
    "html": "<main class=\"lesson-demo\">\n  <h1>背景图层与混合</h1>\n  <div class=\"layer-art\">\n    <h2>只用 CSS 画一张封面</h2>\n    <p>渐变、光点与底色</p>\n  </div>\n</main>",
    "css": ".layer-art {\n  padding: 50px 30px;\n  color: white;\n  border-radius: 16px;\n  background:\n    radial-gradient(circle at 80% 20%, #f7cc7688 0 12%, transparent 13%),\n    linear-gradient(120deg, #153d30, #6c9178);\n}\n.layer-art p {\n  color: #e2ede5;\n}",
    "js": "",
    "observe": [
      "第一张 radial-gradient 在 linear-gradient 上方。",
      "改变光点位置可调整视觉重心。"
    ],
    "challenge": "增加第二个 radial-gradient 光点。",
    "quiz": [
      "背景图层谁在最上层？",
      [
        "最后一个",
        "第一个",
        "面积最大的"
      ],
      1,
      "background 列表中的第一个图层在最前面。"
    ],
    "doc": "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/background",
    "uses": [
      "视觉与排版",
      "实际页面开发"
    ],
    "tags": [
      "视觉与排版",
      "CSS"
    ],
    "level": "入门",
    "minutes": 15,
    "pitfalls": []
  },
  {
    "cat": "css",
    "id": "css-object-fit",
    "title": "object-fit 与图片裁切",
    "module": "视觉与排版",
    "what": "固定图片盒中，contain 保持完整图片，cover 填满但可能裁切。object-position 决定裁切时关注的位置。",
    "subtitle": "固定图片盒中，contain 保持完整图片，cover 填满但可能裁切。",
    "html": "<main class=\"lesson-demo\">\n  <h1>object-fit 与图片裁切</h1>\n  <div class=\"fit-grid\">\n    <img\n      class=\"contain\"\n      alt=\"完整的山峰插画\"\n      src=\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='180'%3E%3Crect width='400' height='180' fill='%23cadfce'/%3E%3Ccircle cx='320' cy='55' r='35' fill='%23dbac5b'/%3E%3C/svg%3E\"\n    />\n    <img\n      class=\"cover\"\n      alt=\"裁切后的山峰插画\"\n      src=\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='180'%3E%3Crect width='400' height='180' fill='%23cadfce'/%3E%3Ccircle cx='320' cy='55' r='35' fill='%23dbac5b'/%3E%3C/svg%3E\"\n    />\n  </div>\n</main>",
    "css": ".fit-grid {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 16px;\n}\n.fit-grid img {\n  width: 160px;\n  height: 180px;\n  background: #eee;\n}\n.contain {\n  object-fit: contain;\n}\n.cover {\n  object-fit: cover;\n  object-position: right;\n}",
    "js": "",
    "observe": [
      "contain 上下可能有留白。",
      "cover 配合 right 保留右侧太阳。"
    ],
    "challenge": "把 object-position 改成 left。",
    "quiz": [
      "保持完整图片应选什么？",
      [
        "cover",
        "contain",
        "fill"
      ],
      1,
      "contain 在盒子内完整展示图片并保留宽高比。"
    ],
    "doc": "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/object-fit",
    "uses": [
      "视觉与排版",
      "实际页面开发"
    ],
    "tags": [
      "视觉与排版",
      "CSS"
    ],
    "level": "入门",
    "minutes": 15,
    "pitfalls": []
  },
  {
    "cat": "css",
    "id": "css-text-wrap",
    "title": "换行、断词与阅读宽度",
    "module": "视觉与排版",
    "what": "长链接和标识符可能撑破容器。overflow-wrap:anywhere 允许必要的断词，max-width 用 ch 控制大致行宽，中文仍要实际检查阅读效果。",
    "subtitle": "长链接和标识符可能撑破容器。",
    "html": "<main class=\"lesson-demo\">\n  <h1>换行、断词与阅读宽度</h1>\n  <article class=\"reading\">\n    <h2>一段舒适的文字</h2>\n    <p>\n      内容需要合理的行宽与行高。太宽的行会让视线返回下一行变得困难，太窄又会频繁打断阅读。\n    </p>\n    <p>VeryLongContinuousIdentifierWithoutAnySpacesForTestingOverflow</p>\n  </article>\n</main>",
    "css": ".reading {\n  max-width: 55ch;\n  line-height: 1.85;\n}\n.reading p {\n  overflow-wrap: anywhere;\n}",
    "js": "",
    "observe": [
      "窄屏长标识符不再溢出。",
      "ch 基于字体中字符 0 的宽度。"
    ],
    "challenge": "把 max-width 改成 35ch，比较阅读感受。",
    "quiz": [
      "防止长单词撑破容器可使用什么？",
      [
        "overflow-wrap:anywhere",
        "white-space:nowrap",
        "text-align:center"
      ],
      0,
      "必要时允许长内容断词能避免横向溢出。"
    ],
    "doc": "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/overflow-wrap",
    "uses": [
      "视觉与排版",
      "实际页面开发"
    ],
    "tags": [
      "视觉与排版",
      "CSS"
    ],
    "level": "入门",
    "minutes": 15,
    "pitfalls": []
  },
  {
    "cat": "css",
    "id": "css-custom-properties",
    "title": "自定义属性与设计令牌",
    "module": "视觉与排版",
    "what": "CSS 自定义属性参与级联，var() 读取变量并可设置回退值。统一颜色、间距和圆角可保持组件视觉一致。",
    "subtitle": "CSS 自定义属性参与级联，var() 读取变量并可设置回退值。",
    "html": "<main class=\"lesson-demo\">\n  <h1>自定义属性与设计令牌</h1>\n  <div class=\"tokens\">\n    <button>主要按钮</button>\n    <article>同一组设计变量</article>\n    <button class=\"alternate\">局部覆盖</button>\n  </div>\n</main>",
    "css": ".tokens {\n  --brand: #236347;\n  --space: 16px;\n  --radius: 10px;\n  display: grid;\n  gap: var(--space);\n}\n.tokens button,\n.tokens article {\n  padding: var(--space);\n  border-radius: var(--radius);\n  background: var(--brand, #444);\n  color: white;\n}\n.tokens .alternate {\n  --brand: #a77832;\n}",
    "js": "",
    "observe": [
      "修改一个变量影响多个组件。",
      "局部覆盖只影响当前元素与后代。"
    ],
    "challenge": "添加 --border 变量并应用到组件。",
    "quiz": [
      "读取自定义属性使用什么？",
      [
        "get()",
        "var()",
        "value()"
      ],
      1,
      "var(--name, fallback) 引用自定义属性。"
    ],
    "doc": "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/--*",
    "uses": [
      "视觉与排版",
      "实际页面开发"
    ],
    "tags": [
      "视觉与排版",
      "CSS"
    ],
    "level": "入门",
    "minutes": 15,
    "pitfalls": []
  },
  {
    "cat": "css",
    "id": "css-reduced-motion",
    "title": "尊重减少动画偏好",
    "module": "响应式与体验",
    "what": "prefers-reduced-motion:reduce 检测用户减少动画的偏好。优先减少大幅运动，保留必要的状态反馈，而不是让信息消失。",
    "subtitle": "prefers-reduced-motion:reduce 检测用户减少动画的偏好。",
    "html": "<main class=\"lesson-demo\">\n  <h1>尊重减少动画偏好</h1>\n  <div class=\"motion-ball\" aria-hidden=\"true\"></div>\n  <p>系统启用“减少动画”后，小球停止移动。</p>\n</main>",
    "css": ".motion-ball {\n  width: 60px;\n  height: 60px;\n  border-radius: 50%;\n  background: #78a486;\n  animation: travel 2s ease-in-out infinite alternate;\n}\n@keyframes travel {\n  to {\n    transform: translateX(180px);\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .motion-ball {\n    animation: none;\n  }\n}",
    "js": "",
    "observe": [
      "用系统设置或开发者工具模拟偏好。",
      "小球装饰使用 aria-hidden。"
    ],
    "challenge": "给小球加入颜色变化，保留静态反馈。",
    "quiz": [
      "检测减少动画偏好使用什么？",
      [
        "prefers-color-scheme",
        "prefers-reduced-motion",
        "orientation"
      ],
      1,
      "该媒体特性反映用户希望减少非必要运动的设置。"
    ],
    "doc": "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-motion",
    "uses": [
      "响应式与体验",
      "实际页面开发"
    ],
    "tags": [
      "响应式与体验",
      "CSS"
    ],
    "level": "入门",
    "minutes": 15,
    "pitfalls": []
  },
  {
    "cat": "css",
    "id": "css-scroll-snap",
    "title": "滚动吸附与横向画廊",
    "module": "响应式与体验",
    "what": "scroll-snap-type 在滚动容器声明吸附，子项用 scroll-snap-align 给出吸附点。避免强制吸附妨碍内容访问。",
    "subtitle": "scroll-snap-type 在滚动容器声明吸附，子项用 scroll-snap-align 给出吸附点。",
    "html": "<main class=\"lesson-demo\">\n  <h1>滚动吸附与横向画廊</h1>\n  <div class=\"snap-gallery\" tabindex=\"0\" aria-label=\"横向课程画廊\">\n    <article>01 HTML</article>\n    <article>02 CSS</article>\n    <article>03 JavaScript</article>\n    <article>04 项目</article>\n  </div>\n</main>",
    "css": ".snap-gallery {\n  display: flex;\n  overflow-x: auto;\n  gap: 16px;\n  scroll-snap-type: x proximity;\n  padding-bottom: 16px;\n}\n.snap-gallery article {\n  flex: 0 0 230px;\n  padding: 60px 24px;\n  scroll-snap-align: start;\n  background: #e0ede5;\n  border-radius: 14px;\n}",
    "js": "",
    "observe": [
      "横向滚动靠近卡片时自然吸附。",
      "容器可聚焦，支持键盘滚动。"
    ],
    "challenge": "试验 mandatory 与 proximity 的区别。",
    "quiz": [
      "吸附点在哪里声明？",
      [
        "子项 scroll-snap-align",
        "body margin",
        "容器 z-index"
      ],
      0,
      "子项声明对齐点，容器声明吸附方向与强度。"
    ],
    "doc": "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/scroll-snap-type",
    "uses": [
      "响应式与体验",
      "实际页面开发"
    ],
    "tags": [
      "响应式与体验",
      "CSS"
    ],
    "level": "入门",
    "minutes": 15,
    "pitfalls": []
  },
  {
    "cat": "css",
    "id": "css-print",
    "title": "打印样式与屏幕样式",
    "module": "响应式与体验",
    "what": "@media print 可以移除导航和装饰，改成易于纸面阅读的排版。打印页面应保留有意义的内容和链接信息。",
    "subtitle": "@media print 可以移除导航和装饰，改成易于纸面阅读的排版。",
    "html": "<main class=\"lesson-demo\">\n  <h1>打印样式与屏幕样式</h1>\n  <nav class=\"screen-only\">这条导航仅用于屏幕</nav>\n  <article>\n    <h2>学习记录</h2>\n    <p>本周完成 HTML 语义和 CSS 盒模型。</p>\n    <a href=\"https://developer.mozilla.org/\">参考资料</a>\n  </article>\n</main>",
    "css": ".screen-only {\n  padding: 12px;\n  background: #e5f0e8;\n}\n@media print {\n  .screen-only {\n    display: none;\n  }\n  body {\n    background: white;\n    color: black;\n  }\n  a::after {\n    content: ' (' attr(href) ')';\n  }\n  article {\n    break-inside: avoid;\n  }\n}",
    "js": "",
    "observe": [
      "导出 HTML 后使用浏览器打印预览。",
      "打印规则不影响普通预览。"
    ],
    "challenge": "添加打印专用页脚。",
    "quiz": [
      "打印样式使用哪种媒体？",
      [
        "screen",
        "print",
        "paper"
      ],
      1,
      "@media print 匹配打印输出。"
    ],
    "doc": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries/Printing",
    "uses": [
      "响应式与体验",
      "实际页面开发"
    ],
    "tags": [
      "响应式与体验",
      "CSS"
    ],
    "level": "入门",
    "minutes": 15,
    "pitfalls": []
  },
  {
    "cat": "css",
    "id": "css-supports",
    "title": "@supports 与渐进增强",
    "module": "响应式与体验",
    "what": "@supports 根据浏览器是否理解声明启用增强样式。先提供基本可用的回退，再添加更先进的布局或视觉效果。",
    "subtitle": "@supports 根据浏览器是否理解声明启用增强样式。",
    "html": "<main class=\"lesson-demo\">\n  <h1>@supports 与渐进增强</h1>\n  <div class=\"enhance\">基础样式可用，支持时增加混合效果</div>\n</main>",
    "css": ".enhance {\n  padding: 32px;\n  background: #e4eee7;\n  border: 1px solid #bed3c4;\n  border-radius: 12px;\n}\n@supports (background: color-mix(in srgb, green, white)) {\n  .enhance {\n    background: color-mix(in srgb, #397752 18%, white);\n  }\n}",
    "js": "",
    "observe": [
      "不支持新声明时仍有背景色。",
      "检测语法支持不保证所有使用情境都一致。"
    ],
    "challenge": "检测 display:grid 后给容器设置 grid。",
    "quiz": [
      "@supports 用来检测什么？",
      [
        "用户屏幕宽度",
        "浏览器对 CSS 声明的支持",
        "网络速度"
      ],
      1,
      "它是 CSS 功能查询。"
    ],
    "doc": "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@supports",
    "uses": [
      "响应式与体验",
      "实际页面开发"
    ],
    "tags": [
      "响应式与体验",
      "CSS"
    ],
    "level": "进阶",
    "minutes": 15,
    "pitfalls": []
  },
  {
    "cat": "css",
    "id": "css-aspect-ratio",
    "title": "aspect-ratio 与比例盒",
    "module": "盒模型与尺寸",
    "what": "aspect-ratio 为自动尺寸提供宽高比。常用于视频封面与卡片占位；当宽高都明确时，比例不再决定尺寸。",
    "subtitle": "aspect-ratio 为自动尺寸提供宽高比。",
    "html": "<main class=\"lesson-demo\">\n  <h1>aspect-ratio 与比例盒</h1>\n  <div class=\"ratio wide\">16 / 9</div>\n  <div class=\"ratio square\">1 / 1</div>\n</main>",
    "css": ".ratio {\n  width: min(100%, 300px);\n  display: grid;\n  place-items: center;\n  margin: 16px 0;\n  background: #c9e0d1;\n  border-radius: 12px;\n}\n.wide {\n  aspect-ratio: 16 / 9;\n}\n.square {\n  aspect-ratio: 1;\n}",
    "js": "",
    "observe": [
      "宽度相同，高度由比例计算。",
      "有助于在图片加载前预留空间。"
    ],
    "challenge": "把比例改成 4/3。",
    "quiz": [
      "宽高都固定时 aspect-ratio 会怎样？",
      [
        "一定覆盖高度",
        "通常不再决定盒尺寸",
        "删除元素"
      ],
      1,
      "比例影响自动尺寸，不会强制覆盖两个明确的尺寸。"
    ],
    "doc": "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/aspect-ratio",
    "uses": [
      "盒模型与尺寸",
      "实际页面开发"
    ],
    "tags": [
      "盒模型与尺寸",
      "CSS"
    ],
    "level": "入门",
    "minutes": 15,
    "pitfalls": []
  },
  {
    "cat": "css",
    "id": "css-bfc",
    "title": "flow-root 与浮动包含",
    "module": "布局机制",
    "what": "display:flow-root 建立新的块格式化上下文，包含内部浮动，避免容器高度只由非浮动内容决定。它也用于隔离部分外边距折叠。",
    "subtitle": "display:flow-root 建立新的块格式化上下文，包含内部浮动，避免容器高度只由非浮动内容决定。",
    "html": "<main class=\"lesson-demo\">\n  <h1>flow-root 与浮动包含</h1>\n  <div class=\"float-card\">\n    <div class=\"avatar\">头像</div>\n    <p>短文字。</p>\n  </div>\n  <p>这一段位于卡片之外。</p>\n</main>",
    "css": ".float-card {\n  display: flow-root;\n  border: 1px solid #bbd1c1;\n  padding: 16px;\n}\n.avatar {\n  float: left;\n  width: 100px;\n  height: 140px;\n  margin-right: 16px;\n  background: #cadfd0;\n  display: grid;\n  place-items: center;\n}",
    "js": "",
    "observe": [
      "删除 flow-root 后容器不再完全包含浮动。",
      "浮动适合文字环绕，常规布局优先 Flex/Grid。"
    ],
    "challenge": "改成 Flex 并比较高度与文字环绕。",
    "quiz": [
      "哪个声明可以包含浮动？",
      [
        "display:flow-root",
        "color:green",
        "position:static"
      ],
      0,
      "flow-root 建立新的块格式化上下文。"
    ],
    "doc": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_display/Block_formatting_context",
    "uses": [
      "布局机制",
      "实际页面开发"
    ],
    "tags": [
      "布局机制",
      "CSS"
    ],
    "level": "进阶",
    "minutes": 15,
    "pitfalls": []
  },
  {
    "cat": "js",
    "id": "js-variables",
    "title": "let、const 与块级作用域",
    "module": "语法与数据",
    "what": "const 禁止重新绑定变量，但不冻结对象。let 可以重新赋值，两者都使用块级作用域。",
    "subtitle": "const 禁止重新绑定变量，但不冻结对象。",
    "html": "<main class=\"lesson-demo\">\n  <h1>let、const 与块级作用域</h1>\n  <p>观察输出，再修改 JavaScript 并运行。输出同时会显示在工作台控制台。</p>\n  <pre id=\"result\" aria-live=\"polite\"></pre>\n</main>",
    "css": "",
    "js": "// 把结果写到页面，而不是只在开发者工具里查看。\nfunction print(...values) {\n  const text = values\n    .map((value) => {\n      return typeof value === 'object' ? JSON.stringify(value, null, 2) : String(value);\n    })\n    .join(' ');\n  document.getElementById('result').textContent += text + '\\n';\n  console.log(...values);\n}\n\nconst learner = { name: '小雨', days: 1 };\nlearner.days += 1;\nlet score = 60;\nscore += 20;\nif (score >= 80) {\n  const message = '今天进步了';\n  print(message);\n}\nprint(learner, score);",
    "observe": [
      "const 对象内部可以修改。",
      "块外无法直接读取 message。"
    ],
    "challenge": "将 learner 改成数组，并用 push 添加一项。",
    "quiz": [
      "const 对象的属性能修改吗？",
      [
        "能",
        "不能",
        "必须先用 let"
      ],
      0,
      "const 限制绑定，不意味着深度不可变。"
    ],
    "doc": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types",
    "uses": [
      "语法与数据",
      "实际页面开发"
    ],
    "tags": [
      "语法与数据",
      "JS"
    ],
    "level": "入门",
    "minutes": 15,
    "pitfalls": []
  },
  {
    "cat": "js",
    "id": "js-types",
    "title": "类型、typeof 与空值",
    "module": "语法与数据",
    "what": "基本类型包括字符串、数字、布尔、undefined、null、bigint 和 symbol。typeof null 是历史遗留结果 object，不能用来识别非空对象。",
    "subtitle": "基本类型包括字符串、数字、布尔、undefined、null、bigint 和 symbol。",
    "html": "<main class=\"lesson-demo\">\n  <h1>类型、typeof 与空值</h1>\n  <p>观察输出，再修改 JavaScript 并运行。输出同时会显示在工作台控制台。</p>\n  <pre id=\"result\" aria-live=\"polite\"></pre>\n</main>",
    "css": "",
    "js": "// 把结果写到页面，而不是只在开发者工具里查看。\nfunction print(...values) {\n  const text = values\n    .map((value) => {\n      return typeof value === 'object' ? JSON.stringify(value, null, 2) : String(value);\n    })\n    .join(' ');\n  document.getElementById('result').textContent += text + '\\n';\n  console.log(...values);\n}\n\nconst values = ['HTML', 42, true, undefined, null, 10n, Symbol('id')];\nfor (const value of values) {\n  print(String(value), '→', typeof value);\n}\nprint('数组识别：', Array.isArray([1, 2]));",
    "observe": [
      "typeof null 为 object。",
      "Array.isArray 比 typeof 更适合判断数组。"
    ],
    "challenge": "加入一个函数和一个普通对象。",
    "quiz": [
      "typeof null 是什么？",
      [
        "null",
        "undefined",
        "object"
      ],
      2,
      "这是历史遗留行为，需要单独判断 null。"
    ],
    "doc": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Data_structures",
    "uses": [
      "语法与数据",
      "实际页面开发"
    ],
    "tags": [
      "语法与数据",
      "JS"
    ],
    "level": "入门",
    "minutes": 15,
    "pitfalls": []
  },
  {
    "cat": "js",
    "id": "js-conversion",
    "title": "类型转换与严格比较",
    "module": "语法与数据",
    "what": "输入框的 value 是字符串。Number 可显式转换；=== 不做类型强制转换，通常更容易预测。NaN 用 Number.isNaN 判断。",
    "subtitle": "输入框的 value 是字符串。",
    "html": "<main class=\"lesson-demo\">\n  <h1>类型转换与严格比较</h1>\n  <p>观察输出，再修改 JavaScript 并运行。输出同时会显示在工作台控制台。</p>\n  <pre id=\"result\" aria-live=\"polite\"></pre>\n</main>",
    "css": "",
    "js": "// 把结果写到页面，而不是只在开发者工具里查看。\nfunction print(...values) {\n  const text = values\n    .map((value) => {\n      return typeof value === 'object' ? JSON.stringify(value, null, 2) : String(value);\n    })\n    .join(' ');\n  document.getElementById('result').textContent += text + '\\n';\n  console.log(...values);\n}\n\nprint('5' + 2);\nprint(Number('5') + 2);\nprint('5' == 5, '5' === 5);\nprint(Number(''), Number('abc'));\nprint('NaN 判断：', Number.isNaN(Number('abc')));",
    "observe": [
      "加号可能做字符串拼接。",
      "空字符串 Number 后得到 0。"
    ],
    "challenge": "比较 parseInt(\"12px\",10) 和 Number(\"12px\")。",
    "quiz": [
      "\"5\" === 5 的结果？",
      [
        "true",
        "false",
        "报错"
      ],
      1,
      "严格比较不把字符串转成数字。"
    ],
    "doc": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_operators",
    "uses": [
      "语法与数据",
      "实际页面开发"
    ],
    "tags": [
      "语法与数据",
      "JS"
    ],
    "level": "入门",
    "minutes": 15,
    "pitfalls": []
  },
  {
    "cat": "js",
    "id": "js-operators",
    "title": "短路运算、可选链与空值合并",
    "module": "语法与数据",
    "what": "|| 按真假选择，?? 只在 null 或 undefined 时回退。?. 在链式访问遇到空值时返回 undefined。",
    "subtitle": "|| 按真假选择，?? 只在 null 或 undefined 时回退。",
    "html": "<main class=\"lesson-demo\">\n  <h1>短路运算、可选链与空值合并</h1>\n  <p>观察输出，再修改 JavaScript 并运行。输出同时会显示在工作台控制台。</p>\n  <pre id=\"result\" aria-live=\"polite\"></pre>\n</main>",
    "css": "",
    "js": "// 把结果写到页面，而不是只在开发者工具里查看。\nfunction print(...values) {\n  const text = values\n    .map((value) => {\n      return typeof value === 'object' ? JSON.stringify(value, null, 2) : String(value);\n    })\n    .join(' ');\n  document.getElementById('result').textContent += text + '\\n';\n  console.log(...values);\n}\n\nconst settings = { volume: 0, profile: null };\nprint('||：', settings.volume || 50);\nprint('??：', settings.volume ?? 50);\nprint('可选链：', settings.profile?.name ?? '匿名');",
    "observe": [
      "0 是合法数值，但在 || 中被当作假值。",
      "可选链不能对未声明变量使用。"
    ],
    "challenge": "把 volume 改成空字符串和 null。",
    "quiz": [
      "保留 0 的默认值操作适合什么？",
      [
        "||",
        "??",
        "&&"
      ],
      1,
      "?? 仅在 null/undefined 时使用默认值。"
    ],
    "doc": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing",
    "uses": [
      "语法与数据",
      "实际页面开发"
    ],
    "tags": [
      "语法与数据",
      "JS"
    ],
    "level": "入门",
    "minutes": 15,
    "pitfalls": []
  },
  {
    "cat": "js",
    "id": "js-control",
    "title": "if、switch 与条件表达式",
    "module": "控制流与函数",
    "what": "分支根据条件执行不同代码。switch 比较具体值，通常需要 break，三元表达式适合简单的二选一。",
    "subtitle": "分支根据条件执行不同代码。",
    "html": "<main class=\"lesson-demo\">\n  <h1>if、switch 与条件表达式</h1>\n  <p>观察输出，再修改 JavaScript 并运行。输出同时会显示在工作台控制台。</p>\n  <pre id=\"result\" aria-live=\"polite\"></pre>\n</main>",
    "css": "",
    "js": "// 把结果写到页面，而不是只在开发者工具里查看。\nfunction print(...values) {\n  const text = values\n    .map((value) => {\n      return typeof value === 'object' ? JSON.stringify(value, null, 2) : String(value);\n    })\n    .join(' ');\n  document.getElementById('result').textContent += text + '\\n';\n  console.log(...values);\n}\n\nconst score = 86;\nif (score >= 90) {\n  print('优秀');\n} else if (score >= 60) {\n  print('通过');\n} else {\n  print('继续练习');\n}\nconst category = 'css';\nswitch (category) {\n  case 'html':\n    print('内容结构');\n    break;\n  case 'css':\n    print('外观布局');\n    break;\n  default:\n    print('行为交互');\n}\nprint(score >= 60 ? '通过' : '未通过');",
    "observe": [
      "else if 按从上到下的顺序判断。",
      "遗漏 break 可能发生贯穿。"
    ],
    "challenge": "加入 80 分以上“良好”的分支。",
    "quiz": [
      "switch 忘写 break 可能发生什么？",
      [
        "贯穿后续分支",
        "自动结束",
        "固定报错"
      ],
      0,
      "没有 break 会继续执行后续分支代码。"
    ],
    "doc": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling",
    "uses": [
      "控制流与函数",
      "实际页面开发"
    ],
    "tags": [
      "控制流与函数",
      "JS"
    ],
    "level": "入门",
    "minutes": 15,
    "pitfalls": []
  },
  {
    "cat": "js",
    "id": "js-loops",
    "title": "for、while 与 for...of",
    "module": "控制流与函数",
    "what": "循环适合重复任务。for...of 迭代可迭代对象的值，for...in 遍历可枚举属性键，不推荐拿它遍历数组值。",
    "subtitle": "循环适合重复任务。",
    "html": "<main class=\"lesson-demo\">\n  <h1>for、while 与 for...of</h1>\n  <p>观察输出，再修改 JavaScript 并运行。输出同时会显示在工作台控制台。</p>\n  <pre id=\"result\" aria-live=\"polite\"></pre>\n</main>",
    "css": "",
    "js": "// 把结果写到页面，而不是只在开发者工具里查看。\nfunction print(...values) {\n  const text = values\n    .map((value) => {\n      return typeof value === 'object' ? JSON.stringify(value, null, 2) : String(value);\n    })\n    .join(' ');\n  document.getElementById('result').textContent += text + '\\n';\n  console.log(...values);\n}\n\nconst topics = ['HTML', 'CSS', 'JavaScript'];\nfor (const topic of topics) {\n  print('主题：', topic);\n}\nfor (let i = 1; i <= 3; i++) {\n  print('第', i, '次练习');\n}\nlet remaining = 2;\nwhile (remaining > 0) {\n  print('剩余：', remaining--);\n}",
    "observe": [
      "while 必须让条件逐渐结束。",
      "for...of 得到内容而不是下标。"
    ],
    "challenge": "用 continue 跳过 CSS，用 break 提前停止。",
    "quiz": [
      "数组值遍历常用什么？",
      [
        "for...of",
        "for...in",
        "switch"
      ],
      0,
      "for...of 遍历数组的值。"
    ],
    "doc": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration",
    "uses": [
      "控制流与函数",
      "实际页面开发"
    ],
    "tags": [
      "控制流与函数",
      "JS"
    ],
    "level": "入门",
    "minutes": 15,
    "pitfalls": []
  },
  {
    "cat": "js",
    "id": "js-functions",
    "title": "函数、参数与返回值",
    "module": "控制流与函数",
    "what": "函数封装可重复的操作。默认参数只在参数为 undefined 时使用，return 返回值并结束当前函数。",
    "subtitle": "函数封装可重复的操作。",
    "html": "<main class=\"lesson-demo\">\n  <h1>函数、参数与返回值</h1>\n  <p>观察输出，再修改 JavaScript 并运行。输出同时会显示在工作台控制台。</p>\n  <pre id=\"result\" aria-live=\"polite\"></pre>\n</main>",
    "css": "",
    "js": "// 把结果写到页面，而不是只在开发者工具里查看。\nfunction print(...values) {\n  const text = values\n    .map((value) => {\n      return typeof value === 'object' ? JSON.stringify(value, null, 2) : String(value);\n    })\n    .join(' ');\n  document.getElementById('result').textContent += text + '\\n';\n  console.log(...values);\n}\n\nfunction total(price, count = 1) {\n  return price * count;\n}\nconst discount = (amount, rate = 0.9) => amount * rate;\nprint(total(29, 3));\nprint(discount(total(29, 3)).toFixed(2));",
    "observe": [
      "返回值可以交给另一个函数使用。",
      "箭头函数的表达式体可以省略 return。"
    ],
    "challenge": "为 total 加运费参数。",
    "quiz": [
      "默认参数在什么情况下启用？",
      [
        "null",
        "undefined",
        "0"
      ],
      1,
      "未传入参数或显式传 undefined 才会使用默认值。"
    ],
    "doc": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions",
    "uses": [
      "控制流与函数",
      "实际页面开发"
    ],
    "tags": [
      "控制流与函数",
      "JS"
    ],
    "level": "入门",
    "minutes": 15,
    "pitfalls": []
  },
  {
    "cat": "js",
    "id": "js-closure",
    "title": "闭包与独立状态",
    "module": "控制流与函数",
    "what": "闭包让内部函数保留对外层词法环境的访问。工厂函数可以创建各自独立的私有状态。",
    "subtitle": "闭包让内部函数保留对外层词法环境的访问。",
    "html": "<main class=\"lesson-demo\">\n  <h1>闭包与独立状态</h1>\n  <p>观察输出，再修改 JavaScript 并运行。输出同时会显示在工作台控制台。</p>\n  <pre id=\"result\" aria-live=\"polite\"></pre>\n</main>",
    "css": "",
    "js": "// 把结果写到页面，而不是只在开发者工具里查看。\nfunction print(...values) {\n  const text = values\n    .map((value) => {\n      return typeof value === 'object' ? JSON.stringify(value, null, 2) : String(value);\n    })\n    .join(' ');\n  document.getElementById('result').textContent += text + '\\n';\n  console.log(...values);\n}\n\nfunction createCounter(start = 0) {\n  let count = start;\n  return () => ++count;\n}\nconst first = createCounter();\nconst second = createCounter(10);\nprint(first(), first(), second(), first());",
    "observe": [
      "两个计数器的状态不共享。",
      "外部无法直接读取 count。"
    ],
    "challenge": "返回包含 increase 和 reset 的对象。",
    "quiz": [
      "闭包保留了什么？",
      [
        "外层词法环境访问",
        "整个浏览器缓存",
        "仅函数名称"
      ],
      0,
      "内部函数可以持续访问外层作用域的绑定。"
    ],
    "doc": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Closures",
    "uses": [
      "控制流与函数",
      "实际页面开发"
    ],
    "tags": [
      "控制流与函数",
      "JS"
    ],
    "level": "入门",
    "minutes": 15,
    "pitfalls": []
  },
  {
    "cat": "js",
    "id": "js-array",
    "title": "数组增删与复制",
    "module": "集合与对象",
    "what": "push/pop 修改尾部，shift/unshift 修改头部。slice 返回浅复制，splice 修改原数组。是否变更原数据需要明确。",
    "subtitle": "push/pop 修改尾部，shift/unshift 修改头部。",
    "html": "<main class=\"lesson-demo\">\n  <h1>数组增删与复制</h1>\n  <p>观察输出，再修改 JavaScript 并运行。输出同时会显示在工作台控制台。</p>\n  <pre id=\"result\" aria-live=\"polite\"></pre>\n</main>",
    "css": "",
    "js": "// 把结果写到页面，而不是只在开发者工具里查看。\nfunction print(...values) {\n  const text = values\n    .map((value) => {\n      return typeof value === 'object' ? JSON.stringify(value, null, 2) : String(value);\n    })\n    .join(' ');\n  document.getElementById('result').textContent += text + '\\n';\n  console.log(...values);\n}\n\nconst topics = ['HTML', 'CSS'];\ntopics.push('JavaScript');\nconst copy = topics.slice();\ncopy.splice(1, 1, '布局');\nprint('原数组：', topics);\nprint('复制后：', copy);\nprint('最后一项：', topics.at(-1));",
    "observe": [
      "修改 copy 不改变原数组结构。",
      "浅复制的嵌套对象仍然共享引用。"
    ],
    "challenge": "添加一项对象，再观察浅复制的引用。",
    "quiz": [
      "哪个方法会修改原数组？",
      [
        "slice",
        "splice",
        "map"
      ],
      1,
      "splice 原地删除或插入数组成员。"
    ],
    "doc": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Indexed_collections",
    "uses": [
      "集合与对象",
      "实际页面开发"
    ],
    "tags": [
      "集合与对象",
      "JS"
    ],
    "level": "入门",
    "minutes": 15,
    "pitfalls": []
  },
  {
    "cat": "js",
    "id": "js-array-methods",
    "title": "map、filter 与 reduce",
    "module": "集合与对象",
    "what": "map 转换每一项，filter 保留符合条件的项，reduce 逐项累积结果。三者可组成清晰的数据处理管道。",
    "subtitle": "map 转换每一项，filter 保留符合条件的项，reduce 逐项累积结果。",
    "html": "<main class=\"lesson-demo\">\n  <h1>map、filter 与 reduce</h1>\n  <p>观察输出，再修改 JavaScript 并运行。输出同时会显示在工作台控制台。</p>\n  <pre id=\"result\" aria-live=\"polite\"></pre>\n</main>",
    "css": "",
    "js": "// 把结果写到页面，而不是只在开发者工具里查看。\nfunction print(...values) {\n  const text = values\n    .map((value) => {\n      return typeof value === 'object' ? JSON.stringify(value, null, 2) : String(value);\n    })\n    .join(' ');\n  document.getElementById('result').textContent += text + '\\n';\n  console.log(...values);\n}\n\nconst courses = [\n  { name: 'HTML', minutes: 15 },\n  { name: 'CSS', minutes: 30 },\n  { name: 'JS', minutes: 45 },\n];\nprint(\n  '名字：',\n  courses.map((course) => course.name),\n);\nprint(\n  '短课：',\n  courses.filter((course) => course.minutes <= 30),\n);\nprint(\n  '总时长：',\n  courses.reduce((sum, course) => sum + course.minutes, 0),\n);",
    "observe": [
      "reduce 的初始值 0 让空数组也可处理。",
      "这些方法不会原地改变数组结构。"
    ],
    "challenge": "计算短课的总时长。",
    "quiz": [
      "筛选数据使用什么？",
      [
        "map",
        "filter",
        "reduce"
      ],
      1,
      "filter 保留谓词结果为真的成员。"
    ],
    "doc": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",
    "uses": [
      "集合与对象",
      "实际页面开发"
    ],
    "tags": [
      "集合与对象",
      "JS"
    ],
    "level": "入门",
    "minutes": 15,
    "pitfalls": []
  },
  {
    "cat": "js",
    "id": "js-array-search",
    "title": "查找、判断与数值排序",
    "module": "集合与对象",
    "what": "find 找到第一个符合条件的值，some/every 做整体判断。sort 默认按字符串顺序且原地修改，需要比较函数与复制。",
    "subtitle": "find 找到第一个符合条件的值，some/every 做整体判断。",
    "html": "<main class=\"lesson-demo\">\n  <h1>查找、判断与数值排序</h1>\n  <p>观察输出，再修改 JavaScript 并运行。输出同时会显示在工作台控制台。</p>\n  <pre id=\"result\" aria-live=\"polite\"></pre>\n</main>",
    "css": "",
    "js": "// 把结果写到页面，而不是只在开发者工具里查看。\nfunction print(...values) {\n  const text = values\n    .map((value) => {\n      return typeof value === 'object' ? JSON.stringify(value, null, 2) : String(value);\n    })\n    .join(' ');\n  document.getElementById('result').textContent += text + '\\n';\n  console.log(...values);\n}\n\nconst values = [12, 3, 25, 8];\nprint(\n  '找到：',\n  values.find((value) => value > 10),\n);\nprint(\n  '存在大于 20：',\n  values.some((value) => value > 20),\n);\nprint(\n  '全部为正：',\n  values.every((value) => value > 0),\n);\nprint(\n  '升序：',\n  [...values].sort((a, b) => a - b),\n);\nprint('原数组：', values);",
    "observe": [
      "扩展语法复制后再 sort。",
      "数值排序不能省略比较函数。"
    ],
    "challenge": "按降序排列并找到最小值。",
    "quiz": [
      "数值升序比较函数是什么？",
      [
        "(a,b)=>a-b",
        "(a,b)=>a+b",
        "(a,b)=>a===b"
      ],
      0,
      "返回负值时 a 排在 b 前面。"
    ],
    "doc": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort",
    "uses": [
      "集合与对象",
      "实际页面开发"
    ],
    "tags": [
      "集合与对象",
      "JS"
    ],
    "level": "入门",
    "minutes": 15,
    "pitfalls": []
  },
  {
    "cat": "js",
    "id": "js-object",
    "title": "对象、解构与扩展语法",
    "module": "集合与对象",
    "what": "对象组织具名数据，解构读取字段，扩展语法组合对象。扩展复制是浅复制，后面的同名属性覆盖前面的。",
    "subtitle": "对象组织具名数据，解构读取字段，扩展语法组合对象。",
    "html": "<main class=\"lesson-demo\">\n  <h1>对象、解构与扩展语法</h1>\n  <p>观察输出，再修改 JavaScript 并运行。输出同时会显示在工作台控制台。</p>\n  <pre id=\"result\" aria-live=\"polite\"></pre>\n</main>",
    "css": "",
    "js": "// 把结果写到页面，而不是只在开发者工具里查看。\nfunction print(...values) {\n  const text = values\n    .map((value) => {\n      return typeof value === 'object' ? JSON.stringify(value, null, 2) : String(value);\n    })\n    .join(' ');\n  document.getElementById('result').textContent += text + '\\n';\n  console.log(...values);\n}\n\nconst defaults = { theme: 'light', size: 16 };\nconst settings = { ...defaults, theme: 'dark' };\nconst { theme, size: fontSize, language = 'zh-CN' } = settings;\nprint(settings);\nprint(theme, fontSize, language);\nprint(Object.entries(settings));",
    "observe": [
      "重命名解构不修改原属性。",
      "默认值用于 undefined。"
    ],
    "challenge": "加入嵌套 profile 并尝试复制。",
    "quiz": [
      "对象扩展是深复制吗？",
      [
        "是",
        "否",
        "只对数组是"
      ],
      1,
      "扩展语法仅复制顶层属性。"
    ],
    "doc": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_objects",
    "uses": [
      "集合与对象",
      "实际页面开发"
    ],
    "tags": [
      "集合与对象",
      "JS"
    ],
    "level": "入门",
    "minutes": 15,
    "pitfalls": []
  },
  {
    "cat": "js",
    "id": "js-json",
    "title": "JSON 序列化与解析",
    "module": "集合与对象",
    "what": "JSON 是文本格式，适合数据交换与存储。不能表示函数、undefined、循环引用或原生 BigInt；解析外部文本需要处理失败。",
    "subtitle": "JSON 是文本格式，适合数据交换与存储。",
    "html": "<main class=\"lesson-demo\">\n  <h1>JSON 序列化与解析</h1>\n  <p>观察输出，再修改 JavaScript 并运行。输出同时会显示在工作台控制台。</p>\n  <pre id=\"result\" aria-live=\"polite\"></pre>\n</main>",
    "css": "",
    "js": "// 把结果写到页面，而不是只在开发者工具里查看。\nfunction print(...values) {\n  const text = values\n    .map((value) => {\n      return typeof value === 'object' ? JSON.stringify(value, null, 2) : String(value);\n    })\n    .join(' ');\n  document.getElementById('result').textContent += text + '\\n';\n  console.log(...values);\n}\n\nconst data = { title: '学习计划', completed: false, days: [1, 2, 3] };\nconst text = JSON.stringify(data, null, 2);\nprint(text);\nconst parsed = JSON.parse(text);\nprint(parsed.title);\ntry {\n  JSON.parse('{invalid}');\n} catch (error) {\n  print('解析失败：', error.name);\n}",
    "observe": [
      "stringify 返回字符串。",
      "JSON 对象键名要求双引号。"
    ],
    "challenge": "删去 try/catch，观察工作台错误信息。",
    "quiz": [
      "JSON.parse 的输入通常是什么？",
      [
        "JSON 字符串",
        "DOM 元素",
        "函数"
      ],
      0,
      "parse 将符合 JSON 语法的文本解析为 JavaScript 值。"
    ],
    "doc": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON",
    "uses": [
      "集合与对象",
      "实际页面开发"
    ],
    "tags": [
      "集合与对象",
      "JS"
    ],
    "level": "入门",
    "minutes": 15,
    "pitfalls": []
  },
  {
    "cat": "js",
    "id": "js-string",
    "title": "字符串、模板字面量与搜索",
    "module": "语法与数据",
    "what": "字符串不可变，trim 清除两端空白，includes 判断子串。模板字面量支持插值和多行字符串。",
    "subtitle": "字符串不可变，trim 清除两端空白，includes 判断子串。",
    "html": "<main class=\"lesson-demo\">\n  <h1>字符串、模板字面量与搜索</h1>\n  <p>观察输出，再修改 JavaScript 并运行。输出同时会显示在工作台控制台。</p>\n  <pre id=\"result\" aria-live=\"polite\"></pre>\n</main>",
    "css": "",
    "js": "// 把结果写到页面，而不是只在开发者工具里查看。\nfunction print(...values) {\n  const text = values\n    .map((value) => {\n      return typeof value === 'object' ? JSON.stringify(value, null, 2) : String(value);\n    })\n    .join(' ');\n  document.getElementById('result').textContent += text + '\\n';\n  console.log(...values);\n}\n\nconst input = '  Frontend Lab  ';\nconst name = input.trim();\nprint(name.toLowerCase());\nprint(name.includes('Lab'));\nprint(name.replace('Lab', 'Studio'));\nprint(name.split(' '));\nprint(`欢迎来到 ${name}，共 ${name.length} 个 UTF-16 代码单元。`);",
    "observe": [
      "方法返回新字符串。",
      "length 对部分表情不等于可见字符数。"
    ],
    "challenge": "使用 Array.from 比较表情字符串长度。",
    "quiz": [
      "trim 会修改原字符串吗？",
      [
        "会",
        "不会",
        "看浏览器"
      ],
      1,
      "字符串不可变，trim 返回新字符串。"
    ],
    "doc": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Text_formatting",
    "uses": [
      "语法与数据",
      "实际页面开发"
    ],
    "tags": [
      "语法与数据",
      "JS"
    ],
    "level": "入门",
    "minutes": 15,
    "pitfalls": []
  },
  {
    "cat": "js",
    "id": "js-number",
    "title": "数值精度与金额计算",
    "module": "语法与数据",
    "what": "二进制浮点不能精确表示所有十进制小数。金额可在安全整数范围内用最小货币单位计算，展示时再格式化。",
    "subtitle": "二进制浮点不能精确表示所有十进制小数。",
    "html": "<main class=\"lesson-demo\">\n  <h1>数值精度与金额计算</h1>\n  <p>观察输出，再修改 JavaScript 并运行。输出同时会显示在工作台控制台。</p>\n  <pre id=\"result\" aria-live=\"polite\"></pre>\n</main>",
    "css": "",
    "js": "// 把结果写到页面，而不是只在开发者工具里查看。\nfunction print(...values) {\n  const text = values\n    .map((value) => {\n      return typeof value === 'object' ? JSON.stringify(value, null, 2) : String(value);\n    })\n    .join(' ');\n  document.getElementById('result').textContent += text + '\\n';\n  console.log(...values);\n}\n\nprint(0.1 + 0.2);\nconst priceInCents = 1990;\nconst totalInCents = priceInCents * 3;\nprint(\n  new Intl.NumberFormat('zh-CN', {\n    style: 'currency',\n    currency: 'CNY',\n  }).format(totalInCents / 100),\n);\nprint('安全整数：', Number.isSafeInteger(totalInCents));",
    "observe": [
      "toFixed 返回字符串，不是精度修复。",
      "整数方案也要注意安全整数范围。"
    ],
    "challenge": "给总价添加 500 分优惠。",
    "quiz": [
      "toFixed 返回什么？",
      [
        "数字",
        "字符串",
        "数组"
      ],
      1,
      "toFixed 用于展示，返回格式化的字符串。"
    ],
    "doc": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number",
    "uses": [
      "语法与数据",
      "实际页面开发"
    ],
    "tags": [
      "语法与数据",
      "JS"
    ],
    "level": "入门",
    "minutes": 15,
    "pitfalls": []
  },
  {
    "cat": "js",
    "id": "js-date",
    "title": "Date 与 Intl 格式化",
    "module": "语法与数据",
    "what": "Date 表示时间点，Intl 用指定语言和时区格式化。构造器数字月份从 0 开始，日期显示不应依赖机器默认时区。",
    "subtitle": "Date 表示时间点，Intl 用指定语言和时区格式化。",
    "html": "<main class=\"lesson-demo\">\n  <h1>Date 与 Intl 格式化</h1>\n  <p>观察输出，再修改 JavaScript 并运行。输出同时会显示在工作台控制台。</p>\n  <pre id=\"result\" aria-live=\"polite\"></pre>\n</main>",
    "css": "",
    "js": "// 把结果写到页面，而不是只在开发者工具里查看。\nfunction print(...values) {\n  const text = values\n    .map((value) => {\n      return typeof value === 'object' ? JSON.stringify(value, null, 2) : String(value);\n    })\n    .join(' ');\n  document.getElementById('result').textContent += text + '\\n';\n  console.log(...values);\n}\n\nconst date = new Date('2026-10-11T12:00:00Z');\nprint(date.toISOString());\nprint(\n  new Intl.DateTimeFormat('zh-CN', {\n    dateStyle: 'full',\n    timeStyle: 'short',\n    timeZone: 'Asia/Shanghai',\n  }).format(date),\n);\nprint('数字构造器月份：', new Date(2026, 0, 1).getMonth());",
    "observe": [
      "UTC 与上海时间显示不同。",
      "数字月份 0 表示一月。"
    ],
    "challenge": "把时区改成 UTC 比较结果。",
    "quiz": [
      "new Date(2026,0,1) 是几月？",
      [
        "一月",
        "零月",
        "十二月"
      ],
      0,
      "Date 的数字月份参数从 0 开始。"
    ],
    "doc": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date",
    "uses": [
      "语法与数据",
      "实际页面开发"
    ],
    "tags": [
      "语法与数据",
      "JS"
    ],
    "level": "入门",
    "minutes": 15,
    "pitfalls": []
  },
  {
    "cat": "js",
    "id": "js-regexp",
    "title": "正则表达式与文本匹配",
    "module": "语法与数据",
    "what": "正则表达式描述文本模式，test 做判断，match 提取匹配。输入验证要明确范围；复杂邮箱校验优先用原生 email 输入。",
    "subtitle": "正则表达式描述文本模式，test 做判断，match 提取匹配。",
    "html": "<main class=\"lesson-demo\">\n  <h1>正则表达式与文本匹配</h1>\n  <p>观察输出，再修改 JavaScript 并运行。输出同时会显示在工作台控制台。</p>\n  <pre id=\"result\" aria-live=\"polite\"></pre>\n</main>",
    "css": "",
    "js": "// 把结果写到页面，而不是只在开发者工具里查看。\nfunction print(...values) {\n  const text = values\n    .map((value) => {\n      return typeof value === 'object' ? JSON.stringify(value, null, 2) : String(value);\n    })\n    .join(' ');\n  document.getElementById('result').textContent += text + '\\n';\n  console.log(...values);\n}\n\nconst text = '学习 HTML 15 分钟，CSS 30 分钟';\nprint(text.match(/\\d+/g));\nprint(/^\\d{4}$/.test('2026'));\nprint(text.replace(/\\d+/g, (value) => Number(value) * 2));",
    "observe": [
      "g 标志提取所有匹配。",
      "^ 和 $ 限制完整字符串匹配。"
    ],
    "challenge": "验证一个 3 到 8 位的英文用户名。",
    "quiz": [
      "\\d 表示什么？",
      [
        "数字字符",
        "任意字母",
        "空白"
      ],
      0,
      "\\d 匹配数字字符。"
    ],
    "doc": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions",
    "uses": [
      "语法与数据",
      "实际页面开发"
    ],
    "tags": [
      "语法与数据",
      "JS"
    ],
    "level": "入门",
    "minutes": 15,
    "pitfalls": []
  },
  {
    "cat": "js",
    "id": "js-map-set",
    "title": "Map、Set 与去重",
    "module": "集合与对象",
    "what": "Set 存放不重复的值，Map 存放键值对且键可以是对象。对象成员按引用比较，并不会按结构自动去重。",
    "subtitle": "Set 存放不重复的值，Map 存放键值对且键可以是对象。",
    "html": "<main class=\"lesson-demo\">\n  <h1>Map、Set 与去重</h1>\n  <p>观察输出，再修改 JavaScript 并运行。输出同时会显示在工作台控制台。</p>\n  <pre id=\"result\" aria-live=\"polite\"></pre>\n</main>",
    "css": "",
    "js": "// 把结果写到页面，而不是只在开发者工具里查看。\nfunction print(...values) {\n  const text = values\n    .map((value) => {\n      return typeof value === 'object' ? JSON.stringify(value, null, 2) : String(value);\n    })\n    .join(' ');\n  document.getElementById('result').textContent += text + '\\n';\n  console.log(...values);\n}\n\nconst skills = new Set(['HTML', 'CSS', 'HTML', 'JS']);\nprint([...skills]);\nconst progress = new Map([\n  ['HTML', 80],\n  ['CSS', 50],\n]);\nprogress.set('JS', 20);\nprint([...progress.entries()]);\nprint(progress.get('CSS'), progress.has('HTML'));",
    "observe": [
      "Set 保留首次插入顺序。",
      "Map 用 size 而非 length。"
    ],
    "challenge": "删除 CSS，再添加完成进度。",
    "quiz": [
      "Set 按结构去重两个新对象吗？",
      [
        "会",
        "不会",
        "只在严格模式会"
      ],
      1,
      "两个不同对象引用是两个不同的 Set 成员。"
    ],
    "doc": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Keyed_collections",
    "uses": [
      "集合与对象",
      "实际页面开发"
    ],
    "tags": [
      "集合与对象",
      "JS"
    ],
    "level": "入门",
    "minutes": 15,
    "pitfalls": []
  },
  {
    "cat": "js",
    "id": "js-class",
    "title": "class、实例与原型",
    "module": "集合与对象",
    "what": "class 提供基于原型的语法，constructor 初始化实例，方法通常放在原型上。实例状态属于每个实例。",
    "subtitle": "class 提供基于原型的语法，constructor 初始化实例，方法通常放在原型上。",
    "html": "<main class=\"lesson-demo\">\n  <h1>class、实例与原型</h1>\n  <p>观察输出，再修改 JavaScript 并运行。输出同时会显示在工作台控制台。</p>\n  <pre id=\"result\" aria-live=\"polite\"></pre>\n</main>",
    "css": "",
    "js": "// 把结果写到页面，而不是只在开发者工具里查看。\nfunction print(...values) {\n  const text = values\n    .map((value) => {\n      return typeof value === 'object' ? JSON.stringify(value, null, 2) : String(value);\n    })\n    .join(' ');\n  document.getElementById('result').textContent += text + '\\n';\n  console.log(...values);\n}\n\nclass Course {\n  constructor(title, minutes) {\n    this.title = title;\n    this.minutes = minutes;\n  }\n  describe() {\n    return this.title + ' · ' + this.minutes + ' 分钟';\n  }\n}\nconst html = new Course('HTML', 15);\nconst css = new Course('CSS', 30);\nprint(html.describe(), css.describe());\nprint(html.describe === css.describe);",
    "observe": [
      "不同实例共享原型方法。",
      "普通方法的 this 由调用方式决定。"
    ],
    "challenge": "添加继承 Course 的 PracticeCourse。",
    "quiz": [
      "实例方法通常放在哪里？",
      [
        "原型",
        "localStorage",
        "document"
      ],
      0,
      "class 普通方法在原型上共享。"
    ],
    "doc": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_classes",
    "uses": [
      "集合与对象",
      "实际页面开发"
    ],
    "tags": [
      "集合与对象",
      "JS"
    ],
    "level": "进阶",
    "minutes": 15,
    "pitfalls": []
  },
  {
    "cat": "js",
    "id": "js-this",
    "title": "this 与箭头函数",
    "module": "控制流与函数",
    "what": "普通函数的 this 取决于调用方式，箭头函数从外部词法环境捕获 this。不要把箭头函数误当作需要动态 this 的对象方法。",
    "subtitle": "普通函数的 this 取决于调用方式，箭头函数从外部词法环境捕获 this。",
    "html": "<main class=\"lesson-demo\">\n  <h1>this 与箭头函数</h1>\n  <p>观察输出，再修改 JavaScript 并运行。输出同时会显示在工作台控制台。</p>\n  <pre id=\"result\" aria-live=\"polite\"></pre>\n</main>",
    "css": "",
    "js": "// 把结果写到页面，而不是只在开发者工具里查看。\nfunction print(...values) {\n  const text = values\n    .map((value) => {\n      return typeof value === 'object' ? JSON.stringify(value, null, 2) : String(value);\n    })\n    .join(' ');\n  document.getElementById('result').textContent += text + '\\n';\n  console.log(...values);\n}\n\nconst learner = {\n  name: '小雨',\n  describe() {\n    return this.name;\n  },\n};\nprint(learner.describe());\nconst detached = learner.describe;\nprint(detached.call({ name: '星雨' }));\nconst bound = detached.bind(learner);\nprint(bound());",
    "observe": [
      "call 显式指定 this。",
      "bind 返回绑定后的新函数。"
    ],
    "challenge": "使用 apply 调用一个带两个参数的方法。",
    "quiz": [
      "bind 会立即执行原函数吗？",
      [
        "会",
        "不会，返回函数",
        "会执行两次"
      ],
      1,
      "bind 创建一个固定 this 的函数。"
    ],
    "doc": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this",
    "uses": [
      "控制流与函数",
      "实际页面开发"
    ],
    "tags": [
      "控制流与函数",
      "JS"
    ],
    "level": "进阶",
    "minutes": 15,
    "pitfalls": []
  },
  {
    "cat": "js",
    "id": "js-errors",
    "title": "try、catch、finally 与主动抛错",
    "module": "异步与错误",
    "what": "try/catch 处理当前调用链的异常，throw 表达失败。异步 Promise 拒绝要用 await 或 catch，finally 适合清理状态。",
    "subtitle": "try/catch 处理当前调用链的异常，throw 表达失败。",
    "html": "<main class=\"lesson-demo\">\n  <h1>try、catch、finally 与主动抛错</h1>\n  <p>观察输出，再修改 JavaScript 并运行。输出同时会显示在工作台控制台。</p>\n  <pre id=\"result\" aria-live=\"polite\"></pre>\n</main>",
    "css": "",
    "js": "// 把结果写到页面，而不是只在开发者工具里查看。\nfunction print(...values) {\n  const text = values\n    .map((value) => {\n      return typeof value === 'object' ? JSON.stringify(value, null, 2) : String(value);\n    })\n    .join(' ');\n  document.getElementById('result').textContent += text + '\\n';\n  console.log(...values);\n}\n\nfunction divide(a, b) {\n  if (b === 0) throw new Error('除数不能是 0');\n  return a / b;\n}\ntry {\n  print(divide(10, 0));\n} catch (error) {\n  print('已处理：', error.message);\n} finally {\n  print('操作结束，清理界面状态');\n}",
    "observe": [
      "错误被处理后后续代码仍运行。",
      "不要用空 catch 掩盖失败。"
    ],
    "challenge": "修改除数让计算成功。",
    "quiz": [
      "finally 通常用于什么？",
      [
        "清理资源或状态",
        "只处理语法错误",
        "生成随机数"
      ],
      0,
      "finally 在正常或异常路径结束时执行清理逻辑。"
    ],
    "doc": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling",
    "uses": [
      "异步与错误",
      "实际页面开发"
    ],
    "tags": [
      "异步与错误",
      "JS"
    ],
    "level": "入门",
    "minutes": 15,
    "pitfalls": []
  },
  {
    "cat": "js",
    "id": "js-promise",
    "title": "Promise 与异步结果",
    "module": "异步与错误",
    "what": "Promise 表示未来的结果，有 pending、fulfilled、rejected 三种状态。then 返回新的 Promise，可继续链式处理。",
    "subtitle": "Promise 表示未来的结果，有 pending、fulfilled、rejected 三种状态。",
    "html": "<main class=\"lesson-demo\">\n  <h1>Promise 与异步结果</h1>\n  <p>观察输出，再修改 JavaScript 并运行。输出同时会显示在工作台控制台。</p>\n  <pre id=\"result\" aria-live=\"polite\"></pre>\n</main>",
    "css": "",
    "js": "// 把结果写到页面，而不是只在开发者工具里查看。\nfunction print(...values) {\n  const text = values\n    .map((value) => {\n      return typeof value === 'object' ? JSON.stringify(value, null, 2) : String(value);\n    })\n    .join(' ');\n  document.getElementById('result').textContent += text + '\\n';\n  console.log(...values);\n}\n\nfunction wait(milliseconds) {\n  return new Promise((resolve) => setTimeout(resolve, milliseconds));\n}\nprint('开始等待');\nwait(400)\n  .then(() => {\n    print('等待完成');\n    return 'HTML';\n  })\n  .then((topic) => print('下一课：', topic))\n  .catch((error) => print('失败：', error.message));",
    "observe": [
      "同步开始信息先出现。",
      "链式返回值传给下一步。"
    ],
    "challenge": "返回 Promise.reject 并观察 catch。",
    "quiz": [
      "then 返回什么？",
      [
        "新的 Promise",
        "固定 undefined",
        "原数组"
      ],
      0,
      "then 创建新的 Promise，支持链式组合。"
    ],
    "doc": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises",
    "uses": [
      "异步与错误",
      "实际页面开发"
    ],
    "tags": [
      "异步与错误",
      "JS"
    ],
    "level": "进阶",
    "minutes": 15,
    "pitfalls": []
  },
  {
    "cat": "js",
    "id": "js-async",
    "title": "async、await 与 finally",
    "module": "异步与错误",
    "what": "async 函数始终返回 Promise，await 暂停当前异步函数等待结果，不阻塞整个浏览器。用 try/finally 恢复加载状态。",
    "subtitle": "async 函数始终返回 Promise，await 暂停当前异步函数等待结果，不阻塞整个浏览器。",
    "html": "<main class=\"lesson-demo\">\n  <h1>async、await 与 finally</h1>\n  <p>观察输出，再修改 JavaScript 并运行。输出同时会显示在工作台控制台。</p>\n  <pre id=\"result\" aria-live=\"polite\"></pre>\n</main>",
    "css": "",
    "js": "// 把结果写到页面，而不是只在开发者工具里查看。\nfunction print(...values) {\n  const text = values\n    .map((value) => {\n      return typeof value === 'object' ? JSON.stringify(value, null, 2) : String(value);\n    })\n    .join(' ');\n  document.getElementById('result').textContent += text + '\\n';\n  console.log(...values);\n}\n\nconst delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));\nasync function loadCourse() {\n  print('加载中…');\n  try {\n    await delay(400);\n    print('已得到课程：HTML');\n  } catch (error) {\n    print(error.message);\n  } finally {\n    print('恢复操作按钮');\n  }\n}\nloadCourse();\nprint('页面仍然可以响应其他操作');",
    "observe": [
      "await 之后的代码延后执行。",
      "async 函数中的错误变成 Promise 拒绝。"
    ],
    "challenge": "再等待 200ms 并打印下一步。",
    "quiz": [
      "await 会冻结浏览器吗？",
      [
        "会",
        "不会",
        "只能在手机上不会"
      ],
      1,
      "await 暂停当前异步函数，不阻塞主线程等待。"
    ],
    "doc": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function",
    "uses": [
      "异步与错误",
      "实际页面开发"
    ],
    "tags": [
      "异步与错误",
      "JS"
    ],
    "level": "进阶",
    "minutes": 15,
    "pitfalls": []
  },
  {
    "cat": "js",
    "id": "js-event-loop",
    "title": "事件循环与微任务",
    "module": "异步与错误",
    "what": "同步代码先执行，当前任务结束后清空微任务队列，再处理后续任务。Promise 回调与定时器回调属于不同队列。",
    "subtitle": "同步代码先执行，当前任务结束后清空微任务队列，再处理后续任务。",
    "html": "<main class=\"lesson-demo\">\n  <h1>事件循环与微任务</h1>\n  <p>观察输出，再修改 JavaScript 并运行。输出同时会显示在工作台控制台。</p>\n  <pre id=\"result\" aria-live=\"polite\"></pre>\n</main>",
    "css": "",
    "js": "// 把结果写到页面，而不是只在开发者工具里查看。\nfunction print(...values) {\n  const text = values\n    .map((value) => {\n      return typeof value === 'object' ? JSON.stringify(value, null, 2) : String(value);\n    })\n    .join(' ');\n  document.getElementById('result').textContent += text + '\\n';\n  console.log(...values);\n}\n\nprint('1 同步开始');\nsetTimeout(() => print('4 定时器任务'), 0);\nPromise.resolve().then(() => print('3 Promise 微任务'));\nprint('2 同步结束');",
    "observe": [
      "0ms 不表示立即执行。",
      "Promise.then 先于当前任务后注册的定时器运行。"
    ],
    "challenge": "在 then 中再加入一个 Promise.then。",
    "quiz": [
      "这里谁先执行？",
      [
        "setTimeout 回调",
        "Promise.then 回调",
        "随机"
      ],
      1,
      "当前任务后的微任务检查点先于下一次定时器任务。"
    ],
    "doc": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Execution_model",
    "uses": [
      "异步与错误",
      "实际页面开发"
    ],
    "tags": [
      "异步与错误",
      "JS"
    ],
    "level": "进阶",
    "minutes": 15,
    "pitfalls": []
  },
  {
    "cat": "js",
    "id": "js-promise-all",
    "title": "并行请求与 Promise.all",
    "module": "异步与错误",
    "what": "Promise.all 同时等待多个 Promise，结果按输入顺序排列；任何一个拒绝就整体拒绝，其他任务并不会自动取消。",
    "subtitle": "Promise.all 同时等待多个 Promise，结果按输入顺序排列；任何一个拒绝就整体拒绝，其他任务并不会自动取消。",
    "html": "<main class=\"lesson-demo\">\n  <h1>并行请求与 Promise.all</h1>\n  <p>观察输出，再修改 JavaScript 并运行。输出同时会显示在工作台控制台。</p>\n  <pre id=\"result\" aria-live=\"polite\"></pre>\n</main>",
    "css": "",
    "js": "// 把结果写到页面，而不是只在开发者工具里查看。\nfunction print(...values) {\n  const text = values\n    .map((value) => {\n      return typeof value === 'object' ? JSON.stringify(value, null, 2) : String(value);\n    })\n    .join(' ');\n  document.getElementById('result').textContent += text + '\\n';\n  console.log(...values);\n}\n\nconst task = (name, ms) =>\n  new Promise((resolve) => setTimeout(() => resolve(name), ms));\nasync function run() {\n  const started = performance.now();\n  const results = await Promise.all([task('HTML', 450), task('CSS', 200)]);\n  print(results);\n  print('耗时约', Math.round(performance.now() - started), 'ms');\n}\nrun();",
    "observe": [
      "CSS 先完成但结果仍在第二项。",
      "耗时接近最慢任务而不是两者相加。"
    ],
    "challenge": "加入失败任务，改用 allSettled 查看每个结果。",
    "quiz": [
      "all 的结果顺序由什么决定？",
      [
        "完成速度",
        "输入顺序",
        "名称字母顺序"
      ],
      1,
      "结果保持传入可迭代对象的顺序。"
    ],
    "doc": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all",
    "uses": [
      "异步与错误",
      "实际页面开发"
    ],
    "tags": [
      "异步与错误",
      "JS"
    ],
    "level": "进阶",
    "minutes": 15,
    "pitfalls": []
  },
  {
    "cat": "js",
    "id": "js-modules",
    "title": "ES Modules：导出与导入",
    "module": "控制流与函数",
    "what": "ES Modules 用 export/import 划分职责。本案例用 Blob 创建本地模块，不依赖打包器；真实项目用 HTTP 服务加载相对路径模块。",
    "subtitle": "ES Modules 用 export/import 划分职责。",
    "html": "<main class=\"lesson-demo\">\n  <h1>ES Modules：导出与导入</h1>\n  <p>观察输出，再修改 JavaScript 并运行。输出同时会显示在工作台控制台。</p>\n  <pre id=\"result\" aria-live=\"polite\"></pre>\n</main>",
    "css": "",
    "js": "// 把结果写到页面，而不是只在开发者工具里查看。\nfunction print(...values) {\n  const text = values\n    .map((value) => {\n      return typeof value === 'object' ? JSON.stringify(value, null, 2) : String(value);\n    })\n    .join(' ');\n  document.getElementById('result').textContent += text + '\\n';\n  console.log(...values);\n}\n\nasync function main() {\n  const source =\n    'export const title = \"HTML\"; export function minutes(days) { return days * 15; }';\n  const url = URL.createObjectURL(new Blob([source], { type: 'text/javascript' }));\n  try {\n    const course = await import(url);\n    print(course.title, course.minutes(7));\n  } finally {\n    URL.revokeObjectURL(url);\n  }\n}\nmain().catch((error) => print(error.message));",
    "observe": [
      "模块拥有自己的作用域。",
      "真实文件使用 script type=module。"
    ],
    "challenge": "增加一个默认导出，并读取 course.default。",
    "quiz": [
      "模块中的变量默认属于谁？",
      [
        "全局 window",
        "模块作用域",
        "所有 iframe"
      ],
      1,
      "模块顶层绑定不会自动成为全局属性。"
    ],
    "doc": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules",
    "uses": [
      "控制流与函数",
      "实际页面开发"
    ],
    "tags": [
      "控制流与函数",
      "JS"
    ],
    "level": "进阶",
    "minutes": 15,
    "pitfalls": []
  },
  {
    "cat": "js",
    "id": "js-dom",
    "title": "DOM 查询、创建与删除",
    "module": "DOM 与事件",
    "what": "DOM 是文档的对象树。querySelector 查询元素，createElement 创建节点，textContent 安全写入文本，remove 删除节点。",
    "subtitle": "DOM 是文档的对象树。",
    "html": "<main class=\"lesson-demo\">\n  <h1>动态课程列表</h1>\n  <label>\n    课程名\n    <input id=\"name\" value=\"HTML\" />\n  </label>\n  <button id=\"create\">创建课程</button>\n  <ul id=\"list\"></ul>\n</main>",
    "css": "",
    "js": "document.querySelector('#create').addEventListener('click', () => {\n  const value = document.querySelector('#name').value.trim();\n  if (!value) return;\n  const item = document.createElement('li');\n  item.textContent = value + ' ';\n  const remove = document.createElement('button');\n  remove.textContent = '删除';\n  remove.addEventListener('click', () => item.remove());\n  item.append(remove);\n  document.querySelector('#list').append(item);\n});",
    "observe": [
      "输入 HTML 字符串只会显示文字。",
      "新节点必须 append 后才会进入页面。"
    ],
    "challenge": "把输入改成 form，让 Enter 也能添加。",
    "quiz": [
      "安全展示用户文字优先使用什么？",
      [
        "innerHTML",
        "textContent",
        "eval"
      ],
      1,
      "textContent 不会把输入解释为 HTML。"
    ],
    "doc": "https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction",
    "uses": [
      "DOM 与事件",
      "实际页面开发"
    ],
    "tags": [
      "DOM 与事件",
      "JS"
    ],
    "level": "入门",
    "minutes": 15,
    "pitfalls": []
  },
  {
    "cat": "js",
    "id": "js-bubbling",
    "title": "事件捕获、冒泡与目标",
    "module": "DOM 与事件",
    "what": "事件沿祖先捕获到目标，再冒泡回祖先。target 是原始目标，currentTarget 是当前监听节点。stopPropagation 阻止传播，不等于取消默认行为。",
    "subtitle": "事件沿祖先捕获到目标，再冒泡回祖先。",
    "html": "<main class=\"lesson-demo\">\n  <h1>点击内层按钮看传播顺序</h1>\n  <div id=\"outer\">\n    <div id=\"inner\"><button id=\"target\">事件目标</button></div>\n  </div>\n  <pre id=\"events\" aria-live=\"polite\"></pre>\n</main>",
    "css": "#outer,\n#inner {\n  padding: 20px;\n  background: #e1ede4;\n  border: 1px dashed #6c9a7b;\n}",
    "js": "const output = document.getElementById('events');\nfor (const id of ['outer', 'inner', 'target']) {\n  const node = document.getElementById(id);\n  for (const capture of [true, false]) {\n    node.addEventListener(\n      'click',\n      (event) => {\n        const text =\n          id + ' / ' + (capture ? '捕获' : '冒泡') + ' / target=' + event.target.id;\n        output.textContent += text + '\\n';\n        console.log(text);\n      },\n      capture,\n    );\n  }\n}",
    "observe": [
      "target 一直为最内层按钮。",
      "currentTarget 会随着监听器不同而改变。"
    ],
    "challenge": "在 inner 的冒泡监听器加入 stopPropagation。",
    "quiz": [
      "preventDefault 是否阻止冒泡？",
      [
        "是",
        "否",
        "只在按钮上是"
      ],
      1,
      "preventDefault 取消默认行为；传播由 stopPropagation 控制。"
    ],
    "doc": "https://developer.mozilla.org/en-US/docs/Web/API/Event",
    "uses": [
      "DOM 与事件",
      "实际页面开发"
    ],
    "tags": [
      "DOM 与事件",
      "JS"
    ],
    "level": "进阶",
    "minutes": 15,
    "pitfalls": []
  },
  {
    "cat": "js",
    "id": "js-delegation",
    "title": "事件委托与动态元素",
    "module": "DOM 与事件",
    "what": "把监听器放在稳定父容器，用 closest 查找操作按钮。这样动态加入的子项也能响应，避免为每一项单独绑定同样的事件。",
    "subtitle": "把监听器放在稳定父容器，用 closest 查找操作按钮。",
    "html": "<main class=\"lesson-demo\">\n  <h1>事件委托</h1>\n  <button id=\"addItem\">加入一项</button>\n  <ul id=\"items\">\n    <li>\n      HTML\n      <button data-action=\"remove\">删除</button>\n    </li>\n  </ul>\n</main>",
    "css": "",
    "js": "const items = document.getElementById('items');\ndocument.getElementById('addItem').addEventListener('click', () => {\n  const item = document.createElement('li');\n  item.textContent = '新课程 ';\n  const button = document.createElement('button');\n  button.dataset.action = 'remove';\n  button.textContent = '删除';\n  item.append(button);\n  items.append(item);\n});\nitems.addEventListener('click', (event) => {\n  const button = event.target.closest('[data-action=\"remove\"]');\n  if (button && items.contains(button)) button.closest('li').remove();\n});",
    "observe": [
      "新增子项无须重新绑定删除监听器。",
      "contains 限制操作范围。"
    ],
    "challenge": "给每一项增加 data-action=\"done\" 的按钮。",
    "quiz": [
      "委托主要利用哪个机制？",
      [
        "事件冒泡",
        "CSS 继承",
        "定时器"
      ],
      0,
      "子元素的事件冒泡到父容器监听器。"
    ],
    "doc": "https://developer.mozilla.org/en-US/docs/Web/API/Element/closest",
    "uses": [
      "DOM 与事件",
      "实际页面开发"
    ],
    "tags": [
      "DOM 与事件",
      "JS"
    ],
    "level": "入门",
    "minutes": 15,
    "pitfalls": []
  },
  {
    "cat": "js",
    "id": "js-formdata",
    "title": "FormData 与提交状态",
    "module": "DOM 与事件",
    "what": "FormData 读取可提交控件，同名多值用 getAll。disabled 控件不参与提交，未勾选 checkbox 通常也不会出现在结果里。",
    "subtitle": "FormData 读取可提交控件，同名多值用 getAll。",
    "html": "<main class=\"lesson-demo\">\n  <h1>收集学习偏好</h1>\n  <form id=\"preferences\">\n    <label>\n      昵称\n      <input name=\"nickname\" required value=\"小雨\" />\n    </label>\n    <label>\n      <input name=\"skill\" type=\"checkbox\" value=\"html\" checked />\n      HTML\n    </label>\n    <label>\n      <input name=\"skill\" type=\"checkbox\" value=\"css\" checked />\n      CSS\n    </label>\n    <button type=\"submit\">读取表单</button>\n  </form>\n  <pre id=\"data\"></pre>\n</main>",
    "css": "",
    "js": "document.getElementById('preferences').addEventListener('submit', (event) => {\n  event.preventDefault();\n  const form = new FormData(event.target);\n  const result = { nickname: form.get('nickname'), skills: form.getAll('skill') };\n  document.getElementById('data').textContent = JSON.stringify(result, null, 2);\n});",
    "observe": [
      "getAll 保留多个勾选值。",
      "本例读取本地数据，不发送网络请求。"
    ],
    "challenge": "将一个控件 disabled，观察数据变化。",
    "quiz": [
      "同名多选字段应使用什么？",
      [
        "getAll",
        "只用 get",
        "querySelectorAll 后直接 stringify"
      ],
      0,
      "getAll 返回指定字段的全部值。"
    ],
    "doc": "https://developer.mozilla.org/en-US/docs/Web/API/FormData",
    "uses": [
      "DOM 与事件",
      "实际页面开发"
    ],
    "tags": [
      "DOM 与事件",
      "JS"
    ],
    "level": "入门",
    "minutes": 15,
    "pitfalls": []
  },
  {
    "cat": "js",
    "id": "js-debounce",
    "title": "防抖：等待输入停下",
    "module": "浏览器 API",
    "what": "防抖在触发停止一段时间后执行，只保留最后一次意图。适合搜索建议，仍需在真实请求中处理过期结果与失败。",
    "subtitle": "防抖在触发停止一段时间后执行，只保留最后一次意图。",
    "html": "<main class=\"lesson-demo\">\n  <h1>防抖搜索</h1>\n  <label>\n    输入关键词\n    <input id=\"keyword\" type=\"search\" />\n  </label>\n  <p id=\"status\" aria-live=\"polite\">等待输入</p>\n</main>",
    "css": "",
    "js": "function debounce(callback, delay) {\n  let timer;\n  return (...args) => {\n    clearTimeout(timer);\n    timer = setTimeout(() => callback(...args), delay);\n  };\n}\nlet count = 0;\nconst update = debounce((value) => {\n  document.getElementById('status').textContent =\n    '第 ' + ++count + ' 次处理：' + (value || '全部');\n}, 500);\ndocument\n  .getElementById('keyword')\n  .addEventListener('input', (event) => update(event.target.value));",
    "observe": [
      "连续输入时次数不会每个字都增加。",
      "回调捕获的是当时的字符串值。"
    ],
    "challenge": "把延迟从 500ms 改成 1000ms。",
    "quiz": [
      "防抖何时执行？",
      [
        "每次输入立即",
        "停止触发一段时间后",
        "只执行第一次"
      ],
      1,
      "这里演示尾触发防抖。"
    ],
    "doc": "https://developer.mozilla.org/en-US/docs/Web/API/Window/setTimeout",
    "uses": [
      "浏览器 API",
      "实际页面开发"
    ],
    "tags": [
      "浏览器 API",
      "JS"
    ],
    "level": "进阶",
    "minutes": 15,
    "pitfalls": []
  },
  {
    "cat": "js",
    "id": "js-throttle",
    "title": "节流：限制处理频率",
    "module": "浏览器 API",
    "what": "节流让高频事件最多每个时间窗口处理一次。适合滚动和指针移动；动画相关更新常用 requestAnimationFrame 与渲染节奏对齐。",
    "subtitle": "节流让高频事件最多每个时间窗口处理一次。",
    "html": "<main class=\"lesson-demo\">\n  <h1>移动指针看节流</h1>\n  <div id=\"pad\">在这里移动指针</div>\n  <p id=\"counts\">原始 0 次 / 处理 0 次</p>\n</main>",
    "css": "#pad {\n  padding: 70px 20px;\n  background: #e1ede4;\n  border-radius: 12px;\n}",
    "js": "let raw = 0;\nlet handled = 0;\nlet last = -Infinity;\ndocument.getElementById('pad').addEventListener('pointermove', () => {\n  raw++;\n  const now = performance.now();\n  if (now - last >= 150) {\n    last = now;\n    handled++;\n  }\n  document.getElementById('counts').textContent =\n    '原始 ' + raw + ' 次 / 处理 ' + handled + ' 次';\n});",
    "observe": [
      "处理次数明显少于原始事件次数。",
      "performance.now 使用单调时钟。"
    ],
    "challenge": "把 150ms 调到 500ms。",
    "quiz": [
      "节流的主要目的是什么？",
      [
        "限制执行频率",
        "延迟直到停止",
        "完全取消事件"
      ],
      0,
      "节流在持续触发期间按间隔执行。"
    ],
    "doc": "https://developer.mozilla.org/en-US/docs/Web/API/Performance/now",
    "uses": [
      "浏览器 API",
      "实际页面开发"
    ],
    "tags": [
      "浏览器 API",
      "JS"
    ],
    "level": "进阶",
    "minutes": 15,
    "pitfalls": []
  },
  {
    "cat": "js",
    "id": "js-fetch",
    "title": "Fetch：响应、失败与取消",
    "module": "异步与错误",
    "what": "fetch 返回 Response，HTTP 错误要检查 response.ok，解析 JSON 仍是异步。本例通过 Blob URL 实际调用 fetch，离线可用且不连接后端。",
    "subtitle": "fetch 返回 Response，HTTP 错误要检查 response.ok，解析 JSON 仍是异步。",
    "html": "<main class=\"lesson-demo\">\n  <h1>本地 Fetch 实验</h1>\n  <button id=\"load\">加载课程</button>\n  <pre id=\"response\" aria-live=\"polite\">等待加载</pre>\n</main>",
    "css": "",
    "js": "const button = document.getElementById('load');\nbutton.addEventListener('click', async () => {\n  button.disabled = true;\n  const url = URL.createObjectURL(\n    new Blob([JSON.stringify({ title: 'HTML 语义', minutes: 15 })], {\n      type: 'application/json',\n    }),\n  );\n  const controller = new AbortController();\n  try {\n    const response = await fetch(url, { signal: controller.signal });\n    if (!response.ok) throw new Error('HTTP 状态：' + response.status);\n    const data = await response.json();\n    document.getElementById('response').textContent = JSON.stringify(data, null, 2);\n  } catch (error) {\n    document.getElementById('response').textContent = error.name + ': ' + error.message;\n  } finally {\n    URL.revokeObjectURL(url);\n    button.disabled = false;\n  }\n});",
    "observe": [
      "Blob URL 提供真实 Response，省去外部服务依赖。",
      "外部 HTTP 请求还有 CORS、认证和状态码问题。"
    ],
    "challenge": "在 fetch 前调用 controller.abort()，观察 AbortError。",
    "quiz": [
      "fetch 收到 HTTP 404 必然 reject 吗？",
      [
        "是",
        "否，需检查 ok",
        "只在 Chrome 会"
      ],
      1,
      "HTTP 错误响应仍可 resolve；网络失败或取消等才 reject。"
    ],
    "doc": "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch",
    "uses": [
      "异步与错误",
      "实际页面开发"
    ],
    "tags": [
      "fetch",
      "JSON",
      "AbortController",
      "本地数据"
    ],
    "level": "进阶",
    "minutes": 15,
    "pitfalls": []
  },
  {
    "cat": "js",
    "id": "js-storage",
    "title": "localStorage 与隔离环境",
    "module": "浏览器 API",
    "what": "localStorage 存字符串，常用 JSON 编码，并捕获访问或配额错误。实验 iframe 没有同源权限，因此在这里展示受限状态；导出独立 HTML 后可测试实际存储。",
    "subtitle": "localStorage 存字符串，常用 JSON 编码，并捕获访问或配额错误。",
    "html": "<main class=\"lesson-demo\">\n  <h1>记住你的昵称</h1>\n  <label>\n    昵称\n    <input id=\"nickname\" value=\"小雨\" />\n  </label>\n  <button id=\"store\">保存</button>\n  <button id=\"read\">读取</button>\n  <p id=\"storageStatus\" aria-live=\"polite\">预览受隔离限制，可导出 HTML 测试。</p>\n</main>",
    "css": "",
    "js": "function operate(action) {\n  try {\n    if (action === 'save') {\n      localStorage.setItem('lab-nickname', document.getElementById('nickname').value);\n    }\n    const value = localStorage.getItem('lab-nickname');\n    document.getElementById('storageStatus').textContent =\n      '已存储：' + (value ?? '暂无');\n  } catch (error) {\n    document.getElementById('storageStatus').textContent =\n      '当前环境不允许存储：' + error.name + '。请导出独立 HTML。';\n  }\n}\ndocument.getElementById('store').addEventListener('click', () => operate('save'));\ndocument.getElementById('read').addEventListener('click', () => operate('read'));",
    "observe": [
      "隔离状态下捕获 SecurityError。",
      "实际网站也要处理隐私模式与配额限制。"
    ],
    "challenge": "导出后保存昵称并刷新，再点击读取。",
    "quiz": [
      "localStorage 的值是什么类型？",
      [
        "字符串",
        "任意对象",
        "DOM 节点"
      ],
      0,
      "对象通常需要 JSON.stringify 与 JSON.parse。"
    ],
    "doc": "https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage",
    "uses": [
      "浏览器 API",
      "实际页面开发"
    ],
    "tags": [
      "浏览器 API",
      "JS"
    ],
    "level": "入门",
    "minutes": 15,
    "pitfalls": []
  },
  {
    "cat": "js",
    "id": "js-file",
    "title": "File API 与本地文本",
    "module": "浏览器 API",
    "what": "用户主动选择文件后，File API 可读取其内容。本例限制大小并使用 text()，只展示文本，不把内容当 HTML 运行。",
    "subtitle": "用户主动选择文件后，File API 可读取其内容。",
    "html": "<main class=\"lesson-demo\">\n  <h1>读取本地文本文件</h1>\n  <label>\n    选择文本\n    <input id=\"file\" type=\"file\" accept=\".txt,.md,.json,text/plain\" />\n  </label>\n  <pre id=\"fileText\" aria-live=\"polite\">内容会显示在这里，不会上传。</pre>\n</main>",
    "css": "",
    "js": "document.getElementById('file').addEventListener('change', async (event) => {\n  const file = event.target.files[0];\n  if (!file) return;\n  const output = document.getElementById('fileText');\n  if (file.size > 1024 * 1024) {\n    output.textContent = '请选择小于 1MB 的文件';\n    return;\n  }\n  try {\n    output.textContent = await file.text();\n  } catch (error) {\n    output.textContent = '读取失败：' + error.message;\n  }\n});",
    "observe": [
      "accept 是选择提示，不是严格安全验证。",
      "textContent 不执行文件中的 HTML。"
    ],
    "challenge": "显示文件名和字节大小。",
    "quiz": [
      "accept 属性是可靠的安全验证吗？",
      [
        "是",
        "否",
        "仅对文本是"
      ],
      1,
      "accept 主要提示文件选择器，仍需验证内容与大小。"
    ],
    "doc": "https://developer.mozilla.org/en-US/docs/Web/API/File",
    "uses": [
      "浏览器 API",
      "实际页面开发"
    ],
    "tags": [
      "浏览器 API",
      "JS"
    ],
    "level": "入门",
    "minutes": 15,
    "pitfalls": []
  },
  {
    "cat": "js",
    "id": "js-raf",
    "title": "requestAnimationFrame 与时间",
    "module": "浏览器 API",
    "what": "requestAnimationFrame 在浏览器准备绘制前回调。按时间差计算位移，避免把每帧固定像素与不同刷新率绑定。",
    "subtitle": "requestAnimationFrame 在浏览器准备绘制前回调。",
    "html": "<main class=\"lesson-demo\">\n  <h1>基于时间的运动</h1>\n  <button id=\"startMotion\">开始 / 暂停</button>\n  <div class=\"track\"><div id=\"ball\"></div></div>\n</main>",
    "css": ".track {\n  height: 80px;\n  overflow: hidden;\n  background: #e8f0ea;\n  border-radius: 10px;\n}\n#ball {\n  width: 36px;\n  height: 36px;\n  margin-top: 22px;\n  border-radius: 50%;\n  background: #568766;\n}",
    "js": "let running = false;\nlet frame;\nlet previous;\nlet position = 0;\nconst ball = document.getElementById('ball');\nfunction tick(time) {\n  if (!running) return;\n  if (previous !== undefined) position += Math.min(time - previous, 50) * 0.1;\n  previous = time;\n  const limit = Math.max(1, ball.parentElement.clientWidth - 36);\n  position %= limit;\n  ball.style.transform = 'translateX(' + position + 'px)';\n  frame = requestAnimationFrame(tick);\n}\ndocument.getElementById('startMotion').addEventListener('click', () => {\n  running = !running;\n  previous = undefined;\n  if (running) frame = requestAnimationFrame(tick);\n  else cancelAnimationFrame(frame);\n});",
    "observe": [
      "重复点击不会建立多条动画循环。",
      "恢复后重置时间，避免跳跃。"
    ],
    "challenge": "加入速度滑块。",
    "quiz": [
      "为什么根据时间差计算移动？",
      [
        "适应不同刷新率",
        "让颜色改变",
        "减少 DOM 数量"
      ],
      0,
      "时间驱动速度不会随帧率成倍变化。"
    ],
    "doc": "https://developer.mozilla.org/en-US/docs/Web/API/Window/requestAnimationFrame",
    "uses": [
      "浏览器 API",
      "实际页面开发"
    ],
    "tags": [
      "浏览器 API",
      "JS"
    ],
    "level": "进阶",
    "minutes": 15,
    "pitfalls": []
  },
  {
    "cat": "js",
    "id": "js-intersection",
    "title": "IntersectionObserver 观察可见性",
    "module": "浏览器 API",
    "what": "IntersectionObserver 异步观察目标与根容器的相交状态。适合延迟加载和进入视口的效果，不需要每次滚动都计算所有位置。",
    "subtitle": "IntersectionObserver 异步观察目标与根容器的相交状态。",
    "html": "<main class=\"lesson-demo\">\n  <h1>在容器里滚动</h1>\n  <div id=\"scrollBox\">\n    <div class=\"spacer\">向下滚动</div>\n    <div id=\"observed\">观察目标</div>\n    <div class=\"spacer\">继续滚动</div>\n  </div>\n  <p id=\"visibility\" aria-live=\"polite\">目标未进入</p>\n</main>",
    "css": "#scrollBox {\n  height: 180px;\n  overflow: auto;\n  border: 1px solid #b8cfc0;\n}\n.spacer {\n  height: 220px;\n  padding: 20px;\n}\n#observed {\n  padding: 40px;\n  background: #cee2d3;\n}",
    "js": "const observer = new IntersectionObserver(\n  (entries) => {\n    for (const entry of entries) {\n      document.getElementById('visibility').textContent = entry.isIntersecting\n        ? '目标已进入观察区域'\n        : '目标已离开观察区域';\n    }\n  },\n  { root: document.getElementById('scrollBox'), threshold: 0.5 },\n);\nobserver.observe(document.getElementById('observed'));",
    "observe": [
      "root 是滚动容器而不是默认视口。",
      "threshold=.5 在交叉比例经过一半时通知。"
    ],
    "challenge": "改成 threshold:1 比较触发时机。",
    "quiz": [
      "root:null 通常表示什么？",
      [
        "不观察",
        "文档视口",
        "目标父节点"
      ],
      1,
      "null 以文档视口为观察根。"
    ],
    "doc": "https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API",
    "uses": [
      "浏览器 API",
      "实际页面开发"
    ],
    "tags": [
      "浏览器 API",
      "JS"
    ],
    "level": "进阶",
    "minutes": 15,
    "pitfalls": []
  },
  {
    "cat": "js",
    "id": "js-resize",
    "title": "ResizeObserver 与组件尺寸",
    "module": "浏览器 API",
    "what": "ResizeObserver 观察元素尺寸变化，比只监听 window.resize 更适合组件。避免在回调内不断改变自身尺寸形成循环。",
    "subtitle": "ResizeObserver 观察元素尺寸变化，比只监听 window.resize 更适合组件。",
    "html": "<main class=\"lesson-demo\">\n  <h1>拖动右下角改变容器</h1>\n  <div id=\"resizable\">可调整的区域</div>\n  <output id=\"size\">等待尺寸信息</output>\n</main>",
    "css": "#resizable {\n  width: 240px;\n  max-width: 100%;\n  min-width: 120px;\n  height: 130px;\n  min-height: 80px;\n  resize: both;\n  overflow: auto;\n  background: #dcebe0;\n  padding: 20px;\n}",
    "js": "const observer = new ResizeObserver((entries) => {\n  const { width, height } = entries[0].contentRect;\n  document.getElementById('size').textContent =\n    Math.round(width) + ' × ' + Math.round(height) + '（内容盒）';\n});\nobserver.observe(document.getElementById('resizable'));",
    "observe": [
      "contentRect 默认观察内容盒尺寸。",
      "移动触屏未必支持手动 resize，可切换设备宽度。"
    ],
    "challenge": "用边框盒观察选项比较结果。",
    "quiz": [
      "观察组件尺寸更适合哪个 API？",
      [
        "ResizeObserver",
        "setInterval",
        "JSON.parse"
      ],
      0,
      "ResizeObserver 在元素尺寸改变时通知。"
    ],
    "doc": "https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver",
    "uses": [
      "浏览器 API",
      "实际页面开发"
    ],
    "tags": [
      "浏览器 API",
      "JS"
    ],
    "level": "进阶",
    "minutes": 15,
    "pitfalls": []
  },
  {
    "cat": "js",
    "id": "js-canvas",
    "title": "Canvas 绘图与导出",
    "module": "浏览器 API",
    "what": "Canvas 用脚本绘制位图，设置 width/height 决定绘图分辨率。它不自动为每个图形提供语义，因此需要文字说明或替代内容。",
    "subtitle": "Canvas 用脚本绘制位图，设置 width/height 决定绘图分辨率。",
    "html": "<main class=\"lesson-demo\">\n  <h1>绘制一张学习图表</h1>\n  <canvas\n    id=\"chart\"\n    width=\"600\"\n    height=\"240\"\n    role=\"img\"\n    aria-label=\"HTML 80、CSS 60、JavaScript 40 的学习进度柱状图\"\n  >\n    HTML 80，CSS 60，JavaScript 40。\n  </canvas>\n  <p>图形内容：HTML 80%，CSS 60%，JavaScript 40%。</p>\n  <button id=\"redraw\">重新绘制</button>\n</main>",
    "css": "canvas {\n  display: block;\n  width: 100%;\n  height: auto;\n  background: #f5f8f5;\n  border-radius: 10px;\n}",
    "js": "function draw() {\n  const canvas = document.getElementById('chart');\n  const context = canvas.getContext('2d');\n  context.clearRect(0, 0, canvas.width, canvas.height);\n  context.font = '18px sans-serif';\n  for (const [index, value] of [80, 60, 40].entries()) {\n    context.fillStyle = ['#507f60', '#b18b48', '#6685a3'][index];\n    context.fillRect(50 + index * 180, 190 - value * 1.5, 110, value * 1.5);\n    context.fillStyle = '#263e2d';\n    context.fillText(['HTML', 'CSS', 'JavaScript'][index], 50 + index * 180, 220);\n  }\n}\ndocument.getElementById('redraw').addEventListener('click', draw);\ndraw();",
    "observe": [
      "CSS 大小与画布分辨率是不同概念。",
      "clearRect 防止重复绘制残留。"
    ],
    "challenge": "给柱子上方添加数值。",
    "quiz": [
      "Canvas 图形是每个都对应 DOM 节点吗？",
      [
        "是",
        "否",
        "只有矩形是"
      ],
      1,
      "Canvas 图形是画布上的像素绘制。"
    ],
    "doc": "https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API",
    "uses": [
      "浏览器 API",
      "实际页面开发"
    ],
    "tags": [
      "浏览器 API",
      "JS"
    ],
    "level": "入门",
    "minutes": 15,
    "pitfalls": []
  },
  {
    "cat": "js",
    "id": "js-custom-event",
    "title": "CustomEvent 与组件通信",
    "module": "DOM 与事件",
    "what": "CustomEvent 可通过 detail 携带数据，dispatchEvent 同步触发监听器。组件可以用事件暴露变化，避免互相依赖内部节点。",
    "subtitle": "CustomEvent 可通过 detail 携带数据，dispatchEvent 同步触发监听器。",
    "html": "<main class=\"lesson-demo\">\n  <h1>组件发出自己的事件</h1>\n  <button id=\"complete\">完成一课</button>\n  <p id=\"eventResult\" aria-live=\"polite\">等待 course:complete 事件</p>\n</main>",
    "css": "",
    "js": "document.addEventListener('course:complete', (event) => {\n  document.getElementById('eventResult').textContent = event.detail.title + ' 已完成';\n});\ndocument.getElementById('complete').addEventListener('click', (event) => {\n  event.target.dispatchEvent(\n    new CustomEvent('course:complete', {\n      detail: { title: '事件系统' },\n      bubbles: true,\n    }),\n  );\n});",
    "observe": [
      "自定义事件默认不冒泡，需要显式设置。",
      "detail 提供业务数据。"
    ],
    "challenge": "加入学习时长并显示在结果中。",
    "quiz": [
      "CustomEvent 携带数据放在哪？",
      [
        "detail",
        "dataset",
        "value"
      ],
      0,
      "detail 保存自定义事件的数据。"
    ],
    "doc": "https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent",
    "uses": [
      "DOM 与事件",
      "实际页面开发"
    ],
    "tags": [
      "DOM 与事件",
      "JS"
    ],
    "level": "进阶",
    "minutes": 15,
    "pitfalls": []
  },
  {
    "cat": "js",
    "id": "js-url",
    "title": "URL 与 URLSearchParams",
    "module": "浏览器 API",
    "what": "URL 解析地址，URLSearchParams 读写查询参数并正确编码。不要手动用字符串拼接处理任意用户输入。",
    "subtitle": "URL 解析地址，URLSearchParams 读写查询参数并正确编码。",
    "html": "<main class=\"lesson-demo\">\n  <h1>生成课程分享地址</h1>\n  <label>\n    关键词\n    <input id=\"urlKeyword\" value=\"CSS 布局\" />\n  </label>\n  <button id=\"makeUrl\">生成地址</button>\n  <pre id=\"urlResult\"></pre>\n</main>",
    "css": "",
    "js": "document.getElementById('makeUrl').addEventListener('click', () => {\n  const url = new URL('https://example.com/learn');\n  url.searchParams.set('q', document.getElementById('urlKeyword').value);\n  url.searchParams.set('level', 'beginner');\n  document.getElementById('urlResult').textContent =\n    url.href + '\\n解码关键词：' + url.searchParams.get('q');\n});",
    "observe": [
      "中文与空格自动编码。",
      "set 覆盖同名参数，append 添加同名多值。"
    ],
    "challenge": "加入一个参数包含 & 和 =，检查编码。",
    "quiz": [
      "安全组合查询参数使用什么？",
      [
        "URLSearchParams",
        "eval",
        "直接拼接所有字符"
      ],
      0,
      "URLSearchParams 处理转义与参数序列。"
    ],
    "doc": "https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams",
    "uses": [
      "浏览器 API",
      "实际页面开发"
    ],
    "tags": [
      "浏览器 API",
      "JS"
    ],
    "level": "入门",
    "minutes": 15,
    "pitfalls": []
  },
  {
    "cat": "js",
    "id": "js-abort-listener",
    "title": "AbortController 清理监听器",
    "module": "DOM 与事件",
    "what": "addEventListener 的 signal 选项可绑定 AbortSignal。组件卸载时 abort 可集中移除这些监听器，避免重复注册与状态泄漏。",
    "subtitle": "addEventListener 的 signal 选项可绑定 AbortSignal。",
    "html": "<main class=\"lesson-demo\">\n  <h1>可清理的事件监听</h1>\n  <button id=\"listen\">启动监听</button>\n  <button id=\"fire\">点击计数</button>\n  <button id=\"stop\">停止监听</button>\n  <p id=\"listenStatus\" aria-live=\"polite\">尚未监听</p>\n</main>",
    "css": "",
    "js": "let controller;\nlet count = 0;\nconst output = document.getElementById('listenStatus');\ndocument.getElementById('listen').addEventListener('click', () => {\n  controller?.abort();\n  controller = new AbortController();\n  document.getElementById('fire').addEventListener(\n    'click',\n    () => {\n      output.textContent = '监听收到 ' + ++count + ' 次点击';\n    },\n    { signal: controller.signal },\n  );\n  output.textContent = '监听已启动';\n});\ndocument.getElementById('stop').addEventListener('click', () => {\n  controller?.abort();\n  output.textContent = '监听已停止';\n});",
    "observe": [
      "重复启动前移除旧监听。",
      "停止后点击不再累计。"
    ],
    "challenge": "把两种不同事件关联到同一个 signal。",
    "quiz": [
      "abort 后这些监听器如何处理？",
      [
        "被移除",
        "自动重启",
        "执行一次"
      ],
      0,
      "关联 signal 的事件监听器会被移除。"
    ],
    "doc": "https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener",
    "uses": [
      "DOM 与事件",
      "实际页面开发"
    ],
    "tags": [
      "DOM 与事件",
      "JS"
    ],
    "level": "进阶",
    "minutes": 15,
    "pitfalls": []
  },
  {
    "cat": "project",
    "id": "project-portfolio",
    "title": "作品集：筛选与项目详情",
    "module": "综合实战",
    "what": "用语义卡片组织作品，用 Grid 响应式布局，用 JavaScript 根据分类筛选并打开原生详情对话框。所有作品资料都在本地。",
    "subtitle": "用语义卡片组织作品，用 Grid 响应式布局，用 JavaScript 根据分类筛选并打开原生详情对话框。",
    "html": "<main class=\"lesson-demo portfolio\">\n  <header>\n    <small>SELECTED WORK / 2026</small>\n    <h1>让界面，成为沟通的语言。</h1>\n    <p>原生前端作品集 · 从结构到交互</p>\n  </header>\n  <div id=\"filters\" role=\"group\" aria-label=\"作品分类\">\n    <button data-filter=\"all\" aria-pressed=\"true\">全部</button>\n    <button data-filter=\"web\" aria-pressed=\"false\">网站</button>\n    <button data-filter=\"tool\" aria-pressed=\"false\">工具</button>\n  </div>\n  <div id=\"projects\" class=\"project-grid\"></div>\n  <dialog id=\"projectDetail\" aria-labelledby=\"projectName\">\n    <h2 id=\"projectName\"></h2>\n    <p id=\"projectDescription\"></p>\n    <form method=\"dialog\"><button>关闭</button></form>\n  </dialog>\n</main>",
    "css": ".portfolio header {\n  padding: 24px 0;\n}\n.portfolio h1 {\n  font-size: clamp(24px, 4vw, 42px);\n}\n.portfolio small {\n  letter-spacing: 3px;\n  color: #94784c;\n}\n.project-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(min(100%, 200px), 1fr));\n  gap: 16px;\n  margin-top: 24px;\n}\n.project-card {\n  padding: 24px;\n  background: #edf3ee;\n  border-radius: 12px;\n}\n.project-art {\n  padding: 35px 0;\n  font-size: 48px;\n  color: #5b8069;\n}\n[aria-pressed='true'] {\n  outline: 2px solid #588769;\n}\ndialog {\n  max-width: 85%;\n  padding: 24px;\n  border: 0;\n  border-radius: 14px;\n}\ndialog::backdrop {\n  background: #142f2388;\n}",
    "js": "const data = [\n  {\n    name: '界面实验室',\n    category: 'web',\n    icon: '◈',\n    description: '编辑、运行与讲解相连的原生前端学习平台。',\n  },\n  {\n    name: '旅行札记',\n    category: 'web',\n    icon: '△',\n    description: '响应式内容网站，关注文字层级与图片排版。',\n  },\n  {\n    name: '专注计时器',\n    category: 'tool',\n    icon: '◷',\n    description: '通过状态机管理计时、暂停和完成反馈。',\n  },\n  {\n    name: '预算助手',\n    category: 'tool',\n    icon: '▤',\n    description: '用数组与整数金额处理支出统计。',\n  },\n];\nfunction render(filter) {\n  const container = document.getElementById('projects');\n  container.replaceChildren();\n  for (const item of data.filter(\n    (item) => filter === 'all' || item.category === filter,\n  )) {\n    const card = document.createElement('article');\n    card.className = 'project-card';\n    const art = document.createElement('div');\n    art.className = 'project-art';\n    art.textContent = item.icon;\n    const heading = document.createElement('h2');\n    heading.textContent = item.name;\n    const button = document.createElement('button');\n    button.textContent = '查看详情';\n    button.addEventListener('click', () => {\n      document.getElementById('projectName').textContent = item.name;\n      document.getElementById('projectDescription').textContent = item.description;\n      document.getElementById('projectDetail').showModal();\n    });\n    card.append(art, heading, button);\n    container.append(card);\n  }\n}\ndocument.getElementById('filters').addEventListener('click', (event) => {\n  const button = event.target.closest('[data-filter]');\n  if (!button) return;\n  document\n    .querySelectorAll('[data-filter]')\n    .forEach((item) => item.setAttribute('aria-pressed', String(item === button)));\n  render(button.dataset.filter);\n});\nrender('all');",
    "observe": [
      "筛选后展示真实数据子集。",
      "详情采用原生模态对话框。",
      "所有文字用 textContent 插入。"
    ],
    "challenge": "替换为你的三个真实项目，加入技术标签和源码地址。",
    "quiz": [
      "作品筛选的源数据应如何管理？",
      [
        "保持完整数据并派生结果",
        "每次直接删除原数据",
        "写死每种结果"
      ],
      0,
      "保留完整数据可以切换条件并恢复全部作品。"
    ],
    "doc": "https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model",
    "uses": [
      "综合实战",
      "实际页面开发"
    ],
    "tags": [
      "Grid",
      "筛选",
      "dialog",
      "作品集"
    ],
    "level": "实战",
    "minutes": 45,
    "pitfalls": []
  },
  {
    "cat": "project",
    "id": "project-cart",
    "title": "购物清单：数量与金额",
    "module": "综合实战",
    "what": "把商品与数量作为状态，渲染函数派生小计和总计。金额以分计算，界面展示时用 Intl 格式化，所有商品为本地演示数据。",
    "subtitle": "把商品与数量作为状态，渲染函数派生小计和总计。",
    "html": "<main class=\"lesson-demo\">\n  <h1>学习补给清单</h1>\n  <div id=\"cart\"></div>\n  <p>\n    合计：\n    <strong id=\"cartTotal\"></strong>\n  </p>\n  <button id=\"checkout\">查看订单摘要</button>\n  <p id=\"order\" aria-live=\"polite\"></p>\n</main>",
    "css": ".cart-row {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 12px;\n  border-bottom: 1px solid #dbe6dd;\n  padding: 14px 0;\n}\n.cart-row strong {\n  margin-right: auto;\n}",
    "js": "const products = [\n  { title: '学习笔记本', cents: 1990, count: 1 },\n  { title: '桌面书签', cents: 890, count: 2 },\n  { title: '专注贴纸', cents: 590, count: 0 },\n];\nconst money = (cents) =>\n  new Intl.NumberFormat('zh-CN', { style: 'currency', currency: 'CNY' }).format(\n    cents / 100,\n  );\nfunction render() {\n  const container = document.getElementById('cart');\n  container.replaceChildren();\n  products.forEach((product, index) => {\n    const row = document.createElement('div');\n    row.className = 'cart-row';\n    const title = document.createElement('strong');\n    title.textContent = product.title + ' · ' + money(product.cents);\n    row.append(title);\n    for (const delta of [-1, 1]) {\n      const button = document.createElement('button');\n      button.textContent = delta === -1 ? '−' : '+';\n      button.setAttribute(\n        'aria-label',\n        (delta === -1 ? '减少' : '增加') + product.title,\n      );\n      button.disabled = delta === -1 && product.count === 0;\n      button.addEventListener('click', () => {\n        products[index].count = Math.max(0, Math.min(99, product.count + delta));\n        render();\n      });\n      row.append(button);\n      if (delta === -1) row.append(document.createTextNode(String(product.count)));\n    }\n    container.append(row);\n  });\n  document.getElementById('cartTotal').textContent = money(\n    products.reduce((sum, item) => sum + item.cents * item.count, 0),\n  );\n  document.getElementById('order').textContent = '';\n}\ndocument.getElementById('checkout').addEventListener('click', () => {\n  const count = products.reduce((sum, item) => sum + item.count, 0);\n  document.getElementById('order').textContent = count\n    ? '共 ' + count + ' 件，仅演示订单摘要，无支付与下单。'\n    : '请先添加商品。';\n});\nrender();",
    "observe": [
      "数量不低于 0、不高于 99。",
      "total 从状态派生，不单独维护重复数据。"
    ],
    "challenge": "加入满 5000 分减 500 分的折扣，并显示优惠前后金额。",
    "quiz": [
      "金额计算采用什么？",
      [
        "整数分",
        "格式化后的字符串",
        "随意累加浮点"
      ],
      0,
      "在安全整数范围内以分计算更容易避免小数误差。"
    ],
    "doc": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat",
    "uses": [
      "综合实战",
      "实际页面开发"
    ],
    "tags": [
      "状态",
      "数组",
      "金额"
    ],
    "level": "实战",
    "minutes": 45,
    "pitfalls": []
  },
  {
    "cat": "project",
    "id": "project-quiz",
    "title": "测验应用：评分与重新开始",
    "module": "综合实战",
    "what": "题库是数据，当前题目、答案与结果是状态。使用 radio 和 fieldset 提供原生键盘操作，提交后给出答案解释。",
    "subtitle": "题库是数据，当前题目、答案与结果是状态。",
    "html": "<main class=\"lesson-demo\">\n  <h1>前端基础小测</h1>\n  <p id=\"questionProgress\"></p>\n  <form id=\"quizForm\">\n    <fieldset id=\"questionArea\"></fieldset>\n    <button type=\"submit\" id=\"quizNext\">提交答案</button>\n  </form>\n  <p id=\"quizExplanation\" aria-live=\"polite\"></p>\n  <button id=\"quizRestart\" hidden>再试一次</button>\n</main>",
    "css": "fieldset {\n  border: 1px solid #c6d9cd;\n  border-radius: 10px;\n}",
    "js": "const questions = [\n  {\n    title: '哪个元素用于导航区域？',\n    options: ['nav', 'div', 'span'],\n    answer: 0,\n    explain: 'nav 为主要导航提供语义。',\n  },\n  {\n    title: '哪个属性设置网格列？',\n    options: ['display', 'grid-template-columns', 'color'],\n    answer: 1,\n    explain: 'grid-template-columns 定义列轨道。',\n  },\n  {\n    title: '哪个方法绑定事件？',\n    options: ['JSON.parse', 'addEventListener', 'slice'],\n    answer: 1,\n    explain: 'addEventListener 为目标注册监听器。',\n  },\n];\nlet index = 0;\nlet score = 0;\nlet answered = false;\nfunction render() {\n  answered = false;\n  const question = questions[index];\n  const area = document.getElementById('questionArea');\n  area.replaceChildren();\n  const legend = document.createElement('legend');\n  legend.textContent = question.title;\n  area.append(legend);\n  question.options.forEach((option, i) => {\n    const label = document.createElement('label');\n    const input = document.createElement('input');\n    input.type = 'radio';\n    input.name = 'answer';\n    input.value = i;\n    input.required = true;\n    label.append(input, document.createTextNode(' ' + option));\n    area.append(label);\n  });\n  document.getElementById('questionProgress').textContent =\n    '第 ' + (index + 1) + ' / ' + questions.length + ' 题';\n  document.getElementById('quizExplanation').textContent = '';\n  document.getElementById('quizNext').textContent = '提交答案';\n}\ndocument.getElementById('quizForm').addEventListener('submit', (event) => {\n  event.preventDefault();\n  if (!answered) {\n    const chosen = Number(new FormData(event.target).get('answer'));\n    if (chosen === questions[index].answer) score++;\n    document.getElementById('quizExplanation').textContent =\n      (chosen === questions[index].answer ? '正确！' : '再记一下：') +\n      questions[index].explain;\n    document\n      .querySelectorAll('[name=answer]')\n      .forEach((input) => (input.disabled = true));\n    document.getElementById('quizNext').textContent = '下一题 / 查看结果';\n    answered = true;\n    return;\n  }\n  if (++index < questions.length) render();\n  else {\n    document.getElementById('quizForm').hidden = true;\n    document.getElementById('questionProgress').textContent =\n      '完成！得分 ' + score + ' / ' + questions.length;\n    document.getElementById('quizRestart').hidden = false;\n  }\n});\ndocument.getElementById('quizRestart').addEventListener('click', () => {\n  index = 0;\n  score = 0;\n  document.getElementById('quizForm').hidden = false;\n  document.getElementById('quizRestart').hidden = true;\n  render();\n});\nrender();",
    "observe": [
      "未选答案时原生 required 阻止提交。",
      "每一题只计分一次。",
      "重新开始重置全部状态。"
    ],
    "challenge": "加入两道你自己的题目，并实现错题回顾。",
    "quiz": [
      "重复提交为何不能再次加分？",
      [
        "answered 状态限制",
        "只靠按钮颜色",
        "浏览器自动阻止"
      ],
      0,
      "明确状态避免重复计分。"
    ],
    "doc": "https://developer.mozilla.org/en-US/docs/Web/API/FormData",
    "uses": [
      "综合实战",
      "实际页面开发"
    ],
    "tags": [
      "表单",
      "状态机",
      "评分"
    ],
    "level": "实战",
    "minutes": 45,
    "pitfalls": []
  },
  {
    "cat": "project",
    "id": "project-expenses",
    "title": "支出账本：新增、删除与统计",
    "module": "综合实战",
    "what": "用表单管理支出记录，用数据渲染表格与汇总。金额从字符串精确转换为分，用户内容以文本显示，数据仅保存在当前实验内存。",
    "subtitle": "用表单管理支出记录，用数据渲染表格与汇总。",
    "html": "<main class=\"lesson-demo\">\n  <h1>我的学习支出</h1>\n  <form id=\"expenseForm\">\n    <label>\n      项目\n      <input name=\"title\" required maxlength=\"40\" />\n    </label>\n    <label>\n      金额（元）\n      <input name=\"amount\" type=\"number\" min=\"0.01\" max=\"100000\" step=\"0.01\" required />\n    </label>\n    <button type=\"submit\">加入记录</button>\n  </form>\n  <table>\n    <caption>当前记录</caption>\n    <thead>\n      <tr>\n        <th>项目</th>\n        <th>金额</th>\n        <th>操作</th>\n      </tr>\n    </thead>\n    <tbody id=\"records\"></tbody>\n  </table>\n  <p id=\"expenseTotal\"></p>\n</main>",
    "css": "",
    "js": "let nextId = 1;\nlet records = [];\nfunction render() {\n  const body = document.getElementById('records');\n  body.replaceChildren();\n  for (const record of records) {\n    const row = document.createElement('tr');\n    const title = document.createElement('td');\n    title.textContent = record.title;\n    const amount = document.createElement('td');\n    amount.textContent = (record.cents / 100).toFixed(2);\n    const action = document.createElement('td');\n    const button = document.createElement('button');\n    button.textContent = '删除';\n    button.setAttribute('aria-label', '删除' + record.title);\n    button.addEventListener('click', () => {\n      records = records.filter((item) => item.id !== record.id);\n      render();\n    });\n    action.append(button);\n    row.append(title, amount, action);\n    body.append(row);\n  }\n  document.getElementById('expenseTotal').textContent = records.length\n    ? '合计 ¥' + (records.reduce((sum, item) => sum + item.cents, 0) / 100).toFixed(2)\n    : '暂无记录，先加入一笔支出。';\n}\ndocument.getElementById('expenseForm').addEventListener('submit', (event) => {\n  event.preventDefault();\n  const data = new FormData(event.target);\n  const title = data.get('title').trim();\n  if (!title) return;\n  const [whole, fraction = ''] = data.get('amount').split('.');\n  const cents = Number(whole) * 100 + Number(fraction.padEnd(2, '0').slice(0, 2));\n  if (!Number.isSafeInteger(cents) || cents <= 0) return;\n  records.push({ id: nextId++, title, cents });\n  event.target.reset();\n  render();\n});\nrender();",
    "observe": [
      "记录有稳定 id，不用数组位置作身份。",
      "删除后统计从新数据派生。"
    ],
    "challenge": "加入分类下拉框，再按分类筛选统计。",
    "quiz": [
      "记录身份应优先使用什么？",
      [
        "稳定 id",
        "当前数组下标",
        "金额"
      ],
      0,
      "下标会随删除排序改变，不能长期代表同一记录。"
    ],
    "doc": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce",
    "uses": [
      "综合实战",
      "实际页面开发"
    ],
    "tags": [
      "CRUD",
      "表格",
      "统计"
    ],
    "level": "实战",
    "minutes": 45,
    "pitfalls": []
  },
  {
    "cat": "project",
    "id": "project-focus",
    "title": "专注时钟：计时状态与暂停",
    "module": "综合实战",
    "what": "计时器用目标时间而不是假设 setInterval 精准触发。开始、暂停、结束是明确状态；后台标签页恢复时也根据实际时间计算剩余时长。",
    "subtitle": "计时器用目标时间而不是假设 setInterval 精准触发。",
    "html": "<main class=\"lesson-demo focus-app\">\n  <small>FOCUS / ONE THING AT A TIME</small>\n  <h1>给注意力一点空间</h1>\n  <label>\n    本次秒数\n    <input id=\"duration\" type=\"number\" min=\"5\" max=\"3600\" value=\"60\" />\n  </label>\n  <div id=\"clock\" role=\"timer\" aria-label=\"剩余时间\">01:00</div>\n  <button id=\"focusStart\">开始</button>\n  <button id=\"focusReset\">重置</button>\n  <p id=\"focusState\" aria-live=\"polite\">准备好了</p>\n</main>",
    "css": ".focus-app {\n  text-align: center;\n}\n#clock {\n  font-size: clamp(48px, 10vw, 84px);\n  font-variant-numeric: tabular-nums;\n  margin: 24px 0;\n  color: #396c50;\n}\n.focus-app small {\n  letter-spacing: 2px;\n  color: #977c4f;\n}",
    "js": "let remaining = 60000;\nlet deadline = 0;\nlet timer;\nlet running = false;\nconst clock = document.getElementById('clock');\nconst button = document.getElementById('focusStart');\nfunction display() {\n  const seconds = Math.ceil(Math.max(0, remaining) / 1000);\n  clock.textContent =\n    String(Math.floor(seconds / 60)).padStart(2, '0') +\n    ':' +\n    String(seconds % 60).padStart(2, '0');\n}\nfunction stop() {\n  clearInterval(timer);\n  running = false;\n  button.textContent = '继续';\n}\nfunction reset() {\n  stop();\n  remaining =\n    Math.max(\n      5,\n      Math.min(3600, Number(document.getElementById('duration').value) || 60),\n    ) * 1000;\n  button.textContent = '开始';\n  document.getElementById('focusState').textContent = '准备好了';\n  display();\n}\nbutton.addEventListener('click', () => {\n  if (running) {\n    remaining = Math.max(0, deadline - Date.now());\n    stop();\n    display();\n    document.getElementById('focusState').textContent = '已暂停';\n    return;\n  }\n  if (remaining <= 0) reset();\n  deadline = Date.now() + remaining;\n  running = true;\n  button.textContent = '暂停';\n  document.getElementById('focusState').textContent = '专注进行中';\n  timer = setInterval(() => {\n    remaining = Math.max(0, deadline - Date.now());\n    display();\n    if (remaining === 0) {\n      stop();\n      button.textContent = '再来一次';\n      document.getElementById('focusState').textContent = '完成，休息一下。';\n    }\n  }, 100);\n});\ndocument.getElementById('focusReset').addEventListener('click', reset);\ndocument.getElementById('duration').addEventListener('change', reset);\nreset();",
    "observe": [
      "暂停保存实际剩余时间。",
      "输入变化重置当前计时。",
      "完成后清理定时器。"
    ],
    "challenge": "增加工作与休息阶段，并在阶段切换时给出文字反馈。",
    "quiz": [
      "计时应该依据什么？",
      [
        "目标时间与当前时间差",
        "回调次数",
        "动画帧数量"
      ],
      0,
      "定时器可能延迟，目标时间更接近实际经过的时间。"
    ],
    "doc": "https://developer.mozilla.org/en-US/docs/Web/API/Window/setInterval",
    "uses": [
      "综合实战",
      "实际页面开发"
    ],
    "tags": [
      "计时",
      "状态机",
      "时间"
    ],
    "level": "实战",
    "minutes": 45,
    "pitfalls": []
  },
  {
    "cat": "project",
    "id": "project-color",
    "title": "颜色工具：HEX、RGB 与复制",
    "module": "综合实战",
    "what": "把颜色输入转成 RGB 与文本输出，改变样本背景，并处理 Clipboard 在隔离或不安全上下文中的失败。失败时提供可手动复制的文本。",
    "subtitle": "把颜色输入转成 RGB 与文本输出，改变样本背景，并处理 Clipboard 在隔离或不安全上下文中的失败。",
    "html": "<main class=\"lesson-demo\">\n  <h1>配色观察室</h1>\n  <label>\n    选择颜色\n    <input id=\"colorInput\" type=\"color\" value=\"#4f7e61\" />\n  </label>\n  <div id=\"swatch\"></div>\n  <label>\n    颜色值\n    <input id=\"colorCode\" readonly />\n  </label>\n  <p id=\"rgb\"></p>\n  <button id=\"copyColor\">复制 HEX</button>\n  <p id=\"copyStatus\" aria-live=\"polite\"></p>\n</main>",
    "css": "#swatch {\n  height: 150px;\n  border-radius: 12px;\n  margin: 18px 0;\n}",
    "js": "const input = document.getElementById('colorInput');\nfunction render() {\n  const hex = input.value;\n  const channels = [1, 3, 5].map((start) => parseInt(hex.slice(start, start + 2), 16));\n  document.getElementById('swatch').style.background = hex;\n  document.getElementById('colorCode').value = hex.toUpperCase();\n  document.getElementById('rgb').textContent = 'rgb(' + channels.join(', ') + ')';\n  document.getElementById('copyStatus').textContent = '';\n}\ninput.addEventListener('input', render);\ndocument.getElementById('copyColor').addEventListener('click', async () => {\n  const code = document.getElementById('colorCode');\n  try {\n    await navigator.clipboard.writeText(code.value);\n    document.getElementById('copyStatus').textContent = '已复制';\n  } catch {\n    code.focus();\n    code.select();\n    document.getElementById('copyStatus').textContent =\n      '当前环境限制剪贴板，颜色值已选中，可按 Ctrl/Cmd+C。';\n  }\n});\nrender();",
    "observe": [
      "十六进制每两个字符是一条颜色通道。",
      "复制失败有明确回退操作。"
    ],
    "challenge": "增加最近使用的五种颜色，并防止重复。",
    "quiz": [
      "Clipboard 失败时应该如何处理？",
      [
        "给出手动复制回退",
        "显示已复制",
        "忽略"
      ],
      0,
      "实际未复制时不能给成功反馈。"
    ],
    "doc": "https://developer.mozilla.org/en-US/docs/Web/API/Clipboard/writeText",
    "uses": [
      "综合实战",
      "实际页面开发"
    ],
    "tags": [
      "颜色",
      "Clipboard",
      "降级"
    ],
    "level": "实战",
    "minutes": 30,
    "pitfalls": []
  }
];

const LESSON_BASE = ".lesson-demo {\n  max-width: 780px;\n  margin: 24px auto;\n  padding: 24px;\n  background: white;\n  border: 1px solid #dce6e0;\n  border-radius: var(--lab-radius);\n}\n.lesson-demo h1 {\n  font-size: 1.7rem;\n}\n.lesson-demo h2 {\n  font-size: 1.25rem;\n}\n.lesson-demo p {\n  color: #55665d;\n}\n.lesson-demo label {\n  display: block;\n  margin: 12px 0;\n}\n.lesson-demo input:not([type='checkbox']):not([type='radio']),\n.lesson-demo select,\n.lesson-demo textarea {\n  max-width: 100%;\n  padding: 10px;\n  border: 1px solid #b5c9be;\n  border-radius: 6px;\n}\n.lesson-demo button {\n  padding: 10px 16px;\n  margin: 4px;\n  border: 1px solid #c5d8cd;\n  border-radius: 7px;\n  background: #edf5f0;\n  color: #134c38;\n}\n.lesson-demo button:disabled {\n  opacity: 0.5;\n  cursor: wait;\n}\n.lesson-demo pre {\n  padding: 16px;\n  white-space: pre-wrap;\n  overflow-wrap: anywhere;\n  background: #122b24;\n  color: #d0eadb;\n  border-radius: 8px;\n  min-height: 72px;\n}\n.lesson-demo table {\n  width: 100%;\n  border-collapse: collapse;\n}\n.lesson-demo th,\n.lesson-demo td {\n  padding: 10px;\n  border: 1px solid #dce6e0;\n  text-align: left;\n}\n.lesson-demo :focus-visible {\n  outline: 3px solid #bd8e39;\n  outline-offset: 3px;\n}\n@media (max-width: 480px) {\n  .lesson-demo {\n    margin: 12px;\n    padding: 16px;\n  }\n}\n";

const PATHS = [
  {
    "title": "01 / 搭好结构",
    "cat": "html",
    "description": "文档、语义、媒体、表单与可访问性",
    "ids": [
      "html-document",
      "semantic",
      "html-inline",
      "html-figure",
      "html-input-types",
      "html-fieldset",
      "html-accessibility",
      "html-dialog"
    ]
  },
  {
    "title": "02 / 理解样式",
    "cat": "css",
    "description": "级联、盒模型、布局与响应式",
    "ids": [
      "css-cascade",
      "box-model",
      "css-sizing",
      "css-units",
      "flex",
      "css-flex-grow",
      "grid-css",
      "css-grid-areas",
      "responsive",
      "css-reduced-motion"
    ]
  },
  {
    "title": "03 / 让页面回应",
    "cat": "js",
    "description": "语言、DOM、事件与异步操作",
    "ids": [
      "js-variables",
      "js-types",
      "js-control",
      "js-functions",
      "js-array-methods",
      "js-dom",
      "events",
      "js-delegation",
      "js-promise",
      "js-fetch"
    ]
  },
  {
    "title": "04 / 完成一件作品",
    "cat": "project",
    "description": "把知识组合成完整的小应用",
    "ids": [
      "project-portfolio",
      "project-cart",
      "project-quiz",
      "project-expenses",
      "project-focus",
      "project-color"
    ]
  }
];

const MDN = "https://developer.mozilla.org/en-US/docs/";

const RUNOOB = {
  "html": "https://www.runoob.com/html/html-tutorial.html",
  "css": "https://www.runoob.com/css/css-tutorial.html",
  "js": "https://www.runoob.com/js/js-tutorial.html",
  "layout": "https://www.runoob.com/css/css-tutorial.html",
  "project": "https://www.runoob.com/js/js-examples.html"
};