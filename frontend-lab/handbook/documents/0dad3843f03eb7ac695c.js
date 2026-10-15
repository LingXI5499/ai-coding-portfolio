window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["0dad3843f03eb7ac695c"] = {
  "id": "0dad3843f03eb7ac695c",
  "title": "01-空间-平移.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "01-空间-平移.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <title>空间平移</title>\n\n    <style>\n      .box {\n        width: 200px;\n\n        height: 200px;\n\n        margin: 100px auto;\n\n        background-color: pink;\n\n        transition: all 0.5s;\n      }\n\n      .box:hover {\n        /* 电脑是平面，默认无法观察 Z 轴平移效果 */\n\n        /* transform: translate3d(100px, 200px, 300px); */\n\n        /* 3d 小括号里面必须逗号隔开三个数 */\n\n        /* transform: translate3d(100px, 200px); */\n\n        transform: translateX(100px);\n\n        transform: translateY(-100%);\n\n        transform: translateZ(300px);\n      }\n    </style>\n  </head>\n\n  <body>\n    <div class=\"box\"></div>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
