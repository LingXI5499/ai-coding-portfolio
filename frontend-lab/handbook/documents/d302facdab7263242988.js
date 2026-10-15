window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["d302facdab7263242988"] = {
  "id": "d302facdab7263242988",
  "title": "README.md",
  "treatment": "章节知识与练习",
  "sections": [
    {
      "title": "Web APIs - 第3天",
      "trail": [
        "Web APIs - 第3天"
      ],
      "level": 1,
      "line": 1,
      "blocks": [
        {
          "type": "text",
          "text": "> 进一步学习 事件进阶，实现更多交互的网页特效，结合事件流的特征优化事件执行的效率\n\n\n\n- 掌握阻止事件冒泡的方法\n\n- 理解事件委托的实现原理"
        }
      ]
    },
    {
      "title": "事件流",
      "trail": [
        "Web APIs - 第3天",
        "事件流"
      ],
      "level": 2,
      "line": 15,
      "blocks": [
        {
          "type": "text",
          "text": "事件流是对事件执行过程的描述，了解事件的执行过程有助于加深对事件的理解，提升开发实践中对事件运用的灵活度。\n\n\n\n[课程配图见原资料]\n\n\n\n如上图所示，任意事件被触发时总会经历两个阶段：【捕获阶段】和【冒泡阶段】。\n\n\n\n简言之，捕获阶段是【从父到子】的传导过程，冒泡阶段是【从子向父】的传导过程。"
        }
      ]
    },
    {
      "title": "捕获和冒泡",
      "trail": [
        "Web APIs - 第3天",
        "事件流",
        "捕获和冒泡"
      ],
      "level": 3,
      "line": 35,
      "blocks": [
        {
          "type": "text",
          "text": "了解了什么是事件流之后，我们来看事件流是如何影响事件执行的："
        },
        {
          "type": "code",
          "language": "html",
          "text": "<body>\n  <h3>事件流</h3>\n\n  <p>事件流是事件在执行时的底层机制，主要体现在父子盒子之间事件的执行上。</p>\n\n  <div class=\"outer\">\n    <div class=\"inner\">\n      <div class=\"child\"></div>\n    </div>\n  </div>\n\n  <script>\n    // 获取嵌套的3个节点\n\n    const outer = document.querySelector('.outer');\n\n    const inner = document.querySelector('.inner');\n\n    const child = document.querySelector('.child');\n\n    // html 元素添加事件\n\n    document.documentElement.addEventListener('click', function () {\n      console.log('html...');\n    });\n\n    // body 元素添加事件\n\n    document.body.addEventListener('click', function () {\n      console.log('body...');\n    });\n\n    // 外层的盒子添加事件\n\n    outer.addEventListener('click', function () {\n      console.log('outer...');\n    });\n\n    // 中间的盒子添加事件\n\n    outer.addEventListener('click', function () {\n      console.log('inner...');\n    });\n\n    // 内层的盒子添加事件\n\n    outer.addEventListener('click', function () {\n      console.log('child...');\n    });\n  </script>\n</body>"
        },
        {
          "type": "text",
          "text": "执行上述代码后发现，当单击事件触发时，其祖先元素的单击事件也【相继触发】，这是为什么呢？\n\n\n\n结合事件流的特征，我们知道当某个元素的事件被触发时，事件总是会先经过其祖先才能到达当前元素，然后再由当前元素向祖先传递，事件在流动的过程中遇到相同的事件便会被触发。\n\n\n\n再来关注一个细节就是事件相继触发的【执行顺序】，事件的执行顺序是可控制的，即可以在捕获阶段被执行，也可以在冒泡阶段被执行。\n\n\n\n如果事件是在冒泡阶段执行的，我们称为冒泡模式，它会先执行子盒子事件再去执行父盒子事件，默认是冒泡模式。\n\n\n\n如果事件是在捕获阶段执行的，我们称为捕获模式，它会先执行父盒子事件再去执行子盒子事件。"
        },
        {
          "type": "code",
          "language": "html",
          "text": "<body>\n  <h3>事件流</h3>\n\n  <p>事件流是事件在执行时的底层机制，主要体现在父子盒子之间事件的执行上。</p>\n\n  <div class=\"outer\">\n    <div class=\"inner\"></div>\n  </div>\n\n  <script>\n    // 获取嵌套的3个节点\n\n    const outer = document.querySelector('.outer');\n\n    const inner = document.querySelector('.inner');\n\n    // 外层的盒子\n\n    outer.addEventListener(\n      'click',\n      function () {\n        console.log('outer...');\n      },\n      true,\n    ); // true 表示在捕获阶段执行事件\n\n    // 中间的盒子\n\n    outer.addEventListener(\n      'click',\n      function () {\n        console.log('inner...');\n      },\n      true,\n    );\n  </script>\n</body>"
        },
        {
          "type": "text",
          "text": "结论：\n\n\n\n1. `addEventListener` 第3个参数决定了事件是在捕获阶段触发还是在冒泡阶段触发\n\n2. `addEventListener` 第3个参数为  `true` 表示捕获阶段触发，`false` 表示冒泡阶段触发，默认值为 `false`\n\n3. 事件流只会在父子元素具有相同事件类型时才会产生影响\n\n4. 绝大部分场景都采用默认的冒泡模式（其中一个原因是早期 IE 不支持捕获）"
        }
      ]
    },
    {
      "title": "阻止冒泡",
      "trail": [
        "Web APIs - 第3天",
        "事件流",
        "阻止冒泡"
      ],
      "level": 3,
      "line": 213,
      "blocks": [
        {
          "type": "text",
          "text": "阻止冒泡是指阻断事件的流动，保证事件只在当前元素被执行，而不再去影响到其对应的祖先元素。"
        },
        {
          "type": "code",
          "language": "html",
          "text": "<body>\n  <h3>阻止冒泡</h3>\n\n  <p>\n    阻止冒泡是指阻断事件的流动，保证事件只在当前元素被执行，而不再去影响到其对应的祖先元素。\n  </p>\n\n  <div class=\"outer\">\n    <div class=\"inner\">\n      <div class=\"child\"></div>\n    </div>\n  </div>\n\n  <script>\n    // 获取嵌套的3个节点\n\n    const outer = document.querySelector('.outer');\n\n    const inner = document.querySelector('.inner');\n\n    const child = document.querySelector('.child');\n\n    // 外层的盒子\n\n    outer.addEventListener('click', function () {\n      console.log('outer...');\n    });\n\n    // 中间的盒子\n\n    inner.addEventListener('click', function (ev) {\n      console.log('inner...');\n\n      // 阻止事件冒泡\n\n      ev.stopPropagation();\n    });\n\n    // 内层的盒子\n\n    child.addEventListener('click', function (ev) {\n      console.log('child...');\n\n      // 借助事件对象，阻止事件向上冒泡\n\n      ev.stopPropagation();\n    });\n  </script>\n</body>"
        },
        {
          "type": "text",
          "text": "结论：事件对象中的 `ev.stopPropagation` 方法，专门用来阻止事件冒泡。\n\n\n\n>鼠标经过事件：\n\n>\n\n>mouseover 和 mouseout 会有冒泡效果\n\n>\n\n>mouseenter  和 mouseleave   没有冒泡效果 (推荐)"
        }
      ]
    },
    {
      "title": "事件委托",
      "trail": [
        "Web APIs - 第3天",
        "事件委托"
      ],
      "level": 2,
      "line": 315,
      "blocks": [
        {
          "type": "text",
          "text": "事件委托是利用事件流的特征解决一些现实开发需求的知识技巧，主要的作用是提升程序效率。\n\n\n\n大量的事件监听是比较耗费性能的，如下代码所示"
        },
        {
          "type": "code",
          "language": "html",
          "text": "<script>\n  // 假设页面中有 10000 个 button 元素\n\n  const buttons = document.querySelectorAll('table button');\n\n  for (let i = 0; i <= buttons.length; i++) {\n    // 为 10000 个 button 元素添加了事件\n\n    buttons.addEventListener('click', function () {\n      // 省略具体执行逻辑...\n    });\n  }\n</script>"
        },
        {
          "type": "text",
          "text": "利用事件流的特征，可以对上述的代码进行优化，事件的的冒泡模式总是会将事件流向其父元素的，如果父元素监听了相同的事件类型，那么父元素的事件就会被触发并执行，正是利用这一特征对上述代码进行优化，如下代码所示："
        },
        {
          "type": "code",
          "language": "html",
          "text": "<script>\n  // 假设页面中有 10000 个 button 元素\n\n  let buttons = document.querySelectorAll('table button');\n\n  // 假设上述的 10000 个 buttom 元素共同的祖先元素是 table\n\n  let parents = document.querySelector('table');\n\n  parents.addEventListener('click', function () {\n    console.log('点击任意子元素都会触发事件...');\n  });\n</script>"
        },
        {
          "type": "text",
          "text": "我们的最终目的是保证只有点击 button 子元素才去执行事件的回调函数，如何判断用户点击是哪一个子元素呢？\n\n\n\n[课程配图见原资料]\n\n\n\n事件对象中的属性 `target` 或 `srcElement`属性表示真正触发事件的元素，它是一个元素类型的节点。"
        },
        {
          "type": "code",
          "language": "html",
          "text": "<script>\n  // 假设页面中有 10000 个 button 元素\n\n  const buttons = document.querySelectorAll('table button');\n\n  // 假设上述的 10000 个 buttom 元素共同的祖先元素是 table\n\n  const parents = document.querySelector('table');\n\n  parents.addEventListener('click', function (ev) {\n    // console.log(ev.target);\n\n    // 只有 button 元素才会真正去执行逻辑\n\n    if (ev.target.tagName === 'BUTTON') {\n      // 执行的逻辑\n    }\n  });\n</script>"
        },
        {
          "type": "text",
          "text": "优化过的代码只对祖先元素添加事件监听，相比对 10000 个元素添加事件监听执行效率要高许多！！！"
        }
      ]
    },
    {
      "title": "页面加载事件",
      "trail": [
        "Web APIs - 第3天",
        "其他事件",
        "页面加载事件"
      ],
      "level": 3,
      "line": 439,
      "blocks": [
        {
          "type": "text",
          "text": "加载外部资源（如图片、外联CSS和JavaScript等）加载完毕时触发的事件\n\n\n\n有些时候需要等页面资源全部处理完了做一些事情\n\n\n\n**事件名：load**\n\n\n\n监听页面所有资源加载完毕："
        },
        {
          "type": "code",
          "language": "javascript",
          "text": "window.addEventListener('load', function () {\n  // xxxxx\n});"
        }
      ]
    },
    {
      "title": "元素滚动事件",
      "trail": [
        "Web APIs - 第3天",
        "其他事件",
        "元素滚动事件"
      ],
      "level": 3,
      "line": 471,
      "blocks": [
        {
          "type": "text",
          "text": "滚动条在滚动的时候持续触发的事件"
        },
        {
          "type": "code",
          "language": "javascript",
          "text": "window.addEventListener('scroll', function () {\n  // xxxxx\n});"
        }
      ]
    },
    {
      "title": "页面尺寸事件",
      "trail": [
        "Web APIs - 第3天",
        "其他事件",
        "页面尺寸事件"
      ],
      "level": 3,
      "line": 491,
      "blocks": [
        {
          "type": "text",
          "text": "会在窗口尺寸改变的时候触发事件："
        },
        {
          "type": "code",
          "language": "javascript",
          "text": "window.addEventListener('resize', function () {\n  // xxxxx\n});"
        }
      ]
    },
    {
      "title": "元素尺寸与位置",
      "trail": [
        "Web APIs - 第3天",
        "元素尺寸与位置"
      ],
      "level": 2,
      "line": 511,
      "blocks": [
        {
          "type": "text",
          "text": "获取元素的自身宽高、包含元素自身设置的宽高、padding、border\n\n\n\noffsetWidth和offsetHeight  \n\n\n\n获取出来的是数值,方便计算\n\n\n\n注意: 获取的是可视宽高, 如果盒子是隐藏的,获取的结果是0"
        }
      ]
    }
  ]
};
