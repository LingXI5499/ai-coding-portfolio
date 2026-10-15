window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["5f9c12c23fb51f3f245d"] = {
  "id": "5f9c12c23fb51f3f245d",
  "title": "03-数组扩展最大值和求和方法.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "03-数组扩展最大值和求和方法.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>Document</title>\n  </head>\n\n  <body>\n    <script>\n      // 自己定义 数组扩展方法  求和 和 最大值\n\n      // 1. 我们定义的这个方法，任何一个数组实例对象都可以使用\n\n      // 2. 自定义的方法写到  数组.prototype 身上\n\n      // 1. 最大值\n\n      const arr = [1, 2, 3];\n\n      Array.prototype.max = function () {\n        // 展开运算符\n\n        return Math.max(...this);\n\n        // 原型函数里面的this 指向谁？ 实例对象 arr\n      };\n\n      // 2. 最小值\n\n      Array.prototype.min = function () {\n        // 展开运算符\n\n        return Math.min(...this);\n\n        // 原型函数里面的this 指向谁？ 实例对象 arr\n      };\n\n      console.log(arr.max());\n\n      console.log([2, 5, 9].max());\n\n      console.log(arr.min());\n\n      // const arr = new Array(1, 2)\n\n      // console.log(arr)\n\n      // 3. 求和 方法\n\n      Array.prototype.sum = function () {\n        return this.reduce((prev, item) => prev + item, 0);\n      };\n\n      console.log([1, 2, 3].sum());\n\n      console.log([11, 21, 31].sum());\n    </script>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
