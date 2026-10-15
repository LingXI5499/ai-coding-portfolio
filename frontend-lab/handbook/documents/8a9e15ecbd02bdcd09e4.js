window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["8a9e15ecbd02bdcd09e4"] = {
  "id": "8a9e15ecbd02bdcd09e4",
  "title": "14-对象的隐式属性排错题.html",
  "treatment": "排错练习（不自动执行）",
  "sections": [
    {
      "title": "14-对象的隐式属性排错题.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    <title>Document</title>\n  </head>\n  <body>\n    <script>\n      // 以下代码的16行返回true，是否正确，为什么\n      function Star() {}\n      Star.prototype.sing = function () {};\n\n      const obj = new Star();\n      console.log(obj.__proto__ === Star);\n    </script>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
