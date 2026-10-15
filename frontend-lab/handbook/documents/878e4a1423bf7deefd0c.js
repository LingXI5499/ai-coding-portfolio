window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["878e4a1423bf7deefd0c"] = {
  "id": "878e4a1423bf7deefd0c",
  "title": "02-构造函数和原型的this指向.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "02-构造函数和原型的this指向.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>Document</title>\n  </head>\n\n  <body>\n    <script>\n      let that;\n\n      function Star(uname) {\n        // that = this\n\n        // console.log(this)\n\n        this.uname = uname;\n      }\n\n      // 原型对象里面的函数this指向的还是 实例对象 ldh\n\n      Star.prototype.sing = function () {\n        that = this;\n\n        console.log('唱歌');\n      };\n\n      // 实例对象 ldh\n\n      // 构造函数里面的 this 就是  实例对象  ldh\n\n      const ldh = new Star('刘德华');\n\n      ldh.sing();\n\n      console.log(that === ldh);\n    </script>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
