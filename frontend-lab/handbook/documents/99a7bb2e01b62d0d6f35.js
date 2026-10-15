window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["99a7bb2e01b62d0d6f35"] = {
  "id": "99a7bb2e01b62d0d6f35",
  "title": "09-动画-体验.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "09-动画-体验.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>体验动画</title>\n\n    <style>\n      div {\n        width: 100px;\n\n        height: 100px;\n\n        background-color: pink;\n\n        animation: change 1s infinite alternate;\n      }\n\n      @keyframes change {\n        0% {\n          transform: translate(0);\n        }\n\n        100% {\n          transform: translate(600px);\n        }\n      }\n    </style>\n  </head>\n\n  <body>\n    <div></div>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
