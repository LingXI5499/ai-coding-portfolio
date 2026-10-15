window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["16882d5cede440b7e1f8"] = {
  "id": "16882d5cede440b7e1f8",
  "title": "06-原型继承.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "06-原型继承.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>Document</title>\n  </head>\n\n  <body>\n    <script>\n      // 继续抽取   公共的部分放到原型上\n\n      // const Person1 = {\n\n      //   eyes: 2,\n\n      //   head: 1\n\n      // }\n\n      // const Person2 = {\n\n      //   eyes: 2,\n\n      //   head: 1\n\n      // }\n\n      // 构造函数  new 出来的对象 结构一样，但是对象不一样\n\n      function Person() {\n        this.eyes = 2;\n\n        this.head = 1;\n      }\n\n      // console.log(new Person)\n\n      // 女人  构造函数   继承  想要 继承 Person\n\n      function Woman() {}\n\n      // Woman 通过原型来继承 Person\n\n      // 父构造函数（父类）   子构造函数（子类）\n\n      // 子类的原型 =  new 父类\n\n      Woman.prototype = new Person(); // {eyes: 2, head: 1}\n\n      // 指回原来的构造函数\n\n      Woman.prototype.constructor = Woman;\n\n      // 给女人添加一个方法  生孩子\n\n      Woman.prototype.baby = function () {\n        console.log('宝贝');\n      };\n\n      const red = new Woman();\n\n      console.log(red);\n\n      // console.log(Woman.prototype)\n\n      // 男人 构造函数  继承  想要 继承 Person\n\n      function Man() {}\n\n      // 通过 原型继承 Person\n\n      Man.prototype = new Person();\n\n      Man.prototype.constructor = Man;\n\n      const pink = new Man();\n\n      console.log(pink);\n    </script>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
