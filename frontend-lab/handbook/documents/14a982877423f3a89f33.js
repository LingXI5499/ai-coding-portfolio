window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["14a982877423f3a89f33"] = {
  "id": "14a982877423f3a89f33",
  "title": "web APIs第三天.pdf",
  "treatment": "课件页级文本（配图回溯原件）",
  "sections": [
    {
      "title": "第1页",
      "level": 1,
      "page": 1,
      "blocks": [
        {
          "type": "text",
          "text": "全选文本框案例1\n需求：用户点击全选，则下面复选框全部选择，取消全选则全部取消\n分析：\n①：全选复选框点击，可以得到当前按钮的 checked\n②：把下面所有的小复选框状态checked，改为和全选复选框一致"
        }
      ]
    },
    {
      "title": "第2页",
      "level": 1,
      "page": 2,
      "blocks": [
        {
          "type": "text",
          "text": "全选文本框案例2\n需求：用户点击全选，则下面复选框全部选择，取消全选则全部取消,文字对应变化\n分析：\n①：遍历下面的所有的checkbox,添加点击事件\n②：检查小复选框选中的个数，是不是等于 小复选框总的个数，\n③： 把结果给 全选按钮\n④： 利用css 复选框选择器   input:checked"
        }
      ]
    },
    {
      "title": "第3页",
      "level": 1,
      "page": 3,
      "blocks": [
        {
          "type": "text",
          "text": "Web APIs 第三天\nDom事件进阶"
        }
      ]
    },
    {
      "title": "第4页",
      "level": 1,
      "page": 4,
      "blocks": [
        {
          "type": "text",
          "text": "学习目标\nLearning Objectives\n1. 学习事件流，事件委托，其他事件等知识\n2. 优化多个事件绑定和实现常见网页交互"
        }
      ]
    },
    {
      "title": "第5页",
      "level": 1,
      "page": 5,
      "blocks": [
        {
          "type": "text",
          "text": "目录\nContents\nu 事件流\nu 事件委托\nu 其他事件\nu 元素尺寸与位置\nu 综合案例"
        }
      ]
    },
    {
      "title": "第6页",
      "level": 1,
      "page": 6,
      "blocks": [
        {
          "type": "text",
          "text": "事件流\n• 事件流与两个阶段说明\n• 事件捕获\n• 事件冒泡\n• 阻止冒泡\n• 解绑事件\n01"
        }
      ]
    },
    {
      "title": "第7页",
      "level": 1,
      "page": 7,
      "blocks": [
        {
          "type": "text",
          "text": "1.1 事件流和两个阶段说明\n目标：能够说出事件流经过的2个阶段\nl 事件流指的是事件完整执行过程中的流动路径\nl 说明：假设页面里有个div，当触发事件时，会经历两个阶段，分别是捕获阶段、冒泡阶段\nl 简单来说：捕获阶段是 从父到子  冒泡阶段是从子到父\nl 实际工作都是使用事件冒泡为主"
        }
      ]
    },
    {
      "title": "第8页",
      "level": 1,
      "page": 8,
      "blocks": [
        {
          "type": "text",
          "text": "事件流\n• 事件流与两个阶段说明\n• 事件捕获\n• 事件冒泡\n• 阻止冒泡\n• 解绑事件\n01"
        }
      ]
    },
    {
      "title": "第9页",
      "level": 1,
      "page": 9,
      "blocks": [
        {
          "type": "text",
          "text": "1.2 事件捕获\n目标：简单了解事件捕获执行过程\nl 事件捕获概念：\n      从DOM的根元素开始去执行对应的事件 (从外到里)\nl 事件捕获需要写对应代码才能看到效果\nl 代码：\nl 说明：\nØ addEventListener第三个参数传入 true 代表是捕获阶段触发（很少使用）\nØ 若传入false代表冒泡阶段触发，默认就是false\nØ 若是用 L0 事件监听，则只有冒泡阶段，没有捕获"
        }
      ]
    },
    {
      "title": "第10页",
      "level": 1,
      "page": 10,
      "blocks": [
        {
          "type": "text",
          "text": "事件流\n• 事件流与两个阶段说明\n• 事件捕获\n• 事件冒泡\n• 阻止冒泡\n• 解绑事件\n01"
        }
      ]
    },
    {
      "title": "第11页",
      "level": 1,
      "page": 11,
      "blocks": [
        {
          "type": "text",
          "text": "1.3 事件冒泡\n目标：能够说出事件冒泡的执行过程\n事件冒泡概念: \n      当一个元素的事件被触发时，同样的事件将会在该元素的所有祖先元素中依次被触发。这一过程被称为事件冒\n泡\nl 简单理解：当一个元素触发事件后，会依次向上调用所有父级元素的 同名事件\nl 事件冒泡是默认存在的\nl L2事件监听第三个参数是 false，或者默认都是冒泡"
        }
      ]
    },
    {
      "title": "第12页",
      "level": 1,
      "page": 12,
      "blocks": [
        {
          "type": "text",
          "text": "事件流\n• 事件流与两个阶段说明\n• 事件捕获\n• 事件冒泡\n• 阻止冒泡\n• 解绑事件\n01"
        }
      ]
    },
    {
      "title": "第13页",
      "level": 1,
      "page": 13,
      "blocks": [
        {
          "type": "text",
          "text": "1.4 阻止冒泡\n目标：能够写出阻止冒泡的代码\nl 问题：因为默认就有冒泡模式的存在，所以容易导致事件影响到父级元素\nl 需求：若想把事件就限制在当前元素内，就需要阻止事件冒泡\nl 前提：阻止事件冒泡需要拿到事件对象\nl 语法：\nl 注意：此方法可以阻断事件流动传播，不光在冒泡阶段有效，捕获阶段也有效"
        }
      ]
    },
    {
      "title": "第14页",
      "level": 1,
      "page": 14,
      "blocks": [
        {
          "type": "text",
          "text": "1.4 阻止冒泡\n我们某些情况下需要阻止默认行为的发生，比如 阻止 链接的跳转，表单域跳转\nl 语法："
        }
      ]
    },
    {
      "title": "第15页",
      "level": 1,
      "page": 15,
      "blocks": [
        {
          "type": "text",
          "text": "总结总结\n1. 阻止冒泡如何做？\n2. 阻止元素默认行为如何做？"
        }
      ]
    },
    {
      "title": "第16页",
      "level": 1,
      "page": 16,
      "blocks": [
        {
          "type": "text",
          "text": "事件流\n• 事件流与两个阶段说明\n• 事件捕获\n• 事件冒泡\n• 阻止冒泡\n• 解绑事件\n01"
        }
      ]
    },
    {
      "title": "第17页",
      "level": 1,
      "page": 17,
      "blocks": [
        {
          "type": "text",
          "text": "1.5 解绑事件\non事件方式，直接使用null覆盖偶就可以实现事件的解绑\n语法："
        }
      ]
    },
    {
      "title": "第18页",
      "level": 1,
      "page": 18,
      "blocks": [
        {
          "type": "text",
          "text": "1.5 解绑事件\naddEventListener方式，必须使用：\nremoveEventListener(事件类型, 事件处理函数,  [获取捕获或者冒泡阶段])\n例如：\n注意：匿名函数无法被解绑"
        }
      ]
    },
    {
      "title": "第19页",
      "level": 1,
      "page": 19,
      "blocks": [
        {
          "type": "text",
          "text": "鼠标经过事件的区别\nl 鼠标经过事件：\nØ mouseover 和 mouseout 会有冒泡效果\nØ mouseenter  和 mouseleave   没有冒泡效果 (推荐)"
        }
      ]
    },
    {
      "title": "第20页",
      "level": 1,
      "page": 20,
      "blocks": [
        {
          "type": "text",
          "text": "两种注册事件的区别\nl 传统on注册（L0）\nØ 同一个对象,后面注册的事件会覆盖前面注册(同一个事件)\nØ 直接使用null覆盖偶就可以实现事件的解绑\nØ 都是冒泡阶段执行的\nl 事件监听注册（L2）\nØ 语法: addEventListener(事件类型, 事件处理函数, 是否使用捕获)\nØ 后面注册的事件不会覆盖前面注册的事件(同一个事件)\nØ 可以通过第三个参数去确定是在冒泡或者捕获阶段执行\nØ 必须使用removeEventListener(事件类型, 事件处理函数, 获取捕获或者冒泡阶段)\nØ 匿名函数无法被解绑"
        }
      ]
    },
    {
      "title": "第21页",
      "level": 1,
      "page": 21,
      "blocks": [
        {
          "type": "text",
          "text": "目录\nContents\nu 事件流\nu 事件委托\nu 其他事件\nu 元素尺寸与位置\nu 综合案例"
        }
      ]
    },
    {
      "title": "第22页",
      "level": 1,
      "page": 22,
      "blocks": [
        {
          "type": "text",
          "text": "委托：\n目标：能够说出事件委托的好处"
        }
      ]
    },
    {
      "title": "第23页",
      "level": 1,
      "page": 23,
      "blocks": [
        {
          "type": "text",
          "text": "思考\n1. 如果同时给多个元素注册事件，我们怎么做的？\nØ for循环注册事件\n2. 有没有一种技巧 注册一次事件就能完成以上效果呢？"
        }
      ]
    },
    {
      "title": "第24页",
      "level": 1,
      "page": 24,
      "blocks": [
        {
          "type": "text",
          "text": "事件委托是利用事件流的特征解决一些开发需求的知识技巧\nØ 优点：减少注册次数，可以提高程序性能\nØ 原理：事件委托其实是利用事件冒泡的特点。\nØ 给父元素注册事件，当我们触发子元素的时候，会冒泡到父元素身上，从而触发父元素的事\n件\nØ 实现：事件对象.target. tagName 可以获得真正触发事件的元素\n目标：能够说出事件委托的好处\nul父元素li 子元素 点击事件\nul.addEventListener('click', function(){}) 执行父级点击事件"
        }
      ]
    },
    {
      "title": "第25页",
      "level": 1,
      "page": 25,
      "blocks": [
        {
          "type": "text",
          "text": "总结总结\n1. 事件委托的好处是什么？\nØ 减少注册次数，提高了程序性能\n2. 事件委托是委托给了谁？父元素还是子元素？\nØ 父元素\n3. 如何找到真正触发的元素？\nØ 事件对象.target.tagName"
        }
      ]
    },
    {
      "title": "第26页",
      "level": 1,
      "page": 26,
      "blocks": [
        {
          "type": "text",
          "text": "案例\n tab栏切换改造\n需求：优化程序，将tab切换案例改为事件委托写法"
        }
      ]
    },
    {
      "title": "第27页",
      "level": 1,
      "page": 27,
      "blocks": [
        {
          "type": "text",
          "text": "案例\n tab栏切换改造\n需求：优化程序，将tab切换案例改为事件委托写法\n思路：\n①：给a的父级 注册点击事件，采取事件委托方式\n②： 如果点击的是A , 则进行排他思想，删除添加类\n③： 注意判断的方式 利用 e.target.tagName \n④： 因为没有索引号了，所以这里我们可以自定义属性，给5个链接添加序号\n⑤： 下面大盒子获取索引号的方式  e.target.dataset.id 号， 然后进行排他思想"
        }
      ]
    },
    {
      "title": "第28页",
      "level": 1,
      "page": 28,
      "blocks": [
        {
          "type": "text",
          "text": "目录\nContents\nu 事件流\nu 事件委托\nu 其他事件\nu 元素尺寸与位置\nu 综合案例"
        }
      ]
    },
    {
      "title": "第29页",
      "level": 1,
      "page": 29,
      "blocks": [
        {
          "type": "text",
          "text": "其他事件\n• 页面加载事件\n• 元素滚动事件\n• 页面尺寸事件\n03\n目标：掌握新的事件，做更强交互"
        }
      ]
    },
    {
      "title": "第30页",
      "level": 1,
      "page": 30,
      "blocks": [
        {
          "type": "text",
          "text": "3.1 页面加载事件\nl 加载外部资源（如图片、外联CSS和JavaScript等）加载完毕时触发的事件\nl 为什么要学？\nØ 有些时候需要等页面资源全部处理完了做一些事情\nØ 老代码喜欢把 script 写在 head 中，这时候直接找 dom 元素找不到\nl 事件名：load\nl 监听页面所有资源加载完毕：\nØ 给 window 添加 load 事件\nl 注意：不光可以监听整个页面资源加载完毕，也可以针对某个资源绑定load事件"
        }
      ]
    },
    {
      "title": "第31页",
      "level": 1,
      "page": 31,
      "blocks": [
        {
          "type": "text",
          "text": "3.1 页面加载事件\nl 当初始的 HTML 文档被完全加载和解析完成之后，DOMContentLoaded 事件被触发，而无需等待样式表、图像等完\n全加载\nl 事件名：DOMContentLoaded\nl 监听页面DOM加载完毕：\nØ 给 document 添加 DOMContentLoaded 事件"
        }
      ]
    },
    {
      "title": "第32页",
      "level": 1,
      "page": 32,
      "blocks": [
        {
          "type": "text",
          "text": "总结总结\n1. 页面加载事件有哪两个？如何添加？\nØ load 事件\nØ 监听整个页面资源给 window 加\nØ DOMContentLoaded\nØ 给 document 加\nØ 无需等待样式表、图像等完全加载"
        }
      ]
    },
    {
      "title": "第33页",
      "level": 1,
      "page": 33,
      "blocks": [
        {
          "type": "text",
          "text": "其他事件\n• 页面加载事件\n• 元素滚动事件\n• 页面尺寸事件\n03\n目标：掌握新的事件，做更强交互"
        }
      ]
    },
    {
      "title": "第34页",
      "level": 1,
      "page": 34,
      "blocks": [
        {
          "type": "text",
          "text": "3.2 页面滚动事件\nl 滚动条在滚动的时候持续触发的事件\nl 为什么要学？\nØ 很多网页需要检测用户把页面滚动到某个区域后做一些处理， 比如固定导航栏，比如返回顶部\nl 事件名：scroll\nl 监听整个页面滚动：\nØ 给 window 或 document 添加 scroll 事件\nl 监听某个元素的内部滚动直接给某个元素加即可"
        }
      ]
    },
    {
      "title": "第35页",
      "level": 1,
      "page": 35,
      "blocks": [
        {
          "type": "text",
          "text": "3.2 页面滚动事件\nl 使用场景：\nØ 我们想要页面滚动一段距离，比如100px，就让某些元素\nØ 显示隐藏，那我们怎么知道，页面滚动了100像素呢？\nl   就可以使用scroll 来检测滚动的距离~~~"
        }
      ]
    },
    {
      "title": "第36页",
      "level": 1,
      "page": 36,
      "blocks": [
        {
          "type": "text",
          "text": "3.2 页面滚动事件-获取位置\nl scrollLeft和scrollTop （属性）\nØ 获取被卷去的大小\nØ 获取元素内容往左、往上滚出去看不到的距离\nØ 这两个值是可读写的\nl 尽量在scroll事件里面获取被卷去的距离\n元素\n内容\nscrollWidth\nscrollHeight\nscrollLeft\nscrollTop"
        }
      ]
    },
    {
      "title": "第37页",
      "level": 1,
      "page": 37,
      "blocks": [
        {
          "type": "text",
          "text": "3.2 页面滚动事件-获取位置\nl 开发中，我们经常检测页面滚动的距离，比如页面滚动100像素，就可以显示一个元素，或者固定一个元素\ndocument.documentElement   HTML 文档返回对象为HTML元素\n注意事项"
        }
      ]
    },
    {
      "title": "第38页",
      "level": 1,
      "page": 38,
      "blocks": [
        {
          "type": "text",
          "text": "总结总结\n1. 被卷去的头部或者左侧用那个属性？是否可以读取和修改？\nØ scrollTop / scrollLeft\nØ 可以读取，也可以修改（赋值）\n2. 检测页面滚动的头部距离（被卷去的头部）用那个属性？\nØ document.documentElement.scrollTop"
        }
      ]
    },
    {
      "title": "第39页",
      "level": 1,
      "page": 39,
      "blocks": [
        {
          "type": "text",
          "text": "案例\n 页面滚动显示隐藏侧边栏\n需求：当页面滚动大于300像素的距离时候，就显示侧边栏，否则隐藏侧边栏"
        }
      ]
    },
    {
      "title": "第40页",
      "level": 1,
      "page": 40,
      "blocks": [
        {
          "type": "text",
          "text": "案例\n 页面滚动显示隐藏侧边栏\n需求：当页面滚动大于300像素的距离时候，就显示侧边栏，否则隐藏侧边栏\n分析：\n①：需要用到页面滚动事件\n②：检测页面被卷去的头部，如果大于300，就让侧边栏显示\n③：显示和隐藏配合css过渡，利用opacity加渐变效果"
        }
      ]
    },
    {
      "title": "第41页",
      "level": 1,
      "page": 41,
      "blocks": [
        {
          "type": "text",
          "text": "3.2 页面滚动事件-滚动到指定的坐标\nl scrollTo() 方法可把内容滚动到指定的坐标\nl 语法：\n元素.scrollTo(x, y)\nl 例如："
        }
      ]
    },
    {
      "title": "第42页",
      "level": 1,
      "page": 42,
      "blocks": [
        {
          "type": "text",
          "text": "案例\n 返回顶部\n需求：点击返回按钮，页面会返回顶部"
        }
      ]
    },
    {
      "title": "第43页",
      "level": 1,
      "page": 43,
      "blocks": [
        {
          "type": "text",
          "text": "案例\n 返回顶部\n需求：点击返回按钮，页面会返回顶部\n分析：\n①：绑定点击事件\n②：利用scrollTop 让页面返回顶部"
        }
      ]
    },
    {
      "title": "第44页",
      "level": 1,
      "page": 44,
      "blocks": [
        {
          "type": "text",
          "text": "其他事件\n• 页面加载事件\n• 元素滚动事件\n• 页面尺寸事件\n03\n目标：掌握新的事件，做更强交互"
        }
      ]
    },
    {
      "title": "第45页",
      "level": 1,
      "page": 45,
      "blocks": [
        {
          "type": "text",
          "text": "l 会在窗口尺寸改变的时候触发事件：\nØ resize\nl 检测屏幕宽度：\n3.3 页面尺寸事件"
        }
      ]
    },
    {
      "title": "第46页",
      "level": 1,
      "page": 46,
      "blocks": [
        {
          "type": "text",
          "text": "3.3 页面尺寸事件-获取元素宽高\nl 获取宽高：\nØ 获取元素的可见部分宽高（不包含边框，margin，滚动条等）\nØ clientWidth和clientHeight\nclientWidth\nclientHeight\nborder\nborder\nborder\npadding\npadding\npadding\npadding\nborder"
        }
      ]
    },
    {
      "title": "第47页",
      "level": 1,
      "page": 47,
      "blocks": [
        {
          "type": "text",
          "text": "案例\n Rem基准值\n需求：分析 flexible.js 源码"
        }
      ]
    },
    {
      "title": "第48页",
      "level": 1,
      "page": 48,
      "blocks": [
        {
          "type": "text",
          "text": "目录\nContents\nu 事件流\nu 事件委托\nu 其他事件\nu 元素尺寸与位置\nu 综合案例"
        }
      ]
    },
    {
      "title": "第49页",
      "level": 1,
      "page": 49,
      "blocks": [
        {
          "type": "text",
          "text": "元素尺寸于位置04"
        }
      ]
    },
    {
      "title": "第50页",
      "level": 1,
      "page": 50,
      "blocks": [
        {
          "type": "text",
          "text": "l 使用场景：\nØ 前面案例滚动多少距离，都是我们自己算的，最好是页面滚动到某个元素，就可以做某些事。\nØ 简单说，就是通过js的方式，得到元素在页面中的位置\nØ 这样我们可以做，页面滚动到这个位置，就可以做某些操作，省去计算了\n4. 元素尺寸于位置"
        }
      ]
    },
    {
      "title": "第51页",
      "level": 1,
      "page": 51,
      "blocks": [
        {
          "type": "text",
          "text": "4. 元素尺寸于位置-尺寸\nl 获取宽高：\nØ 获取元素的自身宽高、包含元素自身设置的宽高、padding、border\nØ offsetWidth和offsetHeight  \nØ 获取出来的是数值,方便计算\nØ 注意: 获取的是可视宽高, 如果盒子是隐藏的,获取的结果是0\nl 获取位置：\nØ 获取元素距离自己定位父级元素的左、上距离\nØ offsetLeft和offsetTop  注意是只读属性\n内容\noffsetWidth\noffsetHeight\nborder\npadding\npadding\npadding\npadding\noffsetLeft\noffsetTop\n定位父级（offsetParent）\nborder\nborder\nborder"
        }
      ]
    },
    {
      "title": "第52页",
      "level": 1,
      "page": 52,
      "blocks": [
        {
          "type": "text",
          "text": "4. 元素尺寸于位置-尺寸\nl 获取位置：\n1. offsetLeft和offsetTop  注意是只读属性\nØ 获取元素距离自己定位父级元素的左、上距离 内容\noffsetWidth\noffsetHeight\nborder\npadding\npadding\npadding\npadding\noffsetLeft\noffsetTop\n定位父级（offsetParent）\nborder\nborder\nborder"
        }
      ]
    },
    {
      "title": "第53页",
      "level": 1,
      "page": 53,
      "blocks": [
        {
          "type": "text",
          "text": "总结总结\n1. offsetWidth和offsetHeight是得到元素什么的宽高？\nØ 内容 + padding +  border\n2. offsetTop和offsetLeft 得到位置以谁为准？\nØ 带有定位的父级\nØ 如果都没有则以 文档左上角 为准"
        }
      ]
    },
    {
      "title": "第54页",
      "level": 1,
      "page": 54,
      "blocks": [
        {
          "type": "text",
          "text": "仿京东固定导航栏案例\n需求：当页面滚动到秒杀模块，导航栏自动滑入，否则滑出\n分析：\n①：用到页面滚动事件\n②：检测页面滚动大于等于 秒杀模块的位置 则滑入，否则滑出\n③：主要移动的是秒杀模块的顶部位置\n案例"
        }
      ]
    },
    {
      "title": "第55页",
      "level": 1,
      "page": 55,
      "blocks": [
        {
          "type": "text",
          "text": "实现bilibili 点击小滑块移动效果\n需求：当点击链接，下面红色滑块跟着移动\n分析：\n①：用到事件委托\n②：点击链接得到当前元素的 offsetLeft值\n③：修改line 颜色块的 left 值  =  点击链接的offsetLeft\n④： 添加过渡效果 \n案例"
        }
      ]
    },
    {
      "title": "第56页",
      "level": 1,
      "page": 56,
      "blocks": [
        {
          "type": "text",
          "text": "4. 元素尺寸于位置-尺寸\nl 获取位置：\n2.  element.getBoundingClientRect()\n方法返回元素的大小及其相对于视口的位置 内容\noffsetWidth\noffsetHeight\nborder\npadding\npadding\npadding\npadding\noffsetLeft\noffsetTop\n定位父级（offsetParent）\nborder\nborder\nborder"
        }
      ]
    },
    {
      "title": "第57页",
      "level": 1,
      "page": 57,
      "blocks": [
        {
          "type": "text",
          "text": "总结：\n属性 作用 说明\nscrollLeft和scrollTop 被卷去的头部和左侧 配合页面滚动来用，可读写\nclientWidth 和 clientHeight 获得元素宽度和高度 不包含border,margin，滚动条 用于js\n获取元素大小，只读属性\noffsetWidth和offsetHeight  获得元素宽度和高度 包含border、padding，滚动条等，只读\noffsetLeft和offsetTop 获取元素距离自己定位父\n级元素的左、上距离\n获取元素位置的时候使用，只读属性"
        }
      ]
    },
    {
      "title": "第58页",
      "level": 1,
      "page": 58,
      "blocks": [
        {
          "type": "text",
          "text": "目录\nContents\nu 事件流\nu 事件委托\nu 其他事件\nu 元素尺寸与位置\nu 综合案例"
        }
      ]
    },
    {
      "title": "第59页",
      "level": 1,
      "page": 59,
      "blocks": [
        {
          "type": "text",
          "text": "电梯导航\n需求：点击不同的模块，页面可以自动跳转不同的位置\n案例"
        }
      ]
    },
    {
      "title": "第60页",
      "level": 1,
      "page": 60,
      "blocks": [
        {
          "type": "text",
          "text": "电梯导航\n需求：点击不同的模块，页面可以自动跳转不同的位置\n模块分析：\n①：页面滚动到对应位置，导航显示，否则隐藏模块\n②：点击导航对应小模块，页面 会跳到对应大模块位置\n③：页面滚动到对应位置，电梯导航对应模块自动发生变化\n案例"
        }
      ]
    },
    {
      "title": "第61页",
      "level": 1,
      "page": 61,
      "blocks": [
        {
          "type": "text",
          "text": "电梯导航\n需求：点击不同的模块，页面可以自动跳转不同的位置\n模块分析：\n①：显示隐藏电梯盒子和返回顶部已经完成，可以放到自执行函数里面，防止变量污染\n②：电梯模块单独放到自执行函数里面\n③：点击每个模块，页面自动滚动到对应模块，使用事件委托方法更加简单\n④：页面滚动到对应位置，电梯导航对应模块自动发生变化\n案例"
        }
      ]
    },
    {
      "title": "第62页",
      "level": 1,
      "page": 62,
      "blocks": [
        {
          "type": "text",
          "text": "电梯导航\n需求：点击不同的模块，页面可以自动跳转不同的位置\n模块分析：\n①：显示隐藏电梯盒子和返回顶部已经完成，可以放到自执行函数里面，防止变量污染\n案例"
        }
      ]
    },
    {
      "title": "第63页",
      "level": 1,
      "page": 63,
      "blocks": [
        {
          "type": "text",
          "text": "电梯导航\n需求：点击不同的模块，页面可以自动跳转不同的位置\n模块分析2：点击每个模块，页面自动滚动到对应模块，使用事件委托方法更加简单\n①：点击小模块，当前添加 active这个类\n②：解决处理初次获取不到active 报错的问题\n解决方案：\n①： 不能直接获取这个类，然后移除，这样会报错\n②： 先获取这个类，然后加个判断\n        - 如果有这个类，就移除\n        - 如果么有这个类，返回为 null， 就不执行移除，就不报错了\n案例"
        }
      ]
    },
    {
      "title": "第64页",
      "level": 1,
      "page": 64,
      "blocks": [
        {
          "type": "text",
          "text": "电梯导航\n需求：点击不同的模块，页面可以自动跳转不同的位置\n模块分析2：点击每个模块，页面自动滚动到对应模块，使用事件委托方法更加简单\n点击小盒子li，页面跳转到对应大盒子位置\n核心思想： 把对应大盒子的offfsetTop 给document.documentElement.scrollTop \n①： 我们发现小盒子li 的自定义属性里面值 跟 大盒子 后面一致\n②： 利用模板字符串 把点击的 自定义属性值 给 大盒子，就找到对应的大盒子了，\n③：然后拿到这个大盒子的 offsetTop 值 给  document.documentElement.scrollTop 即可\n案例"
        }
      ]
    },
    {
      "title": "第65页",
      "level": 1,
      "page": 65,
      "blocks": [
        {
          "type": "text",
          "text": "电梯导航\n需求：点击不同的模块，页面可以自动跳转不同的位置\n模块分析3：页面滚动到大盒子位置，电梯导航小盒子对应模块自动处于选中状态\n①： 当页面滚动了，先移除所有小li 里面a 的状态 active  防止有多个 active\n案例"
        }
      ]
    },
    {
      "title": "第66页",
      "level": 1,
      "page": 66,
      "blocks": [
        {
          "type": "text",
          "text": "电梯导航\n需求：点击不同的模块，页面可以自动跳转不同的位置\n模块分析3：页面滚动到大盒子位置，电梯导航小盒子对应模块自动处于选中状态\n①： 当页面滚动了，先移除所有小li的状态\n②： 因为页面滚动需要不断获取大盒子的位置，所以需要把所有的大盒子都获取过来\n③： 开始进行滚动判断\n        - 如果页面滚动大于 新鲜好物大盒子的offsetTop  并且小于 人气推荐盒子的\noffsetTop 就把 对应的小盒子先出来添加类\n       - 依次类推\n       - 最后一个，如果大于等于最新专题模块， 就选出最后一个对应小盒子（更精确）\n案例"
        }
      ]
    },
    {
      "title": "第67页",
      "level": 1,
      "page": 67,
      "blocks": [
        {
          "type": "text",
          "text": "今日\n作业\n1. 整理今天笔记\n2. 练习电梯导航模块、全选反选 都要写3遍\n3. 做测试题：\n4. 作业"
        }
      ]
    }
  ]
};
