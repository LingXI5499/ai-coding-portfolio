window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["276c07547e34dcc51520"] = {
  "id": "276c07547e34dcc51520",
  "title": "移动Webday05.md",
  "treatment": "章节知识与练习",
  "sections": [
    {
      "title": "移动 Web 第五天",
      "trail": [
        "移动 Web 第五天"
      ],
      "level": 1,
      "line": 1,
      "blocks": [
        {
          "type": "text",
          "text": "响应式布局方案\n\n\n\n* 媒体查询\n\n* Bootstrap框架"
        }
      ]
    },
    {
      "title": "基本写法",
      "trail": [
        "移动 Web 第五天",
        "01-媒体查询",
        "基本写法"
      ],
      "level": 3,
      "line": 19,
      "blocks": [
        {
          "type": "text",
          "text": "[课程配图见原资料]\n\n\n\n* max-width：最大宽度（小于等于）\n\n* min-width：最小宽度（大于等于）"
        }
      ]
    },
    {
      "title": "书写顺序",
      "trail": [
        "移动 Web 第五天",
        "01-媒体查询",
        "书写顺序"
      ],
      "level": 3,
      "line": 33,
      "blocks": [
        {
          "type": "text",
          "text": "* min-width（从小到大）\n\n* max-width（从大到小）"
        }
      ]
    },
    {
      "title": "案例-左侧隐藏",
      "trail": [
        "移动 Web 第五天",
        "01-媒体查询",
        "案例-左侧隐藏"
      ],
      "level": 3,
      "line": 43,
      "blocks": [
        {
          "type": "text",
          "text": "需求：网页宽度小于等于768px则隐藏左侧区域\n\n\n\n[课程配图见原资料]\n\n\n\n* HTML 结构"
        },
        {
          "type": "code",
          "language": "css",
          "text": "\n<div class=\"box\">\n\n  <div class=\"left\">left</div>\n\n  <div class=\"main\">\n\n    响应式网页效果响应式网页效果响应式网页效果响应式网页效果响应式网页效果响应式网页效果响应式网页效果响应式网页效果响应式网页效果响应式网页效果响应式网页效果响应式网页效果响应式网页效果响应式网页效果响应式网页效果响应式网页效果响应式网页效果响应式网页效果响应式网页效果响应式网页效果响应式网页效果响应式网页效果响应式网页效果响应式网页效果响应式网页效果响应式网页效果响应式网页效果响应式网页效果响应式网页效果响应式网页效果响应式网页效果响应式网页效果响应式网页效果响应式网页效果响应式网页效果响应式网页效果响应式网页效果响应式网页效果响应式网页效果响应式网页效果响应式网页效果响应式网页效果响应式网页效果响应式网页效果响应式网页效果响应式网页效果响应式网页效果响应式网页效果\n\n  </div>\n\n</div>\n",
          "note": "原资料中含排错代码或不完整片段，保留错误供分析；不会自动执行。"
        },
        {
          "type": "text",
          "text": "* CSS 样式"
        },
        {
          "type": "code",
          "language": "css",
          "text": ".box {\n  display: flex;\n}\n\n.left {\n  width: 300px;\n\n  height: 500px;\n\n  background-color: pink;\n}\n\n.main {\n  flex: 1;\n\n  height: 500px;\n\n  background-color: skyblue;\n}\n\n@media (max-width: 768px) {\n  .left {\n    display: none;\n  }\n}"
        }
      ]
    },
    {
      "title": "媒体查询-完整写法",
      "trail": [
        "移动 Web 第五天",
        "01-媒体查询",
        "媒体查询-完整写法"
      ],
      "level": 3,
      "line": 129,
      "blocks": [
        {
          "type": "text",
          "text": "[课程配图见原资料]"
        }
      ]
    },
    {
      "title": "关键词 / 逻辑操作符",
      "trail": [
        "移动 Web 第五天",
        "01-媒体查询",
        "媒体查询-完整写法",
        "关键词 / 逻辑操作符"
      ],
      "level": 4,
      "line": 137,
      "blocks": [
        {
          "type": "text",
          "text": "* and\n\n* only\n\n* not"
        }
      ]
    },
    {
      "title": "媒体类型",
      "trail": [
        "移动 Web 第五天",
        "01-媒体查询",
        "媒体查询-完整写法",
        "媒体类型"
      ],
      "level": 4,
      "line": 149,
      "blocks": [
        {
          "type": "text",
          "text": "媒体类型用来区分设备类型\n\n\n\n* screen：屏幕设备\n\n* 打印预览：print\n\n* 阅读器：speech\n\n* 不区分类型：all"
        }
      ]
    },
    {
      "title": "媒体特性",
      "trail": [
        "移动 Web 第五天",
        "01-媒体查询",
        "媒体查询-完整写法",
        "媒体特性"
      ],
      "level": 4,
      "line": 167,
      "blocks": [
        {
          "type": "text",
          "text": "* 视口宽高：width / height\n\n* 视口最大宽高：max-width ；max-height\n\n* 视口最小宽高：min-width；min-height\n\n* 屏幕方向：orientation\n\n  * protrait：竖屏\n\n  * landscape：横屏"
        }
      ]
    },
    {
      "title": "媒体查询-外部CSS",
      "trail": [
        "移动 Web 第五天",
        "01-媒体查询",
        "媒体查询-外部CSS"
      ],
      "level": 3,
      "line": 185,
      "blocks": [
        {
          "type": "text",
          "text": "[课程配图见原资料]"
        }
      ]
    },
    {
      "title": "简介",
      "trail": [
        "移动 Web 第五天",
        "02-Bootstrap",
        "简介"
      ],
      "level": 3,
      "line": 197,
      "blocks": [
        {
          "type": "text",
          "text": "Bootstrap 是由 Twitter 公司开发维护的前端 UI 框架，它提供了大量编写好的 CSS 样式，允许开发者结合一定 HTML 结构及JavaScript，快速编写功能完善的网页及常见交互效果。 \n\n\n\n中文官网: <https://www.bootcss.com/>"
        }
      ]
    },
    {
      "title": "下载",
      "trail": [
        "移动 Web 第五天",
        "02-Bootstrap",
        "使用步骤",
        "下载"
      ],
      "level": 4,
      "line": 213,
      "blocks": [
        {
          "type": "text",
          "text": "下载：Bootstrap V5中文文档 → 进入中文文档 → 下载 →下载 Bootstrap 生产文件\n\n\n\n[课程配图见原资料]"
        }
      ]
    },
    {
      "title": "使用",
      "trail": [
        "移动 Web 第五天",
        "02-Bootstrap",
        "使用步骤",
        "使用"
      ],
      "level": 4,
      "line": 225,
      "blocks": [
        {
          "type": "text",
          "text": "1. 引入 Bootstrap CSS 文件"
        },
        {
          "type": "code",
          "language": "html",
          "text": "<link rel=\"stylesheet\" href=\"./Bootstrap/css/bootstrap.min.css\" />"
        },
        {
          "type": "text",
          "text": "2. 调用类名： container 响应式布局版心类"
        },
        {
          "type": "code",
          "language": "html",
          "text": "<div class=\"container\">测试</div>"
        }
      ]
    },
    {
      "title": "栅格系统",
      "trail": [
        "移动 Web 第五天",
        "02-Bootstrap",
        "栅格系统"
      ],
      "level": 3,
      "line": 253,
      "blocks": [
        {
          "type": "text",
          "text": "作用：响应式布局\n\n\n\n栅格化是指将整个网页的宽度分成12等份，每个盒子占用的对应的份数\n\n\n\n例如：一行排4个盒子，则每个盒子占 3份 即可（12 / 4 = 3）\n\n\n\n[课程配图见原资料]\n\n\n\n* row 类：行，可以让内容在一行排（flex布局）"
        }
      ]
    },
    {
      "title": "按钮",
      "trail": [
        "移动 Web 第五天",
        "02-Bootstrap",
        "全局样式",
        "按钮"
      ],
      "level": 4,
      "line": 281,
      "blocks": [
        {
          "type": "text",
          "text": "[课程配图见原资料]\n\n\n\n类名\n\n\n\n* btn：默认样式\n\n* btn-success：成功\n\n* btn-warning：警告\n\n* ……\n\n* 按钮尺寸：btn-lg / btn-sm"
        }
      ]
    },
    {
      "title": "表格",
      "trail": [
        "移动 Web 第五天",
        "02-Bootstrap",
        "全局样式",
        "表格"
      ],
      "level": 4,
      "line": 305,
      "blocks": [
        {
          "type": "text",
          "text": "[课程配图见原资料]\n\n\n\n表格类：\n\n\n\n* table：默认样式\n\n* table-striped：隔行变色\n\n* table-success：表格颜色\n\n* ……"
        }
      ]
    },
    {
      "title": "组件",
      "trail": [
        "移动 Web 第五天",
        "02-Bootstrap",
        "组件"
      ],
      "level": 3,
      "line": 327,
      "blocks": [
        {
          "type": "text",
          "text": "1.引入样式表\n\n\n\n2.引入 js 文件\n\n\n\n3.复制结构，修改内容"
        }
      ]
    },
    {
      "title": "下载",
      "trail": [
        "移动 Web 第五天",
        "02-Bootstrap",
        "字体图标",
        "下载"
      ],
      "level": 4,
      "line": 347,
      "blocks": [
        {
          "type": "text",
          "text": "导航 / Extend：图标库 → 安装 → 下载安装包 → [bootstrap-icons-1.X.X.zip](https://github.com/twbs/icons/releases/download/v1.10.3/bootstrap-icons-1.10.3.zip)"
        }
      ]
    },
    {
      "title": "使用",
      "trail": [
        "移动 Web 第五天",
        "02-Bootstrap",
        "字体图标",
        "使用"
      ],
      "level": 4,
      "line": 355,
      "blocks": [
        {
          "type": "text",
          "text": "1. 复制 fonts 文件夹到项目目录\n\n2. 网页引入 bootstrap-icons.css 文件\n\n3. 调用 CSS 类名（图标对应的类名）"
        },
        {
          "type": "code",
          "language": "html",
          "text": "<i class=\"bi-android2\"></i>"
        }
      ]
    },
    {
      "title": "准备工作",
      "trail": [
        "移动 Web 第五天",
        "03-综合案例-alloyTeam",
        "准备工作"
      ],
      "level": 3,
      "line": 379,
      "blocks": [
        {
          "type": "text",
          "text": "[课程配图见原资料]\n\n\n\n* HTML 结构"
        },
        {
          "type": "code",
          "language": "html",
          "text": "<title>腾讯全端</title>\n\n<link rel=\"shortcut icon\" href=\"favicon.ico\" type=\"image/x-icon\" />\n\n<!-- 层叠性：咱们的css 要 层叠 框架的 -->\n\n<link rel=\"stylesheet\" href=\"./Bootstrap/css/bootstrap.min.css\" />\n\n<link rel=\"stylesheet\" href=\"./Bootstrap/font/bootstrap-icons.css\" />\n\n<link rel=\"stylesheet\" href=\"./css/index.css\" />\n\n<script src=\"./Bootstrap/js/bootstrap.min.js\"></script>"
        },
        {
          "type": "text",
          "text": "* less 样式"
        },
        {
          "type": "code",
          "language": "less",
          "text": "// out: ../css/"
        }
      ]
    },
    {
      "title": "头部导航",
      "trail": [
        "移动 Web 第五天",
        "03-综合案例-alloyTeam",
        "头部导航"
      ],
      "level": 3,
      "line": 429,
      "blocks": [
        {
          "type": "text",
          "text": "* HTML 结构"
        },
        {
          "type": "code",
          "language": "html",
          "text": "<!-- 导航 -->\n\n<nav class=\"navbar navbar-expand-lg bg-body-tertiary fixed-top\">\n  <div class=\"container\">\n    <a class=\"navbar-brand\" href=\"#\"><img src=\"./assets/images/logo.png\" alt=\"\" /></a>\n\n    <button\n      class=\"navbar-toggler\"\n      type=\"button\"\n      data-bs-toggle=\"collapse\"\n      data-bs-target=\"#navbarNav\"\n      aria-controls=\"navbarNav\"\n      aria-expanded=\"false\"\n      aria-label=\"Toggle navigation\"\n    >\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n\n    <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n      <ul class=\"navbar-nav\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link active\" aria-current=\"page\" href=\"#\">首页</a>\n        </li>\n\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#\">博客</a>\n        </li>\n\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#\">Github</a>\n        </li>\n\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#\">TWeb Conf</a>\n        </li>\n\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#\">SuperStar</a>\n        </li>\n\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#\">Web前端导航</a>\n        </li>\n\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#\">关于</a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>"
        },
        {
          "type": "text",
          "text": "* less 样式"
        },
        {
          "type": "code",
          "language": "less",
          "text": "// 导航\n\n.bg-body-tertiary {\n  background-color: transparent !important;\n\n  .navbar-collapse {\n    flex-grow: 0;\n  }\n}"
        }
      ]
    },
    {
      "title": "轮播图图片",
      "trail": [
        "移动 Web 第五天",
        "03-综合案例-alloyTeam",
        "轮播图图片"
      ],
      "level": 3,
      "line": 535,
      "blocks": [
        {
          "type": "text",
          "text": "* HTML 结构"
        },
        {
          "type": "code",
          "language": "html",
          "text": "<!-- 轮播图 -->\n\n<div id=\"carouselExampleIndicators\" class=\"carousel slide\">\n  <div class=\"carousel-indicators\">\n    <button\n      type=\"button\"\n      data-bs-target=\"#carouselExampleIndicators\"\n      data-bs-slide-to=\"0\"\n      class=\"active\"\n      aria-current=\"true\"\n      aria-label=\"Slide 1\"\n    ></button>\n\n    <button\n      type=\"button\"\n      data-bs-target=\"#carouselExampleIndicators\"\n      data-bs-slide-to=\"1\"\n      aria-label=\"Slide 2\"\n    ></button>\n\n    <button\n      type=\"button\"\n      data-bs-target=\"#carouselExampleIndicators\"\n      data-bs-slide-to=\"2\"\n      aria-label=\"Slide 3\"\n    ></button>\n\n    <button\n      type=\"button\"\n      data-bs-target=\"#carouselExampleIndicators\"\n      data-bs-slide-to=\"3\"\n      aria-label=\"Slide 4\"\n    ></button>\n  </div>\n\n  <div class=\"carousel-inner\">\n    <div class=\"carousel-item active\"></div>\n\n    <div class=\"carousel-item\"></div>\n\n    <div class=\"carousel-item\"></div>\n\n    <div class=\"carousel-item\"></div>\n  </div>\n\n  <button\n    class=\"carousel-control-prev\"\n    type=\"button\"\n    data-bs-target=\"#carouselExampleIndicators\"\n    data-bs-slide=\"prev\"\n  >\n    <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n\n    <span class=\"visually-hidden\">Previous</span>\n  </button>\n\n  <button\n    class=\"carousel-control-next\"\n    type=\"button\"\n    data-bs-target=\"#carouselExampleIndicators\"\n    data-bs-slide=\"next\"\n  >\n    <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n\n    <span class=\"visually-hidden\">Next</span>\n  </button>\n</div>"
        },
        {
          "type": "text",
          "text": "* less 样式"
        },
        {
          "type": "code",
          "language": "less",
          "text": ".carousel {\n  .carousel-item {\n    height: 500px;\n\n    background-size: cover;\n\n    background-position: center 0;\n  }\n\n  .carousel-item:nth-child(1) {\n    background-image: url(../assets/uploads/banner_1.jpg);\n  }\n\n  .carousel-item:nth-child(2) {\n    background-image: url(../assets/uploads/banner_2.jpg);\n  }\n\n  .carousel-item:nth-child(3) {\n    background-image: url(../assets/uploads/banner_3.jpg);\n  }\n\n  .carousel-item:nth-child(4) {\n    background-image: url(../assets/uploads/banner_4.jpg);\n  }\n}"
        }
      ]
    },
    {
      "title": "轮播图响应式",
      "trail": [
        "移动 Web 第五天",
        "03-综合案例-alloyTeam",
        "轮播图响应式"
      ],
      "level": 3,
      "line": 659,
      "blocks": [
        {
          "type": "text",
          "text": "* less 样式"
        },
        {
          "type": "code",
          "language": "less",
          "text": "// 轮播图: 小于768图片高度250 max；大于等于768图片高度400 min；大于等于992图片高度500\n\n.carousel {\n  // 响应式 → 媒体查询\n\n  @media (max-width: 768px) {\n    .carousel-item {\n      height: 250px;\n    }\n  }\n\n  @media (min-width: 768px) {\n    .carousel-item {\n      height: 400px;\n    }\n  }\n\n  @media (min-width: 992px) {\n    .carousel-item {\n      height: 500px;\n    }\n  }\n\n  .carousel-item {\n    // height: 500px;\n\n    background-size: cover;\n\n    background-position: center 0;\n  }\n}"
        }
      ]
    },
    {
      "title": "开源项目响应式",
      "trail": [
        "移动 Web 第五天",
        "03-综合案例-alloyTeam",
        "开源项目响应式"
      ],
      "level": 3,
      "line": 727,
      "blocks": [
        {
          "type": "text",
          "text": "* HTML 结构"
        },
        {
          "type": "code",
          "language": "html",
          "text": "<!-- 开源项目 -->\n\n<div class=\"project container\">\n  <div class=\"title\">\n    <h2>OpenSource / 开源项目</h2>\n\n    <p>种类众多的开源项目，让你爱不释手</p>\n  </div>\n\n  <div class=\"content\">\n    <div class=\"row\">\n      <div class=\"col-lg-3 col-md-6\">1</div>\n\n      <div class=\"col-lg-3 col-md-6\">2</div>\n\n      <div class=\"col-lg-3 col-md-6\">3</div>\n\n      <div class=\"col-lg-3 col-md-6\">4</div>\n    </div>\n  </div>\n</div>"
        },
        {
          "type": "text",
          "text": "* less 样式"
        },
        {
          "type": "code",
          "language": "less",
          "text": "// 开源项目\n\n// 视口宽度大于992；一行排4个盒子  col-lg-3\n\n// 视口宽度大于768；一行排2个盒子  col-md-6\n\n.project {\n  margin-top: 60px;\n\n  text-align: center;\n}"
        }
      ]
    },
    {
      "title": "开源项目内容布局",
      "trail": [
        "移动 Web 第五天",
        "03-综合案例-alloyTeam",
        "开源项目内容布局"
      ],
      "level": 3,
      "line": 795,
      "blocks": [
        {
          "type": "text",
          "text": "* HTML 结构"
        },
        {
          "type": "code",
          "language": "html",
          "text": "<!-- 开源项目 -->\n\n<div class=\"project container\">\n  <div class=\"title\">\n    <h2>OpenSource / 开源项目</h2>\n\n    <p>种类众多的开源项目，让你爱不释手</p>\n  </div>\n\n  <div class=\"content\">\n    <div class=\"row\">\n      <div class=\"col-lg-3 col-md-6\"><a href=\"#\">1</a></div>\n\n      <div class=\"col-lg-3 col-md-6\"><a href=\"#\">1</a></div>\n\n      <div class=\"col-lg-3 col-md-6\"><a href=\"#\">1</a></div>\n\n      <div class=\"col-lg-3 col-md-6\"><a href=\"#\">1</a></div>\n    </div>\n  </div>\n</div>"
        },
        {
          "type": "text",
          "text": "* less 样式"
        },
        {
          "type": "code",
          "language": "less",
          "text": ".project {\n  margin-top: 60px;\n\n  text-align: center;\n\n  .row {\n    div {\n      margin-bottom: 10px;\n\n      height: 200px;\n\n      // background-color: pink;\n\n      a {\n        // 块级的宽度和父级一样大\n\n        display: block;\n\n        height: 200px;\n\n        background-color: green;\n\n        border-radius: 4px;\n      }\n\n      &:nth-child(1) a {\n        background-color: #70c3ff;\n      }\n\n      &:nth-child(2) a {\n        background-color: #fd6a7f;\n      }\n\n      &:nth-child(3) a {\n        background-color: #7f8ea0;\n      }\n\n      &:nth-child(4) a {\n        background-color: #89d04f;\n      }\n    }\n  }\n}"
        }
      ]
    }
  ]
};
