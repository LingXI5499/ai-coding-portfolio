window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["d07f0f00e3abd158a957"] = {
  "id": "d07f0f00e3abd158a957",
  "title": "01-构造函数.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "01-构造函数.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>Document</title>\n  </head>\n\n  <body>\n    <script>\n      // 构造函数  公共的属性和方法 封装到 Star 构造函数里面了\n\n      // 1.公共的属性写到 构造函数里面\n\n      function Star(uname, age) {\n        this.uname = uname;\n\n        this.age = age;\n\n        // this.sing = function () {\n\n        //   console.log('唱歌')\n\n        // }\n      }\n\n      // 2. 公共的方法写到原型对象身上   节约了内存\n\n      Star.prototype.sing = function () {\n        console.log('唱歌');\n      };\n\n      const ldh = new Star('刘德华', 55);\n\n      const zxy = new Star('张学友', 58);\n\n      ldh.sing(); //调用\n\n      zxy.sing(); //调用\n\n      // console.log(ldh === zxy)  // false\n\n      console.log(ldh.sing === zxy.sing);\n\n      // console.dir(Star.prototype)\n    </script>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
