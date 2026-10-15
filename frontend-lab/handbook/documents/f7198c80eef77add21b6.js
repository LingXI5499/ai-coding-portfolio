window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["f7198c80eef77add21b6"] = {
  "id": "f7198c80eef77add21b6",
  "title": "03-比较运算符.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "03-比较运算符.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>Document</title>\n  </head>\n\n  <body>\n    <script>\n      console.log(3 > 5);\n\n      console.log(3 >= 3);\n\n      console.log(2 == 2);\n\n      // 比较运算符有隐式转换 把'2' 转换为 2  双等号 只判断值\n\n      console.log(2 == '2'); // true\n\n      // console.log(undefined === null)\n\n      // === 全等 判断 值 和 数据类型都一样才行\n\n      // 以后判断是否相等 请用 ===\n\n      console.log(2 === '2');\n\n      console.log(NaN === NaN); // NaN 不等于任何人，包括他自己\n\n      console.log(2 !== '2'); // true\n\n      console.log(2 != '2'); // false\n\n      console.log('-------------------------');\n\n      console.log('a' < 'b'); // true\n\n      console.log('aa' < 'ab'); // true\n\n      console.log('aa' < 'aac'); // true\n\n      console.log('-------------------------');\n    </script>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
