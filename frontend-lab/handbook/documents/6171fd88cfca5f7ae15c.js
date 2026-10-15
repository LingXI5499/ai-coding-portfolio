window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["6171fd88cfca5f7ae15c"] = {
  "id": "6171fd88cfca5f7ae15c",
  "title": "day03-CSS基础.pdf",
  "treatment": "课件页级文本（配图回溯原件）",
  "sections": [
    {
      "title": "第1页",
      "level": 1,
      "page": 1,
      "blocks": [
        {
          "type": "text",
          "text": "day03-CSS 基础  \n目标：掌握  CSS 属性基本写法，能够使用文字相关属性美化文章页。\n01-CSS 初体验  \n层叠样式表  (Cascading Style Sheets ，缩写为  CSS ），是一种  样式表 语言，用来描述  HTML 文档的呈现（美化内\n容）。\n书写位置：title 标签下方添加  style 双标签， style 标签里面书写  CSS 代码。\n \n提示：属性名和属性值成对出现  →  键值对。 \n02-CSS 引入方式  \n内部样式表：学习使用\nCSS 代码写在  style 标签里面\n外部样式表：开发使用\nCSS 代码写在单独的  CSS 文件中（.css）\n在  HTML 使用  link 标签引入\n \n行内样式：配合  JavaScript 使用\nCSS 写在标签的  style 属性值里\n \n03- 选择器  \n作用：查找标签，设置样式。 \n标签选择器  \n<title>CSS 初体验</title>\n<style>\n  /* 选择器  { } */\n  p {\n    /* CSS 属性  */\n    color: red;\n  }\n</style>\n \n<p>体验  CSS</p>\n<link rel=\"stylesheet\" href=\"./my.css\">\n<div style=\"color: red; font-size:20px;\">这是  div 标签</div>"
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
          "text": "标签选择器：使用标签名作为选择器  →  选中同名标签设置相同的样式。\n例如： p, h1, div, a, img......\n \n注意：标签选择器无法差异化同名标签的显示效果。\n类选择器  \n作用：查找标签，差异化设置标签的显示效果。\n步骤：\n定义类选择器  →  . 类名\n使用类选择器  →  标签添加  class=\" 类名 \"\n \n注意：\n类名自定义，不要用纯数字或中文，尽量用英文命名\n一个类选择器可以供多个标签使用\n一个标签可以使用多个类名，类名之间用空格隔开\n开发习惯：类名见名知意，多个单词可以用  - 连接，例如： news-hd 。\nid 选择器  \n作用：查找标签，差异化设置标签的显示效果。\n场景： id 选择器一般配合  JavaScript 使用，很少用来设置  CSS 样式\n步骤：\n定义  id 选择器  →  #id 名\n使用  id 选择器  →  标签添加  id= \"id 名 \"\n<style>\n  p {\n    color: red;\n  }\n</style>\n \n<style>\n  /* 定义类选择器  */\n  .red {\n    color: red;\n  }\n</style>\n \n<!-- 使用类选择器  -->\n<div class=\"red\">这是  div 标签</div>\n<div class=\"red size\">div 标签</div>"
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
          "text": "规则：同一个  id 选择器在一个页面只能使用一次。\n通配符选择器  \n作用：查找页面所有标签，设置相同样式。\n通配符选择器：  * ，不需要调用，浏览器自动查找页面所有标签，设置相同的样式\n \n经验：通配符选择器可以用于清除标签的默认样式，例如：标签默认的外边距、内边距。\n04- 盒子尺寸和背景色  \n05- 文字控制属性  \n字体大小  \n属性名：font-size\n属性值：文字尺寸， PC 端网页最常用的单位  px\n<style>\n  /* 定义  id 选择器  */\n  #red {\n    color: red;\n  }\n</style>\n \n<!-- 使用  id 选择器  -->\n<div id=\"red\">这是  div 标签</div>\n* {\n  color: red;\n}"
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
          "text": "经验：谷歌浏览器默认字号是 16px 。\n字体样式（是否倾斜）  \n作用：清除文字默认的倾斜效果\n属性名：font-style\n属性值\n正常（不倾斜）：normal \n倾斜：italic\n行高  \n作用：设置多行文本的间距\n属性名： line-height\n属性值\n数字  + px\n数字（当前标签 font-size 属性值的倍数）\n \n行高的测量方法：从一行文字的最顶端（最底端）量到下一行文字的最顶端（最底端）。 \n单行文字垂直居中  \n垂直居中技巧：行高属性值等于盒子高度属性值\n注意：该技巧适用于单行文字垂直居中效果\np {\n  font-size: 30px;\n}\nline-height: 30px;\n \n \n/* 当前标签字体大小为 16px */\nline-height: 2;"
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
          "text": "字体族  \n属性名：font-family\n属性值：字体名\n \n拓展（了解）： font-family 属性值可以书写多个字体名，各个字体名用逗号隔开，执行顺序是从左向右依次\n查找\nfont-family 属性最后设置一个字体族名，网页开发建议使用无衬线字体\n \nfont 复合属性  \n使用场景：设置网页文字公共样式 \n复合属性：属性的简写方式，一个属性对应多个值的写法，各个属性值之间用空格隔开。\nfont: 是否倾斜   是否加粗   字号 / 行高  字体（必须按顺序书写）\n \ndiv {\n  height: 100px;\n  background-color: skyblue;\n \n  /* 注意：只能是单行文字垂直居中  */\n  line-height: 100px;\n}\nfont-family: 楷体 ;\nfont-family: Microsoft YaHei, Heiti SC, tahoma, arial, Hiragino Sans GB, \"\\5B8B\\4F53\", sans-serif;\ndiv {\n  font: italic 700 30px/2 楷体 ;\n}"
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
          "text": "注意：字号和字体值必须书写，否则  font 属性不生效  。\n文本缩进  \n属性名：text-indent\n属性值：\n数字  + px\n数字  + em（推荐：1em = 当前标签的字号大小）\n \n文本对齐方式  \n作用：控制内容水平对齐方式\n属性名：text-align\n \ntext-align 本质是控制内容的对齐方式，属性要设置给内容的父级。 \n \n文本修饰线  \n属性名：  text-decoration \np {\n  text-indent: 2em;\n}\ntext-align: center;\n<style>\n  div {\n    text-align: center;\n  }\n</style>\n \n<div>\n  <img src=\"./images/1.jpg\" alt=\"\">\n</div>"
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
          "text": "color 文字颜色  \n提示：只要属性值为颜色，都可以使用上述四种颜色表示方式，例如：背景色。 \n06- 调试工具  \n作用：检查、调试代码；帮助程序员发现代码问题、解决问题\n1. 打开调试工具\n浏览器窗口内任意位置  / 选中标签  →  鼠标右键  →  检查\nF12\n2. 使用调试工具\n07- 综合案例一 - 新闻详情"
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
          "text": "网页制作思路：\n1. 从上到下，先整体再局部\n2. 先标签，再  CSS 美化\nHTML 标签  \n \nCSS 样式  \n \n<h1>在希望的田野上  | 湖北秋收开镰  各地多举措保增产增收</h1>\n<div>来源：央视网  | 2222 年 12 月 12 日  12:12:12</div>\n<p><strong>央视网消息：</strong>眼下，湖北省秋收开镰已有一周多的时间。水稻收割已经超过四成，玉米收割七成。\n湖北省通过大力推广新品种水稻，建设高标准农田等一系列措施，为秋粮稳产提供有力支撑。</p>\n<p>中稻占据了湖北全年粮食产量的一半以上。在湖北的主产区荆门市， 370 万亩中稻已经收割四成以上。</p>\n<div class=\"pic\">\n  <img src=\"./1.jpg\" alt=\"\">\n</div>\n<p>王化林说的新品种，是湖北省研发的杂交水稻 “ 华夏香丝 ” ，不仅产量高，还具有抗病、抗倒、抗高温的特性。在荆门漳\n河镇的一工程示范田内，像 “ 华夏香丝 ” 这样抗旱节水的品种还有 20 多个，这些水稻新品将在荆门全面推广，确保来年增产增\n收。</p>\n<p>此外，湖北还大力推进高标准农田建设。截至今年 6 月，已建成 3980 万亩高标准农田。目前，湖北全省仍有 1800 多万亩\n中稻正在有序收割中，预计 10 月中旬收割完毕。</p>\n<style>\n  h1 {"
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
          "text": "08- 综合案例二 -CSS 简介  \nHTML 标签  \n    text-align: center;\n    font-weight: 400;\n    font-size: 30px;\n    color: #333;\n  }\n \n  div {\n    font-size: 14px;\n    color: #999;\n  }\n \n  p {\n    text-indent: 2em;\n    font-size: 18px;\n    color: #333;\n  }\n \n  /* div {\n    text-align: center;\n  } */\n \n  .pic {\n    text-align: center;\n  }\n</style>"
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
          "text": "CSS 样式  \n \n \n<h1>CSS （层叠样式表）</h1>\n<p>层叠样式表  (Cascading Style Sheets ，缩写为  CSS ），是一种  <a href=\"#\">样式表</a> 语言，用来描述  HTML 或 \nXML （包括如  SVG 、 MathML 、 XHTML 之类的  XML 分支语言）文档的呈现。 CSS 描述了在屏幕、纸质、音频等其它媒体\n上的元素应该如何被渲染的问题。</p>\n<p><strong>CSS 是开放网络的核心语言之一</strong>，由  W3C 规范  实现跨浏览器的标准化。 CSS 节省了大量的工作。 \n样式可以通过定义保存在外部 .css 文件中，同时控制多个网页的布局，这意味着开发者不必经历在所有网页上编辑布局的麻\n烦。 CSS 被分为不同等级： CSS1 现已废弃，  CSS2.1 是推荐标准，  CSS3 分成多个小模块且正在标准化中。</p>\n<ul>\n  <li>CSS 介绍  如果你是  Web 开发的新手，请务必阅读我们的  CSS 基础  文章以学习  CSS 的含义和用法。</li>\n  <li>CSS 教程  我们的  CSS 学习区  包含了丰富的教程，它们覆盖了全部基础知识，能使你在  CSS 之路上从初出茅庐到游刃\n有余。</li>\n  <li>CSS 参考  针对资深  Web 开发者的  <a href=\"#\">详细参考手册</a> ，描述了  CSS 的各个属性与概念。</li>\n</ul>\n<style>\n  h1 {\n    color: #333;\n  }\n \n  p {\n    text-indent: 2em;\n    font-size: 14px;\n    color: #444;\n    line-height: 30px;\n  }\n \n  a {\n    color: #0069c2;\n  }\n \n  li {\n    font-size: 14px;\n    color: #444;\n    line-height: 30px;\n  }\n</style>"
        }
      ]
    }
  ]
};
