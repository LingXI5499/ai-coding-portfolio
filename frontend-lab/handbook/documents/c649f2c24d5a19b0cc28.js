window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["c649f2c24d5a19b0cc28"] = {
  "id": "c649f2c24d5a19b0cc28",
  "title": "05-函数参数.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "05-函数参数.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>Document</title>\n  </head>\n\n  <body>\n    <script>\n      // 2. 求 1~100 累加和\n\n      // function getSum(end) {   // end = 50\n\n      //   // console.log(end)\n\n      //   let sum = 0\n\n      //   for (let i = 1; i <= end; i++) {\n\n      //     sum += i\n\n      //   }\n\n      //   console.log(sum)\n\n      // }\n\n      // getSum(50)  // 1~50\n\n      // getSum(100)  // 1~100\n\n      function getSum(start, end) {\n        // end = 50\n\n        // 形参  形式上的参数\n\n        // console.log(end)\n\n        let sum = 0;\n\n        for (let i = start; i <= end; i++) {\n          sum += i;\n        }\n\n        console.log(sum);\n      }\n\n      getSum(1, 50); // 调用的小括号里面 实参 - 实际的参数\n\n      getSum(100, 200); // 实参 - 实际的参数\n    </script>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
