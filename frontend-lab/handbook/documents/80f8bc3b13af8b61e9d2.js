window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["80f8bc3b13af8b61e9d2"] = {
  "id": "80f8bc3b13af8b61e9d2",
  "title": "day09-小兔鲜儿.md",
  "treatment": "章节知识与练习",
  "sections": [
    {
      "title": "01-搭建项目目录",
      "trail": [
        "day09-小兔鲜儿",
        "01-搭建项目目录"
      ],
      "level": 2,
      "line": 3,
      "blocks": [
        {
          "type": "text",
          "text": "[课程配图见原资料]\n\n* xtx-pc\n  * images 文件夹：存放固定使用的图片素材，例如：logo、样式修饰图等等\n  * uploads 文件夹：存放非固定使用的图片素材，例如：商品图、宣传图需要上传的图片\n  * iconfont 文件夹：字体图标素材\n  * css 文件夹：存放 CSS 文件（link 标签引入）\n    * base.css：基础公共样式\n    * common.css：各个网页相同模块的重复样式，例如：头部、底部\n    * index.css：首页 CSS 样式\n  * index.html：首页 HTML 文件"
        }
      ]
    },
    {
      "title": "引入样式表",
      "trail": [
        "day09-小兔鲜儿",
        "01-搭建项目目录",
        "引入样式表"
      ],
      "level": 3,
      "line": 17,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<link rel=\"stylesheet\" href=\"./iconfont/iconfont.css\" />\n<link rel=\"stylesheet\" href=\"./css/base.css\" />\n<link rel=\"stylesheet\" href=\"./css/common.css\" />\n<link rel=\"stylesheet\" href=\"./css/index.css\" />"
        }
      ]
    },
    {
      "title": "02-网页头部SEO三大标签",
      "trail": [
        "day09-小兔鲜儿",
        "02-网页头部SEO三大标签"
      ],
      "level": 2,
      "line": 26,
      "blocks": [
        {
          "type": "text",
          "text": "SEO：搜索引擎优化，提升网站百度搜索排名\n\n提升SEO的常见方法：\n\n1. 竞价排名\n2. 将网页制作成html后缀\n3. 标签语义化（在合适的地方使用合适的标签）\n4. ……\n\n网页头部 SEO 标签：\n\n* title：网页标题标签\n* description：网页描述\n* keywords：网页关键词\n\n[课程配图见原资料]"
        },
        {
          "type": "code",
          "language": "html",
          "text": "<!-- meta:desc -->\n<meta\n  name=\"description\"\n  content=\"小兔鲜儿官网，致力于打造全球最大的食品、生鲜电商购物平台。\"\n/>\n<!-- meta:kw -->\n<meta name=\"keywords\" content=\"小兔鲜儿,食品,生鲜,服装,家电,电商,购物\" />\n<title>小兔鲜儿-新鲜、惠民、快捷！</title>"
        }
      ]
    },
    {
      "title": "03-Favicon图标",
      "trail": [
        "day09-小兔鲜儿",
        "03-Favicon图标"
      ],
      "level": 2,
      "line": 53,
      "blocks": [
        {
          "type": "text",
          "text": "[课程配图见原资料]\n\nFavicon 图标：网页图标，出现在浏览器标题栏，增加网站辨识度。\n\n图标：**favicon.ico**，一般存放到网站的**根目录**里面\n\n[课程配图见原资料]"
        },
        {
          "type": "code",
          "language": "html",
          "text": "<!-- link:favicon -->\n<link rel=\"shortcut icon\" href=\"favicon.ico\" type=\"image/x-icon\" />"
        }
      ]
    },
    {
      "title": "04-版心",
      "trail": [
        "day09-小兔鲜儿",
        "04-版心"
      ],
      "level": 2,
      "line": 68,
      "blocks": [
        {
          "type": "text",
          "text": "> common.css"
        },
        {
          "type": "code",
          "language": "css",
          "text": "/* 版心 */\n.wrapper {\n  margin: 0 auto;\n  width: 1240px;\n}"
        }
      ]
    },
    {
      "title": "05-快捷导航-布局",
      "trail": [
        "day09-小兔鲜儿",
        "05-快捷导航-布局"
      ],
      "level": 2,
      "line": 80,
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
        "day09-小兔鲜儿",
        "05-快捷导航-布局",
        "HTML结构"
      ],
      "level": 3,
      "line": 84,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!-- 快捷导航 -->\n<div class=\"shortcut\">\n  <div class=\"wrapper\">1</div>\n</div>"
        }
      ]
    },
    {
      "title": "CSS样式",
      "trail": [
        "day09-小兔鲜儿",
        "05-快捷导航-布局",
        "CSS样式"
      ],
      "level": 3,
      "line": 93,
      "blocks": [
        {
          "type": "code",
          "language": "css",
          "text": "/* 快捷导航 */\n.shortcut {\n  height: 52px;\n  background-color: #333;\n}\n\n.shortcut .wrapper {\n  display: flex;\n  justify-content: flex-end;\n  height: 52px;\n  background-color: pink;\n}"
        }
      ]
    },
    {
      "title": "HTML结构",
      "trail": [
        "day09-小兔鲜儿",
        "06-快捷导航-内容",
        "HTML结构"
      ],
      "level": 3,
      "line": 112,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<ul>\n  <li><a href=\"#\" class=\"login\">请先登录</a></li>\n  <li><a href=\"#\">免费注册</a></li>\n  <li><a href=\"#\">我的订单</a></li>\n  <li><a href=\"#\">会员中心</a></li>\n  <li><a href=\"#\">帮助中心</a></li>\n  <li><a href=\"#\">在线客服</a></li>\n  <li>\n    <a href=\"#\">\n      <span class=\"iconfont icon-mobile-phone\"></span>\n      手机版\n    </a>\n  </li>\n</ul>"
        }
      ]
    },
    {
      "title": "CSS样式",
      "trail": [
        "day09-小兔鲜儿",
        "06-快捷导航-内容",
        "CSS样式"
      ],
      "level": 3,
      "line": 126,
      "blocks": [
        {
          "type": "code",
          "language": "css",
          "text": ".shortcut ul {\n  display: flex;\n  line-height: 52px;\n}\n\n.shortcut li a {\n  padding: 0 15px;\n  border-right: 1px solid #999;\n  font-size: 14px;\n  color: #fff;\n}\n\n.shortcut li:last-child a {\n  border-right: 0;\n}\n\n.shortcut li .iconfont {\n  margin-right: 4px;\n  vertical-align: middle;\n}\n\n.shortcut li .login {\n  color: #5eb69c;\n}"
        }
      ]
    },
    {
      "title": "07-头部-布局",
      "trail": [
        "day09-小兔鲜儿",
        "07-头部-布局"
      ],
      "level": 2,
      "line": 155,
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
        "day09-小兔鲜儿",
        "07-头部-布局",
        "HTML结构"
      ],
      "level": 3,
      "line": 159,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!-- 头部 -->\n<div class=\"header wrapper\">\n  <!-- logo -->\n  <div class=\"logo\">logo</div>\n  <!-- 导航 -->\n  <div class=\"nav\">导航</div>\n  <!-- 搜索 -->\n  <div class=\"search\">搜索</div>\n  <!-- 购物车 -->\n  <div class=\"cart\">购物车</div>\n</div>"
        }
      ]
    },
    {
      "title": "CSS样式",
      "trail": [
        "day09-小兔鲜儿",
        "07-头部-布局",
        "CSS样式"
      ],
      "level": 3,
      "line": 175,
      "blocks": [
        {
          "type": "code",
          "language": "css",
          "text": "/* 头部 */\n.header {\n  display: flex;\n  margin-top: 22px;\n  margin-bottom: 22px;\n  height: 88px;\n  background-color: pink;\n}"
        }
      ]
    },
    {
      "title": "HTML结构",
      "trail": [
        "day09-小兔鲜儿",
        "08-头部-logo",
        "HTML结构"
      ],
      "level": 3,
      "line": 190,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!-- logo -->\n<div class=\"logo\">\n  <h1><a href=\"#\">小兔鲜儿</a></h1>\n</div>"
        }
      ]
    },
    {
      "title": "CSS样式",
      "trail": [
        "day09-小兔鲜儿",
        "08-头部-logo",
        "CSS样式"
      ],
      "level": 3,
      "line": 199,
      "blocks": [
        {
          "type": "code",
          "language": "css",
          "text": "/* logo */\n.logo {\n  margin-right: 40px;\n  width: 200px;\n  height: 88px;\n  /* background-color: skyblue; */\n}\n\n.logo a {\n  display: block;\n  width: 200px;\n  height: 88px;\n  background-image: url(../images/logo.png);\n  font-size: 0;\n}"
        }
      ]
    },
    {
      "title": "HTML结构",
      "trail": [
        "day09-小兔鲜儿",
        "09-头部-导航",
        "HTML结构"
      ],
      "level": 3,
      "line": 221,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<ul>\n  <li><a href=\"#\">首页</a></li>\n  <li><a href=\"#\">生鲜</a></li>\n  <li><a href=\"#\">美食</a></li>\n  <li><a href=\"#\">餐厨</a></li>\n  <li><a href=\"#\">电器</a></li>\n  <li><a href=\"#\">居家</a></li>\n  <li><a href=\"#\">洗护</a></li>\n  <li><a href=\"#\">孕婴</a></li>\n  <li><a href=\"#\">服装</a></li>\n</ul>"
        }
      ]
    },
    {
      "title": "CSS样式",
      "trail": [
        "day09-小兔鲜儿",
        "09-头部-导航",
        "CSS样式"
      ],
      "level": 3,
      "line": 237,
      "blocks": [
        {
          "type": "code",
          "language": "css",
          "text": "/* 导航 */\n.nav {\n  margin-top: 33px;\n  margin-right: 28px;\n}\n\n.nav ul {\n  display: flex;\n}\n\n.nav li {\n  margin-right: 47px;\n}\n\n.nav li a {\n  padding-bottom: 10px;\n  /* background-color: skyblue; */\n}\n\n.nav li a:hover {\n  border-bottom: 2px solid #5eb69c;\n  color: #5eb69c;\n}"
        }
      ]
    },
    {
      "title": "HTML结构",
      "trail": [
        "day09-小兔鲜儿",
        "10-头部-搜索",
        "HTML结构"
      ],
      "level": 3,
      "line": 267,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!-- 搜索 -->\n<div class=\"search\">\n  <span class=\"iconfont icon-search\"></span>\n  <input type=\"text\" placeholder=\"搜一搜\" />\n</div>"
        }
      ]
    },
    {
      "title": "CSS样式",
      "trail": [
        "day09-小兔鲜儿",
        "10-头部-搜索",
        "CSS样式"
      ],
      "level": 3,
      "line": 277,
      "blocks": [
        {
          "type": "code",
          "language": "scss",
          "text": "/* 搜索 */\n.search {\n  display: flex;\n  margin-top: 33px;\n  margin-right: 45px;\n  width: 170px;\n  height: 34px;\n  border-bottom: 2px solid #f4f4f4;\n}\n\n.search .iconfont {\n  margin-right: 8px;\n  font-size: 18px;\n  color: #ccc;\n}\n\n.search input {\n  /* 浏览器优先生效 input 标签的默认宽度，所以 flex：1 不生效 */\n  /* 解决办法：重置 input 默认宽度 → width：0 */\n  flex: 1;\n  width: 0;\n}\n\n.search input::placeholder {\n  font-size: 16px;\n  color: #ccc;\n}"
        }
      ]
    },
    {
      "title": "HTML结构",
      "trail": [
        "day09-小兔鲜儿",
        "11-头部-购物车",
        "HTML结构"
      ],
      "level": 3,
      "line": 311,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!-- 购物车 -->\n<div class=\"cart\">\n  <span class=\"iconfont icon-cart-full\"></span>\n  <i>2</i>\n</div>"
        }
      ]
    },
    {
      "title": "CSS样式",
      "trail": [
        "day09-小兔鲜儿",
        "11-头部-购物车",
        "CSS样式"
      ],
      "level": 3,
      "line": 321,
      "blocks": [
        {
          "type": "code",
          "language": "css",
          "text": "/* 购物车 */\n.cart {\n  position: relative;\n  margin-top: 32px;\n}\n\n.cart .iconfont {\n  font-size: 24px;\n}\n\n.cart i {\n  position: absolute;\n  top: 1px;\n  /* right 定位右对齐：如果文字多了，向左撑开，可能盖住其他的内容 */\n  /* right: 1px; */\n  /* left 定位左对齐：文字多了，向右撑开 */\n  left: 15px;\n  padding: 0 6px;\n  height: 15px;\n  background-color: #e26237;\n  border-radius: 8px;\n  font-size: 14px;\n  color: #fffefe;\n  line-height: 15px;\n}"
        }
      ]
    },
    {
      "title": "12-底部-布局",
      "trail": [
        "day09-小兔鲜儿",
        "12-底部-布局"
      ],
      "level": 2,
      "line": 351,
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
        "day09-小兔鲜儿",
        "12-底部-布局",
        "HTML结构"
      ],
      "level": 3,
      "line": 355,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!-- 底部 -->\n<div class=\"footer\">\n  <div class=\"wrapper\">\n    <!-- 服务 -->\n    <div class=\"service\">服务</div>\n    <!-- 帮助中心 -->\n    <div class=\"help\">帮助中心</div>\n    <!-- 版权 -->\n    <div class=\"copyright\">版权</div>\n  </div>\n</div>"
        }
      ]
    },
    {
      "title": "CSS样式",
      "trail": [
        "day09-小兔鲜儿",
        "12-底部-布局",
        "CSS样式"
      ],
      "level": 3,
      "line": 371,
      "blocks": [
        {
          "type": "code",
          "language": "css",
          "text": "/* 底部 */\n.footer {\n  height: 580px;\n  background-color: #f5f5f5;\n}\n\n/* 服务 */\n.service {\n  padding: 60px 0;\n  height: 178px;\n  border-bottom: 1px solid #e8e8e8;\n}\n\n/* 帮助中心 */\n.help {\n  display: flex;\n  justify-content: space-between;\n  padding-top: 60px;\n  height: 300px;\n  background-color: pink;\n}"
        }
      ]
    },
    {
      "title": "HTML结构",
      "trail": [
        "day09-小兔鲜儿",
        "13-底部-服务区域",
        "HTML结构"
      ],
      "level": 3,
      "line": 399,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<ul>\n  <li>\n    <h5></h5>\n    <p>价格亲民</p>\n  </li>\n  <li>\n    <h5></h5>\n    <p>物流快捷</p>\n  </li>\n  <li>\n    <h5></h5>\n    <p>品质新鲜</p>\n  </li>\n  <li>\n    <h5></h5>\n    <p>售后无忧</p>\n  </li>\n</ul>"
        }
      ]
    },
    {
      "title": "CSS结构",
      "trail": [
        "day09-小兔鲜儿",
        "13-底部-服务区域",
        "CSS结构"
      ],
      "level": 3,
      "line": 422,
      "blocks": [
        {
          "type": "code",
          "language": "css",
          "text": ".service ul {\n  display: flex;\n  justify-content: space-evenly;\n}\n\n.service li {\n  display: flex;\n  width: 190px;\n  height: 58px;\n  /* background-color: pink; */\n}\n\n.service li h5 {\n  margin-right: 20px;\n  width: 58px;\n  height: 58px;\n  background-image: url(../images/sprite.png);\n}\n\n.service li p {\n  font-size: 28px;\n  line-height: 58px;\n}\n\n.service li:nth-child(2) h5 {\n  background-position: 0 -58px;\n}\n.service li:nth-child(3) h5 {\n  background-position: 0 -116px;\n}\n.service li:nth-child(4) h5 {\n  background-position: 0 -174px;\n}"
        }
      ]
    },
    {
      "title": "HTML结构",
      "trail": [
        "day09-小兔鲜儿",
        "14-底部-帮助中心-左侧",
        "HTML结构"
      ],
      "level": 3,
      "line": 462,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<div class=\"left\">\n  <dl>\n    <dt>购物指南</dt>\n    <dd><a href=\"#\">购物流程</a></dd>\n    <dd><a href=\"#\">支付方式</a></dd>\n    <dd><a href=\"#\">售后规则</a></dd>\n  </dl>\n  <dl>\n    <dt>配送方式</dt>\n    <dd><a href=\"#\">配送运费</a></dd>\n    <dd><a href=\"#\">配送范围</a></dd>\n    <dd><a href=\"#\">配送时间</a></dd>\n  </dl>\n  <dl>\n    <dt>关于我们</dt>\n    <dd><a href=\"#\">平台规则</a></dd>\n    <dd><a href=\"#\">联系我们</a></dd>\n    <dd><a href=\"#\">问题反馈</a></dd>\n  </dl>\n  <dl>\n    <dt>售后服务</dt>\n    <dd><a href=\"#\">售后政策</a></dd>\n    <dd><a href=\"#\">退款说明</a></dd>\n    <dd><a href=\"#\">取消订单</a></dd>\n  </dl>\n  <dl>\n    <dt>服务热线</dt>\n    <dd>\n      <a href=\"#\">\n        在线客服\n        <span class=\"iconfont icon-customer-service\"></span>\n      </a>\n    </dd>\n    <dd><a href=\"#\">客服电话 400-0000-000</a></dd>\n    <dd><a href=\"#\">工作时间 周一至周日 8:00-18:00</a></dd>\n  </dl>\n</div>"
        }
      ]
    },
    {
      "title": "CSS样式",
      "trail": [
        "day09-小兔鲜儿",
        "14-底部-帮助中心-左侧",
        "CSS样式"
      ],
      "level": 3,
      "line": 499,
      "blocks": [
        {
          "type": "code",
          "language": "css",
          "text": "/* left */\n.help .left {\n  display: flex;\n}\n\n.help .left dl {\n  margin-right: 84px;\n}\n\n.help .left dl:last-child {\n  margin-right: 0;\n}\n\n.help .left dt {\n  margin-bottom: 30px;\n  font-size: 18px;\n}\n\n.help .left dd {\n  margin-bottom: 10px;\n}\n\n.help .left a {\n  color: #969696;\n}\n\n.help .left .iconfont {\n  color: #5eb69c;\n}"
        }
      ]
    },
    {
      "title": "HTML结构",
      "trail": [
        "day09-小兔鲜儿",
        "15-底部-帮助中心-右侧",
        "HTML结构"
      ],
      "level": 3,
      "line": 535,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<div class=\"right\">\n  <ul>\n    <li>\n      <div class=\"pic\"><img src=\"./images/wechat.png\" alt=\"\" /></div>\n      <p>微信公众号</p>\n    </li>\n    <li>\n      <div class=\"pic\"><img src=\"./images/app.png\" alt=\"\" /></div>\n      <p>APP下载二维码</p>\n    </li>\n  </ul>\n</div>"
        }
      ]
    },
    {
      "title": "CSS样式",
      "trail": [
        "day09-小兔鲜儿",
        "15-底部-帮助中心-右侧",
        "CSS样式"
      ],
      "level": 3,
      "line": 552,
      "blocks": [
        {
          "type": "code",
          "language": "css",
          "text": "/* right */\n.help .right ul {\n  display: flex;\n}\n\n.help .right li:first-child {\n  margin-right: 55px;\n}\n\n.help .right .pic {\n  margin-bottom: 10px;\n  width: 120px;\n  height: 120px;\n}\n\n.help .right p {\n  color: #969696;\n  text-align: center;\n}"
        }
      ]
    },
    {
      "title": "HTML结构",
      "trail": [
        "day09-小兔鲜儿",
        "16-底部-版权",
        "HTML结构"
      ],
      "level": 3,
      "line": 578,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<p>\n  <a href=\"#\">关于我们</a>\n  |\n  <a href=\"#\">帮助中心</a>\n  |\n  <a href=\"#\">售后服务</a>\n  |\n  <a href=\"#\">配送与验收</a>\n  |\n  <a href=\"#\">商务合作</a>\n  |\n  <a href=\"#\">搜索推荐</a>\n  |\n  <a href=\"#\">友情链接</a>\n</p>\n<p>CopyRight © 小兔鲜</p>"
        }
      ]
    },
    {
      "title": "CSS样式",
      "trail": [
        "day09-小兔鲜儿",
        "16-底部-版权",
        "CSS样式"
      ],
      "level": 3,
      "line": 593,
      "blocks": [
        {
          "type": "code",
          "language": "css",
          "text": "/* 版权 */\n.copyright {\n  text-align: center;\n}\n\n.copyright p {\n  margin-bottom: 10px;\n  color: #a1a1a1;\n}\n\n.copyright p a {\n  margin: 0 10px;\n  color: #a1a1a1;\n}"
        }
      ]
    }
  ]
};
