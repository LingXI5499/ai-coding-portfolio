window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["059ebd996a38e20ba88b"] = {
  "id": "059ebd996a38e20ba88b",
  "title": "08-Array常用方法.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "08-Array常用方法.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>Document</title>\n  </head>\n\n  <body>\n    <script>\n      // const arr = ['red', 'blue', 'green']\n\n      // const re = arr.find(function (item) {\n\n      //   return item === 'blue'\n\n      // })\n\n      // console.log(re)\n\n      const arr = [\n        {\n          name: '小米',\n\n          price: 1999,\n        },\n\n        {\n          name: '华为',\n\n          price: 3999,\n        },\n      ];\n\n      // 找小米 这个对象，并且返回这个对象\n\n      // const mi = arr.find(function (item) {\n\n      //   // console.log(item)  //\n\n      //   // console.log(item.name)  //\n\n      //   console.log(111)\n\n      //   return item.name === '华为'\n\n      // })\n\n      // 1. find 查找\n\n      // const mi = arr.find(item => item.name === '小米')\n\n      // console.log(mi)\n\n      // 2. every 每一个是否都符合条件，如果都符合返回 true ，否则返回false\n\n      const arr1 = [10, 20, 30];\n\n      const flag = arr1.every((item) => item >= 20);\n\n      console.log(flag);\n    </script>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
