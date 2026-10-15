window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["b2f4c75c0f179101ce8d"] = {
  "id": "b2f4c75c0f179101ce8d",
  "title": "09-函数的返回值.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "09-函数的返回值.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>Document</title>\n  </head>\n\n  <body>\n    <script>\n      // // 函数的返回值\n\n      // function fn() {\n\n      //   return 20\n\n      // }\n\n      // // fn() 调用者 相当于执行了    fn()   = 20\n\n      // // return 的值返回给调用者\n\n      // // console.log(fn())\n\n      // // let num = prompt('请输入数字')\n\n      // let re = fn()\n\n      // console.log(re)\n\n      // 求和函数的写法\n\n      function getTotalPrice(x, y) {\n        return x + y;\n\n        // return 后面的代码不会被执行\n      }\n\n      // console.log(getTotalPrice(1, 2))\n\n      // console.log(getTotalPrice(1, 2))\n\n      let sum = getTotalPrice(1, 2);\n\n      console.log(sum);\n\n      console.log(sum);\n\n      function fn() {}\n\n      let re = fn();\n\n      console.log(re); // undefined\n    </script>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
