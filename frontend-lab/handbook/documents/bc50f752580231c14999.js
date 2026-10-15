window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["bc50f752580231c14999"] = {
  "id": "bc50f752580231c14999",
  "title": "day07--学成在线.pdf",
  "treatment": "课件页级文本（配图回溯原件）",
  "sections": [
    {
      "title": "第1页",
      "level": 1,
      "page": 1,
      "blocks": [
        {
          "type": "text",
          "text": "day07- 学成在线  \n01- 项目目录  \n网站根目录是指存放网站的第一层文件夹，内部包含当前网站的所有素材，包含  HTML 、 CSS 、图片、 JavaScript 等\n等。 \n首页引入 CSS 文件\n \n02- 版心居中  \n<!-- 顺序要求：先清除再设置  -->\n<link rel=\"stylesheet\" href=\"./css/base.css\">\n<link rel=\"stylesheet\" href=\"./css/index.css\">"
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
          "text": "03- 布局思路  \n1. 布局思路：先整体再局部，从外到内，从上到下，从左到右\n2. CSS 实现思路\n1. 画盒子，调整盒子范围  →  宽高背景色\n2. 调整盒子位置  →  ex 布局、内外边距\n3. 控制图片、文字内容样式\n04-header 区域 - 整体布局  \nHTML 结构  \n \nCSS 样式  \n.wrapper {\n  margin: 0 auto;\n  width: 1200px;\n}\n \nbody {\n  background-color: #f3f5f7;\n}\n<!-- 头部区域  -->\n<div class=\"header\">\n  <div class=\"wrapper\">\n    <!-- logo -->\n    <div class=\"logo\">logo</div>\n    <!-- 导航  -->\n    <div class=\"nav\">导航</div>\n    <!-- 搜索  -->\n    <div class=\"search\">search</div>\n    <!-- 用户  -->\n    <div class=\"user\">用户</div>\n  </div>\n</div>"
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
          "text": "05-header 区域 -logo  \nlogo 功能：\n单击跳转到首页\n搜索引擎优化：提升网站百度搜索排名\n实现方法：\n标签结构： h1 > a > 网站名称（搜索关键字）\n \nCSS 样式\n \n06-header 区域 - 导航  \n/* 头部区域  */\n.header {\n  height: 100px;\n  background-color: #f;\n}\n \n.header .wrapper {\n  padding-top: 29px;\n  display: ex;\n}\n<div class=\"logo\">\n  <h1><a href=\"#\">学成在线</a></h1>\n</div>\n/* logo */\n.logo a {\n  display: block;\n  width: 195px;\n  height: 41px;\n  background-image: url(../images/logo.png);\n  font-size: 0;\n}"
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
          "text": "实现方法：\n标签结构： ul > li * 3 > a\n优势：避免堆砌  a 标签，网站搜索排名降级\nHTML 结构  \n \nCSS 样式  \n \n<ul>\n  <li><a href=\"#\" class=\"active\">首页</a></li>\n  <li><a href=\"#\">课程</a></li>\n  <li><a href=\"#\">职业规划</a></li>\n</ul>\n/* 导航  */\n.nav {\n  margin-left: 102px;\n}\n \n.nav ul {\n  display: ex;\n}\n \n.nav li {\n  margin-right: 24px;\n}\n \n.nav li a {\n  display: block;\n  padding: 6px 8px;\n  line-height: 27px;\n  font-size: 19px;\n}\n \n \n/* actvie 类选择器，表示默认选中的 a */\n.nav li .active,\n.nav li a:hover {\n  border-bottom: 2px solid #00a4;"
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
          "text": "07-header 区域 - 搜索布局  \nHTML 结构  \n \nCSS 样式  \n \n08-header 区域 - 搜索内容  \nHTML 结构  \n \nCSS 样式  \n \n}\n<div class=\"search\"></div>\n.search {\n  display: ex;\n  margin-left: 64px;\n  padding-left: 19px;\n  padding-right: 12px;\n  width: 412px;\n  height: 40px;\n  background-color: #f3f5f7;\n  border-radius: 20px;\n}\n<div class=\"search\">\n  <input type=\"text\" placeholder=\" 请输入关键词 \">\n  <a href=\"#\"></a>\n</div>\n.search input {\n   ex: 1;\n   border: 0;\n   background-color: transparent;\n   /* 去掉表单控件的焦点框  */\n   outline: none;\n}\n \n/* ::placeholder 选中就是  placeholder 属性文字样式 */"
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
          "text": "09-header 区域 - 用户区域  \nHTML 结构  \n \nCSS 样式  \n \n.search input::placeholder {\n  font-size: 14px;\n  color: #999;\n}\n \n/* 父级是 ex 布局，子级变弹性盒子：加宽高生效  */\n.search a {\n  align-self: center;\n  width: 16px;\n  height: 16px;\n  background-image: url(../images/search.png);\n}\n<div class=\"user\">\n  <a href=\"#\">\n    <img src=\"./uploads/user.png\" alt=\"\">\n    <span>播仔学前端</span>\n  </a>\n</div>\n/* 用户  */\n.user {\n  margin-left: 32px;\n  margin-top: 4px;\n}\n \n.user img {\n  margin-right: 7px;\n  /* vertical-align 行内块和行内垂直方向对齐方式  */\n  vertical-align: middle;\n}\n \n.user span {\n  font-size: 16px;\n  color: #666;\n}"
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
          "text": "10-banner 区域 - 布局  \nHTML 结构  \n \nCSS 样式  \n \n11-banner 区域 - 侧导航  \nHTML 结构  \n<div class=\"banner\">\n  <div class=\"wrapper\">\n    <div class=\"left\">left</div>\n    <div class=\"right\">right</div>\n  </div>\n</div>\n/* banner 区域  */\n.banner {\n  height: 420px;\n  background-color: #0092cb;\n}\n \n.banner .wrapper {\n  display: ex;\n  justify-content: space-between;\n  height: 420px;\n  background-image: url(../uploads/banner.png);\n}"
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
          "text": "CSS 样式  \n \n12-banner 区域 - 课程表布局  \n<div class=\"left\">\n  <ul>\n    <li><a href=\"#\">前端开发</a></li>\n    <li><a href=\"#\">后端开发</a></li>\n    <li><a href=\"#\">移动开发</a></li>\n    <li><a href=\"#\">人工智能</a></li>\n    <li><a href=\"#\">商业预测</a></li>\n    <li><a href=\"#\">云计算&大数据</a></li>\n    <li><a href=\"#\">运维&测试</a></li>\n    <li><a href=\"#\">UI 设计</a></li>\n    <li><a href=\"#\">产品</a></li>\n  </ul>\n</div>\n/* 侧导航  */\n.banner .left {\n  padding: 3px 20px;\n  width: 191px;\n  height: 420px;\n  background-color: rgba(0,0,0,0.42);\n}\n \n.banner .left a {\n  /* 块级：宽度是父级的 100% */\n  display: block;\n  height: 46px;\n  background: url(../images/right.png) no-repeat right center;\n  line-height: 46px;\n  font-size: 16px;\n  color: #f;\n}\n \n.banner .left a:hover {\n  background-image: url(../images/right-hover.png);\n  color: #00a4;\n}"
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
          "text": "HTML 布局  \n \nCSS 样式  \n \n<div class=\"right\">\n  <h3>我的课程表</h3>\n  <div class=\"content\">1</div>\n</div>\n/* 课程表  */\n.banner .right {\n  margin-top: 60px;"
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
          "text": "13-banner 区域 - 课程表内容  \nHTML 结构  \n \nCSS 样式  \n \n  width: 218px;\n  height: 305px;\n  background-color: #209dd5;\n  border-radius: 10px;\n}\n \n.banner .right h3 {\n  margin-left: 14px;\n  height: 48px;\n  line-height: 48px;\n  font-size: 15px;\n  color: #f;\n  font-weight: 400;\n}\n \n.banner .right .content {\n  padding: 14px;\n  height: 257px;\n  background-color: #f;\n  border-radius: 10px;\n}\n<dl>\n  <dt>数据可视化课程</dt>\n  <dd><span>正在学习</span>-<strong>echarts 使用步骤</strong></dd>\n</dl>\n<dl>\n  <dt>Vue3 医疗项目课程   </dt>\n  <dd><span>正在学习</span>-<strong>认识组合式 API</strong></dd>\n</dl>\n<dl>\n  <dt>React 核心技术课程</dt>\n  <dd><span>正在学习</span>-<strong>rudex 配合 TS 使用</strong></dd>\n</dl>\n.banner .right dl {\n  margin-bottom: 12px;\n  border-bottom: 1px solid #e0e0e0;\n}\n \n.banner .right dt {\n  margin-bottom: 8px;\n  font-size: 14px;\n  line-height: 20px;"
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
          "text": "14-banner 区域 - 全部课程  \nHTML 结构  \n \nCSS 样式  \n \n15- 精品推荐 - 区域布局  \nHTML 结构  \n  font-weight: 700;\n}\n \n.banner .right dd {\n  margin-bottom: 8px;\n  font-size: 12px;\n  line-height: 16px;\n}\n \n.banner .right dd span {\n  color: #00a4;\n}\n \n.banner .right dd strong {\n  color: #7d7d7d;\n  font-weight: 400;\n}\n<a href=\"#\">全部课程</a>\n.banner .right a {\n  display: block;\n  height: 32px;\n  background-color: #00a4;\n  text-align: center;\n  line-height: 32px;\n  font-size: 14px;\n  color: #f;\n  border-radius: 15px;\n}"
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
          "text": "CSS 样式  \n \n16- 精品推荐 - 内容样式  \nHTML 结构  \n \nCSS 样式  \n \n<!-- 精品推荐  -->\n<div class=\"recommend wrapper\">\n  <h3>精品推荐</h3>\n  <ul>\n    <li><a href=\"#\">HTML</a></li>\n  </ul>\n  <a href=\"#\" class=\"modify\">修改兴趣</a>\n</div\n/* 精品推荐  */\n.recommend {\n  display: ex;\n  margin-top: 11px;\n  padding: 0 20px;\n  height: 60px;\n  background-color: #f;\n  box-shadow: 0px 1px 2px 0px rgba(211, 211, 211, 0.5);\n  line-height: 60px;\n}\n<ul>\n  <li><a href=\"#\">HTML</a></li>\n  <li><a href=\"#\">CSS</a></li>\n  <li><a href=\"#\">JavaScript</a></li>\n  <li><a href=\"#\">Node.js</a></li>\n  <li><a href=\"#\">Ajax</a></li>\n  <li><a href=\"#\">Vue2.0</a></li>\n  <li><a href=\"#\">Vue3.0</a></li>\n  <li><a href=\"#\">TypeScript</a></li>\n  <li><a href=\"#\">React</a></li>\n</ul>\n.recommend h3 {\n  font-size: 18px;\n  color: #00a4;\n  font-weight: 400;\n}\n \n.recommend ul {\n  /* 除去标题和修改兴趣的尺寸，父级剩余尺寸都给 ul ，实现把修改兴趣挤到最右侧  */"
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
          "text": "17- 推荐课程 - 标题区域  \nHTML 结构  \n  ex: 1;\n  display: ex;\n}\n \n.recommend ul li a {\n  padding: 0 24px;\n  border-right: 1px solid #e0e0e0;\n  font-size: 18px;\n}\n \n.recommend ul li:last-child a {\n  border-right: 0;\n}\n \n.recommend .modify {\n  font-size: 16px;\n  color: #00a4;\n}"
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
          "text": "CSS 样式  \n \n18- 推荐课程 - 内容布局  \nHTML 结构  \n<!-- 精品推荐课程  -->\n<div class=\"course wrapper\">\n  <!-- 标题  -->\n  <div class=\"hd\">\n    <h3>精品推荐</h3>\n    <a href=\"#\" class=\"more\">查看全部</a>\n  </div>\n  <!-- 内容  -->\n  <div class=\"bd\">1</div>\n</div>\n/* 推荐课程  */\n.course {\n  margin-top: 15px;\n}\n \n/* 标题  - 公共类，与其他区域共用  */\n.hd {\n  display: ex;\n  justify-content: space-between;\n  height: 60px;\n  line-height: 60px;\n}\n \n.hd h3 {\n  font-size: 21px;\n  font-weight: 400;\n}\n \n.hd .more {\n  padding-right: 20px;\n  background: url(../images/more.png) no-repeat right center;\n  font-size: 14px;\n  color: #999;\n}"
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
          "text": "CSS 样式  \n \n19- 推荐课程 - 内容样式  \nHTML 结构  \n \n<ul>\n  <li>1</li>\n  <li>2</li>\n  <li>3</li>\n  <li>4</li>\n  <li>5</li>\n  <li>6</li>\n  <li>7</li>\n  <li>8</li>\n</ul>\n/* 课程内容  - 公共类  */\n.bd ul {\n  display: ex;\n  ex-wrap: wrap;\n  justify-content: space-between;\n}\n \n.bd li {\n  margin-bottom: 14px;\n  width: 228px;\n  height: 271px;\n  background-color: pink;\n}\n<ul>\n  <li>\n    <a href=\"#\">\n      <div class=\"pic\"><img src=\"./uploads/course01.png\" alt=\"\"></div>\n      <div class=\"text\">\n        <h4>JavaScript 数据看板项目实战</h4>\n        <p><span>高级</span> · <i>1125</i>人在学习</p>\n      </div>\n    </a>\n  </li>\n  <li>\n    <a href=\"#\">\n      <div class=\"pic\"><img src=\"./uploads/course02.png\" alt=\"\"></div>\n      <div class=\"text\">\n        <h4>Vue.js 实战 —— 面经全端项目</h4>\n        <p><span>高级</span> · <i>2726</i>人在学习</p>\n      </div>\n    </a>\n  </li>"
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
          "text": "<li>\n    <a href=\"#\">\n      <div class=\"pic\"><img src=\"./uploads/course03.png\" alt=\"\"></div>\n      <div class=\"text\">\n        <h4>玩转 Vue 全家桶， iHRM 人力资源项目</h4>\n        <p><span>高级</span> · <i>9456</i>人在学习</p>\n      </div>\n    </a>\n  </li>\n  <li>\n    <a href=\"#\">\n      <div class=\"pic\"><img src=\"./uploads/course04.png\" alt=\"\"></div>\n      <div class=\"text\">\n        <h4>Vue.js 实战医疗项目 —— 优医问诊</h4>\n        <p><span>高级</span> · <i>7192</i>人在学习</p>\n      </div>\n    </a>\n  </li>\n  <li>\n    <a href=\"#\">\n      <div class=\"pic\"><img src=\"./uploads/course05.png\" alt=\"\"></div>\n      <div class=\"text\">\n        <h4>小程序实战：小兔鲜电商小程序项目</h4>\n        <p><span>高级</span> · <i>2703</i>人在学习</p>\n      </div>\n    </a>\n  </li>\n  <li>\n    <a href=\"#\">\n      <div class=\"pic\"><img src=\"./uploads/course06.png\" alt=\"\"></div>\n      <div class=\"text\">\n        <h4>前端框架 Flutter 开发实战</h4>\n        <p><span>高级</span> · <i>2841</i>人在学习</p>\n      </div>\n    </a>\n  </li>\n  <li>\n    <a href=\"#\">\n      <div class=\"pic\"><img src=\"./uploads/course07.png\" alt=\"\"></div>\n      <div class=\"text\">\n        <h4>熟练使用 React.js—— 极客园 H5 项目</h4>\n        <p><span>高级</span> · <i>95682</i>人在学习</p>\n      </div>\n    </a>\n  </li>\n  <li>\n    <a href=\"#\">\n      <div class=\"pic\"><img src=\"./uploads/course08.png\" alt=\"\"></div>\n      <div class=\"text\">\n        <h4>熟练使用 React.js—— 极客园 PC 端项目</h4>\n        <p><span>高级</span> · <i>904</i>人在学习</p>\n      </div>\n    </a>"
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
          "text": "CSS 样式  \n \n  </li>\n  <li>\n    <a href=\"#\">\n      <div class=\"pic\"><img src=\"./uploads/course09.png\" alt=\"\"></div>\n      <div class=\"text\">\n        <h4>前端实用技术， Fetch API 实战</h4>\n        <p><span>高级</span> · <i>1516</i>人在学习</p>\n      </div>\n    </a>\n  </li>\n  <li>\n    <a href=\"#\">\n      <div class=\"pic\"><img src=\"./uploads/course10.png\" alt=\"\"></div>\n      <div class=\"text\">\n        <h4>前端高级 Node.js 零基础入门教程</h4>\n        <p><span>高级</span> · <i>2766</i>人在学习</p>\n      </div>\n    </a>\n  </li>\n</ul>\n.bd li .pic {\n  height: 156px;\n}\n \n.bd li .text {\n  padding: 20px;\n  height: 115px;\n  background-color: #f;\n}\n \n.bd li .text h4 {\n  margin-bottom: 13px;\n  height: 40px;\n  font-size: 14px;\n  line-height: 20px;\n  font-weight: 400;\n}\n \n.bd li .text p {\n  font-size: 14px;\n  line-height: 20px;\n  color: #999;\n}\n \n.bd li .text p span {\n  color: #fa6400;\n}\n \n.bd li .text p i {"
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
          "text": "20- 前端开发工程师区域  \nHTML 结构  \n \n  font-style: normal;\n}\n<!-- 前端  -->\n<div class=\"wrapper\">\n  <!-- 标题  -->\n  <div class=\"hd\">\n    <h3>前端开发工程师</h3>\n    <ul>\n      <li><a href=\"#\" class=\"active\">热门</a></li>\n      <li><a href=\"#\">初级</a></li>\n      <li><a href=\"#\">中级</a></li>\n      <li><a href=\"#\">高级</a></li>\n    </ul>\n    <a href=\"#\" class=\"more\">查看全部</a>\n  </div>\n  <div class=\"bd\">\n    <div class=\"left\">\n      <img src=\"./uploads/web_left.png\" alt=\"\">\n    </div>\n    <div class=\"right\">\n      <div class=\"top\"><img src=\"./uploads/web_top.png\" alt=\"\"></div>\n      <div class=\"bottom\">\n        <ul>\n          <li>\n            <a href=\"#\">\n              <div class=\"pic\"><img src=\"./uploads/web01.png\" alt=\"\"></div>\n              <div class=\"text\">\n                <h4>JS 高级 javaScript 进阶面向对象 ES6</h4>\n                <p><span>高级</span> · <i>101937</i>人在学习</p>\n              </div>\n            </a>\n          </li>"
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
          "text": "CSS 样式  \n \n          <li>\n            <a href=\"#\">\n              <div class=\"pic\"><img src=\"./uploads/web02.png\" alt=\"\"></div>\n              <div class=\"text\">\n                <h4>零基础玩转微信小程序</h4>\n                <p><span>高级</span> · <i>133781</i>人在学习</p>\n              </div>\n            </a>\n          </li>\n          <li>\n            <a href=\"#\">\n              <div class=\"pic\"><img src=\"./uploads/web03.png\" alt=\"\"></div>\n              <div class=\"text\">\n                <h4>JavaScript 基础 —— 语法解析 + 项目实战</h4>\n                <p><span>高级</span> · <i>8927</i>人在学习</p>\n              </div>\n            </a>\n          </li>\n          <li>\n            <a href=\"#\">\n              <div class=\"pic\"><img src=\"./uploads/web04.png\" alt=\"\"></div>\n              <div class=\"text\">\n                <h4>前端框架 Vue2+Vue3 全套视频</h4>\n                <p><span>高级</span> · <i>26022</i>人在学习</p>\n              </div>\n            </a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</div>\n/* 前端  */\n.hd ul {\n  display: ex;\n}\n \n.hd li {\n  margin-right: 60px;\n  font-size: 16px;\n}\n \n.hd li .active {\n  color: #00a4;\n}\n \n.bd {\n  display: ex;\n  justify-content: space-between;"
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
          "text": "21- 版权 - 布局  \nHTML 结构  \n \nCSS 样式  \n \n}\n \n.bd .left {\n  width: 228px;\n  /* background-color: pink; */\n}\n \n.bd .right {\n  width: 957px;\n  /* background-color: pink; */\n}\n \n.bd .right .top {\n  margin-bottom: 15px;\n  height: 100px;\n}\n<!-- 版权  -->\n<div class=\"footer\">\n  <div class=\"wrapper\">\n    <div class=\"left\">left</div>\n    <div class=\"right\">right</div>\n  </div>\n</div>\n/* 版权  */\n.footer {\n  margin-top: 60px;\n  padding-top: 60px;\n  height: 273px;\n  background-color: #f;\n}\n \n.footer .wrapper {\n  display: ex;\n  justify-content: space-between;"
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
          "text": "22- 版权 - 内容  \nHTML 结构  \n \nCSS 样式  \n \n}\n \n.footer .left {\n  width: 440px;\n  background-color: pink;\n}\n<div class=\"left\">\n  <a href=\"#\"><img src=\"./images/logo.png\" alt=\"\"></a>\n  <p>学成在线致力于普及中国最好的教育它与中国一流大学和机构合作提供在线课程。\n    © 2017 年 XTCG Inc. 保留所有权利。 - 沪 ICP 备 15025210 号</p>\n  <a href=\"#\" class=\"download\">下载 APP</a>\n</div>\n<div class=\"right\">\n  <dl>\n    <dt>关于学成网</dt>\n    <dd><a href=\"#\">关于</a></dd>\n    <dd><a href=\"#\">管理团队</a></dd>\n    <dd><a href=\"#\">工作机会</a></dd>\n    <dd><a href=\"#\">客户服务</a></dd>\n    <dd><a href=\"#\">帮助</a></dd>\n  </dl>\n  <dl>\n    <dt>新手指南</dt>\n    <dd><a href=\"#\">如何注册</a></dd>\n    <dd><a href=\"#\">如何选课</a></dd>\n    <dd><a href=\"#\">如何拿到毕业证</a></dd>\n    <dd><a href=\"#\">学分是什么</a></dd>\n    <dd><a href=\"#\">考试未通过怎么办</a></dd>\n  </dl>\n  <dl>\n    <dt>合作伙伴</dt>\n    <dd><a href=\"#\">合作机构</a></dd>\n    <dd><a href=\"#\">合作导师</a></dd>\n  </dl>\n</div>\n.footer .left p {\n  margin-top: 24px;\n  margin-bottom: 14px;\n  font-size: 12px;\n  line-height: 17px;\n  color: #666;\n}"
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
          "text": ".footer .left .download {\n  display: block;\n  width: 120px;\n  height: 36px;\n  border: 1px solid #00a4;\n  text-align: center;\n  line-height: 34px;\n  font-size: 16px;\n  color: #00a4;\n}\n \n.footer .right {\n  display: ex;\n}\n \n.footer .right dl {\n  margin-left: 130px;\n}\n \n.footer .right dt {\n  margin-bottom: 12px;\n  font-size: 16px;\n  line-height: 23px;\n}\n \n.footer .right a {\n  font-size: 14px;\n  color: #666;\n  line-height: 24px;\n}"
        }
      ]
    }
  ]
};
