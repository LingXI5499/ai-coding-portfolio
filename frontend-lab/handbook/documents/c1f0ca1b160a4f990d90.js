window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["c1f0ca1b160a4f990d90"] = {
  "id": "c1f0ca1b160a4f990d90",
  "title": "05-修改对象内容.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "05-修改对象内容.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>Document</title>\n  </head>\n\n  <body>\n    <div class=\"box\">我是文字的内容</div>\n\n    <script>\n      // const obj = {\n\n      //   name: 'pink老师'\n\n      // }\n\n      // console.log(obj.name)\n\n      // obj.name = 'red老师'\n\n      // 1. 获取元素\n\n      const box = document.querySelector('.box');\n\n      // 2. 修改文字内容  对象.innerText 属性\n\n      // console.log(box.innerText)  // 获取文字内容\n\n      // // box.innerText = '我是一个盒子'  // 修改文字内容\n\n      // box.innerText = '<strong>我是一个盒子</strong>'  // 不解析标签\n\n      // 3. innerHTML 解析标签\n\n      console.log(box.innerHTML);\n\n      // box.innerHTML = '我要更换'\n\n      box.innerHTML = '<strong>我要更换</strong>';\n    </script>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
