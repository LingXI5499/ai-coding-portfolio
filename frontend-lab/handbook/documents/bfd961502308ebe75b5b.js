window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["bfd961502308ebe75b5b"] = {
  "id": "bfd961502308ebe75b5b",
  "title": "10-增加节点.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "10-增加节点.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>Document</title>\n  </head>\n\n  <body>\n    <ul>\n      <li>我是老大</li>\n    </ul>\n\n    <script>\n      // // 1. 创建节点\n\n      // const div = document.createElement('div')\n\n      // // console.log(div)\n\n      // 2. 追加节点  作为最后一个子元素\n\n      // document.body.appendChild(div)\n\n      const ul = document.querySelector('ul');\n\n      const li = document.createElement('li');\n\n      li.innerHTML = '我是li';\n\n      // ul.appendChild(li)\n\n      // ul.children\n\n      // 3. 追加节点\n\n      // insertBefore(插入的元素, 放到哪个元素的前面)\n\n      ul.insertBefore(li, ul.children[0]);\n    </script>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
