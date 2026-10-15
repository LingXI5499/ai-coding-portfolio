window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["fec2020310c06df9ef52"] = {
  "id": "fec2020310c06df9ef52",
  "title": "14-数据类型存储.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "14-数据类型存储.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>Document</title>\n  </head>\n\n  <body>\n    <script>\n      let num1 = 10;\n\n      let num2 = num1;\n\n      num2 = 20;\n\n      console.log(num1); // 结果是？\n\n      let obj1 = {\n        age: 18,\n      };\n\n      let obj2 = obj1;\n\n      // 修改属性\n\n      obj2.age = 20;\n\n      console.log(obj1.age);\n    </script>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
