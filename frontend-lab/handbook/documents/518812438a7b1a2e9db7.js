window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["518812438a7b1a2e9db7"] = {
  "id": "518812438a7b1a2e9db7",
  "title": "11-箭头函数的this.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "11-箭头函数的this.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>Document</title>\n  </head>\n\n  <body>\n    <script>\n      // 以前this的指向：  谁调用的这个函数，this 就指向谁\n\n      // console.log(this)  // window\n\n      // // 普通函数\n\n      // function fn() {\n\n      //   console.log(this)  // window\n\n      // }\n\n      // window.fn()\n\n      // // 对象方法里面的this\n\n      // const obj = {\n\n      //   name: 'andy',\n\n      //   sayHi: function () {\n\n      //     console.log(this)  // obj\n\n      //   }\n\n      // }\n\n      // obj.sayHi()\n\n      // 2. 箭头函数的this  是上一层作用域的this 指向\n\n      // const fn = () => {\n\n      //   console.log(this)  // window\n\n      // }\n\n      // fn()\n\n      // 对象方法箭头函数 this\n\n      // const obj = {\n\n      //   uname: 'pink老师',\n\n      //   sayHi: () => {\n\n      //     console.log(this)  // this 指向谁？ window\n\n      //   }\n\n      // }\n\n      // obj.sayHi()\n\n      const obj = {\n        uname: 'pink老师',\n\n        sayHi: function () {\n          console.log(this); // obj\n\n          let i = 10;\n\n          const count = () => {\n            console.log(this); // obj\n          };\n\n          count();\n        },\n      };\n\n      obj.sayHi();\n    </script>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
