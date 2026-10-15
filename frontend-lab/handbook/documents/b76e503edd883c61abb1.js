window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["b76e503edd883c61abb1"] = {
  "id": "b76e503edd883c61abb1",
  "title": "web APIs第四天.pdf",
  "treatment": "课件页级文本（配图回溯原件）",
  "sections": [
    {
      "title": "第1页",
      "level": 1,
      "page": 1,
      "blocks": [
        {
          "type": "text",
          "text": "Web APIs 第四天\nDom节点&移动端滑动"
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
          "text": "学习目标\nLearning Objectives\n1. 理解节点(标签)的增删改查\n2. 具备编写增加学生信息表案例的能力"
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
          "text": "目录\nContents\nu 日期对象\nu 节点操作\nu M端事件\nu JS插件\nu 综合案例"
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
          "text": "日期对象\n• 实例化\n• 时间对象方法\n• 时间戳\n01"
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
          "text": "1. 日期对象\n目标：掌握日期对象，可以让网页显示日期\nl 日期对象：用来表示时间的对象\nl 作用：可以得到当前系统时间\n学习路径：\n1. 实例化\n2. 日期对象方法\n3. 时间戳"
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
          "text": "1.1 实例化\n目标：能够实例化日期对象\nl 在代码中发现了 new 关键字时，一般将这个操作称为实例化\nl 创建一个时间对象并获取时间\nØ 获得当前时间\nØ 获得指定时间"
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
          "text": "日期对象\n• 实例化\n• 日期对象方法\n• 时间戳\n01"
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
          "text": "2.2 日期对象方法\n目标：能够使用日期对象中的方法写出常见日期\n使用场景：因为日期对象返回的数据我们不能直接使用，所以需要转换为实际开发中常用的格式\n方法 作用 说明\ngetFullYear() 获得年份 获取四位年份 \ngetMonth() 获得月份 取值为 0 ~ 11 \ngetDate() 获取月份中的每一天 不同月份取值也不相同\ngetDay() 获取星期 取值为 0 ~ 6\ngetHours() 获取小时 取值为 0 ~ 23\ngetMinutes() 获取分钟 取值为 0 ~ 59\ngetSeconds() 获取秒 取值为 0 ~ 59"
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
          "text": "页面显示时间\n需求：将当前时间以：YYYY-MM-DD HH:mm 形式显示在页面    2008-08-08 08:08\n案例\n分析：\n①：调用日期对象方法进行转换\n②：记得数字要补0\n③：字符串拼接后，通过 innerText 给 标签"
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
          "text": "日期对象\n• 实例化\n• 日期对象方法\n• 时间戳\n01"
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
          "text": "2.3 时间戳\n目标：能够获得当前时间戳\nl 使用场景： 如果计算倒计时效果，前面方法无法直接计算，需要借助于时间戳完成\nl 什么是时间戳:\nØ 是指1970年01月01日00时00分00秒起至现在的毫秒数，它是一种特殊的计量时间的方式\nl 算法：\nØ 将来的时间戳  -  现在的时间戳  =  剩余时间毫秒数  \nØ 剩余时间毫秒数 转换为 剩余时间的 年月日时分秒 就是 倒计时时间\nØ 比如    将来时间戳  2000ms  -  现在时间戳 1000ms   =  1000ms\nØ 1000ms 转换为就是   0小时0分1秒"
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
          "text": "2.3 时间戳\n三种方式获取时间戳：\n1. 使用 getTime()  方法\n2. 简写  +new Date()\n3. 使用 Date.now()\nØ 无需实例化\nØ 但是只能得到当前的时间戳， 而前面两种可以返回指定时间的时间戳"
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
          "text": "总结总结\n1. 实例化日期对象怎么写？\nØ new Date()\n2. 日期对象方法里面月份和星期有什么注意的？\nØ 月份是0~11, 星期是 0~6\n3. 获取时间戳有哪三种方式？重点记住那个？\nØ date.getTime()\nØ +new Date()    \nØ Date.now()\nØ 重点记住 +new Date() 因为可以返回当前时间戳或者指定的\n时间戳"
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
          "text": "毕业倒计时效果\n需求：计算到下课还有多少时间\n案例\n分析：\n①：用将来时间减去现在时间就是剩余的时间\n②：核心： 使用将来的时间戳减去现在的时间戳\n③：把剩余的时间转换为 天 时 分 秒\n注意：\n1. 通过时间戳得到是毫秒，需要转换为秒在计算\n2. 转换公式：\nØ d = parseInt(总秒数/ 60/60 /24);    //  计算天数\nØ h = parseInt(总秒数/ 60/60 %24)   //   计算小时\nØ m = parseInt(总秒数 /60 %60 );     //   计算分数\nØ s = parseInt(总秒数%60);               //   计算当前秒数"
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
          "text": "目录\nContents\nu 日期对象\nu 节点操作\nu M端事件\nu JS插件\nu 综合案例"
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
          "text": "节点操作\n• DOM 节点\n• 查找节点\n• 增加节点\n• 删除节点\n02"
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
          "text": "1.1 DOM节点\n目标：能说出DOM节点的类型\nl DOM节点\nØ DOM树里每一个内容都称之为节点\nl 节点类型\nØ 元素节点\nl 所有的标签 比如 body、 div\nl  html 是根节点\nØ 属性节点\nl 所有的属性 比如 href\nØ 文本节点\nl 所有的文本  \nØ 其他"
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
          "text": "总结总结\n1. 什么是DOM 节点？\nØ DOM树里每一个内容都称之为节点\n2. DOM节点的分类？\nØ 元素节点  比如 div标签\nØ 属性节点  比如 class属性\nØ 文本节点  比如标签里面的文字\n3. 我们重点记住那个节点？\nØ 元素节点\nØ 可以更好的让我们理清标签元素之间的关系\n小结"
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
          "text": "节点操作\n• DOM 节点\n• 查找节点\n• 增加节点\n• 删除节点\n02"
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
          "text": "2.2 查找节点\n目标：能够具备根据节点关系查找目标节点的能力\nl 关闭二维码案例：\n点击关闭按钮， 关闭的是二维码的盒子， 还要获取erweima盒子\nl 思考：\nØ 关闭按钮  和  erweima 是什么关系呢？\nØ 父子关系\nØ 所以，我们完全可以这样做：\nØ 点击关闭按钮， 直接关闭它的爸爸，就无需获取erweima元素了\nl 节点关系：针对的找亲戚返回的都是对象\nØ 父节点\nØ 子节点\nØ 兄弟节点"
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
          "text": "2.2 查找节点\nl 父节点查找：\nØ parentNode 属性  \nØ 返回最近一级的父节点 找不到返回为null"
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
          "text": "案例\n 关闭二维码案例\n需求：关闭二维码案例"
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
          "text": "2.2 查找节点\nl 子节点查找：\nØ childNodes\nü 获得所有子节点、包括文本节点（空格、换行）、注释节点等\nØ children 属性 （重点）\nü 仅获得所有元素节点\nü 返回的还是一个伪数组"
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
          "text": "2.2 查找节点\nl 兄弟关系查找：\n      1. 下一个兄弟节点 \nØ nextElementSibling 属性  \n      2. 上一个兄弟节点\nØ previousElementSibling 属性"
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
          "text": "总结总结\n1. 查找父节点用那个属性？\nØ parentNode \n2. 查找所有子节点用那个属性？\nØ children\n3. 查找兄弟节点用那个属性？\nØ nextElementSibling\nØ previousElementSibling"
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
          "text": "节点操作\n• DOM 节点\n• 查找节点\n• 增加节点\n• 删除节点\n02"
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
          "text": "2.3 增加节点\n目标：能够具备根据需求新增节点的能力\nl 很多情况下，我们需要在页面中增加元素\nØ 比如，点击发布按钮，可以新增一条信息\nl 一般情况下，我们新增节点，按照如下操作：\nØ 创建一个新的节点\nØ 把创建的新的节点放入到指定的元素内部\nl 学习路线：\nl 创建节点\nl 追加节点"
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
          "text": "2.3 增加节点\n1.创建节点\nl 即创造出一个新的网页元素，再添加到网页内，一般先创建节点，然后插入节点\nl 创建元素节点方法："
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
          "text": "2.3 增加节点\n2.追加节点\nl 要想在界面看到，还得插入到某个父元素中\nl 插入到父元素的最后一个子元素:\nl 插入到父元素中某个子元素的前面"
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
          "text": "案例\n需求：按照数据渲染页面\n学成在线案例渲染"
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
          "text": "步骤\n 学成在线案例渲染\n需求：按照数据渲染页面\n分析：\n①：准备好空的ul 结构\n②：根据数据的个数，创建一个新的空li\n③：li里面添加内容 img 标题等\n④：追加给ul\n重点练习：创建节点和追加节点"
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
          "text": "2.3 增加节点\nl 特殊情况下，我们新增节点，按照如下操作：\nØ 复制一个原有的节点\nØ 把复制的节点放入到指定的元素内部\nl 克隆节点\n cloneNode会克隆出一个跟原标签一样的元素，括号内传入布尔值\nØ 若为true，则代表克隆时会包含后代节点一起克隆\nØ 若为false，则代表克隆时不包含后代节点\nØ 默认为false"
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
          "text": "节点操作\n• DOM 节点\n• 查找节点\n• 增加节点\n• 删除节点\n02"
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
          "text": "2.4 删除节点\n目标：能够具备根据需求删除节点的能力\nl 若一个节点在页面中已不需要时，可以删除它\nl 在 JavaScript 原生DOM操作中，要删除元素必须通过父元素删除\nl 语法\nl 注：\nØ 如不存在父子关系则删除不成功\nØ 删除节点和隐藏节点（display:none） 有区别的： 隐藏节点还是存在的，但是删除，则从html中删除节点"
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
          "text": "目录\nContents\nu 日期对象\nu 节点操作\nu M端事件\nu JS插件\nu 综合案例"
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
          "text": "3. M端事件\n目标：了解M端常见的事件\n移动端也有自己独特的地方。比如触屏事件 touch（也称触摸事件），Android 和 IOS 都有。\nl 触屏事件 touch（也称触摸事件），Android 和 IOS 都有。\nl touch 对象代表一个触摸点。触摸点可能是一根手指，也可能是一根触摸笔。触屏事件可响应用户手指（或触控笔\n）对屏幕或者触控板操作。\nl 常见的触屏事件如下："
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
          "text": "目录\nContents\nu 日期对象\nu 节点操作\nu M端事件\nu JS插件\nu 综合案例"
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
          "text": "4.插件\nl 插件: 就是别人写好的一些代码,我们只需要复制对应的代码,就可以直接实现对应的效果\nl 学习插件的基本过程\nØ 熟悉官网,了解这个插件可以完成什么需求           https://www.swiper.com.cn/ \nØ 看在线演示,找到符合自己需求的demo      https://www.swiper.com.cn/demo/index.html\nØ 查看基本使用流程      https://www.swiper.com.cn/usage/index.html\nØ 查看APi文档,去配置自己的插件      https://www.swiper.com.cn/api/index.html\nØ 注意: 多个swiper同时使用的时候, 类名需要注意区分"
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
          "text": "4.插件\nl 1. 本地文件"
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
          "text": "目录\nContents\nu 日期对象\nu 节点操作\nu M端事件\nu JS插件\nu 综合案例"
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
          "text": "案例\n 游乐园轮播图"
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
          "text": "案例\n 学生信息表案例"
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
          "text": "步骤\n 学生信息表案例\n业务模块：\n①： 点击录入按钮可以录入数据\n②： 点击删除可以删除当前的数据"
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
          "text": "步骤\n 学生信息表案例\n说明：\n本次案例，我们尽量减少dom操作，采取操作数据的形式\n增加和删除都是针对于数组的操作，然后根据数组数据渲染页面"
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
          "text": "步骤\n 学生信息表案例\n核心思路：\n①： 声明一个空的数组\n②： 点击录入，根据相关数据，生成对象，追加到数组里面\n③： 根据数组数据渲染页面-表格的 行\n④： 点击删除按钮，删除的是对应数组里面的数据\n⑤： 再次根据数组的数据，渲染页面"
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
          "text": "步骤\n 学生信息表案例\n核心思路：\n①： 声明一个空的数组\n②： 点击录入模块  \n        (1).  首先取消表单默认提交事件\n        (2).  创建新的对象，里面存储 表单获取过来的数据，格式如右图\n        (3).   追加给数组\n        (4).   渲染数据。 遍历数组， 动态生成tr， 里面填写对应td数据， 并追加给 tbody\n        (5).   重置表单\n        (6).    注意防止多次生成多条数据，先清空 tbody"
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
          "text": "步骤\n 学生信息表案例\n核心思路：\n③： 点击删除模块  \n        (1).  采用事件委托形式，给 tbody 注册点击事件\n        (2).   点击链接，要删除的是对应数组里面的这个数据，而不是删除dom节点，如何找到这个数据？\n        (3).   前面渲染数据的时候，动态给a链接添加 自定义属性 data-id=“0”,这样点击当前对象就知道索引号了\n        (4). 根据索引号，利用 splice 删除这条数据\n        (5).   重新渲染"
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
          "text": "步骤\n 学生信息表案例\n核心思路：\n④： 点击新增需要验证表单 \n        (1).  获取所有需要填写的表单， 他们共同特点都有 name属性\n        (2).  遍历这些表单，如果有一个值为空，则return 返回提示输入为空中断程序\n        (3).  注意书写的位置，应该放到新增数据的前面， 阻止默认行为的后面"
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
          "text": "4. 重绘和回流\nl 解析（Parser）HTML，生成DOM树(DOM Tree)\nl 同时解析（Parser） CSS，生成样式规则 (Style Rules)\nl 根据DOM树和样式规则，生成渲染树(Render Tree)\nl 进行布局 Layout(回流/重排):根据生成的渲染树，得到节点的几何信息（位置，大小）\nl 进行绘制 Painting(重绘): 根据计算和获取的信息进行整个页面的绘制\nl Display: 展示在页面上\n• 1. 浏览器是如何进行界面渲染的"
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
          "text": "4. 重绘和回流\nl 回流(重排)\n      当 Render Tree 中部分或者全部元素的尺寸、结构、布局等发生改变时，浏览器就会重新渲染部分或全部文档的\n过程称为 回流。\nl 重绘\n      由于节点(元素)的样式的改变并不影响它在文档流中的位置和文档布局时(比如：color、background-color、\noutline等), 称为重绘。\nl 重绘不一定引起回流，而回流一定会引起重绘。"
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
          "text": "4. 重绘和回流\nl 会导致回流（重排）的操作：\nØ 页面的首次刷新\nØ 浏览器的窗口大小发生改变\nØ 元素的大小或位置发生改变\nØ 改变字体的大小\nØ 内容的变化（如：input框的输入，图片的大小）\nØ 激活css伪类 （如：:hover）\nØ 脚本操作DOM（添加或者删除可见的DOM元素）\n简单理解影响到布局了，就会有回流"
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
          "text": "4. 重绘和回流"
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
          "text": "今日\n作业\n1. 整理今天笔记\n2. 练习学成在线渲染案例、倒计时案例、微博发布案例\n3. 做测试题：\n4. 作业\n5. 一定要预习下次课的本地存储课程"
        }
      ]
    }
  ]
};
