window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["d6006e30f5e99d911b29"] = {
  "id": "d6006e30f5e99d911b29",
  "title": "13-解释.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "13-解释.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>Document</title>\n  </head>\n\n  <body>\n    <script>\n      const arr = [\n        {\n          stuId: 1001,\n\n          uname: '欧阳霸天',\n\n          age: 19,\n\n          gender: '男',\n\n          salary: '20000',\n\n          city: '上海',\n        },\n\n        {\n          stuId: 1001,\n\n          uname: '欧阳霸天',\n\n          age: 19,\n\n          gender: '男',\n\n          salary: '20000',\n\n          city: '上海',\n        },\n      ];\n\n      const array = [1, 2, 3];\n\n      const newArr = array.map(function (item, i) {\n        // console.log(item)\n\n        // console.log(i)\n\n        return item + 10;\n      });\n\n      // [11, 12, 13]\n\n      console.log(newArr);\n\n      // const obj = {}\n\n      // obj.stuId = 1\n\n      // obj.uname = 'pink老师'\n\n      // console.log(obj)\n\n      // const obj = {\n\n      //   uname: uname.value,\n\n      //   age: age.value,\n\n      //   gender: gender.value,\n\n      //   salary: salary.value,\n\n      //   city: city.value,\n\n      // }\n\n      const o = {\n        uname: 'pink',\n      };\n\n      // o.uname  // pink\n\n      const item = 'age';\n\n      // o['uname'] // pink\n\n      // o['age']\n\n      // o.age = 18\n\n      o[item] = 18;\n\n      // o.item = 18\n\n      // 只要item 是变量，我们不能采取 点的形式 采取的事 中括号的形式\n\n      console.log(o);\n    </script>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
