window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["0e49be96f2ff6946427b"] = {
  "id": "0e49be96f2ff6946427b",
  "title": "09-子节点.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "09-子节点.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>Document</title>\n  </head>\n\n  <body>\n    <ul>\n      <li>1</li>\n\n      <li>2</li>\n\n      <li>3</li>\n\n      <li>4</li>\n\n      <li>5</li>\n    </ul>\n\n    <script>\n      // const ul = document.querySelector('ul')  // ul\n\n      // console.log(ul.children)  // 得到伪数组  选择的是 亲儿子\n\n      const li2 = document.querySelector('ul li:nth-child(2)');\n\n      console.log(li2.previousElementSibling); // 上一个兄弟\n\n      console.log(li2.nextElementSibling); // 下一个兄弟\n    </script>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
