window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["bd845393b098524d3d83"] = {
  "id": "bd845393b098524d3d83",
  "title": "day01-HTML基础.pdf",
  "treatment": "课件页级文本（配图回溯原件）",
  "sections": [
    {
      "title": "第1页",
      "level": 1,
      "page": 1,
      "blocks": [
        {
          "type": "text",
          "text": "阶段目标：掌握 HTML 、 CSS 常用布局技巧，能够独立制作网页。\nday01 ： HTML 基础  \n目标：掌握标签基本语法，能够独立布局文章页。\n01- 今日课程介绍  \n今日目标：掌握标签基本语法，能够独立布局文章页。\n核心技术点  \n网页组成\n排版标签\n多媒体标签及属性\n综合案例一  - 个人简介\n综合案例二  - Vue 简介"
        }
      ]
    },
    {
      "title": "第2页",
      "level": 1,
      "page": 2,
      "blocks": [
        {
          "type": "text",
          "text": "02- 标签语法  \nHTML 超文本标记语言 ——HyperText Markup Language 。 \n超文本：链接\n标记：标签，带尖括号的文本"
        }
      ]
    },
    {
      "title": "第3页",
      "level": 1,
      "page": 3,
      "blocks": [
        {
          "type": "text",
          "text": "标签结构  \n标签要成对出现，中间包裹内容\n<> 里面放英文字母（标签名）\n结束标签比开始标签多  /\n标签分类：双标签和单标签\n \n \n03-HTML 骨架  \nhtml ：整个网页\nhead ：网页头部，用来存放给浏览器看的信息，例如  CSS\ntitle ：网页标题\nbody ：网页主体，用来存放给用户看的信息，例如图片、文字\n<strong>需要加粗的文字<strong>\n<br>\n<hr>"
        }
      ]
    },
    {
      "title": "第4页",
      "level": 1,
      "page": 4,
      "blocks": [
        {
          "type": "text",
          "text": "提示\nVS Code 可以快速生成骨架：在  HTML 文件（ .html ）中， ! （英文）配合  Enter / Tab 键\n04- 标签的关系  \n作用：明确标签的书写位置，让代码格式更整齐\n父子关系（嵌套关系）：子级标签换行且缩进（ Tab 键）\n兄弟关系（并列关系）：兄弟标签换行要对齐\n \n05- 注释  \n概念：注释是对代码的解释和说明，能够提高程序的可读性，方便理解、查找代码。\n注释不会再浏览器中显示。\n在  VS Code 中，添加  / 删除注释的快捷键：Ctrl + / \n \n06- 标题标签  \n一般用在新闻标题、文章标题、网页区域名称、产品名称等等。 \n \n<html>\n  <head>\n    <title>网页标题</title>\n  </head>\n  <body>\n    网页主体\n  </body>\n</html>\n<!-- 我是  HTML 注释  -->\n<h1>一级标题</h1>\n<h2>二级标题</h2>\n<h3>三级标题</h3>\n<h4>四级标题</h4>\n<h5>五级标题</h5>\n<h6>六级标题</h6>"
        }
      ]
    },
    {
      "title": "第5页",
      "level": 1,
      "page": 5,
      "blocks": [
        {
          "type": "text",
          "text": "显示特点：\n文字加粗\n字号逐渐减小\n独占一行（换行）\n经验\n1. h1 标签在一个网页中只能用一次，用来放新闻标题或网页的  logo\n2. h2 ~ h6 没有使用次数的限制\n07- 段落标签  \n一般用在新闻段落、文章段落、产品描述信息等等。 \n \n显示特点：\n独占一行\n段落之间存在间隙\n08- 换行和水平线  \n换行： br\n水平线： hr\n \n09- 文本格式化标签  \n作用：为文本添加特殊格式，以突出重点。常见的文本格式：加粗、倾斜、下划线、删除线等。 \n提示： strong 、 em 、 ins 、 del 标签自带强调含义（语义）。 \n10- 图像标签  \n作用：在网页中插入图片\n<p>段落</p>\n<br>\n<hr>"
        }
      ]
    },
    {
      "title": "第6页",
      "level": 1,
      "page": 6,
      "blocks": [
        {
          "type": "text",
          "text": "src 用于指定图像的位置和名称，是 \n 的必须属性。 \n图像属性  \n属性语法  \n属性名 =\" 属性值 \"\n属性写在尖括号里面，标签名后面，标签名和属性之间用空格隔开，不区分先后顺序\n11- 路径  \n概念：路径指的是查找文件时，从起点到终点经历的路线。 \n路径分类：\n相对路径：从当前文件位置出发查找目标文件\n绝对路径：从盘符出发查找目标文件\nWindows 电脑从盘符出发\nMac 电脑从根目录出发\n相对路径  \n<img  src=\" 图片的  URL\">"
        }
      ]
    },
    {
      "title": "第7页",
      "level": 1,
      "page": 7,
      "blocks": [
        {
          "type": "text",
          "text": "查找方式：从当前文件位置出发查找目标文件\n特殊符号：\n/ 表示进入某个文件夹里面           →  文件夹名 /\n.  表示当前文件所在文件夹            →  ./\n.. 表示当前文件的上一级文件夹  →  ../  \n绝对路径  \n查找方式： Windows 电脑从盘符出发； Mac 电脑从根目录（ / ）出发\n \n提示\n1. Windows 默认是  \\ ，其他系统是  / ，建议统一写为  / \n2. 特殊的绝对路径  →  文件的在线网址：https://www.itheima.com/images/logo.png \" ，应用场景：网页\n底部友情链接\n12- 超链接标签  \n作用：点击跳转到其他页面。 \n \nhref 属性值是跳转地址，是超链接的必须属性。\n超链接默认是在当前窗口跳转页面，添加  target=\"_blank\" 实现新窗口打开页面。\n<img  src=\"C:\\images\\mao.jpg\">\n<a href=\"https://www.baidu.com\">跳转到百度</a>"
        }
      ]
    },
    {
      "title": "第8页",
      "level": 1,
      "page": 8,
      "blocks": [
        {
          "type": "text",
          "text": "拓展：开发初期，不确定跳转地址，则  href 属性值写为  #，表示空链接，页面不会跳转，在当前页面刷新一次。\n \n13- 音频  \n \n常用属性\n拓展：书写  HTML5 属性时，如果属性名和属性值相同，可以简写为一个单词。 \n \n14- 视频  \n \n常用属性\n<a href=\"https://www.baidu.com/\">跳转到百度</a>\n \n<!-- 跳转到本地文件：相对路径查找  --> \n<!-- target=\"_blank\" 新窗口跳转页面  --> \n<a href=\"./01- 标签的写法 .html\" target=\"_blank\">跳转到 01- 标签的写法</a>\n \n<!-- 开发初期，不知道超链接的跳转地址， href 属性值写 # ，表示空链接，不会跳转  -->\n<a href=\"#\">空链接</a>\n<audio src=\" 音频的  URL\"></audio>\n<!-- 在  HTML5 里面，如果属性名和属性值完全一样，可以简写为一个单词  -->\n<audio src=\"./media/music.mp3\" controls loop autoplay></audio>\n<video src=\" 视频的  URL\"></video>"
        }
      ]
    },
    {
      "title": "第9页",
      "level": 1,
      "page": 9,
      "blocks": [
        {
          "type": "text",
          "text": "15- 综合案例一 - 个人简介  \n网页制作思路：从上到下，先整体再局部，逐步分析制作\n分析内容  →  写代码  →  保存  →  刷新浏览器，看效果\n<!-- 在浏览器中，想要自动播放，必须有  muted 属性  -->\n<video src=\"./media/vue.mp4\" controls loop muted autoplay></video>"
        }
      ]
    },
    {
      "title": "第10页",
      "level": 1,
      "page": 10,
      "blocks": [
        {
          "type": "text",
          "text": "16- 综合案例二 -Vue 简介  \n<h1>尤雨溪</h1>\n<hr>\n<p>尤雨溪，前端框架<a href=\"../17- 综合案例二 /vue 简介 .html\">Vue.js</a>的作者，<a href=\"#\">HTML5</a>版 Clear 的\n打造人，独立开源开发者。曾就职于 Google Creative Labs 和 Meteor Development Group 。由于工作中大量接触开源的项\n目<a href=\"#\">JavaScript</a>，最后自己也走上了开源之路，现全职开发和维护<a href=\"#\">Vue.js</a>。\n \n</p>\n<img src=\"./photo.jpg\" alt=\" 尤雨溪的照片 \" title=\" 尤雨溪 \">\n<h2>学习经历</h2>\n<p>尤雨溪毕业于上海复旦附中，在美国完成大学学业，本科毕业于 Colgate University ，后在 Parsons 设计学院获得\nDesign & Technology 艺术硕士学位，任职于纽约 Google Creative Lab 。</p>\n<h2>主要成就</h2>\n<p>尤雨溪<strong>大学专业并非是计算机专业</strong>，在大学期间他学习专业是室内艺术和艺术史，后来读了美术设\n计和技术的硕士，  <ins>正是在读硕士期间，他偶然接触到了 JavaScript ，从此被这门编程语言深深吸引，开启了自己的前\n端生涯</ins> 。</p>\n<p>2014 年 2 月，开发了一个前端开发库 Vue.js 。 Vue.js 是构建  Web 界面的  JavaScript 框架，是一个通过简洁的 API 提供高\n效的数据绑定和灵活的组件系统。</p>\n<h2>社会任职</h2>\n<p>2016 年 9 月 3 日，在南京的 JSConf 上， Vue 作者尤雨溪正式宣布加盟阿里巴巴 Weex 团队，尤雨溪称他将以技术顾问的身\n份加入 Weex 团队来做  Vue 和  Weex 的  JavaScript runtime 整合，目标是让大家能用  Vue 的语法跨三端。</p>"
        }
      ]
    },
    {
      "title": "第11页",
      "level": 1,
      "page": 11,
      "blocks": [
        {
          "type": "text",
          "text": "<h1>Vue.js</h1>\n<p>Vue ( 读音  /vju ː / ，类似于  view) 是一套用于构建用户界面的渐进式 JavaScript 框架。  [5] 与其它大型框架不同的是， Vue \n被设计为可以自底向上逐层应用。 Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。另一\n方面，当与现代化的工具链以及各种支持类库结合使用时， Vue 也完全能够为复杂的单页应用（ SPA ）提供驱动。</p>\n<p>其作者为<a href=\"../16- 综合案例一 / 个人简介 .html\" target=\"_blank\">尤雨溪</a></p>\n<h2>主要功能</h2>\n<p>Vue.js 是一套构建用户界面的渐进式框架。与其他重量级框架不同的是， Vue 采用自底向上增量开发的设计。 Vue 的核\n心库只关注视图层，并且非常容易学习，非常容易与其它库或已有项目整合。另一方面， Vue 完全有能力驱动采用单文件\n组件和 Vue 生态系统支持的库开发的复杂单页应用。</p>\n<p>Vue.js 的目标是通过尽可能简单的  API 实现响应的数据绑定和组合的视图组件。</p>\n<p>Vue.js 自身不是一个全能框架 —— 它只聚焦于视图层。因此它非常容易学习，非常容易与其它库或已有项目整合。另一\n方面，在与相关工具和支持库一起使用时  [2] ， Vue.js 也能驱动复杂的单页应用。</p>\n<video src=\"../media/vue.mp4\" controls></video>"
        }
      ]
    }
  ]
};
