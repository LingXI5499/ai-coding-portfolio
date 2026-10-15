window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["689bc9ed4645fba0d406"] = {
  "id": "689bc9ed4645fba0d406",
  "title": "03-闭包.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "03-闭包.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>Document</title>\n  </head>\n\n  <body>\n    <script>\n      // 简单的写法\n\n      // function outer() {\n\n      //   let a = 10\n\n      //   function fn() {\n\n      //     console.log(a)\n\n      //   }\n\n      //   fn()\n\n      // }\n\n      // outer()\n\n      // 常见的闭包的形式   外部可以访问使用 函数内部的变量\n\n      // function outer() {\n\n      //   let a = 100\n\n      //   function fn() {\n\n      //     console.log(a)\n\n      //   }\n\n      //   return fn\n\n      // }\n\n      // outer()   ===  fn   ===  function fn() {}\n\n      // const fun = function fn() { }\n\n      // // 常见的写法2\n\n      // function outer() {\n\n      //   let a = 100\n\n      //   return function () {\n\n      //     console.log(a)\n\n      //   }\n\n      // }\n\n      // const fun = outer()\n\n      // fun() // 调用函数\n\n      // 外面要使用这个 10\n\n      // 闭包的应用\n\n      // 普通形式 统计函数调用的次数\n\n      // let i = 0\n\n      // function fn() {\n\n      //   i++\n\n      //   console.log(`函数被调用了${i}次`)\n\n      // }\n\n      //  因为 i 是全局变量，容易被修改\n\n      // 闭包形式 统计函数调用的次数\n\n      function count() {\n        let i = 0;\n\n        function fn() {\n          i++;\n\n          console.log(`函数被调用了${i}次`);\n        }\n\n        return fn;\n      }\n\n      const fun = count();\n    </script>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
