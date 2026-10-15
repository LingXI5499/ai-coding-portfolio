window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["57a1d0ab2e04d01ee28c"] = {
  "id": "57a1d0ab2e04d01ee28c",
  "title": "03-媒体查询-隐藏.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "03-媒体查询-隐藏.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    <title>隐藏效果</title>\n    <style>\n      * {\n        margin: 0;\n        padding: 0;\n      }\n\n      .box {\n        display: flex;\n      }\n\n      .left {\n        width: 300px;\n        height: 500px;\n        background-color: pink;\n      }\n\n      .main {\n        flex: 1;\n        height: 500px;\n        background-color: skyblue;\n      }\n\n      @media (max-width: 768px) {\n        .left {\n          display: none;\n        }\n      }\n    </style>\n  </head>\n  <body>\n    <div class=\"box\">\n      <div class=\"left\">left</div>\n      <div class=\"main\">\n        响应式网页效果响应式网页效果响应式网页效果响应式网页效果响应式网页效果响应式网页效果响应式网页效果响应式网页效果响应式网页效果响应式网页效果响应式网页效果响应式网页效果响应式网页效果响应式网页效果响应式网页效果响应式网页效果响应式网页效果响应式网页效果响应式网页效果响应式网页效果响应式网页效果响应式网页效果响应式网页效果响应式网页效果响应式网页效果响应式网页效果响应式网页效果响应式网页效果响应式网页效果响应式网页效果响应式网页效果响应式网页效果响应式网页效果响应式网页效果响应式网页效果响应式网页效果响应式网页效果响应式网页效果响应式网页效果响应式网页效果响应式网页效果响应式网页效果响应式网页效果响应式网页效果响应式网页效果响应式网页效果响应式网页效果响应式网页效果\n      </div>\n    </div>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
