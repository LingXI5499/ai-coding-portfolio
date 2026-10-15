window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["29ab57065b9b19f142b9"] = {
  "id": "29ab57065b9b19f142b9",
  "title": "12-删除节点.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "12-删除节点.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>Document</title>\n\n    <style>\n      .box {\n        display: none;\n      }\n    </style>\n  </head>\n\n  <body>\n    <div class=\"box\">123</div>\n\n    <ul>\n      <li>没用了</li>\n    </ul>\n\n    <script>\n      const ul = document.querySelector('ul');\n\n      // 删除节点  父元素.removeChlid(子元素)\n\n      ul.removeChild(ul.children[0]);\n    </script>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
