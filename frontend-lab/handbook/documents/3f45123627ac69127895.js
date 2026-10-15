window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["3f45123627ac69127895"] = {
  "id": "3f45123627ac69127895",
  "title": "02-（案例）综合案例2-网页导航案例.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "02-（案例）综合案例2-网页导航案例.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>Document</title>\n\n    <style>\n      /* 1、去除标签默认的margin和padding */\n\n      * {\n        margin: 0;\n\n        padding: 0;\n      }\n\n      /* 2、找到ul，去除小圆点 */\n\n      ul {\n        list-style: none;\n      }\n\n      /* 3、找到li标签，设置浮动 */\n\n      ul li {\n        float: left;\n      }\n\n      /* 4、找到a标签，设置宽高 */\n\n      ul li a {\n        /* a标签默认是行内元素，不能直接设置宽高 */\n\n        /* 1、转换成行内块元素 */\n\n        /* display: inline-block; */\n\n        /* 2、转换成块级元素 */\n\n        /* display: block; */\n\n        /* 3、设置浮动 */\n\n        float: left;\n\n        width: 80px;\n\n        height: 50px;\n\n        background-color: #ffc0cb;\n\n        text-decoration: none;\n\n        text-align: center;\n\n        line-height: 50px;\n\n        color: #fff;\n\n        font-size: 16px;\n      }\n\n      ul li a:hover {\n        background-color: #008000;\n      }\n    </style>\n  </head>\n\n  <body>\n    <ul>\n      <li><a href=\"#\">新闻1</a></li>\n\n      <li><a href=\"#\">新闻2</a></li>\n\n      <li><a href=\"#\">新闻3</a></li>\n\n      <li><a href=\"#\">新闻4</a></li>\n\n      <li><a href=\"#\">新闻5</a></li>\n\n      <li><a href=\"#\">新闻6</a></li>\n\n      <li><a href=\"#\">新闻7</a></li>\n\n      <li><a href=\"#\">新闻8</a></li>\n    </ul>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
