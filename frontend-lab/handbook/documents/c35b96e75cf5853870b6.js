window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["c35b96e75cf5853870b6"] = {
  "id": "c35b96e75cf5853870b6",
  "title": "04-获取DOM元素.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "04-获取DOM元素.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>Document</title>\n\n    <style>\n      .box {\n        width: 200px;\n\n        height: 200px;\n      }\n    </style>\n  </head>\n\n  <body>\n    <div class=\"box\">123</div>\n\n    <div class=\"box\">abc</div>\n\n    <p id=\"nav\">导航栏</p>\n\n    <ul class=\"nav\">\n      <li>测试1</li>\n\n      <li>测试2</li>\n\n      <li>测试3</li>\n    </ul>\n\n    <script>\n      // 1. 获取匹配的第一个元素\n\n      // const box = document.querySelector('div')\n\n      // const box = document.querySelector('.box')\n\n      // console.log(box)\n\n      // const nav = document.querySelector('#nav')\n\n      // console.log(nav)\n\n      // nav.style.color = 'red'\n\n      // 1. 我要获取第一个小 ulli\n\n      // const li = document.querySelector('ul li:first-child')\n\n      // console.log(li)\n\n      // 2. 选择所有的小li\n\n      // const lis = document.querySelectorAll('ul li')\n\n      // console.log(lis)\n\n      // 1.获取元素\n\n      const lis = document.querySelectorAll('.nav li');\n\n      // console.log(lis)\n\n      for (let i = 0; i < lis.length; i++) {\n        console.log(lis[i]); // 每一个小li对象\n      }\n\n      const p = document.querySelectorAll('#nav');\n\n      // console.log(p)\n\n      // p[0].style.color = 'red'\n    </script>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
