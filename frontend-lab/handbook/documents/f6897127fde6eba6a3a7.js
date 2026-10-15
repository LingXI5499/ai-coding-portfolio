window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["f6897127fde6eba6a3a7"] = {
  "id": "f6897127fde6eba6a3a7",
  "title": "15-flex布局-弹性换行.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "15-flex布局-弹性换行.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>flex布局-弹性换行</title>\n\n    <style>\n      .box {\n        display: flex;\n\n        flex-wrap: wrap;\n\n        /* 不换行 */\n\n        /* flex-wrap: nowrap; */\n\n        justify-content: space-between;\n\n        height: 300px;\n\n        border: 1px solid #000;\n      }\n\n      .box div {\n        width: 200px;\n\n        height: 100px;\n\n        background-color: pink;\n      }\n    </style>\n  </head>\n\n  <body>\n    <div class=\"box\">\n      <div>1</div>\n\n      <div>2</div>\n\n      <div>3</div>\n\n      <div>4</div>\n\n      <div>5</div>\n\n      <div>6</div>\n\n      <div>7</div>\n\n      <div>8</div>\n\n      <div>9</div>\n\n      <div>10</div>\n\n      <div>11</div>\n\n      <div>12</div>\n    </div>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
