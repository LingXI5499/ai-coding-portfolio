window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["b49d05ae12f16e6c7f0b"] = {
  "id": "b49d05ae12f16e6c7f0b",
  "title": "05-Object静态方法.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "05-Object静态方法.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>Document</title>\n  </head>\n\n  <body>\n    <script>\n      const o = { uname: 'pink', age: 18 };\n\n      // 1.获得所有的属性名\n\n      console.log(Object.keys(o)); //返回数组['uname', 'age']\n\n      // 2. 获得所有的属性值\n\n      console.log(Object.values(o)); //  ['pink', 18]\n\n      // 3. 对象的拷贝\n\n      // const oo = {}\n\n      // Object.assign(oo, o)\n\n      // console.log(oo)\n\n      Object.assign(o, { gender: '女' });\n\n      console.log(o);\n    </script>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
