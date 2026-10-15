window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["6d8c7cada76193f12c42"] = {
  "id": "6d8c7cada76193f12c42",
  "title": "18-节流综合案例.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "18-节流综合案例.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <meta name=\"referrer\" content=\"never\" />\n\n    <title>综合案例</title>\n\n    <style>\n      * {\n        padding: 0;\n\n        margin: 0;\n\n        box-sizing: border-box;\n      }\n\n      .container {\n        width: 1200px;\n\n        margin: 0 auto;\n      }\n\n      .video video {\n        width: 100%;\n\n        padding: 20px 0;\n      }\n\n      .elevator {\n        position: fixed;\n\n        top: 280px;\n\n        right: 20px;\n\n        z-index: 999;\n\n        background: #fff;\n\n        border: 1px solid #e4e4e4;\n\n        width: 60px;\n      }\n\n      .elevator a {\n        display: block;\n\n        padding: 10px;\n\n        text-decoration: none;\n\n        text-align: center;\n\n        color: #999;\n      }\n\n      .elevator a.active {\n        color: #1286ff;\n      }\n\n      .outline {\n        padding-bottom: 300px;\n      }\n    </style>\n  </head>\n\n  <body>\n    <div class=\"container\">\n      <div class=\"header\">\n        <a href=\"http://pip.itcast.cn\">\n          <img src=\"https://pip.itcast.cn/img/logo_v3.29b9ba72.png\" alt=\"\" />\n        </a>\n      </div>\n\n      <div class=\"video\">\n        <video src=\"https://v.itheima.net/LapADhV6.mp4\" controls></video>\n      </div>\n\n      <div class=\"elevator\">\n        <a href=\"javascript:;\" data-ref=\"video\">视频介绍</a>\n\n        <a href=\"javascript:;\" data-ref=\"intro\">课程简介</a>\n\n        <a href=\"javascript:;\" data-ref=\"outline\">评论列表</a>\n      </div>\n    </div>\n\n    <script src=\"https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js\"></script>\n\n    <script>\n      // 1. 获取元素  要对视频进行操作\n\n      const video = document.querySelector('video');\n\n      video.ontimeupdate = _.throttle(() => {\n        // console.log(video.currentTime) 获得当前的视频时间\n\n        // 把当前的时间存储到本地存储\n\n        localStorage.setItem('currentTime', video.currentTime);\n      }, 1000);\n\n      // 打开页面触发事件，就从本地存储里面取出记录的时间， 赋值给  video.currentTime\n\n      video.onloadeddata = () => {\n        // console.log(111)\n\n        video.currentTime = localStorage.getItem('currentTime') || 0;\n      };\n    </script>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
