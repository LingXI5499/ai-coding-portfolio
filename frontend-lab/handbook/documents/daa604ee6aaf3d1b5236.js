window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["daa604ee6aaf3d1b5236"] = {
  "id": "daa604ee6aaf3d1b5236",
  "title": "09-缩放效果.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "09-缩放效果.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    <title>缩放效果</title>\n    <style>\n      .box {\n        width: 300px;\n        height: 210px;\n        margin: 100px auto;\n        background-color: pink;\n      }\n\n      .box img {\n        width: 100%;\n        transition: all 0.5s;\n      }\n\n      .box:hover img {\n        /* 修改宽高尺寸，从左上角开始缩放 */\n        /* width: 500px;\n        height: 400px; */\n\n        /* 大于1，表示放大 */\n        transform: scale(2);\n\n        /* 小于1，表示缩小 */\n        transform: scale(0.5);\n\n        /* 等于1，不变 */\n        transform: scale(1);\n      }\n    </style>\n  </head>\n\n  <body>\n    <div class=\"box\">\n      <img src=\"./images/product.jpeg\" alt=\"\" />\n    </div>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
