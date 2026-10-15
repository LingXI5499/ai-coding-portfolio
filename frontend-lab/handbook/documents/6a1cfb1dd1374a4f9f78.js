window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["6a1cfb1dd1374a4f9f78"] = {
  "id": "6a1cfb1dd1374a4f9f78",
  "title": "06-随机抽奖案例.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "06-随机抽奖案例.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>年会抽奖</title>\n\n    <style>\n      .wrapper {\n        width: 840px;\n\n        height: 420px;\n\n        background: url(./images/bg01.jpg) no-repeat center / cover;\n\n        padding: 100px 250px;\n\n        box-sizing: border-box;\n      }\n    </style>\n  </head>\n\n  <body>\n    <div class=\"wrapper\">\n      <strong>传智教育年会抽奖</strong>\n\n      <h1>\n        一等奖：\n        <span id=\"one\">???</span>\n      </h1>\n\n      <h3>\n        二等奖：\n        <span id=\"two\">???</span>\n      </h3>\n\n      <h5>\n        三等奖：\n        <span id=\"three\">???</span>\n      </h5>\n    </div>\n\n    <script>\n      // 1.声明数组\n\n      const personArr = ['周杰伦', '刘德华', '周星驰', 'Pink老师', '张学友'];\n\n      // 2. 先做一等奖\n\n      // 2.1 随机数 数组的下标\n\n      const random = Math.floor(Math.random() * personArr.length);\n\n      // console.log(personArr[random])\n\n      // 2.2 获取one 元素\n\n      const one = document.querySelector('#one');\n\n      // 2.3 把名字给 one\n\n      one.innerHTML = personArr[random];\n\n      // 2.4 删除数组这个名字\n\n      personArr.splice(random, 1);\n\n      // console.log(personArr)\n\n      // 3. 二等奖\n\n      // 2.1 随机数 数组的下标\n\n      const random2 = Math.floor(Math.random() * personArr.length);\n\n      // console.log(personArr[random])\n\n      // 2.2 获取one 元素\n\n      const two = document.querySelector('#two');\n\n      // 2.3 把名字给 one\n\n      two.innerHTML = personArr[random2];\n\n      // 2.4 删除数组这个名字\n\n      personArr.splice(random2, 1);\n\n      // 4. 三等奖\n\n      // 2.1 随机数 数组的下标\n\n      const random3 = Math.floor(Math.random() * personArr.length);\n\n      // console.log(personArr[random])\n\n      // 2.2 获取one 元素\n\n      const three = document.querySelector('#three');\n\n      // 2.3 把名字给 one\n\n      three.innerHTML = personArr[random3];\n\n      // 2.4 删除数组这个名字\n\n      personArr.splice(random3, 1);\n    </script>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
