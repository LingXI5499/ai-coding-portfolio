window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["dc534c1c6c5283d0a7f4"] = {
  "id": "dc534c1c6c5283d0a7f4",
  "title": "10-flex布局-主轴对齐方式.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "10-flex布局-主轴对齐方式.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>flex布局-主轴对齐方式</title>\n\n    <style>\n      .box {\n        display: flex;\n\n        /* justify-content: flex-start; */\n\n        /* justify-content: flex-end; */\n\n        /* 居中 */\n\n        /* justify-content: center; */\n\n        /* 父级剩余的尺寸分配成间距 */\n\n        /* 弹性盒子之间的间距相等 */\n\n        /* justify-content: space-between; */\n\n        /* 间距出现在弹性盒子两侧 */\n\n        /* 视觉效果：弹性盒子之间的间距是两端间距的2倍 */\n\n        /* justify-content: space-around; */\n\n        /* 各个间距都相等 */\n\n        justify-content: space-evenly;\n\n        height: 300px;\n\n        border: 1px solid #000;\n      }\n\n      .box div {\n        width: 200px;\n\n        height: 100px;\n\n        background-color: pink;\n      }\n    </style>\n  </head>\n\n  <body>\n    <div class=\"box\">\n      <div>1</div>\n\n      <div>2</div>\n\n      <div>3</div>\n    </div>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
