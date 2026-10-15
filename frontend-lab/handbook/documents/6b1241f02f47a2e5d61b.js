window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["6b1241f02f47a2e5d61b"] = {
  "id": "6b1241f02f47a2e5d61b",
  "title": "05-空间旋转-Y轴.html",
  "treatment": "排错练习（不自动执行）",
  "sections": [
    {
      "title": "05-空间旋转-Y轴.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>空间旋转-Y轴</title>\n\n    <style>\n      .box {\n        width: 300px;\n\n        margin: 100px auto;\n      }\n\n      img {\n        width: 300px;\n\n        transition: all 2s;\n      }\n\n      .box {\n        /* 透视效果：近大远小，近实远虚 */\n\n        perspective: 1000px;\n      }\n\n      .box img:hover {\n      }\n    </style>\n  </head>\n\n  <body>\n    <div class=\"box\">\n      <img src=\"./images/hero.jpeg\" alt=\"\" />\n    </div>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
