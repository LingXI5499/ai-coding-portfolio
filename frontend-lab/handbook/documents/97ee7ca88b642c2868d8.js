window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["97ee7ca88b642c2868d8"] = {
  "id": "97ee7ca88b642c2868d8",
  "title": "day08-CSS高级.md",
  "treatment": "章节知识与练习",
  "sections": [
    {
      "title": "day08-CSS高级",
      "trail": [
        "day08-CSS高级"
      ],
      "level": 1,
      "line": 1,
      "blocks": [
        {
          "type": "text",
          "text": "> 目标：掌握定位的作用及特点；掌握 CSS 高级技巧"
        }
      ]
    },
    {
      "title": "01-定位",
      "trail": [
        "day08-CSS高级",
        "01-定位"
      ],
      "level": 2,
      "line": 5,
      "blocks": [
        {
          "type": "text",
          "text": "作用：灵活的改变盒子在网页中的位置\n\n实现：\n\n1.定位模式：position\n\n2.边偏移：设置盒子的位置\n\n* left\n* right\n* top\n* bottom"
        }
      ]
    },
    {
      "title": "相对定位",
      "trail": [
        "day08-CSS高级",
        "01-定位",
        "相对定位"
      ],
      "level": 3,
      "line": 20,
      "blocks": [
        {
          "type": "text",
          "text": "**position: relative**\n\n特点：\n\n* 不脱标，占用自己原来位置\n* 显示模式特点保持不变\n* 设置边偏移则相对自己原来位置移动"
        },
        {
          "type": "code",
          "language": "css",
          "text": "div {\n  position: relative;\n  top: 100px;\n  left: 200px;\n}"
        }
      ]
    },
    {
      "title": "绝对定位",
      "trail": [
        "day08-CSS高级",
        "01-定位",
        "绝对定位"
      ],
      "level": 3,
      "line": 38,
      "blocks": [
        {
          "type": "text",
          "text": "**position: absolute**\n\n使用场景：子级绝对定位，父级相对定位（**子绝父相**）\n\n特点：\n\n* 脱标，不占位\n* 显示模式具备行内块特点\n* 设置边偏移则相对最近的已经定位的祖先元素改变位置\n* 如果祖先元素都未定位，则相对浏览器可视区改变位置"
        },
        {
          "type": "code",
          "language": "css",
          "text": ".father {\n  position: relative;\n}\n\n.father span {\n  position: absolute;\n  top: 0;\n  right: 0;\n}"
        }
      ]
    },
    {
      "title": "定位居中",
      "trail": [
        "day08-CSS高级",
        "01-定位",
        "定位居中"
      ],
      "level": 3,
      "line": 63,
      "blocks": [
        {
          "type": "text",
          "text": "[课程配图见原资料]\n\n实现步骤：\n\n1. 绝对定位\n2. 水平、垂直边偏移为 50%\n3. 子级向左、上移动自身尺寸的一半\n\n* 左、上的外边距为 –尺寸的一半\n* transform: translate(-50%, -50%)"
        },
        {
          "type": "code",
          "language": "css",
          "text": "img {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n\n  /* margin-left: -265px;\n  margin-top: -127px; */\n\n  /* 方便： 50% 就是自己宽高的一半 */\n  transform: translate(-50%, -50%);\n}"
        }
      ]
    },
    {
      "title": "固定定位",
      "trail": [
        "day08-CSS高级",
        "01-定位",
        "固定定位"
      ],
      "level": 3,
      "line": 90,
      "blocks": [
        {
          "type": "text",
          "text": "**position: fixed**\n\n场景：元素的位置在网页滚动时不会改变\n\n特点：\n\n* 脱标，不占位\n* 显示模式具备行内块特点\n* 设置边偏移相对浏览器窗口改变位置"
        },
        {
          "type": "code",
          "language": "css",
          "text": "div {\n  position: fixed;\n  top: 0;\n  right: 0;\n\n  width: 500px;\n}"
        }
      ]
    },
    {
      "title": "堆叠层级z-index",
      "trail": [
        "day08-CSS高级",
        "01-定位",
        "堆叠层级z-index"
      ],
      "level": 3,
      "line": 112,
      "blocks": [
        {
          "type": "text",
          "text": "[课程配图见原资料]\n\n默认效果：按照标签书写顺序，后来者居上\n\n作用：设置定位元素的层级顺序，改变定位元素的显示顺序\n\n属性名：**z-index**\n\n属性值：**整数数字**（默认值为0，取值越大，层级越高）"
        },
        {
          "type": "code",
          "language": "css",
          "text": ".box1 {\n  background-color: pink;\n  /* 取值是整数，默认是0，取值越大显示顺序越靠上 */\n  z-index: 1;\n}\n\n.box2 {\n  background-color: skyblue;\n  left: 100px;\n  top: 100px;\n\n  z-index: 2;\n}"
        }
      ]
    },
    {
      "title": "CSS精灵",
      "trail": [
        "day08-CSS高级",
        "02-高级技巧",
        "CSS精灵"
      ],
      "level": 3,
      "line": 142,
      "blocks": [
        {
          "type": "text",
          "text": "CSS 精灵，也叫 **CSS Sprites**，是一种网页**图片应用处理方式**。把网页中**一些背景图片**整合到**一张图片**文件中，再**background-position** 精确的定位出背景图片的位置。\n\n[课程配图见原资料]\n\n优点：减少服务器被请求次数，减轻服务器的压力，提高页面加载速度\n\n[课程配图见原资料]\n\n实现步骤：\n\n1. 创建盒子，**盒子尺寸**与**小图**尺寸**相同**\n2. 设置盒子**背景图**为精灵图\n3. 添加 **background-position** 属性，改变**背景图位置**\n\n​       3.1 使用 PxCook 测量小图片**左上角坐标**\n\n​       3.2 取**负数**坐标为 background-position 属性值（向左上移动图片位置）"
        }
      ]
    },
    {
      "title": "案例-京东服务",
      "trail": [
        "day08-CSS高级",
        "02-高级技巧",
        "案例-京东服务"
      ],
      "level": 3,
      "line": 162,
      "blocks": [
        {
          "type": "text",
          "text": "[课程配图见原资料]"
        }
      ]
    },
    {
      "title": "HTML结构",
      "trail": [
        "day08-CSS高级",
        "02-高级技巧",
        "案例-京东服务",
        "HTML结构"
      ],
      "level": 4,
      "line": 166,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<div class=\"service\">\n  <ul>\n    <li>\n      <h5></h5>\n      <p>品类齐全，轻松购物</p>\n    </li>\n    <li>\n      <h5></h5>\n      <p>多仓直发，极速配送</p>\n    </li>\n    <li>\n      <h5></h5>\n      <p>正品行货，精致服务</p>\n    </li>\n    <li>\n      <h5></h5>\n      <p>天天低价，畅选无忧</p>\n    </li>\n  </ul>\n</div>"
        }
      ]
    },
    {
      "title": "CSS样式",
      "trail": [
        "day08-CSS高级",
        "02-高级技巧",
        "案例-京东服务",
        "CSS样式"
      ],
      "level": 4,
      "line": 191,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<style>\n  * {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n  }\n\n  li {\n    list-style: none;\n  }\n\n  .service {\n    margin: 100px auto;\n    width: 1190px;\n    height: 42px;\n    /* background-color: pink; */\n  }\n\n  .service ul {\n    display: flex;\n  }\n\n  .service li {\n    display: flex;\n    padding-left: 40px;\n    width: 297px;\n    height: 42px;\n    /* background-color: skyblue; */\n  }\n\n  .service li h5 {\n    margin-right: 10px;\n    width: 36px;\n    height: 42px;\n    /* background-color: pink; */\n    background: url(./images/sprite.png) 0 -192px;\n  }\n\n  .service li:nth-child(2) h5 {\n    background-position: -41px -192px;\n  }\n\n  .service li:nth-child(3) h5 {\n    background-position: -82px -192px;\n  }\n\n  .service li:nth-child(4) h5 {\n    background-position: -123px -192px;\n  }\n\n  .service li p {\n    font-size: 18px;\n    color: #444;\n    font-weight: 700;\n    line-height: 42px;\n  }\n</style>"
        }
      ]
    },
    {
      "title": "字体图标",
      "trail": [
        "day08-CSS高级",
        "02-高级技巧",
        "字体图标"
      ],
      "level": 3,
      "line": 253,
      "blocks": [
        {
          "type": "text",
          "text": "[课程配图见原资料]\n\n字体图标：**展示的是图标，本质是字体**\n\n作用：在网页中添加**简单的、颜色单一**的小图标\n\n优点\n\n* **灵活性**：灵活地修改样式，例如：尺寸、颜色等\n* **轻量级**：体积小、渲染快、降低服务器请求次数\n* **兼容性**：几乎兼容所有主流浏览器\n* **使用方便**：先下载再使用"
        }
      ]
    },
    {
      "title": "下载字体",
      "trail": [
        "day08-CSS高级",
        "02-高级技巧",
        "字体图标",
        "下载字体"
      ],
      "level": 4,
      "line": 268,
      "blocks": [
        {
          "type": "text",
          "text": "iconfont 图标库：<https://www.iconfont.cn/> \n\n登录 → 素材库 → 官方图标库 → 进入图标库 → 选图标，加入购物车 → 购物车，添加至项目，确定 → 下载至本地 \n\n[课程配图见原资料]"
        }
      ]
    },
    {
      "title": "使用字体",
      "trail": [
        "day08-CSS高级",
        "02-高级技巧",
        "字体图标",
        "使用字体"
      ],
      "level": 4,
      "line": 276,
      "blocks": [
        {
          "type": "text",
          "text": "1. 引入字体样式表（iconfont.css） \n\n[课程配图见原资料]\n\n2. 标签使用字体图标类名\n   * iconfont：字体图标基本样式（字体名，字体大小等等）\n   * icon-xxx：图标对应的类名\n\n[课程配图见原资料]"
        }
      ]
    },
    {
      "title": "上传矢量图",
      "trail": [
        "day08-CSS高级",
        "02-高级技巧",
        "字体图标",
        "上传矢量图"
      ],
      "level": 4,
      "line": 288,
      "blocks": [
        {
          "type": "text",
          "text": "作用：项目特有的图标上传到 iconfont 图标库，生成字体\n\n[课程配图见原资料]\n\n上传步骤：上传 → 上传图标 → 选择 svg 矢量图，打开 → 提交 → 系统审核"
        }
      ]
    },
    {
      "title": "垂直对齐方式",
      "trail": [
        "day08-CSS高级",
        "03-CSS修饰属性",
        "垂直对齐方式"
      ],
      "level": 3,
      "line": 298,
      "blocks": [
        {
          "type": "text",
          "text": "[课程配图见原资料]\n\n属性名：vertical-align\n\n[课程配图见原资料]"
        }
      ]
    },
    {
      "title": "过渡",
      "trail": [
        "day08-CSS高级",
        "03-CSS修饰属性",
        "过渡"
      ],
      "level": 3,
      "line": 306,
      "blocks": [
        {
          "type": "text",
          "text": "作用：可以为一个元素在不同状态之间切换的时候添加**过渡效果**\n\n属性名：**transition（复合属性）**\n\n属性值：**过渡的属性  花费时间 (s)**\n\n提示：\n\n* 过渡的属性可以是具体的 CSS 属性\n* 也可以为 all（两个状态属性值不同的所有属性，都产生过渡效果）\n* transition 设置给元素本身"
        },
        {
          "type": "code",
          "language": "css",
          "text": "img {\n  width: 200px;\n  height: 200px;\n  transition: all 1s;\n}\n\nimg:hover {\n  width: 500px;\n  height: 500px;\n}",
          "note": "原资料中含排错代码或不完整片段，保留错误供分析；不会自动执行。"
        }
      ]
    },
    {
      "title": "透明度opacity",
      "trail": [
        "day08-CSS高级",
        "03-CSS修饰属性",
        "透明度opacity"
      ],
      "level": 3,
      "line": 333,
      "blocks": [
        {
          "type": "text",
          "text": "作用：设置**整个元素的透明度**（包含背景和内容）\n\n属性名：opacity\n\n属性值：0 – 1\n\n* 0：完全透明（元素不可见）\n* 1：不透明\n* 0-1之间小数：半透明"
        }
      ]
    },
    {
      "title": "光标类型cursor",
      "trail": [
        "day08-CSS高级",
        "03-CSS修饰属性",
        "光标类型cursor"
      ],
      "level": 3,
      "line": 345,
      "blocks": [
        {
          "type": "text",
          "text": "作用：鼠标悬停在元素上时指针显示样式\n\n属性名：cursor\n\n[课程配图见原资料]"
        }
      ]
    },
    {
      "title": "04-综合案例-轮播图",
      "trail": [
        "day08-CSS高级",
        "04-综合案例-轮播图"
      ],
      "level": 2,
      "line": 353,
      "blocks": [
        {
          "type": "text",
          "text": "[课程配图见原资料]"
        }
      ]
    },
    {
      "title": "HTML结构",
      "trail": [
        "day08-CSS高级",
        "04-综合案例-轮播图",
        "图片效果",
        "HTML结构"
      ],
      "level": 4,
      "line": 359,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<div class=\"banner\">\n  <!-- 图: ul > li -->\n  <ul>\n    <li>\n      <a href=\"#\"><img src=\"./images/banner1.jpg\" alt=\"\" /></a>\n    </li>\n    <li>\n      <a href=\"#\"><img src=\"./images/banner2.jpg\" alt=\"\" /></a>\n    </li>\n    <li>\n      <a href=\"#\"><img src=\"./images/banner3.jpg\" alt=\"\" /></a>\n    </li>\n  </ul>\n</div>"
        }
      ]
    },
    {
      "title": "CSS样式",
      "trail": [
        "day08-CSS高级",
        "04-综合案例-轮播图",
        "图片效果",
        "CSS样式"
      ],
      "level": 4,
      "line": 372,
      "blocks": [
        {
          "type": "code",
          "language": "css",
          "text": "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nli {\n  list-style: none;\n}\n\n.banner {\n  position: relative;\n  margin: 100px auto;\n  width: 564px;\n  height: 315px;\n  /* background-color: pink; */\n  overflow: hidden;\n}\n\n/* 图片 */\n.banner img {\n  width: 564px;\n  border-radius: 12px;\n  vertical-align: middle;\n}\n\n.banner ul {\n  display: flex;\n}"
        }
      ]
    },
    {
      "title": "HTML结构",
      "trail": [
        "day08-CSS高级",
        "04-综合案例-轮播图",
        "箭头",
        "HTML结构"
      ],
      "level": 4,
      "line": 408,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!-- 箭头 -->\n<!-- 上一张 prev -->\n<a href=\"#\" class=\"prev\">\n  <i class=\"iconfont icon-zuoce\"></i>\n</a>\n<!-- 下一张 next -->\n<a href=\"#\" class=\"next\">\n  <i class=\"iconfont icon-youce\"></i>\n</a>"
        }
      ]
    },
    {
      "title": "CSS样式",
      "trail": [
        "day08-CSS高级",
        "04-综合案例-轮播图",
        "箭头",
        "CSS样式"
      ],
      "level": 4,
      "line": 422,
      "blocks": [
        {
          "type": "code",
          "language": "css",
          "text": "/* 箭头 */\n.banner .prev,\n.banner .next {\n  /* 隐藏 */\n  display: none;\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n\n  width: 20px;\n  height: 30px;\n  background-color: rgba(0, 0, 0, 0.3);\n\n  text-decoration: none;\n  color: #fff;\n  line-height: 30px;\n}\n\n/* 鼠标滑到banner区域，箭头要显示 display:block */\n.banner:hover .prev,\n.banner:hover .next {\n  display: block;\n}\n\n.banner .prev {\n  left: 0;\n  border-radius: 0 15px 15px 0;\n}\n\n.banner .next {\n  right: 0;\n  border-radius: 15px 0 0 15px;\n  text-align: center;\n}"
        }
      ]
    },
    {
      "title": "HTML结构",
      "trail": [
        "day08-CSS高级",
        "04-综合案例-轮播图",
        "圆点",
        "HTML结构"
      ],
      "level": 4,
      "line": 463,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!-- 圆点 -->\n<ol>\n  <li></li>\n  <li class=\"active\"></li>\n  <li></li>\n</ol>"
        }
      ]
    },
    {
      "title": "CSS样式",
      "trail": [
        "day08-CSS高级",
        "04-综合案例-轮播图",
        "圆点",
        "CSS样式"
      ],
      "level": 4,
      "line": 474,
      "blocks": [
        {
          "type": "code",
          "language": "css",
          "text": "/* 圆点 */\n.banner ol {\n  position: absolute;\n  bottom: 20px;\n  left: 50%;\n  transform: translateX(-50%);\n  height: 13px;\n  background-color: rgba(255, 255, 255, 0.3);\n\n  display: flex;\n\n  border-radius: 10px;\n}\n\n.banner ol li {\n  margin: 3px;\n  width: 8px;\n  height: 8px;\n  background-color: #fff;\n  border-radius: 50%;\n  cursor: pointer;\n}\n\n/* 橙色的li */\n.banner ol .active {\n  background-color: #ff5000;\n}"
        }
      ]
    }
  ]
};
