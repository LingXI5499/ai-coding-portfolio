window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["81b0c4db1ad3c00adfab"] = {
  "id": "81b0c4db1ad3c00adfab",
  "title": "03-绝对定位-居中.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "03-绝对定位-居中.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>绝对定位-居中</title>\n\n    <style>\n      img {\n        position: absolute;\n\n        left: 50%;\n\n        top: 50%;\n\n        /* margin-left: -265px;\n\n      margin-top: -127px; */\n\n        /* 方便： 50% 就是自己宽高的一半 */\n\n        transform: translate(-50%, -50%);\n      }\n    </style>\n  </head>\n\n  <body>\n    <img src=\"./images/login.webp\" alt=\"\" />\n  </body>\n</html>"
        }
      ]
    }
  ]
};
