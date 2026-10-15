window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["4e2e19b627a40d0ca88d"] = {
  "id": "4e2e19b627a40d0ca88d",
  "title": "README.md",
  "treatment": "章节知识与练习",
  "sections": [
    {
      "title": "导读",
      "trail": [],
      "level": 0,
      "line": 1,
      "blocks": [
        {
          "type": "text",
          "text": "复习：\n\n\n\nsplice() 方法用于添加或删除数组中的元素。\n\n\n\n**注意：**这种方法会改变原始数组。\n\n\n\n1. **删除数组：**\n\n\n\nsplice(起始位置， 删除的个数)\n\n\n\n比如：1"
        },
        {
          "type": "code",
          "language": "javascript",
          "text": "let arr = ['red', 'green', 'blue'];\n\narr.splice(1, 1); // 删除green元素\n\nconsole.log(arr); // ['red, 'blue']"
        },
        {
          "type": "text",
          "text": "2. **添加元素**\n\n\n\nsplice(起始位置，删除个数，添加数组元素)"
        },
        {
          "type": "code",
          "language": "javascript",
          "text": "let arr = ['red', 'green', 'blue'];\n\n//arr.splice(1, 0, 'pink') // 在索引号是1的位置添加 pink\n\n//console.log(arr) // ['red', 'pink', 'green', 'blue']\n\narr.splice(1, 0, 'pink', 'hotpink'); // 在索引号是1的位置添加 pink  hotpink\n\nconsole.log(arr); // ['red', 'pink', 'hotpink', 'green', 'blue']"
        }
      ]
    },
    {
      "title": "Web APIs - 第1天笔记",
      "trail": [
        "Web APIs - 第1天笔记"
      ],
      "level": 1,
      "line": 61,
      "blocks": [
        {
          "type": "text",
          "text": "> 了解 DOM 的结构并掌握其基本的操作，体验 DOM 的在开发中的作用\n\n\n\n- 知道 ECMAScript 与 JavaScript 的关系\n\n- 了解 DOM 的相关概念及DOM 的本质是一个对象\n\n- 掌握查找节点的基本方法\n\n- 掌握节点属性和文本的操作\n\n- 能够使用间歇函数创建定时任务"
        }
      ]
    },
    {
      "title": "介绍",
      "trail": [
        "Web APIs - 第1天笔记",
        "介绍"
      ],
      "level": 2,
      "line": 81,
      "blocks": [
        {
          "type": "text",
          "text": "> 知道 ECMAScript 与 JavaScript 的关系，Web APIs 是浏览器扩展的功能。\n\n\n\n严格意义上讲，我们在 JavaScript 阶段学习的知识绝大部分属于 ECMAScript 的知识体系，ECMAScript 简称 ES 它提供了一套语言标准规范，如变量、数据类型、表达式、语句、函数等语法规则都是由 ECMAScript 规定的。浏览器将 ECMAScript 大部分的规范加以实现，并且在此基础上又扩展一些实用的功能，这些被扩展出来的内容我们称为 Web APIs。\n\n\n\n[课程配图见原资料]\n\n\n\nECMAScript 运行在浏览器中然后再结合 Web APIs 才是真正的 JavaScript，Web APIs 的核心是 DOM 和 BOM。\n\n\n\n扩展阅读：ECMAScript 规范在不断的更新中，存在多个不同的版本，早期的版本号采用数字顺序编号如 ECMAScript3、ECMAScript5，后来由于更新速度较快便采用年份做为版本号，如 ECMAScript2017、ECMAScript2018 这种格式，ECMAScript6 是 2015 年发布的，常叫做 EMCAScript2015。\n\n\n\n关于 JavaScript 历史的[扩展阅读](https://javascript.ruanyifeng.com/introduction/history.html)。\n\n\n\n\n\n\n\n> 知道 DOM 相关的概念，建立对 DOM 的初步认识，学习 DOM 的基本操作，体会 DOM 的作用\n\n\n\nDOM（Document Object Model）是将整个 HTML 文档的每一个标签元素视为一个对象，这个对象下包含了许多的属性和方法，通过操作这些属性或者调用这些方法实现对 HTML 的动态更新，为实现网页特效以及用户交互提供技术支撑。\n\n\n\n简言之 DOM 是用来动态修改 HTML 的，其目的是开发网页特效及用户交互。\n\n\n\n观察一个小例子：\n\n\n\n[课程配图见原资料]\n\n\n\n上述的例子中当用户分分别点击【开始】或【结束】按钮后，通过右侧调试窗口可以观察到 html 标签的内容在不断的发生改变，这便是通过 DOM 实现的。"
        }
      ]
    },
    {
      "title": "DOM 树",
      "trail": [
        "Web APIs - 第1天笔记",
        "介绍",
        "概念",
        "DOM 树"
      ],
      "level": 4,
      "line": 141,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>标题</title>\n  </head>\n\n  <body>\n    文本\n\n    <a href=\"\">链接名</a>\n\n    <div id=\"\" class=\"\">文本</div>\n  </body>\n</html>"
        },
        {
          "type": "text",
          "text": "如下图所示，将 HTML 文档以树状结构直观的表现出来，我们称之为文档树或 DOM 树，**文档树直观的体现了标签与标签之间的关系。**\n\n\n\n[课程配图见原资料]"
        }
      ]
    },
    {
      "title": "DOM 节点",
      "trail": [
        "Web APIs - 第1天笔记",
        "介绍",
        "概念",
        "DOM 节点"
      ],
      "level": 4,
      "line": 185,
      "blocks": [
        {
          "type": "text",
          "text": "节点是文档树的组成部分，**每一个节点都是一个 DOM 对象**，主要分为元素节点、属性节点、文本节点等。\n\n\n\n1. 【元素节点】其实就是 HTML 标签，如上图中 `head`、`div`、`body` 等都属于元素节点。\n\n2. 【属性节点】是指 HTML 标签中的属性，如上图中 `a` 标签的 `href` 属性、`div` 标签的 `class` 属性。\n\n3. 【文本节点】是指 HTML 标签的文字内容，如 `title` 标签中的文字。\n\n4. 【根节点】特指 `html` 标签。\n\n5. 其它..."
        }
      ]
    },
    {
      "title": "document",
      "trail": [
        "Web APIs - 第1天笔记",
        "介绍",
        "概念",
        "document"
      ],
      "level": 4,
      "line": 205,
      "blocks": [
        {
          "type": "text",
          "text": "`document` 是 JavaScript 内置的专门用于 DOM 的对象，该对象包含了若干的属性和方法，`document` 是学习 DOM 的核心。"
        },
        {
          "type": "code",
          "language": "html",
          "text": "<script>\n  // document 是内置的对象\n\n  // console.log(typeof document);\n\n  // 1. 通过 document 获取根节点\n\n  console.log(document.documentElement); // 对应 html 标签\n\n  // 2. 通过 document 节取 body 节点\n\n  console.log(document.body); // 对应 body 标签\n\n  // 3. 通过 document.write 方法向网页输出内容\n\n  document.write('Hello World!');\n</script>"
        },
        {
          "type": "text",
          "text": "上述列举了 `document` 对象的部分属性和方法，我们先对 `document` 有一个整体的认识。"
        }
      ]
    },
    {
      "title": "获取DOM对象",
      "trail": [
        "Web APIs - 第1天笔记",
        "获取DOM对象"
      ],
      "level": 2,
      "line": 249,
      "blocks": [
        {
          "type": "text",
          "text": "1. querySelector   满足条件的第一个元素\n\n2. querySelectorAll  满足条件的元素集合 返回伪数组\n\n3. 了解其他方式\n\n   1. getElementById\n\n   2. getElementsByTagName"
        },
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>DOM - 查找节点</title>\n  </head>\n\n  <body>\n    <h3>查找元素类型节点</h3>\n\n    <p>从整个 DOM 树中查找 DOM 节点是学习 DOM 的第一个步骤。</p>\n\n    <ul>\n      <li>元素</li>\n\n      <li>元素</li>\n\n      <li>元素</li>\n\n      <li>元素</li>\n    </ul>\n\n    <script>\n      const p = document.querySelector('p'); // 获取第一个p元素\n\n      const lis = document.querySelectorAll('li'); // 获取第一个p元素\n    </script>\n  </body>\n</html>"
        },
        {
          "type": "text",
          "text": "总结：\n\n\n\n- document.getElementById 专门获取元素类型节点，根据标签的 `id`  属性查找\n\n- 任意 DOM 对象都包含 nodeType 属性，用来检检测节点类型"
        }
      ]
    },
    {
      "title": "操作元素内容",
      "trail": [
        "Web APIs - 第1天笔记",
        "操作元素内容"
      ],
      "level": 2,
      "line": 325,
      "blocks": [
        {
          "type": "text",
          "text": "通过修改 DOM 的文本内容，动态改变网页的内容。\n\n\n\n1. `innerText` 将文本内容添加/更新到任意标签位置，**文本中包含的标签不会被解析。**"
        },
        {
          "type": "code",
          "language": "html",
          "text": "<script>\n  // innerText 将文本内容添加/更新到任意标签位置\n\n  const intro = document.querySelector('.intro');\n\n  // intro.innerText = '嗨~ 我叫李雷！'\n\n  // intro.innerText = '<h4>嗨~ 我叫李雷！</h4>'\n</script>"
        },
        {
          "type": "text",
          "text": "2. `innerHTML` 将文本内容添加/更新到任意标签位置，**文本中包含的标签会被解析。**"
        },
        {
          "type": "code",
          "language": "html",
          "text": "<script>\n  // innerHTML 将文本内容添加/更新到任意标签位置\n\n  const intro = document.querySelector('.intro');\n\n  intro.innerHTML = '嗨~ 我叫韩梅梅！';\n\n  intro.innerHTML = '<h4>嗨~ 我叫韩梅梅！</h4>';\n</script>"
        },
        {
          "type": "text",
          "text": "总结：如果文本内容中包含 `html` 标签时推荐使用 `innerHTML`，否则建议使用 `innerText` 属性。\n\n\n\n##操作元素属性 \n\n\n\n有3种方式可以实现对属性的修改："
        }
      ]
    },
    {
      "title": "常用属性修改",
      "trail": [
        "Web APIs - 第1天笔记",
        "操作元素内容",
        "常用属性修改"
      ],
      "level": 4,
      "line": 387,
      "blocks": [
        {
          "type": "text",
          "text": "1. 直接能过属性名修改，最简洁的语法"
        },
        {
          "type": "code",
          "language": "html",
          "text": "<script>\n  // 1. 获取 img 对应的 DOM 元素\n\n  const pic = document.querySelector('.pic');\n\n  // 2. 修改属性\n\n  pic.src = './images/lion.webp';\n\n  pic.width = 400;\n\n  pic.alt = '图片不见了...';\n</script>"
        }
      ]
    },
    {
      "title": "控制样式属性",
      "trail": [
        "Web APIs - 第1天笔记",
        "操作元素内容",
        "常用属性修改",
        "控制样式属性"
      ],
      "level": 4,
      "line": 417,
      "blocks": [
        {
          "type": "text",
          "text": "1. 应用【修改样式】，通过修改行内样式 `style` 属性，实现对样式的动态修改。\n\n\n\n通过元素节点获得的 `style` 属性本身的数据类型也是对象，如 `box.style.color`、`box.style.width` 分别用来获取元素节点 CSS 样式的 `color` 和 `width` 的值。"
        },
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>练习 - 修改样式</title>\n  </head>\n\n  <body>\n    <div class=\"box\">随便一些文本内容</div>\n\n    <script>\n      // 获取 DOM 节点\n\n      const box = document.querySelector('.intro');\n\n      box.style.color = 'red';\n\n      box.style.width = '300px';\n\n      // css 属性的 - 连接符与 JavaScript 的 减运算符\n\n      // 冲突，所以要改成驼峰法\n\n      box.style.backgroundColor = 'pink';\n    </script>\n  </body>\n</html>"
        },
        {
          "type": "text",
          "text": "任何标签都有 `style` 属性，通过 `style` 属性可以动态更改网页标签的样式，如要遇到 `css` 属性中包含字符 `-` 时，要将 `-` 去掉并将其后面的字母改成大写，如 `background-color` 要写成 `box.style.backgroundColor`\n\n\n\n2. 操作类名(className) 操作CSS\n\n\n\n如果修改的样式比较多，直接通过style属性修改比较繁琐，我们可以通过借助于css类名的形式。"
        },
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>练习 - 修改样式</title>\n\n    <style>\n      .pink {\n        background: pink;\n\n        color: hotpink;\n      }\n    </style>\n  </head>\n\n  <body>\n    <div class=\"box\">随便一些文本内容</div>\n\n    <script>\n      // 获取 DOM 节点\n\n      const box = document.querySelector('.intro');\n\n      box.className = 'pink';\n    </script>\n  </body>\n</html>"
        },
        {
          "type": "text",
          "text": ">注意：\n\n>\n\n>1.由于class是关键字, 所以使用className去代替\n\n>\n\n>2.className是使用新值换旧值, 如果需要添加一个类,需要保留之前的类名\n\n\n\n3. 通过 classList 操作类控制CSS\n\n\n\n为了解决className 容易覆盖以前的类名，我们可以通过classList方式追加和删除类名"
        },
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>Document</title>\n\n    <style>\n      div {\n        width: 200px;\n\n        height: 200px;\n\n        background-color: pink;\n      }\n\n      .active {\n        width: 300px;\n\n        height: 300px;\n\n        background-color: hotpink;\n\n        margin-left: 100px;\n      }\n    </style>\n  </head>\n\n  <body>\n    <div class=\"one\"></div>\n\n    <script>\n      // 1.获取元素\n\n      // let box = document.querySelector('css选择器')\n\n      let box = document.querySelector('div');\n\n      // add是个方法 添加  追加\n\n      // box.classList.add('active')\n\n      // remove() 移除 类\n\n      // box.classList.remove('one')\n\n      // 切换类\n\n      box.classList.toggle('one');\n    </script>\n  </body>\n</html>"
        }
      ]
    },
    {
      "title": "操作表单元素属性",
      "trail": [
        "Web APIs - 第1天笔记",
        "操作元素内容",
        "常用属性修改",
        "操作表单元素属性"
      ],
      "level": 4,
      "line": 647,
      "blocks": [
        {
          "type": "text",
          "text": "表单很多情况，也需要修改属性，比如点击眼睛，可以看到密码，本质是把表单类型转换为文本框\n\n\n\n正常的有属性有取值的跟其他的标签属性没有任何区别\n\n\n\n获取:DOM对象.属性名\n\n\n\n设置:DOM对象.属性名= 新值"
        },
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>Document</title>\n  </head>\n\n  <body>\n    <input type=\"text\" value=\"请输入\" />\n\n    <button disabled>按钮</button>\n\n    <input type=\"checkbox\" name=\"\" id=\"\" class=\"agree\" />\n\n    <script>\n      // 1. 获取元素\n\n      let input = document.querySelector('input');\n\n      // 2. 取值或者设置值  得到input里面的值可以用 value\n\n      // console.log(input.value)\n\n      input.value = '小米手机';\n\n      input.type = 'password';\n\n      // 2. 启用按钮\n\n      let btn = document.querySelector('button');\n\n      // disabled 不可用   =  false  这样可以让按钮启用\n\n      btn.disabled = false;\n\n      // 3. 勾选复选框\n\n      let checkbox = document.querySelector('.agree');\n\n      checkbox.checked = false;\n    </script>\n  </body>\n</html>"
        }
      ]
    },
    {
      "title": "自定义属性",
      "trail": [
        "Web APIs - 第1天笔记",
        "操作元素内容",
        "常用属性修改",
        "自定义属性"
      ],
      "level": 4,
      "line": 743,
      "blocks": [
        {
          "type": "text",
          "text": "标准属性: 标签天生自带的属性 比如class id title等, 可以直接使用点语法操作比如： disabled、checked、selected\n\n\n\n自定义属性：\n\n\n\n在html5中推出来了专门的data-自定义属性  \n\n\n\n在标签上一律以data-开头\n\n\n\n在DOM对象上一律以dataset对象方式获取"
        },
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>Document</title>\n  </head>\n\n  <body>\n    <div data-id=\"1\">自定义属性</div>\n\n    <script>\n      // 1. 获取元素\n\n      let div = document.querySelector('div');\n\n      // 2. 获取自定义属性值\n\n      console.log(div.dataset.id);\n    </script>\n  </body>\n</html>"
        }
      ]
    },
    {
      "title": "间歇函数",
      "trail": [
        "Web APIs - 第1天笔记",
        "间歇函数"
      ],
      "level": 2,
      "line": 819,
      "blocks": [
        {
          "type": "text",
          "text": "> 知道间歇函数的作用，利用间歇函数创建定时任务。\n\n\n\n`setInterval` 是 JavaScript 中内置的函数，它的作用是间隔固定的时间自动重复执行另一个函数，也叫定时器函数。"
        },
        {
          "type": "code",
          "language": "html",
          "text": "<script>\n  // 1. 定义一个普通函数\n\n  function repeat() {\n    console.log('不知疲倦的执行下去....');\n  }\n\n  // 2. 使用 setInterval 调用 repeat 函数\n\n  // 间隔 1000 毫秒，重复调用 repeat\n\n  setInterval(repeat, 1000);\n</script>"
        }
      ]
    },
    {
      "title": "今日单词",
      "trail": [
        "Web APIs - 第1天笔记",
        "今日单词"
      ],
      "level": 2,
      "line": 857,
      "blocks": [
        {
          "type": "text",
          "text": "| 单词        | 说明   | 解释                      |\n\n| ----------- | ------ | ------------------------- |\n\n| setInterval | 定时器 | setInterval(repeat, 1000) |\n\n|             |        |                           |\n\n|             |        |                           |\n\n|             |        |                           |\n\n|             |        |                           |\n\n|             |        |                           |\n\n|             |        |                           |"
        }
      ]
    }
  ]
};
