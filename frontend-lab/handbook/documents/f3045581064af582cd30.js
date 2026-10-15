window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["f3045581064af582cd30"] = {
  "id": "f3045581064af582cd30",
  "title": "07-事件委托.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "07-事件委托.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>Document</title>\n  </head>\n\n  <body>\n    <ul>\n      <li>第1个孩子</li>\n\n      <li>第2个孩子</li>\n\n      <li>第3个孩子</li>\n\n      <li>第4个孩子</li>\n\n      <li>第5个孩子</li>\n\n      <p>我不需要变色</p>\n    </ul>\n\n    <script>\n      // 点击每个小li 当前li 文字变为红色\n\n      // 按照事件委托的方式  委托给父级，事件写到父级身上\n\n      // 1. 获得父元素\n\n      const ul = document.querySelector('ul');\n\n      ul.addEventListener('click', function (e) {\n        // alert(11)\n\n        // this.style.color = 'red'\n\n        // console.dir(e.target) // 就是我们点击的那个对象\n\n        // e.target.style.color = 'red'\n\n        // 我的需求，我们只要点击li才会有效果\n\n        if (e.target.tagName === 'LI') {\n          e.target.style.color = 'red';\n        }\n      });\n    </script>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
