window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["e030ab288e05bb0ac483"] = {
  "id": "e030ab288e05bb0ac483",
  "title": "03-dom对象.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "03-dom对象.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>Document</title>\n  </head>\n\n  <body>\n    <div>123</div>\n\n    <script>\n      const div = document.querySelector('div');\n\n      // 打印对象\n\n      console.dir(div); // dom 对象\n    </script>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
