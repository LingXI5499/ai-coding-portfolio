window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["13c81f2c824c8eb9258b"] = {
  "id": "13c81f2c824c8eb9258b",
  "title": "01-作业.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "01-作业.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>Document</title>\n  </head>\n\n  <body>\n    <script>\n      // 找出数组中 元素为10的下标，有则打印该下标，没有则打印 -1\n\n      // let arr = [88, 20, 10, 100, 50]\n\n      // let result = -1\n\n      // for (let i = 0; i < arr.length; i++) {\n\n      //   if (arr[i] === 10) {\n\n      //     result = i\n\n      //   }\n\n      // }\n\n      // 需求1：让用户输入五个有效年龄（0 - 100之间），放入数组中\n\n      //   - 必须输入五个有效年龄年龄，如果是无效年龄，则不能放入数组中\n\n      // arr.length  动态的\n\n      let arr = [];\n\n      while (arr.length < 5) {\n        let num = +prompt(`请输入第${arr.length + 1}个数据`);\n\n        arr.push(num);\n      }\n    </script>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
