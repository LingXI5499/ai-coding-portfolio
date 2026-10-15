window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["c2f08505167c49d7149b"] = {
  "id": "c2f08505167c49d7149b",
  "title": "学生信息表案例.html",
  "treatment": "排错练习（不自动执行）",
  "sections": [
    {
      "title": "学生信息表案例.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\" />\n\n    <title>学生信息管理</title>\n\n    <link rel=\"stylesheet\" href=\"css/index.css\" />\n  </head>\n\n  <body>\n    <h1>新增学员</h1>\n\n    <form class=\"info\" autocomplete=\"off\">\n      姓名：\n      <input type=\"text\" class=\"uname\" name=\"uname\" />\n\n      年龄：\n      <input type=\"text\" class=\"age\" name=\"age\" />\n\n      性别:\n\n      <select name=\"gender\" class=\"gender\">\n        <option value=\"男\">男</option>\n\n        <option value=\"女\">女</option>\n      </select>\n\n      薪资：\n      <input type=\"text\" class=\"salary\" name=\"salary\" />\n\n      就业城市：\n      <select name=\"city\" class=\"city\">\n        <option value=\"北京\">北京</option>\n\n        <option value=\"上海\">上海</option>\n\n        <option value=\"广州\">广州</option>\n\n        <option value=\"深圳\">深圳</option>\n\n        <option value=\"曹县\">曹县</option>\n      </select>\n\n      <button class=\"add\">录入</button>\n    </form>\n\n    <h1>就业榜</h1>\n\n    <table>\n      <thead>\n        <tr>\n          <th>学号</th>\n\n          <th>姓名</th>\n\n          <th>年龄</th>\n\n          <th>性别</th>\n\n          <th>薪资</th>\n\n          <th>就业城市</th>\n\n          <th>操作</th>\n        </tr>\n      </thead>\n\n      <tbody>\n        <!-- \n\n        <tr>\n\n          <td>1001</td>\n\n          <td>欧阳霸天</td>\n\n          <td>19</td>\n\n          <td>男</td>\n\n          <td>15000</td>\n\n          <td>上海</td>\n\n          <td>\n\n            <a href=\"javascript:\">删除</a>\n\n          </td>\n\n        </tr> \n\n        -->\n      </tbody>\n    </table>\n\n    <script>\n      // 参考数据\n\n      // const initData = [\n\n      //   {\n\n      //     stuId: 1001,\n\n      //     uname: '欧阳霸天',\n\n      //     age: 19,\n\n      //     gender: '男',\n\n      //     salary: '20000',\n\n      //     city: '上海',\n\n      //   }\n\n      // ]\n    </script>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
