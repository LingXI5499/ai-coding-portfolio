window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["d7debccb7726bede604f"] = {
  "id": "d7debccb7726bede604f",
  "title": "19-综合案例2-注册页面.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "19-综合案例2-注册页面.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>注册信息</title>\n  </head>\n\n  <body>\n    <h1>注册信息</h1>\n\n    <form action=\"\">\n      <!-- 表单控件 -->\n\n      <!-- 个人信息 -->\n\n      <h2>个人信息</h2>\n\n      <label>姓名：</label>\n      <input type=\"text\" placeholder=\"请输入真实姓名\" />\n\n      <br />\n      <br />\n\n      <label>密码：</label>\n      <input type=\"password\" placeholder=\"请输入密码\" />\n\n      <br />\n      <br />\n\n      <label>确认密码：</label>\n      <input type=\"password\" placeholder=\"请输入确认密码\" />\n\n      <br />\n      <br />\n\n      <label>性别：</label>\n\n      <label>\n        <input type=\"radio\" name=\"gender\" />\n        男\n      </label>\n\n      <label>\n        <input type=\"radio\" name=\"gender\" checked />\n        女\n      </label>\n\n      <br />\n      <br />\n\n      <label>居住城市：</label>\n\n      <select>\n        <option>北京</option>\n\n        <option>上海</option>\n\n        <option>广州</option>\n\n        <option>深圳</option>\n\n        <option>武汉</option>\n      </select>\n\n      <!-- 教育经历 -->\n\n      <h2>教育经历</h2>\n\n      <label>最高学历：</label>\n\n      <select>\n        <option>博士</option>\n\n        <option>硕士</option>\n\n        <option>本科</option>\n\n        <option>大专</option>\n      </select>\n\n      <br />\n      <br />\n\n      <label>学校名称：</label>\n      <input type=\"text\" />\n\n      <br />\n      <br />\n\n      <label>所学专业：</label>\n      <input type=\"text\" />\n\n      <br />\n      <br />\n\n      <label>在校时间：</label>\n\n      <select>\n        <option>2015</option>\n\n        <option>2016</option>\n\n        <option>2017</option>\n\n        <option>2018</option>\n      </select>\n\n      --\n\n      <select>\n        <option>2019</option>\n\n        <option>2020</option>\n\n        <option>2021</option>\n\n        <option>2022</option>\n      </select>\n\n      <!-- 工作经历 -->\n\n      <h2>工作经历</h2>\n\n      <label>公司名称：</label>\n      <input type=\"text\" />\n\n      <br />\n      <br />\n\n      <label>工作描述：</label>\n\n      <br />\n\n      <textarea></textarea>\n\n      <br />\n      <br />\n\n      <!-- 协议 和 按钮 -->\n\n      <input type=\"checkbox\" />\n      <label>已阅读并同意以下协议：</label>\n\n      <ul>\n        <li><a href=\"#\">《用户服务协议》</a></li>\n\n        <li><a href=\"#\">《隐私政策》</a></li>\n      </ul>\n\n      <br />\n      <br />\n\n      <button>免费注册</button>\n\n      <button type=\"reset\">重新填写</button>\n    </form>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
