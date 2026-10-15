window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["4568212eadee3737c0d2"] = {
  "id": "4568212eadee3737c0d2",
  "title": "04-constructor属性.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "04-constructor属性.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>Document</title>\n  </head>\n\n  <body>\n    <script>\n      // constructor  单词 构造函数\n\n      // Star.prototype.sing = function () {\n\n      //   console.log('唱歌')\n\n      // }\n\n      // Star.prototype.dance = function () {\n\n      //   console.log('跳舞')\n\n      // }\n\n      function Star() {}\n\n      // console.log(Star.prototype)\n\n      Star.prototype = {\n        // 从新指回创造这个原型对象的 构造函数\n\n        constructor: Star,\n\n        sing: function () {\n          console.log('唱歌');\n        },\n\n        dance: function () {\n          console.log('跳舞');\n        },\n      };\n\n      console.log(Star.prototype);\n\n      // console.log(Star.prototype.constructor)\n\n      // const ldh = new Star()\n\n      // console.log(Star.prototype.constructor === Star)\n    </script>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
