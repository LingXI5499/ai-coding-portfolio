window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["6f1e6c047d3479c0123b"] = {
  "id": "6f1e6c047d3479c0123b",
  "title": "13-apply.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "13-apply.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>Document</title>\n  </head>\n\n  <body>\n    <script>\n      const obj = {\n        age: 18,\n      };\n\n      function fn(x, y) {\n        console.log(this); // {age: 18}\n\n        console.log(x + y);\n      }\n\n      // 1. 调用函数\n\n      // 2. 改变this指向\n\n      //  fn.apply(this指向谁, 数组参数)\n\n      fn.apply(obj, [1, 2]);\n\n      // 3. 返回值   本身就是在调用函数，所以返回值就是函数的返回值\n\n      // 使用场景： 求数组最大值\n\n      // const max = Math.max(1, 2, 3)\n\n      // console.log(max)\n\n      const arr = [100, 44, 77];\n\n      const max = Math.max.apply(Math, arr);\n\n      const min = Math.min.apply(null, arr);\n\n      console.log(max, min);\n\n      // 使用场景： 求数组最大值\n\n      console.log(Math.max(...arr));\n    </script>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
