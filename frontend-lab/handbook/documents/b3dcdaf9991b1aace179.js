window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["b3dcdaf9991b1aace179"] = {
  "id": "b3dcdaf9991b1aace179",
  "title": "06-函数动态参数.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "06-函数动态参数.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>Document</title>\n  </head>\n\n  <body>\n    <script>\n      function getSum() {\n        // arguments 动态参数 只存在于 函数里面\n\n        // 是伪数组 里面存储的是传递过来的实参\n\n        // console.log(arguments)  [2,3,4]\n\n        let sum = 0;\n\n        for (let i = 0; i < arguments.length; i++) {\n          sum += arguments[i];\n        }\n\n        console.log(sum);\n      }\n\n      getSum(2, 3, 4);\n\n      getSum(1, 2, 3, 4, 2, 2, 3, 4);\n    </script>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
