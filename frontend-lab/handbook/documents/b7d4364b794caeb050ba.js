window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["b7d4364b794caeb050ba"] = {
  "id": "b7d4364b794caeb050ba",
  "title": "成绩案例静态模板.html",
  "treatment": "排错练习（不自动执行）",
  "sections": [
    {
      "title": "成绩案例静态模板.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <link rel=\"stylesheet\" href=\"./styles/index.css\" />\n\n    <title>Document</title>\n  </head>\n\n  <body>\n    <div id=\"app\" class=\"score-case\">\n      <div class=\"table\">\n        <table>\n          <thead>\n            <tr>\n              <th>编号</th>\n\n              <th>科目</th>\n\n              <th>成绩</th>\n\n              <th>操作</th>\n            </tr>\n          </thead>\n\n          <tbody>\n            <tr>\n              <td>1</td>\n\n              <td>语文</td>\n\n              <td>46</td>\n\n              <td><a href=\"#\">删除</a></td>\n            </tr>\n\n            <tr>\n              <td>2</td>\n\n              <td>英语</td>\n\n              <td>80</td>\n\n              <td><a href=\"#\">删除</a></td>\n            </tr>\n\n            <tr>\n              <td>3</td>\n\n              <td>数学</td>\n\n              <td>100</td>\n\n              <td><a href=\"#\">删除</a></td>\n            </tr>\n          </tbody>\n\n          <tbody>\n            <tr>\n              <td colspan=\"5\">\n                <span class=\"none\">暂无数据</span>\n              </td>\n            </tr>\n          </tbody>\n\n          <tfoot>\n            <tr>\n              <td colspan=\"5\">\n                <span>总分：246</span>\n\n                <span style=\"margin-left: 50px\">平均分：79</span>\n              </td>\n            </tr>\n          </tfoot>\n        </table>\n      </div>\n    </div>\n\n    <script>\n      // 核心数据\n\n      const data = [\n        { subject: '语文', score: 46 },\n\n        { subject: '数学', score: 80 },\n\n        { subject: '英语', score: 100 },\n      ];\n    </script>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
