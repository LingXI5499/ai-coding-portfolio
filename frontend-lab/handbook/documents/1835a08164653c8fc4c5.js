window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["1835a08164653c8fc4c5"] = {
  "id": "1835a08164653c8fc4c5",
  "title": "15-背景图缩放.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "15-背景图缩放.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>背景图缩放</title>\n\n    <style>\n      div {\n        width: 500px;\n\n        height: 300px;\n\n        background-color: pink;\n\n        background-image: url(./images/1.png);\n\n        background-repeat: no-repeat;\n\n        /* contain：如果图的宽高跟盒子尺寸相等停止缩放，可能导致盒子有露白 */\n\n        /* background-size: contain; */\n\n        /* cover：图片完全覆盖盒子，可能导致图片显示不全 */\n\n        /* background-size: cover; */\n\n        /* 100% 图片的宽度跟盒子宽度一样，图片的高度按照图片比例等比缩放 */\n\n        background-size: 100%;\n      }\n    </style>\n  </head>\n\n  <body>\n    <div>div 标签</div>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
