window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["c821119481939be61981"] = {
  "id": "c821119481939be61981",
  "title": "web APIs第一天.pdf",
  "treatment": "课件页级文本（配图回溯原件）",
  "sections": [
    {
      "title": "第1页",
      "level": 1,
      "page": 1,
      "blocks": [
        {
          "type": "text",
          "text": "Web APIs 第一天\nDom获取&属性操作"
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
          "text": "学习目标\nLearning Objectives\n1. 掌握DOM属性操作，完成元素内容设置\n2. 元素属性设置，控制元素样式"
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
          "text": "目录\nContents\nu Web API 基本认知\nu 获取DOM对象\nu 操作元素内容\nu 操作元素属性\nu 定时器-间歇函数\nu 综合案例"
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
          "text": "变量声明\nl 变量声明有三个 var   let  和 const \nl 我们应该用那个呢？\nl 首先var 先排除，老派写法，问题很多，可以淘汰掉…\nl let  or  const ?\nl 建议：  const 优先，尽量使用const，原因是：\nØ const 语义化更好\nØ 很多变量我们声明的时候就知道他不会被更改了，那为什么不用 const呢？\nØ 实际开发中也是，比如react框架，基本const\nl 如果你还在纠结，那么我建议：\nl 有了变量先给const，如果发现它后面是要被修改的，再改为let"
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
          "text": "变量声明\nl 请问以下的 可不可以把let 改为 const？"
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
          "text": "变量声明\nl 请问以下的 可不可以把let 改为 const？"
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
          "text": "变量声明\nl 请问以下的 可不可以把let 改为 const？"
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
          "text": "变量声明\nl const  声明的值不能更改，而且const声明变量的时候需要里面进行初始化\nl 但是对于引用数据类型，const声明的变量，里面存的不是 值，不是值，不是值，是 地址。\nconst arr 栈\n0x112233\n堆\n[1, 2, 3][1, 2]"
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
          "text": "变量声明\nl 考考你：可以改为 const 吗？"
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
          "text": "变量声明\nl 考考你：下面写法可以吗？"
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
          "text": "总结总结\n1. 以后声明变量我们优先使用哪个？\nØ const\nØ 有了变量先给const，如果发现它后面是要被修改的，再改为let\n2. 为什么const声明的对象可以修改里面的属性？\nØ 因为对象是引用类型，里面存储的是地址，只要地址不变，就不会报错\nØ 建议数组和对象使用 const 来声明\n3. 什么时候使用let声明变量？\nØ 如果基本数据类型的值或者引用类型的地址发生变化的时候，需要用let\nØ 比如  一个变量进行加减运算，比如 for循环中的 i++"
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
          "text": "Web API 基本认知\n• 作用和分类\n• 什么是DOM\n• DOM树\n• DOM对象\n01"
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
          "text": "1.1 作用和分类\nl 作用: 就是使用 JS 去操作 html 和浏览器\nl 分类：DOM (文档对象模型)、BOM（浏览器对象模型）\nJavaScript\nECMAScript\nJavaScript语言基础\nDOM\n页面文档对象模型\nBOM\n浏览器对象模型\nWeb APIs"
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
          "text": "Web API 基本认知\n• 作用和分类\n• 什么是DOM\n• DOM树\n• DOM对象\n01"
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
          "text": "1.2 什么是DOM\nl DOM（Document Object Model——文档对象模型）是用来呈现以及与任意 HTML 或 XML文档交互的API\nl 白话文：DOM是浏览器提供的一套专门用来 操作网页内容 的功能\nl DOM作用\nØ 开发网页内容特效和实现用户交互"
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
          "text": "总结总结\n1. Web API阶段我们学习那两部分？\nØ DOM \nØ BOM\n2. DOM 是什么？有什么作用？\nØ DOM 是文档对象模型\nØ 操作网页内容，可以开发网页内容特效和实现用户交\n互"
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
          "text": "Web API 基本认知\n• 作用和分类\n• 什么是DOM\n• DOM树\n• DOM对象\n01"
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
          "text": "1.3 DOM树\nl DOM树是什么\nØ 将 HTML 文档以树状结构直观的表现出来，我们称之为文档树或 DOM 树\nØ 描述网页内容关系的名词\nØ 作用：文档树直观的体现了标签与标签之间的关系"
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
          "text": "Web API 基本认知\n• 作用和分类\n• 什么是DOM\n• DOM树\n• DOM对象\n01"
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
          "text": "1.4 DOM对象（重要）\nl DOM对象：浏览器根据html标签生成的 JS对象\nØ 所有的标签属性都可以在这个对象上面找到\nØ 修改这个对象的属性会自动映射到标签身上\nl DOM的核心思想\nØ 把网页内容当做对象来处理\nl document 对象\nØ 是 DOM 里提供的一个对象\nØ 所以它提供的属性和方法都是用来访问和操作网页内容的\nü 例：document.write()\nØ 网页所有内容都在document里面"
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
          "text": "总结总结\n1. DOM 树是什么？\nØ 将 HTML 文档以树状结构直观的表现出来，我们称之为文档树或 DOM \n树\nØ 作用：文档树直观的体现了标签与标签之间的关系\n2. DOM对象怎么创建的？\nØ 浏览器根据html标签生成的 JS对象（DOM对象）\nØ DOM的核心就是把内容当对象来处理\n3. document 是什么？\nØ 是 DOM 里提供的一个对象\nØ 网页所有内容都在document里面"
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
          "text": "目录\nContents\nu Web API 基本认知\nu 获取DOM对象\nu 操作元素内容\nu 操作元素属性\nu 定时器-间歇函数\nu 综合案例"
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
          "text": "获取DOM元素\n• 根据CSS选择器来获取DOM元素  (重点)\n• 其他获取DOM元素方法（了解）\n02"
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
          "text": "二、获取DOM对象\n目标：能查找/获取DOM对象\n提问：我们想要操作某个标签首先做什么？\nØ 肯定首先选中这个标签，跟 CSS选择器类似，选中标签才能操作\nl 查找元素DOM元素就是利用 JS 选择页面中标签元素\n学习路径：\n1. 根据CSS选择器来获取DOM元素  (重点)\n2. 其他获取DOM元素方法（了解）"
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
          "text": "2.1 根据CSS选择器来获取DOM元素  (重点)\n1. 选择匹配的第一个元素\n语法：\n参数:\n包含一个或多个有效的CSS选择器 字符串\n返回值：\nCSS选择器匹配的第一个元素,一个 HTMLElement对象。\n如果没有匹配到，则返回null。\n多参看文档：https://developer.mozilla.org/zh-CN/docs/Web/API/Document/querySelector"
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
          "text": "2.1 根据CSS选择器来获取DOM元素  (重点)\n2. 选择匹配的多个元素\n语法：\n参数:\n包含一个或多个有效的CSS选择器 字符串\n返回值：\nCSS选择器匹配的NodeList  对象集合\n例如："
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
          "text": "总结总结\n1. 获取一个DOM元素我们使用谁？能直接操作修改吗?\nØ querySelector()\nØ 可以\n2. 获取多个DOM元素我们使用谁？能直接修改吗？ 如果不能可以怎么做到修改\n？\nØ querySelectorAll()\nØ 不可以， 只能通过遍历的方式一次给里面的元素做修改"
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
          "text": "2.1 根据CSS选择器来获取DOM元素  (重点)\n得到的是一个伪数组：\nØ 有长度有索引号的数组\nØ 但是没有 pop()   push() 等数组方法\n想要得到里面的每一个对象，则需要遍历（for）的方式获得。\n哪怕只有一个元素，通过querySelectAll() 获取过来的也是一个伪数组，里面只有一个元素而已\n注意事项"
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
          "text": "总结总结\n1. 获取页面中的标签我们最终常用那两种方式？\nØ querySelectorAll()\nØ querySelector()\n2. 他们两者的区别是什么？\nØ querySelector()  只能选择一个元素， 可以直接操作\nØ querySelectorAll()  可以选择多个元素，得到的是伪数组，需要遍历得\n到每一个元素\n3. 他们两者小括号里面的参数有神马注意事项？\nØ 里面写css选择器\nØ 必须是字符串，也就是必须加引号"
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
          "text": "练习\n • 请控制台依次输出 3个 li 的 DOM对象"
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
          "text": "2.2 其他获取DOM元素方法（了解）"
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
          "text": "目录\nContents\nu Web API 基本认知\nu 获取DOM对象\nu 操作元素内容\nu 操作元素属性\nu 定时器-间歇函数\nu 综合案例"
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
          "text": "操作元素内容\n• 对象.innerText 属性\n• 对象.innerHTML 属性\n03"
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
          "text": "三、操作元素内容\n目标：能够修改元素的文本更换内容\nl DOM对象都是根据标签生成的,所以操作标签,本质上就是操作DOM对象。\nl 就是操作对象使用的点语法。\nl 如果想要修改标签元素的里面的内容，则可以使用如下几种方式：\nl 学习路径：\n1. 对象.innerText 属性\n2. 对象.innerHTML 属性"
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
          "text": "三、操作元素内容\n1. 元素innerText 属性\nØ 将文本内容添加/更新到任意标签位置\nØ 显示纯文本，不解析标签\n举例说明"
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
          "text": "三、操作元素内容\n2. 元素.innerHTML 属性\nØ 将文本内容添加/更新到任意标签位置\nØ 会解析标签，多标签建议使用模板字符\n举例说明"
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
          "text": "总结总结\n小结\n1. 设置/修改DOM元素内容有哪2钟方式？\nØ 元素.innerText 属性\nØ 元素.innerHTML 属性\n2. 三者的区别是什么？\nØ 元素.innerText 属性   只识别文本，不能解析标签\nØ 元素.innerHTML 属性     能识别文本，能够解析标签\nØ 如果还在纠结到底用谁，你可以选择innerHTML"
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
          "text": "案例\n 年会抽奖案例\n需求：从数组随机抽取一等奖、二等奖和三等奖，显示到对应的标签里面。\n素材：\nØ html文件结构\nØ 数组名单   '周杰伦', '刘德华', '周星驰', 'Pink老师', '张学友'"
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
          "text": "案例\n 年会抽奖案例\n需求：从数组随机抽取一等奖、二等奖和三等奖，显示到对应的标签里面。\n分析：\n①：声明数组: const personArr = ['周杰伦', '刘德华', '周星驰', 'Pink老师', '张学友']\n②：一等奖:随机生成一个数字（0~数组长度），找到对应数组的名字\n③：通过innerText 或者 innerHTML 将名字写入span元素内部\n④： 二等奖依次类推"
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
          "text": "目录\nContents\nu Web API 基本认知\nu 获取DOM对象\nu 操作元素内容\nu 操作元素属性\nu 定时器-间歇函数\nu 综合案例"
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
          "text": "操作元素属性\n• 操作元素常用属性\n• 操作元素样式属性\n• 操作 表单元素 属性\n• 自定义属性\n04"
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
          "text": "4.1 操作元素常用属性\nl 还可以通过 JS 设置/修改标签元素属性，比如通过 src更换 图片\nl 最常见的属性比如： href、title、src 等\nl 语法：\n举例说明"
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
          "text": "练习\n • 页面刷新，图片随机更换\n需求：当我们刷新页面，页面中的图片随机显示不同的图片"
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
          "text": "练习\n • 页面刷新，图片随机更换\n需求：当我们刷新页面，页面中的图片随机显示不同的图片\n分析：\n①：随机显示，则需要用到随机函数\n②：更换图片需要用到图片的 src 属性，进行修改\n③：核心思路：\n        1. 获取图片元素\n        2. 随机得到图片序号\n        3. 图片.src = 图片随机路径"
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
          "text": "操作元素属性\n• 操作元素常用属性\n• 操作元素样式属性\n• 操作 表单元素 属性\n• 自定义属性\n04"
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
          "text": "4.2 操作元素样式属性\nl 还可以通过 JS 设置/修改标签元素的样式属性。\nØ 比如通过 轮播图小圆点自动更换颜色样式\nØ 点击按钮可以滚动图片，这是移动的图片的位置 left 等等\n学习路径：\n1. 通过 style 属性操作CSS\n2. 操作类名(className) 操作CSS\n3. 通过 classList 操作类控制CSS"
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
          "text": "4.2 操作元素样式属性\n1.通过 style 属性操作CSS\nl 语法：\n注意：\n1. 修改样式通过style属性引出\n2. 如果属性有-连接符，需要转换为小驼峰命名法\n3. 赋值的时候，需要的时候不要忘记加css单位\n举例说明"
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
          "text": "总结总结\n1. 设置/修改元素样式属性通过________属性引出来？\n2. 如果需要修改一个div盒子的样式，比如 padding-left, 如何写？\nØ element.style.paddingLeft = ‘300px’\nØ 小驼峰命名法\n3. 因为我们是样式属性，一定别忘记，大部分数字后面都需要加单位\nstyle"
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
          "text": "练习\n • 页面刷新，页面随机更换背景图片\n需求：当我们刷新页面，页面中的背景图片随机显示不同的图片\n分析：\n①： 随机函数\n②： css页面背景图片  background-image\n③： 标签选择body， 因为body是唯一的标签，可以直接写 document.body.style"
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
          "text": "4.2 操作元素样式属性\n2. 操作类名(className) 操作CSS\nl 如果修改的样式比较多，直接通过style属性修改比较繁琐，我们可以通过借助于css类名的形式。\nl 语法：\nl 注意：\n1. 由于class是关键字, 所以使用className去代替\n2. className是使用新值换旧值, 如果需要添加一个类,需要保留之前的类名"
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
          "text": "总结总结\n1. 使用 className 有什么好处？\nØ 可以同时修改多个样式\n2. 使用 className 有什么注意事项？\nØ 直接使用 className 赋值会覆盖以前的类名"
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
          "text": "4.2 操作元素样式属性\n3. 通过 classList 操作类控制CSS\nl 为了解决className 容易覆盖以前的类名，我们可以通过classList方式追加和删除类名\nl 语法："
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
          "text": "总结总结\n1. 使用 className 和classList的区别？\nØ 修改大量样式的更方便\nØ 修改不多样式的时候方便\nØ classList 是追加和删除不影响以前类名"
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
          "text": "练习\n • 轮播图随机版\n需求：当我们刷新页面，页面中的轮播图会显示不同图片以及样式\n模块：\n①：图片会随机变换\n②：底部盒子背景颜色和文字内容会变换\n③：小圆点随机一个高亮显示"
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
          "text": "练习\n • 轮播图随机版\n需求：当我们刷新页面，页面中的轮播图会显示不同图片以及样式\n分析：\n①： 准备一个数组对象，里面包含详细信息（素材包含）\n②： 随机选择一个数字，选出数组对应的对象，更换图片，底部盒子背景颜色，以及文字内容\n③： 利用这个随机数字，让小圆点添加高亮的类（addClass）  利用css 结构伪类选择器"
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
          "text": "操作元素属性\n• 操作元素常用属性\n• 操作元素样式属性\n• 操作 表单元素 属性\n• 自定义属性\n04"
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
          "text": "4.3 操作表单元素 属性\nl 表单很多情况，也需要修改属性，比如点击眼睛，可以看到密码，本质是把表单类型转换为文本框\nl 正常的有属性有取值的 跟其他的标签属性没有任何区别\nØ 获取: DOM对象.属性名\nØ 设置: DOM对象.属性名 = 新值"
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
          "text": "4.3 操作表单元素 属性\nl 表单属性中添加就有效果,移除就没有效果,一律使用布尔值表示 如果为true 代表添加了该属性 如果是false 代\n表移除了该属性\nl 比如： disabled、checked、selected"
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
          "text": "操作元素属性\n• 操作元素常用属性\n• 操作元素样式属性\n• 操作 表单元素 属性\n• 自定义属性\n04"
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
          "text": "4.4 自定义属性\nl 标准属性: 标签天生自带的属性 比如class id title等, 可以直接使用点语法操作比如： disabled、checked、\nselected\nl 自定义属性：\nØ 在html5中推出来了专门的data-自定义属性\nØ 在标签上一律以data-开头\nØ 在DOM对象上一律以dataset对象方式获取"
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
          "text": "目录\nContents\nu Web API 基本认知\nu 获取DOM对象\nu 操作元素内容\nu 操作元素属性\nu 定时器-间歇函数\nu 综合案例"
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
          "text": "定时器-间歇函数\n• 定时器函数介绍\n• 定时器函数基本使用\n05"
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
          "text": "五、定时器-间歇函数\n目标：能够说出定时器函数在开发中的使用场景\nl 网页中经常会需要一种功能：每隔一段时间需要自动执行一段代码，不需要我们手动去触发\nl 例如：网页中的倒计时\nl 要实现这种需求，需要定时器函数\nl 定时器函数有两种，今天我先讲间歇函数"
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
          "text": "定时器-间歇函数\n• 定时器函数介绍\n• 定时器函数基本使用\n05"
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
          "text": "五、定时器-间歇函数\n目标：能够使用定时器函数重复执行代码\n定时器函数可以开启和关闭定时器\n1. 开启定时器\nØ 作用：每隔一段时间调用这个函数\nØ 间隔时间单位是毫秒\n举例说明\n注意：\n1. 函数名字不需要加括号\n2. 定时器返回的是一个id数字"
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
          "text": "五、定时器-间歇函数\n定时器函数可以开启和关闭定时器\n2. 关闭定时器\n一般不会刚创建就停止，而是满足一定条件再停止\n注意：\n1. 函数名字不需要加括号\n2. 定时器返回的是一个id数字"
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
          "text": "总结总结\n1. 定时器函数有什么作用？\nØ可以根据时间自动重复执行某些代码\n2. 定时器函数如何开启？\nØ setInterval(函数名, 时间)\n3. 定时器函数如何关闭？"
        }
      ]
    },
    {
      "title": "第68页",
      "level": 1,
      "page": 68,
      "blocks": [
        {
          "type": "text",
          "text": "案例\n 阅读注册协议\n需求：按钮60秒之后才可以使用\n分析：\n①：开始先把按钮禁用（disabled 属性）\n②：一定要获取元素\n③：函数内处理逻辑\n秒数开始减减\n按钮里面的文字跟着一起变化\n如果秒数等于0 停止定时器 里面文字变为 同意  最后 按钮可以点击"
        }
      ]
    },
    {
      "title": "第69页",
      "level": 1,
      "page": 69,
      "blocks": [
        {
          "type": "text",
          "text": "目录\nContents\nu Web API 基本认知\nu 获取DOM对象\nu 操作元素内容\nu 操作元素属性\nu 定时器-间歇函数\nu 综合案例"
        }
      ]
    },
    {
      "title": "第70页",
      "level": 1,
      "page": 70,
      "blocks": [
        {
          "type": "text",
          "text": "案例\n 轮播图定时器版\n需求：每隔一秒钟切换一个图片\n分析：\n①：准备一个数组对象，里面包含详细信息（素材包含）\n②：获取元素\n③：设置定时器函数\n设置一个变量++\n找到变量对应的对象\n更改图片、文字信息\n激活小圆点：移除上一个高亮的类名，当前变量对应的小圆点添加类\n④：处理图片自动复原从头播放（放到变量++后面，紧挨）\n如果图片播放到最后一张， 就是大于等于数组的长度\n则把变量重置为0"
        }
      ]
    },
    {
      "title": "第71页",
      "level": 1,
      "page": 71,
      "blocks": [
        {
          "type": "text",
          "text": "总结总结\n1. 整理今天笔记， Xmind或者md笔记都可以\n2. 练习用户倒计时协议案例\n3. 重点练习自动播放轮播图案例，至少写三遍\n4. 开始做测试题：\n5. 最后作业\n6. 预习\n你生活的起点并不是那么重要，重要的是最后你能到达哪里"
        }
      ]
    }
  ]
};
