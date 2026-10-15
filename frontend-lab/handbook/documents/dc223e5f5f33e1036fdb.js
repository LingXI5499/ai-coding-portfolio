window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["dc223e5f5f33e1036fdb"] = {
  "id": "dc223e5f5f33e1036fdb",
  "title": "08-CSS特性-层叠性.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "08-CSS特性-层叠性.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>CSS特性-层叠性</title>\n\n    <style>\n      /* 覆盖；叠加 */\n\n      div {\n        color: green;\n\n        font-size: 30px;\n      }\n\n      div {\n        color: red;\n\n        font-weight: 700;\n      }\n    </style>\n  </head>\n\n  <body>\n    <div>div 标签</div>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
