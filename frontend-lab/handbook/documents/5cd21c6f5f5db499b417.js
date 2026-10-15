window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["5cd21c6f5f5db499b417"] = {
  "id": "5cd21c6f5f5db499b417",
  "title": "day09-小兔鲜儿.pdf",
  "treatment": "课件页级文本（配图回溯原件）",
  "sections": [
    {
      "title": "第1页",
      "level": 1,
      "page": 1,
      "blocks": [
        {
          "type": "text",
          "text": "day09- 小兔鲜儿  \n01- 搭建项目目录  \nxtx-pc\nimages 文件夹：存放固定使用的图片素材，例如： logo 、样式修饰图等等\nuploads 文件夹：存放非固定使用的图片素材，例如：商品图、宣传图需要上传的图片\niconfont 文件夹：字体图标素材\ncss 文件夹：存放  CSS 文件（ link 标签引入）\nbase.css ：基础公共样式\ncommon.css ：各个网页相同模块的重复样式，例如：头部、底部\nindex.css ：首页  CSS 样式\nindex.html ：首页  HTML 文件\n引入样式表  \n \n02- 网页头部 SEO 三大标签  \nSEO ：搜索引擎优化，提升网站百度搜索排名\n提升 SEO 的常见方法：\n1. 竞价排名\n2. 将网页制作成 html 后缀\n3. 标签语义化（在合适的地方使用合适的标签）\n4. ……\n网页头部  SEO 标签：\ntitle ：网页标题标签\ndescription ：网页描述\nkeywords ：网页关键词\n<link rel=\"stylesheet\" href=\"./iconfont/iconfont.css\">\n<link rel=\"stylesheet\" href=\"./css/base.css\">\n<link rel=\"stylesheet\" href=\"./css/common.css\">\n<link rel=\"stylesheet\" href=\"./css/index.css\">"
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
          "text": "03-Favicon 图标  \nFavicon 图标：网页图标，出现在浏览器标题栏，增加网站辨识度。\n图标：favicon.ico，一般存放到网站的根目录里面\n \n04- 版心  \ncommon.css\n<!-- meta:desc -->\n<meta name=\"description\" content=\" 小兔鲜儿官网，致力于打造全球最大的食品、生鲜电商购物平台。 \">\n<!-- meta:kw -->\n<meta name=\"keywords\" content=\" 小兔鲜儿 , 食品 , 生鲜 , 服装 , 家电 , 电商 , 购物 \">\n<title>小兔鲜儿 - 新鲜、惠民、快捷！</title>\n<!-- link:favicon -->\n<link rel=\"shortcut icon\" href=\"favicon.ico\" type=\"image/x-icon\">"
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
          "text": "05- 快捷导航 - 布局  \nHTML 结构  \n \nCSS 样式  \n \n06- 快捷导航 - 内容  \nHTML 结构  \n \nCSS 样式  \n/* 版心  */\n.wrapper {\n  margin: 0 auto;\n  width: 1240px;\n}\n<!-- 快捷导航  -->\n<div class=\"shortcut\">\n  <div class=\"wrapper\">1</div>\n</div>\n/* 快捷导航  */\n.shortcut {\n  height: 52px;\n  background-color: #333;\n}\n \n.shortcut .wrapper {\n  display: ex;\n  justify-content: ex-end;\n  height: 52px;\n  background-color: pink;\n}\n<ul>\n  <li><a href=\"#\" class=\"login\">请先登录</a></li>\n  <li><a href=\"#\">免费注册</a></li>\n  <li><a href=\"#\">我的订单</a></li>\n  <li><a href=\"#\">会员中心</a></li>\n  <li><a href=\"#\">帮助中心</a></li>\n  <li><a href=\"#\">在线客服</a></li>\n  <li><a href=\"#\"><span class=\"iconfont icon-mobile-phone\"></span>手机版</a></li>\n</ul>"
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
          "text": "07- 头部 - 布局  \nHTML 结构  \n \nCSS 样式  \n.shortcut ul {\n  display: ex;\n  line-height: 52px;\n}\n \n.shortcut li a {\n  padding: 0 15px;\n  border-right: 1px solid #999;\n  font-size: 14px;\n  color: #f;\n}\n \n.shortcut li:last-child a {\n  border-right: 0;\n}\n \n.shortcut li .iconfont {\n  margin-right: 4px;\n  vertical-align: middle;\n}\n \n.shortcut li .login {\n  color: #5EB69C;\n}\n<!-- 头部  -->\n<div class=\"header wrapper\">\n  <!-- logo -->\n  <div class=\"logo\">logo</div>\n  <!-- 导航  -->\n  <div class=\"nav\">导航</div>\n  <!-- 搜索  -->\n  <div class=\"search\">搜索</div>\n  <!-- 购物车  -->\n  <div class=\"cart\">购物车</div>\n</div>"
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
          "text": "08- 头部 -logo  \nHTML 结构  \n \nCSS 样式  \n \n09- 头部 - 导航  \nHTML 结构  \n/* 头部  */\n.header {\n  display: ex;\n  margin-top: 22px;\n  margin-bottom: 22px;\n  height: 88px;\n  background-color: pink;\n}\n<!-- logo -->\n<div class=\"logo\">\n  <h1><a href=\"#\">小兔鲜儿</a></h1>\n</div>\n/* logo */\n.logo {\n  margin-right: 40px;\n  width: 200px;\n  height: 88px;\n  /* background-color: skyblue; */\n}\n \n.logo a {\n  display: block;\n  width: 200px;\n  height: 88px;\n  background-image: url(../images/logo.png);\n  font-size: 0;\n}"
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
          "text": "CSS 样式  \n \n10- 头部 - 搜索  \nHTML 结构  \n \nCSS 样式  \n<ul>\n  <li><a href=\"#\">首页</a></li>\n  <li><a href=\"#\">生鲜</a></li>\n  <li><a href=\"#\">美食</a></li>\n  <li><a href=\"#\">餐厨</a></li>\n  <li><a href=\"#\">电器</a></li>\n  <li><a href=\"#\">居家</a></li>\n  <li><a href=\"#\">洗护</a></li>\n  <li><a href=\"#\">孕婴</a></li>\n  <li><a href=\"#\">服装</a></li>\n</ul>\n/* 导航  */\n.nav {\n  margin-top: 33px;\n  margin-right: 28px;\n}\n \n.nav ul {\n  display: ex;\n}\n \n.nav li {\n  margin-right: 47px;\n}\n \n.nav li a {\n  padding-bottom: 10px;\n  /* background-color: skyblue; */\n}\n \n.nav li a:hover {\n  border-bottom: 2px solid #5EB69C;\n  color: #5EB69C;\n}\n<!-- 搜索  -->\n<div class=\"search\">\n  <span class=\"iconfont icon-search\"></span>\n  <input type=\"text\" placeholder=\" 搜一搜 \">\n</div>"
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
          "text": "11- 头部 - 购物车  \nHTML 结构  \n \nCSS 样式  \n \n/* 搜索  */\n.search {\n  display: ex;\n  margin-top: 33px;\n  margin-right: 45px;\n  width: 170px;\n  height: 34px;\n  border-bottom: 2px solid #F4F4F4;\n}\n \n.search .iconfont {\n  margin-right: 8px;\n  font-size: 18px;\n  color: #ccc;\n}\n \n.search input {\n  /* 浏览器优先生效  input 标签的默认宽度，所以  ex ： 1 不生效  */\n  /* 解决办法：重置  input 默认宽度  →  width ： 0 */\n  ex: 1;\n  width: 0;\n}\n \n.search input::placeholder {\n  font-size: 16px;\n  color: #ccc;\n}\n<!-- 购物车  -->\n<div class=\"cart\">\n  <span class=\"iconfont icon-cart-full\"></span>\n  <i>2</i>\n</div>\n/* 购物车  */\n.cart {\n  position: relative;\n  margin-top: 32px;\n}\n \n.cart .iconfont {\n  font-size: 24px;\n}"
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
          "text": "12- 底部 - 布局  \nHTML 结构  \n \nCSS 样式  \n \n.cart i {\n  position: absolute;\n  top: 1px;\n  /* right 定位右对齐：如果文字多了，向左撑开，可能盖住其他的内容  */\n  /* right: 1px; */\n  /* left 定位左对齐：文字多了，向右撑开  */\n  left: 15px;\n  padding: 0 6px;\n  height: 15px;\n  background-color: #E26237;\n  border-radius: 8px;\n  font-size: 14px;\n  color: #FFFEFE;\n  line-height: 15px;\n}\n<!-- 底部  -->\n<div class=\"footer\">\n  <div class=\"wrapper\">\n    <!-- 服务  -->\n    <div class=\"service\">服务</div>\n    <!-- 帮助中心  -->\n    <div class=\"help\">帮助中心</div>\n    <!-- 版权  -->\n    <div class=\"copyright\">版权</div>\n  </div>\n</div>\n/* 底部  */"
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
          "text": "13- 底部 - 服务区域  \nHTML 结构  \n \nCSS 结构  \n \n.footer {\n  height: 580px;\n  background-color: #F5F5F5;\n}\n \n/* 服务  */\n.service {\n  padding: 60px 0;\n  height: 178px;\n  border-bottom: 1px solid #E8E8E8;\n}\n \n/* 帮助中心  */\n.help {\n  display: ex;\n  justify-content: space-between;\n  padding-top: 60px;\n  height: 300px;\n  background-color: pink;\n}\n<ul>\n  <li>\n    <h5></h5>\n    <p>价格亲民</p>\n  </li>\n  <li>\n    <h5></h5>\n    <p>物流快捷</p>\n  </li>\n  <li>\n    <h5></h5>\n    <p>品质新鲜</p>\n  </li>\n  <li>\n    <h5></h5>\n    <p>售后无忧</p>\n  </li>\n</ul>\n.service ul {\n  display: ex;\n  justify-content: space-evenly;\n}"
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
          "text": "14- 底部 - 帮助中心 - 左侧  \nHTML 结构  \n \n \n.service li {\n  display: ex;\n  width: 190px;\n  height: 58px;\n  /* background-color: pink; */\n}\n \n.service li h5 {\n  margin-right: 20px;\n  width: 58px;\n  height: 58px;\n  background-image: url(../images/sprite.png);\n}\n \n.service li p {\n  font-size: 28px;\n  line-height: 58px;\n}\n \n.service li:nth-child(2) h5 {\n  background-position: 0 -58px;\n}\n.service li:nth-child(3) h5 {\n  background-position: 0 -116px;\n}\n.service li:nth-child(4) h5 {\n  background-position: 0 -174px;\n}\n<div class=\"left\">\n  <dl>\n    <dt>购物指南</dt>\n    <dd><a href=\"#\">购物流程</a></dd>\n    <dd><a href=\"#\">支付方式</a></dd>\n    <dd><a href=\"#\">售后规则</a></dd>\n  </dl>\n  <dl>\n    <dt>配送方式</dt>\n    <dd><a href=\"#\">配送运费</a></dd>\n    <dd><a href=\"#\">配送范围</a></dd>\n    <dd><a href=\"#\">配送时间</a></dd>\n  </dl>\n  <dl>\n    <dt>关于我们</dt>\n    <dd><a href=\"#\">平台规则</a></dd>\n    <dd><a href=\"#\">联系我们</a></dd>\n    <dd><a href=\"#\">问题反馈</a></dd>"
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
          "text": "CSS 样式  \n \n15- 底部 - 帮助中心 - 右侧  \nHTML 结构  \n  </dl>\n  <dl>\n    <dt>售后服务</dt>\n    <dd><a href=\"#\">售后政策</a></dd>\n    <dd><a href=\"#\">退款说明</a></dd>\n    <dd><a href=\"#\">取消订单</a></dd>\n  </dl>\n  <dl>\n    <dt>服务热线</dt>\n    <dd><a href=\"#\">在线客服<span class=\"iconfont icon-customer-service\"></span></a></dd>\n    <dd><a href=\"#\">客服电话  400-0000-000</a></dd>\n    <dd><a href=\"#\">工作时间  周一至周日  8:00-18:00</a></dd>\n  </dl>\n</div>\n/* left */\n.help .left {\n  display: ex;\n}\n \n.help .left dl {\n  margin-right: 84px;\n}\n \n.help .left dl:last-child {\n  margin-right: 0;\n}\n \n.help .left dt {\n  margin-bottom: 30px;\n  font-size: 18px;\n}\n \n.help .left dd {\n  margin-bottom: 10px;\n}\n \n.help .left a {\n  color: #969696;\n}\n \n.help .left .iconfont {\n  color: #5EB69C;\n}"
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
          "text": "CSS 样式  \n \n16- 底部 - 版权  \nHTML 结构  \n \n<div class=\"right\">\n  <ul>\n    <li>\n      <div class=\"pic\"><img src=\"./images/wechat.png\" alt=\"\"></div>\n      <p>微信公众号</p>\n    </li>\n    <li>\n      <div class=\"pic\"><img src=\"./images/app.png\" alt=\"\"></div>\n      <p>APP 下载二维码</p>\n    </li>\n  </ul>\n</div>\n/* right */\n.help .right ul {\n  display: ex;\n}\n \n.help .right li:rst-child {\n  margin-right: 55px;\n}\n \n.help .right .pic {\n  margin-bottom: 10px;\n  width: 120px;\n  height: 120px;\n}\n \n.help .right p {\n  color: #969696;\n  text-align: center;\n}\n<p>\n  <a href=\"#\">关于我们</a>|\n  <a href=\"#\">帮助中心</a>|\n  <a href=\"#\">售后服务</a>|\n  <a href=\"#\">配送与验收</a>|\n  <a href=\"#\">商务合作</a>|\n  <a href=\"#\">搜索推荐</a>|\n  <a href=\"#\">友情链接</a>\n</p>\n<p>CopyRight © 小兔鲜</p>"
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
          "text": "CSS 样式  \n /* 版权  */\n.copyright {\n  text-align: center;\n}\n \n.copyright p {\n  margin-bottom: 10px;\n  color: #A1A1A1;\n}\n \n.copyright p a {\n  margin: 0 10px;\n  color: #A1A1A1;\n}"
        }
      ]
    }
  ]
};
