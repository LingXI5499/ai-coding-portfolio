window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["5bd3754c36a1fadc8bd3"] = {
  "id": "5bd3754c36a1fadc8bd3",
  "title": "day06-Flex布局.pdf",
  "treatment": "课件页级文本（配图回溯原件）",
  "sections": [
    {
      "title": "第1页",
      "level": 1,
      "page": 1,
      "blocks": [
        {
          "type": "text",
          "text": "day06-Flex 布局  \n目标：熟练使用  Flex 完成结构化布局\n01- 标准流  \n标准流也叫文档流，指的是标签在页面中默认的排布规则，例如：块元素独占一行，行内元素可以一行显示多个。 \n02- 浮动  \n基本使用  \n作用：让块元素水平排列。\n属性名：oat\n属性值\nleft：左对齐\nright：右对齐\n <style>\n  /* 特点：顶对齐；具备行内块显示模式特点；浮动的盒子会脱标  */\n  .one {\n    width: 100px;\n    height: 100px;\n    background-color: brown;\n \n    oat: left;\n  }\n \n  .two {\n    width: 200px;\n    height: 200px;\n    background-color: orange;\n \n    /* oat: left; */\n \n    oat: right;\n  }\n</style>"
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
          "text": "特点：\n浮动后的盒子顶对齐\n浮动后的盒子具备行内块特点\n浮动后的盒子脱标，不占用标准流的位置\n产品区域布局  \nHTML 标签  \n \n \nCSS 样式  \n<div class=\"one\">one</div>\n<div class=\"two\">two</div>\n<!-- 版心：左右，右面： 8 个产品  →  8 个  li -->\n<div class=\"product\">\n  <div class=\"left\"></div>\n  <div class=\"right\">\n    <ul>\n      <li></li>\n      <li></li>\n      <li></li>\n      <li></li>\n      <li></li>\n      <li></li>\n      <li></li>\n      <li></li>\n    </ul>\n  </div>\n</div>"
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
          "text": "清除浮动  \n场景：浮动元素会脱标，如果父级没有高度，子级无法撑开父级高度（可能导致页面布局错乱）\n解决方法：清除浮动（清除浮动带来的影响）\n<style>\n  * {\n    margin: 0;\n    padding: 0;\n  }\n \n  li {\n    list-style: none;\n  }\n \n  .product {\n    margin: 50px auto;\n    width: 1226px;\n    height: 628px;\n    background-color: pink;\n  }\n \n  .left {\n    oat: left;\n    width: 234px;\n    height: 628px;\n    background-color: skyblue;\n  }\n \n  .right {\n    oat: right;\n    width: 978px;\n    height: 628px;\n    background-color: brown;\n  }\n \n  .right li {\n    oat: left;\n    margin-right: 14px;\n    margin-bottom: 14px;\n    width: 234px;\n    height: 300px;\n    background-color: orange;\n  }\n \n  /* 第四个 li 和第八个 li 去掉右侧的 margin */\n  .right li:nth-child(4n) {\n    margin-right: 0;\n  }\n \n  /* 细节：如果父级宽度不够，浮动的盒子会掉下来  */\n</style>"
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
          "text": "场景搭建  \n \n额外标签法  \n在父元素内容的最后添加一个块级元素，设置  CSS 属性  clear: both \n<style>\n  .top {\n    margin: 10px auto;\n    width: 1200px;\n    /* height: 300px; */\n    background-color: pink;\n  }\n \n  .left {\n    oat: left;\n    width: 200px;\n    height: 300px;\n    background-color: skyblue;\n  }\n \n  .right {\n    oat: right;\n    width: 950px;\n    height: 300px;\n    background-color: orange;\n  }\n \n  .bottom {\n    height: 100px;\n    background-color: brown;\n  }\n \n</style>\n \n<div class=\"top\">\n  <div class=\"left\"></div>\n  <div class=\"right\"></div>\n</div>\n<div class=\"bottom\"></div>"
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
          "text": "单伪元素法  \n1. 准备  after 伪元素\n \n2. 父级使用  clearx 类\n \n双伪元素法  \n1. 准备  after 和  before 伪元素\n \n2. 父级使用  clearx 类\n \noverfow 法  \n<style>\n.clearx {\n  clear: both;\n}\n</style>\n \n<div class=\"father\">\n  <div class=\"left\"></div>\n  <div class=\"right\"></div>\n  <div class=\"clearx\"></div>\n</div>\n.clearx::after {\n  content: \"\";\n  display: block;\n  clear: both;\n}\n<div class=\"father clearx\"></div>\n/* before 解决外边距塌陷问题  */\n/* 双伪元素法  */\n.clearx::before,\n.clearx::after {\n  content: \"\";\n  display: table;\n}\n \n/* after 清除浮动  */\n.clearx::after {\n  clear: both;\n}\n<div class=\"father clearx\"></div>"
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
          "text": "03-Flex 布局  \nFlex 布局也叫弹性布局，是浏览器提倡的布局模型，非常适合结构化布局，提供了强大的空间分布和对齐能力。\nFlex 模型不会产生浮动布局中脱标现象，布局网页更简单、更灵活。\nFlex 组成  \n设置方式：给父元素设置  display: ex，子元素可以自动挤压或拉伸\n组成部分：\n弹性容器\n弹性盒子\n主轴：默认在水平方向\n侧轴  / 交叉轴：默认在垂直方向\n.father {\n  margin: 10px auto;\n  width: 1200px;\n  /* height: 300px; */\n  background-color: pink;\n \n  overow: hidden;\n}"
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
          "text": "主轴对齐方式  \n属性名：justify-content\n侧轴对齐方式  \nalign-items ：当前弹性容器内所有弹性盒子的侧轴对齐方式（给弹性容器设置）\nalign-self ：单独控制某个弹性盒子的侧轴对齐方式（给弹性盒子设置）\n修改主轴方向  \n主轴默认在水平方向，侧轴默认在垂直方向\n属性名：ex-direction"
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
          "text": "弹性伸缩比  \n作用：控制弹性盒子的主轴方向的尺寸。\n属性名：ex\n属性值：整数数字，表示占用父级剩余尺寸的份数。\n弹性盒子换行  \n弹性盒子可以自动挤压或拉伸，默认情况下，所有弹性盒子都在一行显示。\n属性名：ex-wrap\n属性值\nwrap ：换行\nnowrap ：不换行（默认）\n行内对齐方式  \n属性名：align-content \n注意：该属性对单行弹性盒子模型无效。 \n04- 综合案例  – 抖音解决方案"
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
          "text": "整体布局  \n \n列表布局  \n \n<style>\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n \nli {\n  list-style: none;\n}\n \n.box {\n  margin: 50px auto;\n  width: 1200px;\n  height: 418px;\n  border: 1px solid #ddd;\n  border-radius: 10px;\n}\n</style>\n \n<div class=\"box\"></div>\n<style>\n.box ul {\n  display: ex;\n  /* 弹性盒子换行  */\n  ex-wrap: wrap;\n  /* 调整主轴对齐方式  */\n  justify-content: space-between;\n \n  /* 调整  行对齐方式  */\n  align-content: space-between;"
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
          "text": "内容样式  \n \n  padding: 90px 40px 90px 60px;\n  height: 418px;\n}\n \n.box li {\n  display: ex;\n  width: 500px;\n  height: 88px;\n  /* background-color: pink; */\n}\n</style>\n \n<div class=\"box\">\n  <ul>\n    <li>1</li>\n    <li>2</li>\n    <li>3</li>\n    <li>4</li>\n  </ul>\n</div>\n<style>\n.box .pic {\n  margin-right: 15px;\n}\n \n.box .text h4 {\n  line-height: 40px;\n  font-size: 20px;\n  font-weight: 400;\n  color: #333;\n}\n \n.box .text p {\n  font-size: 14px;\n  color: #666;\n}\n</style>\n \n<ul>\n  <li>\n    <div class=\"pic\">\n      <img src=\"./images/1.svg\" alt=\"\">\n    </div>\n    <div class=\"text\">\n      <h4>一键发布多端</h4>\n      <p>发布视频到抖音短视频、西瓜视频及今日头条</p>\n    </div>\n  </li>\n  <li>"
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
          "text": "<div class=\"pic\">\n      <img src=\"./images/2.svg\" alt=\"\">\n    </div>\n    <div class=\"text\">\n      <h4>管理视频内容</h4>\n      <p>支持修改已发布稿件状态和实时查询视频审核状态</p>\n    </div>\n  </li>\n  <li>\n    <div class=\"pic\">\n      <img src=\"./images/3.svg\" alt=\"\">\n    </div>\n    <div class=\"text\">\n      <h4>发布携带组件</h4>\n      <p>支持分享内容携带小程序、地理位置信息等组件，扩展内容及突出地域性</p>\n    </div>\n  </li>\n  <li>\n    <div class=\"pic\">\n      <img src=\"./images/4.svg\" alt=\"\">\n    </div>\n    <div class=\"text\">\n      <h4>数据评估分析</h4>\n      <p>获取视频在对应产品内的数据表现、获取抖音热点，及时进行表现评估</p>\n    </div>\n  </li>\n</ul>"
        }
      ]
    }
  ]
};
