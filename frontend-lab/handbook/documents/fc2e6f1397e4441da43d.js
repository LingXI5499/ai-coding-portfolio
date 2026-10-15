window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["fc2e6f1397e4441da43d"] = {
  "id": "fc2e6f1397e4441da43d",
  "title": "17-循环大练习.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "17-循环大练习.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>Document</title>\n  </head>\n\n  <body>\n    <script>\n      // let age = 18\n\n      // age = age + 1\n\n      // age += 1\n\n      // 1. 页面输出1~100\n\n      // let i = 1\n\n      // while (i <= 100) {\n\n      //   document.write(`这是第${i}个数<br>`)\n\n      //   i++\n\n      // }\n\n      // 2. 页面输出1~100 累加和\n\n      // let i = 1  // 变量的起始值\n\n      // let sum = 0  // 累加和变量\n\n      // while (i <= 100) {\n\n      //   // 把i 累加到 sum 里面\n\n      //   // sum = sum + i\n\n      //   sum += i\n\n      //   i++\n\n      // }\n\n      // console.log(sum) // 5050\n\n      // 3. 页面输出1~100 偶数和\n\n      let i = 1;\n\n      let sum = 0;\n\n      while (i <= 100) {\n        // 筛选偶数 只有偶数才累加\n\n        if (i % 2 === 0) {\n          sum = sum + i;\n        }\n\n        // 每次循环都要自加\n\n        i++;\n      }\n\n      console.log(sum);\n    </script>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
