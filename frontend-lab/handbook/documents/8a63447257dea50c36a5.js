window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["8a63447257dea50c36a5"] = {
  "id": "8a63447257dea50c36a5",
  "title": "13-原型对象里面的this值.html",
  "treatment": "排错练习（不自动执行）",
  "sections": [
    {
      "title": "13-原型对象里面的this值.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    <title>Document</title>\n  </head>\n  <body>\n    <script>\n      // 下面代码17行的this值 指向 Star构造函数，说法对吗，为什么？\n      function Star() {\n        this.name = '姓名';\n      }\n\n      Star.prototype.sing = function () {\n        console.log(this);\n      };\n\n      const o1 = new Star();\n    </script>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
