window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["82896bee58f9b3f66d60"] = {
  "id": "82896bee58f9b3f66d60",
  "title": "02-媒体查询-书写顺序.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "02-媒体查询-书写顺序.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    <title>Document</title>\n    <style>\n      /* 网页默认背景色是灰色 */\n      body {\n        background-color: #ccc;\n      }\n      /* 屏幕宽度 大于等于 768px，网页背景色是粉色 min */\n      @media (min-width: 768px) {\n        body {\n          background-color: pink;\n        }\n      }\n      /* 屏幕宽度 大于等于 992px，网页背景色是绿色 min */\n      @media (min-width: 992px) {\n        body {\n          background-color: green;\n        }\n      }\n\n      /* 屏幕宽度 大于等于 1200px，网页背景色是 skyblue  min */\n      @media (min-width: 1200px) {\n        body {\n          background-color: skyblue;\n        }\n      }\n    </style>\n  </head>\n  <body></body>\n</html>"
        }
      ]
    }
  ]
};
