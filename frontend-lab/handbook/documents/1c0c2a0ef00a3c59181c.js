window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["1c0c2a0ef00a3c59181c"] = {
  "id": "1c0c2a0ef00a3c59181c",
  "title": "11-数组map方法.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "11-数组map方法.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>Document</title>\n  </head>\n\n  <body>\n    <script>\n      const arr = ['red', 'blue', 'green'];\n\n      // map 方法也是遍历  处理数据  可以返回一个数组\n\n      const newArr = arr.map(function (item, i) {\n        // console.log(item)  // 数组元素  'red'\n\n        // console.log(i)  // 下标\n\n        return item + '老师';\n      });\n\n      console.log(newArr)[('red老师', 'blue老师', 'green老师')];\n\n      const arr1 = [10, 20, 30];\n\n      const newArr1 = arr1.map(function (item) {\n        return item + 10;\n      });\n\n      console.log(newArr1);\n    </script>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
