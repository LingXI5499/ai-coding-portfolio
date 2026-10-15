window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["620ba4ba57e6967ceefd"] = {
  "id": "620ba4ba57e6967ceefd",
  "title": "轮播图.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "轮播图.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>轮播图</title>\n\n    <link rel=\"stylesheet\" href=\"./iconfont/iconfont.css\" />\n\n    <style>\n      * {\n        margin: 0;\n\n        padding: 0;\n\n        box-sizing: border-box;\n      }\n\n      li {\n        list-style: none;\n      }\n\n      .banner {\n        position: relative;\n\n        margin: 100px auto;\n\n        width: 564px;\n\n        height: 315px;\n\n        /* background-color: pink; */\n\n        overflow: hidden;\n      }\n\n      /* 图片 */\n\n      .banner img {\n        width: 564px;\n\n        border-radius: 12px;\n\n        vertical-align: middle;\n      }\n\n      .banner ul {\n        display: flex;\n      }\n\n      /* 箭头 */\n\n      .banner .prev,\n      .banner .next {\n        /* 隐藏 */\n\n        display: none;\n\n        position: absolute;\n\n        top: 50%;\n\n        transform: translateY(-50%);\n\n        width: 20px;\n\n        height: 30px;\n\n        background-color: rgba(0, 0, 0, 0.3);\n\n        text-decoration: none;\n\n        color: #fff;\n\n        line-height: 30px;\n      }\n\n      /* 鼠标滑到banner区域，箭头要显示 display:block */\n\n      .banner:hover .prev,\n      .banner:hover .next {\n        display: block;\n      }\n\n      .banner .prev {\n        left: 0;\n\n        border-radius: 0 15px 15px 0;\n      }\n\n      .banner .next {\n        right: 0;\n\n        border-radius: 15px 0 0 15px;\n\n        text-align: center;\n      }\n\n      /* 圆点 */\n\n      .banner ol {\n        position: absolute;\n\n        bottom: 20px;\n\n        left: 50%;\n\n        transform: translateX(-50%);\n\n        height: 13px;\n\n        background-color: rgba(255, 255, 255, 0.3);\n\n        display: flex;\n\n        border-radius: 10px;\n      }\n\n      .banner ol li {\n        margin: 3px;\n\n        width: 8px;\n\n        height: 8px;\n\n        background-color: #fff;\n\n        border-radius: 50%;\n\n        cursor: pointer;\n      }\n\n      /* 橙色的li */\n\n      .banner ol .active {\n        background-color: #ff5000;\n      }\n    </style>\n  </head>\n\n  <body>\n    <div class=\"banner\">\n      <!-- 图: ul > li -->\n\n      <ul>\n        <li>\n          <a href=\"#\"><img src=\"./images/banner1.jpg\" alt=\"\" /></a>\n        </li>\n\n        <li>\n          <a href=\"#\"><img src=\"./images/banner2.jpg\" alt=\"\" /></a>\n        </li>\n\n        <li>\n          <a href=\"#\"><img src=\"./images/banner3.jpg\" alt=\"\" /></a>\n        </li>\n      </ul>\n\n      <!-- 箭头 -->\n\n      <!-- 上一张 prev -->\n\n      <a href=\"#\" class=\"prev\">\n        <i class=\"iconfont icon-zuoce\"></i>\n      </a>\n\n      <!-- 下一张 next -->\n\n      <a href=\"#\" class=\"next\">\n        <i class=\"iconfont icon-youce\"></i>\n      </a>\n\n      <!-- 圆点 -->\n\n      <ol>\n        <li></li>\n\n        <li class=\"active\"></li>\n\n        <li></li>\n      </ol>\n    </div>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
