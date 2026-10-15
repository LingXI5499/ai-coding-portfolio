window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["021e61b4fdac4d17fec8"] = {
  "id": "021e61b4fdac4d17fec8",
  "title": "HTML+CSS day04.pdf",
  "treatment": "课件页级文本（配图回溯原件）",
  "sections": [
    {
      "title": "第1页",
      "level": 1,
      "page": 1,
      "blocks": [
        {
          "type": "text",
          "text": "CSS 第二天\n复合选择器、CSS特性、背景属性、显示模式"
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
          "text": "l 复合选择器\nl CSS 特性\nl 背景属性\nl 显示模式"
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
          "text": "复合选择器1"
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
          "text": "复合选择器\n定义：由两个或多个基础选择器，通过不同的方式组合而成。\n作用：更准确、更高效的选择目标元素（标签）。\n<span>span 标签</span>\n<div>\n  <span>文字颜色是绿色</span>\n</div>"
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
          "text": "后代选择器\n后代选择器：选中某元素的后代元素。\n选择器写法：父选择器  子选择器 { CSS 属性}，父子选择器之间用空格隔开。\n<style>\n  div span {\n    color: red;\n  }\n</style>\n<span> span 标签</span>\n<div>\n  <span>这是 div 的儿子 span</span >\n</div>"
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
          "text": "子代选择器\n子代选择器：选中某元素的子代元素（最近的子级）。\n选择器写法：父选择器 > 子选择器 { CSS 属性}，父子选择器之间用 > 隔开。\n<style>\n  div > span {\n    color: red;\n  }\n</style>\n<div>\n  <span>这是 div 里面的 span</span>\n  <p>\n    <span>这是 div 里面的 p 里面的 span</span>\n  </p>\n</div>"
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
          "text": "并集选择器\n并集选择器：选中多组标签设置相同的样式。\n选择器写法：选择器1, 选择器2, …, 选择器N { CSS 属性}，选择器之间用 , 隔开。\n<style>\n  div,\n  p,\n  span {\n    color: red;\n  }\n</style>\n<div> div 标签</div>\n<p>p 标签</p>\n<span>span 标签</span>"
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
          "text": "交集选择器 – 了解\n交集选择器：选中同时满足多个条件的元素。\n选择器写法：选择器1选择器2 { CSS 属性}，选择器之间连写，没有任何符号。\n注意：如果交集选择器中有标签选择器，标签选择器必须书写在最前面。\n<p class=\"box\">p 标签，使用了类选择器 box</p>\n<p>p 标签</p>\n<div class=\"box\">div 标签，使用了类选择器 box</div>\np.box {\n  color: red;\n}"
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
          "text": "伪类选择器\n伪类选择器：伪类表示元素状态，选中元素的某个状态设置样式。\n鼠标悬停状态：选择器:hover { CSS 属性 }\n<style>\n  a:hover {\n    color: red;\n  }\n  .box:hover {\n    color: green;\n  }\n</style>\n<a href=\"#\">a 标签</a>\n<div class=\"box\">div 标签</div>"
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
          "text": "伪类-超链接（拓展）\n超链接一共有四个状态\n提示：如果要给超链接设置以上四个状态，需要按 LVHA 的顺序书写。"
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
          "text": "CSS 特性2"
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
          "text": "CSS 特性\nCSS特性：化简代码 / 定位问题，并解决问题\n• 继承性\n• 层叠性\n• 优先级"
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
          "text": "继承性\n继承性：子级默认继承父级的文字控制属性。\n注意：如果标签有默认文字样式会继承失败。\n例如：a 标签的颜色、标题的字体大小。"
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
          "text": "层叠性\n特点：\n• 相同的属性会覆盖：后面的 CSS 属性覆盖前面的 CSS 属性\n• 不同的属性会叠加：不同的 CSS 属性都生效\n注意：选择器类型相同则遵循层叠性，否则按选择器优先级判断。\n<style>\n  div {\n    color: red;\n    font-weight: 700;\n  }\n  div {\n    color: green;\n    font-size: 30px;\n  }\n</style>\n<div>div 标签</div>"
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
          "text": "优先级\n优先级：也叫权重，当一个标签使用了多种选择器时，基于不同种类的选择器的匹配规则。\n规则：选择器优先级高的样式生效。\n公式：通配符选择器 < 标签选择器 < 类选择器 < id选择器 < 行内样式 < !important\n           （选中标签的范围越大，优先级越低）\n<style>\n  div {\n    color: red;\n  }\n  .box {\n    color: green;\n  }\n</style>\n<div class=\"box\">div 标签</div>"
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
          "text": "优先级 – 叠加计算规则\n叠加计算：如果是复合选择器，则需要权重叠加计算。\n公式：（每一级之间不存在进位）\n规则：\n• 从左向右依次比较选个数，同一级个数多的优先级高，如果个数相同，则向后比较\n• !important 权重最高\n• 继承权重最低\n（行内样式,  id选择器个数,  类选择器个数,  标签选择器个数）\ndiv {\n  color: red;\n}\n.box {\n  color: green;\n}\n.box div {\n  color: red;\n}\n.box {\n  color: green;\n}"
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
          "text": "Emmet 写法3"
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
          "text": "Emmet 写法\nEmmet写法：代码的简写方式，输入缩写 VS Code 会自动生成对应的代码。\n• HTML\n• CSS：大多数简写方式为属性单词的首字母"
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
          "text": "背景属性4"
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
          "text": "背景属性\n描述 属性\n背景色 background-color\n背景图 background-image\n背景图平铺方式 background-repeat\n背景图位置 background-position\n背景图缩放 background-size\n背景图固定 background-attachment\n背景复合属性 background"
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
          "text": "背景图\n网页中，使用背景图实现装饰性的图片效果。\n属性名：background-image（bgi）\n属性值：url(背景图 URL)\n提示：背景图默认有平铺（复制）效果。\ndiv {\n  width: 400px;\n  height: 400px;\n  background-image: url(./images/1.png);\n}"
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
          "text": "背景属性\n描述 属性\n背景色 background-color\n背景图 background-image\n背景图平铺方式 background-repeat\n背景图位置 background-position\n背景图缩放 background-size\n背景图固定 background-attachment\n背景复合属性 background"
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
          "text": "背景图平铺方式\n属性名：background-repeat（bgr）\n属性值\ndiv {\n  width: 400px;\n  height: 400px;\n  background-color: pink;\n  background-image: url(./images/1.png);\n  background-repeat: no-repeat;\n}"
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
          "text": "背景属性\n描述 属性\n背景色 background-color\n背景图 background-image\n背景图平铺方式 background-repeat\n背景图位置 background-position\n背景图缩放 background-size\n背景图固定 background-attachment\n背景复合属性 background"
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
          "text": "背景图位置\n属性名：background-position（bgp）\n属性值：水平方向位置 垂直方向位置\n• 关键字\n• 坐标（数字 + px，正负都可以）\n      水平：正数向右；负数向左\n      垂直：正数向下；负数向上\n提示：\n• 关键字取值方式写法，可以颠倒取值顺序\n• 可以只写一个关键字，另一个方向默认为居中；数字只写一个值表示水平方向，垂直方向为居中\ndiv {\n  width: 400px;\n  height: 400px;\n  background-color: pink;\n  background-image: url(./images/1.png);\n  background-repeat: no-repeat;\n  background-position: center bottom;\n  background-position: 50px -100px;\n  background-position: 50px center;\n}"
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
          "text": "背景属性\n描述 属性\n背景色 background-color\n背景图 background-image\n背景图平铺方式 background-repeat\n背景图位置 background-position\n背景图缩放 background-size\n背景图固定 background-attachment\n背景复合属性 background"
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
          "text": "背景图缩放\n作用：设置背景图大小\n属性名：background-size（bgz）\n常用属性值：\n• 关键字\n      cover：等比例缩放背景图片以完全覆盖背景区，可能背景图片部分看不见\n       contain：等比例缩放背景图片以完全装入背景区，可能背景区部分空白\n• 百分比：根据盒子尺寸计算图片大小\n• 数字 + 单位（例如：px）\n提示：工作中，图片比例与盒子比例相同，使用 cover 或 contain 缩放背景图效果相同。\ndiv {\n  width: 500px;\n  height: 400px;\n  background-color: pink;\n  background-image: url(./images/1.png);\n  background-repeat: no-repeat;\n  \n  background-size: cover;\n  background-size: contain;\n}"
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
          "text": "背景属性\n描述 属性\n背景色 background-color\n背景图 background-image\n背景图平铺方式 background-repeat\n背景图位置 background-position\n背景图缩放 background-size\n背景图固定 background-attachment\n背景复合属性 background"
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
          "text": "背景图固定\n作用：背景不会随着元素的内容滚动。\n属性名：background-attachment（bga）\n属性值：fixed\nbody {\n  background-image: url(./images/bg.jpg);\n background-repeat: no-repeat;\n background-attachment: fixed;\n}"
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
          "text": "背景属性\n描述 属性\n背景色 background-color\n背景图 background-image\n背景图平铺方式 background-repeat\n背景图位置 background-position\n背景图缩放 background-size\n背景图固定 background-attachment\n背景复合属性 background"
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
          "text": "背景复合属性\n属性名：background（bg）\n属性值：背景色 背景图 背景图平铺方式 背景图位置/背景图缩放  背景图固定（空格隔开各个属性值，不区分顺序）\ndiv {\n  width: 400px;\n  height: 400px;\n  background: pink url(./images/1.png) no-repeat right center/cover;\n}"
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
          "text": "显示模式5"
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
          "text": "显示模式\n显示模式：标签（元素）的显示方式。\n作用：布局网页的时候，根据标签的显示模式选择合适的标签摆放内容。"
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
          "text": "l 块级元素\nl 独占一行\nl 宽度默认是父级的100%\nl 添加宽高属性生效\nl 行内元素\nl 一行可以显示多个\nl 设置宽高属性不生效\nl 宽高尺寸由内容撑开\nl 行内块元素\nl 一行可以显示多个\nl 设置宽高属性生效\nl 宽高尺寸也可以由内容撑开\n显示模式"
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
          "text": "总结总结\n1. “独占一行；宽高属性生效；默认宽度是父级的100%”是\n什么显示模式的特点？\n块级\n2. “一行共存多个；宽高属性不生效；宽高由内容撑开”是\n什么显示模式的特点？\n行内\n3. “一行共存多个；宽高属性生效；宽高默认由内容撑开”\n是什么显示模式特点\n行内块"
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
          "text": "转换显示模式\n属性名：display\n属性值："
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
          "text": "综合案例6"
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
          "text": "案例\n 综合案例一-热词"
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
          "text": "案例\n 综合案例二 – banner 效果"
        }
      ]
    }
  ]
};
