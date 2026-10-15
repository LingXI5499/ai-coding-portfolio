window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["a1bbf0c9b4c94dc4d4df"] = {
  "id": "a1bbf0c9b4c94dc4d4df",
  "title": "11-键盘事件类型.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "11-键盘事件类型.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>Document</title>\n  </head>\n\n  <body>\n    <input type=\"text\" />\n\n    <script>\n      const input = document.querySelector('input');\n\n      // 1. 键盘事件\n\n      // input.addEventListener('keydown', function () {\n\n      //   console.log('键盘按下了')\n\n      // })\n\n      // input.addEventListener('keyup', function () {\n\n      //   console.log('键盘谈起了')\n\n      // })\n\n      // 2. 用户输入文本事件  input\n\n      input.addEventListener('input', function () {\n        console.log(input.value);\n      });\n    </script>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
