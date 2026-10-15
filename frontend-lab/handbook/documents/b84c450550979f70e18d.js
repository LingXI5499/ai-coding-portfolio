window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["b84c450550979f70e18d"] = {
  "id": "b84c450550979f70e18d",
  "title": "07-原型链.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "07-原型链.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>Document</title>\n  </head>\n\n  <body>\n    <script>\n      // function Objetc() {}\n\n      console.log(Object.prototype);\n\n      console.log(Object.prototype.__proto__);\n\n      function Person() {}\n\n      const ldh = new Person();\n\n      // console.log(ldh.__proto__ === Person.prototype)\n\n      // console.log(Person.prototype.__proto__ === Object.prototype)\n\n      console.log(ldh instanceof Person);\n\n      console.log(ldh instanceof Object);\n\n      console.log(ldh instanceof Array);\n\n      console.log([1, 2, 3] instanceof Array);\n\n      console.log(Array instanceof Object);\n    </script>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
