window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["1579b014fb54bc87078c"] = {
  "id": "1579b014fb54bc87078c",
  "title": "03-自己定义构造函数创建对象.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "03-自己定义构造函数创建对象.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>Document</title>\n  </head>\n\n  <body>\n    <script>\n      // 创建一个猪 构造函数\n\n      function Pig(uname, age) {\n        this.uname = uname;\n\n        this.age = age;\n      }\n\n      // console.log(new Pig('佩奇', 6))\n\n      // console.log(new Pig('乔治', 3))\n\n      const p = new Pig('佩奇', 6);\n\n      console.log(p);\n\n      //  const pepa = { uname: '佩奇', age: 6 }\n\n      // const obj = new Object()\n\n      function Goods(name, price, count) {\n        this.name = name;\n\n        this.price = price;\n\n        this.count = count;\n\n        this.sayhi = function () {};\n      }\n\n      const mi = new Goods('小米', 1999, 20);\n\n      console.log(mi);\n\n      const hw = new Goods('华为', 3999, 59);\n\n      console.log(hw);\n\n      console.log(mi === hw);\n\n      mi.name = 'vivo';\n\n      console.log(mi);\n\n      console.log(hw);\n\n      // const date = new Date('2022-4-8')\n\n      // console.log(date)\n\n      // 静态成员\n\n      Goods.num = 10;\n\n      console.log(Goods.num);\n\n      Goods.sayhi = function () {};\n    </script>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
