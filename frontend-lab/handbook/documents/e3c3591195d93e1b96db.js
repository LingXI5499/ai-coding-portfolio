window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["e3c3591195d93e1b96db"] = {
  "id": "e3c3591195d93e1b96db",
  "title": "08-history对象.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "08-history对象.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>Document</title>\n  </head>\n\n  <body>\n    <button>后退</button>\n\n    <button>前进</button>\n\n    <script>\n      const back = document.querySelector('button:first-child');\n\n      const forward = back.nextElementSibling;\n\n      back.addEventListener('click', function () {\n        // 后退一步\n\n        // history.back()\n\n        history.go(-1);\n      });\n\n      forward.addEventListener('click', function () {\n        // 前进一步\n\n        // history.forward()\n\n        history.go(1);\n      });\n    </script>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
