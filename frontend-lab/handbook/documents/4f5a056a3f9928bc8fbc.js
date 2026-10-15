window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["4f5a056a3f9928bc8fbc"] = {
  "id": "4f5a056a3f9928bc8fbc",
  "title": "11-数组操作-改.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "11-数组操作-改.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>Document</title>\n  </head>\n\n  <body>\n    <script>\n      // let arr = []\n\n      // console.log(arr)\n\n      // // console.log(arr[0])  // undefined\n\n      // arr[0] = 1\n\n      // arr[1] = 5\n\n      // console.log(arr)\n\n      let arr = ['pink', 'red', 'green'];\n\n      // 修改\n\n      // arr[0] = 'hotpink'\n\n      // console.log(arr)\n\n      // 给所有的数组元素后面加个老师  修改\n\n      for (let i = 0; i < arr.length; i++) {\n        // console.log(arr[i])\n\n        arr[i] = arr[i] + '老师';\n      }\n\n      console.log(arr);\n    </script>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
