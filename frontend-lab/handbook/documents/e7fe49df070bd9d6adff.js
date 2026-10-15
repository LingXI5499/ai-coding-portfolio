window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["e7fe49df070bd9d6adff"] = {
  "id": "e7fe49df070bd9d6adff",
  "title": "JavaScript基础第一天.pdf",
  "treatment": "课件页级文本（配图回溯原件）",
  "sections": [
    {
      "title": "第1页",
      "level": 1,
      "page": 1,
      "blocks": [
        {
          "type": "text",
          "text": "JavaScript 基础第一天\n基础语法"
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
          "text": "学习目标\nLearning Objectives\n1. 理解变量是存储数据的“容器”\n2. 理解什么是数据并知道数据的分类\n3. 知道 JavaScript 数据类型转换的特征"
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
          "text": "目录\nContents\nu JavaScript介绍\nu 变量\nu 常量\nu 数据类型\nu 类型转换\nu 实战案例"
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
          "text": "JavaScript 介绍\n• JavaScript 是什么\n• JavaScript 书写位置\n• JavaScript 的注释\n• JavaScript的结束符\n• 输入和输出语法\n• 字面量\n01"
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
          "text": "1.1 JavaScript 是什么\n1. JavaScript （是什么？）\n是一种运行在客户端（浏览器）的编程语言，实现人机交互效果。\n2. 作用（做什么？）\n– 网页特效 (监听用户的一些行为让网页作出对应的反馈)\n– 表单验证 (针对表单数据的合法性进行判断)\n– 数据交互 (获取后台的数据, 渲染到前端)\n– 服务端编程 (node.js)"
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
          "text": "1.1 JavaScript 是什么\n3. JavaScript的组成（有什么？）\nØ ECMAScript:\n     规定了js基础语法核心知识。\np 比如：变量、分支语句、循环语句、对象等等\nØ Web APIs :\np DOM   操作文档，比如对页面元素进行移动、大小、添加删除等操作\np BOM   操作浏览器，比如页面弹窗，检测窗口宽度、存储数据到浏览器等等\n权威网站：  MDN  \nJavaScript权威网站：   https://developer.mozilla.org/zh-CN/docs/Web/JavaScript\nJavaScript\nECMAScript\nJavaScript语言基础\nDOM\n页面文档对象模型\nBOM\n浏览器对象模型\nWeb APIs"
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
          "text": "总结总结\n1. JavaScript是什么？\nØ JavaScript 是一种运行在客户端（浏览器）的编程语言\n2. JavaScript组成是什么？\nØ ECMAScript( 基础语法 )、web APIs （DOM、BOM）"
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
          "text": "总结思路 点击切换按钮的案例-体验HTML+CSS+JS 实现交互效果\n体验-JavaScript"
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
          "text": "JavaScript 介绍\n• JavaScript 是什么\n• JavaScript 书写位置\n• JavaScript 的注释\n• JavaScript的结束符\n• 输入和输出语法\n• 字面量\n01"
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
          "text": "1.2 JavaScript 书写位置\nl 目标：知道如何向页面添加 JavaScript\nCSS 位置 JavaScript\nØ 行内样式表\nØ 内部样式表\nØ 外部样式表\nØ 行内 JavaScript\nØ 内部 JavaScript\nØ 外部 JavaScript"
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
          "text": "1.2 JavaScript 书写位置\n直接写在html文件里，用script标签包住\n规范：script标签写在</body>上面\n拓展： alert(‘你好，js’)  页面弹出警告对话框\n1. 内部 JavaScript\n我们将 <script> 放在HTML文件的底部附近的原因是浏览器会按照代码在文件中的顺序加载 HTML。\n如果先加载的 JavaScript 期望修改其下方的 HTML，那么它可能由于 HTML 尚未被加载而失效。\n因此，将 JavaScript 代码放在 HTML页面的底部附近通常是最好的策略。\n注意事项"
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
          "text": "1.2 JavaScript 书写位置\n代码写在以.js结尾的文件里\n语法：通过script标签，引入到html页面中。\n2. 外部 JavaScript\n1. script标签中间无需写代码，否则会被忽略！\n2. 外部JavaScript会使代码更加有序，更易于复用，且没有了脚本的混合，HTML 也会更加易读，因此这是个好的习惯。\n注意事项"
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
          "text": "1.2 JavaScript 书写位置\n代码写在标签内部\n语法：\n注意： 此处作为了解即可，但是后面vue框架会用这种模式\n3. 内联 JavaScript"
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
          "text": "总结总结\n1. JavaScript三种书写位置？\nØ 内部     \nØ 外部     \nØ 行内\n2. 注意事项：\nØ 书写的位置尽量写到文档末尾 </body> 前面\nØ 外部 js 标签中间不要写代码，否则会被忽略"
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
          "text": "练习\n 页面弹框课堂练习\n需求：请用外部和内部两种 JavaScript 书写方式，页面弹出： 努力，奋斗\n时间：5分钟\n举例说明\n页面弹窗：  alert(‘xxxx’)"
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
          "text": "JavaScript 介绍\n• JavaScript 是什么\n• JavaScript 书写位置\n• JavaScript 的注释\n• JavaScript的结束符\n• 输入和输出语法\n• 字面量\n01"
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
          "text": "1.3 JavaScript 注释\n目标：会使用两种JavaScript注释方法\nl 单行注释\nØ 符号：//\nØ 作用：//右边这一行的代码会被忽略\nØ 快捷键：ctrl + /\nl 块注释\nØ 符号：/*  */\nØ 作用：在/*  和  */ 之间的所有内容都会被忽略\nØ 快捷键：shift + alt + A"
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
          "text": "JavaScript 介绍\n• JavaScript 是什么\n• JavaScript 书写位置\n• JavaScript 的注释\n• JavaScript的结束符\n• 输入和输出语法\n• 字面量\n01"
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
          "text": "1.4 JavaScript 结束符\nl 目标：了解JavaScript结束符\nl 结束符\nØ 作用： 使用英文的 ; 代表语句结束\nØ 实际情况： 实际开发中，可写可不写, 浏览器(JavaScript 引擎) 可以自动推断语句的结束位置\nØ 现状： 在实际开发中，越来越多的人主张，书写 JavaScript 代码时省略结束符\nØ 约定：为了风格统一，结束符要么每句都写，要么每句都不写（按照团队要求.）"
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
          "text": "总结总结\n1. JavaScript 注释有那两种方式？\nØ 单行注释  // \nØ 多行注释  /*   */ \n2. JavaScript 结束符注意点\nØ 结束符是？\nü 分号 ；\nØ 结束符可以省略吗？\nü Yes\nü 但为了风格统一，结束符要么每句都写，要么每\n句都不写\n小结"
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
          "text": "JavaScript 介绍\n• JavaScript 是什么\n• JavaScript 书写位置\n• JavaScript 的注释\n• JavaScript的结束符\n• 输入和输出语法\n• 字面量\n01"
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
          "text": "1.5 JavaScript 输入输出语法\n目标：能写出常见 JavaScript 输入输出语法\n什么是语法：\nØ 人和计算机打交道的规则约定\nØ 我们要按照这个规则去写 \nØ 比如： 你吃了吗？\nØ 我们程序员需要操控计算机，需要计算机能看懂"
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
          "text": "1.5 JavaScript 输入输出语法\n目标：能写出常见 JavaScript 输入输出语法\n输出和输入也可理解为人和计算机的交互，用户通过键盘、鼠标等向计算机输入信息，计算机处理后再展示结果给用\n户，这便是一次输入和输出的过程。\nl 输出语法：\n语法1：\n作用：向body内输出内容\n注意：如果输出的内容写的是标签，也会被解析成网页元素\n语法2：\n       作用：页面弹出警告对话框\n语法3：\n作用：控制台输出语法，程序员调试使用"
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
          "text": "1.5 JavaScript 输入输出语法\n2. 输入语法：\nl 语法：\nl 作用：显示一个对话框，对话框中包含一条文字信息，用来提示用户输入文字\nl 展示："
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
          "text": "练习\n 输入和输入练习\n需求：时间：5分钟\nØ 浏览器中弹出对话框： 你好 JS~\nØ 页面中打印输出： JavaScript 我来了!\nØ 页面控制台输出： 它~会魔法吧~"
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
          "text": "1.5 JavaScript 输入输出语法\nJavaScript 代码执行顺序：\nØ 按HTML文档流顺序执行JavaScript代码\nØ alert() 和 prompt() 它们会跳过页面渲染先被执行（目前作为了解，后期讲解详细执行过程）"
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
          "text": "JavaScript 介绍\n• JavaScript 是什么\n• JavaScript 书写位置\n• JavaScript 的注释\n• JavaScript的结束符\n• 输入和输出语法\n• 字面量\n01"
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
          "text": "1.6 字面量\n目标：能说出什么是字面量\n在计算机科学中，字面量（literal）是在计算机中描述  事/物 \n比如：\nØ 我们工资是：  1000   此时 1000 就是 数字字面量\nØ '黑马程序员'  字符串字面量\nØ 还有接下来我们学的  []   数组字面量          {}    对象字面量   等等"
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
          "text": "总结总结\n1. JavaScript是什么？\nJavaScript是一门编程语言，可以实现很多的网页交互效果。\n2. JavaScript 书写位置?\nØ 内部 JavaScript\nØ 内部 JavaScript – 写到 </body> 标签上方\nØ 外部 JavaScript -  但是 <script> 标签不要写内容，否则会被忽略\n3. JavaScript 的注释？\nØ 单行注释  //  \nØ 多行注释  /*  */\n4. JavaScript 的结束符？\nØ 分号；   可以加也可以不加，可以按照团队约定\n5. JavaScript 输入输出语句？\nØ 输入： prompt()\nØ 输出： alert()    document.write()   console.log()"
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
          "text": "目录\nContents\nu JavaScript介绍\nu 变量\nu 常量\nu 数据类型\nu 类型转换\nu 实战案例"
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
          "text": "变量\n• 变量是什么\n• 变量基本使用☆\n• 变量的本质\n• 变量命名规则与规范\n02"
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
          "text": "2.1 变量是什么？\n问题1：用户输入的数据我们如何存储起来？\n答案1：变量"
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
          "text": "2.1 变量是什么？\n目标：理解变量是计算机存储数据的“容器”\n1. 变量：\nl 白话：变量就是一个装东西的盒子。\nl 通俗：变量是计算机中用来存储数据的“容器”，它可以让计算机变得有记忆。\nl 注意：变量不是数据本身，它们仅仅是一个用于存储数值的容器。可以理解为是一个个用来装东西的纸箱子。\n数据"
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
          "text": "总结总结\n1. 变量是怎么理解？\nØ 计算机中用来存储数据的“容器”，简单理解是一个\n个的盒子。\n2. 变量有什么作用呢？\nØ 用来存放数据的。注意变量指的是容器而不是数据。\n3. 你还能想到那些生活中的变量？\nØ HTML标签\nØ 教室\nØ 宿舍\nØ …"
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
          "text": "变量\n• 变量是什么\n• 变量基本使用☆\n• 变量的本质\n• 变量命名规则与规范\n02"
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
          "text": "2.2 变量的基本使用\n目标：能够声明一个变量并完成赋值操作\n1. 变量的声明\n2. 变量的赋值"
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
          "text": "2.2 变量的基本使用\n1. 声明变量：\n要想使用变量，首先需要创建变量（也称为声明变量或者定义变量）\n语法：\nØ 声明变量有两部分构成：声明关键字、变量名（标识）\nØ let 即关键字 (let: 允许、许可、让、要)，所谓关键字是系统提供的专门用来声明（定义）变量的词语\n 举例：\nØ 我们声明了一个age变量\nØ age 即变量的名称，也叫标识符"
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
          "text": "2.2 变量的基本使用\n2. 变量赋值：\n定义了一个变量后，你就能够初始化它（赋值）。在变量名之后跟上一个“=”，然后是数值。\n注意：是通过变量名来获得变量里面的数据\n变量\n字面量"
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
          "text": "2.2 变量的基本使用\n2. 变量赋值：\n简单点，也可以声明变量的时候直接完成赋值操作,这种操作也称为 变量初始化。"
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
          "text": "总结总结\n1. 变量用什么关键字来声明？\nØ let\n2. 变量通过什么符号来赋值？\nØ   =   这个符号我们也称为 赋值运算符\n3. 开发中我们经常声明的同时可以直接赋值？"
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
          "text": "练习 课堂变量练习\n需求：\n1. 声明一个变量，用于存放用户购买的商品 数量 ( num ) 为 20 件\n2. 声明一个变量，用于存放用户的 姓名 ( uname ) 为 ’张三’\n3. 依次控制台打印输出两个变量"
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
          "text": "2.2 变量的基本使用\n目标：掌握变量的更新以及了解同时声明多个变量的写法\n3. 更新变量：\n变量赋值后，还可以通过简单地给它一个不同的值来更新它。\n注意： let 不允许多次声明一个变量。"
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
          "text": "2.2 变量的基本使用\n4. 声明多个变量：\n变量赋值后，还可以通过简单地给它一个不同的值来更新它。\n语法：多个变量中间用逗号隔开。\n说明：看上去代码长度更短，但并不推荐这样。为了更好的可读性，请一行只声明一个变量。"
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
          "text": "总结总结\n1. 变量赋值之后如何更新新值？\nØ 直接给它一个不同的值来更新它\n2. 我们提倡同时声明多个不同的变量吗？\nØ   不提倡， 可读性不好"
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
          "text": "案例\n 1. 变量案例-弹出姓名\n需求： 浏览器中弹出对话框： 请输入姓名，     页面中输出：刚才输入的姓名\n分析：\n①：输入：用户输入框： \n②：内部处理：保存数据\n③：输出： 页面打印 \nprompt() \ndocument.write()"
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
          "text": "案例\n 2.变量案例- 交换变量的值\n需求：\n有2个变量： num1 里面放的是 10， num2 里面放的是20\n最后变为 num1 里面放的是 20 ， num2 里面放的是 10\n目的： \n1. 练习变量的使用\n2. 为了后面冒泡排序做准备"
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
          "text": "案例\n 2.变量案例- 交换变量的值\n分析：\n1.核心思路：使用一个 临时变量 用来做中间存储 \n10 20\nnum1 num2\n临时变量\n步骤：\n1. 声明一个临时变量 temp\n2. 把num1的值赋值给 temp\n3. 把num2的值赋值给num1"
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
          "text": "案例\n 2.变量案例- 交换变量的值\n分析：\n1.核心思路：使用一个 临时变量 用来做中间存储 \n10\n20\nnum1\n临时变量\nnum2\n步骤：\n1. 声明一个临时变量 temp\n2. 把num1的值赋值给 temp\n3. 把num2的值赋值给num1\n4. 把temp的值给num2\n没了~~~~临时变量不用自动销毁"
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
          "text": "变量\n• 变量是什么\n• 变量基本使用☆\n• 变量的本质\n• 变量命名规则与规范\n02"
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
          "text": "2.3 变量的本质\n目标：能够说出变量的本质是什么\n内存：计算机中存储数据的地方，相当于一个空间\n变量本质：是程序在内存中申请的一块用来存放数据的小空间\n \n内存\n18\n 电脑"
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
          "text": "变量\n• 变量是什么\n• 变量基本使用☆\n• 变量的本质\n• 变量命名规则与规范\n02"
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
          "text": "2.4 变量命名规则与规范\n目标：能写出符合规范的变量名\n规则：必须遵守，不遵守报错  (法律层面)\n规范：建议，不遵守不会报错，但不符合业内通识 （道德层面）\n1. 规则：\nØ 不能用关键字\nü 关键字：有特殊含义的字符，JavaScript 内置的一些英语词汇。例如：let、var、if、for等\nØ 只能用下划线、字母、数字、$组成，且数字不能开头\nØ 字母严格区分大小写，如 Age 和 age 是不同的变量\n2. 规范：\nØ 起名要有意义\nØ 遵守小驼峰命名法\nü 第一个单词首字母小写，后面每个单词首字母大写。例：userName"
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
          "text": "2.4 变量命名规则与规范\n以下哪些是合法的变量名？"
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
          "text": "2.4 变量命名规则与规范\n以下哪些是合法的变量名？"
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
          "text": "练习\n • 变量练习-输出用户信息\n需求：让用户输入自己的名字、年龄、性别，再输出到网页\n分析：\n①：弹出 输入 框（prompt）： 请输入您的姓名 (uname)：    用变量保存起来。\n②：弹出输入框（prompt） ： 请输入您的年龄 (age)：    用变量保存起来。\n③：弹出输入框（prompt） ： 请输入您的性别(gender)：    用变量保存起来。\n④：页面分别 输出 (document.write) 刚才的 3 个变量。"
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
          "text": "二. 变量拓展-let和var的区别\nlet 和 var 区别：\n在较旧的JavaScript，使用关键字 var 来声明变量 ，而不是 let。\nvar 现在开发中一般不再使用它，只是我们可能再老版程序中看到它。\nlet 为了解决 var 的一些问题。\nvar 声明:\nØ 可以先使用 在声明 (不合理)\nØ var 声明过的变量可以重复声明(不合理)\nØ 比如变量提升、全局变量、没有块级作用域等等\n结论：\nvar 就是个bug，别迷恋它了，以后声明变量我们统一使用 let"
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
          "text": "思考 1. 变量一次只能存几个值？\n2. 如果我想保存一个班里5个人的姓名怎么办？"
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
          "text": "l 数组 (Array) —— 一种将 一组数据存储在单个变量名下 的优雅方式\n二. 变量拓展-数组\n变量 数组字面量"
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
          "text": "目标：能够声明数组并且能够获取里面的数据\nl 1. 声明语法\n1.1 数组的基本使用\nl 例\nl 数组是按顺序保存，所以每个数据都有自己的编号\nl 计算机中的编号从0开始，所以小明的编号为0，小刚编号为1，以此类推\nl 在数组中，数据的编号也叫索引或下标\nl 数组可以存储任意类型的数据"
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
          "text": "1.1 数组的基本使用\nl 2. 取值语法\nl 例\nl 通过下标取数据\nl 取出来是什么类型的，就根据这种类型特点来访问"
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
          "text": "案例\n 数组取值案例\n需求：定义一个数组，里面存放星期一、星期二…… 直到星期日（共7天），在控制台输出：星期日"
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
          "text": "3. 一些术语：\nØ 元素：数组中保存的每个数据都叫数组元素\nØ 下标：数组中数据的编号\nØ 长度：数组中数据的个数，通过数组的length属性获得\n1.1 数组的基本使用"
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
          "text": "总结总结\n1.  使用数组有什么好处？\nØ 数组可以保存多个数据\n2.  数组字面量用什么表示？\nØ []   中括号\n3.  请说出下面数组中 ‘小米’  的下标是多少？ 如何取得\n这个数据？\nØ 下标是 4 \nØ 获取的写法是  names[4]"
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
          "text": "目录\nContents\nu JavaScript介绍\nu 变量\nu 常量\nu 数据类型\nu 类型转换\nu 实战案例"
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
          "text": "常量03"
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
          "text": "3. 常量的基本使用\nl 概念：使用 const 声明的变量称为“常量”。\nl 使用场景：当某个变量永远不会改变的时候，就可以使用 const 来声明，而不是let。\nl 命名规范：和变量一致\nl 常量使用：\nl 注意： 常量不允许重新赋值,声明的时候必须赋值（初始化）\nl 小技巧：不需要重新赋值的数据使用const"
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
          "text": "总结总结\nlet —      现在实际开发变量声明方式。 \nvar —     以前的声明变量的方式，会有很多问题。\nconst — 类似于 let ，但是变量的值无法被修改。"
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
          "text": "目录\nContents\nu JavaScript介绍\nu 变量\nu 常量\nu 数据类型\nu 类型转换\nu 实战案例"
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
          "text": "数据类型\n• 数据类型☆\n• 检测数据类型\n04"
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
          "text": "4. 数据类型\n目标：能说出JS中基本数据类型有哪些\n计算机世界中的万事万物都是数据。\n计算机程序可以处理大量的数据，为什么要给数据分类？\nØ 1. 更加充分和高效的利用内存\nØ 2. 也更加方便程序员的使用数据\n比如："
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
          "text": "4. 数据类型\nJS 数据类型整体分为两大类：\nØ 基本数据类型\nØ 引用数据类型\n基本数据类型 引用数据类型\nnumber 数字型\nstring 字符串型\nboolean  布尔型\nundefined 未定义型\nnull  空类型\nobject 对象"
        }
      ]
    },
    {
      "title": "第72页",
      "level": 1,
      "page": 72,
      "blocks": [
        {
          "type": "text",
          "text": "4. 数据类型\nJS 数据类型整体分为两大类：\nØ 基本数据类型\nØ 引用数据类型\n基本数据类型\nnumber 数字型\nstring 字符串型\nboolean  布尔型\nundefined 未定义型\nnull  空类型"
        }
      ]
    },
    {
      "title": "第73页",
      "level": 1,
      "page": 73,
      "blocks": [
        {
          "type": "text",
          "text": "4.1 数据类型 – 数字类型（Number）\n即我们数学中学习到的数字，可以是整数、小数、正数、负数。\nJavaScript 中的正数、负数、小数等 统一称为 数字类型。\nJS 是弱数据类型，变量到底属于那种类型，只有赋值之后，我们才能确认\nJava是强数据类型   例如  int  a = 3    必须是整数\n注意事项"
        }
      ]
    },
    {
      "title": "第74页",
      "level": 1,
      "page": 74,
      "blocks": [
        {
          "type": "text",
          "text": "4.1 数据类型 – 数字类型（Number）\n数字可以有很多操作，比如，乘法 * 、除法 / 、加法 + 、减法 - 等等，所以经常和算术运算符一起。\n数学运算符也叫算术运算符，主要包括加、减、乘、除、取余（求模）。\nØ +：求和\nØ -：求差\nØ *：求积\nØ /：求商\nØ %：取模（取余数）   \nØ 开发中经常作为某个数字是否被整除"
        }
      ]
    },
    {
      "title": "第75页",
      "level": 1,
      "page": 75,
      "blocks": [
        {
          "type": "text",
          "text": "目标：能说出JavaScript算术运算符执行的优先级顺序\n同时使用多个运算符编写程序时，会按着某种顺序先后执行，我们称为优先级。\nJavaScript中 优先级越高越先被执行，优先级相同时以书从左向右执行。\nØ 乘、除、取余优先级相同\nØ 加、减优先级相同\nØ 乘、除、取余优先级大于加、减\nØ 使用 () 可以提升优先级\nØ 总结： 先乘除后加减，有括号先算括号里面的~~~\n提问："
        }
      ]
    },
    {
      "title": "第76页",
      "level": 1,
      "page": 76,
      "blocks": [
        {
          "type": "text",
          "text": "总结总结\n1. 算术运算符有那几个常见的？\nØ  +  -   *  /   % \n2. 算术运算符优先级怎么记忆？\nØ 先乘除取余，后加减，有小括号先算小括号里面的\n3. 取余运算符开发中的使用场景是？\nØ 来判断某个数字是否能被整除"
        }
      ]
    },
    {
      "title": "第77页",
      "level": 1,
      "page": 77,
      "blocks": [
        {
          "type": "text",
          "text": "案例\n 计算圆的面积\n需求：对话框中输入圆的半径，算出圆的面积并显示到页面\n分析：\n①：面积的数学公式： π*r² \n②：转换为JavaScript写法 ：  变量 * r * r"
        }
      ]
    },
    {
      "title": "第78页",
      "level": 1,
      "page": 78,
      "blocks": [
        {
          "type": "text",
          "text": "4.1 数据类型 – 数字类型（Number）\nNaN 代表一个计算错误。它是一个不正确的或者一个未定义的数学操作所得到的结果\nNaN 是粘性的。任何对 NaN 的操作都会返回 NaN"
        }
      ]
    },
    {
      "title": "第79页",
      "level": 1,
      "page": 79,
      "blocks": [
        {
          "type": "text",
          "text": "4.1 数据类型 – 字符串类型（string）\n通过单引号（ ''） 、双引号（ \"\"）或反引号( ` ) 包裹的数据都叫字符串，单引号和双引号没有本质上的区别，推\n荐使用单引号。\n注意事项：\n1. 无论单引号或是双引号必须成对使用\n2. 单引号/双引号可以互相嵌套，但是不以自已嵌套自已（口诀：外双内单，或者外单内双）\n3. 必要时可以使用转义符 \\，输出单引号或双引号"
        }
      ]
    },
    {
      "title": "第80页",
      "level": 1,
      "page": 80,
      "blocks": [
        {
          "type": "text",
          "text": "4.1 数据类型 – 字符串类型（string）\n字符串拼接：\n场景： + 运算符 可以实现字符串的拼接。\n口诀：数字相加，字符相连"
        }
      ]
    },
    {
      "title": "第81页",
      "level": 1,
      "page": 81,
      "blocks": [
        {
          "type": "text",
          "text": "模板字符串\nl 使用场景\nØ 拼接字符串和变量\nØ 在没有它之前，要拼接变量比较麻烦\nl 语法\nØ ``  (反引号)\nØ 在英文输入模式下按键盘的tab键上方那个键（1左边那个键）\nØ 内容拼接变量时，用 ${ } 包住变量"
        }
      ]
    },
    {
      "title": "第82页",
      "level": 1,
      "page": 82,
      "blocks": [
        {
          "type": "text",
          "text": "总结总结\n1.  JavaScript中什么样数据我们知道是字符串类型？\nØ 只要用 单引号、双引号、反引号包含起来的就是字符串类型\n2.  字符串拼接比较麻烦，我们可以使用什么来解决这个问题？\nØ 模板字符串， 可以让我们拼接字符串更简便\n3.  模板字符串使用注意事项：\nØ 用什么符号包含数据？\nü 反引号\nØ 用什么来使用变量？\nü ${变量名}"
        }
      ]
    },
    {
      "title": "第83页",
      "level": 1,
      "page": 83,
      "blocks": [
        {
          "type": "text",
          "text": "案例 页面输出用户信息案例\n需求：页面弹出对话框，输入名字和年龄，页面显示： 大家好，我叫xxx，今年xx岁了"
        }
      ]
    },
    {
      "title": "第84页",
      "level": 1,
      "page": 84,
      "blocks": [
        {
          "type": "text",
          "text": "4.1 数据类型 – 布尔类型（boolean）\n表示肯定或否定时在计算机中对应的是布尔类型数据。\n它有两个固定的值 true 和 false，表示肯定的数据用 true（真），表示否定的数据用 false（假）。"
        }
      ]
    },
    {
      "title": "第85页",
      "level": 1,
      "page": 85,
      "blocks": [
        {
          "type": "text",
          "text": "4.1 数据类型 – 未定义类型（undefined）\n未定义是比较特殊的类型，只有一个值 undefined。\n什么情况出现未定义类型？\n只声明变量，不赋值的情况下，变量的默认值为 undefined，一般很少【直接】为某个变量赋值为 undefined。\n工作中的使用场景：\n我们开发中经常声明一个变量，等待传送过来的数据。  \n如果我们不知道这个数据是否传递过来，此时我们可以通过检测这个变量是不是undefined，就判断用户是否有数据传递过来\n。"
        }
      ]
    },
    {
      "title": "第86页",
      "level": 1,
      "page": 86,
      "blocks": [
        {
          "type": "text",
          "text": "4.1 数据类型 – null（空类型）\nJavaScript 中的 null 仅仅是一个代表“无”、“空”或“值未知”的特殊值\nnull 和 undefined 区别：\nl undefined  表示没有赋值\nl null 表示赋值了，但是内容为空\nnull 开发中的使用场景：\n官方解释：把 null 作为尚未创建的对象\n大白话： 将来有个变量里面存放的是一个对象，但是对象还没创建好，可以先给个null"
        }
      ]
    },
    {
      "title": "第87页",
      "level": 1,
      "page": 87,
      "blocks": [
        {
          "type": "text",
          "text": "总结总结\n1.  布尔数据类型有几个值？\nØ true 和 false\n2.  什么时候出现未定义数据类型？以后开发场景是？\nØ 定义变量未给值就是 undefined\nØ 如果检测变量是undefined就说明没有值传递过来\n3.  null 是什么类型？ 开发场景是？\nØ 空类型\nØ 如果一个变量里面确定存放的是对象，如果还没准备好\n对象，可以放个null"
        }
      ]
    },
    {
      "title": "第88页",
      "level": 1,
      "page": 88,
      "blocks": [
        {
          "type": "text",
          "text": "数据类型\n• 数据类型☆\n• 检测数据类型\n04"
        }
      ]
    },
    {
      "title": "第89页",
      "level": 1,
      "page": 89,
      "blocks": [
        {
          "type": "text",
          "text": "4.2 控制台输出语句和检测数据类型\nl 控制台输出语句：\nØ 控制台语句经常用于测试结果来使用。\nØ 可以看出数字型和布尔型颜色为蓝色，字符串和undefined颜色为灰色"
        }
      ]
    },
    {
      "title": "第90页",
      "level": 1,
      "page": 90,
      "blocks": [
        {
          "type": "text",
          "text": "3.2 控制台输出语句和检测数据类型\n2. 通过 typeof 关键字检测数据类型\ntypeof 运算符可以返回被检测的数据类型。它支持两种语法形式： \n1. 作为运算符： typeof x （常用的写法）\n2. 函数形式： typeof(x) \n换言之，有括号和没有括号，得到的结果是一样的，所以我们直接使用运算符的写法。"
        }
      ]
    },
    {
      "title": "第91页",
      "level": 1,
      "page": 91,
      "blocks": [
        {
          "type": "text",
          "text": "目录\nContents\nu JavaScript介绍\nu 变量\nu 常量\nu 数据类型\nu 类型转换\nu 实战案例"
        }
      ]
    },
    {
      "title": "第92页",
      "level": 1,
      "page": 92,
      "blocks": [
        {
          "type": "text",
          "text": "类型转换\n• 为什么要类型转换\n• 隐式转换\n• 显式转换\n05"
        }
      ]
    },
    {
      "title": "第93页",
      "level": 1,
      "page": 93,
      "blocks": [
        {
          "type": "text",
          "text": "5.1 为什么需要类型转换\nJavaScript是弱数据类型： JavaScript也不知道变量到底属于那种数据类型，只有赋值了才清楚。\n坑： 使用表单、prompt 获取过来的数据默认是字符串类型的，此时就不能直接简单的进行加法运算。\n此时需要转换变量的数据类型。\n通俗来说，就是把一种数据类型的变量转换成我们需要的数据类型。"
        }
      ]
    },
    {
      "title": "第94页",
      "level": 1,
      "page": 94,
      "blocks": [
        {
          "type": "text",
          "text": "类型转换\n• 为什么要类型转换\n• 隐式转换\n• 显式转换\n04"
        }
      ]
    },
    {
      "title": "第95页",
      "level": 1,
      "page": 95,
      "blocks": [
        {
          "type": "text",
          "text": "5.2 隐式转换\n某些运算符被执行时，系统内部自动将数据类型进行转换，这种转换称为隐式转换。\n规则：\nØ + 号两边只要有一个是字符串，都会把另外一个转成字符串\nØ 除了+以外的算术运算符 比如 -  *  /  等都会把数据转成数字类型\n缺点：\nØ 转换类型不明确，靠经验才能总结\n小技巧：\nØ +号作为正号解析可以转换成数字型\nØ 任何数据和字符串相加结果都是字符串"
        }
      ]
    },
    {
      "title": "第96页",
      "level": 1,
      "page": 96,
      "blocks": [
        {
          "type": "text",
          "text": "5.2 显式转换\n编写程序时过度依靠系统内部的隐式转换是不严禁的，因为隐式转换规律并不清晰，大多是靠经验总结的规律。\n为了避免因隐式转换带来的问题，通常根逻辑需要对数据进行显示转换。\n概念：\n自己写代码告诉系统该转成什么类型\n转换为数字型\nØ Number(数据)\nü 转成数字类型\nü 如果字符串内容里有非数字，转换失败时结果为 NaN（Not a Number）即不是一个数字\nü NaN也是number类型的数据，代表非数字\nØ parseInt(数据)\nØ 只保留整数\nØ parseFloat(数据)\nØ 可以保留小数"
        }
      ]
    },
    {
      "title": "第97页",
      "level": 1,
      "page": 97,
      "blocks": [
        {
          "type": "text",
          "text": "5.2 显式转换\n编写程序时过度依靠系统内部的隐式转换是不严禁的，因为隐式转换规律并不清晰，大多是靠经验总结的规律。\n为了避免因隐式转换带来的问题，通常根逻辑需要对数据进行显示转换。\n概念：\n自己写代码告诉系统该转成什么类型\n转换为字符型:\nØ String(数据)\nØ 变量.toString(进制)"
        }
      ]
    },
    {
      "title": "第98页",
      "level": 1,
      "page": 98,
      "blocks": [
        {
          "type": "text",
          "text": "练习\n • 输入2个数，计算两者的和，打印到页面中"
        }
      ]
    },
    {
      "title": "第99页",
      "level": 1,
      "page": 99,
      "blocks": [
        {
          "type": "text",
          "text": "总结总结\n1. 类型转换的概念\n一种数据类型转成别的类型， JavaScript是弱数据类型，很多情况计算\n的时候，需要转换数据类型\n2. 隐式转换\nØ 系统自动做转换\n3. 显式转换\n自己写代码告诉系统转成什么类型\nØ Number\n字符串内容里有非数字得到NaN\nØ String"
        }
      ]
    },
    {
      "title": "第100页",
      "level": 1,
      "page": 100,
      "blocks": [
        {
          "type": "text",
          "text": "目录\nContents\nu JavaScript介绍\nu 变量\nu 常量\nu 数据类型\nu 类型转换\nu 实战案例"
        }
      ]
    },
    {
      "title": "第101页",
      "level": 1,
      "page": 101,
      "blocks": [
        {
          "type": "text",
          "text": "案例 用户订单信息案例\n需求：用户输入商品价格和商品数量，以及收货地址，可以自动打印订单信息\n分析：\n①：使用Scanner键盘录入一个三位数\n②：个位的计算：数值 % 10\n123 除以 10（商12，余数为3）\n③：十位的计算：数值 / 10 % 10\n123 除以 10 （商12，余数为3，整数相除只能得到整数）\n12 除以 10 （商1，余数为2）\n④：百位的计算：数值 / 10 / 10 % 10\n123 / 10 / 10 % 10（123 / 10 得到12，12  / 10 得到1，1 % 10 得到 1）"
        }
      ]
    },
    {
      "title": "第102页",
      "level": 1,
      "page": 102,
      "blocks": [
        {
          "type": "text",
          "text": "案例 用户订单信息案例\n需求：用户输入商品价格和商品数量，以及收货地址，可以自动打印订单信息\n分析：\n①：需要输入3个数据，所以需要3个变量来存储    price    num     address\n②：需要计算总的价格 total \n③：页面打印生成表格，里面填充数据即可\n④：记得最好使用模板字符串"
        }
      ]
    },
    {
      "title": "第103页",
      "level": 1,
      "page": 103,
      "blocks": [
        {
          "type": "text",
          "text": "六. 常见错误\nl 下面可能出现的原因是什么？\n分析：\nl const 声明的时候必须要赋值，进行初始化"
        }
      ]
    },
    {
      "title": "第104页",
      "level": 1,
      "page": 104,
      "blocks": [
        {
          "type": "text",
          "text": "六. 常见错误\nl 下面可能出现的原因是什么？\n分析：\nl 提示 age变量没有定义过\nl 很可能 age 变量没有声明和赋值\nl 或者我们输出变量名和声明的变量不一致引起的（简单说写错变量名了）"
        }
      ]
    },
    {
      "title": "第105页",
      "level": 1,
      "page": 105,
      "blocks": [
        {
          "type": "text",
          "text": "六. 常见错误\nl 下面可能出现的原因是什么？\n分析：\nl 提示 “age”已经声明\nl 很大概率是因为重复声明了一个变量。\nl 注意let 或者const  不允许多次声明同一个变量"
        }
      ]
    },
    {
      "title": "第106页",
      "level": 1,
      "page": 106,
      "blocks": [
        {
          "type": "text",
          "text": "六. 常见错误\nl 下面可能出现的原因是什么？\n分析：\nl 常量被重新赋值了\nl 常量不能被重新赋值"
        }
      ]
    },
    {
      "title": "第107页",
      "level": 1,
      "page": 107,
      "blocks": [
        {
          "type": "text",
          "text": "六. 常见错误\nl 下面可能出现什么问题？如何解决？\n分析：\nl 因为prompt 获取过来的是字符型，所以会出现字符相加的问题\nl prompt 如果出现相加 记得要转为数字型，可以 利用 + 最简单"
        }
      ]
    },
    {
      "title": "第108页",
      "level": 1,
      "page": 108,
      "blocks": [
        {
          "type": "text",
          "text": "七. 今日复习路线\nl 晚自习回来每个同学先必须xmind梳理今日知识点 (md 笔记也行)\nl 梳理完毕再次写2遍今日综合案例（订单信息案例案例） 记得先写伪代码思路，然后里面填写代码。\nl 晚上8点是做测试题（测试时间最多30分钟） 注意，必须每个同学都完全做对。保证18个题都做对。\nl 做完考题的同学开始：独立书写今日作业 \nl 手机扫码：                                 电脑端： https://ks.wjx.top/vj/h8kAn6p.aspx"
        }
      ]
    }
  ]
};
