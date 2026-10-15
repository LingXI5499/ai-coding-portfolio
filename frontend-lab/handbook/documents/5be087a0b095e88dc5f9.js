window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["5be087a0b095e88dc5f9"] = {
  "id": "5be087a0b095e88dc5f9",
  "title": "06-渲染学生信息表.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "06-渲染学生信息表.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>Document</title>\n\n    <style>\n      table {\n        width: 600px;\n\n        text-align: center;\n      }\n\n      table,\n      th,\n      td {\n        border: 1px solid #ccc;\n\n        border-collapse: collapse;\n      }\n\n      caption {\n        font-size: 18px;\n\n        margin-bottom: 10px;\n\n        font-weight: 700;\n      }\n\n      tr {\n        height: 40px;\n\n        cursor: pointer;\n      }\n\n      table tr:nth-child(1) {\n        background-color: #ddd;\n      }\n\n      table tr:not(:first-child):hover {\n        background-color: #eee;\n      }\n    </style>\n  </head>\n\n  <body>\n    <h2>学生信息</h2>\n\n    <p>将数据渲染到页面中...</p>\n\n    <table>\n      <caption>学生列表</caption>\n\n      <tr>\n        <th>序号</th>\n\n        <th>姓名</th>\n\n        <th>年龄</th>\n\n        <th>性别</th>\n\n        <th>家乡</th>\n      </tr>\n\n      <!-- script写到这里 -->\n\n      <script>\n        // 1. 数据准备\n\n        let students = [\n          { name: '小明', age: 18, gender: '男', hometown: '河北省' },\n\n          { name: '小红', age: 19, gender: '女', hometown: '河南省' },\n\n          { name: '小刚', age: 17, gender: '男', hometown: '山西省' },\n\n          { name: '小丽', age: 18, gender: '女', hometown: '山东省' },\n\n          { name: '晓强', age: 16, gender: '女', hometown: '蓝翔技校' },\n        ];\n\n        // 2. 渲染页面\n\n        for (let i = 0; i < students.length; i++) {\n          document.write(`\n\n                <tr>\n\n                    <td>${i + 1}</td>\n\n                    <td>${students[i].name}</td>\n\n                    <td>${students[i].age}</td>\n\n                    <td>${students[i].gender}</td>\n\n                    <td>${students[i].hometown}</td>\n\n                </tr>\n\n                `);\n        }\n      </script>\n    </table>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
