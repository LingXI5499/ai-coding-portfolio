window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["0b8ed4a8420eeaeb3c4d"] = {
  "id": "0b8ed4a8420eeaeb3c4d",
  "title": "24-综合案例.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "24-综合案例.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>Document</title>\n\n    <style>\n      h2 {\n        text-align: center;\n      }\n\n      table {\n        /* 合并相邻边框 */\n\n        border-collapse: collapse;\n\n        height: 80px;\n\n        margin: 0 auto;\n\n        text-align: center;\n      }\n\n      th {\n        padding: 5px 30px;\n      }\n\n      table,\n      th,\n      td {\n        border: 1px solid #000;\n      }\n    </style>\n  </head>\n\n  <body>\n    <h2>订单确认</h2>\n\n    <script>\n      // 1 用户输入\n\n      let price = +prompt('请输入商品价格：');\n\n      let num = +prompt('请输入商品数量：');\n\n      let address = prompt('请输入收获地址：');\n\n      // 2.计算总额\n\n      let total = price * num;\n\n      // 3.页面打印渲染\n\n      document.write(`\n\n      <table>\n\n          <tr>\n\n            <th>商品名称</th>\n\n            <th>商品价格</th>\n\n            <th>商品数量</th>\n\n            <th>总价</th>\n\n            <th>收货地址</th>\n\n          </tr>\n\n          <tr>\n\n            <td>小米青春版PLUS</td>\n\n            <td>${price}元</td>\n\n            <td>${num}</td>\n\n            <td>${total}元</td>\n\n            <td>${address}</td>\n\n          </tr>\n\n        </table>\n\n    `);\n    </script>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
