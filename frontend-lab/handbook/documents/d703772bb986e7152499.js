window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["d703772bb986e7152499"] = {
  "id": "d703772bb986e7152499",
  "title": "01-（案例）综合案例1-优秀学生信息表格.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "01-（案例）综合案例1-优秀学生信息表格.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>Document</title>\n  </head>\n\n  <body>\n    <table border=\"1\" width=\"400\" height=\"400\">\n      <!-- 表格整体的大标题 -->\n\n      <caption><h3>优秀学生信息表格</h3></caption>\n\n      <!-- 表格的头部 -->\n\n      <thead>\n        <tr>\n          <th>年级</th>\n\n          <th>姓名</th>\n\n          <th>学号</th>\n\n          <th>班级</th>\n        </tr>\n      </thead>\n\n      <!-- 表格的主体 -->\n\n      <tbody>\n        <tr>\n          <!-- 保留 -->\n\n          <td rowspan=\"2\">高三</td>\n\n          <td>张三</td>\n\n          <td>110</td>\n\n          <td>三年二班</td>\n        </tr>\n\n        <tr>\n          <!-- 删除 -->\n\n          <!-- <td>高三</td> -->\n\n          <td>赵四</td>\n\n          <td>120</td>\n\n          <td>三年三班</td>\n        </tr>\n      </tbody>\n\n      <!-- 表格的底部 -->\n\n      <tfoot>\n        <tr>\n          <td>评语</td>\n\n          <!-- 保留 -->\n\n          <td colspan=\"3\">你们都很优秀</td>\n\n          <!-- 统统删除掉 -->\n\n          <!-- <td>你们都很优秀</td> -->\n\n          <!-- <td>你们都很优秀</td> -->\n        </tr>\n      </tfoot>\n    </table>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
