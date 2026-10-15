window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["fac5405a67bb18b69a77"] = {
  "id": "fac5405a67bb18b69a77",
  "title": "19-显示模式转换.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "19-显示模式转换.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>显示模式转换</title>\n\n    <style>\n      /* 块级：独占一行；宽度默认是父级的100%；加宽高生效 */\n\n      div {\n        width: 100px;\n\n        height: 100px;\n\n        /* display: inline-block; */\n\n        display: inline;\n      }\n\n      .div1 {\n        background-color: brown;\n      }\n\n      .div2 {\n        background-color: orange;\n      }\n\n      /* 行内：一行共存多个；尺寸由内容撑开；加宽高 不 生效 */\n\n      span {\n        width: 200px;\n\n        height: 200px;\n\n        /* display: block; */\n\n        display: inline-block;\n      }\n\n      .span1 {\n        background-color: brown;\n      }\n\n      .span2 {\n        background-color: orange;\n      }\n\n      /* 行内块：一行共存多个；默认尺寸由内容撑开；加宽高生效 */\n\n      img {\n        width: 100px;\n\n        height: 100px;\n\n        display: block;\n      }\n    </style>\n  </head>\n\n  <body>\n    <!-- 块元素 -->\n\n    <div class=\"div1\">div 标签1</div>\n\n    <div class=\"div2\">div 标签2</div>\n\n    <!-- 行内元素 -->\n\n    <span class=\"span1\">span11111111</span>\n\n    <span class=\"span2\">span1</span>\n\n    <!-- 行内块元素 -->\n\n    <img src=\"./images/1.png\" alt=\"\" />\n\n    <img src=\"./images/1.png\" alt=\"\" />\n  </body>\n</html>"
        }
      ]
    }
  ]
};
