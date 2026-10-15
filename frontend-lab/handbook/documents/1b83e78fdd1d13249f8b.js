window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["1b83e78fdd1d13249f8b"] = {
  "id": "1b83e78fdd1d13249f8b",
  "title": "day05-盒子模型.pdf",
  "treatment": "课件页级文本（配图回溯原件）",
  "sections": [
    {
      "title": "第1页",
      "level": 1,
      "page": 1,
      "blocks": [
        {
          "type": "text",
          "text": "day05- 盒子模型  \n目标：掌握盒子模型组成部分，使用盒子模型布局网页区域\n01- 选择器  \n结构伪类选择器  \n基本使用  \n作用：根据元素的结构关系查找元素。 \n \n:nth-child( 公式 )  \n提示：公式中的 n 取值从  0 开始。 \n伪元素选择器  \n作用：创建虚拟元素（伪元素），用来摆放装饰性的内容。 \nli:rst-child {\n  background-color: green;\n}"
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
          "text": "注意点：\n必须设置  content: ”” 属性，用来  设置伪元素的内容，如果没有内容，则引号留空即可\n伪元素默认是行内显示模式\n权重和标签选择器相同\n02-PxCook  \nPxCook （像素大厨）  是一款切图设计工具软件。支持 PSD 文件的文字、颜色、距离自动智能识别。\n开发面板（自动智能识别）\n设计面板（手动测量尺寸和颜色）\n使用方法：创建项目  →  输入  项目名称、项目类型  Web →  单击按钮【创建项目】  →  单击按钮【添加】，导入设计\n稿 \ndiv::before {\n  content: \"before 伪元素 \";\n}\ndiv::after {\n  content: \"after 伪元素 \";\n}"
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
          "text": "03- 盒子模型  \n作用：布局网页，摆放盒子和内容。\n盒子模型 - 组成  \n内容区域  – width & height\n内边距  – padding （出现在内容与盒子边缘之间）\n边框线  – border \n外边距  – margin （出现在盒子外面）\n div {\n  margin: 50px;\n  border: 5px solid brown;\n  padding: 20px;\n  width: 200px;\n  height: 200px;\n  background-color: pink;\n}"
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
          "text": "边框线  \n四个方向  \n属性名：border（ bd ）\n属性值：边框线粗细   线条样式   颜色（不区分顺序）"
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
          "text": "单方向边框线  \n属性名：border- 方位名词（ bd+ 方位名词首字母，例如， bdl ）\n属性值：边框线粗细   线条样式   颜色（不区分顺序）\n \n内边距  \n作用：设置  内容  与  盒子边缘  之间的距离。\n属性名： padding / padding- 方位名词\n \n提示：添加  padding 会撑大盒子。\npadding 多值写法\ndiv {\n  border: 5px solid brown;\n  width: 200px;\n  height: 200px;\n  background-color: pink;\n}\ndiv {\n  border-top: 2px solid red;\n  border-right: 3px dashed green;\n  border-bottom: 4px dotted blue;\n  border-left: 5px solid orange;\n  width: 200px;\n  height: 200px;\n  background-color: pink;\n}\ndiv {\n  /* 四个方向  内边距相同  */\n  padding: 30px;\n  /* 单独设置一个方向内边距  */\n  padding-top: 10px;\n  padding-right: 20px;\n  padding-bottom: 40px;\n  padding-left: 80px;\n  width: 200px;\n  height: 200px;\n  background-color: pink;\n}"
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
          "text": "技巧：从上开始顺时针赋值，当前方向没有数值则与对面取值相同。 \n尺寸计算  \n默认情况：盒子尺寸  = 内容尺寸  + border 尺寸  + 内边距尺寸\n结论：给盒子加  border / padding 会撑大盒子\n解决：\n手动做减法，减掉  border / padding 的尺寸\n內减模式：box-sizing: border-box\n外边距  \n作用：拉开两个盒子之间的距离\n属性名：margin\n提示：与  padding 属性值写法、含义相同\n版心居中"
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
          "text": "左右  margin 值  为  auto （盒子要有宽度）\n \n清除默认样式  \n清除标签默认的样式，比如：默认的内外边距。 \ndiv {\n  margin: 0 auto;\n  width: 1000px;\n  height: 200px;\n  background-color: pink;\n}"
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
          "text": "元素溢出  \n作用：控制溢出元素的内容的显示方式。\n属性名：overow\n外边距问题  \n合并现象  \n场景：垂直排列的兄弟元素，上下  margin 会合并\n现象：取两个  margin 中的较大值生效\n/* 清除默认内外边距  */\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n/* 清除列表项目符号  */\nli {\n  list-style: none;\n}"
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
          "text": "外边距塌陷  \n场景：父子级的标签，子级的添加  上外边距 会产生塌陷问题\n现象：导致父级一起向下移动\n \n解决方法：\n取消子级 margin ，父级设置 padding\n父级设置  overow: hidden\n父级设置  border-top\n行内元素  – 内外边距问题  \n场景：行内元素添加  margin 和  padding ，无法改变元素垂直位置\n解决方法：给行内元素添加  line-height 可以改变垂直位置\n.one {\n  margin-bottom: 50px;\n}\n.two {\n  margin-top: 20px;\n}\n.son {\n  margin-top: 50px;\n  width: 100px;\n  height: 100px;\n  background-color: orange;\n}"
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
          "text": "圆角  \n作用：设置元素的外边框为圆角。\n属性名：border-radius\n属性值：数字 +px / 百分比\n提示：属性值是圆角半径\n \n多值写法\n技巧：从左上角开始顺时针赋值，当前角没有数值则与对角取值相同。 \n正圆形状：给正方形盒子设置圆角属性值为  宽高的一半  / 50%\n \nspan {\n  /* margin 和  padding 属性，无法改变垂直位置  */\n  margin: 50px;\n  padding: 20px;\n  /* 行高可以改变垂直位置  */\n  line-height: 100px;\n}\nimg {\n  width: 200px;\n  height: 200px;\n  \n  border-radius: 100px;\n  border-radius: 50%;\n}"
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
          "text": "胶囊形状：给长方形盒子设置圆角属性值为  盒子高度的一半 \n \n盒子阴影（拓展）  \n作用：给元素设置阴影效果\n属性名：box-shadow\n属性值： X 轴偏移量   Y 轴偏移量   模糊半径   扩散半径   颜色   内外阴影\n注意： \nX 轴偏移量  和  Y 轴偏移量  必须书写\n默认是外阴影，内阴影需要添加  inset\n \n04- 综合案例 - 产品卡片  \ndiv {\n  width: 200px;\n  height: 80px;\n  background-color: orange;\n  border-radius: 40px;\n}\ndiv {\n  width: 200px;\n  height: 80px;\n  background-color: orange;\n  box-shadow: 2px 5px 10px 0 rgba(0, 0, 0, 0.5) inset;\n}"
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
          "text": "CSS 书写顺序：\n1. 盒子模型属性\n2. 文字样式\n3. 圆角、阴影等修饰属性\nHTML 标签  \n \n \nCSS 样式  \n \n<div class=\"product\">\n  <img src=\"./images/liveSDK.svg\" alt=\"\">\n  <h4>抖音直播 SDK</h4>\n  <p>包含抖音直播看播功能</p>\n</div>\n<style>\n  * {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n  }\n \n  body {\n    background-color: #f1f1f1;\n  }\n \n  .product {\n    margin: 50px auto;\n    padding-top: 40px;\n \n    width: 270px;\n    height: 253px;\n    background-color: #f;\n    text-align: center;"
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
          "text": "05- 综合案例二  – 新闻列表  \n \n \n整体布局  \n \n    border-radius: 10px;\n  }\n \n  .product h4 {\n    margin-top: 20px;\n    margin-bottom: 12px;\n    font-size: 18px;\n    color: #333;\n    font-weight: 400;\n  }\n \n  .product p {\n    font-size: 12px;\n    color: #555;\n  }\n</style>\n<style>\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n \nli {\n  list-style: none;\n}\n \na {\n  text-decoration: none;\n}\n \n.news {"
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
          "text": "标题区域  \n \n内容区域  \n \n  margin: 100px auto;\n  width: 360px;\n  height: 200px;\n  /* background-color: pink; */\n}\n</style>\n \n<div class=\"news\"></div>\n<style>\n.news .hd {\n  height: 34px;\n  background-color: #eee;\n  border: 1px solid #dbdee1;\n  border-left: 0;\n}\n \n.news .hd a {\n  /* -1 盒子向上移动  */\n  margin-top: -1px;\n  display: block;\n  border-top: 3px solid #8400;\n  border-right: 1px solid #dbdee1;\n  width: 48px;\n  height: 34px;\n  background-color: #f;\n \n  text-align: center;\n  line-height: 32px;\n  font-size: 14px;\n  color: #333;\n}\n</style>\n \n<div class=\"hd\"><a href=\"#\">新闻</a></div>\n<style>\n.news .bd {\n  padding: 5px;\n}\n \n.news .bd li {\n  padding-left: 15px;\n  background-image: url(./images/square.png);\n  background-repeat: no-repeat;\n  background-position: 0 center;\n}"
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
          "text": ".news .bd li a {\n  padding-left: 20px;\n  background: url(./images/img.gif) no-repeat 0 center;\n \n  font-size: 12px;\n  color: #666;\n  line-height: 24px;\n}\n \n.news .bd li a:hover {\n  color: #8400;\n}\n</style>\n \n<div class=\"bd\">\n  <ul>\n    <li><a href=\"#\">点赞 “ 新农人 ” 温暖的伸手</a></li>\n    <li><a href=\"#\">在希望的田野上 ...</a></li>\n    <li><a href=\"#\">“ 中国天眼 ” 又有新发现  已在《自然》杂志发表</a></li>\n    <li><a href=\"#\">急！这个领域，缺人！月薪 4 万元还不好招！啥情况？</a></li>\n    <li><a href=\"#\">G9“ 带货 ” 背后：亏损面持续扩大，竞争环境激烈</a></li>\n    <li><a href=\"#\">多地力推二手房 “ 带押过户 ” ，有什么好处？</a></li>\n  </ul>\n</div>"
        }
      ]
    }
  ]
};
