window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["114fbbec25167914876d"] = {
  "id": "114fbbec25167914876d",
  "title": "11-String常见方法.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "11-String常见方法.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>Document</title>\n  </head>\n\n  <body>\n    <script>\n      //1. split 把字符串 转换为 数组  和 join() 相反\n\n      // const str = 'pink,red'\n\n      // const arr = str.split(',')\n\n      // console.log(arr)\n\n      // const str1 = '2022-4-8'\n\n      // const arr1 = str1.split('-')\n\n      // console.log(arr1)\n\n      // 2. 字符串的截取   substring(开始的索引号[， 结束的索引号])\n\n      // 2.1 如果省略 结束的索引号，默认取到最后\n\n      // 2.2 结束的索引号不包含想要截取的部分\n\n      // const str = '今天又要做核酸了'\n\n      // console.log(str.substring(5, 7))\n\n      // 3. startsWith 判断是不是以某个字符开头\n\n      // const str = 'pink老师上课中'\n\n      // console.log(str.startsWith('pink'))\n\n      // 4. includes 判断某个字符是不是包含在一个字符串里面\n\n      const str = '我是pink老师';\n\n      console.log(str.includes('pink')); // true\n    </script>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
