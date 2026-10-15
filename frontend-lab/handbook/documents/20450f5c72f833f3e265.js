window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["20450f5c72f833f3e265"] = {
  "id": "20450f5c72f833f3e265",
  "title": "HTML+CSS day05.pdf",
  "treatment": "课件页级文本（配图回溯原件）",
  "sections": [
    {
      "title": "第1页",
      "level": 1,
      "page": 1,
      "blocks": [
        {
          "type": "text",
          "text": "CSS 第三天\n选择器、PxCook软件、盒子模型"
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
          "text": "选择器1"
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
          "text": "结构伪类选择器\n作用：根据元素的结构关系查找元素。\nli:first-child {\n  background-color: green;\n}"
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
          "text": ":nth-child(公式)\n作用：根据元素的结构关系查找多个元素。\n提示：公式中的n取值从 0 开始。"
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
          "text": "伪元素选择器\n作用：创建虚拟元素（伪元素），用来摆放装饰性的内容。\n注意点：\n• 必须设置 content: ””属性，用来 设置伪元素的内容，如果没有内容，则引号留空即可\n• 伪元素默认是行内显示模式\n• 权重和标签选择器相同\ndiv::before {\n  content: \"before 伪元素\";\n}\ndiv::after {\n  content: \"after 伪元素\";\n}"
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
          "text": "PxCook2"
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
          "text": "PxCook\nPxCook（像素大厨） 是一款切图设计工具软件。支持PSD文件的文字、颜色、距离自动智能识别。\n• 开发面板（自动智能识别）\n• 设计面板（手动测量尺寸和颜色）"
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
          "text": "PxCook\n创建项目 → 输入 项目名称、项目类型 Web → 单击按钮【创建项目】 → 单击按钮【添加】，导入设计稿"
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
          "text": "盒子模型3"
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
          "text": "盒子模型 – 组成\n作用：布局网页，摆放盒子和内容。"
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
          "text": "盒子模型 – 组成\n盒子模型重要组成部分：\n• 内容区域 – width & height\n• 内边距 – padding（出现在内容与盒子边缘之间）\n• 边框线 – border \n• 外边距 – margin（出现在盒子外面）\ndiv {\n  margin: 50px;\n  border: 5px solid brown;\n  padding: 20px;\n  width: 200px;\n  height: 200px;\n  background-color: pink;\n}"
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
          "text": "盒子模型 – 边框线\n属性名：border（bd）\n属性值：边框线粗细  线条样式  颜色（不区分顺序）\n常用线条样式\ndiv {\n  border: 5px solid brown;\n  width: 200px;\n  height: 200px;\n  background-color: pink;\n}"
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
          "text": "盒子模型 – 边框线\n设置单方向边框线\n属性名：border-方位名词（bd+方位名词首字母，例如，bdl）\n属性值：边框线粗细  线条样式  颜色（不区分顺序）\ndiv {\n  border-top: 2px solid red;\n  border-right: 3px dashed green;\n  border-bottom: 4px dotted blue;\n  border-left: 5px solid orange;\n  width: 200px;\n  height: 200px;\n  background-color: pink;\n}"
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
          "text": "盒子模型 – 内边距\n作用：设置 内容 与 盒子边缘 之间的距离。\n属性名：padding / padding-方位名词\ndiv {\n  /* 四个方向 内边距相同 */\n  padding: 30px;\n  /* 单独设置一个方向内边距 */\n  padding-top: 10px;\n  padding-right: 20px;\n  padding-bottom: 40px;\n  padding-left: 80px;\n  width: 200px;\n  height: 200px;\n  background-color: pink;\n}"
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
          "text": "盒子模型 – 内边距 – 多值写法\npadding 多值写法\n技巧：从上开始顺时针赋值，当前方向没有数值则与对面取值相同。\npadding-top: 10px;\npadding-right: 20px;\npadding-bottom: 40px;\npadding-left: 80px;"
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
          "text": "l 默认情况\n盒子尺寸 = 内容尺寸 + border 尺寸 + 内边距尺寸\nl 结论：给盒子加 border / padding 会撑大盒子\nl 解决\nl 手动做减法，减掉 border / padding 的尺寸\nl 內减模式：box-sizing: border-box\n盒子模型 – 尺寸计算"
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
          "text": "盒子模型 – 外边距\n作用：拉开两个盒子之间的距离\n属性名：margin\n提示：与 padding 属性值写法、含义相同\n技巧：版心居中 – 左右 margin 值 为 auto（盒子要有宽度）\ndiv {\n  margin: 0 auto;\n  width: 1000px;\n  height: 200px;\n  background-color: pink;\n}"
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
          "text": "清除默认样式\n清除标签默认的样式，比如：默认的内外边距。\n/* 清除默认内外边距 */\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n/* 清除列表项目符号 */\nli {\n  list-style: none;\n}\n淘宝京东"
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
          "text": "盒子模型 – 元素溢出\n作用：控制溢出元素的内容的显示方式。\n属性名：overflow\n属性值"
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
          "text": "外边距问题 – 合并现象\n场景：垂直排列的兄弟元素，上下 margin 会合并\n现象：取两个 margin 中的较大值生效\n.one {\n  margin-bottom: 50px;\n}\n.two {\n  margin-top: 20px;\n}"
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
          "text": "外边距问题 – 塌陷问题\n场景：父子级的标签，子级的添加 上外边距 会产生塌陷问题\n现象：导致父级一起向下移动\n解决方法：\n• 取消子级margin，父级设置padding\n• 父级设置 overflow: hidden\n• 父级设置 border-top\n.son {\n  margin-top: 50px;\n  width: 100px;\n  height: 100px;\n  background-color: orange;\n}"
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
          "text": "行内元素 – 内外边距问题\n场景：行内元素添加 margin 和 padding，无法改变元素垂直位置\n解决方法：给行内元素添加 line-height 可以改变垂直位置\nspan {\n  /* margin 和 padding 属性，无法改变垂直位置 */\n  margin: 50px;\n  padding: 20px;\n  /* 行高可以改变垂直位置 */\n  line-height: 100px;\n}"
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
          "text": "盒子模型 – 圆角\n作用：设置元素的外边框为圆角。\n属性名：border-radius\n属性值：数字+px / 百分比\n提示：属性值是圆角半径\n技巧：从左上角开始顺时针赋值，当前角没有数值则与对角取值相同。"
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
          "text": "l 常见应用 – 正圆形状\nl 给正方形盒子设置圆角属性值为 宽高的一半 / 50%\nl 常见应用 – 胶囊形状\nl 给长方形盒子设置圆角属性值为 盒子高度的一半\n盒子模型 – 圆角\nimg {\n  width: 200px;\n  height: 200px;\n  \n  border-radius: 100px;\n  border-radius: 50%;\n}\ndiv {\n  width: 200px;\n  height: 80px;\n  background-color: orange;\n  border-radius: 40px;\n}"
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
          "text": "盒子模型 – 阴影（拓展）\n作用：给元素设置阴影效果\n属性名：box-shadow\n属性值：X 轴偏移量  Y 轴偏移量  模糊半径  扩散半径  颜色  内外阴影\n注意： \n• X 轴偏移量 和 Y 轴偏移量 必须书写\n• 默认是外阴影，内阴影需要添加 inset\ndiv {\n  width: 200px;\n  height: 80px;\n  background-color: orange;\n  box-shadow: 2px 5px 10px 0 rgba(0, 0, 0, 0.5) inset;\n}"
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
          "text": "综合案例6"
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
          "text": "案例\n 综合案例一 – 产品卡片\nCSS 书写顺序：\n1. 盒子模型属性\n2. 文字样式\n3. 圆角、阴影等修饰属性"
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
          "text": "案例\n 综合案例二 – 新闻列表\n标题\n内容列表"
        }
      ]
    }
  ]
};
