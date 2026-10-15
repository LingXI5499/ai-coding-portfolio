window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["d27a852b829ef6786611"] = {
  "id": "d27a852b829ef6786611",
  "title": "07-函数封装数组求和.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "07-函数封装数组求和.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>Document</title>\n  </head>\n\n  <body>\n    <script>\n      // 1. 封装函数\n\n      // 给一个参数的默认值\n\n      function getArrSum(arr = []) {\n        // console.log(arr)\n\n        let sum = 0;\n\n        for (let i = 0; i < arr.length; i++) {\n          sum += arr[i];\n        }\n\n        console.log(sum);\n      }\n\n      getArrSum([1, 2, 3, 4, 5]);\n\n      getArrSum([11, 22, 33]);\n\n      getArrSum(); // 0\n    </script>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
