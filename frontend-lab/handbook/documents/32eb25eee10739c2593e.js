window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["32eb25eee10739c2593e"] = {
  "id": "32eb25eee10739c2593e",
  "title": "06-打印直角三角形.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "06-打印直角三角形.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>Document</title>\n  </head>\n\n  <body>\n    <script>\n      // 1. 外层循环控制行数\n\n      for (let i = 1; i <= 5; i++) {\n        // 2. 里层循环控制列数（几个星星）\n\n        for (let j = 1; j <= i; j++) {\n          document.write('◆');\n        }\n\n        // 换行\n\n        document.write('<br>');\n      }\n    </script>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
