window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["61c7bf7ea479a41744cc"] = {
  "id": "61c7bf7ea479a41744cc",
  "title": "07-案例-3D导航.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "07-案例-3D导航.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>3D导航</title>\n\n    <style>\n      ul {\n        margin: 0;\n\n        padding: 0;\n\n        list-style: none;\n      }\n\n      .nav {\n        width: 300px;\n\n        height: 40px;\n\n        margin: 50px auto;\n      }\n\n      .nav ul {\n        display: flex;\n      }\n\n      .nav li {\n        position: relative;\n\n        width: 100px;\n\n        height: 40px;\n\n        line-height: 40px;\n\n        transition: all 0.5s;\n\n        transform-style: preserve-3d;\n\n        /* 为了看到橙色和绿色的移动过程，给立方体添加旋转 */\n\n        /* transform: rotateX(-20deg) rotateY(30deg); */\n      }\n\n      .nav li a {\n        position: absolute;\n\n        left: 0;\n\n        top: 0;\n\n        display: block;\n\n        width: 100%;\n\n        height: 100%;\n\n        text-align: center;\n\n        text-decoration: none;\n\n        color: #fff;\n      }\n\n      /* 立方体每个面都有独立的坐标轴，互不影响 */\n\n      .nav li a:first-child {\n        background-color: green;\n\n        transform: translateZ(20px);\n      }\n\n      .nav li a:last-child {\n        background-color: orange;\n\n        transform: rotateX(90deg) translateZ(20px);\n      }\n\n      .nav li:hover {\n        transform: rotateX(-90deg);\n      }\n    </style>\n  </head>\n\n  <body>\n    <div class=\"nav\">\n      <ul>\n        <li>\n          <a href=\"#\">首页</a>\n\n          <a href=\"#\">Index</a>\n        </li>\n\n        <li>\n          <a href=\"#\">登录</a>\n\n          <a href=\"#\">Login</a>\n        </li>\n\n        <li>\n          <a href=\"#\">注册</a>\n\n          <a href=\"#\">Register</a>\n        </li>\n      </ul>\n    </div>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
