window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["26f64eaff22234e15eb7"] = {
  "id": "26f64eaff22234e15eb7",
  "title": "网页遮罩显示隐藏切换案例.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "网页遮罩显示隐藏切换案例.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>Document</title>\n\n    <style>\n      * {\n        margin: 0;\n\n        padding: 0;\n      }\n\n      .box {\n        width: 711px;\n\n        height: 400px;\n\n        border: 3px solid orange;\n\n        margin: 100px auto;\n\n        position: relative;\n      }\n\n      .mask {\n        /* 默认隐藏 */\n\n        display: none;\n\n        /* 子绝父相 */\n\n        position: absolute;\n\n        top: 0;\n\n        left: 0;\n\n        width: 100%;\n\n        height: 100%;\n\n        background: rgba(0, 0, 0, 0.5) url('./images/arr.png') no-repeat center center;\n      }\n\n      /* 移入box之后，让mask盒子显示 */\n\n      .box:hover .mask {\n        display: block;\n      }\n    </style>\n  </head>\n\n  <body>\n    <div class=\"box\">\n      <!-- 展示的图片 -->\n\n      <img src=\"./images/sed.jpg\" alt=\"\" />\n\n      <!-- 半透明的遮罩层 -->\n\n      <div class=\"mask\"></div>\n    </div>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
