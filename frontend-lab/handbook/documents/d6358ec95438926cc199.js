window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["d6358ec95438926cc199"] = {
  "id": "d6358ec95438926cc199",
  "title": "01-（案例）综合案例1-小米模块案例.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "01-（案例）综合案例1-小米模块案例.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>Document</title>\n\n    <style>\n      /* 去除掉标签默认的margin和padding */\n\n      * {\n        margin: 0;\n\n        padding: 0;\n      }\n\n      .box {\n        width: 1226px;\n\n        height: 614px;\n\n        /* background-color: pink; */\n\n        margin: 100px auto;\n      }\n\n      .left {\n        float: left;\n\n        width: 234px;\n\n        height: 614px;\n\n        background-color: #800080;\n      }\n\n      .right {\n        float: right;\n\n        width: 978px;\n\n        height: 614px;\n\n        /* background-color: yellow; */\n      }\n\n      .item {\n        float: left;\n\n        width: 234px;\n\n        height: 300px;\n\n        background-color: #87ceeb;\n\n        margin-right: 14px;\n\n        margin-bottom: 14px;\n      }\n\n      /* 找到的是 第 4 和第 8个 4倍数  4n */\n\n      .item:nth-child(4n) {\n        /* background-color: red; */\n\n        margin-right: 0;\n      }\n\n      /* 找到从第5个开始往后的所有个子元素 */\n\n      .item:nth-child(n + 5) {\n        margin-bottom: 0;\n      }\n    </style>\n  </head>\n\n  <body>\n    <!-- 布局流程：从上往下，从外往内 -->\n\n    <div class=\"box\">\n      <div class=\"left\"></div>\n\n      <div class=\"right\">\n        <div class=\"item\"></div>\n\n        <div class=\"item\"></div>\n\n        <div class=\"item\"></div>\n\n        <div class=\"item\"></div>\n\n        <div class=\"item\"></div>\n\n        <div class=\"item\"></div>\n\n        <div class=\"item\"></div>\n\n        <div class=\"item\"></div>\n      </div>\n    </div>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
