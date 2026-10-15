window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["1d88f4067a83d9c0beea"] = {
  "id": "1d88f4067a83d9c0beea",
  "title": "05-对象原型.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "05-对象原型.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>Document</title>\n  </head>\n\n  <body>\n    <script>\n      function Star() {}\n\n      const ldh = new Star();\n\n      // 对象原型__proto__ 指向 改构造函数的原型对象\n\n      console.log(ldh.__proto__);\n\n      // console.log(ldh.__proto__ === Star.prototype)\n\n      // 对象原型里面有constructor 指向 构造函数 Star\n\n      console.log(ldh.__proto__.constructor === Star);\n    </script>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
