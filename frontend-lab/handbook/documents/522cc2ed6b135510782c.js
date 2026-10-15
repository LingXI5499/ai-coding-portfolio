window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["522cc2ed6b135510782c"] = {
  "id": "522cc2ed6b135510782c",
  "title": "day10-小兔鲜儿.md",
  "treatment": "章节知识与练习",
  "sections": [
    {
      "title": "01-banner-轮播图",
      "trail": [
        "day10-小兔鲜儿",
        "01-banner-轮播图"
      ],
      "level": 2,
      "line": 5,
      "blocks": [
        {
          "type": "text",
          "text": "[课程配图见原资料]\n\n\n\n> index.css"
        }
      ]
    },
    {
      "title": "HTML结构",
      "trail": [
        "day10-小兔鲜儿",
        "01-banner-轮播图",
        "HTML结构"
      ],
      "level": 3,
      "line": 17,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!-- banner -->\n\n<div class=\"banner\">\n  <div class=\"wrapper\">\n    <!-- 图片 -->\n\n    <ul class=\"pic\">\n      <li>\n        <a href=\"#\"><img src=\"./uploads/banner1.png\" alt=\"\" /></a>\n      </li>\n\n      <li>\n        <a href=\"#\"><img src=\"./uploads/banner1.png\" alt=\"\" /></a>\n      </li>\n\n      <li>\n        <a href=\"#\"><img src=\"./uploads/banner1.png\" alt=\"\" /></a>\n      </li>\n    </ul>\n  </div>\n</div>"
        }
      ]
    },
    {
      "title": "CSS样式",
      "trail": [
        "day10-小兔鲜儿",
        "01-banner-轮播图",
        "CSS样式"
      ],
      "level": 3,
      "line": 49,
      "blocks": [
        {
          "type": "code",
          "language": "css",
          "text": "/* banner */\n\n.banner {\n  height: 500px;\n\n  background-color: #f5f5f5;\n}\n\n.banner .wrapper {\n  position: relative;\n\n  height: 500px;\n\n  background-color: pink;\n\n  overflow: hidden;\n}\n\n/* 图片 */\n\n.banner .pic {\n  display: flex;\n\n  /* flex 布局，父级宽度不够，子级被挤小，不想挤小，增大父级尺寸 */\n\n  width: 3720px;\n}"
        }
      ]
    },
    {
      "title": "HTML结构",
      "trail": [
        "day10-小兔鲜儿",
        "02-banner-侧导航",
        "HTML结构"
      ],
      "level": 3,
      "line": 101,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!-- 侧导航 ul -->\n\n<div class=\"subnav\">\n  <ul>\n    <li>\n      <div>\n        <a href=\"#\" class=\"classify\">生鲜</a>\n        <a href=\"#\">水果</a>\n        <a href=\"#\">蔬菜</a>\n      </div>\n\n      <span class=\"iconfont icon-arrow-right-bold\"></span>\n    </li>\n\n    <li>\n      <div>\n        <a href=\"#\" class=\"classify\">美食</a>\n        <a href=\"#\">面点</a>\n        <a href=\"#\">干果</a>\n      </div>\n\n      <span class=\"iconfont icon-arrow-right-bold\"></span>\n    </li>\n\n    <li>\n      <div>\n        <a href=\"#\" class=\"classify\">餐厨</a>\n        <a href=\"#\">数码产品</a>\n      </div>\n\n      <span class=\"iconfont icon-arrow-right-bold\"></span>\n    </li>\n\n    <li>\n      <div>\n        <a href=\"#\" class=\"classify\">电器</a>\n        <a href=\"#\">床品</a>\n        <a href=\"#\">四件套</a>\n        <a href=\"#\">被枕</a>\n      </div>\n\n      <span class=\"iconfont icon-arrow-right-bold\"></span>\n    </li>\n\n    <li>\n      <div>\n        <a href=\"#\" class=\"classify\">居家</a>\n        <a href=\"#\">奶粉</a>\n        <a href=\"#\">玩具</a>\n        <a href=\"#\">辅食</a>\n      </div>\n\n      <span class=\"iconfont icon-arrow-right-bold\"></span>\n    </li>\n\n    <li>\n      <div>\n        <a href=\"#\" class=\"classify\">洗护</a>\n        <a href=\"#\">洗发</a>\n        <a href=\"#\">洗护</a>\n        <a href=\"#\">美妆</a>\n      </div>\n\n      <span class=\"iconfont icon-arrow-right-bold\"></span>\n    </li>\n\n    <li>\n      <div>\n        <a href=\"#\" class=\"classify\">孕婴</a>\n        <a href=\"#\">奶粉</a>\n        <a href=\"#\">玩具</a>\n      </div>\n\n      <span class=\"iconfont icon-arrow-right-bold\"></span>\n    </li>\n\n    <li>\n      <div>\n        <a href=\"#\" class=\"classify\">服饰</a>\n        <a href=\"#\">女装</a>\n        <a href=\"#\">男装</a>\n      </div>\n\n      <span class=\"iconfont icon-arrow-right-bold\"></span>\n    </li>\n\n    <li>\n      <div>\n        <a href=\"#\" class=\"classify\">杂货</a>\n        <a href=\"#\">户外</a>\n        <a href=\"#\">图书</a>\n      </div>\n\n      <span class=\"iconfont icon-arrow-right-bold\"></span>\n    </li>\n\n    <li>\n      <div>\n        <a href=\"#\" class=\"classify\">品牌</a>\n        <a href=\"#\">品牌制造</a>\n      </div>\n\n      <span class=\"iconfont icon-arrow-right-bold\"></span>\n    </li>\n  </ul>\n</div>"
        }
      ]
    },
    {
      "title": "CSS样式",
      "trail": [
        "day10-小兔鲜儿",
        "02-banner-侧导航",
        "CSS样式"
      ],
      "level": 3,
      "line": 203,
      "blocks": [
        {
          "type": "code",
          "language": "css",
          "text": "/* 侧导航 */\n\n.subnav {\n  position: absolute;\n\n  left: 0;\n\n  top: 0;\n\n  width: 250px;\n\n  height: 500px;\n\n  background-color: rgba(0, 0, 0, 0.42);\n}\n\n.subnav li {\n  display: flex;\n\n  justify-content: space-between;\n\n  padding-left: 30px;\n\n  padding-right: 12px;\n\n  height: 50px;\n\n  /* background-color: pink; */\n\n  line-height: 50px;\n\n  color: #fff;\n\n  cursor: pointer;\n}\n\n/* a所有都是小字，分类是大字 */\n\n.subnav li a {\n  margin-right: 5px;\n\n  font-size: 14px;\n\n  color: #fff;\n}\n\n.subnav li .classify {\n  margin-right: 14px;\n\n  font-size: 16px;\n}\n\n.subnav li .iconfont {\n  font-size: 14px;\n}\n\n.subnav li:hover {\n  background-color: #00be9a;\n}"
        }
      ]
    },
    {
      "title": "HTML结构",
      "trail": [
        "day10-小兔鲜儿",
        "03-banner-圆点指示器",
        "HTML结构"
      ],
      "level": 3,
      "line": 301,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!-- 圆点指示器 -->\n\n<ol>\n  <li class=\"current\"><i></i></li>\n\n  <li><i></i></li>\n\n  <li><i></i></li>\n</ol>"
        }
      ]
    },
    {
      "title": "CSS样式",
      "trail": [
        "day10-小兔鲜儿",
        "03-banner-圆点指示器",
        "CSS样式"
      ],
      "level": 3,
      "line": 323,
      "blocks": [
        {
          "type": "code",
          "language": "css",
          "text": "/* 圆点指示器 */\n\n.banner ol {\n  position: absolute;\n\n  bottom: 17px;\n\n  right: 16px;\n\n  display: flex;\n}\n\n.banner ol li {\n  margin-left: 8px;\n\n  width: 22px;\n\n  height: 22px;\n\n  /* background-color: pink; */\n\n  border-radius: 50%;\n\n  cursor: pointer;\n}\n\n.banner ol i {\n  display: block;\n\n  margin: 4px;\n\n  width: 14px;\n\n  height: 14px;\n\n  background-color: rgba(255, 255, 255, 0.5);\n\n  border-radius: 50%;\n}\n\n/* 选中：li半透明； i白色 */\n\n.banner ol .current {\n  background-color: rgba(255, 255, 255, 0.5);\n}\n\n.banner ol .current i {\n  background-color: #fff;\n}"
        }
      ]
    },
    {
      "title": "04-新鲜好物-标题",
      "trail": [
        "day10-小兔鲜儿",
        "04-新鲜好物-标题"
      ],
      "level": 2,
      "line": 401,
      "blocks": [
        {
          "type": "text",
          "text": "[课程配图见原资料]\n\n\n\n> 考虑公共样式"
        }
      ]
    },
    {
      "title": "HTML结构",
      "trail": [
        "day10-小兔鲜儿",
        "04-新鲜好物-标题",
        "HTML结构"
      ],
      "level": 3,
      "line": 413,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!-- 新鲜好物 -->\n\n<div class=\"goods wrapper\">\n  <!-- 标题 -->\n\n  <div class=\"title\">\n    <div class=\"left\">\n      <h3>新鲜好物</h3>\n\n      <p>新鲜出炉 品质靠谱</p>\n    </div>\n\n    <div class=\"right\">\n      <a href=\"#\" class=\"more\">\n        查看全部\n        <span class=\"iconfont icon-arrow-right-bold\"></span>\n      </a>\n    </div>\n  </div>\n</div>"
        }
      ]
    },
    {
      "title": "CSS样式",
      "trail": [
        "day10-小兔鲜儿",
        "04-新鲜好物-标题",
        "CSS样式"
      ],
      "level": 3,
      "line": 449,
      "blocks": [
        {
          "type": "code",
          "language": "css",
          "text": "/* 新鲜好物 */\n\n/* 标题 -- 公共样式 */\n\n.title {\n  display: flex;\n\n  justify-content: space-between;\n\n  margin-top: 40px;\n\n  margin-bottom: 30px;\n\n  height: 42px;\n\n  /* background-color: pink; */\n}\n\n.title .left {\n  display: flex;\n}\n\n.title .left h3 {\n  margin-right: 35px;\n\n  font-size: 30px;\n}\n\n.title .left p {\n  align-self: flex-end;\n\n  color: #a1a1a1;\n}\n\n.title .right .more {\n  line-height: 42px;\n\n  color: #a1a1a1;\n}\n\n.title .right .more .iconfont {\n  margin-left: 10px;\n}"
        }
      ]
    },
    {
      "title": "HTML结构",
      "trail": [
        "day10-小兔鲜儿",
        "05-新鲜好物-内容",
        "HTML结构"
      ],
      "level": 3,
      "line": 529,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!-- 内容 -->\n\n<div class=\"bd\">\n  <ul>\n    <li>\n      <a href=\"#\">\n        <div class=\"pic\"><img src=\"./uploads/goods1.png\" alt=\"\" /></div>\n\n        <div class=\"txt\">\n          <h4>KN95级莫兰迪色防护口罩</h4>\n\n          <p>\n            ¥\n            <span>79</span>\n          </p>\n        </div>\n      </a>\n    </li>\n\n    <li>\n      <a href=\"#\">\n        <div class=\"pic\"><img src=\"./uploads/goods2.png\" alt=\"\" /></div>\n\n        <div class=\"txt\">\n          <h4>紫檀外独板三层普洱茶盒</h4>\n\n          <p>\n            ¥\n            <span>566</span>\n          </p>\n        </div>\n      </a>\n    </li>\n\n    <li>\n      <a href=\"#\">\n        <div class=\"pic\"><img src=\"./uploads/goods3.png\" alt=\"\" /></div>\n\n        <div class=\"txt\">\n          <h4>法拉蒙高颜值记事本可定制</h4>\n\n          <p>\n            ¥\n            <span>58</span>\n          </p>\n        </div>\n      </a>\n    </li>\n\n    <li>\n      <a href=\"#\">\n        <div class=\"pic\"><img src=\"./uploads/goods4.png\" alt=\"\" /></div>\n\n        <div class=\"txt\">\n          <h4>科技布布艺沙发</h4>\n\n          <p>\n            ¥\n            <span>3579</span>\n          </p>\n        </div>\n      </a>\n    </li>\n  </ul>\n</div>"
        }
      ]
    },
    {
      "title": "CSS样式",
      "trail": [
        "day10-小兔鲜儿",
        "05-新鲜好物-内容",
        "CSS样式"
      ],
      "level": 3,
      "line": 621,
      "blocks": [
        {
          "type": "code",
          "language": "css",
          "text": "/* 好物内容 -- 公共样式 */\n\n.bd ul {\n  display: flex;\n\n  justify-content: space-between;\n}\n\n.bd li {\n  width: 304px;\n\n  height: 404px;\n\n  background-color: #eef9f4;\n}\n\n.bd li .pic {\n  width: 304px;\n\n  height: 304px;\n}\n\n.bd li .txt {\n  text-align: center;\n}\n\n.bd li h4 {\n  margin-top: 18px;\n\n  margin-bottom: 8px;\n\n  font-size: 20px;\n}\n\n.goods .bd p {\n  font-size: 18px;\n\n  color: #aa2113;\n}\n\n.goods .bd p span {\n  margin-left: 3px;\n\n  font-size: 22px;\n}"
        }
      ]
    },
    {
      "title": "06-人气推荐",
      "trail": [
        "day10-小兔鲜儿",
        "06-人气推荐"
      ],
      "level": 2,
      "line": 703,
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
        "day10-小兔鲜儿",
        "06-人气推荐",
        "HTML结构"
      ],
      "level": 3,
      "line": 711,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!-- 人气推荐 -->\n\n<div class=\"recommend wrapper\">\n  <!-- 标题 -->\n\n  <div class=\"title\">\n    <div class=\"left\">\n      <h3>人气推荐</h3>\n\n      <p>人气爆款 不容错过</p>\n    </div>\n  </div>\n\n  <!-- 内容 -->\n\n  <div class=\"bd\">\n    <ul>\n      <li>\n        <a href=\"#\">\n          <div class=\"pic\"><img src=\"./uploads/recommend1.png\" alt=\"\" /></div>\n\n          <div class=\"txt\">\n            <h4>特惠推荐</h4>\n\n            <p>我猜得到 你的需要</p>\n          </div>\n        </a>\n      </li>\n\n      <li>\n        <a href=\"#\">\n          <div class=\"pic\"><img src=\"./uploads/recommend2.png\" alt=\"\" /></div>\n\n          <div class=\"txt\">\n            <h4>爆款推荐</h4>\n\n            <p>人气好物推荐</p>\n          </div>\n        </a>\n      </li>\n\n      <li>\n        <a href=\"#\">\n          <div class=\"pic\"><img src=\"./uploads/recommend3.png\" alt=\"\" /></div>\n\n          <div class=\"txt\">\n            <h4>节日礼品一站买全</h4>\n\n            <p>编辑尽心整理推荐</p>\n          </div>\n        </a>\n      </li>\n\n      <li>\n        <a href=\"#\">\n          <div class=\"pic\"><img src=\"./uploads/recommend4.png\" alt=\"\" /></div>\n\n          <div class=\"txt\">\n            <h4>鲜花园艺</h4>\n\n            <p>给生活增加仪式感</p>\n          </div>\n        </a>\n      </li>\n    </ul>\n  </div>\n</div>"
        }
      ]
    },
    {
      "title": "CSS样式",
      "trail": [
        "day10-小兔鲜儿",
        "06-人气推荐",
        "CSS样式"
      ],
      "level": 3,
      "line": 825,
      "blocks": [
        {
          "type": "code",
          "language": "css",
          "text": "/* 人气推荐 */\n\n.recommend .bd li {\n  background-color: #fff;\n}\n\n.recommend .bd p {\n  color: #a1a1a1;\n}"
        }
      ]
    },
    {
      "title": "07-热门品牌-布局",
      "trail": [
        "day10-小兔鲜儿",
        "07-热门品牌-布局"
      ],
      "level": 2,
      "line": 851,
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
        "day10-小兔鲜儿",
        "07-热门品牌-布局",
        "HTML结构"
      ],
      "level": 3,
      "line": 859,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!-- 热门品牌 -->\n\n<div class=\"brand\">\n  <div class=\"wrapper\">\n    <!-- 标题 -->\n\n    <div class=\"title\">\n      <div class=\"left\">\n        <h3>热门品牌</h3>\n\n        <p>国际经典 品质认证</p>\n      </div>\n\n      <div class=\"button\">1</div>\n    </div>\n  </div>\n</div>"
        }
      ]
    },
    {
      "title": "CSS样式",
      "trail": [
        "day10-小兔鲜儿",
        "07-热门品牌-布局",
        "CSS样式"
      ],
      "level": 3,
      "line": 897,
      "blocks": [
        {
          "type": "code",
          "language": "css",
          "text": "/* 热门品牌 */\n\n.brand {\n  margin-top: 60px;\n\n  height: 468px;\n\n  background-color: #f5f5f5;\n}\n\n.brand .wrapper {\n  overflow: hidden;\n\n  height: 468px;\n\n  /* background-color: pink; */\n}\n\n.brand .title {\n  position: relative;\n\n  margin-bottom: 40px;\n}\n\n.brand .button {\n  position: absolute;\n\n  right: 0;\n\n  bottom: -25px;\n\n  /* 让a在一行显示，宽高生效 */\n\n  display: flex;\n}"
        }
      ]
    },
    {
      "title": "HTML结构",
      "trail": [
        "day10-小兔鲜儿",
        "08-热门品牌-内容",
        "HTML结构"
      ],
      "level": 3,
      "line": 963,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<div class=\"button\">\n  <a href=\"#\" class=\"prev\">\n    <i class=\"iconfont icon-arrow-left-bold\"></i>\n  </a>\n\n  <a href=\"#\" class=\"next\">\n    <i class=\"iconfont icon-arrow-right-bold\"></i>\n  </a>\n</div>\n\n<!-- 内容 -->\n\n<div class=\"bd\">\n  <ul>\n    <li>\n      <a href=\"#\"><img src=\"./uploads/hot1.png\" alt=\"\" /></a>\n    </li>\n\n    <li>\n      <a href=\"#\"><img src=\"./uploads/hot2.png\" alt=\"\" /></a>\n    </li>\n\n    <li>\n      <a href=\"#\"><img src=\"./uploads/hot3.png\" alt=\"\" /></a>\n    </li>\n\n    <li>\n      <a href=\"#\"><img src=\"./uploads/hot4.png\" alt=\"\" /></a>\n    </li>\n\n    <li>\n      <a href=\"#\"><img src=\"./uploads/hot5.png\" alt=\"\" /></a>\n    </li>\n  </ul>\n</div>"
        }
      ]
    },
    {
      "title": "CSS样式",
      "trail": [
        "day10-小兔鲜儿",
        "08-热门品牌-内容",
        "CSS样式"
      ],
      "level": 3,
      "line": 1017,
      "blocks": [
        {
          "type": "code",
          "language": "css",
          "text": ".brand .button a {\n  margin-left: 12px;\n\n  width: 20px;\n\n  height: 20px;\n\n  text-align: center;\n\n  line-height: 20px;\n\n  color: #fff;\n}\n\n.brand .button .prev {\n  background-color: #ddd;\n}\n\n.brand .button .next {\n  background-color: #00be9a;\n}\n\n.brand .bd li {\n  width: 244px;\n\n  height: 306px;\n}"
        }
      ]
    },
    {
      "title": "09-生鲜-标题",
      "trail": [
        "day10-小兔鲜儿",
        "09-生鲜-标题"
      ],
      "level": 2,
      "line": 1069,
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
        "day10-小兔鲜儿",
        "09-生鲜-标题",
        "HTML结构"
      ],
      "level": 3,
      "line": 1077,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!-- 生鲜 -->\n\n<div class=\"fresh wrapper\">\n  <!-- 标题 -->\n\n  <div class=\"title\">\n    <div class=\"left\">\n      <h3>生鲜</h3>\n    </div>\n\n    <div class=\"right\">\n      <ul>\n        <li><a href=\"#\" class=\"active\">热门</a></li>\n\n        <li><a href=\"#\">蔬菜</a></li>\n\n        <li><a href=\"#\">肉禽蛋</a></li>\n\n        <li><a href=\"#\">水果</a></li>\n\n        <li><a href=\"#\">海鲜</a></li>\n\n        <li><a href=\"#\">零食</a></li>\n\n        <li><a href=\"#\">饮料</a></li>\n      </ul>\n\n      <a href=\"#\" class=\"more\">\n        查看全部\n        <span class=\"iconfont icon-arrow-right-bold\"></span>\n      </a>\n    </div>\n  </div>\n</div>"
        }
      ]
    },
    {
      "title": "CSS样式",
      "trail": [
        "day10-小兔鲜儿",
        "09-生鲜-标题",
        "CSS样式"
      ],
      "level": 3,
      "line": 1129,
      "blocks": [
        {
          "type": "code",
          "language": "css",
          "text": "/* 生鲜 */\n\n.fresh .title {\n  margin-top: 60px;\n\n  margin-bottom: 20px;\n}\n\n.title .right {\n  display: flex;\n}\n\n.title .right ul {\n  display: flex;\n\n  margin-top: 10px;\n\n  margin-right: 58px;\n}\n\n.title .right ul a {\n  display: block;\n\n  margin-left: 6px;\n\n  padding: 0 7px;\n\n  height: 20px;\n\n  /* background-color: pink; */\n\n  line-height: 20px;\n}\n\n.title .right ul .active {\n  background-color: #00be9a;\n\n  color: #fff;\n}"
        }
      ]
    },
    {
      "title": "HTML结构",
      "trail": [
        "day10-小兔鲜儿",
        "10-生鲜-内容布局",
        "HTML结构"
      ],
      "level": 3,
      "line": 1201,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!-- 内容 -->\n\n<div class=\"content\">\n  <div class=\"left\">\n    <a href=\"#\"><img src=\"./uploads/fresh_left.png\" alt=\"\" /></a>\n  </div>\n\n  <div class=\"right\">\n    <ul>\n      <li>1</li>\n\n      <li>2</li>\n\n      <li>3</li>\n\n      <li>4</li>\n\n      <li>5</li>\n\n      <li>6</li>\n\n      <li>7</li>\n\n      <li>8</li>\n    </ul>\n  </div>\n</div>"
        }
      ]
    },
    {
      "title": "CSS样式",
      "trail": [
        "day10-小兔鲜儿",
        "10-生鲜-内容布局",
        "CSS样式"
      ],
      "level": 3,
      "line": 1247,
      "blocks": [
        {
          "type": "code",
          "language": "css",
          "text": "/* 生鲜内容 */\n\n.content {\n  display: flex;\n\n  justify-content: space-between;\n}\n\n.content .left {\n  width: 248px;\n\n  height: 610px;\n\n  /* background-color: pink; */\n}\n\n.content .right {\n  width: 968px;\n\n  height: 610px;\n\n  /* background-color: pink; */\n}\n\n.content .right ul {\n  display: flex;\n\n  flex-wrap: wrap;\n}\n\n.content .right li {\n  position: relative;\n\n  padding: 10px 21px 0;\n\n  width: 242px;\n\n  height: 305px;\n\n  border: 2px solid #fff;\n\n  /* 为了隐藏绿色cover */\n\n  overflow: hidden;\n}"
        }
      ]
    },
    {
      "title": "HTML结构",
      "trail": [
        "day10-小兔鲜儿",
        "11-生鲜-产品内容",
        "HTML结构"
      ],
      "level": 3,
      "line": 1327,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<ul>\n  <li>\n    <a href=\"#\">\n      <div class=\"pic\"><img src=\"./uploads/fresh1.png\" alt=\"\" /></div>\n\n      <div class=\"txt\">\n        <div class=\"info\">\n          <h4>双味千层，手抓饼烤肉组合</h4>\n\n          <p>240g/袋 4片装</p>\n\n          <p>加热即食</p>\n        </div>\n\n        <p class=\"price\">\n          ¥\n          <span>89.99</span>\n        </p>\n      </div>\n    </a>\n  </li>\n\n  <li>\n    <a href=\"#\">\n      <div class=\"pic\"><img src=\"./uploads/fresh2.png\" alt=\"\" /></div>\n\n      <div class=\"txt\">\n        <div class=\"info\">\n          <h4>云南甘蔗慢熬红糖馒头</h4>\n\n          <p>220g/袋 5个装</p>\n\n          <p>加热即食</p>\n        </div>\n\n        <p class=\"price\">\n          ¥\n          <span>9.00</span>\n        </p>\n      </div>\n    </a>\n  </li>\n\n  <li>\n    <a href=\"#\">\n      <div class=\"pic\"><img src=\"./uploads/fresh3.png\" alt=\"\" /></div>\n\n      <div class=\"txt\">\n        <div class=\"info\">\n          <h4>日式风味小圆饼</h4>\n\n          <p>圆形【海盐味】</p>\n\n          <p>糖果零食</p>\n        </div>\n\n        <p class=\"price\">\n          ¥\n          <span>588.00</span>\n        </p>\n      </div>\n    </a>\n  </li>\n\n  <li>\n    <a href=\"#\">\n      <div class=\"pic\"><img src=\"./uploads/fresh4.png\" alt=\"\" /></div>\n\n      <div class=\"txt\">\n        <div class=\"info\">\n          <h4>全麦奶油浓香小面包</h4>\n\n          <p>50g*12袋</p>\n\n          <p>美味西点</p>\n        </div>\n\n        <p class=\"price\">\n          ¥\n          <span>69.00</span>\n        </p>\n      </div>\n    </a>\n  </li>\n\n  <li>\n    <a href=\"#\">\n      <div class=\"pic\"><img src=\"./uploads/fresh5.png\" alt=\"\" /></div>\n\n      <div class=\"txt\">\n        <div class=\"info\">\n          <h4>秘制外皮五福摩提大福点心</h4>\n\n          <p>150g/盒</p>\n\n          <p>美味西点</p>\n        </div>\n\n        <p class=\"price\">\n          ¥\n          <span>39.99</span>\n        </p>\n      </div>\n    </a>\n  </li>\n\n  <li>\n    <a href=\"#\">\n      <div class=\"pic\"><img src=\"./uploads/fresh6.png\" alt=\"\" /></div>\n\n      <div class=\"txt\">\n        <div class=\"info\">\n          <h4>水果面膜韩国蜂蜜柚子茶</h4>\n\n          <p>560g/瓶</p>\n\n          <p>冲调饮品</p>\n        </div>\n\n        <p class=\"price\">\n          ¥\n          <span>39.99</span>\n        </p>\n      </div>\n    </a>\n  </li>\n\n  <li>\n    <a href=\"#\">\n      <div class=\"pic\"><img src=\"./uploads/fresh7.png\" alt=\"\" /></div>\n\n      <div class=\"txt\">\n        <div class=\"info\">\n          <h4>浓情比利时巧克力礼盒装</h4>\n\n          <p>205克/盒</p>\n\n          <p>糖果零食</p>\n        </div>\n\n        <p class=\"price\">\n          ¥\n          <span>120.00</span>\n        </p>\n      </div>\n    </a>\n  </li>\n\n  <li>\n    <a href=\"#\">\n      <div class=\"pic\"><img src=\"./uploads/fresh8.png\" alt=\"\" /></div>\n\n      <div class=\"txt\">\n        <div class=\"info\">\n          <h4>抹茶奶油小蛋糕礼盒装</h4>\n\n          <p>220克/盒</p>\n\n          <p>美味西点</p>\n        </div>\n\n        <p class=\"price\">\n          ¥\n          <span>60.00</span>\n        </p>\n      </div>\n    </a>\n  </li>\n</ul>"
        }
      ]
    },
    {
      "title": "CSS样式",
      "trail": [
        "day10-小兔鲜儿",
        "11-生鲜-产品内容",
        "CSS样式"
      ],
      "level": 3,
      "line": 1549,
      "blocks": [
        {
          "type": "code",
          "language": "css",
          "text": "/* 产品内容 */\n\n.content .pic {\n  width: 200px;\n\n  height: 180px;\n}\n\n.content .info {\n  margin-top: 14px;\n\n  margin-bottom: 5px;\n\n  height: 60px;\n\n  line-height: 19px;\n}\n\n.content .price {\n  color: #af2f22;\n}\n\n.content .price span {\n  margin-left: 5px;\n\n  font-size: 22px;\n}"
        }
      ]
    },
    {
      "title": "HTML结构",
      "trail": [
        "day10-小兔鲜儿",
        "12-生鲜-过渡效果",
        "HTML结构"
      ],
      "level": 3,
      "line": 1605,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<div class=\"cover\">\n  <p>找相似</p>\n\n  <p></p>\n\n  <p>\n    发现更多宝贝\n    <span class=\"iconfont icon-arrow-right-bold\"></span>\n  </p>\n</div>"
        }
      ]
    },
    {
      "title": "CSS样式",
      "trail": [
        "day10-小兔鲜儿",
        "12-生鲜-过渡效果",
        "CSS样式"
      ],
      "level": 3,
      "line": 1625,
      "blocks": [
        {
          "type": "code",
          "language": "css",
          "text": "/* 产品底部绿色区域 */\n\n.content li .cover {\n  position: absolute;\n\n  left: 0;\n\n  /* bottom: 0; */\n\n  bottom: -86px;\n\n  padding-top: 15px;\n\n  width: 242px;\n\n  height: 84px;\n\n  background-color: #00be9a;\n\n  text-align: center;\n\n  color: #fff;\n\n  transition: all 0.5s;\n}\n\n.content .cover p:nth-child(1) {\n  font-size: 18px;\n}\n\n.content .cover p:nth-child(2) {\n  margin: 3px auto 6px;\n\n  width: 120px;\n\n  height: 1px;\n\n  background-color: rgba(255, 255, 255, 0.11);\n}\n\n.content .cover p:nth-child(3) {\n  font-size: 13px;\n}\n\n.content .cover p:nth-child(3) .iconfont {\n  font-size: 14px;\n}\n\n/* 鼠标悬停到li，显示cover，改变位置 */\n\n.content .right li:hover .cover {\n  bottom: 0;\n}\n\n.content .right li:hover {\n  border: 2px solid #00be9a;\n}"
        }
      ]
    },
    {
      "title": "13-最新专题-布局",
      "trail": [
        "day10-小兔鲜儿",
        "13-最新专题-布局"
      ],
      "level": 2,
      "line": 1719,
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
        "day10-小兔鲜儿",
        "13-最新专题-布局",
        "HTML结构"
      ],
      "level": 3,
      "line": 1727,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!-- 最新专题 -->\n\n<div class=\"topic wrapper\">\n  <div class=\"title\">\n    <div class=\"left\">\n      <h3>最新专题</h3>\n    </div>\n\n    <div class=\"right\">\n      <a href=\"#\" class=\"more\">\n        查看全部\n        <span class=\"iconfont icon-arrow-right-bold\"></span>\n      </a>\n    </div>\n  </div>\n\n  <div class=\"topic-bd\">\n    <ul>\n      <li>1</li>\n\n      <li>2</li>\n\n      <li>3</li>\n    </ul>\n  </div>\n</div>"
        }
      ]
    },
    {
      "title": "CSS样式",
      "trail": [
        "day10-小兔鲜儿",
        "13-最新专题-布局",
        "CSS样式"
      ],
      "level": 3,
      "line": 1773,
      "blocks": [
        {
          "type": "code",
          "language": "css",
          "text": "/* 最新专题 */\n\n.topic {\n  margin-bottom: 40px;\n}\n\n.topic .title {\n  margin-top: 100px;\n}\n\n.topic-bd ul {\n  display: flex;\n\n  justify-content: space-between;\n}\n\n.topic-bd li {\n  width: 405px;\n\n  height: 355px;\n\n  background-color: pink;\n}"
        }
      ]
    },
    {
      "title": "HTML结构",
      "trail": [
        "day10-小兔鲜儿",
        "14-最新专题-内容",
        "HTML结构"
      ],
      "level": 3,
      "line": 1825,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<ul>\n  <li>\n    <a href=\"#\">\n      <div class=\"pic\">\n        <img src=\"./uploads/topic1.png\" alt=\"\" />\n      </div>\n\n      <div class=\"txt\">\n        <div class=\"left\">\n          <p>\n            <i class=\"iconfont icon-favorites-fill\"></i>\n\n            <span>1220</span>\n          </p>\n\n          <p>\n            <i class=\"iconfont icon-browse\"></i>\n\n            <span>1800</span>\n          </p>\n        </div>\n\n        <div class=\"right\">\n          <p>\n            <i class=\"iconfont icon-comment\"></i>\n\n            <span>246</span>\n          </p>\n        </div>\n      </div>\n    </a>\n  </li>\n\n  <li>\n    <a href=\"#\">\n      <div class=\"pic\">\n        <img src=\"./uploads/topic2.png\" alt=\"\" />\n      </div>\n\n      <div class=\"txt\">\n        <div class=\"left\">\n          <p>\n            <i class=\"iconfont icon-favorites-fill\"></i>\n\n            <span>1220</span>\n          </p>\n\n          <p>\n            <i class=\"iconfont icon-browse\"></i>\n\n            <span>1800</span>\n          </p>\n        </div>\n\n        <div class=\"right\">\n          <p>\n            <i class=\"iconfont icon-comment\"></i>\n\n            <span>246</span>\n          </p>\n        </div>\n      </div>\n    </a>\n  </li>\n\n  <li>\n    <a href=\"#\">\n      <div class=\"pic\">\n        <img src=\"./uploads/topic3.png\" alt=\"\" />\n      </div>\n\n      <div class=\"txt\">\n        <div class=\"left\">\n          <p>\n            <i class=\"iconfont icon-favorites-fill\"></i>\n\n            <span>1220</span>\n          </p>\n\n          <p>\n            <i class=\"iconfont icon-browse\"></i>\n\n            <span>1800</span>\n          </p>\n        </div>\n\n        <div class=\"right\">\n          <p>\n            <i class=\"iconfont icon-comment\"></i>\n\n            <span>246</span>\n          </p>\n        </div>\n      </div>\n    </a>\n  </li>\n</ul>"
        }
      ]
    },
    {
      "title": "CSS样式",
      "trail": [
        "day10-小兔鲜儿",
        "14-最新专题-内容",
        "CSS样式"
      ],
      "level": 3,
      "line": 1989,
      "blocks": [
        {
          "type": "code",
          "language": "css",
          "text": ".topic-bd ul {\n  display: flex;\n\n  justify-content: space-between;\n}\n\n.topic-bd li {\n  width: 405px;\n\n  height: 355px;\n\n  background-color: pink;\n}\n\n.topic-bd .pic {\n  position: relative;\n\n  width: 405px;\n\n  height: 288px;\n}\n\n.topic-bd .txt {\n  display: flex;\n\n  justify-content: space-between;\n\n  align-items: center;\n\n  padding: 0 15px;\n\n  width: 405px;\n\n  height: 67px;\n\n  /* background-color: skyblue; */\n\n  font-size: 14px;\n\n  color: #666;\n}\n\n.topic-bd .txt .left {\n  display: flex;\n}\n\n.topic-bd .txt .left p {\n  margin-right: 20px;\n}\n\n.topic-bd .txt .left p:nth-child(1) i {\n  color: #aa2113;\n}"
        }
      ]
    },
    {
      "title": "HTML结构",
      "trail": [
        "day10-小兔鲜儿",
        "15-最新专题-定位文字",
        "HTML结构"
      ],
      "level": 3,
      "line": 2083,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<div class=\"pic\">\n  <img src=\"./uploads/topic2.png\" alt=\"\" />\n\n  <!-- 定位区域 -->\n\n  <div class=\"cover\">\n    <div class=\"left\">\n      <h4>吃这些美食才不算辜负自己</h4>\n\n      <p>餐厨起居洗护好物</p>\n    </div>\n\n    <div class=\"right\">\n      ￥\n      <span>29.9</span>\n      <span>起</span>\n    </div>\n  </div>\n</div>"
        }
      ]
    },
    {
      "title": "CSS样式",
      "trail": [
        "day10-小兔鲜儿",
        "15-最新专题-定位文字",
        "CSS样式"
      ],
      "level": 3,
      "line": 2115,
      "blocks": [
        {
          "type": "code",
          "language": "css",
          "text": "/* 定位区域 - 文字 */\n\n.topic-bd .cover {\n  position: absolute;\n\n  left: 0;\n\n  bottom: 0;\n\n  display: flex;\n\n  justify-content: space-between;\n\n  align-items: center;\n\n  padding: 0 15px;\n\n  width: 405px;\n\n  height: 90px;\n\n  background-image: linear-gradient(\n    180deg,\n    rgba(137, 137, 137, 0) 0%,\n    rgba(0, 0, 0, 0.9) 100%\n  );\n}\n\n.topic-bd .cover .left {\n  color: #fff;\n}\n\n.topic-bd .cover .left h4 {\n  margin-bottom: 6px;\n\n  font-size: 20px;\n}\n\n.topic-bd .cover .right {\n  padding: 0 7px;\n\n  height: 25px;\n\n  background-color: #fff;\n\n  color: #aa2113;\n\n  font-size: 15px;\n}\n\n.topic-bd .cover .right span {\n  font-size: 18px;\n}"
        }
      ]
    }
  ]
};
