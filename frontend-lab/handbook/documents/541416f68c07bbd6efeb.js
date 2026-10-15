window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["541416f68c07bbd6efeb"] = {
  "id": "541416f68c07bbd6efeb",
  "title": "09-数组求和以及平均值.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "09-数组求和以及平均值.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>Document</title>\n  </head>\n\n  <body>\n    <script>\n      let arr = [2, 6, 1, 7, 4];\n\n      // 1. 求和的变量 sum\n\n      let sum = 0;\n\n      // 2.遍历累加\n\n      for (let i = 0; i < arr.length; i++) {\n        // console.log(arr[i])\n\n        // sum = sum + arr[i]\n\n        sum += arr[i];\n      }\n\n      console.log(`数组的和的结果是: ${sum}`);\n\n      // 3. 平均值  和 / arr.length  = 4\n\n      console.log(`数组的平均值结果是: ${sum / arr.length}`);\n\n      // sum = sum + arr[0]\n\n      // console.log(sum)\n    </script>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
