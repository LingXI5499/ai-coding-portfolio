window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["385cba21f52c9914a71f"] = {
  "id": "385cba21f52c9914a71f",
  "title": "16-flex布局-行对齐方式.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "16-flex布局-行对齐方式.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>flex布局-行对齐方式</title>\n\n    <style>\n      .box {\n        display: flex;\n\n        flex-wrap: wrap;\n\n        justify-content: space-between;\n\n        /* 调整 行对齐方式：对单行弹性盒子不生效 */\n\n        /* align-content: flex-start; */\n\n        /* align-content: flex-end; */\n\n        /* align-content: center; */\n\n        /* align-content: space-between; */\n\n        /* align-content: space-around; */\n\n        /* 没有代码提示 */\n\n        align-content: space-evenly;\n\n        height: 400px;\n\n        border: 1px solid #000;\n      }\n\n      .box div {\n        width: 200px;\n\n        height: 100px;\n\n        background-color: pink;\n      }\n    </style>\n  </head>\n\n  <body>\n    <div class=\"box\">\n      <div>1</div>\n\n      <div>2</div>\n\n      <div>3</div>\n\n      <div>4</div>\n\n      <div>5</div>\n\n      <div>6</div>\n\n      <div>7</div>\n\n      <div>8</div>\n    </div>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
