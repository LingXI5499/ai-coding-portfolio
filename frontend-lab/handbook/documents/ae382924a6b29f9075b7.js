window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["ae382924a6b29f9075b7"] = {
  "id": "ae382924a6b29f9075b7",
  "title": "17-冒泡排序.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "17-冒泡排序.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>Document</title>\n  </head>\n\n  <body>\n    <script>\n      // let arr = [5, 4, 3, 2, 1]\n\n      let arr = [2, 4, 3, 5, 1];\n\n      // for (let i = 0; i < arr.length - 1; i++) {\n\n      //   for (let j = 0; j < arr.length - i - 1; j++) {\n\n      //     // 开始交换 但是前提 第一个数大于第二个数才交换\n\n      //     if (arr[j] > arr[j + 1]) {\n\n      //       // 交换2个变量\n\n      //       let temp = arr[j]\n\n      //       arr[j] = arr[j + 1]\n\n      //       arr[j + 1] = temp\n\n      //     }\n\n      //   }\n\n      // }\n\n      // arr.sort()  // 排序\n\n      // sort 升序排列\n\n      // arr.sort(function (a, b) {\n\n      //   return a - b\n\n      // })\n\n      // sort() 降序\n\n      arr.sort(function (a, b) {\n        return b - a;\n      });\n\n      console.log(arr);\n\n      // let num1 = 10\n\n      // let num2 = 20\n\n      // let temp = num1\n\n      // num1 = num2\n\n      // num2 = temp\n    </script>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
