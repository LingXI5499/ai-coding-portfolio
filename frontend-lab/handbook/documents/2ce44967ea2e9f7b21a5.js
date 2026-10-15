window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["2ce44967ea2e9f7b21a5"] = {
  "id": "2ce44967ea2e9f7b21a5",
  "title": "tab栏切换.html",
  "treatment": "排错练习（不自动执行）",
  "sections": [
    {
      "title": "tab栏切换.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>tab栏切换</title>\n\n    <style>\n      * {\n        margin: 0;\n\n        padding: 0;\n      }\n\n      .tab {\n        width: 590px;\n\n        height: 340px;\n\n        margin: 20px;\n\n        border: 1px solid #e4e4e4;\n      }\n\n      .tab-nav {\n        width: 100%;\n\n        height: 60px;\n\n        line-height: 60px;\n\n        display: flex;\n\n        justify-content: space-between;\n      }\n\n      .tab-nav h3 {\n        font-size: 24px;\n\n        font-weight: normal;\n\n        margin-left: 20px;\n      }\n\n      .tab-nav ul {\n        list-style: none;\n\n        display: flex;\n\n        justify-content: flex-end;\n      }\n\n      .tab-nav ul li {\n        margin: 0 20px;\n\n        font-size: 14px;\n      }\n\n      .tab-nav ul li a {\n        text-decoration: none;\n\n        border-bottom: 2px solid transparent;\n\n        color: #333;\n      }\n\n      .tab-nav ul li a.active {\n        border-color: #e1251b;\n\n        color: #e1251b;\n      }\n\n      .tab-content {\n        padding: 0 16px;\n      }\n\n      .tab-content .item {\n        display: none;\n      }\n\n      .tab-content .item.active {\n        display: block;\n      }\n    </style>\n  </head>\n\n  <body>\n    <div class=\"tab\">\n      <div class=\"tab-nav\">\n        <h3>每日特价</h3>\n\n        <ul>\n          <li><a class=\"active\" href=\"javascript:;\">精选</a></li>\n\n          <li><a href=\"javascript:;\">美食</a></li>\n\n          <li><a href=\"javascript:;\">百货</a></li>\n\n          <li><a href=\"javascript:;\">个护</a></li>\n\n          <li><a href=\"javascript:;\">预告</a></li>\n        </ul>\n      </div>\n\n      <div class=\"tab-content\">\n        <div class=\"item active\"><img src=\"./images/tab00.png\" alt=\"\" /></div>\n\n        <div class=\"item\"><img src=\"./images/tab01.png\" alt=\"\" /></div>\n\n        <div class=\"item\"><img src=\"./images/tab02.png\" alt=\"\" /></div>\n\n        <div class=\"item\"><img src=\"./images/tab03.png\" alt=\"\" /></div>\n\n        <div class=\"item\"><img src=\"./images/tab04.png\" alt=\"\" /></div>\n      </div>\n    </div>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
