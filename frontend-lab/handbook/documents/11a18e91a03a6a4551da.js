window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["11a18e91a03a6a4551da"] = {
  "id": "11a18e91a03a6a4551da",
  "title": "16-定时器-间歇函数.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "16-定时器-间歇函数.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>Document</title>\n  </head>\n\n  <body>\n    <script>\n      // setInterval(函数, 间隔时间)\n\n      // setInterval(function () {\n\n      //   console.log('一秒执行一次')\n\n      // }, 1000)\n\n      function fn() {\n        console.log('一秒执行一次');\n      }\n\n      // setInterval(函数名, 间隔时间)  函数名不要加小括号\n\n      let n = setInterval(fn, 1000);\n\n      // setInterval('fn()', 1000)\n\n      console.log(n);\n\n      // 关闭定时器\n\n      clearInterval(n);\n\n      // let m = setInterval(function () {\n\n      //   console.log(11)\n\n      // }, 2000)\n\n      // console.log(m)\n\n      // const num = 10\n\n      // num = 10\n\n      // console.log(num)\n\n      let i = 1;\n\n      setInterval(function () {\n        i++;\n\n        document.write(`${i} `);\n      }, 200);\n    </script>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
