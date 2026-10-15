window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["27897fdbc14fe5e82e39"] = {
  "id": "27897fdbc14fe5e82e39",
  "title": "11-构造函数this的拍错题.html",
  "treatment": "排错练习（不自动执行）",
  "sections": [
    {
      "title": "11-构造函数this的拍错题.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    <title>Document</title>\n  </head>\n  <body>\n    <script>\n      // 以下代码13行的this值是 window，说法对吗，为什么\n      function Star(name) {\n        console.log(this);\n        this.name = name;\n        this.sing = function () {\n          console.log('唱歌');\n        };\n      }\n\n      const ldh = new Star('刘德华');\n    </script>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
