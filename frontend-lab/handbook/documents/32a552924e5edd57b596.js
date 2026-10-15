window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["32a552924e5edd57b596"] = {
  "id": "32a552924e5edd57b596",
  "title": "10-小米搜索框.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "10-小米搜索框.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>Document</title>\n\n    <style>\n      * {\n        margin: 0;\n\n        padding: 0;\n\n        box-sizing: border-box;\n      }\n\n      ul {\n        list-style: none;\n      }\n\n      .mi {\n        position: relative;\n\n        width: 223px;\n\n        margin: 100px auto;\n      }\n\n      .mi input {\n        width: 223px;\n\n        height: 48px;\n\n        padding: 0 10px;\n\n        font-size: 14px;\n\n        line-height: 48px;\n\n        border: 1px solid #e0e0e0;\n\n        outline: none;\n      }\n\n      .mi .search {\n        border: 1px solid #ff6700;\n      }\n\n      .result-list {\n        display: none;\n\n        position: absolute;\n\n        left: 0;\n\n        top: 48px;\n\n        width: 223px;\n\n        border: 1px solid #ff6700;\n\n        border-top: 0;\n\n        background: #fff;\n      }\n\n      .result-list a {\n        display: block;\n\n        padding: 6px 15px;\n\n        font-size: 12px;\n\n        color: #424242;\n\n        text-decoration: none;\n      }\n\n      .result-list a:hover {\n        background-color: #eee;\n      }\n    </style>\n  </head>\n\n  <body>\n    <div class=\"mi\">\n      <input type=\"search\" placeholder=\"小米笔记本\" />\n\n      <ul class=\"result-list\">\n        <li><a href=\"#\">全部商品</a></li>\n\n        <li><a href=\"#\">小米11</a></li>\n\n        <li><a href=\"#\">小米10S</a></li>\n\n        <li><a href=\"#\">小米笔记本</a></li>\n\n        <li><a href=\"#\">小米手机</a></li>\n\n        <li><a href=\"#\">黑鲨4</a></li>\n\n        <li><a href=\"#\">空调</a></li>\n      </ul>\n    </div>\n\n    <script>\n      // 1. 获取元素\n\n      const input = document.querySelector('[type=search]');\n\n      const ul = document.querySelector('.result-list');\n\n      // console.log(input)\n\n      // 2. 监听事件 获得焦点\n\n      input.addEventListener('focus', function () {\n        // ul显示\n\n        ul.style.display = 'block';\n\n        // 添加一个带有颜色边框的类名\n\n        input.classList.add('search');\n      });\n\n      // 3. 监听事件 失去焦点\n\n      input.addEventListener('blur', function () {\n        ul.style.display = 'none';\n\n        input.classList.remove('search');\n      });\n    </script>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
