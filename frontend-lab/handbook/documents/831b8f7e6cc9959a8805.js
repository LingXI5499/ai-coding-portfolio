window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["831b8f7e6cc9959a8805"] = {
  "id": "831b8f7e6cc9959a8805",
  "title": "13-案例-产品展示.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "13-案例-产品展示.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    <title>产品展示效果</title>\n    <style>\n      .box {\n        position: relative;\n        width: 300px;\n        height: 212px;\n      }\n\n      .box img {\n        width: 300px;\n      }\n\n      .box .title {\n        position: absolute;\n        left: 15px;\n        bottom: 20px;\n        z-index: 2;\n        width: 260px;\n        color: #fff;\n        font-size: 20px;\n        font-weight: 700;\n      }\n\n      .mask {\n        position: absolute;\n        left: 0;\n        top: 0;\n        width: 100%;\n        height: 100%;\n        background-image: linear-gradient(transparent, rgba(0, 0, 0, 0.5));\n        opacity: 0;\n\n        transition: all 0.5s;\n      }\n\n      .box:hover .mask {\n        opacity: 1;\n      }\n    </style>\n  </head>\n\n  <body>\n    <div class=\"box\">\n      <img src=\"./images/product.jpeg\" alt=\"\" />\n      <div class=\"title\">OceanStor Pacific 海量存储斩获2021 Interop金奖</div>\n      <div class=\"mask\"></div>\n    </div>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
