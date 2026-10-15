window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["f54316b0c9b2e6ff5a5c"] = {
  "id": "f54316b0c9b2e6ff5a5c",
  "title": "02-对象的使用.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "02-对象的使用.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>Document</title>\n  </head>\n\n  <body>\n    <script>\n      // 1.声明对象\n\n      // let pink = {\n\n      //   uname: 'pink老师',\n\n      //   age: 18,\n\n      //   gender: '女'\n\n      // }\n\n      // // console.log(pink)\n\n      // // console.log(typeof pink)\n\n      // // 改 把性别的女改为男\n\n      // pink.gender = '男'\n\n      // console.log(pink)\n\n      // // 增\n\n      // pink.hobby = '足球'\n\n      // console.log(pink)\n\n      // // 删 (了解)\n\n      // delete pink.age\n\n      // console.log(pink)\n\n      // // let num = 10\n\n      // num = 20\n\n      // console.log(num)\n\n      // 1. 声明\n\n      // console.log(window.name)\n\n      let obj = {\n        'goods-name': '小米10青春版',\n\n        num: '100012816024',\n\n        weight: '0.55kg',\n\n        address: '中国大陆',\n      };\n\n      obj.name = '小米10 PLUS';\n\n      obj.color = '粉色';\n\n      // console.log(obj.name)\n\n      console.log(obj.num);\n\n      console.log(obj.weight);\n\n      console.log(obj.address);\n\n      console.log(obj.color);\n\n      // console.log(obj.goods - name)\n\n      // 查的另外一种属性：\n\n      // 对象名['属性名']\n\n      console.log(obj['goods-name']);\n\n      // 查总结：\n\n      // (1) 对象名.属性名  obj.age\n\n      console.log(obj.num);\n\n      // (2) 对象名['属性名']  obj['age']\n\n      console.log(obj['num']);\n\n      // // console.log(address)\n\n      // // 2. 使用属性 查  对象名.属性名\n\n      // console.log(obj.address)\n\n      // console.log(obj.name)\n    </script>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
