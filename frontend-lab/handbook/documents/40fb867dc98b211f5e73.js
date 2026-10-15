window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["40fb867dc98b211f5e73"] = {
  "id": "40fb867dc98b211f5e73",
  "title": "14-数组去0案例.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "14-数组去0案例.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>Document</title>\n  </head>\n\n  <body>\n    <script>\n      let arr = [2, 0, 6, 1, 77, 0, 52, 0, 25, 7];\n\n      // 1. 声明一个新的数组\n\n      let newArr = [];\n\n      // 2. 遍历筛选\n\n      for (let i = 0; i < arr.length; i++) {\n        if (arr[i] !== 0) {\n          newArr.push(arr[i]);\n        }\n      }\n\n      // 输出新数组\n\n      console.log(newArr);\n    </script>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
