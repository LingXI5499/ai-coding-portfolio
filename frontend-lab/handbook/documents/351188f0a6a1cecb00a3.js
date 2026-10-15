window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["351188f0a6a1cecb00a3"] = {
  "id": "351188f0a6a1cecb00a3",
  "title": "09-flex布局-组成.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "09-flex布局-组成.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>flex布局-组成</title>\n\n    <style>\n      /* 弹性容器 */\n\n      .box {\n        display: flex;\n\n        height: 300px;\n\n        border: 1px solid #000;\n      }\n\n      /* 弹性盒子：沿着主轴方向排列 */\n\n      .box div {\n        width: 200px;\n\n        /* height: 100px; */\n\n        background-color: pink;\n      }\n    </style>\n  </head>\n\n  <body>\n    <div class=\"box\">\n      <div>1</div>\n\n      <div>2</div>\n\n      <div>3</div>\n\n      <div>1</div>\n\n      <div>2</div>\n\n      <div>3</div>\n\n      <div>1</div>\n\n      <div>2</div>\n\n      <div>3</div>\n    </div>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
