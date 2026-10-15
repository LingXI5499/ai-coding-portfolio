window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["ee42d23d9186ba72ecbc"] = {
  "id": "ee42d23d9186ba72ecbc",
  "title": "day05-盒子模型.md",
  "treatment": "章节知识与练习",
  "sections": [
    {
      "title": "day05-盒子模型",
      "trail": [
        "day05-盒子模型"
      ],
      "level": 1,
      "line": 1,
      "blocks": [
        {
          "type": "text",
          "text": "> 目标：掌握盒子模型组成部分，使用盒子模型布局网页区域"
        }
      ]
    },
    {
      "title": "基本使用",
      "trail": [
        "day05-盒子模型",
        "01-选择器",
        "基本使用"
      ],
      "level": 3,
      "line": 9,
      "blocks": [
        {
          "type": "text",
          "text": "作用：根据元素的**结构关系**查找元素。 \n\n[课程配图见原资料]"
        },
        {
          "type": "code",
          "language": "css",
          "text": "li:first-child {\n  background-color: green;\n}",
          "note": "原资料中含排错代码或不完整片段，保留错误供分析；不会自动执行。"
        }
      ]
    },
    {
      "title": ":nth-child(公式)",
      "trail": [
        "day05-盒子模型",
        "01-选择器",
        ":nth-child(公式)"
      ],
      "level": 3,
      "line": 21,
      "blocks": [
        {
          "type": "text",
          "text": "[课程配图见原资料]\n\n> 提示：公式中的n取值从 **0** 开始。"
        }
      ]
    },
    {
      "title": "伪元素选择器",
      "trail": [
        "day05-盒子模型",
        "01-选择器",
        "伪元素选择器"
      ],
      "level": 3,
      "line": 27,
      "blocks": [
        {
          "type": "text",
          "text": "作用：创建**虚拟元素**（伪元素），用来**摆放装饰性的内容**。 \n\n[课程配图见原资料]\n\n[课程配图见原资料]"
        },
        {
          "type": "code",
          "language": "css",
          "text": "div::before {\n  content: \"before 伪元素\";\n}\ndiv::after {\n  content: \"after 伪元素\";\n}",
          "note": "原资料中含排错代码或不完整片段，保留错误供分析；不会自动执行。"
        },
        {
          "type": "text",
          "text": "注意点：\n\n* 必须设置 **content: ””属性**，用来 设置伪元素的内容，如果没有内容，则**引号留空**即可\n* 伪元素默认是**行内**显示模式\n* **权重和标签选择器相同**"
        }
      ]
    },
    {
      "title": "02-PxCook",
      "trail": [
        "day05-盒子模型",
        "02-PxCook"
      ],
      "level": 2,
      "line": 50,
      "blocks": [
        {
          "type": "text",
          "text": "PxCook（像素大厨） 是一款切图设计工具软件。支持PSD文件的文字、颜色、距离自动智能识别。\n\n* 开发面板（自动智能识别）\n* 设计面板（手动测量尺寸和颜色）\n\n使用方法：创建项目 → 输入 项目名称、项目类型 Web → 单击按钮【创建项目】 → 单击按钮【添加】，导入设计稿 \n\n[课程配图见原资料]"
        }
      ]
    },
    {
      "title": "03-盒子模型",
      "trail": [
        "day05-盒子模型",
        "03-盒子模型"
      ],
      "level": 2,
      "line": 61,
      "blocks": [
        {
          "type": "text",
          "text": "作用：布局网页，摆放盒子和内容。"
        }
      ]
    },
    {
      "title": "盒子模型-组成",
      "trail": [
        "day05-盒子模型",
        "03-盒子模型",
        "盒子模型-组成"
      ],
      "level": 3,
      "line": 65,
      "blocks": [
        {
          "type": "text",
          "text": "* 内容区域 – width & height\n* 内边距 – padding（出现在内容与盒子边缘之间）\n* 边框线 – border \n* 外边距 – margin（出现在盒子外面）"
        },
        {
          "type": "code",
          "language": "css",
          "text": "div {\n  margin: 50px;\n  border: 5px solid brown;\n  padding: 20px;\n  width: 200px;\n  height: 200px;\n  background-color: pink;\n}",
          "note": "原资料中含排错代码或不完整片段，保留错误供分析；不会自动执行。"
        },
        {
          "type": "text",
          "text": "[课程配图见原资料]\n\n[课程配图见原资料]"
        }
      ]
    },
    {
      "title": "四个方向",
      "trail": [
        "day05-盒子模型",
        "03-盒子模型",
        "边框线",
        "四个方向"
      ],
      "level": 4,
      "line": 91,
      "blocks": [
        {
          "type": "text",
          "text": "属性名：**border**（bd）\n\n属性值：边框线粗细  线条样式  颜色（不区分顺序）\n\n[课程配图见原资料]"
        },
        {
          "type": "code",
          "language": "css",
          "text": "div {\n  border: 5px solid brown;\n  width: 200px;\n  height: 200px;\n  background-color: pink;\n}",
          "note": "原资料中含排错代码或不完整片段，保留错误供分析；不会自动执行。"
        }
      ]
    },
    {
      "title": "单方向边框线",
      "trail": [
        "day05-盒子模型",
        "03-盒子模型",
        "边框线",
        "单方向边框线"
      ],
      "level": 4,
      "line": 108,
      "blocks": [
        {
          "type": "text",
          "text": "属性名：**border-方位名词**（bd+方位名词首字母，例如，bdl）\n\n属性值：边框线粗细  线条样式  颜色（不区分顺序）"
        },
        {
          "type": "code",
          "language": "css",
          "text": "div {\n  border-top: 2px solid red;\n  border-right: 3px dashed green;\n  border-bottom: 4px dotted blue;\n  border-left: 5px solid orange;\n  width: 200px;\n  height: 200px;\n  background-color: pink;\n}",
          "note": "原资料中含排错代码或不完整片段，保留错误供分析；不会自动执行。"
        }
      ]
    },
    {
      "title": "内边距",
      "trail": [
        "day05-盒子模型",
        "03-盒子模型",
        "内边距"
      ],
      "level": 3,
      "line": 126,
      "blocks": [
        {
          "type": "text",
          "text": "作用：设置 内容 与 盒子边缘 之间的距离。\n\n* 属性名：padding / padding-方位名词"
        },
        {
          "type": "code",
          "language": "css",
          "text": "div {\n  /* 四个方向 内边距相同 */\n  padding: 30px;\n  /* 单独设置一个方向内边距 */\n  padding-top: 10px;\n  padding-right: 20px;\n  padding-bottom: 40px;\n  padding-left: 80px;\n  width: 200px;\n  height: 200px;\n  background-color: pink;\n}",
          "note": "原资料中含排错代码或不完整片段，保留错误供分析；不会自动执行。"
        },
        {
          "type": "text",
          "text": "> 提示：添加 padding 会撑大盒子。\n\n* padding 多值写法\n\n[课程配图见原资料]\n\n> 技巧：从**上**开始**顺时针**赋值，当前方向没有数值则与**对面取值相同**。"
        }
      ]
    },
    {
      "title": "尺寸计算",
      "trail": [
        "day05-盒子模型",
        "03-盒子模型",
        "尺寸计算"
      ],
      "level": 3,
      "line": 155,
      "blocks": [
        {
          "type": "text",
          "text": "[课程配图见原资料]\n\n默认情况：盒子尺寸 = 内容尺寸 + border 尺寸 + 内边距尺寸\n\n结论：给盒子加 border / padding 会撑大盒子\n\n解决：\n\n* 手动做减法，减掉 border / padding 的尺寸\n* 內减模式：**box-sizing: border-box**"
        }
      ]
    },
    {
      "title": "外边距",
      "trail": [
        "day05-盒子模型",
        "03-盒子模型",
        "外边距"
      ],
      "level": 3,
      "line": 168,
      "blocks": [
        {
          "type": "text",
          "text": "作用：拉开两个盒子之间的距离\n\n属性名：**margin**\n\n提示：与 padding 属性值写法、含义相同"
        }
      ]
    },
    {
      "title": "版心居中",
      "trail": [
        "day05-盒子模型",
        "03-盒子模型",
        "版心居中"
      ],
      "level": 3,
      "line": 176,
      "blocks": [
        {
          "type": "text",
          "text": "[课程配图见原资料]\n\n左右 margin 值 为 auto（盒子要有宽度）"
        },
        {
          "type": "code",
          "language": "css",
          "text": "div {\n  margin: 0 auto;\n  width: 1000px;\n  height: 200px;\n  background-color: pink;\n}",
          "note": "原资料中含排错代码或不完整片段，保留错误供分析；不会自动执行。"
        }
      ]
    },
    {
      "title": "清除默认样式",
      "trail": [
        "day05-盒子模型",
        "03-盒子模型",
        "清除默认样式"
      ],
      "level": 3,
      "line": 191,
      "blocks": [
        {
          "type": "text",
          "text": "[课程配图见原资料]\n\n清除标签默认的样式，比如：默认的内外边距。 \n\n[课程配图见原资料]"
        },
        {
          "type": "code",
          "language": "css",
          "text": "/* 清除默认内外边距 */\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n/* 清除列表项目符号 */\nli {\n  list-style: none;\n}",
          "note": "原资料中含排错代码或不完整片段，保留错误供分析；不会自动执行。"
        }
      ]
    },
    {
      "title": "元素溢出",
      "trail": [
        "day05-盒子模型",
        "03-盒子模型",
        "元素溢出"
      ],
      "level": 3,
      "line": 212,
      "blocks": [
        {
          "type": "text",
          "text": "作用：控制溢出元素的内容的显示方式。\n\n属性名：**overflow**\n\n[课程配图见原资料]"
        }
      ]
    },
    {
      "title": "合并现象",
      "trail": [
        "day05-盒子模型",
        "03-盒子模型",
        "外边距问题",
        "合并现象"
      ],
      "level": 4,
      "line": 222,
      "blocks": [
        {
          "type": "text",
          "text": "场景：**垂直**排列的兄弟元素，上下 **margin** 会**合并**\n\n现象：取两个 margin 中的**较大值生效**\n\n[课程配图见原资料]"
        },
        {
          "type": "code",
          "language": "css",
          "text": ".one {\n  margin-bottom: 50px;\n}\n.two {\n  margin-top: 20px;\n}",
          "note": "原资料中含排错代码或不完整片段，保留错误供分析；不会自动执行。"
        }
      ]
    },
    {
      "title": "外边距塌陷",
      "trail": [
        "day05-盒子模型",
        "03-盒子模型",
        "外边距问题",
        "外边距塌陷"
      ],
      "level": 4,
      "line": 239,
      "blocks": [
        {
          "type": "text",
          "text": "场景：父子级的标签，子级的添加 **上外边距** 会产生**塌陷**问题\n\n现象：**导致父级一起向下移动**"
        },
        {
          "type": "code",
          "language": "css",
          "text": ".son {\n  margin-top: 50px;\n  width: 100px;\n  height: 100px;\n  background-color: orange;\n}",
          "note": "原资料中含排错代码或不完整片段，保留错误供分析；不会自动执行。"
        },
        {
          "type": "text",
          "text": "[课程配图见原资料]\n\n解决方法：\n\n* 取消子级margin，父级设置padding\n* 父级设置 overflow: hidden\n* 父级设置 border-top"
        }
      ]
    },
    {
      "title": "行内元素 – 内外边距问题",
      "trail": [
        "day05-盒子模型",
        "03-盒子模型",
        "行内元素 – 内外边距问题"
      ],
      "level": 3,
      "line": 262,
      "blocks": [
        {
          "type": "text",
          "text": "场景：行内元素添加 margin 和 padding，无法改变元素垂直位置\n\n解决方法：给行内元素添加 **line-height** 可以改变垂直位置"
        },
        {
          "type": "code",
          "language": "css",
          "text": "span {\n  /* margin 和 padding 属性，无法改变垂直位置 */\n  margin: 50px;\n  padding: 20px;\n  /* 行高可以改变垂直位置 */\n  line-height: 100px;\n}",
          "note": "原资料中含排错代码或不完整片段，保留错误供分析；不会自动执行。"
        }
      ]
    },
    {
      "title": "圆角",
      "trail": [
        "day05-盒子模型",
        "03-盒子模型",
        "圆角"
      ],
      "level": 3,
      "line": 278,
      "blocks": [
        {
          "type": "text",
          "text": "作用：设置元素的外边框为圆角。\n\n属性名：**border-radius**\n\n属性值：数字+px / 百分比\n\n提示：属性值是圆角半径\n\n[课程配图见原资料]\n\n\n\n* 多值写法\n\n[课程配图见原资料]\n\n> 技巧：从左上角开始顺时针赋值，当前角没有数值则与对角取值相同。 \n\n* 正圆形状：给正方形盒子设置圆角属性值为 **宽高的一半 / 50%**"
        },
        {
          "type": "code",
          "language": "css",
          "text": "img {\n  width: 200px;\n  height: 200px;\n  \n  border-radius: 100px;\n  border-radius: 50%;\n}",
          "note": "原资料中含排错代码或不完整片段，保留错误供分析；不会自动执行。"
        },
        {
          "type": "text",
          "text": "[课程配图见原资料]\n\n* 胶囊形状：给长方形盒子设置圆角属性值为 盒子高度的一半"
        },
        {
          "type": "code",
          "language": "css",
          "text": "div {\n  width: 200px;\n  height: 80px;\n  background-color: orange;\n  border-radius: 40px;\n}",
          "note": "原资料中含排错代码或不完整片段，保留错误供分析；不会自动执行。"
        },
        {
          "type": "text",
          "text": "[课程配图见原资料]"
        }
      ]
    },
    {
      "title": "盒子阴影（拓展）",
      "trail": [
        "day05-盒子模型",
        "03-盒子模型",
        "盒子阴影（拓展）"
      ],
      "level": 3,
      "line": 325,
      "blocks": [
        {
          "type": "text",
          "text": "作用：给元素设置阴影效果\n\n属性名：**box-shadow**\n\n属性值：X 轴偏移量  Y 轴偏移量  模糊半径  扩散半径  颜色  内外阴影\n\n注意： \n\n* X 轴偏移量 和 Y 轴偏移量 必须书写\n* 默认是外阴影，内阴影需要添加 inset"
        },
        {
          "type": "code",
          "language": "css",
          "text": "div {\n  width: 200px;\n  height: 80px;\n  background-color: orange;\n  box-shadow: 2px 5px 10px 0 rgba(0, 0, 0, 0.5) inset;\n}",
          "note": "原资料中含排错代码或不完整片段，保留错误供分析；不会自动执行。"
        }
      ]
    },
    {
      "title": "04-综合案例-产品卡片",
      "trail": [
        "day05-盒子模型",
        "04-综合案例-产品卡片"
      ],
      "level": 2,
      "line": 347,
      "blocks": [
        {
          "type": "text",
          "text": "[课程配图见原资料]\n\nCSS 书写顺序：\n\n1. 盒子模型属性\n2. 文字样式\n3. 圆角、阴影等修饰属性"
        }
      ]
    },
    {
      "title": "HTML标签",
      "trail": [
        "day05-盒子模型",
        "04-综合案例-产品卡片",
        "HTML标签"
      ],
      "level": 3,
      "line": 357,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<div class=\"product\">\n  <img src=\"./images/liveSDK.svg\" alt=\"\" />\n  <h4>抖音直播SDK</h4>\n  <p>包含抖音直播看播功能</p>\n</div>"
        }
      ]
    },
    {
      "title": "CSS样式",
      "trail": [
        "day05-盒子模型",
        "04-综合案例-产品卡片",
        "CSS样式"
      ],
      "level": 3,
      "line": 369,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<style>\n  * {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n  }\n\n  body {\n    background-color: #f1f1f1;\n  }\n\n  .product {\n    margin: 50px auto;\n    padding-top: 40px;\n\n    width: 270px;\n    height: 253px;\n    background-color: #fff;\n    text-align: center;\n\n    border-radius: 10px;\n  }\n\n  .product h4 {\n    margin-top: 20px;\n    margin-bottom: 12px;\n    font-size: 18px;\n    color: #333;\n    font-weight: 400;\n  }\n\n  .product p {\n    font-size: 12px;\n    color: #555;\n  }\n</style>"
        }
      ]
    },
    {
      "title": "05-综合案例二 – 新闻列表",
      "trail": [
        "day05-盒子模型",
        "05-综合案例二 – 新闻列表"
      ],
      "level": 2,
      "line": 410,
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
        "day05-盒子模型",
        "05-综合案例二 – 新闻列表",
        "整体布局"
      ],
      "level": 3,
      "line": 418,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<style>\n  * {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n  }\n\n  li {\n    list-style: none;\n  }\n\n  a {\n    text-decoration: none;\n  }\n\n  .news {\n    margin: 100px auto;\n    width: 360px;\n    height: 200px;\n    /* background-color: pink; */\n  }\n</style>\n\n<div class=\"news\"></div>"
        }
      ]
    },
    {
      "title": "标题区域",
      "trail": [
        "day05-盒子模型",
        "05-综合案例二 – 新闻列表",
        "标题区域"
      ],
      "level": 3,
      "line": 447,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<style>\n  .news .hd {\n    height: 34px;\n    background-color: #eee;\n    border: 1px solid #dbdee1;\n    border-left: 0;\n  }\n\n  .news .hd a {\n    /* -1 盒子向上移动 */\n    margin-top: -1px;\n    display: block;\n    border-top: 3px solid #ff8400;\n    border-right: 1px solid #dbdee1;\n    width: 48px;\n    height: 34px;\n    background-color: #fff;\n\n    text-align: center;\n    line-height: 32px;\n    font-size: 14px;\n    color: #333;\n  }\n</style>\n\n<div class=\"hd\"><a href=\"#\">新闻</a></div>"
        }
      ]
    },
    {
      "title": "内容区域",
      "trail": [
        "day05-盒子模型",
        "05-综合案例二 – 新闻列表",
        "内容区域"
      ],
      "level": 3,
      "line": 478,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<style>\n  .news .bd {\n    padding: 5px;\n  }\n\n  .news .bd li {\n    padding-left: 15px;\n    background-image: url(./images/square.png);\n    background-repeat: no-repeat;\n    background-position: 0 center;\n  }\n\n  .news .bd li a {\n    padding-left: 20px;\n    background: url(./images/img.gif) no-repeat 0 center;\n\n    font-size: 12px;\n    color: #666;\n    line-height: 24px;\n  }\n\n  .news .bd li a:hover {\n    color: #ff8400;\n  }\n</style>\n\n<div class=\"bd\">\n  <ul>\n    <li><a href=\"#\">点赞“新农人” 温暖的伸手</a></li>\n    <li><a href=\"#\">在希望的田野上...</a></li>\n    <li><a href=\"#\">“中国天眼”又有新发现 已在《自然》杂志发表</a></li>\n    <li><a href=\"#\">急！这个领域，缺人！月薪4万元还不好招！啥情况？</a></li>\n    <li><a href=\"#\">G9“带货”背后：亏损面持续扩大，竞争环境激烈</a></li>\n    <li><a href=\"#\">多地力推二手房“带押过户”，有什么好处？</a></li>\n  </ul>\n</div>"
        }
      ]
    }
  ]
};
