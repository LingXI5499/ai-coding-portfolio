window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["805df55c5f6e7a46562d"] = {
  "id": "805df55c5f6e7a46562d",
  "title": "小米密码框.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "小米密码框.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>小米密码框</title>\n\n    <style>\n      .mi-form {\n        display: table;\n\n        width: 356px;\n\n        height: 60px;\n\n        border-radius: 4px;\n\n        border: 1px solid rgba(0, 0, 0, 0);\n\n        background-color: #f9f9f9;\n      }\n\n      .mi-control {\n        position: relative;\n\n        display: table-cell;\n\n        width: 294px;\n      }\n\n      .mi-input {\n        box-sizing: border-box;\n\n        width: 100%;\n\n        height: 60px;\n\n        border: 0;\n\n        padding: 30px 20px 10px;\n\n        outline: none;\n\n        background: none;\n\n        appearance: none;\n\n        font-size: 17px;\n\n        font-family: 'Noto Color Emoji';\n\n        color: #333;\n\n        line-height: 20px;\n      }\n\n      .mi-control label {\n        user-select: none;\n\n        position: absolute;\n\n        top: 20px;\n\n        left: 20px;\n\n        height: 20px;\n\n        font-weight: 400;\n\n        font-size: 17px;\n\n        color: rgba(0, 0, 0, 0.4);\n\n        line-height: 20px;\n\n        transition:\n          top 0.15s cubic-bezier(0.4, 0, 0.2, 1),\n          font-size 0.15s cubic-bezier(0.4, 0, 0.2, 1),\n          color 0.15s cubic-bezier(0.4, 0, 0.2, 1);\n\n        max-width: calc(100% - 20px);\n\n        text-overflow: ellipsis;\n\n        white-space: nowrap;\n\n        overflow: hidden;\n      }\n\n      .mi-control label.above {\n        top: 6px;\n\n        font-size: 12px;\n\n        color: #aaa;\n      }\n\n      .mi-password {\n        display: table-cell;\n\n        width: 60px;\n\n        color: rgba(0, 0, 0, 0.85);\n\n        font-size: 14px;\n\n        vertical-align: middle;\n      }\n\n      .mi-password svg {\n        width: 20px;\n\n        height: 20px;\n\n        margin: 10px 20px;\n      }\n    </style>\n  </head>\n\n  <body>\n    <div class=\"mi-form\">\n      <div class=\"mi-control\">\n        <input type=\"password\" class=\"mi-input\" />\n\n        <label>密码</label>\n      </div>\n\n      <div class=\"mi-password\">\n        <svg>o</svg>\n      </div>\n    </div>\n\n    <script></script>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
