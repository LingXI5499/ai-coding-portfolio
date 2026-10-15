window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["f4b4827b5c4ae6cc8816"] = {
  "id": "f4b4827b5c4ae6cc8816",
  "title": "10-随机点名.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "10-随机点名.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>Document</title>\n  </head>\n\n  <body>\n    <script>\n      let arr = ['赵云', '黄忠', '关羽', '张飞', '马超', '刘备', '曹操'];\n\n      // 1. 得到一个随机数， 作为数组的索引号， 这个随机数 0~6\n\n      let random = Math.floor(Math.random() * arr.length);\n\n      // 2. 页面输出数组里面的元素\n\n      document.write(arr[random]);\n\n      // 3. splice(起始位置(下标), 删除几个元素)\n\n      arr.splice(random, 1);\n\n      console.log(arr);\n    </script>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
