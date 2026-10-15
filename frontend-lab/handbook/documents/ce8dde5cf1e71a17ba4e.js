window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["ce8dde5cf1e71a17ba4e"] = {
  "id": "ce8dde5cf1e71a17ba4e",
  "title": "19-try-catch的排错题.html",
  "treatment": "排错练习（不自动执行）",
  "sections": [
    {
      "title": "19-try-catch的排错题.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    <title>Document</title>\n  </head>\n  <body>\n    <div class=\"box\"></div>\n    <script>\n      // 下面代码会打印 1 2 3 4，是否有问题\n      try {\n        document.querySelector('box').addEventListener('click', function () {});\n        console.log(1);\n      } catch (err) {\n        console.log(2);\n      } finally {\n        console.log(3);\n      }\n\n      console.log(4);\n    </script>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
