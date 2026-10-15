window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["1da89f8334267254cb88"] = {
  "id": "1da89f8334267254cb88",
  "title": "11-克隆节点.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "11-克隆节点.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>Document</title>\n  </head>\n\n  <body>\n    <ul>\n      <li>1</li>\n\n      <li>2</li>\n\n      <li>3</li>\n    </ul>\n\n    <script>\n      const ul = document.querySelector('ul');\n\n      // 1 克隆节点  元素.cloneNode(true)\n\n      // const li1 = ul.children[0].cloneNode(true)\n\n      // console.log(li1)\n\n      // 2. 追加\n\n      ul.appendChild(ul.children[0].cloneNode(true));\n    </script>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
