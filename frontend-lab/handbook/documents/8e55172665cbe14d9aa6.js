window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["8e55172665cbe14d9aa6"] = {
  "id": "8e55172665cbe14d9aa6",
  "title": "作业.md",
  "treatment": "章节知识与练习",
  "sections": [
    {
      "title": "客观题",
      "trail": [
        "JavaScript基础第四天作业",
        "客观题"
      ],
      "level": 2,
      "line": 5,
      "blocks": [
        {
          "type": "text",
          "text": "PC端地址：https://ks.wjx.top/vm/mC2UvoL.aspx# \n\n\n\n二维码扫码：\n\n\n\n [课程配图见原资料]"
        }
      ]
    },
    {
      "title": "练习题1：",
      "trail": [
        "JavaScript基础第四天作业",
        "主观题",
        "练习题1："
      ],
      "level": 3,
      "line": 25,
      "blocks": [
        {
          "type": "text",
          "text": "请看以下代码，并说出执行的流程~~~"
        },
        {
          "type": "code",
          "language": "javascript",
          "text": "function printfInput(content) {\n  // 将用户输入的内容, 在页面中显示\n\n  document.write(content);\n}\n\nlet constr = prompt('请输入内容');\n\nprintfInput(constr);"
        }
      ]
    },
    {
      "title": "练习题2：",
      "trail": [
        "JavaScript基础第四天作业",
        "主观题",
        "练习题2："
      ],
      "level": 3,
      "line": 51,
      "blocks": [
        {
          "type": "text",
          "text": "**目标：**求和函数封装练习\n\n\n\n**要求:**\n\n\n\n1. 封装函数, 名字为sum\n\n2. 功能: 根据传入的两个数,求和并且返回求和的结果（函数必须有return返回值）"
        }
      ]
    },
    {
      "title": "练习题3：",
      "trail": [
        "JavaScript基础第四天作业",
        "主观题",
        "练习题3："
      ],
      "level": 3,
      "line": 69,
      "blocks": [
        {
          "type": "text",
          "text": "**目的:**  封装函数, 复习函数的基本写法。\n\n\n\n**需求：**实现两个数的值交换(函数版本)  \n\n\n\n**分析:**\n\n\n\n1. 函数名为 changeNum()\n\n2. 调用函数时,  `changeNum(1，2)`\n\n3. 经过函数内部处理后,输出  `第一个值的结果是2  第二个值的结果是1`\n\n4. 可以多调用两次"
        }
      ]
    },
    {
      "title": "练习题4：",
      "trail": [
        "JavaScript基础第四天作业",
        "主观题",
        "练习题4："
      ],
      "level": 3,
      "line": 95,
      "blocks": [
        {
          "type": "text",
          "text": "**目的:** 复习函数的声明与调用\n\n\n\n**题目：**封装余额函数\n\n\n\n**要求:**\n\n\n\n1. 运行程序后, 浏览器显示输入确认框(prompt)\n\n2. 第一个输入确认框提示输入银行卡余额\n\n3. 第二个输入确认框提示输入当月食宿消费金额\n\n4. 第三个输入确认框提示输入当月生活消费金额\n\n5. 输入完毕后,在页面中显示银行卡剩余金额\n\n6. 提示: 所有功能代码封装在函数内部（函数需要把余额返回）"
        }
      ]
    },
    {
      "title": "练习题5:",
      "trail": [
        "JavaScript基础第四天作业",
        "主观题",
        "练习题5:"
      ],
      "level": 3,
      "line": 125,
      "blocks": [
        {
          "type": "text",
          "text": "**目标：** 封装一个函数,可以求任意数组的和 或 平均值\n\n\n\n**要求：**\n\n\n\n- 函数可以传递2个参数，比如  handleData(arr, true)      `handleData 处理数据的意思`\n\n  * 参数一： 接受实参传递过来的数组\n\n  * 参数二:    布尔类型  如果是true或者不传递参数 是求和操作，   如果传递过来的参数是 false 则是求平均值"
        }
      ]
    },
    {
      "title": "拓展题1",
      "trail": [
        "JavaScript基础第四天作业",
        "主观题",
        "拓展题1"
      ],
      "level": 3,
      "line": 145,
      "blocks": [
        {
          "type": "text",
          "text": "需求：  封装 some 函数查看数组是否存在某个元素  。\n\n\n\n- 要传递2个参数 元素、数组\n\n- 如果数组存在元素则返回true，如果没有存在元素就返回 false\n\n\n\n例如检测 香蕉  是否存在于  数组['苹果', '香蕉', '橘子', '荔枝', '梨子']中， 返回结果是 true\n\n\n\n格式如下："
        },
        {
          "type": "code",
          "language": "javascript",
          "text": "function some(ele, arr = []) {\n  // 里面写业务逻辑\n}\n\nlet re = some('荔枝', ['苹果', '香蕉', '橘子', '荔枝', '梨子']);\n\nconsole.log(re); // true\n\nlet re1 = some('榴莲', ['苹果', '香蕉', '橘子', '荔枝', '梨子']);\n\nconsole.log(re1); // false"
        }
      ]
    },
    {
      "title": "拓展题2",
      "trail": [
        "JavaScript基础第四天作业",
        "主观题",
        "拓展题2"
      ],
      "level": 3,
      "line": 187,
      "blocks": [
        {
          "type": "text",
          "text": "需求：  封装 findeIndex 函数返回查找元素在数组中的索引号。\n\n\n\n- 要传递2个参数 元素、数组\n\n- 如果找到，则返回查找元素在数组中的索引号，如果查找不到，则返回 -1\n\n\n\n例如检测 香蕉    数组['苹果', '香蕉', '橘子', '荔枝', '梨子']中， 返回结果是  1\n\n\n\n格式如下："
        },
        {
          "type": "code",
          "language": "html",
          "text": "<script>\n  // 封装函数返回元素的下标  [1, 5, 10, 22, 8, 7]\n\n  // 1. 封装函数 findIndex，传递2个参数 元素、数组\n\n  function findIndex(ele, arr = []) {\n    // 里面写业务逻辑\n  }\n\n  let index1 = findIndex(10, [1, 5, 10, 22, 8, 7]);\n\n  console.log(index1); // 2\n\n  let index2 = findIndex(8, [1, 5, 10, 22, 8, 7]);\n\n  console.log(index2); // 4\n\n  let index3 = findIndex(88, [1, 5, 10, 22, 8, 7]);\n\n  console.log(index3); // -1\n</script>"
        }
      ]
    },
    {
      "title": "排错题1",
      "trail": [
        "JavaScript基础第四天作业",
        "排错题",
        "排错题1"
      ],
      "level": 3,
      "line": 245,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!-- bug:请你找到代码返回NaN的原因,并进行修改 -->\n\n<body>\n  <script>\n    // 请返回一个数字型的结果 可以使用默认参数或者逻辑中断都可以\n\n    function fn(x, y) {\n      console.log(x + y);\n    }\n\n    fn(1);\n  </script>\n</body>"
        }
      ]
    },
    {
      "title": "排错题2",
      "trail": [
        "JavaScript基础第四天作业",
        "排错题",
        "排错题2"
      ],
      "level": 3,
      "line": 275,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!-- bug:请你找到下面代码的2处错误,并进行修改过来-->\n\n<body>\n  <script>\n    // 任意数组求和案例\n\n    function getsumArr(arr) {\n      let sum = 0;\n\n      for (let i = 0; i < arr.legnth; i++) {\n        sum + arr[i];\n      }\n\n      return sum;\n    }\n\n    console.log(getsumArr([10, 20, 30, 40]));\n  </script>\n</body>"
        }
      ]
    },
    {
      "title": "关注pink老师",
      "trail": [
        "JavaScript基础第四天作业",
        "关注pink老师"
      ],
      "level": 2,
      "line": 313,
      "blocks": [
        {
          "type": "text",
          "text": "[课程配图见原资料]\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n23"
        }
      ]
    }
  ]
};
