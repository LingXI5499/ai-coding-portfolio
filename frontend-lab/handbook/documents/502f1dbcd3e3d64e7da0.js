window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["502f1dbcd3e3d64e7da0"] = {
  "id": "502f1dbcd3e3d64e7da0",
  "title": "02-卡片模块hot图片案例-完成样式.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "02-卡片模块hot图片案例-完成样式.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>Document</title>\n\n    <style>\n      /* 清除标签默认的margin和padding */\n\n      * {\n        margin: 0;\n\n        padding: 0;\n      }\n\n      body {\n        background-color: #f4f5f9;\n      }\n\n      .box {\n        position: relative;\n\n        /* 1、宽高 */\n\n        width: 228px;\n\n        height: 270px;\n\n        /* 2、背景颜色 */\n\n        background-color: #fff;\n\n        margin: 100px auto;\n      }\n\n      .box .product {\n        /* width: 228px; */\n\n        width: 100%;\n      }\n\n      .box h3 {\n        height: 52px;\n\n        padding-left: 24px;\n\n        padding-right: 20px;\n\n        margin-top: 25px;\n\n        font-size: 14px;\n\n        font-weight: 400;\n      }\n\n      .box p {\n        margin-left: 24px;\n\n        font-size: 12px;\n\n        color: #929292;\n      }\n\n      .box p span {\n        color: #f77321;\n      }\n\n      /* 设置hot定位 */\n\n      .hot {\n        position: absolute;\n\n        top: 4px;\n\n        right: -4px;\n      }\n    </style>\n  </head>\n\n  <body>\n    <!-- 布局流程：从上往下、从外往内 -->\n\n    <div class=\"box\">\n      <img src=\"./images/hot.png\" alt=\"\" class=\"hot\" />\n\n      <img src=\"./images/product.png\" alt=\"\" class=\"product\" />\n\n      <h3>Android网络图片加载框架详解</h3>\n\n      <p>\n        <span>高级</span>\n        • 1125人在学习\n      </p>\n    </div>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
