window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["55e1434b61864268f703"] = {
  "id": "55e1434b61864268f703",
  "title": "04-遍历对象.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "04-遍历对象.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>Document</title>\n  </head>\n\n  <body>\n    <script>\n      // for in 我们不推荐遍历数组\n\n      // let arr = ['pink', 'red', 'blue']\n\n      // for (let k in arr) {\n\n      //   console.log(k)  // 数组的下标 索引号  但是是字符串 '0'\n\n      //   console.log(arr[k])  // arr[k]\n\n      // }\n\n      // 1. 遍历对象 for in\n\n      let obj = {\n        uname: 'pink老师',\n\n        age: 18,\n\n        gender: '男',\n      };\n\n      // 2. 遍历对象\n\n      for (let k in obj) {\n        console.log(k); // 属性名  'uname'   'age'\n\n        // console.log(obj.uname)\n\n        // console.log(obj.k)\n\n        // console.log(obj.'uname')\n\n        // console.log(obj['uname'])   'uname'  === k\n\n        console.log(obj[k]); // 输出属性值  obj[k]\n      }\n    </script>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
