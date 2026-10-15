window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["0fe42566d1f722656d3e"] = {
  "id": "0fe42566d1f722656d3e",
  "title": "计算银行卡余额案例.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "计算银行卡余额案例.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>Document</title>\n\n    <style>\n      h2 {\n        text-align: center;\n      }\n\n      table {\n        width: 700px;\n\n        height: 90px;\n\n        margin: 0 auto;\n      }\n\n      table,\n      th,\n      td {\n        border: 1px solid #333;\n\n        border-collapse: collapse;\n\n        text-align: center;\n      }\n    </style>\n  </head>\n\n  <body>\n    <h2>2020年12月消费支出</h2>\n\n    <script>\n      // 1. 声明5个变量\n\n      const total = prompt('请输入银行卡总额:');\n\n      const waterBill = prompt('请输入水费:');\n\n      const dianBill = prompt('请输入电费:');\n\n      const netBill = prompt('请输入网费:');\n\n      const money = total - waterBill - dianBill - netBill;\n\n      // console.log(money)\n\n      document.write(`<table>\n\n        <tr>\n\n            <th>银行卡余额</th>\n\n            <th>水费</th>\n\n            <th>电费</th>\n\n            <th>网费</th>\n\n            <th>银行卡余额</th>\n\n        </tr>\n\n        <tr>\n\n            <td>${total}元</td>\n\n            <td>${waterBill}元</td>\n\n            <td>${dianBill}元</td>\n\n            <td>${netBill}元</td>\n\n            <td>${money}元</td>\n\n        </tr>\n\n    </table>`);\n    </script>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
