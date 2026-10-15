window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["798ce93b6cb9174f7fac"] = {
  "id": "798ce93b6cb9174f7fac",
  "title": "README.md",
  "treatment": "章节知识与练习",
  "sections": [
    {
      "title": "Web APIs - 第4天",
      "trail": [
        "Web APIs - 第4天"
      ],
      "level": 1,
      "line": 1,
      "blocks": [
        {
          "type": "text",
          "text": "> 进一步学习 DOM 相关知识，实现可交互的网页特效\n\n\n\n- 能够插入、删除和替换元素节点\n\n- 能够依据元素节点关系查找节点"
        }
      ]
    },
    {
      "title": "日期对象",
      "trail": [
        "Web APIs - 第4天",
        "日期对象"
      ],
      "level": 2,
      "line": 15,
      "blocks": [
        {
          "type": "text",
          "text": "掌握 Date 日期对象的使用，动态获取当前计算机的时间。\n\n\n\n\n\nECMAScript 中内置了获取系统时间的对象 Date，使用 Date 时与之前学习的内置对象 console 和 Math 不同，它需要借助 new 关键字才能使用。"
        }
      ]
    },
    {
      "title": "实例化",
      "trail": [
        "Web APIs - 第4天",
        "日期对象",
        "实例化"
      ],
      "level": 3,
      "line": 31,
      "blocks": [
        {
          "type": "code",
          "language": "javascript",
          "text": "// 1. 实例化\n\n// const date = new Date(); // 系统默认时间\n\nconst date = new Date('2020-05-01'); // 指定时间\n\n// date 变量即所谓的时间对象\n\nconsole.log(typeof date);"
        }
      ]
    },
    {
      "title": "方法",
      "trail": [
        "Web APIs - 第4天",
        "日期对象",
        "方法"
      ],
      "level": 3,
      "line": 59,
      "blocks": [
        {
          "type": "code",
          "language": "javascript",
          "text": "// 1. 实例化\n\nconst date = new Date();\n\n// 2. 调用时间对象方法\n\n// 通过方法分别获取年、月、日，时、分、秒\n\nconst year = date.getFullYear(); // 四位年份\n\nconst month = date.getMonth(); // 0 ~ 11"
        },
        {
          "type": "text",
          "text": "getFullYear 获取四位年份\n\n\n\ngetMonth 获取月份，取值为 0 ~ 11\n\n\n\ngetDate 获取月份中的每一天，不同月份取值也不相同\n\n\n\ngetDay 获取星期，取值为 0 ~ 6\n\n\n\ngetHours 获取小时，取值为 0 ~ 23\n\n\n\ngetMinutes 获取分钟，取值为 0 ~ 59\n\n\n\ngetSeconds 获取秒，取值为 0 ~ 59"
        }
      ]
    },
    {
      "title": "时间戳",
      "trail": [
        "Web APIs - 第4天",
        "日期对象",
        "时间戳"
      ],
      "level": 3,
      "line": 115,
      "blocks": [
        {
          "type": "text",
          "text": "时间戳是指1970年01月01日00时00分00秒起至现在的总秒数或毫秒数，它是一种特殊的计量时间的方式。\n\n\n\n注：ECMAScript 中时间戳是以毫秒计的。"
        },
        {
          "type": "code",
          "language": "javascript",
          "text": "// 1. 实例化\n\nconst date = new Date();\n\n// 2. 获取时间戳\n\nconsole.log(date.getTime());\n\n// 还有一种获取时间戳的方法\n\nconsole.log(+new Date());\n\n// 还有一种获取时间戳的方法\n\nconsole.log(Date.now());"
        },
        {
          "type": "text",
          "text": "获取时间戳的方法，分别为 getTime 和 Date.now 和  +new Date()"
        }
      ]
    },
    {
      "title": "DOM 节点",
      "trail": [
        "Web APIs - 第4天",
        "DOM 节点"
      ],
      "level": 2,
      "line": 157,
      "blocks": [
        {
          "type": "text",
          "text": "> 掌握元素节点创建、复制、插入、删除等操作的方法，能够依据元素节点的结构关系查找节点\n\n\n\n回顾之前 DOM 的操作都是针对元素节点的属性或文本的，除此之外也有专门针对元素节点本身的操作，如插入、复制、删除、替换等。"
        }
      ]
    },
    {
      "title": "插入节点",
      "trail": [
        "Web APIs - 第4天",
        "DOM 节点",
        "插入节点"
      ],
      "level": 3,
      "line": 169,
      "blocks": [
        {
          "type": "text",
          "text": "在已有的 DOM 节点中插入新的 DOM 节点时，需要关注两个关键因素：首先要得到新的 DOM 节点，其次在哪个位置插入这个节点。\n\n\n\n如下代码演示："
        },
        {
          "type": "code",
          "language": "html",
          "text": "<body>\n  <h3>插入节点</h3>\n\n  <p>在现有 dom 结构基础上插入新的元素节点</p>\n\n  <hr />\n\n  <!-- 普通盒子 -->\n\n  <div class=\"box\"></div>\n\n  <!-- 点击按钮向 box 盒子插入节点 -->\n\n  <button class=\"btn\">插入节点</button>\n\n  <script>\n    // 点击按钮，在网页中插入节点\n\n    const btn = document.querySelector('.btn');\n\n    btn.addEventListener('click', function () {\n      // 1. 获得一个 DOM 元素节点\n\n      const p = document.createElement('p');\n\n      p.innerText = '创建的新的p标签';\n\n      p.className = 'info';\n\n      // 复制原有的 DOM 节点\n\n      const p2 = document.querySelector('p').cloneNode(true);\n\n      p2.style.color = 'red';\n\n      // 2. 插入盒子 box 盒子\n\n      document.querySelector('.box').appendChild(p);\n\n      document.querySelector('.box').appendChild(p2);\n    });\n  </script>\n</body>"
        },
        {
          "type": "text",
          "text": "结论：\n\n\n\n- `createElement` 动态创建任意 DOM 节点\n\n\n\n- `cloneNode` 复制现有的 DOM 节点，传入参数 true 会复制所有子节点\n\n\n\n- `appendChild` 在末尾（结束标签前）插入节点\n\n\n\n再来看另一种情形的代码演示："
        },
        {
          "type": "code",
          "language": "html",
          "text": "<body>\n  <h3>插入节点</h3>\n\n  <p>在现有 dom 结构基础上插入新的元素节点</p>\n\n  <hr />\n\n  <button class=\"btn1\">在任意节点前插入</button>\n\n  <ul>\n    <li>HTML</li>\n\n    <li>CSS</li>\n\n    <li>JavaScript</li>\n  </ul>\n\n  <script>\n    // 点击按钮，在已有 DOM 中插入新节点\n\n    const btn1 = document.querySelector('.btn1');\n\n    btn1.addEventListener('click', function () {\n      // 第 2 个 li 元素\n\n      const relative = document.querySelector('li:nth-child(2)');\n\n      // 1. 动态创建新的节点\n\n      const li1 = document.createElement('li');\n\n      li1.style.color = 'red';\n\n      li1.innerText = 'Web APIs';\n\n      // 复制现有的节点\n\n      const li2 = document.querySelector('li:first-child').cloneNode(true);\n\n      li2.style.color = 'blue';\n\n      // 2. 在 relative 节点前插入\n\n      document.querySelector('ul').insertBefore(li1, relative);\n\n      document.querySelector('ul').insertBefore(li2, relative);\n    });\n  </script>\n</body>"
        },
        {
          "type": "text",
          "text": "结论：\n\n\n\n- `createElement` 动态创建任意 DOM 节点\n\n\n\n- `cloneNode` 复制现有的 DOM 节点，传入参数 true 会复制所有子节点\n\n\n\n- `insertBefore` 在父节点中任意子节点之前插入新节点"
        }
      ]
    },
    {
      "title": "删除节点",
      "trail": [
        "Web APIs - 第4天",
        "DOM 节点",
        "删除节点"
      ],
      "level": 3,
      "line": 349,
      "blocks": [
        {
          "type": "text",
          "text": "删除现有的 DOM 节点，也需要关注两个因素：首先由父节点删除子节点，其次是要删除哪个子节点。"
        },
        {
          "type": "code",
          "language": "html",
          "text": "<body>\n  <!-- 点击按钮删除节点 -->\n\n  <button>删除节点</button>\n\n  <ul>\n    <li>HTML</li>\n\n    <li>CSS</li>\n\n    <li>Web APIs</li>\n  </ul>\n\n  <script>\n    const btn = document.querySelector('button');\n\n    btn.addEventListener('click', function () {\n      // 获取 ul 父节点\n\n      let ul = document.querySelector('ul');\n\n      // 待删除的子节点\n\n      let lis = document.querySelectorAll('li');\n\n      // 删除节点\n\n      ul.removeChild(lis[0]);\n    });\n  </script>\n</body>"
        },
        {
          "type": "text",
          "text": "结论：`removeChild` 删除节点时一定是由父子关系。"
        }
      ]
    },
    {
      "title": "查找节点",
      "trail": [
        "Web APIs - 第4天",
        "DOM 节点",
        "查找节点"
      ],
      "level": 3,
      "line": 411,
      "blocks": [
        {
          "type": "text",
          "text": "DOM 树中的任意节点都不是孤立存在的，它们要么是父子关系，要么是兄弟关系，不仅如此，我们可以依据节点之间的关系查找节点。"
        }
      ]
    },
    {
      "title": "父子关系",
      "trail": [
        "Web APIs - 第4天",
        "DOM 节点",
        "查找节点",
        "父子关系"
      ],
      "level": 4,
      "line": 419,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<body>\n  <button class=\"btn1\">所有的子节点</button>\n\n  <!-- 获取 ul 的子节点 -->\n\n  <ul>\n    <li>HTML</li>\n\n    <li>CSS</li>\n\n    <li>JavaScript 基础</li>\n\n    <li>Web APIs</li>\n  </ul>\n\n  <script>\n    const btn1 = document.querySelector('.btn1');\n\n    btn1.addEventListener('click', function () {\n      // 父节点\n\n      const ul = document.querySelector('ul');\n\n      // 所有的子节点\n\n      console.log(ul.childNodes);\n\n      // 只包含元素子节点\n\n      console.log(ul.children);\n    });\n  </script>\n</body>"
        },
        {
          "type": "text",
          "text": "结论：\n\n\n\n- `childNodes` 获取全部的子节点，回车换行会被认为是空白文本节点\n\n- `children` 只获取元素类型节点"
        },
        {
          "type": "code",
          "language": "html",
          "text": "<body>\n  <table>\n    <tr>\n      <td width=\"60\">序号</td>\n\n      <td>课程名</td>\n\n      <td>难度</td>\n\n      <td width=\"80\">操作</td>\n    </tr>\n\n    <tr>\n      <td>1</td>\n\n      <td><span>HTML</span></td>\n\n      <td>初级</td>\n\n      <td><button>变色</button></td>\n    </tr>\n\n    <tr>\n      <td>2</td>\n\n      <td><span>CSS</span></td>\n\n      <td>初级</td>\n\n      <td><button>变色</button></td>\n    </tr>\n\n    <tr>\n      <td>3</td>\n\n      <td><span>Web APIs</span></td>\n\n      <td>中级</td>\n\n      <td><button>变色</button></td>\n    </tr>\n  </table>\n\n  <script>\n    // 获取所有 button 节点，并添加事件监听\n\n    const buttons = document.querySelectorAll('table button');\n\n    for (let i = 0; i < buttons.length; i++) {\n      buttons[i].addEventListener('click', function () {\n        // console.log(this.parentNode); // 父节点 td\n\n        // console.log(this.parentNode.parentNode); // 爷爷节点 tr\n\n        this.parentNode.parentNode.style.color = 'red';\n      });\n    }\n  </script>\n</body>"
        },
        {
          "type": "text",
          "text": "结论：`parentNode` 获取父节点，以相对位置查找节点，实际应用中非常灵活。"
        }
      ]
    },
    {
      "title": "兄弟关系",
      "trail": [
        "Web APIs - 第4天",
        "DOM 节点",
        "查找节点",
        "兄弟关系"
      ],
      "level": 4,
      "line": 571,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<body>\n  <ul>\n    <li>HTML</li>\n\n    <li>CSS</li>\n\n    <li>JavaScript 基础</li>\n\n    <li>Web APIs</li>\n  </ul>\n\n  <script>\n    // 获取所有 li 节点\n\n    const lis = document.querySelectorAll('ul li');\n\n    // 对所有的 li 节点添加事件监听\n\n    for (let i = 0; i < lis.length; i++) {\n      lis[i].addEventListener('click', function () {\n        // 前一个节点\n\n        console.log(this.previousSibling);\n\n        // 下一下节点\n\n        console.log(this.nextSibling);\n      });\n    }\n  </script>\n</body>"
        },
        {
          "type": "text",
          "text": "结论：\n\n\n\n- `previousSibling` 获取前一个节点，以相对位置查找节点，实际应用中非常灵活。\n\n- `nextSibling` 获取后一个节点，以相对位置查找节点，实际应用中非常灵活。"
        }
      ]
    }
  ]
};
