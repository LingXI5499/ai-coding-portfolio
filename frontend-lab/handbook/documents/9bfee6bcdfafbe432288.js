window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["9bfee6bcdfafbe432288"] = {
  "id": "9bfee6bcdfafbe432288",
  "title": "day08-CSS高级.pdf",
  "treatment": "课件页级文本（配图回溯原件）",
  "sections": [
    {
      "title": "第1页",
      "level": 1,
      "page": 1,
      "blocks": [
        {
          "type": "text",
          "text": "day08-CSS 高级  \n目标：掌握定位的作用及特点；掌握  CSS 高级技巧\n01- 定位  \n作用：灵活的改变盒子在网页中的位置\n实现：\n1. 定位模式： position\n2. 边偏移：设置盒子的位置\nleft\nright\ntop\nbottom\n相对定位  \nposition: relative\n特点：\n不脱标，占用自己原来位置\n显示模式特点保持不变\n设置边偏移则相对自己原来位置移动\n \n绝对定位  \nposition: absolute\n使用场景：子级绝对定位，父级相对定位（子绝父相）\n特点：\n脱标，不占位\n显示模式具备行内块特点\n设置边偏移则相对最近的已经定位的祖先元素改变位置\n如果祖先元素都未定位，则相对浏览器可视区改变位置\ndiv {\n  position: relative;\n  top: 100px;\n  left: 200px;\n}"
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
          "text": "定位居中  \n实现步骤：\n1. 绝对定位\n2. 水平、垂直边偏移为  50%\n3. 子级向左、上移动自身尺寸的一半\n左、上的外边距为  – 尺寸的一半\ntransform: translate(-50%, -50%)\n \n固定定位  \nposition: xed\n场景：元素的位置在网页滚动时不会改变\n.father {\n  position: relative;\n}\n \n.father span {\n  position: absolute;\n  top: 0;\n  right: 0;\n}\nimg {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n \n  /* margin-left: -265px;\n  margin-top: -127px; */\n \n  /* 方便：  50% 就是自己宽高的一半  */\n  transform: translate(-50%, -50%);\n}"
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
          "text": "特点：\n脱标，不占位\n显示模式具备行内块特点\n设置边偏移相对浏览器窗口改变位置\n \n堆叠层级 z-index  \n默认效果：按照标签书写顺序，后来者居上\n作用：设置定位元素的层级顺序，改变定位元素的显示顺序\n属性名：z-index\n属性值：整数数字（默认值为 0 ，取值越大，层级越高）\ndiv {\n  position: xed;\n  top: 0;\n  right: 0;\n \n  width: 500px;\n}"
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
          "text": "02- 高级技巧  \nCSS 精灵  \nCSS 精灵，也叫  CSS Sprites，是一种网页图片应用处理方式。把网页中一些背景图片整合到一张图片文件中，再\nbackground-position 精确的定位出背景图片的位置。\n优点：减少服务器被请求次数，减轻服务器的压力，提高页面加载速度\n实现步骤：\n1. 创建盒子，盒子尺寸与小图尺寸相同\n2. 设置盒子背景图为精灵图\n.box1 {\n  background-color: pink;\n  /* 取值是整数，默认是 0 ，取值越大显示顺序越靠上  */\n  z-index: 1;\n}\n \n.box2 {\n  background-color: skyblue;\n  left: 100px;\n  top: 100px;\n \n  z-index: 2;\n}"
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
          "text": "3. 添加  background-position 属性，改变背景图位置\n        3.1 使用  PxCook 测量小图片左上角坐标\n        3.2 取负数坐标为  background-position 属性值（向左上移动图片位置）\n案例 - 京东服务  \nHTML 结构  \n \nCSS 样式  \n \n<div class=\"service\">\n  <ul>\n    <li>\n      <h5></h5>\n      <p>品类齐全，轻松购物</p>\n    </li>\n    <li>\n      <h5></h5>\n      <p>多仓直发，极速配送</p>\n    </li>\n    <li>\n      <h5></h5>\n      <p>正品行货，精致服务</p>\n    </li>\n    <li>\n      <h5></h5>\n      <p>天天低价，畅选无忧</p>\n    </li>\n  </ul>\n</div>\n<style>\n  * {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n  }\n \n  li {\n    list-style: none;\n  }\n \n  .service {\n    margin: 100px auto;\n    width: 1190px;"
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
          "text": "字体图标  \n    height: 42px;\n    /* background-color: pink; */\n  }\n \n  .service ul {\n    display: ex;\n  }\n \n  .service li {\n    display: ex;\n    padding-left: 40px;\n    width: 297px;\n    height: 42px;\n    /* background-color: skyblue; */\n  }\n \n  .service li h5 {\n    margin-right: 10px;\n    width: 36px;\n    height: 42px;\n    /* background-color: pink; */\n    background: url(./images/sprite.png) 0 -192px;\n  }\n \n  .service li:nth-child(2) h5 {\n    background-position: -41px -192px;\n  }\n \n  .service li:nth-child(3) h5 {\n    background-position: -82px -192px;\n  }\n \n  .service li:nth-child(4) h5 {\n    background-position: -123px -192px;\n  }\n \n  .service li p {\n    font-size: 18px;\n    color: #444;\n    font-weight: 700;\n    line-height: 42px;\n  }\n</style>"
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
          "text": "字体图标：展示的是图标，本质是字体\n作用：在网页中添加简单的、颜色单一的小图标\n优点\n灵活性：灵活地修改样式，例如：尺寸、颜色等\n轻量级：体积小、渲染快、降低服务器请求次数\n兼容性：几乎兼容所有主流浏览器\n使用方便：先下载再使用\n下载字体  \niconfont 图标库：https://www.iconfont.cn/ \n登录  →  素材库  →  官方图标库  →  进入图标库  →  选图标，加入购物车  →  购物车，添加至项目，确定  →  下载至本地 \n使用字体  \n1. 引入字体样式表（ iconfont.css ） \n2. 标签使用字体图标类名\niconfont ：字体图标基本样式（字体名，字体大小等等）\nicon-xxx ：图标对应的类名\n上传矢量图  \n作用：项目特有的图标上传到  iconfont 图标库，生成字体"
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
          "text": "上传步骤：上传  →  上传图标  →  选择  svg 矢量图，打开  →  提交  →  系统审核\n03-CSS 修饰属性  \n垂直对齐方式  \n属性名： vertical-align\n过渡  \n作用：可以为一个元素在不同状态之间切换的时候添加过渡效果\n属性名：transition （复合属性）\n属性值：过渡的属性   花费时间  (s)\n提示："
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
          "text": "过渡的属性可以是具体的  CSS 属性\n也可以为  all （两个状态属性值不同的所有属性，都产生过渡效果）\ntransition 设置给元素本身\n \n透明度 opacity  \n作用：设置整个元素的透明度（包含背景和内容）\n属性名： opacity\n属性值： 0 – 1\n0 ：完全透明（元素不可见）\n1 ：不透明\n0-1 之间小数：半透明\n光标类型 cursor  \n作用：鼠标悬停在元素上时指针显示样式\n属性名： cursor\n04- 综合案例 - 轮播图  \nimg {\n  width: 200px;\n  height: 200px;\n  transition: all 1s;\n}\n \nimg:hover {\n  width: 500px;\n  height: 500px;\n}"
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
          "text": "图片效果  \nHTML 结构  \n \nCSS 样式  \n \n<div class=\"banner\">\n    <!-- 图 : ul > li -->\n    <ul>\n      <li><a href=\"#\"><img src=\"./images/banner1.jpg\" alt=\"\"></a></li>\n      <li><a href=\"#\"><img src=\"./images/banner2.jpg\" alt=\"\"></a></li>\n      <li><a href=\"#\"><img src=\"./images/banner3.jpg\" alt=\"\"></a></li>\n    </ul>\n</div>\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n \nli {\n  list-style: none;\n}\n \n.banner {\n  position: relative;\n  margin: 100px auto;\n  width: 564px;\n  height: 315px;\n  /* background-color: pink; */\n  overow: hidden;\n}\n \n/* 图片  */\n.banner img {"
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
          "text": "箭头  \nHTML 结构  \n \nCSS 样式  \n \n  width: 564px;\n  border-radius: 12px;\n  vertical-align: middle;\n}\n \n.banner ul {\n  display: ex;\n}\n<!-- 箭头  -->\n<!-- 上一张  prev -->\n<a href=\"#\" class=\"prev\">\n  <i class=\"iconfont icon-zuoce\"></i>\n</a>\n<!-- 下一张  next -->\n<a href=\"#\" class=\"next\">\n  <i class=\"iconfont icon-youce\"></i>\n</a>\n/* 箭头  */\n.banner .prev,\n.banner .next {\n  /* 隐藏  */\n  display: none;\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n \n  width: 20px;\n  height: 30px;\n  background-color: rgba(0,0,0, 0.3);\n \n  text-decoration: none;\n  color: #f;\n  line-height: 30px;\n}\n \n/* 鼠标滑到 banner 区域，箭头要显示  display:block */\n.banner:hover .prev,\n.banner:hover .next {\n  display: block;\n}\n \n.banner .prev {\n  left: 0;"
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
          "text": "圆点  \nHTML 结构  \n \nCSS 样式  \n \n  border-radius: 0 15px 15px 0;\n}\n \n.banner .next {\n  right: 0;\n  border-radius: 15px 0 0 15px;\n  text-align: center;\n}\n<!-- 圆点  -->\n<ol>\n  <li></li>\n  <li class=\"active\"></li>\n  <li></li>\n</ol>\n/* 圆点  */\n.banner ol {\n  position: absolute;\n  bottom: 20px;\n  left: 50%;\n  transform: translateX(-50%);\n  height: 13px;\n  background-color: rgba(255,255,255,0.3);\n \n  display: ex;\n \n  border-radius: 10px;\n}\n \n.banner ol li {\n  margin: 3px;\n  width: 8px;\n  height: 8px;\n  background-color: #f;\n  border-radius: 50%;\n  cursor: pointer;\n}\n \n/* 橙色的 li */\n.banner ol .active {\n  background-color: #5000;\n}"
        }
      ]
    }
  ]
};
