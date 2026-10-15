window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["979a2bc080dc04617be4"] = {
  "id": "979a2bc080dc04617be4",
  "title": "16-综合案例.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "16-综合案例.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>Document</title>\n  </head>\n\n  <body>\n    <script>\n      // age = age + 1\n\n      // 1. 用户输入\n\n      let second = +prompt('请输入秒数:');\n\n      // 2.封装函数\n\n      function getTime(t) {\n        // console.log(t)  // 总的秒数\n\n        // 3. 转换\n\n        // 小时：  h = parseInt(总秒数 / 60 / 60 % 24)\n\n        // 分钟：  m = parseInt(总秒数 / 60 % 60)\n\n        // 秒数: s = parseInt(总秒数 % 60)\n\n        let h = parseInt((t / 60 / 60) % 24);\n\n        let m = parseInt((t / 60) % 60);\n\n        let s = parseInt(t % 60);\n\n        h = h < 10 ? '0' + h : h;\n\n        m = m < 10 ? '0' + m : m;\n\n        s = s < 10 ? '0' + s : s;\n\n        // console.log(h, m, s)\n\n        return `转换完毕之后是${h}小时${m}分${s}秒`;\n      }\n\n      let str = getTime(second);\n\n      document.write(str);\n\n      console.log(h);\n    </script>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
