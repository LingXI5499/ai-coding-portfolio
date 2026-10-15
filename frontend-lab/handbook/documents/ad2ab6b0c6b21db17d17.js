window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["ad2ab6b0c6b21db17d17"] = {
  "id": "ad2ab6b0c6b21db17d17",
  "title": "13-超链接.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "13-超链接.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>超链接</title>\n  </head>\n\n  <body>\n    <a href=\"https://www.baidu.com/\">跳转到百度</a>\n\n    <!-- 跳转到本地文件：相对路径查找 -->\n\n    <!-- target=\"_blank\" 新窗口跳转页面 -->\n\n    <a href=\"./01-标签的写法.html\" target=\"_blank\">跳转到01-标签的写法</a>\n\n    <!-- 开发初期，不知道超链接的跳转地址，href属性值写#，表示空链接，不会跳转 -->\n\n    <a href=\"#\">空链接</a>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
