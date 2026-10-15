window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["2942a588f409c4fc7ebd"] = {
  "id": "2942a588f409c4fc7ebd",
  "title": "10-伪数组转换为真数组.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "10-伪数组转换为真数组.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>Document</title>\n  </head>\n\n  <body>\n    <ul>\n      <li>1</li>\n\n      <li>2</li>\n\n      <li>3</li>\n    </ul>\n\n    <script>\n      //  Array.from(lis) 把伪数组转换为真数组\n\n      const lis = document.querySelectorAll('ul li');\n\n      // console.log(lis)\n\n      // lis.pop() 报错\n\n      const liss = Array.from(lis);\n\n      liss.pop();\n\n      console.log(liss);\n    </script>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
