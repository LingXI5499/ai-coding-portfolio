window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["2a0bd43896b8b1a10fdd"] = {
  "id": "2a0bd43896b8b1a10fdd",
  "title": "综合案例-根据数据生成柱形图素材.html",
  "treatment": "排错练习（不自动执行）",
  "sections": [
    {
      "title": "综合案例-根据数据生成柱形图素材.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>Document</title>\n\n    <style>\n      * {\n        margin: 0;\n\n        padding: 0;\n      }\n\n      .box {\n        display: flex;\n\n        width: 700px;\n\n        height: 300px;\n\n        border-left: 1px solid pink;\n\n        border-bottom: 1px solid pink;\n\n        margin: 50px auto;\n\n        justify-content: space-around;\n\n        align-items: flex-end;\n\n        text-align: center;\n      }\n\n      .box > div {\n        display: flex;\n\n        width: 50px;\n\n        background-color: pink;\n\n        flex-direction: column;\n\n        justify-content: space-between;\n      }\n\n      .box div span {\n        margin-top: -20px;\n      }\n\n      .box div h4 {\n        margin-bottom: -35px;\n\n        width: 70px;\n\n        margin-left: -10px;\n      }\n    </style>\n  </head>\n\n  <body>\n    <div class=\"box\">\n      <div style=\"height: 123px\">\n        <span>123</span>\n\n        <h4>第1季度</h4>\n      </div>\n\n      <div style=\"height: 156px\">\n        <span>156</span>\n\n        <h4>第2季度</h4>\n      </div>\n\n      <div style=\"height: 120px\">\n        <span>120</span>\n\n        <h4>第3季度</h4>\n      </div>\n\n      <div style=\"height: 210px\">\n        <span>210</span>\n\n        <h4>第4季度</h4>\n      </div>\n    </div>\n\n    <script></script>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
