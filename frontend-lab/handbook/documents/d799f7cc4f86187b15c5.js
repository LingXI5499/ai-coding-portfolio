window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["d799f7cc4f86187b15c5"] = {
  "id": "d799f7cc4f86187b15c5",
  "title": "购物车效果.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "购物车效果.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>购物车</title>\n\n    <style>\n      /* 因为a是行内元素，直接设置宽高不生效，我们需要将a的显示模式转化 */\n\n      .cart {\n        display: block;\n\n        width: 67px;\n\n        height: 31px;\n\n        background-color: pink;\n\n        background-image: url('images/shopcar_01.png');\n      }\n\n      .cart:hover {\n        background-image: url('images/shopcar_02.png');\n      }\n    </style>\n  </head>\n\n  <body>\n    <a href=\"#\" class=\"cart\"></a>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
