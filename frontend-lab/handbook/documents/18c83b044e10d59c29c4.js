window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["18c83b044e10d59c29c4"] = {
  "id": "18c83b044e10d59c29c4",
  "title": "02-导航二维码显示隐藏切换案例-完成样式.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "02-导航二维码显示隐藏切换案例-完成样式.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>Document</title>\n\n    <style>\n      * {\n        margin: 0;\n\n        padding: 0;\n      }\n\n      /* 因为有通栏：占满一行的边框，所以需要有一个通栏：占满一行的盒子 */\n\n      .nav {\n        height: 40px;\n\n        border-bottom: 1px solid #ccc;\n      }\n\n      /* 因为ul中所有的内容都是在网页的宽度固定并且水平居中的盒子内部，所以设置ul为宽度固定并且水平居中的效果（后面项目中所用到的版心） */\n\n      ul {\n        list-style: none;\n\n        width: 1200px;\n\n        margin: 0 auto;\n      }\n\n      ul li {\n        float: left;\n\n        width: 20%;\n\n        height: 40px;\n\n        border-right: 1px solid #ccc;\n\n        /* 自动内减 */\n\n        box-sizing: border-box;\n\n        text-align: center;\n\n        line-height: 40px;\n      }\n\n      ul .last {\n        border-right: none;\n      }\n\n      ul li a {\n        /* a标签默认是行内元素，宽高由内容撑开，并且无法设置宽高，此时默认情况用户只能点击文字区域才能调整 */\n\n        /* 如果把a标签转换成块级元素，此时可以设置宽高，会让a标签范围更大，用户可以点击调整的区域也越大 */\n\n        display: block;\n\n        /* 宽度不设置块元素会默认占满一行 */\n\n        height: 40px;\n\n        text-decoration: none;\n\n        color: #000;\n      }\n\n      ul li .app {\n        position: relative;\n      }\n\n      ul li .app .code {\n        /* 图片默认隐藏 */\n\n        display: none;\n\n        /* 子绝父相 */\n\n        position: absolute;\n\n        left: 50%;\n\n        transform: translateX(-50%);\n\n        /* 为了img标签不遮住a标签的主体内容 */\n\n        top: 40px;\n\n        border: 1px solid #ccc;\n      }\n\n      /* 当app这个a标签被hover之后，让code显示 */\n\n      ul li .app:hover .code {\n        display: block;\n      }\n    </style>\n  </head>\n\n  <body>\n    <!-- 导航 -->\n\n    <div class=\"nav\">\n      <ul>\n        <li><a href=\"#\">我要投资</a></li>\n\n        <li><a href=\"#\">平台介绍</a></li>\n\n        <li><a href=\"#\">新手专区</a></li>\n\n        <!-- 因为用户鼠标放在二维码图片上也能跳转，所以证明img也是在a的范围内，因此把img写在a标签的内部 -->\n\n        <li>\n          <a href=\"#\" class=\"app\">\n            手机微金所\n            <img src=\"./images/code.jpg\" alt=\"\" class=\"code\" />\n          </a>\n        </li>\n\n        <li class=\"last\"><a href=\"#\">个人中心</a></li>\n      </ul>\n    </div>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
