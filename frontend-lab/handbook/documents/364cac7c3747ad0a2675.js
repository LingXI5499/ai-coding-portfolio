window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["364cac7c3747ad0a2675"] = {
  "id": "364cac7c3747ad0a2675",
  "title": "README.md",
  "treatment": "章节知识与练习",
  "sections": [
    {
      "title": "Web APIs - 第2天",
      "trail": [
        "Web APIs - 第2天"
      ],
      "level": 1,
      "line": 1,
      "blocks": [
        {
          "type": "text",
          "text": "> 学会通过为DOM注册事件来实现可交互的网页特效。\n\n\n\n- 能够判断函数运行的环境并确字 this 所指代的对象\n\n- 理解事件的作用，知道应用事件的 3 个步骤\n\n\n\n\n\n\n\n\n\n> 学习会为 DOM 注册事件，实现简单可交互的网页特交。"
        }
      ]
    },
    {
      "title": "事件",
      "trail": [
        "Web APIs - 第2天",
        "事件"
      ],
      "level": 2,
      "line": 25,
      "blocks": [
        {
          "type": "text",
          "text": "事件是编程语言中的术语，它是用来描述程序的行为或状态的，**一旦行为或状态发生改变，便立即调用一个函数。**\n\n\n\n例如：用户使用【鼠标点击】网页中的一个按钮、用户使用【鼠标拖拽】网页中的一张图片"
        }
      ]
    },
    {
      "title": "事件监听",
      "trail": [
        "Web APIs - 第2天",
        "事件",
        "事件监听"
      ],
      "level": 3,
      "line": 37,
      "blocks": [
        {
          "type": "text",
          "text": "结合 DOM 使用事件时，需要为 DOM 对象添加事件监听，等待事件发生（触发）时，便立即调用一个函数。\n\n\n\n`addEventListener` 是 DOM 对象专门用来添加事件监听的方法，它的两个参数分别为【事件类型】和【事件回调】。"
        },
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>事件监听</title>\n  </head>\n\n  <body>\n    <h3>事件监听</h3>\n\n    <p id=\"text\">为 DOM 元素添加事件监听，等待事件发生，便立即执行一个函数。</p>\n\n    <button id=\"btn\">点击改变文字颜色</button>\n\n    <script>\n      // 1. 获取 button 对应的 DOM 对象\n\n      const btn = document.querySelector('#btn');\n\n      // 2. 添加事件监听\n\n      btn.addEventListener('click', function () {\n        console.log('等待事件被触发...');\n\n        // 改变 p 标签的文字颜色\n\n        let text = document.getElementById('text');\n\n        text.style.color = 'red';\n      });\n\n      // 3. 只要用户点击了按钮，事件便触发了！！！\n    </script>\n  </body>\n</html>"
        },
        {
          "type": "text",
          "text": "完成事件监听分成3个步骤：\n\n\n\n1. 获取 DOM 元素\n\n2. 通过 `addEventListener` 方法为 DOM 节点添加事件监听\n\n3. 等待事件触发，如用户点击了某个按钮时便会触发 `click` 事件类型\n\n4. 事件触发后，相对应的回调函数会被执行\n\n\n\n大白话描述：所谓的事件无非就是找个机会（事件触发）调用一个函数（回调函数）。"
        }
      ]
    },
    {
      "title": "事件类型",
      "trail": [
        "Web APIs - 第2天",
        "事件",
        "事件类型"
      ],
      "level": 3,
      "line": 127,
      "blocks": [
        {
          "type": "text",
          "text": "`click` 译成中文是【点击】的意思，它的含义是监听（等着）用户鼠标的单击操作，除了【单击】还有【双击】`dblclick`"
        },
        {
          "type": "code",
          "language": "html",
          "text": "<script>\n  // 双击事件类型\n\n  btn.addEventListener('dblclick', function () {\n    console.log('等待事件被触发...');\n\n    // 改变 p 标签的文字颜色\n\n    const text = document.querySelector('.text');\n\n    text.style.color = 'red';\n  });\n\n  // 只要用户双击击了按钮，事件便触发了！！！\n</script>"
        },
        {
          "type": "text",
          "text": "结论：【事件类型】决定了事件被触发的方式，如 `click` 代表鼠标单击，`dblclick` 代表鼠标双击。"
        }
      ]
    },
    {
      "title": "事件处理程序",
      "trail": [
        "Web APIs - 第2天",
        "事件",
        "事件处理程序"
      ],
      "level": 3,
      "line": 167,
      "blocks": [
        {
          "type": "text",
          "text": "`addEventListener` 的第2个参数是函数，这个函数会在事件被触发时立即被调用，在这个函数中可以编写任意逻辑的代码，如改变 DOM 文本颜色、文本内容等。"
        },
        {
          "type": "code",
          "language": "html",
          "text": "<script>\n  // 双击事件类型\n\n  btn.addEventListener('dblclick', function () {\n    console.log('等待事件被触发...');\n\n    const text = document.querySelector('.text');\n\n    // 改变 p 标签的文字颜色\n\n    text.style.color = 'red';\n\n    // 改变 p 标签的文本内容\n\n    text.style.fontSize = '20px';\n  });\n</script>"
        },
        {
          "type": "text",
          "text": "结论：【事件处理程序】决定了事件触发后应该执行的逻辑。"
        }
      ]
    },
    {
      "title": "事件类型",
      "trail": [
        "Web APIs - 第2天",
        "事件类型"
      ],
      "level": 2,
      "line": 213,
      "blocks": [
        {
          "type": "text",
          "text": "将众多的事件类型分类可分为：鼠标事件、键盘事件、表单事件、焦点事件等，我们逐一展开学习。"
        }
      ]
    },
    {
      "title": "鼠标事件",
      "trail": [
        "Web APIs - 第2天",
        "事件类型",
        "鼠标事件"
      ],
      "level": 3,
      "line": 221,
      "blocks": [
        {
          "type": "text",
          "text": "鼠标事件是指跟鼠标操作相关的事件，如单击、双击、移动等。\n\n\n\n1. `mouseenter 监听鼠标是否移入 DOM 元素"
        },
        {
          "type": "code",
          "language": "html",
          "text": "<body>\n  <h3>鼠标事件</h3>\n\n  <p>监听与鼠标相关的操作</p>\n\n  <hr />\n\n  <div class=\"box\"></div>\n\n  <script>\n    // 需要事件监听的 DOM 元素\n\n    const box = document.querySelector('.box');\n\n    // 监听鼠标是移入当前 DOM 元素\n\n    box.addEventListener('mouseenter', function () {\n      // 修改文本内容\n\n      this.innerText = '鼠标移入了...';\n\n      // 修改光标的风格\n\n      this.style.cursor = 'move';\n    });\n  </script>\n</body>"
        },
        {
          "type": "text",
          "text": "1. `mouseleave 监听鼠标是否移出 DOM 元素"
        },
        {
          "type": "code",
          "language": "html",
          "text": "<body>\n  <h3>鼠标事件</h3>\n\n  <p>监听与鼠标相关的操作</p>\n\n  <hr />\n\n  <div class=\"box\"></div>\n\n  <script>\n    // 需要事件监听的 DOM 元素\n\n    const box = document.querySelector('.box');\n\n    // 监听鼠标是移出当前 DOM 元素\n\n    box.addEventListener('mouseleave', function () {\n      // 修改文本内容\n\n      this.innerText = '鼠标移出了...';\n    });\n  </script>\n</body>"
        }
      ]
    },
    {
      "title": "键盘事件",
      "trail": [
        "Web APIs - 第2天",
        "事件类型",
        "键盘事件"
      ],
      "level": 3,
      "line": 317,
      "blocks": [
        {
          "type": "text",
          "text": "keydown   键盘按下触发\n\nkeyup   键盘抬起触发"
        }
      ]
    },
    {
      "title": "焦点事件",
      "trail": [
        "Web APIs - 第2天",
        "事件类型",
        "焦点事件"
      ],
      "level": 3,
      "line": 327,
      "blocks": [
        {
          "type": "text",
          "text": "focus  获得焦点\n\n\n\nblur 失去焦点"
        }
      ]
    },
    {
      "title": "文本框输入事件",
      "trail": [
        "Web APIs - 第2天",
        "事件类型",
        "文本框输入事件"
      ],
      "level": 3,
      "line": 339,
      "blocks": [
        {
          "type": "text",
          "text": "input"
        }
      ]
    },
    {
      "title": "事件对象",
      "trail": [
        "Web APIs - 第2天",
        "事件对象"
      ],
      "level": 2,
      "line": 347,
      "blocks": [
        {
          "type": "text",
          "text": "任意事件类型被触发时与事件相关的信息会被以对象的形式记录下来，我们称这个对象为事件对象。"
        },
        {
          "type": "code",
          "language": "html",
          "text": "<body>\n  <h3>事件对象</h3>\n\n  <p>\n    任意事件类型被触发时与事件相关的信息会被以对象的形式记录下来，我们称这个对象为事件对象。\n  </p>\n\n  <hr />\n\n  <div class=\"box\"></div>\n\n  <script>\n    // 获取 .box 元素\n\n    const box = document.querySelector('.box');\n\n    // 添加事件监听\n\n    box.addEventListener('click', function (e) {\n      console.log('任意事件类型被触发后，相关信息会以对象形式被记录下来...');\n\n      // 事件回调函数的第1个参数即所谓的事件对象\n\n      console.log(e);\n    });\n  </script>\n</body>"
        },
        {
          "type": "text",
          "text": "事件回调函数的【第1个参数】即所谓的事件对象，通常习惯性的将这个对数命名为 `event`、`ev` 、`ev` 。\n\n\n\n接下来简单看一下事件对象中包含了哪些有用的信息：\n\n\n\n1. `ev.type` 当前事件的类型\n\n2. `ev.clientX/Y` 光标相对浏览器窗口的位置\n\n3. `ev.offsetX/Y` 光标相于当前 DOM 元素的位置\n\n\n\n注：在事件回调函数内部通过 window.event 同样可以获取事件对象。"
        }
      ]
    },
    {
      "title": "环境对象",
      "trail": [
        "Web APIs - 第2天",
        "环境对象"
      ],
      "level": 2,
      "line": 417,
      "blocks": [
        {
          "type": "text",
          "text": "> 能够分析判断函数运行在不同环境中 this 所指代的对象。\n\n\n\n环境对象指的是函数内部特殊的变量 `this` ，它代表着当前函数运行时所处的环境。"
        },
        {
          "type": "code",
          "language": "html",
          "text": "<script>\n  // 声明函数\n\n  function sayHi() {\n    // this 是一个变量\n\n    console.log(this);\n  }\n\n  // 声明一个对象\n\n  let user = {\n    name: '张三',\n\n    sayHi: sayHi, // 此处把 sayHi 函数，赋值给 sayHi 属性\n  };\n\n  let person = {\n    name: '李四',\n\n    sayHi: sayHi,\n  };\n\n  // 直接调用\n\n  sayHi(); // window\n\n  window.sayHi(); // window\n\n  // 做为对象方法调用\n\n  user.sayHi(); // user\n\n  person.sayHi(); // person\n</script>"
        },
        {
          "type": "text",
          "text": "结论：\n\n\n\n1. `this` 本质上是一个变量，数据类型为对象\n\n2. 函数的调用方式不同 `this` 变量的值也不同\n\n3. 【谁调用 `this` 就是谁】是判断 `this` 值的粗略规则\n\n4. 函数直接调用时实际上 `window.sayHi()` 所以 `this` 的值为 `window`"
        }
      ]
    },
    {
      "title": "回调函数",
      "trail": [
        "Web APIs - 第2天",
        "回调函数"
      ],
      "level": 2,
      "line": 499,
      "blocks": [
        {
          "type": "text",
          "text": "如果将函数 A 做为参数传递给函数 B 时，我们称函数 A 为回调函数。"
        },
        {
          "type": "code",
          "language": "html",
          "text": "<script>\n  // 声明 foo 函数\n\n  function foo(arg) {\n    console.log(arg);\n  }\n\n  // 普通的值做为参数\n\n  foo(10);\n\n  foo('hello world!');\n\n  foo(['html', 'css', 'javascript']);\n\n  function bar() {\n    console.log('函数也能当参数...');\n  }\n\n  // 函数也可以做为参数！！！！\n\n  foo(bar);\n</script>"
        },
        {
          "type": "text",
          "text": "函数 `bar` 做参数传给了 `foo` 函数，`bar` 就是所谓的回调函数了！！！\n\n\n\n我们回顾一下间歇函数 `setInterval`"
        },
        {
          "type": "code",
          "language": "html",
          "text": "<script>\n  function fn() {\n    console.log('我是回调函数...');\n  }\n\n  // 调用定时器\n\n  setInterval(fn, 1000);\n</script>"
        },
        {
          "type": "text",
          "text": "`fn` 函数做为参数传给了 `setInterval` ，这便是回调函数的实际应用了，结合刚刚学习的函数表达式上述代码还有另一种更常见写法。"
        },
        {
          "type": "code",
          "language": "html",
          "text": "<script>\n  // 调用定时器，匿名函数做为参数\n\n  setInterval(function () {\n    console.log('我是回调函数...');\n  }, 1000);\n</script>"
        },
        {
          "type": "text",
          "text": "结论：\n\n\n\n1. 回调函数本质还是函数，只不过把它当成参数使用\n\n2. 使用匿名函数做为回调函数比较常见"
        }
      ]
    }
  ]
};
