window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["49bfa5524501af594ea6"] = {
  "id": "49bfa5524501af594ea6",
  "title": "06-立体呈现.html",
  "treatment": "排错练习（不自动执行）",
  "sections": [
    {
      "title": "06-立体呈现.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    <title>立体呈现</title>\n    <style>\n      .cube {\n        width: 200px;\n        height: 200px;\n        margin: 100px auto;\n        background-color: pink;\n        transition: all 2s;\n      }\n\n      .cube div {\n        width: 200px;\n        height: 200px;\n      }\n\n      .front {\n        background-color: orange;\n      }\n\n      .back {\n        background-color: green;\n      }\n    </style>\n  </head>\n  <body>\n    <div class=\"cube\">\n      <div class=\"front\">前面</div>\n      <div class=\"back\">后面</div>\n    </div>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
