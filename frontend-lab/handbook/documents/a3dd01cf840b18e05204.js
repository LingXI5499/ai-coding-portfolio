window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["a3dd01cf840b18e05204"] = {
  "id": "a3dd01cf840b18e05204",
  "title": "13-flex布局-修改主轴方向.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "13-flex布局-修改主轴方向.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>flex布局-修改主轴方向</title>\n\n    <style>\n      .box {\n        display: flex;\n\n        /* 修改主轴方向 垂直方向；侧轴自动变换到水平方向 */\n\n        flex-direction: column;\n\n        /* 主轴在垂直，视觉效果：垂直居中 */\n\n        justify-content: center;\n\n        /* 侧轴在水平，视觉效果：水平居中 */\n\n        align-items: center;\n\n        width: 150px;\n\n        height: 120px;\n\n        background-color: pink;\n      }\n\n      img {\n        width: 32px;\n\n        height: 32px;\n      }\n    </style>\n  </head>\n\n  <body>\n    <div class=\"box\">\n      <img src=\"./images/1.png\" alt=\"\" />\n\n      <span>媒体</span>\n    </div>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
