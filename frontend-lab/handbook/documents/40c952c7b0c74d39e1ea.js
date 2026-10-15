window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["40c952c7b0c74d39e1ea"] = {
  "id": "40c952c7b0c74d39e1ea",
  "title": "7-实例成员-静态成员.html",
  "treatment": "排错练习（不自动执行）",
  "sections": [
    {
      "title": "7-实例成员-静态成员.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    <title>Document</title>\n  </head>\n  <body>\n    <script>\n      // size与getSize 是实例成员说法对吗\n      // name与getName 是静态成员说法对吗\n\n      function fn() {}\n      fn.size = '24cm';\n      fn.getSize = function () {};\n\n      const obj = {\n        name: '123',\n        getName: function () {},\n      };\n\n      obj.name;\n      obj.getName();\n    </script>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
