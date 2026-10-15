window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["6e8f5dc8ba532e20e874"] = {
  "id": "6e8f5dc8ba532e20e874",
  "title": "09-焦点事件.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "09-焦点事件.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>Document</title>\n  </head>\n\n  <body>\n    <input type=\"text\" />\n\n    <script>\n      const input = document.querySelector('input');\n\n      input.addEventListener('focus', function () {\n        console.log('有焦点触发');\n      });\n\n      input.addEventListener('blur', function () {\n        console.log('失去焦点触发');\n      });\n    </script>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
