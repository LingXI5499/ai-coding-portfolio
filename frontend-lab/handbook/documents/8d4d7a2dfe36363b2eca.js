window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["8d4d7a2dfe36363b2eca"] = {
  "id": "8d4d7a2dfe36363b2eca",
  "title": "day03-CSS基础.md",
  "treatment": "章节知识与练习",
  "sections": [
    {
      "title": "day03-CSS基础",
      "trail": [
        "day03-CSS基础"
      ],
      "level": 1,
      "line": 1,
      "blocks": [
        {
          "type": "text",
          "text": "> 目标：掌握 CSS 属性基本写法，能够使用文字相关属性美化文章页。"
        }
      ]
    },
    {
      "title": "01-CSS初体验",
      "trail": [
        "day03-CSS基础",
        "01-CSS初体验"
      ],
      "level": 2,
      "line": 5,
      "blocks": [
        {
          "type": "text",
          "text": "层叠样式表 (Cascading Style Sheets，缩写为 CSS），是一种 **样式表** 语言，用来**描述 HTML 文档的呈现**（**美化内容**）。\n\n书写位置：**title 标签下方添加 style 双标签，style 标签里面书写 CSS 代码**。"
        },
        {
          "type": "code",
          "language": "html",
          "text": "<title>CSS 初体验</title>\n<style>\n    /* 选择器 { } */\n    p {\n      /* CSS 属性 */\n      color: red;\n    }\n</style>\n\n<p>体验 CSS</p>"
        },
        {
          "type": "text",
          "text": "> 提示：属性名和属性值成对出现 → 键值对。"
        }
      ]
    },
    {
      "title": "02-CSS引入方式",
      "trail": [
        "day03-CSS基础",
        "02-CSS引入方式"
      ],
      "level": 2,
      "line": 26,
      "blocks": [
        {
          "type": "text",
          "text": "* **内部**样式表：学习使用\n  * CSS 代码写在 style 标签里面\n* **外部**样式表：开发使用\n  * CSS 代码写在单独的 CSS 文件中（**.css**）\n  * 在 HTML 使用 link 标签引入"
        },
        {
          "type": "code",
          "language": "html",
          "text": "<link rel=\"stylesheet\" href=\"./my.css\" />"
        },
        {
          "type": "text",
          "text": "* **行内**样式：配合 JavaScript 使用\n  * CSS 写在标签的 style 属性值里"
        },
        {
          "type": "code",
          "language": "html",
          "text": "<div style=\"color: red; font-size: 20px\">这是 div 标签</div>"
        }
      ]
    },
    {
      "title": "03-选择器",
      "trail": [
        "day03-CSS基础",
        "03-选择器"
      ],
      "level": 2,
      "line": 45,
      "blocks": [
        {
          "type": "text",
          "text": "作用：**查找标签**，设置样式。"
        }
      ]
    },
    {
      "title": "标签选择器",
      "trail": [
        "day03-CSS基础",
        "03-选择器",
        "标签选择器"
      ],
      "level": 3,
      "line": 49,
      "blocks": [
        {
          "type": "text",
          "text": "标签选择器：使用**标签名**作为选择器 → 选中**同名标签设置相同的样式**。\n\n例如：p, h1, div, a, img......"
        },
        {
          "type": "code",
          "language": "html",
          "text": "<style>\n    p {\n      color: red;\n    }\n</style>"
        },
        {
          "type": "text",
          "text": "> 注意：标签选择器**无法差异化**同名标签的显示效果。"
        }
      ]
    },
    {
      "title": "类选择器",
      "trail": [
        "day03-CSS基础",
        "03-选择器",
        "类选择器"
      ],
      "level": 3,
      "line": 66,
      "blocks": [
        {
          "type": "text",
          "text": "作用：查找标签，**差异化**设置标签的显示效果。\n\n步骤：\n\n* 定义类选择器 → **.类名**\n* 使用类选择器 → 标签添加 **class=\"类名\"**"
        },
        {
          "type": "code",
          "language": "html",
          "text": "<style>\n    /* 定义类选择器 */\n    .red {\n      color: red;\n    }\n</style>\n\n<!-- 使用类选择器 -->\n<div class=\"red\">这是 div 标签</div>\n<div class=\"red size\">div 标签</div>"
        },
        {
          "type": "text",
          "text": "注意：\n\n* 类名**自定义**，不要用纯数字或中文，尽量用英文命名\n* 一个类选择器**可以供多个标签使用**\n* **一个标签可以使用多个类名**，类名之间用**空格**隔开\n\n> 开发习惯：类名见名知意，多个单词可以用 - 连接，例如：news-hd。"
        }
      ]
    },
    {
      "title": "id选择器",
      "trail": [
        "day03-CSS基础",
        "03-选择器",
        "id选择器"
      ],
      "level": 3,
      "line": 96,
      "blocks": [
        {
          "type": "text",
          "text": "作用：查找标签，差异化设置标签的显示效果。\n\n场景：id 选择器一般**配合 JavaScript** 使用，很少用来设置 CSS 样式\n\n步骤：\n\n* 定义 id 选择器 → #id名\n* 使用 id 选择器 → 标签添加 id= \"id名\""
        },
        {
          "type": "code",
          "language": "html",
          "text": "<style>\n    /* 定义 id 选择器 */\n    #red {\n      color: red;\n    }\n</style>\n\n<!-- 使用 id 选择器 -->\n<div id=\"red\">这是 div 标签</div>"
        },
        {
          "type": "text",
          "text": "> 规则：同一个 id 选择器在一个页面只能使用一次。"
        }
      ]
    },
    {
      "title": "通配符选择器",
      "trail": [
        "day03-CSS基础",
        "03-选择器",
        "通配符选择器"
      ],
      "level": 3,
      "line": 121,
      "blocks": [
        {
          "type": "text",
          "text": "作用：查找页面**所有**标签，设置相同样式。\n\n通配符选择器： ***，不需要调用**，浏览器自动查找页面所有标签，设置相同的样式"
        },
        {
          "type": "code",
          "language": "css",
          "text": "* {\n  color: red;\n}"
        },
        {
          "type": "text",
          "text": "> 经验：通配符选择器可以用于**清除标签的默认样式**，例如：标签默认的外边距、内边距。\n\n[课程配图见原资料]"
        }
      ]
    },
    {
      "title": "04-盒子尺寸和背景色",
      "trail": [
        "day03-CSS基础",
        "04-盒子尺寸和背景色"
      ],
      "level": 2,
      "line": 137,
      "blocks": [
        {
          "type": "text",
          "text": "[课程配图见原资料]"
        }
      ]
    },
    {
      "title": "字体大小",
      "trail": [
        "day03-CSS基础",
        "05-文字控制属性",
        "字体大小"
      ],
      "level": 3,
      "line": 143,
      "blocks": [
        {
          "type": "text",
          "text": "* 属性名：**font-size**\n* 属性值：文字尺寸，PC 端网页最常用的单位 **px**"
        },
        {
          "type": "code",
          "language": "css",
          "text": "p {\n  font-size: 30px;\n}",
          "note": "原资料中含排错代码或不完整片段，保留错误供分析；不会自动执行。"
        },
        {
          "type": "text",
          "text": "> 经验：谷歌浏览器默认字号是16px。"
        }
      ]
    },
    {
      "title": "字体样式（是否倾斜）",
      "trail": [
        "day03-CSS基础",
        "05-文字控制属性",
        "字体样式（是否倾斜）"
      ],
      "level": 3,
      "line": 156,
      "blocks": [
        {
          "type": "text",
          "text": "作用：清除文字默认的倾斜效果\n\n属性名：**font-style**\n\n属性值\n\n* 正常（不倾斜）：**normal** \n* 倾斜：**italic**"
        }
      ]
    },
    {
      "title": "行高",
      "trail": [
        "day03-CSS基础",
        "05-文字控制属性",
        "行高"
      ],
      "level": 3,
      "line": 167,
      "blocks": [
        {
          "type": "text",
          "text": "作用：设置多行文本的间距\n\n属性名：line-height\n\n属性值\n\n* 数字 + px\n* 数字（当前标签font-size属性值的倍数）"
        },
        {
          "type": "code",
          "language": "css",
          "text": "line-height: 30px;\n\n/* 当前标签字体大小为16px */\nline-height: 2;"
        },
        {
          "type": "text",
          "text": "[课程配图见原资料]\n\n> 行高的测量方法：从一行文字的最顶端（最底端）量到下一行文字的最顶端（最底端）。"
        }
      ]
    },
    {
      "title": "单行文字垂直居中",
      "trail": [
        "day03-CSS基础",
        "05-文字控制属性",
        "行高",
        "单行文字垂直居中"
      ],
      "level": 4,
      "line": 190,
      "blocks": [
        {
          "type": "text",
          "text": "垂直居中技巧：**行高属性值等于盒子高度属性值**\n\n注意：该技巧适用于单行文字垂直居中效果"
        },
        {
          "type": "code",
          "language": "css",
          "text": "div {\n  height: 100px;\n  background-color: skyblue;\n\n  /* 注意：只能是单行文字垂直居中 */\n  line-height: 100px;\n}"
        }
      ]
    },
    {
      "title": "字体族",
      "trail": [
        "day03-CSS基础",
        "05-文字控制属性",
        "字体族"
      ],
      "level": 3,
      "line": 206,
      "blocks": [
        {
          "type": "text",
          "text": "属性名：**font-family**\n\n属性值：字体名"
        },
        {
          "type": "code",
          "language": "css",
          "text": "font-family: 楷体;"
        },
        {
          "type": "text",
          "text": "> 拓展（了解）：font-family属性值可以书写多个字体名，各个字体名用逗号隔开，执行顺序是从左向右依次查找\n>\n> *  font-family 属性最后设置一个字体族名，网页开发建议使用无衬线字体\n\n[课程配图见原资料]"
        },
        {
          "type": "code",
          "language": "css",
          "text": "font-family:\n  Microsoft YaHei,\n  Heiti SC,\n  tahoma,\n  arial,\n  Hiragino Sans GB,\n  '\\5B8B\\4F53',\n  sans-serif;"
        }
      ]
    },
    {
      "title": "font复合属性",
      "trail": [
        "day03-CSS基础",
        "05-文字控制属性",
        "font复合属性"
      ],
      "level": 3,
      "line": 226,
      "blocks": [
        {
          "type": "text",
          "text": "使用场景：设置网页文字公共样式 \n\n[课程配图见原资料]\n\n复合属性：属性的简写方式，**一个属性对应多个值的写法**，各个属性值之间用**空格**隔开。\n\n**font: 是否倾斜  是否加粗  字号/行高 字体（必须按顺序书写）**"
        },
        {
          "type": "code",
          "language": "css",
          "text": "div {\n  font: italic 700 30px/2 楷体;\n}",
          "note": "原资料中含排错代码或不完整片段，保留错误供分析；不会自动执行。"
        },
        {
          "type": "text",
          "text": "> 注意：字号和字体值必须书写，否则 font 属性不生效 。"
        }
      ]
    },
    {
      "title": "文本缩进",
      "trail": [
        "day03-CSS基础",
        "05-文字控制属性",
        "文本缩进"
      ],
      "level": 3,
      "line": 244,
      "blocks": [
        {
          "type": "text",
          "text": "属性名：**text-indent**\n\n属性值：\n\n* 数字 + px\n* **数字 + em**（推荐：**1em = 当前标签的字号大小**）"
        },
        {
          "type": "code",
          "language": "css",
          "text": "p {\n  text-indent: 2em;\n}",
          "note": "原资料中含排错代码或不完整片段，保留错误供分析；不会自动执行。"
        }
      ]
    },
    {
      "title": "文本对齐方式",
      "trail": [
        "day03-CSS基础",
        "05-文字控制属性",
        "文本对齐方式"
      ],
      "level": 3,
      "line": 259,
      "blocks": [
        {
          "type": "text",
          "text": "作用：控制内容水平对齐方式\n\n属性名：**text-align**\n\n[课程配图见原资料]"
        },
        {
          "type": "code",
          "language": "css",
          "text": "text-align: center;"
        },
        {
          "type": "text",
          "text": "> text-align本质是控制内容的对齐方式，属性要设置给内容的父级。"
        },
        {
          "type": "code",
          "language": "html",
          "text": "<style>\n    div {\n      text-align: center;\n    }\n</style>\n\n<div>\n   \n  <img src=\"./images/1.jpg\" alt=\"\" />\n</div>"
        }
      ]
    },
    {
      "title": "文本修饰线",
      "trail": [
        "day03-CSS基础",
        "05-文字控制属性",
        "文本修饰线"
      ],
      "level": 3,
      "line": 285,
      "blocks": [
        {
          "type": "text",
          "text": "属性名： **text-decoration** \n\n[课程配图见原资料]"
        }
      ]
    },
    {
      "title": "color 文字颜色",
      "trail": [
        "day03-CSS基础",
        "05-文字控制属性",
        "color 文字颜色"
      ],
      "level": 3,
      "line": 293,
      "blocks": [
        {
          "type": "text",
          "text": "[课程配图见原资料]\n\n> 提示：只要属性值为颜色，都可以使用上述四种颜色表示方式，例如：背景色。"
        }
      ]
    },
    {
      "title": "06-调试工具",
      "trail": [
        "day03-CSS基础",
        "06-调试工具"
      ],
      "level": 2,
      "line": 299,
      "blocks": [
        {
          "type": "text",
          "text": "作用：检查、调试代码；帮助程序员发现代码问题、解决问题\n\n1. 打开调试工具\n\n* 浏览器窗口内任意位置 / 选中标签 → 鼠标右键 → 检查\n* F12\n\n2. 使用调试工具\n\n[课程配图见原资料]"
        }
      ]
    },
    {
      "title": "07-综合案例一-新闻详情",
      "trail": [
        "day03-CSS基础",
        "07-综合案例一-新闻详情"
      ],
      "level": 2,
      "line": 312,
      "blocks": [
        {
          "type": "text",
          "text": "网页制作思路：\n\n1. 从上到下，先整体再局部\n2. 先标签，再 CSS 美化\n\n[课程配图见原资料]"
        }
      ]
    },
    {
      "title": "HTML标签",
      "trail": [
        "day03-CSS基础",
        "07-综合案例一-新闻详情",
        "HTML标签"
      ],
      "level": 3,
      "line": 321,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<h1>在希望的田野上 | 湖北秋收开镰 各地多举措保增产增收</h1>\n<div>来源：央视网 | 2222年12月12日 12:12:12</div>\n<p>\n  <strong>央视网消息：</strong>\n  眼下，湖北省秋收开镰已有一周多的时间。水稻收割已经超过四成，玉米收割七成。湖北省通过大力推广新品种水稻，建设高标准农田等一系列措施，为秋粮稳产提供有力支撑。\n</p>\n<p>\n  中稻占据了湖北全年粮食产量的一半以上。在湖北的主产区荆门市，370万亩中稻已经收割四成以上。\n</p>\n<div class=\"pic\">\n  <img src=\"./1.jpg\" alt=\"\" />\n</div>\n<p>\n  王化林说的新品种，是湖北省研发的杂交水稻“华夏香丝”，不仅产量高，还具有抗病、抗倒、抗高温的特性。在荆门漳河镇的一工程示范田内，像“华夏香丝”这样抗旱节水的品种还有20多个，这些水稻新品将在荆门全面推广，确保来年增产增收。\n</p>\n<p>\n  此外，湖北还大力推进高标准农田建设。截至今年6月，已建成3980万亩高标准农田。目前，湖北全省仍有1800多万亩中稻正在有序收割中，预计10月中旬收割完毕。\n</p>"
        }
      ]
    },
    {
      "title": "CSS样式",
      "trail": [
        "day03-CSS基础",
        "07-综合案例一-新闻详情",
        "CSS样式"
      ],
      "level": 3,
      "line": 335,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<style>\n  h1 {\n    text-align: center;\n    font-weight: 400;\n    font-size: 30px;\n    color: #333;\n  }\n\n  div {\n    font-size: 14px;\n    color: #999;\n  }\n\n  p {\n    text-indent: 2em;\n    font-size: 18px;\n    color: #333;\n  }\n\n  /* div {\n    text-align: center;\n  } */\n\n  .pic {\n    text-align: center;\n  }\n</style>"
        }
      ]
    },
    {
      "title": "08-综合案例二-CSS简介",
      "trail": [
        "day03-CSS基础",
        "08-综合案例二-CSS简介"
      ],
      "level": 2,
      "line": 367,
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
        "day03-CSS基础",
        "08-综合案例二-CSS简介",
        "HTML标签"
      ],
      "level": 3,
      "line": 371,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<h1>CSS（层叠样式表）</h1>\n<p>\n  层叠样式表 (Cascading Style Sheets，缩写为 CSS），是一种\n  <a href=\"#\">样式表</a>\n  语言，用来描述 HTML 或 XML（包括如 SVG、MathML、XHTML 之类的 XML\n  分支语言）文档的呈现。CSS\n  描述了在屏幕、纸质、音频等其它媒体上的元素应该如何被渲染的问题。\n</p>\n<p>\n  <strong>CSS 是开放网络的核心语言之一</strong>\n  ，由 W3C 规范 实现跨浏览器的标准化。CSS 节省了大量的工作。\n  样式可以通过定义保存在外部.css\n  文件中，同时控制多个网页的布局，这意味着开发者不必经历在所有网页上编辑布局的麻烦。CSS\n  被分为不同等级：CSS1 现已废弃， CSS2.1 是推荐标准， CSS3\n  分成多个小模块且正在标准化中。\n</p>\n<ul>\n  <li>\n    CSS 介绍 如果你是 Web 开发的新手，请务必阅读我们的 CSS 基础 文章以学习 CSS\n    的含义和用法。\n  </li>\n  <li>\n    CSS 教程 我们的 CSS 学习区 包含了丰富的教程，它们覆盖了全部基础知识，能使你在 CSS\n    之路上从初出茅庐到游刃有余。\n  </li>\n  <li>\n    CSS 参考 针对资深 Web 开发者的\n    <a href=\"#\">详细参考手册</a>\n    ，描述了 CSS 的各个属性与概念。\n  </li>\n</ul>"
        }
      ]
    },
    {
      "title": "CSS样式",
      "trail": [
        "day03-CSS基础",
        "08-综合案例二-CSS简介",
        "CSS样式"
      ],
      "level": 3,
      "line": 384,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<style>\n  h1 {\n    color: #333;\n  }\n\n  p {\n    text-indent: 2em;\n    font-size: 14px;\n    color: #444;\n    line-height: 30px;\n  }\n\n  a {\n    color: #0069c2;\n  }\n\n  li {\n    font-size: 14px;\n    color: #444;\n    line-height: 30px;\n  }\n</style>"
        }
      ]
    }
  ]
};
