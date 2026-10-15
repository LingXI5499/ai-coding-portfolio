window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["f690c5af08f6cc01caca"] = {
  "id": "f690c5af08f6cc01caca",
  "title": "02-（案例）综合案例2-卡片居中案例.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "02-（案例）综合案例2-卡片居中案例.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>Document</title>\n\n    <style>\n      /* 可以通过给body标签设置背景颜色完成设置浏览器的背景颜色 */\n\n      body {\n        background-color: #f5f5f5;\n      }\n\n      .box {\n        width: 234px;\n\n        height: 300px;\n\n        background-color: #fff;\n\n        /* 让内部的img和文本类型的元素水平居中 */\n\n        text-align: center;\n      }\n\n      .pic {\n        width: 160px;\n      }\n\n      .product {\n        height: 25px;\n\n        font-size: 14px;\n      }\n\n      .info {\n        height: 30px;\n\n        font-size: 12px;\n\n        color: #cccccc;\n      }\n\n      .price {\n        font-size: 14px;\n\n        color: #ffa500;\n      }\n    </style>\n  </head>\n\n  <body>\n    <div class=\"box\">\n      <img src=\"./images/car.jpg\" alt=\"\" class=\"pic\" />\n\n      <div class=\"product\">九号平衡车</div>\n\n      <div class=\"info\">成年人的玩具</div>\n\n      <div class=\"price\">1999元</div>\n    </div>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
