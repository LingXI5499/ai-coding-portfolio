window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["30fab6769a31dfc35668"] = {
  "id": "30fab6769a31dfc35668",
  "title": "11-函数细节.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "11-函数细节.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>Document</title>\n  </head>\n\n  <body>\n    <script>\n      // function getSum(x, y) {\n\n      //   return x + y\n\n      //   // 返回值返回给了谁？ 函数的调用者  getSum(1, 2)\n\n      //   // getSum(1, 2) = 3\n\n      // }\n\n      // // let result = getSum(1, 2) = 3\n\n      // // let num = parseInt('12px')\n\n      // let result = getSum(1, 2)\n\n      // console.log(result)\n\n      // 1. 函数名相同， 后面覆盖前面\n\n      // function fn() {\n\n      //   console.log(1)\n\n      // }\n\n      // function fn() {\n\n      //   console.log(2)\n\n      // }\n\n      // fn()\n\n      // 2. 参数不匹配\n\n      function fn(a, b) {\n        console.log(a + b);\n      }\n\n      // (1). 实参多余形参   剩余的实参不参与运算\n\n      // fn(1, 2, 3)\n\n      // (2). 实参少于形参   剩余的实参不参与运算\n\n      fn(1); // 1 + undefined  = NaN\n    </script>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
