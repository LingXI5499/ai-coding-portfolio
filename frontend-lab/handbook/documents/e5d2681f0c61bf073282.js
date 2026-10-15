window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["e5d2681f0c61bf073282"] = {
  "id": "e5d2681f0c61bf073282",
  "title": "成绩案例静态模板.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "成绩案例静态模板.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <link rel=\"stylesheet\" href=\"./styles/index.css\" />\n\n    <title>Document</title>\n  </head>\n\n  <body>\n    <!-- <div id=\"app\" class=\"score-case\">\n\n    <div class=\"table\">\n\n      <table>\n\n        <thead>\n\n          <tr>\n\n            <th>编号</th>\n\n            <th>科目</th>\n\n            <th>成绩</th>\n\n            <th>操作</th>\n\n          </tr>\n\n        </thead>\n\n        <tbody>\n\n\n\n        </tbody>\n\n        <tbody>\n\n          <tr>\n\n            <td colspan=\"5\">\n\n              <span class=\"none\">暂无数据</span>\n\n            </td>\n\n          </tr>\n\n        </tbody>\n\n\n\n        <tfoot>\n\n          <tr>\n\n            <td colspan=\"5\">\n\n              <span>总分：246</span>\n\n              <span style=\"margin-left: 50px\">平均分：79</span>\n\n            </td>\n\n          </tr>\n\n        </tfoot>\n\n      </table>\n\n    </div>\n\n\n\n  </div> -->\n\n    <script>\n      // 核心数据\n\n      const data = [\n        { subject: '语文', score: 46 },\n\n        { subject: '数学', score: 80 },\n\n        { subject: '英语', score: 100 },\n      ];\n\n      let tr = '';\n\n      let total = 0; // 计算总分\n\n      for (let i = 0; i < data.length; i++) {\n        tr += `\n\n        <tr>\n\n            <td>${i + 1}</td>\n\n            <td>${data[i].subject}</td>\n\n            <td>${data[i].score}</td>\n\n            <td><a href=\"#\">删除</a></td>\n\n        </tr>\n\n      `;\n\n        total += data[i].score;\n      }\n\n      document.write(`\n\n    <div id=\"app\" class=\"score-case\">\n\n      <div class=\"table\">\n\n        <table>\n\n          <thead>\n\n            <tr>\n\n              <th>编号</th>\n\n              <th>科目</th>\n\n              <th>成绩</th>\n\n              <th>操作</th>\n\n            </tr>\n\n          </thead>\n\n          <tbody>\n\n            ${tr}\n\n          </tbody>\n\n          <tbody>\n\n            <tr>\n\n              <td colspan=\"5\">\n\n                <span class=\"none\">暂无数据</span>\n\n              </td>\n\n            </tr>\n\n          </tbody>\n\n\n\n          <tfoot>\n\n            <tr>\n\n              <td colspan=\"5\">\n\n                <span>总分：${total}</span>\n\n                <span style=\"margin-left: 50px\">平均分：${total / data.length}</span>\n\n              </td>\n\n            </tr>\n\n          </tfoot>\n\n        </table>\n\n      </div>\n\n\n\n    </div>\n\n    `);\n    </script>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
