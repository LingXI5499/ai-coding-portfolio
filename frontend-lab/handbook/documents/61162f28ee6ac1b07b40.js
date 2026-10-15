window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["61162f28ee6ac1b07b40"] = {
  "id": "61162f28ee6ac1b07b40",
  "title": "02-绝对定位.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "02-绝对定位.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>绝对定位</title>\n\n    <style>\n      * {\n        margin: 0;\n\n        padding: 0;\n      }\n\n      img {\n        width: 400px;\n      }\n\n      .news {\n        position: relative;\n\n        margin: 100px auto;\n\n        width: 400px;\n\n        height: 350px;\n\n        background-color: #f8f8f8;\n      }\n\n      /* \n\n      1. 脱标，不占位\n\n      2. 参照物：先找最近的已经定位的祖先元素；如果所有祖先元素都没有定位，参照浏览器可视区改位置\n\n      3. 显示模式特点改变：宽高生效（具备了行内块的特点）\n\n    */\n\n      .news span {\n        position: absolute;\n\n        top: 0;\n\n        right: 0;\n\n        /* display: block; */\n\n        width: 92px;\n\n        height: 32px;\n\n        background-color: rgba(0, 0, 0, 0.6);\n\n        text-align: center;\n\n        line-height: 32px;\n\n        color: #fff;\n      }\n    </style>\n  </head>\n\n  <body>\n    <div class=\"news\">\n      <img src=\"./images/news.jpg\" alt=\"\" />\n\n      <span>展会活动</span>\n\n      <h4>2222世界移动大会</h4>\n    </div>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
