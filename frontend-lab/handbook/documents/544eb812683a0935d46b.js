window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["544eb812683a0935d46b"] = {
  "id": "544eb812683a0935d46b",
  "title": "08-盒子模型-padding多值写法.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "08-盒子模型-padding多值写法.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>盒子模型-padding多值写法</title>\n\n    <style>\n      div {\n        width: 200px;\n\n        height: 200px;\n\n        background-color: pink;\n\n        /* 四值：上  右  下  左 */\n\n        /* padding: 10px 20px 40px 80px; */\n\n        /* 三值：上  左右  下 */\n\n        /* padding: 10px 40px 80px; */\n\n        /* 两值：上下  左右 */\n\n        padding: 10px 80px;\n\n        /* 记忆方法：从上开始顺时针转一圈，如果当前方向没有数值，取值跟对面一样 */\n      }\n    </style>\n  </head>\n\n  <body>\n    <div>div 标签</div>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
