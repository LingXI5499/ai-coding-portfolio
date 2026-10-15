window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["86d9e445b1664f2d68b4"] = {
  "id": "86d9e445b1664f2d68b4",
  "title": "12-flex布局-侧轴对齐方式.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "12-flex布局-侧轴对齐方式.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>flex布局-侧轴对齐方式</title>\n\n    <style>\n      .box {\n        display: flex;\n\n        /* 弹性盒子在侧轴方向没有尺寸才能拉伸 */\n\n        /* align-items: stretch; */\n\n        /* align-items: center; */\n\n        /* align-items: flex-start; */\n\n        align-items: flex-end;\n\n        height: 300px;\n\n        border: 1px solid #000;\n      }\n\n      /* 第二个div，侧轴居中对齐 */\n\n      .box div:nth-child(2) {\n        align-self: center;\n      }\n\n      .box div {\n        width: 200px;\n\n        height: 100px;\n\n        background-color: pink;\n      }\n    </style>\n  </head>\n\n  <body>\n    <div class=\"box\">\n      <div>1</div>\n\n      <div>2</div>\n\n      <div>3</div>\n    </div>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
