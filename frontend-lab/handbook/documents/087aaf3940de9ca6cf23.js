window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["087aaf3940de9ca6cf23"] = {
  "id": "087aaf3940de9ca6cf23",
  "title": "01-复习.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "01-复习.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>Document</title>\n\n    <style>\n      .box {\n        width: 200px;\n\n        height: 200px;\n      }\n\n      .box::before {\n        content: '';\n\n        display: block;\n\n        width: 100%;\n\n        height: 100%;\n\n        background-color: pink;\n      }\n\n      .mask::before {\n        width: 120%;\n\n        height: 120%;\n      }\n    </style>\n  </head>\n\n  <body>\n    <div class=\"box\"></div>\n\n    <script>\n      const box = document.querySelector('.box');\n\n      box.addEventListener('click', function () {\n        box.classList.toggle('mask');\n      });\n    </script>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
