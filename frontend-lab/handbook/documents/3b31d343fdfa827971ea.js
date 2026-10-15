window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["3b31d343fdfa827971ea"] = {
  "id": "3b31d343fdfa827971ea",
  "title": "10-本地存储复杂数据类型.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "10-本地存储复杂数据类型.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>Document</title>\n  </head>\n\n  <body>\n    <script>\n      const obj = {\n        uname: 'pink老师',\n\n        age: 18,\n\n        gender: '女',\n      };\n\n      // // 存储 复杂数据类型  无法直接使用\n\n      // localStorage.setItem('obj', obj)  [object object]\n\n      // // 取\n\n      // console.log(localStorage.getItem('obj'))\n\n      // 1.复杂数据类型存储必须转换为 JSON字符串存储\n\n      localStorage.setItem('obj', JSON.stringify(obj));\n\n      // JSON 对象  属性和值有引号，而是引号统一是双引号\n\n      // {\"uname\":\"pink老师\",\"age\":18,\"gender\":\"女\"}\n\n      // 取\n\n      // console.log(typeof localStorage.getItem('obj'))\n\n      // 2. 把JSON字符串转换为 对象\n\n      const str = localStorage.getItem('obj'); // {\"uname\":\"pink老师\",\"age\":18,\"gender\":\"女\"}\n\n      console.log(JSON.parse(str));\n    </script>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
