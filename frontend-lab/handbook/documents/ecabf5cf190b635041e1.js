window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["ecabf5cf190b635041e1"] = {
  "id": "ecabf5cf190b635041e1",
  "title": "14-修改表单属性.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "14-修改表单属性.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>Document</title>\n  </head>\n\n  <body>\n    <!-- <input type=\"text\" value=\"电脑\"> -->\n\n    <input type=\"checkbox\" name=\"\" id=\"\" />\n\n    <button>点击</button>\n\n    <script>\n      // 1 获取元素\n\n      // const uname = document.querySelector('input')\n\n      // 2. 获取值  获取表单里面的值 用的  表单.value\n\n      // console.log(uname.value) // 电脑\n\n      // console.log(uname.innerHTML)  innertHTML 得不到表单的内容\n\n      // 3. 设置表单的值\n\n      // uname.value = '我要买电脑'\n\n      // console.log(uname.type)\n\n      // uname.type = 'password'\n\n      // 1. 获取\n\n      const ipt = document.querySelector('input');\n\n      // console.log(ipt.checked)  // false   只接受布尔值\n\n      ipt.checked = true;\n\n      // ipt.checked = 'true'  // 会选中，不提倡  有隐式转换\n\n      // 1.获取\n\n      const button = document.querySelector('button');\n\n      // console.log(button.disabled)  // 默认false 不禁用\n\n      button.disabled = true; // 禁用按钮\n    </script>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
