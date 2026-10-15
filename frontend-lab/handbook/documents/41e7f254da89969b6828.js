window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["41e7f254da89969b6828"] = {
  "id": "41e7f254da89969b6828",
  "title": "day04-CSS进阶.pdf",
  "treatment": "课件页级文本（配图回溯原件）",
  "sections": [
    {
      "title": "第1页",
      "level": 1,
      "page": 1,
      "blocks": [
        {
          "type": "text",
          "text": "day04-CSS 进阶  \n目标：掌握复合选择器作用和写法；使用 background 属性添加背景效果\n01- 复合选择器  \n定义：由两个或多个基础选择器，通过不同的方式组合而成。\n作用：更准确、更高效的选择目标元素（标签）。\n后代选择器  \n后代选择器：选中某元素的后代元素。\n选择器写法：父选择器   子选择器  { CSS 属性 } ，父子选择器之间用空格隔开。\n \n子代选择器  \n子代选择器：选中某元素的子代元素（最近的子级）。\n选择器写法：父选择器  > 子选择器  { CSS 属性 } ，父子选择器之间用  > 隔开。\n \n并集选择器  \n<style>\n  div span {\n    color: red;\n  }\n</style>\n•<span> span 标签</span>\n<div>\n  <span>这是  div 的儿子  span</span >\n</div>\n<style>\n  div > span {\n    color: red;\n  }\n</style>\n \n<div>\n  <span>这是  div 里面的  span</span>\n  <p>\n    <span>这是  div 里面的  p 里面的  span</span>\n  </p>\n</div>"
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
          "text": "并集选择器：选中多组标签设置相同的样式。\n选择器写法：选择器 1, 选择器 2, …, 选择器 N { CSS 属性 } ，选择器之间用  , 隔开。\n \n交集选择器  \n交集选择器：选中同时满足多个条件的元素。\n选择器写法：选择器 1 选择器 2 { CSS 属性 } ，选择器之间连写，没有任何符号。 \n \n注意：如果交集选择器中有标签选择器，标签选择器必须书写在最前面。 \n伪类选择器  \n伪类选择器：伪类表示元素状态，选中元素的某个状态设置样式。\n鼠标悬停状态：选择器 :hover { CSS 属性  }\n \n<style>\n  div,\n  p,\n  span {\n    color: red;\n  }\n</style>\n \n<div> div 标签</div>\n<p>p 标签</p>\n<span>span 标签</span>\n<style>\n  p.box {\n  color: red;\n}\n</style>\n \n<p class=\"box\">p 标签，使用了类选择器  box</p>\n<p>p 标签</p>\n<div class=\"box\">div 标签，使用了类选择器  box</div>\n<style>\n  a:hover {\n    color: red;\n  }\n  .box:hover {\n    color: green;\n  }\n</style>\n \n<a href=\"#\">a 标签</a>\n<div class=\"box\">div 标签</div>"
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
          "text": "超链接伪类  \n提示：如果要给超链接设置以上四个状态，需要按  LVHA 的顺序书写。 \n经验：工作中，一个  a 标签选择器设置超链接的样式，  hover 状态特殊设置 \n \n02-CSS 特性  \nCSS 特性：化简代码  / 定位问题，并解决问题\n继承性\n层叠性\n优先级\n继承性  \n继承性：子级默认继承父级的文字控制属性。 \na {\n  color: red;\n}\n \na:hover {\n  color: green;\n}"
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
          "text": "注意：如果标签有默认文字样式会继承失败。  例如： a 标签的颜色、标题的字体大小。\n层叠性  \n特点：\n相同的属性会覆盖：后面的  CSS 属性覆盖前面的  CSS 属性\n不同的属性会叠加：不同的  CSS 属性都生效\n \n注意：选择器类型相同则遵循层叠性，否则按选择器优先级判断。 \n优先级  \n优先级：也叫权重，当一个标签使用了多种选择器时，基于不同种类的选择器的匹配规则。\n<style>\n  div {\n    color: red;\n    font-weight: 700;\n  }\n  div {\n    color: green;\n    font-size: 30px;\n  }\n</style>\n \n<div>div 标签</div>"
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
          "text": "基础选择器  \n规则：选择器优先级高的样式生效。\n公式：通配符选择器  < 标签选择器  < 类选择器  < id 选择器  < 行内样式  < !important\n            （选中标签的范围越大，优先级越低）\n复合选择器 - 叠加  \n叠加计算：如果是复合选择器，则需要权重叠加计算。\n公式：（每一级之间不存在进位）\n规则：\n从左向右依次比较选个数，同一级个数多的优先级高，如果个数相同，则向后比较\n!important 权重最高\n继承权重最低\n03-Emmet 写法  \nEmmet 写法：代码的简写方式，输入缩写  VS Code 会自动生成对应的代码。 \nHTML 标签\n<style>\n  div {\n    color: red;\n  }\n  .box {\n    color: green;\n  }\n</style>\n \n<div class=\"box\">div 标签</div>"
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
          "text": "CSS ：大多数简写方式为属性单词的首字母 \n04- 背景属性  \n背景图  \n网页中，使用背景图实现装饰性的图片效果。\n属性名：background-image（ bgi ）\n属性值： url( 背景图  URL)\n \n提示：背景图默认有平铺（复制）效果。 \n平铺方式  \n属性名：background-repeat（ bgr ） \ndiv {\n  width: 400px;\n  height: 400px;\n \n  background-image: url(./images/1.png);\n}"
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
          "text": "背景图位置  \n属性名：background-position（ bgp ）\n属性值：水平方向位置  垂直方向位置\n关键字\n坐标\n水平：正数向右；负数向左\n垂直：正数向下；负数向上\ndiv {\n  width: 400px;\n  height: 400px;\n  background-color: pink;\n  background-image: url(./images/1.png);\n \n  background-repeat: no-repeat;\n}"
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
          "text": "提示：\n关键字取值方式写法，可以颠倒取值顺序\n可以只写一个关键字，另一个方向默认为居中；数字只写一个值表示水平方向，垂直方向为居中\n背景图缩放  \n作用：设置背景图大小\n属性名：background-size（ bgz ）\n常用属性值：\n关键字\ncover ：等比例缩放背景图片以完全覆盖背景区，可能背景图片部分看不见\ncontain ：等比例缩放背景图片以完全装入背景区，可能背景区部分空白\n百分比：根据盒子尺寸计算图片大小\n数字  + 单位（例如： px ）\n \n提示：工作中，图片比例与盒子比例相同，使用  cover 或  contain 缩放背景图效果相同。\n背景图固定  \n作用：背景不会随着元素的内容滚动。\n属性名：background-attachment（ bga ）\n属性值：xed\ndiv {\n  width: 400px;\n  height: 400px;\n  background-color: pink;\n  background-image: url(./images/1.png);\n  background-repeat: no-repeat;\n \n  background-position: center bottom;\n  background-position: 50px -100px;\n  background-position: 50px center;\n}\ndiv {\n  width: 500px;\n  height: 400px;\n  background-color: pink;\n  background-image: url(./images/1.png);\n  background-repeat: no-repeat;\n  \n  background-size: cover;\n  background-size: contain;\n}"
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
          "text": "背景复合属性  \n属性名：background（ bg ）\n属性值：背景色  背景图  背景图平铺方式  背景图位置 / 背景图缩放   背景图固定（空格隔开各个属性值，不区分顺\n序）\n \n05- 显示模式  \n显示模式：标签（元素）的显示方式。 \n作用：布局网页的时候，根据标签的显示模式选择合适的标签摆放内容。 \n块级元素  \n特点：\n独占一行\n宽度默认是父级的 100%\n添加宽高属性生效\nbody {\n  background-image: url(./images/bg.jpg);\n  background-repeat: no-repeat;\n  background-attachment: xed;\n}\ndiv {\n  width: 400px;\n  height: 400px;\n \n  background: pink url(./images/1.png) no-repeat right center/cover;\n}"
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
          "text": "行内元素  \n特点：\n一行可以显示多个\n设置宽高属性不生效\n宽高尺寸由内容撑开\n行内块元素  \n特点：\n一行可以显示多个\n设置宽高属性生效\n宽高尺寸也可以由内容撑开\n转换显示模式  \n属性：display"
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
          "text": "06- 综合案例一 - 热词  \nHTML 标签  \n \nCSS 样式  \n<a href=\"#\">HTML</a>\n<a href=\"#\">CSS</a>\n<a href=\"#\">JavaScript</a>\n<a href=\"#\">Vue</a>\n<a href=\"#\">React</a>"
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
          "text": "07- 综合案例二  – banner 效果  \nHTML 标签  \n \n \nCSS 样式  \n \n<style>\n/* 默认效果  */\na {\ndisplay: block;\nwidth: 200px;\nheight: 80px;\nbackground-color: #3064bb;\ncolor: #f;\ntext-decoration: none;\ntext-align: center;\nline-height: 80px;\nfont-size: 18px;\n}\n \n/* 鼠标悬停的效果  */\na:hover {\nbackground-color: #608dd9;\n}\n</style>\n<div class=\"banner\">\n  <h2>让创造产生价值</h2>\n  <p>我们希望小游戏平台可以提供无限的可能性，让每一个创作者都可以将他们的才华和创意传递给用户。</p>\n  <a href=\"#\">我要报名</a>\n</div>\n<style>\n  .banner {\n    height: 500px;\n    background-color: #f3f3f4;\n    background-image: url(./images/bk.png);"
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
          "text": "background-repeat: no-repeat;\n    background-position: left bottom;\n \n    /* 文字控制属性，继承给子级  */\n    text-align: right;\n    color: #333;\n  }\n \n  .banner h2 {\n    font-size: 36px;\n    font-weight: 400;\n    line-height: 100px;\n  }\n \n  .banner p {\n    font-size: 20px;\n  }\n \n  .banner a {\n    width: 125px;\n    height: 40px;\n    background-color: #f06b1f;\n \n    display: inline-block;\n    /* 转块级无法右对齐，因为块元素独占一行  */\n    /* display: block; */\n \n    text-align: center;\n    line-height: 40px;\n    color: #f;\n    text-decoration: none;\n    font-size: 20px;\n  }\n</style>"
        }
      ]
    }
  ]
};
