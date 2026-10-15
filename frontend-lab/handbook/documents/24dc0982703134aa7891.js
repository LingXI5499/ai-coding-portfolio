window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["24dc0982703134aa7891"] = {
  "id": "24dc0982703134aa7891",
  "title": "15-原型链的排错题.html",
  "treatment": "排错练习（不自动执行）",
  "sections": [
    {
      "title": "15-原型链的排错题.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    <title>Document</title>\n  </head>\n  <body>\n    <script>\n      // 以下等式返回true，是否正确，为什么\n      console.log(Array.prototype.__proto__ === Object);\n    </script>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
