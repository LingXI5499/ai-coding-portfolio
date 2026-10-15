window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["7a81fd199e178086b3b7"] = {
  "id": "7a81fd199e178086b3b7",
  "title": "15-对象解构.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "15-对象解构.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>Document</title>\n  </head>\n\n  <body>\n    <script>\n      // 对象解构\n\n      // const obj = {\n\n      //   uname: 'pink老师',\n\n      //   age: 18\n\n      // }\n\n      // obj.uname\n\n      // obj.age\n\n      // const uname = 'red老师'\n\n      // 解构的语法\n\n      // const { uname, age } = {age: 18, uname: 'pink老师' }\n\n      // // 等价于 const uname =  obj.uname\n\n      // // 要求属性名和变量名必须一直才可以\n\n      // console.log(uname)\n\n      // console.log(age)\n\n      // 1. 对象解构的变量名 可以重新改名  旧变量名: 新变量名\n\n      // const { uname: username, age } = { uname: 'pink老师', age: 18 }\n\n      // console.log(username)\n\n      // console.log(age)\n\n      // 2. 解构数组对象\n\n      const pig = [\n        {\n          uname: '佩奇',\n\n          age: 6,\n        },\n      ];\n\n      const [{ uname, age }] = pig;\n\n      console.log(uname);\n\n      console.log(age);\n    </script>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
