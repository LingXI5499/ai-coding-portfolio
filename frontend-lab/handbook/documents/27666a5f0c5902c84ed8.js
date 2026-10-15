window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["27666a5f0c5902c84ed8"] = {
  "id": "27666a5f0c5902c84ed8",
  "title": "15-数组操作-删除.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "15-数组操作-删除.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>Document</title>\n  </head>\n\n  <body>\n    <script>\n      let arr = ['red', 'green', 'blue'];\n\n      // console.log(arr.pop()) // blue\n\n      // 1.pop() 删除最后一个元素\n\n      // arr.pop()\n\n      // arr.pop()\n\n      // console.log(arr)\n\n      // 2. shift() 删除第一个元素\n\n      // arr.shift()\n\n      // console.log(arr)\n\n      // 3. splice 删除指定元素  splice(起始位置-索引号, 删除几个)\n\n      arr.splice(1, 1); // 是从索引号1的位置开始删， 只删除1个\n\n      // arr.splice(1) // 从green 删除到最后\n\n      console.log(arr);\n    </script>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
