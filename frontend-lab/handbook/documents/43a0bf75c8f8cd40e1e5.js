window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["43a0bf75c8f8cd40e1e5"] = {
  "id": "43a0bf75c8f8cd40e1e5",
  "title": "12-原型对象的排错题.html",
  "treatment": "排错练习（不自动执行）",
  "sections": [
    {
      "title": "12-原型对象的排错题.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    <title>Document</title>\n  </head>\n\n  <body>\n    <script>\n      // 下面的ldh不能访问sing方法，说法对吗？\n      function Star(name) {\n        this.name = name;\n        this.song = function () {\n          console.log('唱歌');\n        };\n      }\n\n      Star.prototype.sing = function () {\n        console.log('唱歌');\n      };\n\n      const ldh = new Star('刘德华');\n    </script>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
