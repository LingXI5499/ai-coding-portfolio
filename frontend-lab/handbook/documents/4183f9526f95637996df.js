window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["4183f9526f95637996df"] = {
  "id": "4183f9526f95637996df",
  "title": "08-利用JSON实现深拷贝.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "08-利用JSON实现深拷贝.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>Document</title>\n  </head>\n\n  <body>\n    <script>\n      const obj = {\n        uname: 'pink',\n\n        age: 18,\n\n        hobby: ['乒乓球', '足球'],\n\n        family: {\n          baby: '小pink',\n        },\n      };\n\n      // 把对象转换为 JSON 字符串\n\n      // console.log(JSON.stringify(obj))\n\n      const o = JSON.parse(JSON.stringify(obj));\n\n      console.log(o);\n\n      o.family.baby = '123';\n\n      console.log(obj);\n    </script>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
