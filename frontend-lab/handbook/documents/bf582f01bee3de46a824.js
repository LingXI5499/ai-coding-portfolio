window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["bf582f01bee3de46a824"] = {
  "id": "bf582f01bee3de46a824",
  "title": "02-浮动-产品布局.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "02-浮动-产品布局.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>浮动-产品布局</title>\n\n    <style>\n      * {\n        margin: 0;\n\n        padding: 0;\n      }\n\n      li {\n        list-style: none;\n      }\n\n      .product {\n        margin: 50px auto;\n\n        width: 1226px;\n\n        height: 628px;\n\n        background-color: pink;\n      }\n\n      .left {\n        float: left;\n\n        width: 234px;\n\n        height: 628px;\n\n        background-color: skyblue;\n      }\n\n      .right {\n        float: right;\n\n        width: 978px;\n\n        height: 628px;\n\n        background-color: brown;\n      }\n\n      .right li {\n        float: left;\n\n        margin-right: 14px;\n\n        margin-bottom: 14px;\n\n        width: 234px;\n\n        height: 300px;\n\n        background-color: orange;\n      }\n\n      /* 第四个li和第八个li 去掉右侧的margin */\n\n      .right li:nth-child(4n) {\n        margin-right: 0;\n      }\n\n      /* 细节：如果父级宽度不够，浮动的盒子会掉下来 */\n    </style>\n  </head>\n\n  <body>\n    <!-- 版心：左右，右面：8个产品 → 8个 li -->\n\n    <div class=\"product\">\n      <div class=\"left\"></div>\n\n      <div class=\"right\">\n        <ul>\n          <li></li>\n\n          <li></li>\n\n          <li></li>\n\n          <li></li>\n\n          <li></li>\n\n          <li></li>\n\n          <li></li>\n\n          <li></li>\n        </ul>\n      </div>\n    </div>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
