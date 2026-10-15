window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["a72a91881bb083ecad77"] = {
  "id": "a72a91881bb083ecad77",
  "title": "属性选择器.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "属性选择器.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>Document</title>\n\n    <style>\n      /* input[value] {\n\n      color: red;\n\n    } */\n\n      input[type='text'] {\n        color: red;\n      }\n    </style>\n  </head>\n\n  <body>\n    <input type=\"text\" value=\"123\" data-id=\"0\" data-name=\"andy\" />\n\n    <input type=\"password\" />\n\n    <script>\n      const input = document.querySelector('input[value]');\n\n      // console.log(input)\n\n      console.log(input.dataset); // 自定义属性集合\n\n      console.log(input.dataset.name); // 自定义属性集合\n    </script>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
