window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["59ede2a21c9adea5b894"] = {
  "id": "59ede2a21c9adea5b894",
  "title": "12-数字补0案例.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "12-数字补0案例.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>Document</title>\n  </head>\n\n  <body>\n    <script>\n      // let age = 18\n\n      // age = age + 1\n\n      //  age++\n\n      // 1. 用户输入\n\n      let num = prompt('请您输入一个数字:');\n\n      // 2. 判断输出- 小于10才补0\n\n      // num = num < 10 ? 0 + num : num\n\n      num = num >= 10 ? num : 0 + num;\n\n      alert(num);\n    </script>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
