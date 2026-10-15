window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["c683623e48938b384bf5"] = {
  "id": "c683623e48938b384bf5",
  "title": "HTML+CSS day07.pdf",
  "treatment": "课件页级文本（配图回溯原件）",
  "sections": [
    {
      "title": "第1页",
      "level": 1,
      "page": 1,
      "blocks": [
        {
          "type": "text",
          "text": "CSS 第五天\n网页制作 – 学成在线"
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
          "text": "准备工作\n• 项目目录\n• 默认样式代码\n1"
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
          "text": "网站根目录是指存放网站的第一层文件夹，内部包含当前网站的所有素材，包含 HTML、CSS、图片、JavaScript等等。\nl study\nu images 文件夹：存放固定使用的图片素材，例如：logo、样式修饰图等等\nu uploads 文件夹：存放非固定使用的图片素材，例如：商品图、宣传图需要上传的图片\nu css 文件夹：存放 CSS 文件（link 标签引入）\nØ base.css：基础公共样式，例如：清除默认样式、设置网页基本样式\nØ index.css：首页 CSS 样式\nu index.html：首页 HTML 文件\n项目目录"
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
          "text": "总结总结\n1. 项目目录中，images 文件夹存放什么？\n固定使用的图片素材\n2. 项目目录中，uploads 文件夹存放什么？\n非固定使用的图片素材（需要上传的）\n3. HTML 中用什么标签引入单独的 CSS 文件？\nlink 标签"
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
          "text": "l 清除默认样式，例如内边距、外边距、项目符号等等\nl 设置通用样式，例如：文字样式\n基础公共样式\n/* 去除常见标签默认的 margin 和 padding */\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n/* 去除列表默认样式 */\nli {\n  list-style: none;\n}\n/* 设置网页统一的字体大小、行高、字体系列相关属性 */\nbody {\n  font: 14px/1.5  \"Microsoft Yahei\",\n    \"Hiragino Sans GB\", \"Heiti SC\", \"WenQuanYi Micro Hei\", \nsans-serif;\n  color: #333;\n}\n/* 去除a标签默认下划线，并设置默认文字颜色 */\na {\n  text-decoration: none;\n  color: #333;\n}"
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
          "text": "版心效果\n.wrapper {\n  margin: 0 auto;\n  width: 1200px;\n}"
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
          "text": "网页制作思路2"
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
          "text": "1. 布局思路：先整体再局部，从外到内，从上到下，从左到右\n2. CSS 实现思路\n1. 画盒子，调整盒子范围 → 宽高背景色\n2. 调整盒子位置 → flex 布局、内外边距\n3. 控制图片、文字内容样式\n网页制作思路"
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
          "text": "制作网页 – header 区域3"
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
          "text": "header 区域-布局\n通栏：宽度与浏览器窗口相同的盒子\n标签结构：通栏 > 版心 > logo + 导航 + 搜索 + 用户\ndisplay: flex;"
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
          "text": "logo 制作技巧\nlogo 功能：\n• 单击跳转到首页\n• 搜索引擎优化：提升网站百度搜索排名\n实现方法：\n• 标签结构：h1 > a > 网站名称（搜索关键字）\n• CSS 样式：\n.logo a {\n  display: block;\n  width: 195px;\n  height: 41px;\n  background-image: url(../images/logo.png);\n  /* 隐藏文字 */\n  font-size: 0;\n}"
        }
      ]
    },
    {
      "title": "第12页",
      "level": 1,
      "page": 12,
      "blocks": [
        {
          "type": "text",
          "text": "导航制作技巧（nav）\n导航功能\n• 单击跳转页面\n实现方法：\n• 标签结构：ul > li * 3 > a\n• 优势：避免堆砌 a 标签，网站搜索排名降级\n• 布局思路\n      li 设置  右侧 margin\n      a 设置  左右 padding\npadding margin"
        }
      ]
    },
    {
      "title": "第13页",
      "level": 1,
      "page": 13,
      "blocks": [
        {
          "type": "text",
          "text": "搜索区域（search）\n实现方法：\n• 标签结构：.search > input + a / button\n• 布局思路\n      div.search 标签 flex 布局，侧轴居中（垂直居中）\n      input 标签 flex: 1\ndisplay: flex;"
        }
      ]
    },
    {
      "title": "第14页",
      "level": 1,
      "page": 14,
      "blocks": [
        {
          "type": "text",
          "text": "用户区域（user）\n实现方法：\n• 标签结构：.user > a > img + span\n• 布局技巧：图片、文字垂直方向居中\nimg {\n  vertical-align: middle;\n}"
        }
      ]
    },
    {
      "title": "第15页",
      "level": 1,
      "page": 15,
      "blocks": [
        {
          "type": "text",
          "text": "网页制作 – banner 区域3"
        }
      ]
    },
    {
      "title": "第16页",
      "level": 1,
      "page": 16,
      "blocks": [
        {
          "type": "text",
          "text": "banner 区域 – 布局\n结构：通栏banner > 版心 > .left + .right\ndisplay: flex;"
        }
      ]
    },
    {
      "title": "第17页",
      "level": 1,
      "page": 17,
      "blocks": [
        {
          "type": "text",
          "text": "左侧侧导航（left）\n实现方法：\n• 标签结构：.left > ul > li *9 > a\n• 布局思路\n      a 默认状态：背景图为白色右箭头\n      a 鼠标悬停状态：背景图蓝色右箭头\na {\n  background: url(../images/right.png) no-repeat right center;\n}\na:hover {\n  background-image: url(../images/right-hover.png);\n}"
        }
      ]
    },
    {
      "title": "第18页",
      "level": 1,
      "page": 18,
      "blocks": [
        {
          "type": "text",
          "text": "右侧课程表（right）\n实现方法：\n• 标签结构：.right > h3 + .content"
        }
      ]
    },
    {
      "title": "第19页",
      "level": 1,
      "page": 19,
      "blocks": [
        {
          "type": "text",
          "text": "精品推荐（recommend）\n实现方法：\n• 标签结构：.recommend > h3 + ul + a.modify\n• 布局思路：flex 布局"
        }
      ]
    },
    {
      "title": "第20页",
      "level": 1,
      "page": 20,
      "blocks": [
        {
          "type": "text",
          "text": "精品课程（course）\n实现方法：\n• 标签结构：.hd + .bd\n• 布局思路\n      盒子模型"
        }
      ]
    },
    {
      "title": "第21页",
      "level": 1,
      "page": 21,
      "blocks": [
        {
          "type": "text",
          "text": "精品课程-标题区域（hd）\n思路：“标题”与“查看全部” 各个区域样式复用\n• 标签结构：.hd > h3 + a.more\n• CSS 样式：a.more 设置箭头背景图\n.hd .more {\n  padding-right: 20px;\n  background: url(../images/more.png) no-repeat right center;\n}"
        }
      ]
    },
    {
      "title": "第22页",
      "level": 1,
      "page": 22,
      "blocks": [
        {
          "type": "text",
          "text": "精品课程-内容区域\n思路：“课程卡片”各个区域样式复用\n标签结构：.bd > ul > li > a\nCSS 样式：flex 布局\n.bd ul {\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n}"
        }
      ]
    },
    {
      "title": "第23页",
      "level": 1,
      "page": 23,
      "blocks": [
        {
          "type": "text",
          "text": "学科课程\n标签结构：.hd（复用样式） + .bd"
        }
      ]
    },
    {
      "title": "第24页",
      "level": 1,
      "page": 24,
      "blocks": [
        {
          "type": "text",
          "text": "学科课程 – 标题\n标签结构：h3 + ul + a.more\ntab 栏 / 选项卡：菜单个数与内容个数相同"
        }
      ]
    },
    {
      "title": "第25页",
      "level": 1,
      "page": 25,
      "blocks": [
        {
          "type": "text",
          "text": "学科课程-内容\n标签结构：.left + .right > .top + .bottom"
        }
      ]
    },
    {
      "title": "第26页",
      "level": 1,
      "page": 26,
      "blocks": [
        {
          "type": "text",
          "text": "版权区域（footer）\n标签结构：通栏 > 版心 > .left + .right > dl"
        }
      ]
    },
    {
      "title": "第27页",
      "level": 1,
      "page": 27,
      "blocks": [
        {
          "type": "text",
          "text": "今日\n作业\n1. 按照“前端学科课程”布局方式实现“其他学科课程”\n区域的布局效果"
        }
      ]
    }
  ]
};
