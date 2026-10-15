window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["99ff5771774fd833621d"] = {
  "id": "99ff5771774fd833621d",
  "title": "02-视距.html",
  "treatment": "排错练习（不自动执行）",
  "sections": [
    {
      "title": "02-视距.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <title>透视效果</title>\n\n    <style>\n      .son {\n        width: 200px;\n\n        height: 200px;\n\n        margin: 100px auto;\n\n        background-color: pink;\n\n        transition: all 0.5s;\n      }\n\n      .son:hover {\n        transform: translateZ(-300px);\n      }\n    </style>\n  </head>\n\n  <body>\n    <div class=\"father\">\n      <div class=\"son\"></div>\n    </div>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
