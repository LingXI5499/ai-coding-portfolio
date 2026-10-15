window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["abdfb0f6c6df6024124d"] = {
  "id": "abdfb0f6c6df6024124d",
  "title": "手风琴.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "手风琴.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html>\n  <head lang=\"en\">\n    <meta charset=\"UTF-8\" />\n\n    <title>手风琴</title>\n\n    <style>\n      ul {\n        list-style: none;\n      }\n\n      * {\n        margin: 0;\n\n        padding: 0;\n      }\n\n      div {\n        width: 1200px;\n\n        height: 400px;\n\n        margin: 50px auto;\n\n        border: 1px solid red;\n\n        overflow: hidden;\n      }\n\n      div li {\n        width: 240px;\n\n        height: 400px;\n\n        float: left;\n\n        transition: all 500ms;\n      }\n\n      div ul {\n        width: 1200px;\n      }\n    </style>\n  </head>\n\n  <body>\n    <div id=\"box\">\n      <ul>\n        <li>\n          <a href=\"#\">\n            <img src=\"./images/1.jpg\" alt=\"\" />\n          </a>\n        </li>\n\n        <li>\n          <a href=\"#\">\n            <img src=\"./images/2.jpg\" alt=\"\" />\n          </a>\n        </li>\n\n        <li>\n          <a href=\"#\">\n            <img src=\"./images/3.jpg\" alt=\"\" />\n          </a>\n        </li>\n\n        <li>\n          <a href=\"#\">\n            <img src=\"./images/4.jpg\" alt=\"\" />\n          </a>\n        </li>\n\n        <li>\n          <a href=\"#\">\n            <img src=\"./images/5.jpg\" alt=\"\" />\n          </a>\n        </li>\n      </ul>\n    </div>\n  </body>\n\n  <script>\n    // 获取元素\n\n    const box = document.querySelectorAll('li'); // lis = [li, li, li, li, li]\n\n    // 分析：\n\n    // 1、鼠标进入显示图片，\n\n    // 鼠标进入li，让当前li变成800，其他的li变成100\n\n    for (let i = 0; i < box.length; i++) {\n      box[i].addEventListener('mouseenter', function () {\n        for (let j = 0; j < box.length; j++) {\n          // 事件触发执行，为了让所有li变成240宽的\n\n          box[j].style.width = '100px';\n        }\n\n        this.style.width = '800px';\n      });\n\n      box[i].addEventListener('mouseleave', function () {\n        // 让所有的li变成240\n\n        for (let j = 0; j < box.length; j++) {\n          // 事件触发执行，为了让所有li变成240宽的\n\n          box[j].style.width = '240px';\n        }\n      });\n    }\n  </script>\n</html>"
        }
      ]
    }
  ]
};
