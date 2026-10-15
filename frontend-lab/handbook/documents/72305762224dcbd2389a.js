window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["72305762224dcbd2389a"] = {
  "id": "72305762224dcbd2389a",
  "title": "新闻列表.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "新闻列表.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>新闻列表</title>\n\n    <style>\n      * {\n        margin: 0;\n\n        padding: 0;\n\n        box-sizing: border-box;\n      }\n\n      li {\n        list-style: none;\n      }\n\n      a {\n        text-decoration: none;\n      }\n\n      .news {\n        margin: 100px auto;\n\n        width: 360px;\n\n        height: 200px;\n\n        /* background-color: pink; */\n      }\n\n      .news .hd {\n        height: 34px;\n\n        background-color: #eee;\n\n        border: 1px solid #dbdee1;\n\n        border-left: 0;\n      }\n\n      .news .hd a {\n        /* -1 盒子向上移动 */\n\n        margin-top: -1px;\n\n        display: block;\n\n        border-top: 3px solid #ff8400;\n\n        border-right: 1px solid #dbdee1;\n\n        width: 48px;\n\n        height: 34px;\n\n        background-color: #fff;\n\n        text-align: center;\n\n        line-height: 32px;\n\n        font-size: 14px;\n\n        color: #333;\n      }\n\n      .news .bd {\n        padding: 5px;\n      }\n\n      .news .bd li {\n        padding-left: 15px;\n\n        background-image: url(./images/square.png);\n\n        background-repeat: no-repeat;\n\n        background-position: 0 center;\n      }\n\n      .news .bd li a {\n        padding-left: 20px;\n\n        background: url(./images/img.gif) no-repeat 0 center;\n\n        font-size: 12px;\n\n        color: #666;\n\n        line-height: 24px;\n      }\n\n      .news .bd li a:hover {\n        color: #ff8400;\n      }\n    </style>\n  </head>\n\n  <body>\n    <!-- 新闻区域 包含 标题 + 内容 -->\n\n    <div class=\"news\">\n      <div class=\"hd\"><a href=\"#\">新闻</a></div>\n\n      <div class=\"bd\">\n        <ul>\n          <li><a href=\"#\">点赞“新农人” 温暖的伸手</a></li>\n\n          <li><a href=\"#\">在希望的田野上...</a></li>\n\n          <li><a href=\"#\">“中国天眼”又有新发现 已在《自然》杂志发表</a></li>\n\n          <li><a href=\"#\">急！这个领域，缺人！月薪4万元还不好招！啥情况？</a></li>\n\n          <li><a href=\"#\">G9“带货”背后：亏损面持续扩大，竞争环境激烈</a></li>\n\n          <li><a href=\"#\">多地力推二手房“带押过户”，有什么好处？</a></li>\n        </ul>\n      </div>\n    </div>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
