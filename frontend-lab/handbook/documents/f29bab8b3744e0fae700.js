window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["f29bab8b3744e0fae700"] = {
  "id": "f29bab8b3744e0fae700",
  "title": "web APIs 第五天.xmind",
  "treatment": "思维导图主题树",
  "sections": [
    {
      "title": "主题树",
      "level": 1,
      "blocks": [
        {
          "type": "text",
          "text": "Web APIs\nday05-Bom操作\n目标： 能够利用JS操作浏览器,具备利用本地存储实现记录用户名的能力\nwindow\n1. window对象是一个全局对象，也可以说是JavaScript中的顶级对象\n2. 像document、alert()、console.log()这些都是window的属性，基本BOM的属性和方法都是window的。\n3. 所有通过var定义在全局作用域中的变量、函数都会变成window对象的属性和方法\n4. window对象下的属性和方法调用的时候可以省略window\n延时器和定时器\n延时器\n延迟一段时间之后才执行对应的代码\nlet timerId = setTimeout(回调函数, 延迟时间)\n清除延时器\nclearTimeout(timerId)\n注意点\n延时器需要等待,所以后面的代码先执行\n每一次调用延时器都会产生一个新的延时器\n定时器\n区别:执行的次数\n延时函数: 执行一次\n间歇函数:每隔一段时间就执行一次,除非手动清除\n案例：广告自动关闭\nlocation对象\n主要负责网页的地址栏\nlocation.href\n跳转页面\nlocation.reload()刷新\nlocaction.search\n?后面的内容\nlocaction.hash\n#后面的内容\n案例-成功自动跳转\nnavigator对象\n主要用来获取浏览器的信息（了解）\nnavigator.userAgent\nhistroy对象\n管理历史记录\nhistory.forward()\nhistory.back()\nhistory.go()\n本地存储\n作用: 可以将数据永久存储在本地(用户的电脑), 除非手动删除\n语法\n存\nlocalStorage.setItem('键', '值')\n取\nlocalStorage.getItem('键')\n删\nlocalStorage.removeItem('键')\n注意： 本地存储只能存储字符串\n存储复杂数据类型\n本地只能存储字符串,无法存储复杂数据类型.需要将复杂数据类型转换成JSON字符串,在存储到本地\n转换成JSON字符串的语法\nJSON.stringify(复杂数据类型)\n将复杂数据转换成JSON字符串\nJSON.parse(JSON字符串)\n将JSON字符串转换成对象\n案例：学生信息管理"
        }
      ]
    }
  ]
};
