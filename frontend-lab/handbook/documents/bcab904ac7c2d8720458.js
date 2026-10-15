window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["bcab904ac7c2d8720458"] = {
  "id": "bcab904ac7c2d8720458",
  "title": "个人实战文档.md",
  "treatment": "章节知识与练习",
  "sections": [
    {
      "title": "个人实战文档",
      "trail": [
        "个人实战文档"
      ],
      "level": 1,
      "line": 1,
      "blocks": [
        {
          "type": "text",
          "text": "本次实战是对自己整个api阶段的总结。\n\n\n\n参考效果如下地址：\n\n\n\nhttp://erabbit.itheima.net/#/product/3995139\n\n\n\n本次实战主要分为以下几个模块。"
        }
      ]
    },
    {
      "title": "顶部导航模块",
      "trail": [
        "个人实战文档",
        "顶部导航模块"
      ],
      "level": 2,
      "line": 21,
      "blocks": [
        {
          "type": "text",
          "text": "<img src=\"assets/444.gif\">\n\n\n\n需求：\n\n\n\n1. 顶部导航开始不显示\n\n2. 等页面滑到主导航栏，这个**新顶部导航栏滑动下拉显示**，并且改为固定定位\n\n3. 等页面滑到上面，新顶部导航栏隐藏"
        }
      ]
    },
    {
      "title": "图片切换模块",
      "trail": [
        "个人实战文档",
        "图片切换模块"
      ],
      "level": 2,
      "line": 41,
      "blocks": [
        {
          "type": "text",
          "text": "<img src=\"assets/111.gif\">"
        }
      ]
    },
    {
      "title": "放大镜效果",
      "trail": [
        "个人实战文档",
        "放大镜效果"
      ],
      "level": 2,
      "line": 53,
      "blocks": [
        {
          "type": "text",
          "text": "<img src=\"assets/555.gif\">\n\n\n\n\n\n\n\n业务分析：\n\n\n\n①：鼠标经过对应小盒子，左侧中等盒子显示对应中等图片\n\n\n\n②： 鼠标经过中盒子，右侧会显示放大镜效果的大盒子\n\n\n\n③： 黑色遮罩盒子跟着鼠标来移动\n\n\n\n④： 鼠标在中等盒子上移动，大盒子的图片跟着显示对应位置\n\n\n\n\n\n\n\n\n\n\n\n思路分析：\n\n\n\n①：鼠标经过小盒子，左侧中等盒子显示对应中等图片\n\n\n\n1. 获取对应的元素\n\n2. 采取事件委托的形式，监听鼠标经过小盒子里面的图片， 注意此时需要使用 `mouseover` 事件，因为需要事件冒泡触发small \n\n3. 让鼠标经过小图片的爸爸li盒子，添加类，其余的li移除类（注意先移除，后添加）\n\n4. 鼠标经过小图片，可以拿到小图片的src， 可以做两件事\n\n   - 让中等盒子的图片换成这个 这个小图片的src\n\n   - 让大盒子的背景图片，也换成这个小图片的 src （稍后做）\n\n\n\n\n\n\n\n\n\n\n\n②： 鼠标经过中等盒子，右侧大盒子显示\n\n\n\n1. 用到鼠标经过和离开，鼠标经过中盒子，大盒子 利用 display 来显示和隐藏\n\n\n\n2. 鼠标离开不会立马消失，而是有200ms的延时，用户体验更好，所以尽量使用定时器做个延时 setTimeout\n\n\n\n3. 显示和隐藏也尽量定义一个函数，因为鼠标经过离开中等盒子，会显示隐藏，同时，**鼠标经过大盒子，也会显示和隐藏**\n\n\n\n4. 给大盒子里面的背景图片一个默认的第一张图片\n\n\n\n   ​\n\n\n\n③： 黑色遮罩盒子跟着鼠标来移动\n\n\n\n1.  先做鼠标经过 中等盒子，显示隐藏 黑色遮罩 的盒子\n\n\n\n2.  让黑色遮罩跟着鼠标来走, 需要用到鼠标移动事件  mousemove  \n\n\n\n3. 让黑色盒子的移动的核心思想：不断把鼠标在中等盒子内的坐标给黑色遮罩层 let  top 值，这样遮罩层就可以跟着移动了\n\n\n\n   - 需求\n\n\n\n     - 我们要的是 鼠标在 中等盒子内的坐标， 没有办法直接得到\n\n     - 得到1：  鼠标在页面中的坐标\n\n     - 得到2：  中等盒子在页面中的坐标\n\n\n\n   - 算法\n\n\n\n     - 得到鼠标在页面中的坐标    利用事件对象的  pageX  \n\n     - 得到middle中等盒子在页面中的坐标   middle.getBoundingClientRect()\n\n     - 鼠标在middle 盒子里面的坐标   =   鼠标在页面中的坐标  -   middle 中等盒子的坐标\n\n     - 黑色遮罩层不断得到       鼠标在middle 盒子中的坐标 就可以移动起来了\n\n\n\n     >注意 y坐标特殊，需要减去 页面被卷去的头部 \n\n     >\n\n     >为什么不用 box.offsetLet 和 box.offsetTop  因为这俩属性跟带有定位的父级有关系，很容被父级影响，而getBoundingClientRect() 不受定位的父元素的影响\n\n\n\n   - 限定遮罩的盒子只能在middle 内部移动，需要添加判断\n\n\n\n     - 限定水平方向 大于等于0 并且小于等于 400\n\n     - 限定垂直方向 大于等于0 并且小于等于 400\n\n\n\n   - 遮罩盒子移动的坐标： \n\n\n\n     - 声明一个 mx 作为移动的距离\n\n     - 水平坐标 x 如果 小于等于100 ，则移动的距离 mx 就是  0  不应该移动\n\n     - 水平坐标 如果 大于等于100 并且小于300，移动的距离就是  mx - 100 （100是遮罩盒子自身宽度的一半）\n\n     - 水平坐标 如果 大于等于300，移动的距离就是  mx   就是200  不应该在移动了\n\n     - 其实我们发现水平移动， 就在 100 ~ 200 之间移动的\n\n     - 垂直同理"
        },
        {
          "type": "code",
          "language": "javascript",
          "text": "let mx = 0,\n  my = 0;\n\nif (x <= 100) mx = 0;\n\nif (x > 100 && x < 300) mx = x - 100;\n\nif (x >= 300) mx = 200;\n\nif (y <= 100) my = 0;\n\nif (y > 100 && y < 300) my = y - 100;\n\nif (y >= 300) my = 200;"
        },
        {
          "type": "text",
          "text": "- 大盒子图片移动的计算方法：\n\n     - 中等盒子是 400px  大盒子 是 800px 的图片\n\n     - 中等盒子移动1px， 大盒子就应该移动2px， 只不过是负值"
        },
        {
          "type": "code",
          "language": "javascript",
          "text": "large.style.backgroundPositionX = -2 * mx + 'px';\n\nlarge.style.backgroundPositionY = -2 * my + 'px';"
        },
        {
          "type": "text",
          "text": "放大镜完整代码：\n\n\n\n   ​"
        }
      ]
    },
    {
      "title": "其他模块",
      "trail": [
        "个人实战文档",
        "其他模块"
      ],
      "level": 2,
      "line": 283,
      "blocks": [
        {
          "type": "text",
          "text": "此模块可以根据自己时间添加"
        }
      ]
    },
    {
      "title": "点击模块",
      "trail": [
        "个人实战文档",
        "其他模块",
        "点击模块"
      ],
      "level": 3,
      "line": 291,
      "blocks": [
        {
          "type": "text",
          "text": "<img src=\"assets/666.gif\">"
        }
      ]
    },
    {
      "title": "tab栏切换模块",
      "trail": [
        "个人实战文档",
        "其他模块",
        "tab栏切换模块"
      ],
      "level": 3,
      "line": 299,
      "blocks": [
        {
          "type": "text",
          "text": "<img src=\"assets/777.gif\">"
        }
      ]
    },
    {
      "title": "返回顶部模块",
      "trail": [
        "个人实战文档",
        "其他模块",
        "返回顶部模块"
      ],
      "level": 3,
      "line": 311,
      "blocks": [
        {
          "type": "text",
          "text": "页面滚动底部，可以出现一个侧边栏，点击返回顶部，可以返回顶部"
        }
      ]
    }
  ]
};
