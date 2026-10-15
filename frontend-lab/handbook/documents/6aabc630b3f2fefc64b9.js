window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["6aabc630b3f2fefc64b9"] = {
  "id": "6aabc630b3f2fefc64b9",
  "title": "11-倾斜效果.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "11-倾斜效果.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>倾斜效果</title>\n\n    <style>\n      div {\n        margin: 100px auto;\n\n        width: 100px;\n\n        height: 200px;\n\n        background-color: pink;\n\n        transition: all 0.5s;\n      }\n\n      div:hover {\n        transform: skew(30deg);\n\n        transform: skew(-30deg);\n      }\n    </style>\n  </head>\n\n  <body>\n    <div></div>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
