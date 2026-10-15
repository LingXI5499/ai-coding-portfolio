window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["3bbf97333f6e5bbc6833"] = {
  "id": "3bbf97333f6e5bbc6833",
  "title": "06-立体呈现.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "06-立体呈现.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    <title>立体呈现</title>\n    <style>\n      .cube {\n        position: relative;\n        width: 200px;\n        height: 200px;\n        margin: 100px auto;\n        /* background-color: pink; */\n        transition: all 2s;\n\n        transform-style: preserve-3d;\n\n        /* 旋转与案例效果无关，用来看前后移动的效果 */\n        /* transform: rotateY(89deg); */\n      }\n\n      .cube div {\n        position: absolute;\n        left: 0;\n        top: 0;\n        width: 200px;\n        height: 200px;\n      }\n\n      .front {\n        background-color: orange;\n        transform: translateZ(100px);\n      }\n\n      .back {\n        background-color: green;\n        transform: translateZ(-100px);\n      }\n\n      .cube:hover {\n        transform: rotateY(90deg);\n      }\n    </style>\n  </head>\n  <body>\n    <div class=\"cube\">\n      <div class=\"front\">前面</div>\n      <div class=\"back\">后面</div>\n    </div>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
