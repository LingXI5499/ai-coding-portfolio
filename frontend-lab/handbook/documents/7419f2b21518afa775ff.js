window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["7419f2b21518afa775ff"] = {
  "id": "7419f2b21518afa775ff",
  "title": "18-递归的排错题.html",
  "treatment": "排错练习（不自动执行）",
  "sections": [
    {
      "title": "18-递归的排错题.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    <title>Document</title>\n  </head>\n  <body>\n    <script>\n      // 下面代码有bug，会有栈溢出的问题，是否正确\n      document.querySelector('.box').innerHTML = new Date().toLocaleString();\n      function getCurrentTime() {\n        document.querySelector('.box').innerHTML = new Date().toLocaleString();\n        setTimeout(getCurrentTime, 1000);\n      }\n      getCurrentTime();\n    </script>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
