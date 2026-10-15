window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["429df38e7da548e5406a"] = {
  "id": "429df38e7da548e5406a",
  "title": "day06-Flex布局.md",
  "treatment": "章节知识与练习",
  "sections": [
    {
      "title": "day06-Flex布局",
      "trail": [
        "day06-Flex布局"
      ],
      "level": 1,
      "line": 1,
      "blocks": [
        {
          "type": "text",
          "text": "> 目标：熟练使用 Flex 完成结构化布局"
        }
      ]
    },
    {
      "title": "01-标准流",
      "trail": [
        "day06-Flex布局",
        "01-标准流"
      ],
      "level": 2,
      "line": 5,
      "blocks": [
        {
          "type": "text",
          "text": "标准流也叫文档流，指的是标签在页面中**默认的排布规则**，例如：块元素独占一行，行内元素可以一行显示多个。 \n\n[课程配图见原资料]"
        }
      ]
    },
    {
      "title": "基本使用",
      "trail": [
        "day06-Flex布局",
        "02-浮动",
        "基本使用"
      ],
      "level": 3,
      "line": 13,
      "blocks": [
        {
          "type": "text",
          "text": "作用：让块元素水平排列。\n\n属性名：**float**\n\n属性值\n\n* **left**：左对齐\n* **right**：右对齐"
        },
        {
          "type": "code",
          "language": "html",
          "text": "<style>\n  /* 特点：顶对齐；具备行内块显示模式特点；浮动的盒子会脱标 */\n  .one {\n    width: 100px;\n    height: 100px;\n    background-color: brown;\n\n    float: left;\n  }\n\n  .two {\n    width: 200px;\n    height: 200px;\n    background-color: orange;\n\n    /* float: left; */\n\n    float: right;\n  }\n</style>\n\n<div class=\"one\">one</div>\n<div class=\"two\">two</div>"
        },
        {
          "type": "text",
          "text": "特点：\n\n* 浮动后的盒子**顶对齐**\n* 浮动后的盒子具备**行内块**特点\n* 浮动后的盒子**脱标**，**不占用标准流的位置**"
        }
      ]
    },
    {
      "title": "产品区域布局",
      "trail": [
        "day06-Flex布局",
        "02-浮动",
        "产品区域布局"
      ],
      "level": 3,
      "line": 56,
      "blocks": [
        {
          "type": "text",
          "text": "[课程配图见原资料]"
        }
      ]
    },
    {
      "title": "HTML标签",
      "trail": [
        "day06-Flex布局",
        "02-浮动",
        "产品区域布局",
        "HTML标签"
      ],
      "level": 4,
      "line": 60,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!-- 版心：左右，右面：8个产品 → 8个 li -->\n<div class=\"product\">\n  <div class=\"left\"></div>\n  <div class=\"right\">\n    <ul>\n      <li></li>\n      <li></li>\n      <li></li>\n      <li></li>\n      <li></li>\n      <li></li>\n      <li></li>\n      <li></li>\n    </ul>\n  </div>\n</div>"
        }
      ]
    },
    {
      "title": "CSS样式",
      "trail": [
        "day06-Flex布局",
        "02-浮动",
        "产品区域布局",
        "CSS样式"
      ],
      "level": 4,
      "line": 83,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<style>\n  * {\n    margin: 0;\n    padding: 0;\n  }\n\n  li {\n    list-style: none;\n  }\n\n  .product {\n    margin: 50px auto;\n    width: 1226px;\n    height: 628px;\n    background-color: pink;\n  }\n\n  .left {\n    float: left;\n    width: 234px;\n    height: 628px;\n    background-color: skyblue;\n  }\n\n  .right {\n    float: right;\n    width: 978px;\n    height: 628px;\n    background-color: brown;\n  }\n\n  .right li {\n    float: left;\n    margin-right: 14px;\n    margin-bottom: 14px;\n    width: 234px;\n    height: 300px;\n    background-color: orange;\n  }\n\n  /* 第四个li和第八个li 去掉右侧的margin */\n  .right li:nth-child(4n) {\n    margin-right: 0;\n  }\n\n  /* 细节：如果父级宽度不够，浮动的盒子会掉下来 */\n</style>"
        }
      ]
    },
    {
      "title": "清除浮动",
      "trail": [
        "day06-Flex布局",
        "02-浮动",
        "清除浮动"
      ],
      "level": 3,
      "line": 135,
      "blocks": [
        {
          "type": "text",
          "text": "场景：浮动元素会脱标，如果**父级没有高度**，**子级无法撑开父级高度**（可能导致页面布局错乱）\n\n解决方法：**清除浮动**（清除浮动带来的影响）"
        }
      ]
    },
    {
      "title": "场景搭建",
      "trail": [
        "day06-Flex布局",
        "02-浮动",
        "清除浮动",
        "场景搭建"
      ],
      "level": 4,
      "line": 141,
      "blocks": [
        {
          "type": "text",
          "text": "[课程配图见原资料]"
        },
        {
          "type": "code",
          "language": "html",
          "text": "<style>\n  .top {\n    margin: 10px auto;\n    width: 1200px;\n    /* height: 300px; */\n    background-color: pink;\n  }\n\n  .left {\n    float: left;\n    width: 200px;\n    height: 300px;\n    background-color: skyblue;\n  }\n\n  .right {\n    float: right;\n    width: 950px;\n    height: 300px;\n    background-color: orange;\n  }\n\n  .bottom {\n    height: 100px;\n    background-color: brown;\n  }\n</style>\n\n<div class=\"top\">\n  <div class=\"left\"></div>\n  <div class=\"right\"></div>\n</div>\n<div class=\"bottom\"></div>"
        }
      ]
    },
    {
      "title": "额外标签法",
      "trail": [
        "day06-Flex布局",
        "02-浮动",
        "清除浮动",
        "额外标签法"
      ],
      "level": 4,
      "line": 182,
      "blocks": [
        {
          "type": "text",
          "text": "在**父元素内容的最后**添加一个**块级**元素，设置 CSS 属性 **clear: both**"
        },
        {
          "type": "code",
          "language": "html",
          "text": "<style>\n  .clearfix {\n    clear: both;\n  }\n</style>\n\n<div class=\"father\">\n  <div class=\"left\"></div>\n  <div class=\"right\"></div>\n  <div class=\"clearfix\"></div>\n</div>"
        }
      ]
    },
    {
      "title": "单伪元素法",
      "trail": [
        "day06-Flex布局",
        "02-浮动",
        "清除浮动",
        "单伪元素法"
      ],
      "level": 4,
      "line": 200,
      "blocks": [
        {
          "type": "text",
          "text": "1. 准备 after 伪元素"
        },
        {
          "type": "code",
          "language": "css",
          "text": ".clearfix::after {\n  content: '';\n  display: block;\n  clear: both;\n}"
        },
        {
          "type": "text",
          "text": "2. 父级使用 clearfix 类"
        },
        {
          "type": "code",
          "language": "html",
          "text": "<div class=\"father clearfix\"></div>"
        }
      ]
    },
    {
      "title": "双伪元素法",
      "trail": [
        "day06-Flex布局",
        "02-浮动",
        "清除浮动",
        "双伪元素法"
      ],
      "level": 4,
      "line": 218,
      "blocks": [
        {
          "type": "text",
          "text": "1. 准备 after 和 before 伪元素"
        },
        {
          "type": "code",
          "language": "css",
          "text": "/* before 解决外边距塌陷问题 */\n/* 双伪元素法 */\n.clearfix::before,\n.clearfix::after {\n  content: '';\n  display: table;\n}\n\n/* after 清除浮动 */\n.clearfix::after {\n  clear: both;\n}"
        },
        {
          "type": "text",
          "text": "2. 父级使用 clearfix 类"
        },
        {
          "type": "code",
          "language": "html",
          "text": "<div class=\"father clearfix\"></div>"
        }
      ]
    },
    {
      "title": "overfow法",
      "trail": [
        "day06-Flex布局",
        "02-浮动",
        "清除浮动",
        "overfow法"
      ],
      "level": 4,
      "line": 243,
      "blocks": [
        {
          "type": "code",
          "language": "css",
          "text": ".father {\n  margin: 10px auto;\n  width: 1200px;\n  /* height: 300px; */\n  background-color: pink;\n\n  overflow: hidden;\n}"
        }
      ]
    },
    {
      "title": "03-Flex布局",
      "trail": [
        "day06-Flex布局",
        "03-Flex布局"
      ],
      "level": 2,
      "line": 256,
      "blocks": [
        {
          "type": "text",
          "text": "Flex 布局也叫**弹性布局**，是浏览器**提倡的布局模型**，非常适合**结构化**布局，提供了强大的空间分布和对齐能力。\n\nFlex 模型不会产生浮动布局中脱标现象，布局网页更简单、更灵活。\n\n[课程配图见原资料]"
        }
      ]
    },
    {
      "title": "Flex组成",
      "trail": [
        "day06-Flex布局",
        "03-Flex布局",
        "Flex组成"
      ],
      "level": 3,
      "line": 264,
      "blocks": [
        {
          "type": "text",
          "text": "设置方式：给**父**元素设置 **display: flex**，子元素可以自动挤压或拉伸\n\n组成部分：\n\n* 弹性容器\n* 弹性盒子\n* 主轴：默认在**水平**方向\n* 侧轴 / 交叉轴：默认在**垂直**方向\n\n[课程配图见原资料]"
        }
      ]
    },
    {
      "title": "主轴对齐方式",
      "trail": [
        "day06-Flex布局",
        "03-Flex布局",
        "主轴对齐方式"
      ],
      "level": 3,
      "line": 277,
      "blocks": [
        {
          "type": "text",
          "text": "属性名：**justify-content**\n\n[课程配图见原资料]"
        }
      ]
    },
    {
      "title": "侧轴对齐方式",
      "trail": [
        "day06-Flex布局",
        "03-Flex布局",
        "侧轴对齐方式"
      ],
      "level": 3,
      "line": 283,
      "blocks": [
        {
          "type": "text",
          "text": "* align-items：当前弹性容器内**所有**弹性盒子的侧轴对齐方式（给**弹性容器**设置）\n* align-self：单独控制**某个弹性盒子**的侧轴对齐方式（给**弹性盒子**设置）\n\n[课程配图见原资料]"
        }
      ]
    },
    {
      "title": "修改主轴方向",
      "trail": [
        "day06-Flex布局",
        "03-Flex布局",
        "修改主轴方向"
      ],
      "level": 3,
      "line": 290,
      "blocks": [
        {
          "type": "text",
          "text": "**主轴默认在水平方向，侧轴默认在垂直方向**\n\n属性名：**flex-direction**\n\n[课程配图见原资料]"
        }
      ]
    },
    {
      "title": "弹性伸缩比",
      "trail": [
        "day06-Flex布局",
        "03-Flex布局",
        "弹性伸缩比"
      ],
      "level": 3,
      "line": 298,
      "blocks": [
        {
          "type": "text",
          "text": "作用：控制弹性盒子的主轴方向的尺寸。\n\n属性名：**flex**\n\n属性值：整数数字，表示占用**父级剩余尺寸的份数**。"
        }
      ]
    },
    {
      "title": "弹性盒子换行",
      "trail": [
        "day06-Flex布局",
        "03-Flex布局",
        "弹性盒子换行"
      ],
      "level": 3,
      "line": 306,
      "blocks": [
        {
          "type": "text",
          "text": "弹性盒子可以自动挤压或拉伸，默认情况下，所有弹性盒子都在一行显示。\n\n属性名：**flex-wrap**\n\n属性值\n\n* wrap：换行\n* nowrap：不换行（默认）"
        }
      ]
    },
    {
      "title": "行内对齐方式",
      "trail": [
        "day06-Flex布局",
        "03-Flex布局",
        "行内对齐方式"
      ],
      "level": 3,
      "line": 317,
      "blocks": [
        {
          "type": "text",
          "text": "属性名：**align-content** \n\n[课程配图见原资料]\n\n> 注意：该属性对**单行**弹性盒子模型**无效**。"
        }
      ]
    },
    {
      "title": "04-综合案例 – 抖音解决方案",
      "trail": [
        "day06-Flex布局",
        "04-综合案例 – 抖音解决方案"
      ],
      "level": 2,
      "line": 325,
      "blocks": [
        {
          "type": "text",
          "text": "[课程配图见原资料]"
        }
      ]
    },
    {
      "title": "整体布局",
      "trail": [
        "day06-Flex布局",
        "04-综合案例 – 抖音解决方案",
        "整体布局"
      ],
      "level": 3,
      "line": 329,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<style>\n  * {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n  }\n\n  li {\n    list-style: none;\n  }\n\n  .box {\n    margin: 50px auto;\n    width: 1200px;\n    height: 418px;\n    border: 1px solid #ddd;\n    border-radius: 10px;\n  }\n</style>\n\n<div class=\"box\"></div>"
        }
      ]
    },
    {
      "title": "列表布局",
      "trail": [
        "day06-Flex布局",
        "04-综合案例 – 抖音解决方案",
        "列表布局"
      ],
      "level": 3,
      "line": 355,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<style>\n  .box ul {\n    display: flex;\n    /* 弹性盒子换行 */\n    flex-wrap: wrap;\n    /* 调整主轴对齐方式 */\n    justify-content: space-between;\n\n    /* 调整 行对齐方式 */\n    align-content: space-between;\n\n    padding: 90px 40px 90px 60px;\n    height: 418px;\n  }\n\n  .box li {\n    display: flex;\n    width: 500px;\n    height: 88px;\n    /* background-color: pink; */\n  }\n</style>\n\n<div class=\"box\">\n  <ul>\n    <li>1</li>\n    <li>2</li>\n    <li>3</li>\n    <li>4</li>\n  </ul>\n</div>"
        }
      ]
    },
    {
      "title": "内容样式",
      "trail": [
        "day06-Flex布局",
        "04-综合案例 – 抖音解决方案",
        "内容样式"
      ],
      "level": 3,
      "line": 391,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<style>\n  .box .pic {\n    margin-right: 15px;\n  }\n\n  .box .text h4 {\n    line-height: 40px;\n    font-size: 20px;\n    font-weight: 400;\n    color: #333;\n  }\n\n  .box .text p {\n    font-size: 14px;\n    color: #666;\n  }\n</style>\n\n<ul>\n  <li>\n    <div class=\"pic\">\n      <img src=\"./images/1.svg\" alt=\"\" />\n    </div>\n    <div class=\"text\">\n      <h4>一键发布多端</h4>\n      <p>发布视频到抖音短视频、西瓜视频及今日头条</p>\n    </div>\n  </li>\n  <li>\n    <div class=\"pic\">\n      <img src=\"./images/2.svg\" alt=\"\" />\n    </div>\n    <div class=\"text\">\n      <h4>管理视频内容</h4>\n      <p>支持修改已发布稿件状态和实时查询视频审核状态</p>\n    </div>\n  </li>\n  <li>\n    <div class=\"pic\">\n      <img src=\"./images/3.svg\" alt=\"\" />\n    </div>\n    <div class=\"text\">\n      <h4>发布携带组件</h4>\n      <p>支持分享内容携带小程序、地理位置信息等组件，扩展内容及突出地域性</p>\n    </div>\n  </li>\n  <li>\n    <div class=\"pic\">\n      <img src=\"./images/4.svg\" alt=\"\" />\n    </div>\n    <div class=\"text\">\n      <h4>数据评估分析</h4>\n      <p>获取视频在对应产品内的数据表现、获取抖音热点，及时进行表现评估</p>\n    </div>\n  </li>\n</ul>"
        }
      ]
    }
  ]
};
