window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["2816a2b5868bbcaa6f24"] = {
  "id": "2816a2b5868bbcaa6f24",
  "title": "01-媒体查询.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "01-媒体查询.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    <title>媒体查询</title>\n    <style>\n      /* 屏幕宽度小于等于768，网页背景色是粉色 → max-width */\n      @media (max-width: 768px) {\n        body {\n          background-color: pink;\n        }\n      }\n\n      /* 屏幕宽度大于等于1200，网页背景色是绿色 → min-width */\n      @media (min-width: 1200px) {\n        body {\n          background-color: green;\n        }\n      }\n    </style>\n  </head>\n  <body></body>\n</html>"
        }
      ]
    }
  ]
};
