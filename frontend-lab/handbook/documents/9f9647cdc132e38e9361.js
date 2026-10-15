window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["9f9647cdc132e38e9361"] = {
  "id": "9f9647cdc132e38e9361",
  "title": "13-数组筛选.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "13-数组筛选.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>Document</title>\n  </head>\n\n  <body>\n    <script>\n      // 重点案例\n\n      let arr = [2, 0, 6, 1, 77, 9, 54, 3, 78, 7];\n\n      // 1. 声明新的空的数组\n\n      let newArr = [];\n\n      // 2. 遍历旧数组\n\n      for (let i = 0; i < arr.length; i++) {\n        if (arr[i] >= 10) {\n          // 3. 满足条件 追加给新的数组\n\n          newArr.push(arr[i]);\n        }\n      }\n\n      // 4. 输出新的数组\n\n      console.log(newArr);\n    </script>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
