window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["26156844902985ba77b2"] = {
  "id": "26156844902985ba77b2",
  "title": "15-多组动画.html",
  "treatment": "排错练习（不自动执行）",
  "sections": [
    {
      "title": "15-多组动画.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <title>多组动画</title>\n\n    <style>\n      .box {\n        /* 1680/12 */\n\n        width: 140px;\n\n        height: 140px;\n\n        /* border: 1px solid #000; */\n\n        background-image: url(./images/bg.png);\n\n        animation: run 1s steps(12) infinite;\n      }\n\n      @keyframes run {\n        100% {\n          background-position: -1680px 0;\n        }\n      }\n    </style>\n  </head>\n\n  <body>\n    <div class=\"box\"></div>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
