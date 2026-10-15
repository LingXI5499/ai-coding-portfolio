window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["926c8f4d74d61ae0f3de"] = {
  "id": "926c8f4d74d61ae0f3de",
  "title": "21-隐式转换.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "21-隐式转换.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>Document</title>\n  </head>\n\n  <body>\n    <script>\n      console.log(1 + 1);\n\n      console.log('pink' + 1);\n\n      console.log(2 + 2);\n\n      console.log(2 + '2'); // 22\n\n      console.log(2 - 2);\n\n      console.log(2 - '2'); // 0\n\n      console.log(+12);\n\n      console.log(+'123'); // 转换为数字型\n    </script>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
