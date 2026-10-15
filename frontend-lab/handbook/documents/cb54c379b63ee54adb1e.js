window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["cb54c379b63ee54adb1e"] = {
  "id": "cb54c379b63ee54adb1e",
  "title": "01-电梯导航.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "01-电梯导航.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\" />\n\n    <title>Document</title>\n\n    <style>\n      * {\n        margin: 0;\n\n        padding: 0;\n      }\n\n      body {\n        height: 3000px;\n      }\n\n      .aside {\n        position: fixed;\n\n        left: 0;\n\n        top: 50%;\n\n        transform: translateY(-50%);\n      }\n\n      .item {\n        height: 40px;\n\n        line-height: 40px;\n\n        text-align: center;\n\n        padding: 0 10px;\n\n        cursor: pointer;\n      }\n\n      .active {\n        background-color: red;\n\n        color: #fff;\n      }\n\n      .content {\n        width: 660px;\n\n        margin: 400px auto;\n      }\n\n      .neirong {\n        height: 300px;\n\n        margin-bottom: 20px;\n\n        color: #fff;\n      }\n\n      .content1 {\n        background-color: red;\n      }\n\n      .content2 {\n        background-color: blue;\n      }\n\n      .content3 {\n        background-color: orange;\n      }\n\n      .content4 {\n        background-color: yellowgreen;\n      }\n    </style>\n  </head>\n\n  <body>\n    <div class=\"aside\">\n      <div class=\"item active\">男装/女装</div>\n\n      <div class=\"item\">儿童服装/游乐园</div>\n\n      <div class=\"item\">电子产品</div>\n\n      <div class=\"item\">电影/美食</div>\n    </div>\n\n    <div class=\"content\">\n      <div class=\"neirong content1\">男装/女装</div>\n\n      <div class=\"neirong content2\">儿童服装/游乐园</div>\n\n      <div class=\"neirong content3\">电子产品</div>\n\n      <div class=\"neirong content4\">电影/美食</div>\n    </div>\n\n    <script>\n      // 1. 获元取素\n\n      const items = document.querySelectorAll('.item');\n\n      // 内容的盒子获取\n\n      const neirongs = document.querySelectorAll('.neirong');\n\n      // 2. 左侧aside 模块 点击谁，谁高亮\n\n      for (let i = 0; i < items.length; i++) {\n        items[i].addEventListener('click', function () {\n          // 找到上一个active 移除类\n\n          document.querySelector('.aside .active').classList.remove('active');\n\n          // 点击谁谁添加类\n\n          this.classList.add('active');\n\n          // 3. 右侧内容跟随走动  让页面滚动到对应的offsetTop值位置\n\n          // console.log(neirongs[i].offsetTop) 不用给单位\n\n          document.documentElement.scrollTop = neirongs[i].offsetTop;\n        });\n      }\n    </script>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
