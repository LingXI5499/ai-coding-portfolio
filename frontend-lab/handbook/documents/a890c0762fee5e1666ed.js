window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["a890c0762fee5e1666ed"] = {
  "id": "a890c0762fee5e1666ed",
  "title": "02-平移效果.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "02-平移效果.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    <title>平移效果</title>\n    <style>\n      .father {\n        width: 500px;\n        height: 300px;\n        margin: 100px auto;\n        border: 1px solid #000;\n      }\n\n      .son {\n        width: 200px;\n        height: 100px;\n        background-color: pink;\n        transition: all 0.5s;\n      }\n\n      /* 鼠标移入到父盒子，son改变位置 */\n      .father:hover .son {\n        transform: translate(200px, 100px);\n\n        /* 百分比：参照盒子自身尺寸计算结果 */\n        transform: translate(50%, 100%);\n        transform: translate(-50%, 100%);\n\n        /* 只写一个数表示水平方向 */\n        transform: translate(100px);\n\n        transform: translateY(100px);\n        transform: translateX(100px);\n      }\n    </style>\n  </head>\n\n  <body>\n    <div class=\"father\">\n      <div class=\"son\"></div>\n    </div>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
