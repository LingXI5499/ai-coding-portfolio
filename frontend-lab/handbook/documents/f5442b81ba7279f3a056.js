window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["f5442b81ba7279f3a056"] = {
  "id": "f5442b81ba7279f3a056",
  "title": "6-forEach的拍错题.html",
  "treatment": "排错练习（不自动执行）",
  "sections": [
    {
      "title": "6-forEach的拍错题.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    <title>商品渲染</title>\n  </head>\n\n  <body>\n    <script>\n      // 以下代码是否有问题，如果有，如何修改\n      const arr = [1,2,3,4,5]\n\n      const res = arr.forEach(item,index, arr) {\n        console.log(item);\n      }\n    </script>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
