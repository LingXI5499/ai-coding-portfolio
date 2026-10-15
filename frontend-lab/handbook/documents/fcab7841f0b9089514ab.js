window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["fcab7841f0b9089514ab"] = {
  "id": "fcab7841f0b9089514ab",
  "title": "README.md",
  "treatment": "章节知识与练习",
  "sections": [
    {
      "title": "Web APIs - 第5天笔记",
      "trail": [
        "Web APIs - 第5天笔记"
      ],
      "level": 1,
      "line": 1,
      "blocks": [
        {
          "type": "text",
          "text": "> 目标： 能够利用JS操作浏览器,具备利用本地存储实现学生就业表的能力\n\n\n\n- BOM操作\n\n- 综合案例"
        }
      ]
    },
    {
      "title": "js组成",
      "trail": [
        "Web APIs - 第5天笔记",
        "js组成"
      ],
      "level": 2,
      "line": 17,
      "blocks": [
        {
          "type": "text",
          "text": "JavaScript的组成\n\n\n\n- ECMAScript:\n\n  - 规定了js基础语法核心知识。\n\n  - 比如：变量、分支语句、循环语句、对象等等\n\n\n\n\n\n- Web APIs :\n\n  - DOM   文档对象模型， 定义了一套操作HTML文档的API\n\n  - BOM   浏览器对象模型，定义了一套操作浏览器窗口的API\n\n\n\n [课程配图见原资料]"
        }
      ]
    },
    {
      "title": "window对象",
      "trail": [
        "Web APIs - 第5天笔记",
        "window对象"
      ],
      "level": 2,
      "line": 47,
      "blocks": [
        {
          "type": "text",
          "text": "**BOM** (Browser Object Model ) 是浏览器对象模型\n\n\n\n- window对象是一个全局对象，也可以说是JavaScript中的顶级对象\n\n- 像document、alert()、console.log()这些都是window的属性，基本BOM的属性和方法都是window的\n\n- 所有通过var定义在全局作用域中的变量、函数都会变成window对象的属性和方法\n\n- window对象下的属性和方法调用的时候可以省略window\n\n\n\n [课程配图见原资料]"
        }
      ]
    },
    {
      "title": "定时器-延迟函数",
      "trail": [
        "Web APIs - 第5天笔记",
        "定时器-延迟函数"
      ],
      "level": 2,
      "line": 69,
      "blocks": [
        {
          "type": "text",
          "text": "JavaScript 内置的一个用来让代码延迟执行的函数，叫 setTimeout\n\n\n\n**语法：**"
        },
        {
          "type": "code",
          "language": "javascript",
          "text": "setTimeout(回调函数, 延迟时间);"
        },
        {
          "type": "text",
          "text": "setTimeout 仅仅只执行一次，所以可以理解为就是把一段代码延迟执行, 平时省略window\n\n\n\n间歇函数 setInterval : 每隔一段时间就执行一次， , 平时省略window\n\n\n\n清除延时函数："
        },
        {
          "type": "code",
          "language": "javascript",
          "text": "clearTimeout(timerId);"
        },
        {
          "type": "text",
          "text": ">注意点\n\n>\n\n>1. 延时函数需要等待,所以后面的代码先执行\n\n>2. 返回值是一个正整数，表示定时器的编号"
        },
        {
          "type": "code",
          "language": "html",
          "text": "<body>\n  <script>\n    // 定时器之延迟函数\n\n    // 1. 开启延迟函数\n\n    let timerId = setTimeout(function () {\n      console.log('我只执行一次');\n    }, 3000);\n\n    // 1.1 延迟函数返回的还是一个正整数数字，表示延迟函数的编号\n\n    console.log(timerId);\n\n    // 1.2 延迟函数需要等待时间，所以下面的代码优先执行\n\n    // 2. 关闭延迟函数\n\n    clearTimeout(timerId);\n  </script>\n</body>"
        }
      ]
    },
    {
      "title": "location对象",
      "trail": [
        "Web APIs - 第5天笔记",
        "location对象"
      ],
      "level": 2,
      "line": 163,
      "blocks": [
        {
          "type": "text",
          "text": "location (地址) 它拆分并保存了 URL 地址的各个组成部分， 它是一个对象\n\n\n\n| 属性/方法 | 说明                                                 |\n\n| --------- | ---------------------------------------------------- |\n\n| href      | 属性，获取完整的 URL 地址，赋值时用于地址的跳转      |\n\n| search    | 属性，获取地址中携带的参数，符号 ？后面部分          |\n\n| hash      | 属性，获取地址中的啥希值，符号 # 后面部分            |\n\n| reload()  | 方法，用来刷新当前页面，传入参数 true 时表示强制刷新 |"
        },
        {
          "type": "code",
          "language": "html",
          "text": "<body>\n  <form>\n    <input type=\"text\" name=\"search\" />\n    <button>搜索</button>\n  </form>\n\n  <a href=\"#/music\">音乐</a>\n\n  <a href=\"#/download\">下载</a>\n\n  <button class=\"reload\">刷新页面</button>\n\n  <script>\n    // location 对象\n\n    // 1. href属性 （重点） 得到完整地址，赋值则是跳转到新地址\n\n    console.log(location.href);\n\n    // location.href = 'http://www.itcast.cn'\n\n    // 2. search属性  得到 ? 后面的地址\n\n    console.log(location.search); // ?search=笔记本\n\n    // 3. hash属性  得到 # 后面的地址\n\n    console.log(location.hash);\n\n    // 4. reload 方法  刷新页面\n\n    const btn = document.querySelector('.reload');\n\n    btn.addEventListener('click', function () {\n      // location.reload() // 页面刷新\n\n      location.reload(true); // 强制页面刷新 ctrl+f5\n    });\n  </script>\n</body>"
        }
      ]
    },
    {
      "title": "navigator对象",
      "trail": [
        "Web APIs - 第5天笔记",
        "navigator对象"
      ],
      "level": 2,
      "line": 247,
      "blocks": [
        {
          "type": "text",
          "text": "navigator是对象，该对象下记录了浏览器自身的相关信息\n\n\n\n常用属性和方法：\n\n\n\n- 通过 userAgent 检测浏览器的版本及平台"
        },
        {
          "type": "code",
          "language": "javascript",
          "text": "// 检测 userAgent（浏览器信息）\n\n(function () {\n  const userAgent = navigator.userAgent;\n\n  // 验证是否为Android或iPhone\n\n  const android = userAgent.match(/(Android);?[\\s\\/]+([\\d.]+)?/);\n\n  const iphone = userAgent.match(/(iPhone\\sOS)\\s([\\d_]+)/);\n\n  // 如果是Android或iPhone，则跳转至移动站点\n\n  if (android || iphone) {\n    location.href = 'http://m.itcast.cn';\n  }\n})();"
        }
      ]
    },
    {
      "title": "histroy对象",
      "trail": [
        "Web APIs - 第5天笔记",
        "histroy对象"
      ],
      "level": 2,
      "line": 289,
      "blocks": [
        {
          "type": "text",
          "text": "history (历史)是对象，主要管理历史记录， 该对象与浏览器地址栏的操作相对应，如前进、后退等\n\n\n\n**使用场景**\n\n\n\nhistory对象一般在实际开发中比较少用，但是会在一些OA 办公系统中见到。\n\n\n\n [课程配图见原资料]\n\n\n\n常见方法：\n\n\n\n [课程配图见原资料]"
        },
        {
          "type": "code",
          "language": "html",
          "text": "<body>\n  <button class=\"back\">←后退</button>\n\n  <button class=\"forward\">前进→</button>\n\n  <script>\n    // histroy对象\n\n    // 1.前进\n\n    const forward = document.querySelector('.forward');\n\n    forward.addEventListener('click', function () {\n      // history.forward()\n\n      history.go(1);\n    });\n\n    // 2.后退\n\n    const back = document.querySelector('.back');\n\n    back.addEventListener('click', function () {\n      // history.back()\n\n      history.go(-1);\n    });\n  </script>\n</body>"
        }
      ]
    },
    {
      "title": "本地存储（今日重点）",
      "trail": [
        "Web APIs - 第5天笔记",
        "本地存储（今日重点）"
      ],
      "level": 2,
      "line": 365,
      "blocks": [
        {
          "type": "text",
          "text": "本地存储：将数据存储在本地浏览器中\n\n\n\n常见的使用场景：\n\n\n\n<https://todomvc.com/examples/vanilla-es6/>    页面刷新数据不丢失\n\n\n\n好处：\n\n\n\n1、页面刷新或者关闭不丢失数据，实现数据持久化\n\n\n\n2、容量较大，sessionStorage和 localStorage 约 5M 左右"
        }
      ]
    },
    {
      "title": "localStorage（重点）",
      "trail": [
        "Web APIs - 第5天笔记",
        "本地存储（今日重点）",
        "localStorage（重点）"
      ],
      "level": 3,
      "line": 393,
      "blocks": [
        {
          "type": "text",
          "text": "**作用:** 数据可以长期保留在本地浏览器中，刷新页面和关闭页面，数据也不会丢失\n\n\n\n**特性：**以键值对的形式存储，并且存储的是字符串， 省略了window\n\n\n\n[课程配图见原资料]"
        },
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>本地存储-localstorage</title>\n  </head>\n\n  <body>\n    <script>\n      // 本地存储 - localstorage 存储的是字符串\n\n      // 1. 存储\n\n      localStorage.setItem('age', 18);\n\n      // 2. 获取\n\n      console.log(typeof localStorage.getItem('age'));\n\n      // 3. 删除\n\n      localStorage.removeItem('age');\n    </script>\n  </body>\n</html>"
        }
      ]
    },
    {
      "title": "sessionStorage（了解）",
      "trail": [
        "Web APIs - 第5天笔记",
        "本地存储（今日重点）",
        "sessionStorage（了解）"
      ],
      "level": 3,
      "line": 465,
      "blocks": [
        {
          "type": "text",
          "text": "特性：\n\n\n\n- 用法跟localStorage基本相同\n\n- 区别是：当页面浏览器被关闭时，存储在 sessionStorage 的数据会被清除\n\n\n\n存储：sessionStorage.setItem(key,value)\n\n\n\n获取：sessionStorage.getItem(key)\n\n\n\n删除：sessionStorage.removeItem(key)"
        }
      ]
    },
    {
      "title": "localStorage 存储复杂数据类型",
      "trail": [
        "Web APIs - 第5天笔记",
        "本地存储（今日重点）",
        "localStorage 存储复杂数据类型"
      ],
      "level": 3,
      "line": 491,
      "blocks": [
        {
          "type": "text",
          "text": "**问题：**本地只能存储字符串,无法存储复杂数据类型.\n\n\n\n**解决：**需要将复杂数据类型转换成 JSON字符串,在存储到本地\n\n\n\n**语法：**JSON.stringify(复杂数据类型)\n\n\n\nJSON字符串：\n\n\n\n- 首先是1个字符串\n\n- 属性名使用双引号引起来，不能单引号\n\n- 属性值如果是字符串型也必须双引号"
        },
        {
          "type": "code",
          "language": "html",
          "text": "<body>\n  <script>\n    // 本地存储复杂数据类型\n\n    const goods = {\n      name: '小米',\n\n      price: 1999,\n    };\n\n    // localStorage.setItem('goods', goods)\n\n    // console.log(localStorage.getItem('goods'))\n\n    // 1. 把对象转换为JSON字符串  JSON.stringify\n\n    localStorage.setItem('goods', JSON.stringify(goods));\n\n    // console.log(typeof localStorage.getItem('goods'))\n  </script>\n</body>"
        },
        {
          "type": "text",
          "text": "**问题：**因为本地存储里面取出来的是字符串，不是对象，无法直接使用\n\n\n\n**解决： **把取出来的字符串转换为对象\n\n\n\n**语法：**JSON.parse(JSON字符串)"
        },
        {
          "type": "code",
          "language": "html",
          "text": "<body>\n  <script>\n    // 本地存储复杂数据类型\n\n    const goods = {\n      name: '小米',\n\n      price: 1999,\n    };\n\n    // localStorage.setItem('goods', goods)\n\n    // console.log(localStorage.getItem('goods'))\n\n    // 1. 把对象转换为JSON字符串  JSON.stringify\n\n    localStorage.setItem('goods', JSON.stringify(goods));\n\n    // console.log(typeof localStorage.getItem('goods'))\n\n    // 2. 把JSON字符串转换为对象  JSON.parse\n\n    console.log(JSON.parse(localStorage.getItem('goods')));\n  </script>\n</body>"
        }
      ]
    },
    {
      "title": "数组map 方法",
      "trail": [
        "Web APIs - 第5天笔记",
        "综合案例",
        "数组map 方法"
      ],
      "level": 3,
      "line": 621,
      "blocks": [
        {
          "type": "text",
          "text": "**使用场景：**\n\n\n\nmap 可以遍历数组处理数据，并且返回新的数组\n\n\n\n**语法：**"
        },
        {
          "type": "code",
          "language": "javascript",
          "text": "\n<body>\n\n  <script>\n\n  const arr = ['red', 'blue', 'pink']\n\n  // 1. 数组 map方法 处理数据并且 返回一个数组\n\n   const newArr = arr.map(function (ele, index) {\n\n    // console.log(ele)  // 数组元素\n\n    // console.log(index) // 索引号\n\n    return ele + '颜色'\n\n\t})\n\nconsole.log(newArr)\n\n</script>\n\n</body>\n",
          "note": "原资料中含排错代码或不完整片段，保留错误供分析；不会自动执行。"
        },
        {
          "type": "text",
          "text": ">map 也称为映射。映射是个术语，指两个元素的集之间元素相互“对应”的关系。\n\n>\n\n>map重点在于有返回值，forEach没有返回值（undefined）"
        }
      ]
    },
    {
      "title": "数组join方法",
      "trail": [
        "Web APIs - 第5天笔记",
        "综合案例",
        "数组join方法"
      ],
      "level": 3,
      "line": 675,
      "blocks": [
        {
          "type": "text",
          "text": "**作用：**join() 方法用于把数组中的所有元素转换一个字符串\n\n\n\n**语法：**"
        },
        {
          "type": "code",
          "language": "html",
          "text": "<body>\n  <script>\n    const arr = ['red', 'blue', 'pink'];\n\n    // 1. 数组 map方法 处理数据并且 返回一个数组\n\n    const newArr = arr.map(function (ele, index) {\n      // console.log(ele)  // 数组元素\n\n      // console.log(index) // 索引号\n\n      return ele + '颜色';\n    });\n\n    console.log(newArr);\n\n    // 2. 数组join方法  把数组转换为字符串\n\n    // 小括号为空则逗号分割\n\n    console.log(newArr.join()); // red颜色,blue颜色,pink颜色\n\n    // 小括号是空字符串，则元素之间没有分隔符\n\n    console.log(newArr.join('')); //red颜色blue颜色pink颜色\n\n    console.log(newArr.join('|')); //red颜色|blue颜色|pink颜色\n  </script>\n</body>"
        }
      ]
    }
  ]
};
