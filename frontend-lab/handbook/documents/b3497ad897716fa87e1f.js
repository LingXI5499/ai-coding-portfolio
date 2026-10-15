window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["b3497ad897716fa87e1f"] = {
  "id": "b3497ad897716fa87e1f",
  "title": "HTML+CSS day06.pdf",
  "treatment": "课件页级文本（配图回溯原件）",
  "sections": [
    {
      "title": "第1页",
      "level": 1,
      "page": 1,
      "blocks": [
        {
          "type": "text",
          "text": "CSS 第四天\n标准流、浮动、Flex 布局"
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
          "text": "标准流1"
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
          "text": "标准流\n标准流也叫文档流，指的是标签在页面中默认的排布规则，例如：块元素独占一行，行内元素可以一行显示多个。\n浮动（了解）\nFlex 布局"
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
          "text": "浮动2"
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
          "text": "浮动\n作用：让块元素水平排列。\n属性名：float\n属性值\n• left：左对齐\n• right：右对齐\n特点：\n• 浮动后的盒子顶对齐\n• 浮动后的盒子具备行内块特点\n• 浮动后的盒子脱标，不占用标准流的位置"
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
          "text": "总结总结 1. 浮动后的盒子有什么特点？\n• 顶对齐\n• 具备行内块特点\n• 脱标"
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
          "text": "浮动 – 产品区域布局"
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
          "text": "清除浮动\n场景：浮动元素会脱标，如果父级没有高度，子级无法撑开父级高度（可能导致页面布局错乱）\n解决方法：清除浮动（清除浮动带来的影响）"
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
          "text": "清除浮动\n方法一：额外标签法\n• 在父元素内容的最后添加一个块级元素，设置 CSS 属性 clear: both\n方法二：单伪元素法\n方法四：overflow\n• 父元素添加 CSS 属性 overflow: hidden\n.clearfix::after {\n  content: \"\";\n  display: block;\n  clear: both;\n}\n方法三：双伪元素法（推荐）\n.clearfix::before,\n.clearfix::after {\n  content: \"\";\n  display: table;\n}\n.clearfix::after {\n  clear: both;\n}"
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
          "text": "l 浮动属性 float，left 表示左浮动，right 表示右浮动\nl 特点\n1. 浮动后的盒子顶对齐\n2. 浮动后的盒子具备行内块特点\n3. 父级宽度不够，浮动的子级会换行\n4. 浮动后的盒子脱标\nl 清除浮动：子级浮动，父级没有高度，子级无法撑开父级高度，影响布局效果\n1. 双伪元素法\nl 拓展：浮动本质作用是实现图文混排效果\n浮动 – 总结"
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
          "text": "Flex 布局3"
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
          "text": "Flex – 认识\nFlex 布局也叫弹性布局，是浏览器提倡的布局模型，非常适合结构化布局，提供了强大的空间分布和对齐能力。\nFlex 模型不会产生浮动布局中脱标现象，布局网页更简单、更灵活。"
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
          "text": "Flex – 组成\n设置方式：给父元素设置 display: flex，子元素可以自动挤压或拉伸\n组成部分：\n• 弹性容器\n• 弹性盒子\n• 主轴：默认在水平方向\n• 侧轴 / 交叉轴：默认在垂直方向"
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
          "text": "Flex 布局\n描述 属性\n创建 flex 容器 display: flex\n主轴对齐方式 justify-content\n侧轴对齐方式 align-items\n某个弹性盒子\n侧轴对齐方式\nalign-self\n修改主轴方向 flex-direction\n弹性伸缩比 flex\n弹性盒子换行 flex-wrap\n行对齐方式 align-content"
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
          "text": "主轴对齐方式\n属性名：justify-content"
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
          "text": "主轴对齐方式\n• center\n• space-between\n• space-around\n• space-evenly"
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
          "text": "Flex 布局\n描述 属性\n创建 flex 容器 display: flex\n主轴对齐方式 justify-content\n侧轴对齐方式 align-items\n某个弹性盒子\n侧轴对齐方式\nalign-self\n修改主轴方向 flex-direction\n弹性伸缩比 flex\n弹性盒子换行 flex-wrap\n行对齐方式 align-content"
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
          "text": "侧轴对齐方式\n属性名\n• align-items：当前弹性容器内所有弹性盒子的侧轴对齐方式（给弹性容器设置）\n• align-self：单独控制某个弹性盒子的侧轴对齐方式（给弹性盒子设置）"
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
          "text": "Flex 布局\n描述 属性\n创建 flex 容器 display: flex\n主轴对齐方式 justify-content\n侧轴对齐方式 align-items\n某个弹性盒子\n侧轴对齐方式\nalign-self\n修改主轴方向 flex-direction\n弹性伸缩比 flex\n弹性盒子换行 flex-wrap\n行对齐方式 align-content"
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
          "text": "修改主轴方向\n主轴默认在水平方向，侧轴默认在垂直方向\n属性名：flex-direction\n属性值"
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
          "text": "Flex 布局\n描述 属性\n创建 flex 容器 display: flex\n主轴对齐方式 justify-content\n侧轴对齐方式 align-items\n某个弹性盒子\n侧轴对齐方式\nalign-self\n修改主轴方向\nflex-direction\n弹性伸缩比 flex\n弹性盒子换行 flex-wrap\n行对齐方式 align-content"
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
          "text": "弹性伸缩比\n作用：控制弹性盒子的主轴方向的尺寸。\n属性名：flex\n属性值：整数数字，表示占用父级剩余尺寸的份数。"
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
          "text": "Flex 布局\n描述 属性\n创建 flex 容器 display: flex\n主轴对齐方式 justify-content\n侧轴对齐方式 align-items\n某个弹性盒子\n侧轴对齐方式\nalign-self\n修改主轴方向 flex-direction\n弹性伸缩比 flex\n弹性盒子换行 flex-wrap\n行对齐方式 align-content"
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
          "text": "弹性盒子换行\n弹性盒子可以自动挤压或拉伸，默认情况下，所有弹性盒子都在一行显示。\n属性名：flex-wrap\n属性值\n• wrap：换行\n• nowrap：不换行（默认）\nwrap"
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
          "text": "Flex 布局\n描述 属性\n创建 flex 容器 display: flex\n主轴对齐方式 justify-content\n侧轴对齐方式 align-items\n某个弹性盒子\n侧轴对齐方式\nalign-self\n修改主轴方向 flex-direction\n弹性伸缩比 flex\n弹性盒子换行 flex-wrap\n行对齐方式 align-content"
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
          "text": "行对齐方式\n属性名：align-content\n属性值\n注意：该属性对单行弹性盒子模型无效。"
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
          "text": "综合案例4"
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
          "text": "案例\n 综合案例 – 抖音解决方案\n• 标签结构\ndiv > ul > li * 4\n• ul 样式\n1. flex 布局\n2. 弹性换行 flex-wrap: wrap\n3. 主轴对齐方式：space-between\n4. 行对齐方式：space-between"
        }
      ]
    }
  ]
};
