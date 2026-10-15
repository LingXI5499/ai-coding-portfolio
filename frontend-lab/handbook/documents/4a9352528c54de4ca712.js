window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["4a9352528c54de4ca712"] = {
  "id": "4a9352528c54de4ca712",
  "title": "18-forEach语法.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "18-forEach语法.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>Document</title>\n  </head>\n\n  <body>\n    <script>\n      // forEach 就是遍历  加强版的for循环  适合于遍历数组对象\n\n      const arr = ['red', 'green', 'pink'];\n\n      const result = arr.forEach(function (item, index) {\n        console.log(item); // 数组元素 red  green pink\n\n        console.log(index); // 索引号\n      });\n\n      // console.log(result)\n    </script>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
