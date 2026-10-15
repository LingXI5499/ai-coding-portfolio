window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["61e863a2d9fe9f5d5b8e"] = {
  "id": "61e863a2d9fe9f5d5b8e",
  "title": "04-清除浮动-额外标签法.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "04-清除浮动-额外标签法.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>清除浮动-额外标签法</title>\n\n    <style>\n      .father {\n        margin: 10px auto;\n\n        width: 1200px;\n\n        /* height: 300px; */\n\n        background-color: pink;\n      }\n\n      .left {\n        float: left;\n\n        width: 200px;\n\n        height: 300px;\n\n        background-color: skyblue;\n      }\n\n      .right {\n        float: right;\n\n        width: 950px;\n\n        height: 300px;\n\n        background-color: orange;\n      }\n\n      .bottom {\n        height: 100px;\n\n        background-color: brown;\n      }\n\n      .clearfix {\n        clear: both;\n      }\n    </style>\n  </head>\n\n  <body>\n    <div class=\"father\">\n      <div class=\"left\"></div>\n\n      <div class=\"right\"></div>\n\n      <div class=\"clearfix\"></div>\n    </div>\n\n    <div class=\"bottom\"></div>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
