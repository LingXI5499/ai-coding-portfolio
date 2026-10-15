window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["395fd3269dda1a0f9311"] = {
  "id": "395fd3269dda1a0f9311",
  "title": "day10-小兔鲜儿.pdf",
  "treatment": "课件页级文本（配图回溯原件）",
  "sections": [
    {
      "title": "第1页",
      "level": 1,
      "page": 1,
      "blocks": [
        {
          "type": "text",
          "text": "day10- 小兔鲜儿  \n01-banner- 轮播图  \nindex.css\nHTML 结构  \n \nCSS 样式  \n \n<!-- banner -->\n  <div class=\"banner\">\n    <div class=\"wrapper\">\n      <!-- 图片  -->\n      <ul class=\"pic\">\n        <li><a href=\"#\"><img src=\"./uploads/banner1.png\" alt=\"\"></a></li>\n        <li><a href=\"#\"><img src=\"./uploads/banner1.png\" alt=\"\"></a></li>\n        <li><a href=\"#\"><img src=\"./uploads/banner1.png\" alt=\"\"></a></li>\n      </ul>\n    </div>\n</div>\n/* banner */\n.banner {\n  height: 500px;\n  background-color: #F5F5F5;\n}\n \n.banner .wrapper {\n  position: relative;\n  height: 500px;\n  background-color: pink;\n  overow: hidden;\n}"
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
          "text": "02-banner- 侧导航  \nHTML 结构  \n \n/* 图片  */\n.banner .pic {\n  display: ex;\n  /* ex 布局，父级宽度不够，子级被挤小，不想挤小，增大父级尺寸  */\n  width: 3720px;\n}\n<!-- 侧导航  ul -->\n<div class=\"subnav\">\n  <ul>\n    <li>\n      <div><a href=\"#\" class=\"classify\">生鲜</a><a href=\"#\">水果</a><a href=\"#\">蔬菜</a></div>\n      <span class=\"iconfont icon-arrow-right-bold\"></span>\n    </li>\n    <li>\n      <div><a href=\"#\" class=\"classify\">美食</a><a href=\"#\">面点</a><a href=\"#\">干果</a></div>\n      <span class=\"iconfont icon-arrow-right-bold\"></span>\n    </li>\n    <li>\n      <div><a href=\"#\" class=\"classify\">餐厨</a><a href=\"#\">数码产品</a></div>\n      <span class=\"iconfont icon-arrow-right-bold\"></span>\n    </li>\n    <li>\n      <div><a href=\"#\" class=\"classify\">电器</a><a href=\"#\">床品</a><a href=\"#\">四件套</a><a href=\"#\">被枕</a>\n</div>\n      <span class=\"iconfont icon-arrow-right-bold\"></span>\n    </li>\n    <li>\n      <div><a href=\"#\" class=\"classify\">居家</a><a href=\"#\">奶粉</a><a href=\"#\">玩具</a><a href=\"#\">辅食</a>\n</div>\n      <span class=\"iconfont icon-arrow-right-bold\"></span>\n    </li>\n    <li>\n      <div><a href=\"#\" class=\"classify\">洗护</a><a href=\"#\">洗发</a><a href=\"#\">洗护</a><a href=\"#\">美妆</a>\n</div>\n      <span class=\"iconfont icon-arrow-right-bold\"></span>\n    </li>\n    <li>\n      <div><a href=\"#\" class=\"classify\">孕婴</a><a href=\"#\">奶粉</a><a href=\"#\">玩具</a></div>\n      <span class=\"iconfont icon-arrow-right-bold\"></span>\n    </li>\n    <li>\n      <div><a href=\"#\" class=\"classify\">服饰</a><a href=\"#\">女装</a><a href=\"#\">男装</a></div>\n      <span class=\"iconfont icon-arrow-right-bold\"></span>\n    </li>\n    <li>\n      <div><a href=\"#\" class=\"classify\">杂货</a><a href=\"#\">户外</a><a href=\"#\">图书</a></div>\n      <span class=\"iconfont icon-arrow-right-bold\"></span>"
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
          "text": "CSS 样式  \n \n    </li>\n    <li>\n      <div><a href=\"#\" class=\"classify\">品牌</a><a href=\"#\">品牌制造</a></div>\n      <span class=\"iconfont icon-arrow-right-bold\"></span>\n    </li>\n    \n  </ul>\n</div>\n/* 侧导航  */\n.subnav {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 250px;\n  height: 500px;\n  background-color: rgba(0,0,0,0.42);\n}\n \n.subnav li {\n  display: ex;\n  justify-content: space-between;\n  padding-left: 30px;\n  padding-right: 12px;\n  height: 50px;\n  /* background-color: pink; */\n  line-height: 50px;\n  color: #f;\n \n  cursor: pointer;\n}\n \n/* a 所有都是小字，分类是大字  */\n.subnav li a {\n  margin-right: 5px;\n  font-size: 14px;\n  color: #f;\n}\n \n.subnav li .classify {\n  margin-right: 14px;\n  font-size: 16px;\n}\n \n.subnav li .iconfont {\n  font-size: 14px;\n}\n \n.subnav li:hover {\n  background-color: #00BE9A;"
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
          "text": "03-banner- 圆点指示器  \nHTML 结构  \n \nCSS 样式  \n \n}\n<!-- 圆点指示器  -->\n<ol>\n  <li class=\"current\"><i></i></li>\n  <li><i></i></li>\n  <li><i></i></li>\n</ol>\n/* 圆点指示器  */\n.banner ol {\n  position: absolute;\n  bottom: 17px;\n  right: 16px;\n  display: ex;\n}\n \n.banner ol li {\n  margin-left: 8px;\n  width: 22px;\n  height: 22px;\n  /* background-color: pink; */\n  border-radius: 50%;\n  cursor: pointer;\n}\n \n.banner ol i {\n  display: block;\n  margin: 4px;\n  width: 14px;\n  height: 14px;\n  background-color: rgba(255,255,255,0.5);\n  border-radius: 50%;\n}\n \n/* 选中： li 半透明；  i 白色  */\n.banner ol .current {\n  background-color: rgba(255,255,255,0.5);\n}\n \n.banner ol .current i {\n  background-color: #f;\n}"
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
          "text": "04- 新鲜好物 - 标题  \n考虑公共样式\nHTML 结构  \n \nCSS 样式  \n \n<!-- 新鲜好物  -->\n<div class=\"goods wrapper\">\n  <!-- 标题  -->\n  <div class=\"title\">\n    <div class=\"left\">\n      <h3>新鲜好物</h3>\n      <p>新鲜出炉  品质靠谱</p>\n    </div>\n    <div class=\"right\">\n      <a href=\"#\" class=\"more\">查看全部<span class=\"iconfont icon-arrow-right-bold\"></span></a>\n    </div>\n  </div>\n</div>\n/* 新鲜好物  */\n/* 标题  -- 公共样式  */\n.title {\n  display: ex;\n  justify-content: space-between;\n  margin-top: 40px;\n  margin-bottom: 30px;\n  height: 42px;\n  /* background-color: pink; */\n}\n \n.title .left {\n  display: ex;\n}"
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
          "text": "05- 新鲜好物 - 内容  \nHTML 结构  \n \n \n.title .left h3 {\n  margin-right: 35px;\n  font-size: 30px;\n}\n \n.title .left p {\n  align-self: ex-end;\n  color: #A1A1A1;\n}\n \n.title .right .more {\n  line-height: 42px;\n  color: #A1A1A1;\n}\n \n.title .right .more .iconfont {\n  margin-left: 10px;\n}\n<!-- 内容  -->\n<div class=\"bd\">\n  <ul>\n    <li>\n      <a href=\"#\">\n        <div class=\"pic\"><img src=\"./uploads/goods1.png\" alt=\"\"></div>\n        <div class=\"txt\">\n          <h4>KN95 级莫兰迪色防护口罩</h4>\n          <p>¥<span>79</span></p>\n        </div>\n      </a>\n    </li>\n    <li>\n      <a href=\"#\">\n        <div class=\"pic\"><img src=\"./uploads/goods2.png\" alt=\"\"></div>\n        <div class=\"txt\">\n          <h4>紫檀外独板三层普洱茶盒</h4>\n          <p>¥<span>566</span></p>\n        </div>\n      </a>\n    </li>\n    <li>\n      <a href=\"#\">\n        <div class=\"pic\"><img src=\"./uploads/goods3.png\" alt=\"\"></div>\n        <div class=\"txt\">\n          <h4>法拉蒙高颜值记事本可定制</h4>\n          <p>¥<span>58</span></p>\n        </div>"
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
          "text": "CSS 样式  \n \n      </a>\n    </li>\n    <li>\n      <a href=\"#\">\n        <div class=\"pic\"><img src=\"./uploads/goods4.png\" alt=\"\"></div>\n        <div class=\"txt\">\n          <h4>科技布布艺沙发</h4>\n          <p>¥<span>3579</span></p>\n        </div>\n      </a>\n    </li> \n  </ul>\n</div>\n/* 好物内容  -- 公共样式  */\n.bd ul {\n  display: ex;\n  justify-content: space-between;\n}\n \n.bd li {\n  width: 304px;\n  height: 404px;\n  background-color: #EEF9F4;\n}\n \n.bd li .pic {\n  width: 304px;\n  height: 304px;\n}\n \n.bd li .txt {\n  text-align: center;\n}\n \n.bd li h4 {\n  margin-top: 18px;\n  margin-bottom: 8px;\n  font-size: 20px;\n}\n \n.goods .bd p {\n  font-size: 18px;\n  color: #AA2113;\n}\n \n.goods .bd p span {\n  margin-left: 3px;\n  font-size: 22px;\n}"
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
          "text": "06- 人气推荐  \nHTML 结构  \n <!-- 人气推荐  -->\n<div class=\"recommend wrapper\">\n  <!-- 标题  -->\n  <div class=\"title\">\n    <div class=\"left\">\n      <h3>人气推荐</h3>\n      <p>人气爆款  不容错过</p>\n    </div>\n  </div>\n  <!-- 内容  -->\n  <div class=\"bd\">\n    <ul>\n      <li>\n        <a href=\"#\">\n          <div class=\"pic\"><img src=\"./uploads/recommend1.png\" alt=\"\"></div>\n          <div class=\"txt\">\n            <h4>特惠推荐</h4>\n            <p>我猜得到  你的需要</p>\n          </div>\n        </a>\n      </li>\n      <li>\n        <a href=\"#\">\n          <div class=\"pic\"><img src=\"./uploads/recommend2.png\" alt=\"\"></div>\n          <div class=\"txt\">\n            <h4>爆款推荐</h4>\n            <p>人气好物推荐</p>\n          </div>\n        </a>\n      </li>\n      <li>"
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
          "text": "CSS 样式  \n \n07- 热门品牌 - 布局  \nHTML 结构  \n \n        <a href=\"#\">\n          <div class=\"pic\"><img src=\"./uploads/recommend3.png\" alt=\"\"></div>\n          <div class=\"txt\">\n            <h4>节日礼品一站买全</h4>\n            <p>编辑尽心整理推荐</p>\n          </div>\n        </a>\n      </li>\n      <li>\n        <a href=\"#\">\n          <div class=\"pic\"><img src=\"./uploads/recommend4.png\" alt=\"\"></div>\n          <div class=\"txt\">\n            <h4>鲜花园艺</h4>\n            <p>给生活增加仪式感</p>\n          </div>\n        </a>\n      </li>\n      \n    </ul>\n  </div>\n</div>\n/* 人气推荐  */\n.recommend .bd li {\n  background-color: #f;\n}\n \n.recommend .bd p {\n  color: #A1A1A1;\n}\n<!-- 热门品牌  -->"
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
          "text": "CSS 样式  \n \n08- 热门品牌 - 内容  \nHTML 结构  \n \n<div class=\"brand\">\n  <div class=\"wrapper\">\n    <!-- 标题  -->\n    <div class=\"title\">\n      <div class=\"left\">\n        <h3>热门品牌</h3>\n        <p>国际经典  品质认证</p>\n      </div>\n \n      <div class=\"button\">1</div>\n    </div>\n  </div>\n</div>\n/* 热门品牌  */\n.brand {\n  margin-top: 60px;\n  height: 468px;\n  background-color: #F5F5F5;\n}\n \n.brand .wrapper {\n  overow: hidden;\n  height: 468px;\n  /* background-color: pink; */\n}\n \n.brand .title {\n  position: relative;\n  margin-bottom: 40px;\n}\n \n.brand .button {\n  position: absolute;\n  right: 0;\n  bottom: -25px;\n \n  /* 让 a 在一行显示，宽高生效  */\n  display: ex;\n}\n<div class=\"button\">\n  <a href=\"#\" class=\"prev\">\n    <i class=\"iconfont icon-arrow-left-bold\"></i>"
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
          "text": "CSS 样式  \n \n09- 生鲜 - 标题  \n  </a>\n  <a href=\"#\" class=\"next\">\n    <i class=\"iconfont icon-arrow-right-bold\"></i>\n  </a>\n</div>\n \n \n \n \n<!-- 内容  -->\n<div class=\"bd\">\n  <ul>\n    <li><a href=\"#\"><img src=\"./uploads/hot1.png\" alt=\"\"></a></li>\n    <li><a href=\"#\"><img src=\"./uploads/hot2.png\" alt=\"\"></a></li>\n    <li><a href=\"#\"><img src=\"./uploads/hot3.png\" alt=\"\"></a></li>\n    <li><a href=\"#\"><img src=\"./uploads/hot4.png\" alt=\"\"></a></li>\n    <li><a href=\"#\"><img src=\"./uploads/hot5.png\" alt=\"\"></a></li>\n  </ul>\n</div>\n.brand .button a {\n  margin-left: 12px;\n  width: 20px;\n  height: 20px;\n  text-align: center;\n  line-height: 20px;\n  color: #f;\n}\n \n.brand .button .prev {\n  background-color: #ddd;\n}\n \n.brand .button .next {\n  background-color: #00BE9A;\n}\n \n.brand .bd li {\n  width: 244px;\n  height: 306px;\n}"
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
          "text": "HTML 结构  \n \nCSS 样式  \n \n<!-- 生鲜  -->\n<div class=\"fresh wrapper\">\n  <!-- 标题  -->\n  <div class=\"title\">\n    <div class=\"left\">\n      <h3>生鲜</h3>\n    </div>\n    <div class=\"right\">\n      <ul>\n        <li><a href=\"#\" class=\"active\">热门</a></li>\n        <li><a href=\"#\">蔬菜</a></li>\n        <li><a href=\"#\">肉禽蛋</a></li>\n        <li><a href=\"#\">水果</a></li>\n        <li><a href=\"#\">海鲜</a></li>\n        <li><a href=\"#\">零食</a></li>\n        <li><a href=\"#\">饮料</a></li>\n      </ul>\n      <a href=\"#\" class=\"more\">查看全部<span class=\"iconfont icon-arrow-right-bold\"></span></a>\n    </div>\n  </div>\n</div>\n/* 生鲜  */\n.fresh .title {\n  margin-top: 60px;\n  margin-bottom: 20px;"
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
          "text": "10- 生鲜 - 内容布局  \nHTML 结构  \n \nCSS 样式  \n}\n \n.title .right {\n  display: ex;\n}\n \n.title .right ul {\n  display: ex;\n  margin-top: 10px;\n  margin-right: 58px;\n}\n \n.title .right ul a {\n  display: block;\n  margin-left: 6px;\n  padding: 0 7px;\n  height: 20px;\n  /* background-color: pink; */\n  line-height: 20px;\n}\n \n.title .right ul .active {\n  background-color: #00BE9A;\n  color: #f;\n}\n<!-- 内容  -->\n<div class=\"content\">\n  <div class=\"left\">\n    <a href=\"#\"><img src=\"./uploads/fresh_left.png\" alt=\"\"></a>\n  </div>\n  <div class=\"right\">\n    <ul>\n      <li>1</li>\n      <li>2</li>\n      <li>3</li>\n      <li>4</li>\n      <li>5</li>\n      <li>6</li>\n      <li>7</li>\n      <li>8</li>\n    </ul>\n  </div>\n</div>"
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
          "text": "11- 生鲜 - 产品内容  \nHTML 结构  \n \n/* 生鲜内容  */\n.content {\n  display: ex;\n  justify-content: space-between;\n}\n \n.content .left {\n  width: 248px;\n  height: 610px;\n  /* background-color: pink; */\n}\n \n.content .right {\n  width: 968px;\n  height: 610px;\n  /* background-color: pink; */\n}\n \n.content .right ul {\n  display: ex;\n  ex-wrap: wrap;\n}\n \n.content .right li {\n  position: relative;\n  padding: 10px 21px 0;\n  width: 242px;\n  height: 305px;\n  border: 2px solid #f;\n \n  /* 为了隐藏绿色 cover */\n  overow: hidden;\n}\n<ul>\n  <li>\n    <a href=\"#\">\n      <div class=\"pic\"><img src=\"./uploads/fresh1.png\" alt=\"\"></div>\n      <div class=\"txt\">\n        <div class=\"info\">\n          <h4>双味千层，手抓饼烤肉组合</h4>\n          <p>240g/ 袋  4 片装</p>\n          <p>加热即食</p>\n        </div>\n        <p class=\"price\">¥<span>89.99</span></p>\n      </div>\n    </a>"
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
          "text": "</li>\n  <li>\n    <a href=\"#\">\n      <div class=\"pic\"><img src=\"./uploads/fresh2.png\" alt=\"\"></div>\n      <div class=\"txt\">\n        <div class=\"info\">\n          <h4>云南甘蔗慢熬红糖馒头</h4>\n          <p>220g/ 袋  5 个装</p>\n          <p>加热即食</p>\n        </div>\n        <p class=\"price\">¥<span>9.00</span></p>\n      </div>\n    </a>\n  </li>\n  <li>\n    <a href=\"#\">\n      <div class=\"pic\"><img src=\"./uploads/fresh3.png\" alt=\"\"></div>\n      <div class=\"txt\">\n        <div class=\"info\">\n          <h4>日式风味小圆饼</h4>\n          <p>圆形【海盐味】</p>\n          <p>糖果零食</p>\n        </div>\n        <p class=\"price\">¥<span>588.00</span></p>\n      </div>\n    </a>\n  </li>\n  <li>\n    <a href=\"#\">\n      <div class=\"pic\"><img src=\"./uploads/fresh4.png\" alt=\"\"></div>\n      <div class=\"txt\">\n        <div class=\"info\">\n          <h4>全麦奶油浓香小面包</h4>\n          <p>50g*12 袋</p>\n          <p>美味西点</p>\n        </div>\n        <p class=\"price\">¥<span>69.00</span></p>\n      </div>\n    </a>\n  </li>\n  <li>\n    <a href=\"#\">\n      <div class=\"pic\"><img src=\"./uploads/fresh5.png\" alt=\"\"></div>\n      <div class=\"txt\">\n        <div class=\"info\">\n          <h4>秘制外皮五福摩提大福点心</h4>\n          <p>150g/ 盒</p>\n          <p>美味西点</p>\n        </div>\n        <p class=\"price\">¥<span>39.99</span></p>\n      </div>\n    </a>\n  </li>"
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
          "text": "CSS 样式  \n \n  <li>\n    <a href=\"#\">\n      <div class=\"pic\"><img src=\"./uploads/fresh6.png\" alt=\"\"></div>\n      <div class=\"txt\">\n        <div class=\"info\">\n          <h4>水果面膜韩国蜂蜜柚子茶</h4>\n          <p>560g/ 瓶</p>\n          <p>冲调饮品</p>\n        </div>\n        <p class=\"price\">¥<span>39.99</span></p>\n      </div>\n    </a>\n  </li>\n  <li>\n    <a href=\"#\">\n      <div class=\"pic\"><img src=\"./uploads/fresh7.png\" alt=\"\"></div>\n      <div class=\"txt\">\n        <div class=\"info\">\n          <h4>浓情比利时巧克力礼盒装</h4>\n          <p>205 克 / 盒</p>\n          <p>糖果零食</p>\n        </div>\n        <p class=\"price\">¥<span>120.00</span></p>\n      </div>\n    </a>\n  </li>\n  <li>\n    <a href=\"#\">\n      <div class=\"pic\"><img src=\"./uploads/fresh8.png\" alt=\"\"></div>\n      <div class=\"txt\">\n        <div class=\"info\">\n          <h4>抹茶奶油小蛋糕礼盒装</h4>\n          <p>220 克 / 盒</p>\n          <p>美味西点</p>\n        </div>\n        <p class=\"price\">¥<span>60.00</span></p>\n      </div>\n    </a>\n  </li>\n</ul>\n/* 产品内容  */\n.content .pic {\n  width: 200px;\n  height: 180px;\n}\n \n.content .info {\n  margin-top: 14px;\n  margin-bottom: 5px;"
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
          "text": "12- 生鲜 - 过渡效果  \nHTML 结构  \n \nCSS 样式  \n \n  height: 60px;\n  line-height: 19px;\n}\n \n.content .price {\n  color: #AF2F22;\n}\n \n.content .price span {\n  margin-left: 5px;\n  font-size: 22px;\n}\n<div class=\"cover\">\n  <p>找相似</p>\n  <p></p>\n  <p>发现更多宝贝<span class=\"iconfont icon-arrow-right-bold\"></span></p>\n</div>\n/* 产品底部绿色区域  */\n.content li .cover {\n  position: absolute;\n  left: 0;\n  /* bottom: 0; */\n  bottom: -86px;\n  padding-top: 15px;\n  width: 242px;\n  height: 84px;\n  background-color: #00BE9A;\n  text-align: center;\n  color: #f;\n  transition: all 0.5s;\n}\n \n.content .cover p:nth-child(1) {\n  font-size: 18px;\n}\n \n.content .cover p:nth-child(2) {\n  margin: 3px auto 6px;\n  width: 120px;\n  height: 1px;\n  background-color: rgba(255,255,255,0.11);\n}"
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
          "text": "13- 最新专题 - 布局  \nHTML 结构  \n \n \n.content .cover p:nth-child(3) {\n  font-size: 13px;\n} \n \n.content .cover p:nth-child(3) .iconfont {\n  font-size: 14px;\n}\n \n/* 鼠标悬停到 li ，显示 cover ，改变位置  */\n.content .right li:hover .cover {\n  bottom: 0;\n}\n \n.content .right li:hover {\n  border: 2px solid #00BE9A;\n}\n<!-- 最新专题  -->\n<div class=\"topic wrapper\">\n  <div class=\"title\">\n    <div class=\"left\">\n      <h3>最新专题</h3>\n    </div>\n    <div class=\"right\">\n      <a href=\"#\" class=\"more\">查看全部<span class=\"iconfont icon-arrow-right-bold\"></span></a>\n    </div>\n  </div>\n  <div class=\"topic-bd\">\n    <ul>\n      <li>1</li>\n      <li>2</li>\n      <li>3</li>\n    </ul>"
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
          "text": "CSS 样式  \n \n14- 最新专题 - 内容  \nHTML 结构  \n \n  </div>\n</div>\n/* 最新专题  */\n.topic {\n  margin-bottom: 40px;\n}\n \n.topic .title {\n  margin-top: 100px;\n}\n \n.topic-bd ul {\n  display: ex;\n  justify-content: space-between;\n}\n \n.topic-bd li {\n  width: 405px;\n  height: 355px;\n  background-color: pink;\n}\n<ul>\n  <li>\n    <a href=\"#\">\n      <div class=\"pic\">\n        <img src=\"./uploads/topic1.png\" alt=\"\">\n      </div>\n      <div class=\"txt\">\n        <div class=\"left\">\n          <p>\n            <i class=\"iconfont icon-favorites-ll\"></i>\n            <span>1220</span>\n          </p>\n          <p>\n            <i class=\"iconfont icon-browse\"></i>\n            <span>1800</span>\n          </p>\n        </div>\n        <div class=\"right\">\n          <p>\n            <i class=\"iconfont icon-comment\"></i>\n            <span>246</span>"
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
          "text": "</p>\n        </div>\n      </div>\n    </a>\n  </li>\n  <li>\n    <a href=\"#\">\n      <div class=\"pic\">\n        <img src=\"./uploads/topic2.png\" alt=\"\">\n      </div>\n      <div class=\"txt\">\n        <div class=\"left\">\n          <p>\n            <i class=\"iconfont icon-favorites-ll\"></i>\n            <span>1220</span>\n          </p>\n          <p>\n            <i class=\"iconfont icon-browse\"></i>\n            <span>1800</span>\n          </p>\n        </div>\n        <div class=\"right\">\n          <p>\n            <i class=\"iconfont icon-comment\"></i>\n            <span>246</span>\n          </p>\n        </div>\n      </div>\n    </a>\n  </li>\n  <li>\n    <a href=\"#\">\n      <div class=\"pic\">\n        <img src=\"./uploads/topic3.png\" alt=\"\">\n      </div>\n      <div class=\"txt\">\n        <div class=\"left\">\n          <p>\n            <i class=\"iconfont icon-favorites-ll\"></i>\n            <span>1220</span>\n          </p>\n          <p>\n            <i class=\"iconfont icon-browse\"></i>\n            <span>1800</span>\n          </p>\n        </div>\n        <div class=\"right\">\n          <p>\n            <i class=\"iconfont icon-comment\"></i>\n            <span>246</span>\n          </p>\n        </div>\n      </div>"
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
          "text": "CSS 样式  \n \n15- 最新专题 - 定位文字  \nHTML 结构  \n    </a>\n  </li>\n</ul>\n.topic-bd ul {\n  display: ex;\n  justify-content: space-between;\n}\n \n.topic-bd li {\n  width: 405px;\n  height: 355px;\n  background-color: pink;\n}\n \n.topic-bd .pic {\n  position: relative;\n  width: 405px;\n  height: 288px;\n}\n \n.topic-bd .txt {\n  display: ex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 15px;\n  width: 405px;\n  height: 67px;\n  /* background-color: skyblue; */\n  font-size: 14px;\n  color: #666;\n}\n \n.topic-bd .txt .left {\n  display: ex;\n}\n \n.topic-bd .txt .left p {\n  margin-right: 20px;\n}\n \n.topic-bd .txt .left p:nth-child(1) i {\n  color: #AA2113;\n}"
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
          "text": "CSS 样式  \n \n<div class=\"pic\">\n  <img src=\"./uploads/topic2.png\" alt=\"\">\n  <!-- 定位区域  -->\n  <div class=\"cover\">\n    <div class=\"left\">\n      <h4>吃这些美食才不算辜负自己</h4>\n      <p>餐厨起居洗护好物</p>\n    </div>\n    <div class=\"right\">￥<span>29.9</span><span>起</span></div>\n  </div>\n</div>\n/* 定位区域  - 文字  */\n.topic-bd .cover {\n  position: absolute;\n  left: 0;\n  bottom: 0;\n \n  display: ex;\n  justify-content: space-between;\n  align-items: center;\n \n  padding: 0 15px;\n  width: 405px;\n  height: 90px;\n  background-image: linear-gradient(180deg, rgba(137,137,137,0.00) 0%, rgba(0,0,0,0.90) 100%);\n}\n \n.topic-bd .cover .left {\n  color: #f;\n}\n \n.topic-bd .cover .left h4 {\n  margin-bottom: 6px;\n  font-size: 20px;\n}\n \n.topic-bd .cover .right {\n  padding: 0 7px;\n  height: 25px;\n  background-color: #f;\n  color: #AA2113;\n  font-size: 15px;\n}\n \n.topic-bd .cover .right span {\n  font-size: 18px;\n}"
        }
      ]
    }
  ]
};
