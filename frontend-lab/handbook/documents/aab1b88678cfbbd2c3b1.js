window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["aab1b88678cfbbd2c3b1"] = {
  "id": "aab1b88678cfbbd2c3b1",
  "title": "08-展开运算符.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "08-展开运算符.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>Document</title>\n  </head>\n\n  <body>\n    <script>\n      const arr1 = [1, 2, 3];\n\n      // 展开运算符 可以展开数组\n\n      // console.log(...arr)\n\n      // console.log(Math.max(1, 2, 3))\n\n      // ...arr1  === 1,2,3\n\n      // 1 求数组最大值\n\n      console.log(Math.max(...arr1)); // 3\n\n      console.log(Math.min(...arr1)); // 1\n\n      // 2. 合并数组\n\n      const arr2 = [3, 4, 5];\n\n      const arr = [...arr1, ...arr2];\n\n      console.log(arr);\n    </script>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
