window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["dd1d8b4daeabfb3f8d67"] = {
  "id": "dd1d8b4daeabfb3f8d67",
  "title": "02-（案例）综合案例2-网页新闻列表案例.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "02-（案例）综合案例2-网页新闻列表案例.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>Document</title>\n\n    <style>\n      /* 清除标签默认的margin和padding */\n\n      * {\n        margin: 0;\n\n        padding: 0;\n      }\n\n      body {\n        /* 去除行高带来的默认间隙，完成精准布局 */\n\n        line-height: 1;\n      }\n\n      .box {\n        width: 500px;\n\n        height: 400px;\n\n        /* background-color: pink; */\n\n        border: 1px solid #ccc;\n\n        padding: 41px 30px 0;\n\n        /* 自动内减 */\n\n        box-sizing: border-box;\n      }\n\n      .box h2 {\n        height: 41px;\n\n        /* background-color: pink; */\n\n        border-bottom: 1px solid #ccc;\n\n        /* 自动内减 */\n\n        box-sizing: border-box;\n\n        font-size: 30px;\n      }\n\n      .box ul {\n        list-style: none;\n      }\n\n      .box ul li {\n        height: 50px;\n\n        padding-left: 30px;\n\n        border-bottom: 1px dashed #ccc;\n\n        line-height: 50px;\n      }\n\n      .box li a {\n        text-decoration: none;\n\n        font-size: 18px;\n\n        color: #666;\n      }\n    </style>\n  </head>\n\n  <body>\n    <div class=\"box\">\n      <h2>最新文章/New Articles</h2>\n\n      <ul>\n        <li><a href=\"#\">北京招聘网页设计，平面设计，php</a></li>\n\n        <li><a href=\"#\">体验javascript的魅力</a></li>\n\n        <li><a href=\"#\">jquery世界来临</a></li>\n\n        <li><a href=\"#\">网页设计师的梦想</a></li>\n\n        <li><a href=\"#\">jquery中的链式编程是什么</a></li>\n      </ul>\n    </div>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
