window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["4cace6681d4ffb0b987a"] = {
  "id": "4cace6681d4ffb0b987a",
  "title": "web APIs第五天.pdf",
  "treatment": "课件页级文本（配图回溯原件）",
  "sections": [
    {
      "title": "第1页",
      "level": 1,
      "page": 1,
      "blocks": [
        {
          "type": "text",
          "text": "Web APIs 第五天\nBom操作"
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
          "text": "学习目标\nLearning Objectives\n1. 依托 BOM 对象实现对历史、地址、浏览器信息的操作或获取\n2. 具备利用本地存储实现学生信息表案例的能力"
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
          "text": "目录\nContents\nu Window对象\nu 本地存储\nu 综合案例"
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
          "text": "Window对象\n• BOM(浏览器对象模型)\n• 定时器-延时函数\n• JS执行机制\n• location对象\n• navigator对象\n• histroy对象\n01\n• 目标：学习 window 对象的常见属性，知道各个 BOM 对象的功能含义"
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
          "text": "1.1 BOM\nl BOM(Browser Object Model ) 是浏览器对象模型\nl window对象是一个全局对象，也可以说是JavaScript中的顶级对象\nl 像document、alert()、console.log()这些都是window的属性，基本BOM的属性和方法都是window的。\nl 所有通过var定义在全局作用域中的变量、函数都会变成window对象的属性和方法\nl window对象下的属性和方法调用的时候可以省略window"
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
          "text": "Window对象\n• BOM(浏览器对象模型)\n• 定时器-延时函数\n• JS执行机制\n• location对象\n• navigator对象\n• histroy对象\n01\n• 目标：学习 window 对象的常见属性，知道各个 BOM 对象的功能含义"
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
          "text": "1.2 定时器-延时函数\nl JavaScript 内置的一个用来让代码延迟执行的函数，叫 setTimeout\nl 语法：\nl setTimeout 仅仅只执行一次，所以可以理解为就是把一段代码延迟执行, 平时省略window\nl 清除延时函数：\nl 注意点\nØ 延时器需要等待,所以后面的代码先执行\nØ 每一次调用延时器都会产生一个新的延时器"
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
          "text": "1.2 定时器-延时函数\nl 两种定时器对比：执行的次数\nØ 延时函数: 执行一次\nØ 间歇函数:每隔一段时间就执行一次,除非手动清除"
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
          "text": "案例\n 5秒钟之后消失的广告\n需求：5秒钟之后，广告自动消失\n分析：\n①：设置延时函数\n②：隐藏元素"
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
          "text": "Window对象\n• BOM(浏览器对象模型)\n• 定时器-延时函数\n• JS执行机制\n• location对象\n• navigator对象\n• histroy对象\n01\n• 目标：学习 window 对象的常见属性，知道各个 BOM 对象的功能含义"
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
          "text": "经典面试题"
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
          "text": "JavaScript 语言的一大特点就是单线程，也就是说，同一个时间只能做一件事。\n这是因为 Javascript 这门脚本语言诞生的使命所致——JavaScript 是为处理页面中用户的交互，以及操作 \nDOM 而诞生的。比如我们对某个 DOM 元素进行添加和删除操作，不能同时进行。 应该先进行添加，之\n后再删除。\n单线程就意味着，所有任务需要排队，前一个任务结束，才会执行后一个任务。这样所导致的问题是： \n如果 JS 执行的时间过长，这样就会造成页面的渲染不连贯，导致页面渲染加载阻塞的感觉。\n1.3 JS 执行机制"
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
          "text": "l 为了解决这个问题，利用多核 CPU 的计算能力，HTML5 提出 Web Worker 标准，允许 JavaScript 脚本创建多个\n线程。于是，JS 中出现了同步和异步。\n同步\n前一个任务结束后再执行后一个任务，程序的执行顺序与任务的排列顺序是一致的、同步的。比如做饭的同\n步做法：我们要烧水煮饭，等水开了（10分钟之后），再去切菜，炒菜。\n异步\n你在做一件事情时，因为这件事情会花费很长时间，在做这件事的同时，你还可以去处理其他事\n情。比如做饭的异步做法，我们在烧水的同时，利用这10分钟，去切菜，炒菜。\n他们的本质区别： 这条流水线上各个流程的执行顺序不同。\n1.3 JS 执行机制"
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
          "text": "同步任务\n同步任务都在主线程上执行，形成一个执行栈。\n异步任务\nJS 的异步是通过回调函数实现的。\n一般而言，异步任务有以下三种类型:\n1、普通事件，如 click、resize 等\n2、资源加载，如 load、error 等\n3、定时器，包括 setInterval、setTimeout 等\n异步任务相关添加到任务队列中（任务队列也称为消息队列）。\n \nconsole.log(1)\nconsole.log(2)\nsetTimeout(fn,0)\n执行栈\nfn\n任务队列\n1.3 JS 执行机制"
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
          "text": "1. 先执行执行栈中的同步任务。\n2. 异步任务放入任务队列中。\n3. 一旦执行栈中的所有同步任务执行完毕，系统就会按次序读取任务队列中的异步任务，于是被读取的异步任务结束等待\n状态，进入执行栈，开始执行。\n事件循环\n主车道 应急车道\n \nconsole.log(1)\nconsole.log(2)\n执行栈\nsetTimeout(fn,0)\n任务队列\n1.3 JS 执行机制"
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
          "text": "由于主线程不断的重复获得任务、执行任务、再获取任务、再执行，所以这种机制被称为事件循环（ event loop 。\n1.3 JS 执行机制"
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
          "text": "思考\n        console.log(1)\n        document.addEventListener('click', function () {\n            console.log(4)\n        })\n        console.log(2)\n        setTimeout(function () {\n            console.log(3)\n        }, 3000)"
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
          "text": "Window对象\n• BOM(浏览器对象模型)\n• 定时器-延时函数\n• JS执行机制\n• location对象\n• navigator对象\n• histroy对象\n01\n• 目标：学习 window 对象的常见属性，知道各个 BOM 对象的功能含义"
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
          "text": "1.4 location对象  \nl location 的数据类型是对象，它拆分并保存了 URL 地址的各个组成部分\nl 常用属性和方法：\nØ href 属性获取完整的 URL 地址，对其赋值时用于地址的跳转\nØ search 属性获取地址中携带的参数，符号 ？后面部分\nØ hash 属性获取地址中的啥希值，符号 # 后面部分\nØ reload 方法用来刷新当前页面，传入参数 true 时表示强制刷新"
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
          "text": "一、Window对象\nl location 的数据类型是对象，它拆分并保存了 URL 地址的各个组成部分\nl 常用属性和方法：\nØ href 属性获取完整的 URL 地址，对其赋值时用于地址的跳转"
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
          "text": "案例\n 5秒钟之后跳转的页面\n需求：用户点击可以跳转，如果不点击，则5秒之后自动跳转，要求里面有秒数倒计时\n分析：\n①：目标元素是链接\n②：利用定时器设置数字倒计时\n③：时间到了，自动跳转到新的页面"
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
          "text": "1.4 location对象  \nl location 的数据类型是对象，它拆分并保存了 URL 地址的各个组成部分\nl 常用属性和方法：\nØ search 属性获取地址中携带的参数，符号 ？后面部分"
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
          "text": "1.4 location对象  \nl location 的数据类型是对象，它拆分并保存了 URL 地址的各个组成部分\nl 常用属性和方法：\nØ hash 属性获取地址中的哈希值，符号 # 后面部分\nØ 后期vue路由的铺垫，经常用于不刷新页面，显示不同页面，比如 网易云音乐"
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
          "text": "1.4 location对象  \nl location 的数据类型是对象，它拆分并保存了 URL 地址的各个组成部分\nl 常用属性和方法：\nØ reload 方法用来刷新当前页面，传入参数 true 时表示强制刷新"
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
          "text": "总结总结\nØ location.href 属性获取完整的 URL 地址，对其赋值时用于地址的跳转\nØ search 属性获取地址中携带的参数，符号 ？后面部分\nØ hash 属性获取地址中的啥希值，符号 # 后面部分\nØ reload 方法用来刷新当前页面，传入参数 true 时表示强制刷新"
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
          "text": "Window对象\n• BOM(浏览器对象模型)\n• 定时器-延时函数\n• JS执行机制\n• location对象\n• navigator对象\n• histroy对象\n01\n• 目标：学习 window 对象的常见属性，知道各个 BOM 对象的功能含义"
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
          "text": "1.5 navigator对象\nl navigator的数据类型是对象，该对象下记录了浏览器自身的相关信息\nl 常用属性和方法：\nØ 通过 userAgent 检测浏览器的版本及平台\n       // 检测 userAgent（浏览器信息）\n        !(function () {\n            const userAgent = navigator.userAgent\n            // 验证是否为Android或iPhone\n            const android = userAgent.match(/(Android);?[\\s\\/]+([\\d.]+)?/)\n            const iphone = userAgent.match(/(iPhone\\sOS)\\s([\\d_]+)/)\n            // 如果是Android或iPhone，则跳转至移动站点\n            if (android || iphone) {\n                location.href = 'http://m.itcast.cn'\n            }\n        })()"
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
          "text": "Window对象\n• BOM(浏览器对象模型)\n• 定时器-延时函数\n• JS执行机制\n• location对象\n• navigator对象\n• histroy对象\n01\n• 目标：学习 window 对象的常见属性，知道各个 BOM 对象的功能含义"
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
          "text": "1.6 histroy对象\nl history 的数据类型是对象，主要管理历史记录， 该对象与浏览器地址栏的操作相对应，如前进、后退、历史记\n录等\nl 常用属性和方法：\nhistory 对象一般在实际开发中比较少用，但是会在一些 OA 办公系统中见到。"
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
          "text": "目录\nContents\nu Window对象\nu 本地存储\nu 综合案例"
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
          "text": "本地存储\n• 本地存储介绍\n• 本地存储分类\n• 存储复杂数据类型\n02\n• 目标：学习 window 对象的常见属性，知道各个 BOM 对象的功能含义"
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
          "text": "2.1 本地存储介绍\nl 以前我们页面写的数据一刷新页面就没有了，是不是？\nl 随着互联网的快速发展，基于网页的应用越来越普遍，同时也变的越来越复杂，为了满足各种各样的需求，会经常\n性在本地存储大量的数据，HTML5规范提出了相关解决方案。\nl 1、数据存储在用户浏览器中\nl 2、设置、读取方便、甚至页面刷新不丢失数据\nl 3、容量较大，sessionStorage和localStorage约 5M 左右\nl 常见的使用场景：\nl https://todomvc.com/examples/vanilla-es6/    页面刷新数据不丢失"
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
          "text": "本地存储\n• 本地存储介绍\n• 本地存储分类\n• 存储复杂数据类型\n02"
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
          "text": "2.2 本地存储分类- localStorage\n目标： 能够使用localStorage 把数据存储的浏览器中\nl 作用: 可以将数据永久存储在本地(用户的电脑), 除非手动删除，否则关闭页面也会存在\nl 特性：\nØ 可以多窗口（页面）共享（同一浏览器可以共享）\nØ 以键值对的形式存储使用"
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
          "text": "2.2 本地存储分类- localStorage\nl 语法: \nlocalStorage.setItem(key, value)\n存储数据：\nlocalStorage.getItem(key)\n获取数据：\nlocalStorage.removeItem(key)\n删除数据："
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
          "text": "2.2 本地存储分类- localStorage\nl 浏览器查看本地数据:"
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
          "text": "2.2 本地存储分类- sessionStorage\nl 特性：\nØ 生命周期为关闭浏览器窗口\nØ 在同一个窗口(页面)下数据可以共享\nØ 以键值对的形式存储使用\nØ 用法跟localStorage 基本相同"
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
          "text": "总结总结\n1. localStorage 作用是什么？  \nØ 可以将数据永久存储在本地(用户的电脑), 除非手动删除，否则关闭页面也会存在\n2. localStorage 存储，获取，删除的语法是什么？  \nØ 存储：localStorage.setItem(key, value)\nØ 获取：localStorage.getItem(key)\nØ 删除：localStorage.removeItem(key)"
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
          "text": "本地存储\n• 本地存储介绍\n• 本地存储分类\n• 存储复杂数据类型\n02"
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
          "text": "2.3 存储复杂数据类型\n目标： 能够存储复杂数据类型以及取出数据\nl 本地只能存储字符串,无法存储复杂数据类型."
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
          "text": "2.3 存储复杂数据类型\nl 解决：需要将复杂数据类型转换成JSON字符串,在存储到本地\nl 语法：JSON.stringify(复杂数据类型)\nØ 将复杂数据转换成JSON字符串    存储 本地存储中"
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
          "text": "2.3 存储复杂数据类型\nl 问题：因为本地存储里面取出来的是字符串，不是对象，无法直接使用\n字符串"
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
          "text": "2.3 存储复杂数据类型\nl 解决：把取出来的字符串转换为对象\nl 语法：JSON.parse(JSON字符串)\nØ 将JSON字符串转换成对象     取出 时候使用"
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
          "text": "目录\nContents\nu Window对象\nu 本地存储\nu 综合案例"
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
          "text": "案例\n 学生就业信息表\n需求： 录入学生信息，页面刷新数据不丢失"
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
          "text": "案例\n 学生就业信息表\n需求： 录入学生信息，页面刷新数据不丢失\n模块分析：\n①：新增模块， 输入学生信息，数据会存储到本地存储中\n②：渲染模块，数据会渲染到页面中\n③：删除模块，点击删除按钮，会删除对应的数据"
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
          "text": "案例\n 学生就业信息表\n需求： 录入学生信息，页面刷新数据不丢失\n思路分析：\n①：因为页面刷新不丢失数据，所以可能存在已有数据，所以第一步，我们先找本地存储里面查找是\n否有数据，如果有数据先进行渲染页面，如果没有数据，我们放一个空数组，用来存放数据\n②：渲染模块，数据会渲染到页面中\n③：新增模块， 输入学生信息，数据会存储到本地存储中，然后渲染页面\n④：删除模块，点击删除按钮，会删除对应的数据，然后渲染页面"
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
          "text": "步骤\n • 学生就业信息表\n步骤：\n需求①：读取本地存储数据\n如果本地存储有数据，则返回 JSON.parse() 之后的对象\n如果本地存储没有数据，则声明一个空的数组"
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
          "text": "步骤\n • 学生就业信息表\n步骤：\n需求②：渲染模块\n            (1) 遍历数组， td里面填写对应td数据， 并追加给 tbody  \n            (2) 尽量减少dom操作，所以此处我们不在使用创建节点，追加节点方式（后面vue的做法）"
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
          "text": "数组中map方法  迭代数组\nl 作用：map  迭代数组\nl 语法："
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
          "text": "数组中map方法  迭代数组\nl 使用场景：\nmap 可以处理数据，并且返回新的数组"
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
          "text": "数组中join方法  \nl 作用：\n        join() 方法用于把数组中的所有元素转换一个字符串\nl 语法：\nl 参数：\n数组元素是通过参数里面指定的分隔符进行分隔的"
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
          "text": "步骤\n • 学生就业信息表\n步骤：\n需求②：渲染模块\n            (1) 遍历数组， td里面填写对应td数据， 并追加给 tbody  \n            (2) 尽量减少dom操作，所以此处我们不在使用创建节点，追加节点方式（后面vue的做法）\n            (3) 我们使用map方法遍历数组，直接返回 整个tr， 里面包含所有修改后的 tr 标签， 里面更换数据\n            (4) 但是map方法返回的是一个修改后的数组，怎么办？\n              所以我们通过join方法转换为字符串\n            (5) 把返回的结果， 通过 innerHTML 赋值给 tbody"
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
          "text": "数组中map方法  迭代数组\nl 使用场景：\nmap 可以处理数据，并且返回新的数组\n[                                 ,                                   ]   \njoin(‘’)\n字符串 追加给tbody"
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
          "text": "数组中map方法  迭代数组\nl 使用场景：\nmap 可以处理数据，并且返回新的数组\nmap 也称为映射。映射是个术语，指两个元素的集之间元素相互“对应”的关系"
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
          "text": "步骤\n • 学生就业信息表\n步骤：\n需求③：录入模块\n            (1) 事件是提交事件，同样阻止默认提交事件\n            (2) 非空判断。 \n                 - 获取所有需要填写的表单， 他们共同特点都有 name属性\n                 - 遍历这些表单，如果有一个值为空，则return 返回提示输入为空中断程序"
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
          "text": "步骤\n • 学生就业信息表\n步骤：\n需求③ ：录入模块\n            (3) 创建新的对象，里面存储 表单获取过来的数据，格式如右图\n                   - 创建一个空的对象\n                   - 给对象追加一个 stuId \n                   - 利用刚才非空判断的循环，采取对象追加 属性 = 值的方式，顺便 把表单值 赋值给相应的对象"
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
          "text": "步骤\n • 学生就业信息表\n步骤：\n需求③ ：录入模块\n            (4)  追加给数组\n            (5)  放入本地存储里面， 记得一定要把数组 利用  JSON.stringify()存储为字符串\n            (6)  渲染页面\n            (7)  重置表单"
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
          "text": "步骤\n 学生信息表案例\n核心思路：\n需求④： 点击删除模块  \n        (1)  采用事件委托形式，给 tbody 注册点击事件\n        (2)   点击链接，要删除的是对应数组里面的这个数据，而不是删除dom节点，如何找到这个数据？\n        (3)  前面渲染数据的时候，动态给a链接添加 自定义属性 data-id=“0”,这样点击当前对象就知道索引号了\n        (4) 根据索引号，利用 splice 删除这条数据\n        (5)  写入本地存储， 记得一定要把数组 利用  JSON.stringify()存储为字符串\n        (6)  重新渲染"
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
          "text": "步骤\n 学生信息表案例\n核心思路：\n需求⑤： 关于stuId 处理的问题  \n        (1) 最好的做法： 新增加序号应该是最后一条数据的序号 + 1      数组[数组的长度-1].stuId + 1\n        (2) 但是要判断， 如果没有数据则是直接赋值为1，否则就采用上面的做法"
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
          "text": "今日\n作业\n1. 整理今天笔记\n2. 必须写出学生信息表案例 \n3. 检测题：  \n4. 作业就是 梳理学生信息表 本地存储版本"
        }
      ]
    }
  ]
};
