window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["7cc19e33b0de1c149454"] = {
  "id": "7cc19e33b0de1c149454",
  "title": "10-数组最大值.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "10-数组最大值.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>Document</title>\n  </head>\n\n  <body>\n    <script>\n      let arr = [2, 6, 1, 7, 400, 55, 88, 100];\n\n      // max里面要存的是最大值\n\n      let max = arr[0];\n\n      // min 要存放的是最小值\n\n      let min = arr[0];\n\n      // 遍历数组\n\n      for (let i = 1; i < arr.length; i++) {\n        // 如果max 比 数组元素里面的值小，我们就需要把这元素赋值给 max\n\n        // if (max < arr[i]) max = arr[i]\n\n        max < arr[i] ? (max = arr[i]) : max;\n\n        // 如果min 比 数组元素大， 我们就需要把数组元素给min\n\n        // if (min > arr[i]) {\n\n        //   min = arr[i]\n\n        // }\n\n        min > arr[i] ? (min = arr[i]) : min;\n      }\n\n      // 输出 max\n\n      console.log(`最大值是: ${max}`);\n\n      console.log(`最小值是: ${min}`);\n    </script>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
