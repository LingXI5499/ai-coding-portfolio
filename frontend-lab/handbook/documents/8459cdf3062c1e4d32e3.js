window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["8459cdf3062c1e4d32e3"] = {
  "id": "8459cdf3062c1e4d32e3",
  "title": "05-遍历数组对象.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "05-遍历数组对象.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>Document</title>\n  </head>\n\n  <body>\n    <script>\n      let students = [\n        { name: '小明', age: 18, gender: '男', hometown: '河北省' },\n\n        { name: '小红', age: 19, gender: '女', hometown: '河南省' },\n\n        { name: '小刚', age: 17, gender: '男', hometown: '山西省' },\n\n        { name: '小丽', age: 18, gender: '女', hometown: '山东省' },\n      ];\n\n      for (let i = 0; i < students.length; i++) {\n        // console.log(i)  // 下标索引号\n\n        // console.log(students[i]) // 每个对象\n\n        console.log(students[i].name);\n\n        console.log(students[i].hometown);\n      }\n    </script>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
