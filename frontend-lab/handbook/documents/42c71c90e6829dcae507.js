window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["42c71c90e6829dcae507"] = {
  "id": "42c71c90e6829dcae507",
  "title": "web APIs第二天.pdf",
  "treatment": "课件页级文本（配图回溯原件）",
  "sections": [
    {
      "title": "第1页",
      "level": 1,
      "page": 1,
      "blocks": [
        {
          "type": "text",
          "text": "Web APIs 第二天\nDom事件基础"
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
          "text": "学习目标\nLearning Objectives\n1. 掌握事件绑定处理和事件对象，完成常见网页交互"
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
          "text": "目录\nContents\nu 事件监听（绑定）\nu 事件类型\nu 事件对象\nu 环境对象\nu 回调函数\nu 综合案例"
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
          "text": "事件监听（绑定）\n• 事件监听\n• 拓展阅读-事件监听版本\n01"
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
          "text": "1.1 事件监听\n目标：能够给 DOM元素添加事件监听\nl 什么是事件？\n事件是在编程时系统内发生的动作或者发生的事情\n比如用户在网页上单击一个按钮\nl 什么是事件监听？\n       就是让程序检测是否有事件产生，一旦有事件触发，就立即调用一个函数做出响应，也称为 绑定事件或者注册事\n件\n       比如鼠标经过显示下拉菜单，比如点击可以播放轮播图等等"
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
          "text": "1.1 事件监听\nl 语法：\nl 事件监听三要素：\nØ 事件源：  那个dom元素被事件触发了，要获取dom元素   \nØ 事件类型： 用什么方式触发，比如鼠标单击 click、鼠标经过 mouseover 等\nØ 事件调用的函数： 要做什么事"
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
          "text": "1.1 事件监听\n       \n举例说明\n注意：\n1. 事件类型要加引号\n2. 函数是点击之后再去执行，每\n次点击都会执行一次"
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
          "text": "总结总结\n1. 什么是事件监听？\nØ 就是让程序检测是否有事件产生，一旦有事件触发，\n就立即调用一个函数做出响应，也称为 注册事件\n2. 事件监听三要素是什么？\nØ 事件源 (谁被触发了)\nØ 事件类型  (用什么方式触发，点击还是鼠标经过等)\nØ 事件处理程序  （要做什么事情）"
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
          "text": "案例\n 京东点击关闭顶部广告\n需求：点击关闭之后，顶部关闭\n分析：\n①：点击的是关闭按钮\n②：关闭的是父盒子\n核心：利用样式的显示和隐藏完成， display:none 隐藏元素 display:block 显示元素"
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
          "text": "案例\n 随机点名案例"
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
          "text": "步骤\n • 随机点名案例\n业务分析：\n① 点击开始按钮随机抽取数组的一个数据，放到页面中\n② 点击结束按钮删除数组当前抽取的一个数据\n③ 当抽取到最后一个数据的时候，两个按钮同时禁用（写点开始里面，只剩最后一个数据不用抽了\n）\n核心：利用定时器快速展示，停止定时器结束展示"
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
          "text": "事件监听（绑定）\n• 事件监听\n• 拓展阅读-事件监听版本\n01"
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
          "text": "1.2 事件监听版本\nl DOM L0 \n     事件源.on事件 = function() { }\nl DOM L2  \n     事件源.addEventListener(事件， 事件处理函数)\nl 区别：\non方式会被覆盖，addEventListener方式可绑定多次，拥有事件更多特性，推荐使用"
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
          "text": "1.2 事件监听版本\nl 发展史：\nØ DOM L0 ：是 DOM 的发展的第一个版本；   L：level\nØ DOM L1：DOM级别1 于1998年10月1日成为W3C推荐标准\nØ DOM L2：使用addEventListener注册事件\nØ DOM L3： DOM3级事件模块在DOM2级事件的基础上重新定义了这些事件，也添加了一些新事件类型"
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
          "text": "目录\nContents\nu 事件监听（绑定）\nu 事件类型\nu 事件对象\nu 环境对象\nu 回调函数\nu 综合案例"
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
          "text": "2. 事件类型\n鼠标事件 焦点事件 键盘事件\n鼠标触发 表单获得光标 键盘触发\nclick   鼠标点击\nmouseenter 鼠标经过\nmouseleave  鼠标离开\nfocus    获得焦点\nblur       失去焦点\nKeydown 键盘按下触发\nKeyup       键盘抬起触发\n文本事件\n表单输入触发\ninput    用户输入事件"
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
          "text": "案例\n 轮播图点击切换\n需求：当点击左右的按钮，可以切换轮播图\n分析：\n①：右侧按钮点击，变量++，如果大于等于8，则复原0\n②：左侧按钮点击，变量--，如果小于0，则复原最后一张\n③：鼠标经过暂停定时器\n④：鼠标离开开启定时器"
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
          "text": "2. 事件类型\n鼠标事件 焦点事件 键盘事件\n鼠标触发 表单获得光标 键盘触发\nclick   鼠标点击\nmouseenter 鼠标经过\nmouseleave  鼠标离开\nfocus    获得焦点\nblur       失去焦点\nKeydown 键盘按下触发\nKeyup       键盘抬起触发\n文本事件\n表单输入触发\ninput    用户输入事件"
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
          "text": "案例\n 小米搜索框案例\n需求：当表单得到焦点，显示下拉菜单，失去焦点隐藏下来菜单\n分析：\n①：开始下拉菜单要进行隐藏\n②：表单获得焦点 focus，则显示下拉菜单，并且文本框变色（添加类）\n③：表单失去焦点，反向操作"
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
          "text": "2. 事件类型\n鼠标事件 焦点事件 键盘事件\n鼠标触发 表单获得光标 键盘触发\nclick   鼠标点击\nmouseenter 鼠标经过\nmouseleave  鼠标离开\nfocus    获得焦点\nblur       失去焦点\nKeydown 键盘按下触发\nKeyup       键盘抬起触发\n文本事件\n表单输入触发\ninput    用户输入事件"
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
          "text": "案例\n 评论字数统计\n需求：用户输入文字，可以计算用户输入的字数\n分析：\n①：判断用输入事件  input\n②：不断取得文本框里面的字符长度, 文本域.value.length\n③：把获得数字给下面文本框"
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
          "text": "目录\nContents\nu 事件监听（绑定）\nu 事件类型\nu 事件对象\nu 环境对象\nu 回调函数\nu 综合案例"
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
          "text": "事件对象\n• 获取事件对象\n• 事件对象常用属性\n03"
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
          "text": "3.1 获取事件对象\n目标：能说出什么是事件对象\nl 事件对象是什么\nØ 也是个对象，这个对象里有事件触发时的相关信息\nØ 例如：鼠标点击事件中，事件对象就存了鼠标点在哪个位置等信息\nl 使用场景\nØ 可以判断用户按下哪个键，比如按下回车键可以发布新闻\nØ 可以判断鼠标点击了哪个元素，从而做相应的操作"
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
          "text": "3.1 获取事件对象\nl 语法：如何获取\nØ 在事件绑定的回调函数的第一个参数就是事件对象\nØ 一般命名为event、ev、e\n事件对象"
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
          "text": "总结总结\n1. 事件对象是什么？\nØ 也是个对象，这个对象里有事件触发时的相关信息\n2. 事件对象在哪里？\nØ 在事件绑定的回调函数的第一个参数就是事件对象"
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
          "text": "事件对象\n• 获取事件对象\n• 事件对象常用属性\n03"
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
          "text": "3.2 获取事件对象\n目标：能够使用常见事件对象属性\nl 部分常用属性\nØ type\np 获取当前的事件类型\nØ clientX/clientY\np 获取光标相对于浏览器可见窗口左上角的位置\nØ offsetX/offsetY\np 获取光标相对于当前DOM元素左上角的位置\nØ key\np 用户按下的键盘键的值\np 现在不提倡使用keyCode"
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
          "text": "案例\n 评论回车发布\n需求：按下回车键盘，可以发布信息\n分析：\n①：用到按下键盘事件 keydown 或者 keyup 都可以\n②：如果用户按下的是回车键盘，则发布信息\n③：让留言信息模块显示，把拿到的数据渲染到对应标签内部"
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
          "text": "目录\nContents\nu 事件监听（绑定）\nu 事件类型\nu 事件对象\nu 环境对象\nu 回调函数\nu 综合案例"
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
          "text": "环境对象04"
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
          "text": "3. 环境对象\n目标：能够分析判断函数运行在不同环境中 this 所指代的对象\n环境对象：指的是函数内部特殊的变量 this ，它代表着当前函数运行时所处的环境\n作用：弄清楚this的指向，可以让我们代码更简洁\nØ 函数的调用方式不同，this 指代的对象也不同\nØ 【谁调用， this 就是谁】 是判断 this 指向的粗略规则\nØ 直接调用函数，其实相当于是 window.函数，所以 this 指代 window"
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
          "text": "总结总结\n1. 环境对象this是什么？\nØ 它代表着当前函数运行时所处的环境\n2. 判断 this 指向的粗略规则是什么？\nØ 【谁调用， this 就是谁】"
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
          "text": "目录\nContents\nu 事件监听（绑定）\nu 事件类型\nu 事件对象\nu 环境对象\nu 回调函数\nu 综合案例"
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
          "text": "回调函数05"
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
          "text": "5. 回调函数\n目标：能够说出什么是回调函数\n如果将函数 A 做为参数传递给函数 B 时，我们称函数 A 为回调函数\n简单理解： 当一个函数当做参数来传递给另外一个函数的时候，这个函数就是回调函数\nl 常见的使用场景："
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
          "text": "总结总结\n1. 回调函数\nØ 把函数当做另外一个函数的参数传递，这个函数就叫回调函数\nØ 回调函数本质还是函数，只不过把它当成参数使用\nØ 使用匿名函数做为回调函数比较常见"
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
          "text": "目录\nContents\nu 事件监听（绑定）\nu 事件类型\nu 事件对象\nu 环境对象\nu 回调函数\nu 综合案例"
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
          "text": "案例\n Tab栏切换\n需求：鼠标经过不同的选项卡，底部可以显示 不同的内容"
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
          "text": "步骤\n • Tab栏切换\n分析：\n①：主要核心是类的切换， 设定一个当前类，可以让当前元素高亮\n②：鼠标经过当前选项卡，先移除其余元素身上的当前类，而只给当前元素添加类，\n③：注意，当前类只能有一个"
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
          "text": "今日\n作业\n1. 整理今天笔记，md或者Xmind都可以\n2. 开始做测试题：\n3. 练习 、随机点名案例、评论发布案例\n4. 练习tab栏切换案例 三遍\n5. 作业"
        }
      ]
    }
  ]
};
