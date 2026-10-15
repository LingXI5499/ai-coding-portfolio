window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["fa8d87100c1138beccae"] = {
  "id": "fa8d87100c1138beccae",
  "title": "01-全选按钮案例.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "01-全选按钮案例.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html>\n  <head lang=\"en\">\n    <meta charset=\"UTF-8\" />\n\n    <title></title>\n\n    <style>\n      * {\n        margin: 0;\n\n        padding: 0;\n      }\n\n      table {\n        border-collapse: collapse;\n\n        border-spacing: 0;\n\n        border: 1px solid #c0c0c0;\n\n        width: 500px;\n\n        margin: 100px auto;\n\n        text-align: center;\n      }\n\n      th {\n        background-color: #09c;\n\n        font: bold 16px '微软雅黑';\n\n        color: #fff;\n\n        height: 24px;\n      }\n\n      td {\n        border: 1px solid #d0d0d0;\n\n        color: #404060;\n\n        padding: 10px;\n      }\n\n      .allCheck {\n        width: 80px;\n      }\n    </style>\n  </head>\n\n  <body>\n    <table>\n      <tr>\n        <th class=\"allCheck\">\n          <input type=\"checkbox\" name=\"\" id=\"checkAll\" />\n          <span class=\"all\">全选</span>\n        </th>\n\n        <th>商品</th>\n\n        <th>商家</th>\n\n        <th>价格</th>\n      </tr>\n\n      <tr>\n        <td>\n          <input type=\"checkbox\" name=\"check\" class=\"ck\" />\n        </td>\n\n        <td>小米手机</td>\n\n        <td>小米</td>\n\n        <td>￥1999</td>\n      </tr>\n\n      <tr>\n        <td>\n          <input type=\"checkbox\" name=\"check\" class=\"ck\" />\n        </td>\n\n        <td>小米净水器</td>\n\n        <td>小米</td>\n\n        <td>￥4999</td>\n      </tr>\n\n      <tr>\n        <td>\n          <input type=\"checkbox\" name=\"check\" class=\"ck\" />\n        </td>\n\n        <td>小米电视</td>\n\n        <td>小米</td>\n\n        <td>￥5999</td>\n      </tr>\n    </table>\n\n    <script>\n      // 1. 获取大复选框\n\n      const checkAll = document.querySelector('#checkAll');\n\n      // 2. 获取所有的小复选框\n\n      const cks = document.querySelectorAll('.ck');\n\n      // 3. 点击大复选框  注册事件\n\n      checkAll.addEventListener('click', function () {\n        // 得到当前大复选框的选中状态\n\n        // console.log(checkAll.checked)  // 得到 是 true 或者是 false\n\n        // 4. 遍历所有的小复选框 让小复选框的checked  =  大复选框的 checked\n\n        for (let i = 0; i < cks.length; i++) {\n          cks[i].checked = this.checked;\n        }\n      });\n\n      // 5. 小复选框控制大复选框\n\n      for (let i = 0; i < cks.length; i++) {\n        // 5.1 给所有的小复选框添加点击事件\n\n        cks[i].addEventListener('click', function () {\n          // 判断选中的小复选框个数 是不是等于  总的小复选框个数\n\n          // 一定要写到点击里面，因为每次要获得最新的个数\n\n          // console.log(document.querySelectorAll('.ck:checked').length)\n\n          // console.log(document.querySelectorAll('.ck:checked').length === cks.length)\n\n          checkAll.checked =\n            document.querySelectorAll('.ck:checked').length === cks.length;\n        });\n      }\n    </script>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
