window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["c2501b7f4645bd709638"] = {
  "id": "c2501b7f4645bd709638",
  "title": "06-清除浮动-双伪元素法.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "06-清除浮动-双伪元素法.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>清除浮动-双伪元素法</title>\n\n    <style>\n      .father {\n        margin: 10px auto;\n\n        width: 1200px;\n\n        /* height: 300px; */\n\n        background-color: pink;\n      }\n\n      .left {\n        float: left;\n\n        width: 200px;\n\n        height: 300px;\n\n        background-color: skyblue;\n      }\n\n      .right {\n        float: right;\n\n        width: 950px;\n\n        height: 300px;\n\n        background-color: orange;\n      }\n\n      .bottom {\n        height: 100px;\n\n        background-color: brown;\n      }\n\n      /* before 解决外边距塌陷问题 */\n\n      /* 双伪元素法 */\n\n      .clearfix::before,\n      .clearfix::after {\n        content: '';\n\n        display: table;\n      }\n\n      /* after 清除浮动 */\n\n      .clearfix::after {\n        clear: both;\n      }\n    </style>\n  </head>\n\n  <body>\n    <div class=\"father clearfix\">\n      <div class=\"left\"></div>\n\n      <div class=\"right\"></div>\n    </div>\n\n    <div class=\"bottom\"></div>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
