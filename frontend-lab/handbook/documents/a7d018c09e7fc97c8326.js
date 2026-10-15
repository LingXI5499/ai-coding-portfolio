window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["a7d018c09e7fc97c8326"] = {
  "id": "a7d018c09e7fc97c8326",
  "title": "09-随机数函数.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "09-随机数函数.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>Document</title>\n  </head>\n\n  <body>\n    <script>\n      // 左闭右开 能取到 0 但是取不到 1 中间的一个随机小数\n\n      // console.log(Math.random())\n\n      // 0~ 10 之间的整数\n\n      // console.log(Math.floor(Math.random() * 11))\n\n      // let arr = ['red', 'green', 'blue']\n\n      // let random = Math.floor(Math.random() * arr.length)\n\n      // // console.log(random)\n\n      // console.log(arr[random])\n\n      // 取到 N ~ M 的随机整数\n\n      function getRandom(N, M) {\n        return Math.floor(Math.random() * (M - N + 1)) + N;\n      }\n\n      console.log(getRandom(4, 8));\n    </script>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
