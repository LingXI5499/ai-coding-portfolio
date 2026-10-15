window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["8921152f7fc33cb78bdc"] = {
  "id": "8921152f7fc33cb78bdc",
  "title": "day07--学成在线.md",
  "treatment": "章节知识与练习",
  "sections": [
    {
      "title": "01-项目目录",
      "trail": [
        "day07-学成在线",
        "01-项目目录"
      ],
      "level": 2,
      "line": 5,
      "blocks": [
        {
          "type": "text",
          "text": "网站根目录是指存放网站的**第一层**文件夹，内部包含当前网站的**所有素材**，包含 HTML、CSS、图片、JavaScript等等。 \n\n\n\n[课程配图见原资料]\n\n\n\n* 首页引入CSS文件"
        },
        {
          "type": "code",
          "language": "html",
          "text": "<!-- 顺序要求：先清除再设置 -->\n\n<link rel=\"stylesheet\" href=\"./css/base.css\" />\n\n<link rel=\"stylesheet\" href=\"./css/index.css\" />"
        }
      ]
    },
    {
      "title": "02-版心居中",
      "trail": [
        "day07-学成在线",
        "02-版心居中"
      ],
      "level": 2,
      "line": 33,
      "blocks": [
        {
          "type": "text",
          "text": "[课程配图见原资料]"
        },
        {
          "type": "code",
          "language": "css",
          "text": "\n.wrapper {\n\n  margin: 0 auto;\n\n  width: 1200px;\n\n}\n\n\n\nbody {\n\n  background-color: #f3f5f7;\n\n}\n",
          "note": "原资料中含排错代码或不完整片段，保留错误供分析；不会自动执行。"
        }
      ]
    },
    {
      "title": "03-布局思路",
      "trail": [
        "day07-学成在线",
        "03-布局思路"
      ],
      "level": 2,
      "line": 63,
      "blocks": [
        {
          "type": "text",
          "text": "1. 布局思路：先整体再局部，从外到内，从上到下，从左到右\n\n2. CSS 实现思路\n\n   1. 画盒子，调整盒子范围 → 宽高背景色\n\n   2. 调整盒子位置 → flex 布局、内外边距\n\n   3. 控制图片、文字内容样式"
        }
      ]
    },
    {
      "title": "04-header区域-整体布局",
      "trail": [
        "day07-学成在线",
        "04-header区域-整体布局"
      ],
      "level": 2,
      "line": 79,
      "blocks": [
        {
          "type": "text",
          "text": "[课程配图见原资料]"
        }
      ]
    },
    {
      "title": "HTML结构",
      "trail": [
        "day07-学成在线",
        "04-header区域-整体布局",
        "HTML结构"
      ],
      "level": 3,
      "line": 87,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!-- 头部区域 -->\n\n<div class=\"header\">\n  <div class=\"wrapper\">\n    <!-- logo -->\n\n    <div class=\"logo\">logo</div>\n\n    <!-- 导航 -->\n\n    <div class=\"nav\">导航</div>\n\n    <!-- 搜索 -->\n\n    <div class=\"search\">search</div>\n\n    <!-- 用户 -->\n\n    <div class=\"user\">用户</div>\n  </div>\n</div>"
        }
      ]
    },
    {
      "title": "CSS样式",
      "trail": [
        "day07-学成在线",
        "04-header区域-整体布局",
        "CSS样式"
      ],
      "level": 3,
      "line": 123,
      "blocks": [
        {
          "type": "code",
          "language": "css",
          "text": "/* 头部区域 */\n\n.header {\n  height: 100px;\n\n  background-color: #fff;\n}\n\n.header .wrapper {\n  padding-top: 29px;\n\n  display: flex;\n}"
        }
      ]
    },
    {
      "title": "05-header区域-logo",
      "trail": [
        "day07-学成在线",
        "05-header区域-logo"
      ],
      "level": 2,
      "line": 153,
      "blocks": [
        {
          "type": "text",
          "text": "[课程配图见原资料]\n\n\n\nlogo 功能：\n\n\n\n* 单击跳转到首页\n\n* 搜索引擎优化：提升网站百度搜索排名\n\n\n\n实现方法：\n\n\n\n* 标签结构：h1 > a > 网站名称（搜索关键字）"
        },
        {
          "type": "code",
          "language": "html",
          "text": "<div class=\"logo\">\n  <h1><a href=\"#\">学成在线</a></h1>\n</div>"
        },
        {
          "type": "text",
          "text": "* CSS 样式"
        },
        {
          "type": "code",
          "language": "css",
          "text": "/* logo */\n\n.logo a {\n  display: block;\n\n  width: 195px;\n\n  height: 41px;\n\n  background-image: url(../images/logo.png);\n\n  font-size: 0;\n}"
        }
      ]
    },
    {
      "title": "06-header区域-导航",
      "trail": [
        "day07-学成在线",
        "06-header区域-导航"
      ],
      "level": 2,
      "line": 217,
      "blocks": [
        {
          "type": "text",
          "text": "实现方法：\n\n\n\n* 标签结构：ul > **li * 3** > a\n\n* 优势：**避免堆砌 a 标签**，**网站搜索排名降级**\n\n\n\n[课程配图见原资料]"
        }
      ]
    },
    {
      "title": "HTML结构",
      "trail": [
        "day07-学成在线",
        "06-header区域-导航",
        "HTML结构"
      ],
      "level": 3,
      "line": 235,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<ul>\n  <li><a href=\"#\" class=\"active\">首页</a></li>\n\n  <li><a href=\"#\">课程</a></li>\n\n  <li><a href=\"#\">职业规划</a></li>\n</ul>"
        }
      ]
    },
    {
      "title": "CSS样式",
      "trail": [
        "day07-学成在线",
        "06-header区域-导航",
        "CSS样式"
      ],
      "level": 3,
      "line": 255,
      "blocks": [
        {
          "type": "code",
          "language": "css",
          "text": "/* 导航 */\n\n.nav {\n  margin-left: 102px;\n}\n\n.nav ul {\n  display: flex;\n}\n\n.nav li {\n  margin-right: 24px;\n}\n\n.nav li a {\n  display: block;\n\n  padding: 6px 8px;\n\n  line-height: 27px;\n\n  font-size: 19px;\n}\n\n/* actvie 类选择器，表示默认选中的a */\n\n.nav li .active,\n.nav li a:hover {\n  border-bottom: 2px solid #00a4ff;\n}"
        }
      ]
    },
    {
      "title": "07-header区域-搜索布局",
      "trail": [
        "day07-学成在线",
        "07-header区域-搜索布局"
      ],
      "level": 2,
      "line": 317,
      "blocks": [
        {
          "type": "text",
          "text": "[课程配图见原资料]"
        }
      ]
    },
    {
      "title": "HTML结构",
      "trail": [
        "day07-学成在线",
        "07-header区域-搜索布局",
        "HTML结构"
      ],
      "level": 3,
      "line": 325,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<div class=\"search\"></div>"
        }
      ]
    },
    {
      "title": "CSS样式",
      "trail": [
        "day07-学成在线",
        "07-header区域-搜索布局",
        "CSS样式"
      ],
      "level": 3,
      "line": 337,
      "blocks": [
        {
          "type": "code",
          "language": "css",
          "text": ".search {\n  display: flex;\n\n  margin-left: 64px;\n\n  padding-left: 19px;\n\n  padding-right: 12px;\n\n  width: 412px;\n\n  height: 40px;\n\n  background-color: #f3f5f7;\n\n  border-radius: 20px;\n}"
        }
      ]
    },
    {
      "title": "HTML结构",
      "trail": [
        "day07-学成在线",
        "08-header区域-搜索内容",
        "HTML结构"
      ],
      "level": 3,
      "line": 371,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<div class=\"search\">\n  <input type=\"text\" placeholder=\"请输入关键词\" />\n\n  <a href=\"#\"></a>\n</div>"
        }
      ]
    },
    {
      "title": "CSS样式",
      "trail": [
        "day07-学成在线",
        "08-header区域-搜索内容",
        "CSS样式"
      ],
      "level": 3,
      "line": 389,
      "blocks": [
        {
          "type": "code",
          "language": "css",
          "text": ".search input {\n  flex: 1;\n\n  border: 0;\n\n  background-color: transparent;\n\n  /* 去掉表单控件的焦点框 */\n\n  outline: none;\n}\n\n/* ::placeholder 选中就是 placeholder 属性文字样式*/\n\n.search input::placeholder {\n  font-size: 14px;\n\n  color: #999;\n}\n\n/* 父级是flex布局，子级变弹性盒子：加宽高生效 */\n\n.search a {\n  align-self: center;\n\n  width: 16px;\n\n  height: 16px;\n\n  background-image: url(../images/search.png);\n}"
        }
      ]
    },
    {
      "title": "09-header区域-用户区域",
      "trail": [
        "day07-学成在线",
        "09-header区域-用户区域"
      ],
      "level": 2,
      "line": 441,
      "blocks": [
        {
          "type": "text",
          "text": "[课程配图见原资料]"
        }
      ]
    },
    {
      "title": "HTML结构",
      "trail": [
        "day07-学成在线",
        "09-header区域-用户区域",
        "HTML结构"
      ],
      "level": 3,
      "line": 449,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<div class=\"user\">\n  <a href=\"#\">\n    <img src=\"./uploads/user.png\" alt=\"\" />\n\n    <span>播仔学前端</span>\n  </a>\n</div>"
        }
      ]
    },
    {
      "title": "CSS样式",
      "trail": [
        "day07-学成在线",
        "09-header区域-用户区域",
        "CSS样式"
      ],
      "level": 3,
      "line": 471,
      "blocks": [
        {
          "type": "code",
          "language": "css",
          "text": "/* 用户 */\n\n.user {\n  margin-left: 32px;\n\n  margin-top: 4px;\n}\n\n.user img {\n  margin-right: 7px;\n\n  /* vertical-align 行内块和行内垂直方向对齐方式 */\n\n  vertical-align: middle;\n}\n\n.user span {\n  font-size: 16px;\n\n  color: #666;\n}"
        }
      ]
    },
    {
      "title": "10-banner区域-布局",
      "trail": [
        "day07-学成在线",
        "10-banner区域-布局"
      ],
      "level": 2,
      "line": 513,
      "blocks": [
        {
          "type": "text",
          "text": "[课程配图见原资料]"
        }
      ]
    },
    {
      "title": "HTML结构",
      "trail": [
        "day07-学成在线",
        "10-banner区域-布局",
        "HTML结构"
      ],
      "level": 3,
      "line": 521,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<div class=\"banner\">\n  <div class=\"wrapper\">\n    <div class=\"left\">left</div>\n\n    <div class=\"right\">right</div>\n  </div>\n</div>"
        }
      ]
    },
    {
      "title": "CSS样式",
      "trail": [
        "day07-学成在线",
        "10-banner区域-布局",
        "CSS样式"
      ],
      "level": 3,
      "line": 543,
      "blocks": [
        {
          "type": "code",
          "language": "css",
          "text": "/* banner 区域 */\n\n.banner {\n  height: 420px;\n\n  background-color: #0092cb;\n}\n\n.banner .wrapper {\n  display: flex;\n\n  justify-content: space-between;\n\n  height: 420px;\n\n  background-image: url(../uploads/banner.png);\n}"
        }
      ]
    },
    {
      "title": "HTML结构",
      "trail": [
        "day07-学成在线",
        "11-banner区域-侧导航",
        "HTML结构"
      ],
      "level": 3,
      "line": 581,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<div class=\"left\">\n  <ul>\n    <li><a href=\"#\">前端开发</a></li>\n\n    <li><a href=\"#\">后端开发</a></li>\n\n    <li><a href=\"#\">移动开发</a></li>\n\n    <li><a href=\"#\">人工智能</a></li>\n\n    <li><a href=\"#\">商业预测</a></li>\n\n    <li><a href=\"#\">云计算&大数据</a></li>\n\n    <li><a href=\"#\">运维&测试</a></li>\n\n    <li><a href=\"#\">UI设计</a></li>\n\n    <li><a href=\"#\">产品</a></li>\n  </ul>\n</div>"
        }
      ]
    },
    {
      "title": "CSS样式",
      "trail": [
        "day07-学成在线",
        "11-banner区域-侧导航",
        "CSS样式"
      ],
      "level": 3,
      "line": 617,
      "blocks": [
        {
          "type": "code",
          "language": "css",
          "text": "/* 侧导航 */\n\n.banner .left {\n  padding: 3px 20px;\n\n  width: 191px;\n\n  height: 420px;\n\n  background-color: rgba(0, 0, 0, 0.42);\n}\n\n.banner .left a {\n  /* 块级：宽度是父级的100% */\n\n  display: block;\n\n  height: 46px;\n\n  background: url(../images/right.png) no-repeat right center;\n\n  line-height: 46px;\n\n  font-size: 16px;\n\n  color: #fff;\n}\n\n.banner .left a:hover {\n  background-image: url(../images/right-hover.png);\n\n  color: #00a4ff;\n}"
        }
      ]
    },
    {
      "title": "12-banner区域-课程表布局",
      "trail": [
        "day07-学成在线",
        "12-banner区域-课程表布局"
      ],
      "level": 2,
      "line": 671,
      "blocks": [
        {
          "type": "text",
          "text": "[课程配图见原资料]"
        }
      ]
    },
    {
      "title": "HTML布局",
      "trail": [
        "day07-学成在线",
        "12-banner区域-课程表布局",
        "HTML布局"
      ],
      "level": 3,
      "line": 679,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<div class=\"right\">\n  <h3>我的课程表</h3>\n\n  <div class=\"content\">1</div>\n</div>"
        }
      ]
    },
    {
      "title": "CSS样式",
      "trail": [
        "day07-学成在线",
        "12-banner区域-课程表布局",
        "CSS样式"
      ],
      "level": 3,
      "line": 697,
      "blocks": [
        {
          "type": "code",
          "language": "css",
          "text": "/* 课程表 */\n\n.banner .right {\n  margin-top: 60px;\n\n  width: 218px;\n\n  height: 305px;\n\n  background-color: #209dd5;\n\n  border-radius: 10px;\n}\n\n.banner .right h3 {\n  margin-left: 14px;\n\n  height: 48px;\n\n  line-height: 48px;\n\n  font-size: 15px;\n\n  color: #fff;\n\n  font-weight: 400;\n}\n\n.banner .right .content {\n  padding: 14px;\n\n  height: 257px;\n\n  background-color: #fff;\n\n  border-radius: 10px;\n}"
        }
      ]
    },
    {
      "title": "HTML结构",
      "trail": [
        "day07-学成在线",
        "13-banner区域-课程表内容",
        "HTML结构"
      ],
      "level": 3,
      "line": 759,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<dl>\n  <dt>数据可视化课程</dt>\n\n  <dd>\n    <span>正在学习</span>\n    -\n    <strong>echarts使用步骤</strong>\n  </dd>\n</dl>\n\n<dl>\n  <dt>Vue3医疗项目课程</dt>\n\n  <dd>\n    <span>正在学习</span>\n    -\n    <strong>认识组合式API</strong>\n  </dd>\n</dl>\n\n<dl>\n  <dt>React核心技术课程</dt>\n\n  <dd>\n    <span>正在学习</span>\n    -\n    <strong>rudex配合TS使用</strong>\n  </dd>\n</dl>"
        }
      ]
    },
    {
      "title": "CSS样式",
      "trail": [
        "day07-学成在线",
        "13-banner区域-课程表内容",
        "CSS样式"
      ],
      "level": 3,
      "line": 793,
      "blocks": [
        {
          "type": "code",
          "language": "css",
          "text": ".banner .right dl {\n  margin-bottom: 12px;\n\n  border-bottom: 1px solid #e0e0e0;\n}\n\n.banner .right dt {\n  margin-bottom: 8px;\n\n  font-size: 14px;\n\n  line-height: 20px;\n\n  font-weight: 700;\n}\n\n.banner .right dd {\n  margin-bottom: 8px;\n\n  font-size: 12px;\n\n  line-height: 16px;\n}\n\n.banner .right dd span {\n  color: #00a4ff;\n}\n\n.banner .right dd strong {\n  color: #7d7d7d;\n\n  font-weight: 400;\n}"
        }
      ]
    },
    {
      "title": "HTML结构",
      "trail": [
        "day07-学成在线",
        "14-banner区域-全部课程",
        "HTML结构"
      ],
      "level": 3,
      "line": 859,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<a href=\"#\">全部课程</a>"
        }
      ]
    },
    {
      "title": "CSS样式",
      "trail": [
        "day07-学成在线",
        "14-banner区域-全部课程",
        "CSS样式"
      ],
      "level": 3,
      "line": 871,
      "blocks": [
        {
          "type": "code",
          "language": "css",
          "text": ".banner .right a {\n  display: block;\n\n  height: 32px;\n\n  background-color: #00a4ff;\n\n  text-align: center;\n\n  line-height: 32px;\n\n  font-size: 14px;\n\n  color: #fff;\n\n  border-radius: 15px;\n}"
        }
      ]
    },
    {
      "title": "15-精品推荐-区域布局",
      "trail": [
        "day07-学成在线",
        "15-精品推荐-区域布局"
      ],
      "level": 2,
      "line": 901,
      "blocks": [
        {
          "type": "text",
          "text": "[课程配图见原资料]"
        }
      ]
    },
    {
      "title": "HTML结构",
      "trail": [
        "day07-学成在线",
        "15-精品推荐-区域布局",
        "HTML结构"
      ],
      "level": 3,
      "line": 909,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "\n<!-- 精品推荐 -->\n\n<div class=\"recommend wrapper\">\n\n  <h3>精品推荐</h3>\n\n  <ul>\n\n    <li><a href=\"#\">HTML</a></li>\n\n  </ul>\n\n  <a href=\"#\" class=\"modify\">修改兴趣</a>\n\n</div\n",
          "note": "原资料中含排错代码或不完整片段，保留错误供分析；不会自动执行。"
        }
      ]
    },
    {
      "title": "CSS样式",
      "trail": [
        "day07-学成在线",
        "15-精品推荐-区域布局",
        "CSS样式"
      ],
      "level": 3,
      "line": 935,
      "blocks": [
        {
          "type": "code",
          "language": "css",
          "text": "/* 精品推荐 */\n\n.recommend {\n  display: flex;\n\n  margin-top: 11px;\n\n  padding: 0 20px;\n\n  height: 60px;\n\n  background-color: #fff;\n\n  box-shadow: 0px 1px 2px 0px rgba(211, 211, 211, 0.5);\n\n  line-height: 60px;\n}"
        }
      ]
    },
    {
      "title": "HTML结构",
      "trail": [
        "day07-学成在线",
        "16-精品推荐-内容样式",
        "HTML结构"
      ],
      "level": 3,
      "line": 969,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<ul>\n  <li><a href=\"#\">HTML</a></li>\n\n  <li><a href=\"#\">CSS</a></li>\n\n  <li><a href=\"#\">JavaScript</a></li>\n\n  <li><a href=\"#\">Node.js</a></li>\n\n  <li><a href=\"#\">Ajax</a></li>\n\n  <li><a href=\"#\">Vue2.0</a></li>\n\n  <li><a href=\"#\">Vue3.0</a></li>\n\n  <li><a href=\"#\">TypeScript</a></li>\n\n  <li><a href=\"#\">React</a></li>\n</ul>"
        }
      ]
    },
    {
      "title": "CSS样式",
      "trail": [
        "day07-学成在线",
        "16-精品推荐-内容样式",
        "CSS样式"
      ],
      "level": 3,
      "line": 1001,
      "blocks": [
        {
          "type": "code",
          "language": "css",
          "text": ".recommend h3 {\n  font-size: 18px;\n\n  color: #00a4ff;\n\n  font-weight: 400;\n}\n\n.recommend ul {\n  /* 除去标题和修改兴趣的尺寸，父级剩余尺寸都给ul，实现把修改兴趣挤到最右侧 */\n\n  flex: 1;\n\n  display: flex;\n}\n\n.recommend ul li a {\n  padding: 0 24px;\n\n  border-right: 1px solid #e0e0e0;\n\n  font-size: 18px;\n}\n\n.recommend ul li:last-child a {\n  border-right: 0;\n}\n\n.recommend .modify {\n  font-size: 16px;\n\n  color: #00a4ff;\n}"
        }
      ]
    },
    {
      "title": "17-推荐课程-标题区域",
      "trail": [
        "day07-学成在线",
        "17-推荐课程-标题区域"
      ],
      "level": 2,
      "line": 1063,
      "blocks": [
        {
          "type": "text",
          "text": "[课程配图见原资料]"
        }
      ]
    },
    {
      "title": "HTML结构",
      "trail": [
        "day07-学成在线",
        "17-推荐课程-标题区域",
        "HTML结构"
      ],
      "level": 3,
      "line": 1071,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!-- 精品推荐课程 -->\n\n<div class=\"course wrapper\">\n  <!-- 标题 -->\n\n  <div class=\"hd\">\n    <h3>精品推荐</h3>\n\n    <a href=\"#\" class=\"more\">查看全部</a>\n  </div>\n\n  <!-- 内容 -->\n\n  <div class=\"bd\">1</div>\n</div>"
        }
      ]
    },
    {
      "title": "CSS样式",
      "trail": [
        "day07-学成在线",
        "17-推荐课程-标题区域",
        "CSS样式"
      ],
      "level": 3,
      "line": 1101,
      "blocks": [
        {
          "type": "code",
          "language": "css",
          "text": "/* 推荐课程 */\n\n.course {\n  margin-top: 15px;\n}\n\n/* 标题 - 公共类，与其他区域共用 */\n\n.hd {\n  display: flex;\n\n  justify-content: space-between;\n\n  height: 60px;\n\n  line-height: 60px;\n}\n\n.hd h3 {\n  font-size: 21px;\n\n  font-weight: 400;\n}\n\n.hd .more {\n  padding-right: 20px;\n\n  background: url(../images/more.png) no-repeat right center;\n\n  font-size: 14px;\n\n  color: #999;\n}"
        }
      ]
    },
    {
      "title": "HTML结构",
      "trail": [
        "day07-学成在线",
        "18-推荐课程-内容布局",
        "HTML结构"
      ],
      "level": 3,
      "line": 1163,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<ul>\n  <li>1</li>\n\n  <li>2</li>\n\n  <li>3</li>\n\n  <li>4</li>\n\n  <li>5</li>\n\n  <li>6</li>\n\n  <li>7</li>\n\n  <li>8</li>\n</ul>"
        }
      ]
    },
    {
      "title": "CSS样式",
      "trail": [
        "day07-学成在线",
        "18-推荐课程-内容布局",
        "CSS样式"
      ],
      "level": 3,
      "line": 1193,
      "blocks": [
        {
          "type": "code",
          "language": "css",
          "text": "/* 课程内容 - 公共类 */\n\n.bd ul {\n  display: flex;\n\n  flex-wrap: wrap;\n\n  justify-content: space-between;\n}\n\n.bd li {\n  margin-bottom: 14px;\n\n  width: 228px;\n\n  height: 271px;\n\n  background-color: pink;\n}"
        }
      ]
    },
    {
      "title": "HTML结构",
      "trail": [
        "day07-学成在线",
        "19-推荐课程-内容样式",
        "HTML结构"
      ],
      "level": 3,
      "line": 1233,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<ul>\n  <li>\n    <a href=\"#\">\n      <div class=\"pic\"><img src=\"./uploads/course01.png\" alt=\"\" /></div>\n\n      <div class=\"text\">\n        <h4>JavaScript数据看板项目实战</h4>\n\n        <p>\n          <span>高级</span>\n          ·\n          <i>1125</i>\n          人在学习\n        </p>\n      </div>\n    </a>\n  </li>\n\n  <li>\n    <a href=\"#\">\n      <div class=\"pic\"><img src=\"./uploads/course02.png\" alt=\"\" /></div>\n\n      <div class=\"text\">\n        <h4>Vue.js实战——面经全端项目</h4>\n\n        <p>\n          <span>高级</span>\n          ·\n          <i>2726</i>\n          人在学习\n        </p>\n      </div>\n    </a>\n  </li>\n\n  <li>\n    <a href=\"#\">\n      <div class=\"pic\"><img src=\"./uploads/course03.png\" alt=\"\" /></div>\n\n      <div class=\"text\">\n        <h4>玩转Vue全家桶，iHRM人力资源项目</h4>\n\n        <p>\n          <span>高级</span>\n          ·\n          <i>9456</i>\n          人在学习\n        </p>\n      </div>\n    </a>\n  </li>\n\n  <li>\n    <a href=\"#\">\n      <div class=\"pic\"><img src=\"./uploads/course04.png\" alt=\"\" /></div>\n\n      <div class=\"text\">\n        <h4>Vue.js实战医疗项目——优医问诊</h4>\n\n        <p>\n          <span>高级</span>\n          ·\n          <i>7192</i>\n          人在学习\n        </p>\n      </div>\n    </a>\n  </li>\n\n  <li>\n    <a href=\"#\">\n      <div class=\"pic\"><img src=\"./uploads/course05.png\" alt=\"\" /></div>\n\n      <div class=\"text\">\n        <h4>小程序实战：小兔鲜电商小程序项目</h4>\n\n        <p>\n          <span>高级</span>\n          ·\n          <i>2703</i>\n          人在学习\n        </p>\n      </div>\n    </a>\n  </li>\n\n  <li>\n    <a href=\"#\">\n      <div class=\"pic\"><img src=\"./uploads/course06.png\" alt=\"\" /></div>\n\n      <div class=\"text\">\n        <h4>前端框架Flutter开发实战</h4>\n\n        <p>\n          <span>高级</span>\n          ·\n          <i>2841</i>\n          人在学习\n        </p>\n      </div>\n    </a>\n  </li>\n\n  <li>\n    <a href=\"#\">\n      <div class=\"pic\"><img src=\"./uploads/course07.png\" alt=\"\" /></div>\n\n      <div class=\"text\">\n        <h4>熟练使用React.js——极客园H5项目</h4>\n\n        <p>\n          <span>高级</span>\n          ·\n          <i>95682</i>\n          人在学习\n        </p>\n      </div>\n    </a>\n  </li>\n\n  <li>\n    <a href=\"#\">\n      <div class=\"pic\"><img src=\"./uploads/course08.png\" alt=\"\" /></div>\n\n      <div class=\"text\">\n        <h4>熟练使用React.js——极客园PC端项目</h4>\n\n        <p>\n          <span>高级</span>\n          ·\n          <i>904</i>\n          人在学习\n        </p>\n      </div>\n    </a>\n  </li>\n\n  <li>\n    <a href=\"#\">\n      <div class=\"pic\"><img src=\"./uploads/course09.png\" alt=\"\" /></div>\n\n      <div class=\"text\">\n        <h4>前端实用技术，Fetch API 实战</h4>\n\n        <p>\n          <span>高级</span>\n          ·\n          <i>1516</i>\n          人在学习\n        </p>\n      </div>\n    </a>\n  </li>\n\n  <li>\n    <a href=\"#\">\n      <div class=\"pic\"><img src=\"./uploads/course10.png\" alt=\"\" /></div>\n\n      <div class=\"text\">\n        <h4>前端高级Node.js零基础入门教程</h4>\n\n        <p>\n          <span>高级</span>\n          ·\n          <i>2766</i>\n          人在学习\n        </p>\n      </div>\n    </a>\n  </li>\n</ul>"
        }
      ]
    },
    {
      "title": "CSS样式",
      "trail": [
        "day07-学成在线",
        "19-推荐课程-内容样式",
        "CSS样式"
      ],
      "level": 3,
      "line": 1427,
      "blocks": [
        {
          "type": "code",
          "language": "css",
          "text": ".bd li .pic {\n  height: 156px;\n}\n\n.bd li .text {\n  padding: 20px;\n\n  height: 115px;\n\n  background-color: #fff;\n}\n\n.bd li .text h4 {\n  margin-bottom: 13px;\n\n  height: 40px;\n\n  font-size: 14px;\n\n  line-height: 20px;\n\n  font-weight: 400;\n}\n\n.bd li .text p {\n  font-size: 14px;\n\n  line-height: 20px;\n\n  color: #999;\n}\n\n.bd li .text p span {\n  color: #fa6400;\n}\n\n.bd li .text p i {\n  font-style: normal;\n}"
        }
      ]
    },
    {
      "title": "20-前端开发工程师区域",
      "trail": [
        "day07-学成在线",
        "20-前端开发工程师区域"
      ],
      "level": 2,
      "line": 1499,
      "blocks": [
        {
          "type": "text",
          "text": "[课程配图见原资料]"
        }
      ]
    },
    {
      "title": "HTML结构",
      "trail": [
        "day07-学成在线",
        "20-前端开发工程师区域",
        "HTML结构"
      ],
      "level": 3,
      "line": 1507,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!-- 前端 -->\n\n<div class=\"wrapper\">\n  <!-- 标题 -->\n\n  <div class=\"hd\">\n    <h3>前端开发工程师</h3>\n\n    <ul>\n      <li><a href=\"#\" class=\"active\">热门</a></li>\n\n      <li><a href=\"#\">初级</a></li>\n\n      <li><a href=\"#\">中级</a></li>\n\n      <li><a href=\"#\">高级</a></li>\n    </ul>\n\n    <a href=\"#\" class=\"more\">查看全部</a>\n  </div>\n\n  <div class=\"bd\">\n    <div class=\"left\">\n      <img src=\"./uploads/web_left.png\" alt=\"\" />\n    </div>\n\n    <div class=\"right\">\n      <div class=\"top\"><img src=\"./uploads/web_top.png\" alt=\"\" /></div>\n\n      <div class=\"bottom\">\n        <ul>\n          <li>\n            <a href=\"#\">\n              <div class=\"pic\"><img src=\"./uploads/web01.png\" alt=\"\" /></div>\n\n              <div class=\"text\">\n                <h4>JS高级javaScript进阶面向对象ES6</h4>\n\n                <p>\n                  <span>高级</span>\n                  ·\n                  <i>101937</i>\n                  人在学习\n                </p>\n              </div>\n            </a>\n          </li>\n\n          <li>\n            <a href=\"#\">\n              <div class=\"pic\"><img src=\"./uploads/web02.png\" alt=\"\" /></div>\n\n              <div class=\"text\">\n                <h4>零基础玩转微信小程序</h4>\n\n                <p>\n                  <span>高级</span>\n                  ·\n                  <i>133781</i>\n                  人在学习\n                </p>\n              </div>\n            </a>\n          </li>\n\n          <li>\n            <a href=\"#\">\n              <div class=\"pic\"><img src=\"./uploads/web03.png\" alt=\"\" /></div>\n\n              <div class=\"text\">\n                <h4>JavaScript基础——语法解析+项目实战</h4>\n\n                <p>\n                  <span>高级</span>\n                  ·\n                  <i>8927</i>\n                  人在学习\n                </p>\n              </div>\n            </a>\n          </li>\n\n          <li>\n            <a href=\"#\">\n              <div class=\"pic\"><img src=\"./uploads/web04.png\" alt=\"\" /></div>\n\n              <div class=\"text\">\n                <h4>前端框架Vue2+Vue3全套视频</h4>\n\n                <p>\n                  <span>高级</span>\n                  ·\n                  <i>26022</i>\n                  人在学习\n                </p>\n              </div>\n            </a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</div>"
        }
      ]
    },
    {
      "title": "CSS样式",
      "trail": [
        "day07-学成在线",
        "20-前端开发工程师区域",
        "CSS样式"
      ],
      "level": 3,
      "line": 1641,
      "blocks": [
        {
          "type": "code",
          "language": "css",
          "text": "/* 前端 */\n\n.hd ul {\n  display: flex;\n}\n\n.hd li {\n  margin-right: 60px;\n\n  font-size: 16px;\n}\n\n.hd li .active {\n  color: #00a4ff;\n}\n\n.bd {\n  display: flex;\n\n  justify-content: space-between;\n}\n\n.bd .left {\n  width: 228px;\n\n  /* background-color: pink; */\n}\n\n.bd .right {\n  width: 957px;\n\n  /* background-color: pink; */\n}\n\n.bd .right .top {\n  margin-bottom: 15px;\n\n  height: 100px;\n}"
        }
      ]
    },
    {
      "title": "21-版权-布局",
      "trail": [
        "day07-学成在线",
        "21-版权-布局"
      ],
      "level": 2,
      "line": 1717,
      "blocks": [
        {
          "type": "text",
          "text": "[课程配图见原资料]"
        }
      ]
    },
    {
      "title": "HTML结构",
      "trail": [
        "day07-学成在线",
        "21-版权-布局",
        "HTML结构"
      ],
      "level": 3,
      "line": 1725,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!-- 版权 -->\n\n<div class=\"footer\">\n  <div class=\"wrapper\">\n    <div class=\"left\">left</div>\n\n    <div class=\"right\">right</div>\n  </div>\n</div>"
        }
      ]
    },
    {
      "title": "CSS样式",
      "trail": [
        "day07-学成在线",
        "21-版权-布局",
        "CSS样式"
      ],
      "level": 3,
      "line": 1749,
      "blocks": [
        {
          "type": "code",
          "language": "css",
          "text": "/* 版权 */\n\n.footer {\n  margin-top: 60px;\n\n  padding-top: 60px;\n\n  height: 273px;\n\n  background-color: #fff;\n}\n\n.footer .wrapper {\n  display: flex;\n\n  justify-content: space-between;\n}\n\n.footer .left {\n  width: 440px;\n\n  background-color: pink;\n}"
        }
      ]
    },
    {
      "title": "HTML结构",
      "trail": [
        "day07-学成在线",
        "22-版权-内容",
        "HTML结构"
      ],
      "level": 3,
      "line": 1797,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<div class=\"left\">\n  <a href=\"#\"><img src=\"./images/logo.png\" alt=\"\" /></a>\n\n  <p>\n    学成在线致力于普及中国最好的教育它与中国一流大学和机构合作提供在线课程。 ©\n    2017年XTCG Inc.保留所有权利。-沪ICP备15025210号\n  </p>\n\n  <a href=\"#\" class=\"download\">下载APP</a>\n</div>\n\n<div class=\"right\">\n  <dl>\n    <dt>关于学成网</dt>\n\n    <dd><a href=\"#\">关于</a></dd>\n\n    <dd><a href=\"#\">管理团队</a></dd>\n\n    <dd><a href=\"#\">工作机会</a></dd>\n\n    <dd><a href=\"#\">客户服务</a></dd>\n\n    <dd><a href=\"#\">帮助</a></dd>\n  </dl>\n\n  <dl>\n    <dt>新手指南</dt>\n\n    <dd><a href=\"#\">如何注册</a></dd>\n\n    <dd><a href=\"#\">如何选课</a></dd>\n\n    <dd><a href=\"#\">如何拿到毕业证</a></dd>\n\n    <dd><a href=\"#\">学分是什么</a></dd>\n\n    <dd><a href=\"#\">考试未通过怎么办</a></dd>\n  </dl>\n\n  <dl>\n    <dt>合作伙伴</dt>\n\n    <dd><a href=\"#\">合作机构</a></dd>\n\n    <dd><a href=\"#\">合作导师</a></dd>\n  </dl>\n</div>"
        }
      ]
    },
    {
      "title": "CSS样式",
      "trail": [
        "day07-学成在线",
        "22-版权-内容",
        "CSS样式"
      ],
      "level": 3,
      "line": 1865,
      "blocks": [
        {
          "type": "code",
          "language": "css",
          "text": ".footer .left p {\n  margin-top: 24px;\n\n  margin-bottom: 14px;\n\n  font-size: 12px;\n\n  line-height: 17px;\n\n  color: #666;\n}\n\n.footer .left .download {\n  display: block;\n\n  width: 120px;\n\n  height: 36px;\n\n  border: 1px solid #00a4ff;\n\n  text-align: center;\n\n  line-height: 34px;\n\n  font-size: 16px;\n\n  color: #00a4ff;\n}\n\n.footer .right {\n  display: flex;\n}\n\n.footer .right dl {\n  margin-left: 130px;\n}\n\n.footer .right dt {\n  margin-bottom: 12px;\n\n  font-size: 16px;\n\n  line-height: 23px;\n}\n\n.footer .right a {\n  font-size: 14px;\n\n  color: #666;\n\n  line-height: 24px;\n}"
        }
      ]
    }
  ]
};
