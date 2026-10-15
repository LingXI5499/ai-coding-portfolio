window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["920dc7c7a822ebe0749e"] = {
  "id": "920dc7c7a822ebe0749e",
  "title": "10-箭头函数的参数.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "10-箭头函数的参数.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>Document</title>\n  </head>\n\n  <body>\n    <script>\n      // 1. 利用箭头函数来求和\n\n      const getSum = (...arr) => {\n        let sum = 0;\n\n        for (let i = 0; i < arr.length; i++) {\n          sum += arr[i];\n        }\n\n        return sum;\n      };\n\n      const result = getSum(2, 3, 4);\n\n      console.log(result); // 9\n    </script>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
