window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["a6e4fdf9c27b40f401db"] = {
  "id": "a6e4fdf9c27b40f401db",
  "title": "评论回车发布.html",
  "treatment": "排错练习（不自动执行）",
  "sections": [
    {
      "title": "评论回车发布.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>评论回车发布</title>\n\n    <style>\n      .wrapper {\n        min-width: 400px;\n\n        max-width: 800px;\n\n        display: flex;\n\n        justify-content: flex-end;\n      }\n\n      .avatar {\n        width: 48px;\n\n        height: 48px;\n\n        border-radius: 50%;\n\n        overflow: hidden;\n\n        background: url(./images/avatar.jpg) no-repeat center / cover;\n\n        margin-right: 20px;\n      }\n\n      .wrapper textarea {\n        outline: none;\n\n        border-color: transparent;\n\n        resize: none;\n\n        background: #f5f5f5;\n\n        border-radius: 4px;\n\n        flex: 1;\n\n        padding: 10px;\n\n        transition: all 0.5s;\n\n        height: 30px;\n      }\n\n      .wrapper textarea:focus {\n        border-color: #e4e4e4;\n\n        background: #fff;\n\n        height: 50px;\n      }\n\n      .wrapper button {\n        background: #00aeec;\n\n        color: #fff;\n\n        border: none;\n\n        border-radius: 4px;\n\n        margin-left: 10px;\n\n        width: 70px;\n\n        cursor: pointer;\n      }\n\n      .wrapper .total {\n        margin-right: 80px;\n\n        color: #999;\n\n        margin-top: 5px;\n\n        opacity: 0;\n\n        transition: all 0.5s;\n      }\n\n      .list {\n        min-width: 400px;\n\n        max-width: 800px;\n\n        display: flex;\n      }\n\n      .list .item {\n        width: 100%;\n\n        display: flex;\n      }\n\n      .list .item .info {\n        flex: 1;\n\n        border-bottom: 1px dashed #e4e4e4;\n\n        padding-bottom: 10px;\n      }\n\n      .list .item p {\n        margin: 0;\n      }\n\n      .list .item .name {\n        color: #fb7299;\n\n        font-size: 14px;\n\n        font-weight: bold;\n      }\n\n      .list .item .text {\n        color: #333;\n\n        padding: 10px 0;\n      }\n\n      .list .item .time {\n        color: #999;\n\n        font-size: 12px;\n      }\n    </style>\n  </head>\n\n  <body>\n    <div class=\"wrapper\">\n      <i class=\"avatar\"></i>\n\n      <textarea\n        id=\"tx\"\n        placeholder=\"发一条友善的评论\"\n        rows=\"2\"\n        maxlength=\"200\"\n      ></textarea>\n\n      <button>发布</button>\n    </div>\n\n    <div class=\"wrapper\">\n      <span class=\"total\">0/200字</span>\n    </div>\n\n    <div class=\"list\">\n      <div class=\"item\" style=\"display: none\">\n        <i class=\"avatar\"></i>\n\n        <div class=\"info\">\n          <p class=\"name\">清风徐来</p>\n\n          <p class=\"text\">\n            大家都辛苦啦，感谢各位大大的努力，能圆满完成真是太好了[笑哭][支持]\n          </p>\n\n          <p class=\"time\">2022-10-10 20:29:21</p>\n        </div>\n      </div>\n    </div>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
