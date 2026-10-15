window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["fe5c68d9d4574ea3b2a8"] = {
  "id": "fe5c68d9d4574ea3b2a8",
  "title": "HTML+CSS day03.pdf",
  "treatment": "课件页级文本（配图回溯原件）",
  "sections": [
    {
      "title": "第1页",
      "level": 1,
      "page": 1,
      "blocks": [
        {
          "type": "text",
          "text": "CSS 第一天\n基础选择器、文字控制属性"
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
          "text": "HTML\n HTML + CSS"
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
          "text": "CSS 初体验1"
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
          "text": "CSS 定义\n层叠样式表 (Cascading Style Sheets，缩写为 CSS），是一种 样式表 语言，用来描述 HTML 文档的呈现（美化内容）\n。\n书写位置：title 标签下方添加 style 双标签，style 标签里面书写 CSS 代码。\n提示：属性名和属性值成对出现 → 键值对。\n<title>CSS 初体验</title>\n<style>\n  /* 选择器 { } */\n  p {\n    /* CSS 属性 */\n    color: red;\n  }\n</style>\n<p>体验 CSS</p>"
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
          "text": "总结总结\n1. CSS 书写在什么位置？\ntitle 标签下方\n2. 哪个标签里面可以书写 CSS 代码？\nstyle 标签\n3. CSS 书写规则是什么？\n选择器 {属性名: 属性值;}\n<title>CSS 初体验</title>\n<style>\n  p {\n    color: red;\n  }\n</style>"
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
          "text": "CSS 引入方式2"
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
          "text": "l 内部样式表：学习使用\nl CSS 代码写在 style 标签里面\nl 外部样式表：开发使用\nl CSS 代码写在单独的 CSS 文件中（.css）\nl 在 HTML 使用 link 标签引入\nl 行内样式：配合 JavaScript 使用\nl CSS 写在标签的 style 属性值里\nCSS 引入方式\n<link rel=\"stylesheet\" href=\"./my.css\">\n<div style=\"color: red; font-size:20px;\">这是 div 标签</div>"
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
          "text": "总结总结 1. 实际工作中，常用哪种 CSS 引入方式？\n外部样式表  .css文件\n2. 在 HTML 中，使用哪个标签可以引入外部样式表？\nlink 标签\n<link rel=\"stylesheet\" href=\"./my.css\">"
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
          "text": "选择器3"
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
          "text": "选择器\n作用：查找标签，设置样式。\n基础选择器\n• 标签选择器\n• 类选择器\n• id 选择器\n• 通配符选择器"
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
          "text": "标签选择器\n标签选择器：使用标签名作为选择器 → 选中同名标签设置相同的样式。\n例如：p, h1, div, a, img......\n注意：标签选择器无法差异化同名标签的显示效果。\n<style>\n  p {\n    color: red;\n  }\n</style>"
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
          "text": "类选择器\n作用：查找标签，差异化设置标签的显示效果。\n步骤：\n• 定义类选择器 → .类名\n• 使用类选择器 → 标签添加 class=\"类名“\n注意：\n• 类名自定义，不要用纯数字或中文，尽量用英文命名\n• 一个类选择器可以供多个标签使用\n• 一个标签可以使用多个类名，类名之间用空格隔开\n开发习惯：类名见名知意，多个单词可以用 - 连接，例如：news-hd\n<style>\n  /* 定义类选择器 */\n  .red {\n    color: red;\n  }\n</style>\n<!-- 使用类选择器 -->\n<div class=\"red\">这是 div 标签</div>"
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
          "text": "id选择器\n作用：查找标签，差异化设置标签的显示效果。\n场景：id 选择器一般配合 JavaScript 使用，很少用来设置 CSS 样式\n步骤：\n• 定义 id 选择器 → #id名\n• 使用 id 选择器 → 标签添加 id= \"id名\"\n规则：\n• 同一个 id 选择器在一个页面只能使用一次\n<style>\n  /* 定义 id 选择器 */\n  #red {\n    color: red;\n  }\n</style>\n<!-- 使用 id 选择器 -->\n<div id=\"red\">这是 div 标签</div>"
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
          "text": "通配符选择器\n作用：查找页面所有标签，设置相同样式。\n通配符选择器： *，不需要调用，浏览器自动查找页面所有标签，设置相同的样式\n经验：\n• 通配符选择器可以用于清除标签的默认样式，例如：标签默认的外边距、内边距\n* {\n  color: red;\n}"
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
          "text": "画盒子\n目标：使用合适的选择器画盒子\n新属性"
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
          "text": "文字控制属性4"
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
          "text": "描述 属性 效果\n字体大小 font-size 文字 & 文字\n字体粗细 font-weight 文字 & 文字\n字体倾斜 font-style 文字 & 文字\n行高 line-height\n文字\n文字\n字体族 font-family 文字 & 文字\n字体复合属性 font 复合属性\n文本缩进 text-indent\n玉兰颇受明清时期文人的\n欢迎，尤其在明代万历年间，\n玉兰被大量种植。\n文本对齐 text-align 对齐方式\n修饰线 text-decoration 文字 & 文字 & 文字 & 文字\n颜色 color 文字 & 文字"
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
          "text": "l 属性名：font-size\nl 属性值：文字尺寸，PC 端网页最常用的单位 px\nl 经验：谷歌浏览器默认字号是16px\n字体大小\np {\n  font-size: 30px;\n}"
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
          "text": "描述 属性 效果\n字体大小 font-size 文字 & 文字\n字体粗细 font-weight 文字 & 文字\n字体倾斜 font-style 文字 & 文字\n行高 line-height\n文字\n文字\n字体族 font-family 文字 & 文字\n字体复合属性 font 复合属性\n文本缩进 text-indent\n玉兰颇受明清时期文人的\n欢迎，尤其在明代万历年间，\n玉兰被大量种植。\n文本对齐 text-align 对齐方式\n修饰线 text-decoration 文字 & 文字 & 文字 & 文字\n颜色 color 文字 & 文字"
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
          "text": "字体粗细\n属性名：font-weight\n属性值\n• 数字（开发使用）\n• 关键字\n/* 不加粗 */\nfont-weight: 400;\n/* 加粗 */\nfont-weight: 700;"
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
          "text": "描述 属性 效果\n字体大小 font-size 文字 & 文字\n字体粗细 font-weight 文字 & 文字\n字体倾斜 font-style 文字 & 文字\n行高 line-height\n文字\n文字\n字体族 font-family 文字 & 文字\n字体复合属性 font 复合属性\n文本缩进 text-indent\n玉兰颇受明清时期文人的\n欢迎，尤其在明代万历年间，\n玉兰被大量种植。\n文本对齐 text-align 对齐方式\n修饰线 text-decoration 文字 & 文字 & 文字 & 文字\n颜色 color 文字 & 文字"
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
          "text": "字体样式（是否倾斜）\n作用：清除文字默认的倾斜效果\n属性名：font-style\n属性值\n• 正常（不倾斜）：normal \n• 倾斜：italic"
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
          "text": "描述 属性 效果\n字体大小 font-size 文字 & 文字\n字体粗细 font-weight 文字 & 文字\n字体倾斜 font-style 文字 & 文字\n行高 line-height\n文字\n文字\n字体族 font-family 文字 & 文字\n字体复合属性 font 复合属性\n文本缩进 text-indent\n玉兰颇受明清时期文人的\n欢迎，尤其在明代万历年间，\n玉兰被大量种植。\n文本对齐 text-align 对齐方式\n修饰线 text-decoration 文字 & 文字 & 文字 & 文字\n颜色 color 文字 & 文字"
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
          "text": "行高\n作用：设置多行文本的间距\n属性名：line-height\n属性值\n• 数字 + px\n• 数字（当前标签font-size属性值的倍数）\nline-height: 30px;\n/* 当前标签字体大小为16px */\nline-height: 2;"
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
          "text": "行高\n行高的测量方法：从一行文字的最顶端（最底端）量到下一行文字的最顶端（最底端）。"
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
          "text": "总结总结\n1. 如何书写 line-height 属性值？\n数字 + px\n数字（当前标签 font-size 值的倍数）\n2. 测量行高的方法是什么？\n从一行文字的最顶（最底）测量到下一行文字的最顶（最底\n）"
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
          "text": "行高-垂直居中\n垂直居中技巧：行高属性值等于盒子高度属性值\n注意：该技巧适用于单行文字垂直居中效果"
        }
      ]
    },
    {
      "title": "第28页",
      "level": 1,
      "page": 28,
      "blocks": [
        {
          "type": "text",
          "text": "描述 属性 效果\n字体大小 font-size 文字 & 文字\n字体粗细 font-weight 文字 & 文字\n字体倾斜 font-style 文字 & 文字\n行高 line-height\n文字\n文字\n字体族 font-family 文字 & 文字\n字体复合属性 font 复合属性\n文本缩进 text-indent\n玉兰颇受明清时期文人的\n欢迎，尤其在明代万历年间，\n玉兰被大量种植。\n文本对齐 text-align 对齐方式\n修饰线 text-decoration 文字 & 文字 & 文字 & 文字\n颜色 color 文字 & 文字"
        }
      ]
    },
    {
      "title": "第29页",
      "level": 1,
      "page": 29,
      "blocks": [
        {
          "type": "text",
          "text": "字体族\n属性名：font-family\n属性值：字体名\n拓展（了解）：font-family属性值可以书写多个字体名，各个字体名用逗号隔开，执行顺序是从左向右依次查找\n•  font-family 属性最后设置一个字体族名，网页开发建议使用无衬线字体\nfont-family: Microsoft YaHei, Heiti SC, tahoma, arial, Hiragino Sans GB, \"\\5B8B\\4F53\", sans-serif;\nfont-family: 楷体;"
        }
      ]
    },
    {
      "title": "第30页",
      "level": 1,
      "page": 30,
      "blocks": [
        {
          "type": "text",
          "text": "字体族\n属性名：font-family\n属性值：字体名1, 字体名2…., 字体族名（可以只写一个字体名）\n执行顺序：从左向右依次查找\n经验\n• 建议 font-family 属性最后设置一个字体族名\n• 网页开发建议使用无衬线字体\nfont-family: Microsoft YaHei, Heiti SC, tahoma, arial, Hiragino Sans GB, \"\\5B8B\\4F53\", sans-serif;\nfont-family: 楷体, 微软雅黑;"
        }
      ]
    },
    {
      "title": "第31页",
      "level": 1,
      "page": 31,
      "blocks": [
        {
          "type": "text",
          "text": "描述 属性 效果\n字体大小 font-size 文字 & 文字\n字体粗细 font-weight 文字 & 文字\n字体倾斜 font-style 文字 & 文字\n行高 line-height\n文字\n文字\n字体族 font-family 文字 & 文字\n字体复合属性 font 复合属性\n文本缩进 text-indent\n玉兰颇受明清时期文人的\n欢迎，尤其在明代万历年间，\n玉兰被大量种植。\n文本对齐 text-align 对齐方式\n修饰线 text-decoration 文字 & 文字 & 文字 & 文字\n颜色 color 文字 & 文字"
        }
      ]
    },
    {
      "title": "第32页",
      "level": 1,
      "page": 32,
      "blocks": [
        {
          "type": "text",
          "text": "font 复合属性\n使用场景：设置网页文字公共样式\ndiv {\n  /* 文字倾斜 */\n  /* 文字加粗 */\n  /* 字体大小是30px */\n  /* 行高为字号的2倍 */\n  /* 字体是楷体 */\n  \n}\ndiv {\n  /* 文字倾斜 */\n  font-style: italic;\n  /* 文字加粗 */\n  font-weight: 700;\n  /* 字体大小是30px */\n  font-size: 30px;\n  /* 行高为字号的2倍 */\n  line-height: 2;\n  /* 字体是楷体 */\n  font-family: 楷体;\n}\ndiv {\n /* font: 是否倾斜 是否加粗 字号/行高 字体; */\n  font: italic 700 30px/2 楷体;\n}"
        }
      ]
    },
    {
      "title": "第33页",
      "level": 1,
      "page": 33,
      "blocks": [
        {
          "type": "text",
          "text": "font 复合属性\n复合属性：属性的简写方式，一个属性对应多个值的写法，各个属性值之间用空格隔开。\nfont: 是否倾斜  是否加粗  字号/行高 字体（必须按顺序书写）\n注意：字号和字体值必须书写，否则 font 属性不生效\ndiv {\n  font: italic 700 30px/2 楷体;\n}"
        }
      ]
    },
    {
      "title": "第34页",
      "level": 1,
      "page": 34,
      "blocks": [
        {
          "type": "text",
          "text": "描述 属性 效果\n字体大小 font-size 文字 & 文字\n字体粗细 font-weight 文字 & 文字\n字体倾斜 font-style 文字 & 文字\n行高 line-height\n文字\n文字\n字体族 font-family 文字 & 文字\n字体复合属性 font 复合属性\n文本缩进 text-indent\n玉兰颇受明清时期文人的\n欢迎，尤其在明代万历年间，\n玉兰被大量种植。\n文本对齐 text-align 对齐方式\n修饰线 text-decoration 文字 & 文字 & 文字 & 文字\n颜色 color 文字 & 文字"
        }
      ]
    },
    {
      "title": "第35页",
      "level": 1,
      "page": 35,
      "blocks": [
        {
          "type": "text",
          "text": "文本缩进\n属性名：text-indent\n属性值：\n• 数字 + px\n• 数字 + em（推荐：1em = 当前标签的字号大小）\np {\n  text-indent: 2em;\n}"
        }
      ]
    },
    {
      "title": "第36页",
      "level": 1,
      "page": 36,
      "blocks": [
        {
          "type": "text",
          "text": "描述 属性 效果\n字体大小 font-size 文字 & 文字\n字体粗细 font-weight 文字 & 文字\n字体倾斜 font-style 文字 & 文字\n行高 line-height\n文字\n文字\n字体族 font-family 文字 & 文字\n字体复合属性 font 复合属性\n文本缩进 text-indent\n玉兰颇受明清时期文人的\n欢迎，尤其在明代万历年间，\n玉兰被大量种植。\n文本对齐 text-align 对齐方式\n修饰线 text-decoration 文字 & 文字 & 文字 & 文字\n颜色 color 文字 & 文字"
        }
      ]
    },
    {
      "title": "第37页",
      "level": 1,
      "page": 37,
      "blocks": [
        {
          "type": "text",
          "text": "文本对齐方式\n作用：控制内容水平对齐方式\n属性名：text-align\n属性值\ntext-align: center;"
        }
      ]
    },
    {
      "title": "第38页",
      "level": 1,
      "page": 38,
      "blocks": [
        {
          "type": "text",
          "text": "水平对齐方式 – 图片\ntext-align本质是控制内容的对齐方式，属性要设置给内容的父级。\n<style>\n  div {\n    text-align: center;\n  }\n</style>\n<div>\n  <img src=\"./images/1.jpg\" alt=\"\">\n</div>"
        }
      ]
    },
    {
      "title": "第39页",
      "level": 1,
      "page": 39,
      "blocks": [
        {
          "type": "text",
          "text": "描述 属性 效果\n字体大小 font-size 文字 & 文字\n字体粗细 font-weight 文字 & 文字\n字体倾斜 font-style 文字 & 文字\n行高 line-height\n文字\n文字\n字体族 font-family 文字 & 文字\n字体复合属性 font 复合属性\n文本缩进 text-indent\n玉兰颇受明清时期文人的\n欢迎，尤其在明代万历年间，\n玉兰被大量种植。\n文本对齐 text-align 对齐方式\n修饰线 text-decoration 文字 & 文字 & 文字 & 文字\n颜色 color 文字 & 文字"
        }
      ]
    },
    {
      "title": "第40页",
      "level": 1,
      "page": 40,
      "blocks": [
        {
          "type": "text",
          "text": "文本修饰线\n属性名： text-decoration\n属性值"
        }
      ]
    },
    {
      "title": "第41页",
      "level": 1,
      "page": 41,
      "blocks": [
        {
          "type": "text",
          "text": "描述 属性 效果\n字体大小 font-size 文字 & 文字\n字体粗细 font-weight 文字 & 文字\n字体倾斜 font-style 文字 & 文字\n行高 line-height\n文字\n文字\n字体族 font-family 文字 & 文字\n字体复合属性 font 复合属性\n文本缩进 text-indent\n玉兰颇受明清时期文人的\n欢迎，尤其在明代万历年间，\n玉兰被大量种植。\n文本对齐 text-align 对齐方式\n修饰线 text-decoration 文字 & 文字 & 文字 & 文字\n颜色 color 文字 & 文字"
        }
      ]
    },
    {
      "title": "第42页",
      "level": 1,
      "page": 42,
      "blocks": [
        {
          "type": "text",
          "text": "color 文字颜色\n属性名：color\n属性值\n提示：只要属性值为颜色，都可以使用上述四种颜色表示方式，例如：背景色。"
        }
      ]
    },
    {
      "title": "第43页",
      "level": 1,
      "page": 43,
      "blocks": [
        {
          "type": "text",
          "text": "调试工具5"
        }
      ]
    },
    {
      "title": "第44页",
      "level": 1,
      "page": 44,
      "blocks": [
        {
          "type": "text",
          "text": "作用：检查、调试代码；帮助程序员发现代码问题、解决问题\n1. 打开调试工具\n• 浏览器窗口内任意位置 / 选中标签 → 鼠标右键 → 检查\n• F12\n2. 使用调试工具\n调试工具 – 谷歌浏览器"
        }
      ]
    },
    {
      "title": "第45页",
      "level": 1,
      "page": 45,
      "blocks": [
        {
          "type": "text",
          "text": "综合案例6"
        }
      ]
    },
    {
      "title": "第46页",
      "level": 1,
      "page": 46,
      "blocks": [
        {
          "type": "text",
          "text": "案例\n 综合案例一 – 新闻详情\n网页制作思路：\n1. 从上到下，先整体再局部\n2. 先标签，再 CSS 美化"
        }
      ]
    },
    {
      "title": "第47页",
      "level": 1,
      "page": 47,
      "blocks": [
        {
          "type": "text",
          "text": "案例\n 综合案例二 – CSS 简介"
        }
      ]
    }
  ]
};
