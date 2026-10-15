window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["32bb786fac55ba253eeb"] = {
  "id": "32bb786fac55ba253eeb",
  "title": "day04-CSS进阶.md",
  "treatment": "章节知识与练习",
  "sections": [
    {
      "title": "day04-CSS进阶",
      "trail": [
        "day04-CSS进阶"
      ],
      "level": 1,
      "line": 1,
      "blocks": [
        {
          "type": "text",
          "text": "> 目标：掌握复合选择器作用和写法；使用background属性添加背景效果"
        }
      ]
    },
    {
      "title": "01-复合选择器",
      "trail": [
        "day04-CSS进阶",
        "01-复合选择器"
      ],
      "level": 2,
      "line": 5,
      "blocks": [
        {
          "type": "text",
          "text": "定义：由两个或多个基础选择器，通过不同的方式组合而成。\n\n作用：更准确、更高效的选择目标元素（标签）。"
        }
      ]
    },
    {
      "title": "后代选择器",
      "trail": [
        "day04-CSS进阶",
        "01-复合选择器",
        "后代选择器"
      ],
      "level": 3,
      "line": 11,
      "blocks": [
        {
          "type": "text",
          "text": "后代选择器：**选中某元素的后代元素**。\n\n选择器写法：父选择器  子选择器 { CSS 属性}，父子选择器之间用**空格**隔开。"
        },
        {
          "type": "code",
          "language": "html",
          "text": "<style>\n    div span {\n      color: red;\n    }\n</style>\n\n<span>span 标签</span>\n<div>\n   \n  <span>这是 div 的儿子 span</span>\n</div>"
        }
      ]
    },
    {
      "title": "子代选择器",
      "trail": [
        "day04-CSS进阶",
        "01-复合选择器",
        "子代选择器"
      ],
      "level": 3,
      "line": 30,
      "blocks": [
        {
          "type": "text",
          "text": "子代选择器：选中某元素的子代元素（**最近的子级**）。\n\n选择器写法：父选择器 > 子选择器 { CSS 属性}，父子选择器之间用 **>** 隔开。"
        },
        {
          "type": "code",
          "language": "html",
          "text": "<style>\n    div > span {\n      color: red;\n    }\n</style>\n\n<div>\n   \n  <span>这是 div 里面的 span</span>\n   \n  <p>\n       \n    <span>这是 div 里面的 p 里面的 span</span>\n     \n  </p>\n</div>"
        }
      ]
    },
    {
      "title": "并集选择器",
      "trail": [
        "day04-CSS进阶",
        "01-复合选择器",
        "并集选择器"
      ],
      "level": 3,
      "line": 52,
      "blocks": [
        {
          "type": "text",
          "text": "并集选择器：选中**多组标签**设置**相同**的样式。\n\n选择器写法：选择器1, 选择器2, …, 选择器N { CSS 属性}，选择器之间用 **,** 隔开。"
        },
        {
          "type": "code",
          "language": "html",
          "text": "<style>\n    div,\n    p,\n    span {\n      color: red;\n    }\n</style>\n\n<div>div 标签</div>\n<p>p 标签</p>\n<span>span 标签</span>"
        }
      ]
    },
    {
      "title": "交集选择器",
      "trail": [
        "day04-CSS进阶",
        "01-复合选择器",
        "交集选择器"
      ],
      "level": 3,
      "line": 72,
      "blocks": [
        {
          "type": "text",
          "text": "交集选择器：选中**同时满足多个条件**的元素。\n\n选择器写法：选择器1选择器2 { CSS 属性}，选择器之间连写，没有任何符号。"
        },
        {
          "type": "code",
          "language": "html",
          "text": "<style>\n    p.box {\n    color: red;\n  }\n</style>\n\n<p class=\"box\">p 标签，使用了类选择器 box</p>\n<p>p 标签</p>\n<div class=\"box\">div 标签，使用了类选择器 box</div>"
        },
        {
          "type": "text",
          "text": "> 注意：如果交集选择器中有标签选择器，标签选择器必须书写在最前面。"
        }
      ]
    },
    {
      "title": "伪类选择器",
      "trail": [
        "day04-CSS进阶",
        "01-复合选择器",
        "伪类选择器"
      ],
      "level": 3,
      "line": 92,
      "blocks": [
        {
          "type": "text",
          "text": "伪类选择器：伪类表示元素**状态**，选中元素的某个状态设置样式。\n\n鼠标悬停状态：**选择器:hover { CSS 属性 }**"
        },
        {
          "type": "code",
          "language": "html",
          "text": "<style>\n    a:hover {\n      color: red;\n    }\n    .box:hover {\n      color: green;\n    }\n</style>\n\n<a href=\"#\">a 标签</a>\n<div class=\"box\">div 标签</div>"
        }
      ]
    },
    {
      "title": "超链接伪类",
      "trail": [
        "day04-CSS进阶",
        "01-复合选择器",
        "伪类选择器",
        "超链接伪类"
      ],
      "level": 4,
      "line": 112,
      "blocks": [
        {
          "type": "text",
          "text": "[课程配图见原资料]\n\n> 提示：如果要给超链接设置以上四个状态，需要按 LVHA 的顺序书写。 \n>\n> 经验：工作中，一个 a 标签选择器设置超链接的样式， hover状态特殊设置"
        },
        {
          "type": "code",
          "language": "css",
          "text": "a {\n  color: red;\n}\n\na:hover {\n  color: green;\n}"
        }
      ]
    },
    {
      "title": "02-CSS特性",
      "trail": [
        "day04-CSS进阶",
        "02-CSS特性"
      ],
      "level": 2,
      "line": 130,
      "blocks": [
        {
          "type": "text",
          "text": "CSS特性：化简代码 / 定位问题，并解决问题\n\n* 继承性\n* 层叠性\n* 优先级"
        }
      ]
    },
    {
      "title": "继承性",
      "trail": [
        "day04-CSS进阶",
        "02-CSS特性",
        "继承性"
      ],
      "level": 3,
      "line": 138,
      "blocks": [
        {
          "type": "text",
          "text": "继承性：子级默认继承父级的**文字控制属性**。 \n\n[课程配图见原资料]\n\n> 注意：如果标签有默认文字样式会继承失败。 例如：a 标签的颜色、标题的字体大小。"
        }
      ]
    },
    {
      "title": "层叠性",
      "trail": [
        "day04-CSS进阶",
        "02-CSS特性",
        "层叠性"
      ],
      "level": 3,
      "line": 146,
      "blocks": [
        {
          "type": "text",
          "text": "特点：\n\n* 相同的属性会覆盖：**后面的 CSS 属性覆盖前面的 CSS 属性**\n* 不同的属性会叠加：**不同的 CSS 属性都生效**"
        },
        {
          "type": "code",
          "language": "html",
          "text": "<style>\n    div {\n      color: red;\n      font-weight: 700;\n    }\n    div {\n      color: green;\n      font-size: 30px;\n    }\n</style>\n\n<div>div 标签</div>"
        },
        {
          "type": "text",
          "text": "> 注意：选择器类型相同则遵循层叠性，否则按选择器优先级判断。"
        }
      ]
    },
    {
      "title": "优先级",
      "trail": [
        "day04-CSS进阶",
        "02-CSS特性",
        "优先级"
      ],
      "level": 3,
      "line": 170,
      "blocks": [
        {
          "type": "text",
          "text": "优先级：也叫权重，当一个标签**使用了多种选择器时**，基于不同种类的选择器的**匹配规则**。"
        },
        {
          "type": "code",
          "language": "html",
          "text": "<style>\n    div {\n      color: red;\n    }\n    .box {\n      color: green;\n    }\n</style>\n\n<div class=\"box\">div 标签</div>"
        }
      ]
    },
    {
      "title": "基础选择器",
      "trail": [
        "day04-CSS进阶",
        "02-CSS特性",
        "优先级",
        "基础选择器"
      ],
      "level": 4,
      "line": 187,
      "blocks": [
        {
          "type": "text",
          "text": "规则：选择器**优先级高的样式生效**。\n\n公式：**通配符选择器 < 标签选择器 < 类选择器 < id选择器 < 行内样式 < !important**\n\n​           **（选中标签的范围越大，优先级越低）**"
        }
      ]
    },
    {
      "title": "复合选择器-叠加",
      "trail": [
        "day04-CSS进阶",
        "02-CSS特性",
        "优先级",
        "复合选择器-叠加"
      ],
      "level": 4,
      "line": 195,
      "blocks": [
        {
          "type": "text",
          "text": "叠加计算：如果是复合选择器，则需要**权重叠加**计算。\n\n公式：（每一级之间不存在进位）\n\n[课程配图见原资料]\n\n规则：\n\n* 从左向右依次比较选个数，同一级个数多的优先级高，如果个数相同，则向后比较\n* **!important 权重最高**\n* 继承权重最低"
        }
      ]
    },
    {
      "title": "03-Emmet 写法",
      "trail": [
        "day04-CSS进阶",
        "03-Emmet 写法"
      ],
      "level": 2,
      "line": 209,
      "blocks": [
        {
          "type": "text",
          "text": "Emmet写法：代码的**简写**方式，输入缩写 VS Code 会自动生成对应的代码。 \n\n* HTML标签\n\n[课程配图见原资料]\n\n* CSS：大多数简写方式为属性单词的**首字母** \n\n[课程配图见原资料]"
        }
      ]
    },
    {
      "title": "04-背景属性",
      "trail": [
        "day04-CSS进阶",
        "04-背景属性"
      ],
      "level": 2,
      "line": 221,
      "blocks": [
        {
          "type": "text",
          "text": "[课程配图见原资料]"
        }
      ]
    },
    {
      "title": "背景图",
      "trail": [
        "day04-CSS进阶",
        "04-背景属性",
        "背景图"
      ],
      "level": 3,
      "line": 225,
      "blocks": [
        {
          "type": "text",
          "text": "网页中，使用背景图实现装饰性的图片效果。\n\n* 属性名：**background-image**（bgi）\n* 属性值：url(背景图 URL)"
        },
        {
          "type": "code",
          "language": "css",
          "text": "div {\n  width: 400px;\n  height: 400px;\n\n  background-image: url(./images/1.png);\n}",
          "note": "原资料中含排错代码或不完整片段，保留错误供分析；不会自动执行。"
        },
        {
          "type": "text",
          "text": "> 提示：背景图默认有**平铺（复制）效果**。"
        }
      ]
    },
    {
      "title": "平铺方式",
      "trail": [
        "day04-CSS进阶",
        "04-背景属性",
        "平铺方式"
      ],
      "level": 3,
      "line": 243,
      "blocks": [
        {
          "type": "text",
          "text": "属性名：**background-repeat**（bgr） \n\n[课程配图见原资料]"
        },
        {
          "type": "code",
          "language": "css",
          "text": "div {\n  width: 400px;\n  height: 400px;\n  background-color: pink;\n  background-image: url(./images/1.png);\n\n  background-repeat: no-repeat;\n}",
          "note": "原资料中含排错代码或不完整片段，保留错误供分析；不会自动执行。"
        }
      ]
    },
    {
      "title": "背景图位置",
      "trail": [
        "day04-CSS进阶",
        "04-背景属性",
        "背景图位置"
      ],
      "level": 3,
      "line": 260,
      "blocks": [
        {
          "type": "text",
          "text": "属性名：**background-position**（bgp）\n\n属性值：水平方向位置 垂直方向位置\n\n* 关键字\n\n[课程配图见原资料]\n\n* 坐标\n  * 水平：正数向右；负数向左\n  * 垂直：正数向下；负数向上"
        },
        {
          "type": "code",
          "language": "css",
          "text": "div {\n  width: 400px;\n  height: 400px;\n  background-color: pink;\n  background-image: url(./images/1.png);\n  background-repeat: no-repeat;\n\n  background-position: center bottom;\n  background-position: 50px -100px;\n  background-position: 50px center;\n}",
          "note": "原资料中含排错代码或不完整片段，保留错误供分析；不会自动执行。"
        },
        {
          "type": "text",
          "text": "> 提示：\n>\n> * 关键字取值方式写法，可以颠倒取值顺序\n> * 可以只写一个关键字，另一个方向默认为居中；数字只写一个值表示水平方向，垂直方向为居中"
        }
      ]
    },
    {
      "title": "背景图缩放",
      "trail": [
        "day04-CSS进阶",
        "04-背景属性",
        "背景图缩放"
      ],
      "level": 3,
      "line": 293,
      "blocks": [
        {
          "type": "text",
          "text": "作用：设置背景图大小\n\n属性名：**background-size**（bgz）\n\n常用属性值：\n\n* 关键字\n  *  cover：等比例缩放背景图片以完全覆盖背景区，可能背景图片部分看不见\n  * contain：等比例缩放背景图片以完全装入背景区，可能背景区部分空白\n\n* 百分比：根据盒子尺寸计算图片大小\n* 数字 + 单位（例如：px）"
        },
        {
          "type": "code",
          "language": "css",
          "text": "div {\n  width: 500px;\n  height: 400px;\n  background-color: pink;\n  background-image: url(./images/1.png);\n  background-repeat: no-repeat;\n  \n  background-size: cover;\n  background-size: contain;\n}",
          "note": "原资料中含排错代码或不完整片段，保留错误供分析；不会自动执行。"
        },
        {
          "type": "text",
          "text": "> 提示：工作中，**图片比例与盒子比例相同**，使用 cover 或 contain 缩放背景图效果相同。"
        }
      ]
    },
    {
      "title": "背景图固定",
      "trail": [
        "day04-CSS进阶",
        "04-背景属性",
        "背景图固定"
      ],
      "level": 3,
      "line": 323,
      "blocks": [
        {
          "type": "text",
          "text": "作用：背景不会随着元素的内容滚动。\n\n属性名：**background-attachment**（bga）\n\n属性值：**fixed**"
        },
        {
          "type": "code",
          "language": "css",
          "text": "body {\n  background-image: url(./images/bg.jpg);\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n}",
          "note": "原资料中含排错代码或不完整片段，保留错误供分析；不会自动执行。"
        }
      ]
    },
    {
      "title": "背景复合属性",
      "trail": [
        "day04-CSS进阶",
        "04-背景属性",
        "背景复合属性"
      ],
      "level": 3,
      "line": 339,
      "blocks": [
        {
          "type": "text",
          "text": "属性名：**background**（bg）\n\n属性值：背景色 背景图 背景图平铺方式 背景图位置/背景图缩放  背景图固定（**空格隔开各个属性值，不区分顺序**）"
        },
        {
          "type": "code",
          "language": "css",
          "text": "div {\n  width: 400px;\n  height: 400px;\n\n  background: pink url(./images/1.png) no-repeat right center/cover;\n}",
          "note": "原资料中含排错代码或不完整片段，保留错误供分析；不会自动执行。"
        }
      ]
    },
    {
      "title": "05-显示模式",
      "trail": [
        "day04-CSS进阶",
        "05-显示模式"
      ],
      "level": 2,
      "line": 354,
      "blocks": [
        {
          "type": "text",
          "text": "显示模式：标签（元素）的显示方式。 \n\n[课程配图见原资料]\n\n作用：布局网页的时候，根据标签的显示模式选择合适的标签摆放内容。"
        }
      ]
    },
    {
      "title": "块级元素",
      "trail": [
        "day04-CSS进阶",
        "05-显示模式",
        "块级元素"
      ],
      "level": 3,
      "line": 362,
      "blocks": [
        {
          "type": "text",
          "text": "特点：\n\n* 独占一行\n* 宽度默认是父级的100%\n* 添加宽高属性生效\n\n[课程配图见原资料]"
        }
      ]
    },
    {
      "title": "行内元素",
      "trail": [
        "day04-CSS进阶",
        "05-显示模式",
        "行内元素"
      ],
      "level": 3,
      "line": 372,
      "blocks": [
        {
          "type": "text",
          "text": "特点：\n\n* 一行可以显示多个\n* 设置宽高属性不生效\n* 宽高尺寸由内容撑开\n\n[课程配图见原资料]"
        }
      ]
    },
    {
      "title": "行内块元素",
      "trail": [
        "day04-CSS进阶",
        "05-显示模式",
        "行内块元素"
      ],
      "level": 3,
      "line": 382,
      "blocks": [
        {
          "type": "text",
          "text": "特点：\n\n* 一行可以显示多个\n* 设置宽高属性生效\n* 宽高尺寸也可以由内容撑开\n\n[课程配图见原资料]"
        }
      ]
    },
    {
      "title": "转换显示模式",
      "trail": [
        "day04-CSS进阶",
        "05-显示模式",
        "转换显示模式"
      ],
      "level": 3,
      "line": 392,
      "blocks": [
        {
          "type": "text",
          "text": "属性：**display**\n\n[课程配图见原资料]"
        }
      ]
    },
    {
      "title": "06-综合案例一-热词",
      "trail": [
        "day04-CSS进阶",
        "06-综合案例一-热词"
      ],
      "level": 2,
      "line": 400,
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
        "day04-CSS进阶",
        "06-综合案例一-热词",
        "HTML标签"
      ],
      "level": 3,
      "line": 404,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<a href=\"#\">HTML</a>\n<a href=\"#\">CSS</a>\n<a href=\"#\">JavaScript</a>\n<a href=\"#\">Vue</a>\n<a href=\"#\">React</a>"
        }
      ]
    },
    {
      "title": "CSS样式",
      "trail": [
        "day04-CSS进阶",
        "06-综合案例一-热词",
        "CSS样式"
      ],
      "level": 3,
      "line": 414,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<style>\n  /* 默认效果 */\n  a {\n    display: block;\n    width: 200px;\n    height: 80px;\n    background-color: #3064bb;\n    color: #fff;\n    text-decoration: none;\n    text-align: center;\n    line-height: 80px;\n    font-size: 18px;\n  }\n\n  /* 鼠标悬停的效果 */\n  a:hover {\n    background-color: #608dd9;\n  }\n</style>"
        }
      ]
    },
    {
      "title": "07-综合案例二 – banner 效果",
      "trail": [
        "day04-CSS进阶",
        "07-综合案例二 – banner 效果"
      ],
      "level": 2,
      "line": 438,
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
        "day04-CSS进阶",
        "07-综合案例二 – banner 效果",
        "HTML标签"
      ],
      "level": 3,
      "line": 442,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<div class=\"banner\">\n  <h2>让创造产生价值</h2>\n  <p>\n    我们希望小游戏平台可以提供无限的可能性，让每一个创作者都可以将他们的才华和创意传递给用户。\n  </p>\n  <a href=\"#\">我要报名</a>\n</div>"
        }
      ]
    },
    {
      "title": "CSS样式",
      "trail": [
        "day04-CSS进阶",
        "07-综合案例二 – banner 效果",
        "CSS样式"
      ],
      "level": 3,
      "line": 454,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<style>\n  .banner {\n    height: 500px;\n    background-color: #f3f3f4;\n    background-image: url(./images/bk.png);\n    background-repeat: no-repeat;\n    background-position: left bottom;\n\n    /* 文字控制属性，继承给子级 */\n    text-align: right;\n    color: #333;\n  }\n\n  .banner h2 {\n    font-size: 36px;\n    font-weight: 400;\n    line-height: 100px;\n  }\n\n  .banner p {\n    font-size: 20px;\n  }\n\n  .banner a {\n    width: 125px;\n    height: 40px;\n    background-color: #f06b1f;\n\n    display: inline-block;\n    /* 转块级无法右对齐，因为块元素独占一行 */\n    /* display: block; */\n\n    text-align: center;\n    line-height: 40px;\n    color: #fff;\n    text-decoration: none;\n    font-size: 20px;\n  }\n</style>"
        }
      ]
    }
  ]
};
