window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["aced102046f4bd872346"] = {
  "id": "aced102046f4bd872346",
  "title": "06-表格-合并单元格.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "06-表格-合并单元格.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>表格结构标签</title>\n  </head>\n\n  <body>\n    <table border=\"1\">\n      <thead>\n        <tr>\n          <th>姓名</th>\n\n          <th>语文</th>\n\n          <th>数学</th>\n\n          <th>总分</th>\n        </tr>\n      </thead>\n\n      <tbody>\n        <tr>\n          <td>张三</td>\n\n          <td>99</td>\n\n          <td rowspan=\"2\">100</td>\n\n          <td>199</td>\n        </tr>\n\n        <tr>\n          <td>李四</td>\n\n          <td>98</td>\n\n          <!-- <td>100</td> -->\n\n          <td>198</td>\n        </tr>\n      </tbody>\n\n      <tfoot>\n        <tr>\n          <td>总结</td>\n\n          <td colspan=\"3\">全市第一</td>\n\n          <!-- <td>全市第一</td>\n\n        <td>全市第一</td> -->\n        </tr>\n      </tfoot>\n    </table>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
