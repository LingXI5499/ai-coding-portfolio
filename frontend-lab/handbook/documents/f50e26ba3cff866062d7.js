window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["f50e26ba3cff866062d7"] = {
  "id": "f50e26ba3cff866062d7",
  "title": "仿新浪固定头部.html",
  "treatment": "排错练习（不自动执行）",
  "sections": [
    {
      "title": "仿新浪固定头部.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>Document</title>\n\n    <style>\n      * {\n        margin: 0;\n\n        padding: 0;\n\n        box-sizing: border-box;\n      }\n\n      .content {\n        overflow: hidden;\n\n        width: 1000px;\n\n        height: 3000px;\n\n        background-color: pink;\n\n        margin: 0 auto;\n      }\n\n      .backtop {\n        display: none;\n\n        width: 50px;\n\n        left: 50%;\n\n        margin: 0 0 0 505px;\n\n        position: fixed;\n\n        bottom: 60px;\n\n        z-index: 100;\n      }\n\n      .backtop a {\n        height: 50px;\n\n        width: 50px;\n\n        background: url(./images/bg2.png) 0 -600px no-repeat;\n\n        opacity: 0.35;\n\n        overflow: hidden;\n\n        display: block;\n\n        text-indent: -999em;\n\n        cursor: pointer;\n      }\n\n      .header {\n        position: fixed;\n\n        top: 0;\n\n        left: 0;\n\n        width: 100%;\n\n        height: 80px;\n\n        background-color: purple;\n\n        text-align: center;\n\n        color: #fff;\n\n        line-height: 80px;\n\n        font-size: 30px;\n\n        transition: all 0.3s;\n      }\n\n      .sk {\n        width: 300px;\n\n        height: 300px;\n\n        background-color: skyblue;\n\n        margin-top: 500px;\n      }\n    </style>\n  </head>\n\n  <body>\n    <div class=\"header\">我是顶部导航栏</div>\n\n    <div class=\"content\">\n      <div class=\"sk\">秒杀模块</div>\n    </div>\n\n    <div class=\"backtop\">\n      <img src=\"./images/close2.png\" alt=\"\" />\n\n      <a href=\"javascript:;\"></a>\n    </div>\n\n    <script></script>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
