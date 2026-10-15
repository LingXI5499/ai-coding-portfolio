window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["545ff911e4546df63aa1"] = {
  "id": "545ff911e4546df63aa1",
  "title": "14-精灵动画.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "14-精灵动画.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>精灵动画</title>\n\n    <style>\n      div {\n        width: 140px;\n\n        height: 140px;\n\n        border: 1px solid #000;\n\n        background-image: url(./images/bg.png);\n\n        animation: run 1s steps(12) infinite;\n      }\n\n      @keyframes run {\n        from {\n          background-position: 0 0;\n        }\n\n        to {\n          background-position: -1680px 0;\n        }\n      }\n    </style>\n  </head>\n\n  <body>\n    <div></div>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
