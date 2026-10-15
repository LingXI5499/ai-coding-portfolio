window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["4aaec040230f1f10003b"] = {
  "id": "4aaec040230f1f10003b",
  "title": "14-flex布局-弹性伸缩比.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "14-flex布局-弹性伸缩比.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>flex布局-弹性伸缩比</title>\n\n    <style>\n      /* 默认情况下，主轴方向尺寸是靠内容撑开；侧轴默认拉伸 */\n\n      .box {\n        display: flex;\n\n        flex-direction: column;\n\n        height: 300px;\n\n        border: 1px solid #000;\n      }\n\n      .box div {\n        /* height: 100px; */\n\n        background-color: pink;\n      }\n\n      .box div:nth-child(1) {\n        width: 200px;\n      }\n\n      .box div:nth-child(2) {\n        flex: 1;\n      }\n\n      .box div:nth-child(3) {\n        flex: 2;\n      }\n    </style>\n  </head>\n\n  <body>\n    <div class=\"box\">\n      <div>1</div>\n\n      <div>2</div>\n\n      <div>3</div>\n    </div>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
