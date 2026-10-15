window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["d116da70ebc9729469b5"] = {
  "id": "d116da70ebc9729469b5",
  "title": "js基础实战2-排错题-题目.md",
  "treatment": "章节知识与练习",
  "sections": [
    {
      "title": "js基础实战2-排错题-题目",
      "trail": [
        "js基础实战2-排错题-题目"
      ],
      "level": 1,
      "line": 1,
      "blocks": [
        {
          "type": "text",
          "text": "==请说出以下代码都错在哪里，以及书写正确的代码=="
        }
      ]
    },
    {
      "title": "JS代码书写位置",
      "trail": [
        "js基础实战2-排错题-题目",
        "JS代码书写位置"
      ],
      "level": 2,
      "line": 9,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<script src=\"./02.js\">\n\n  alert('弹框出现')\n</script>"
        },
        {
          "type": "text",
          "text": "分析错误：\n\n\n\n正确写法："
        },
        {
          "type": "code",
          "language": "js",
          "text": "\n\n"
        }
      ]
    },
    {
      "title": "输出语句",
      "trail": [
        "js基础实战2-排错题-题目",
        "输出语句"
      ],
      "level": 2,
      "line": 49,
      "blocks": [
        {
          "type": "code",
          "language": "js",
          "text": "prompt(请输入您的姓名);"
        },
        {
          "type": "text",
          "text": "分析错误：\n\n\n\n正确写法："
        },
        {
          "type": "code",
          "language": "js",
          "text": "\n\n"
        }
      ]
    },
    {
      "title": "变量01",
      "trail": [
        "js基础实战2-排错题-题目",
        "变量01"
      ],
      "level": 2,
      "line": 85,
      "blocks": [
        {
          "type": "code",
          "language": "js",
          "text": "let age = 18;\n\nlet age = 19;"
        },
        {
          "type": "text",
          "text": "分析错误："
        }
      ]
    },
    {
      "title": "变量02",
      "trail": [
        "js基础实战2-排错题-题目",
        "变量02"
      ],
      "level": 2,
      "line": 111,
      "blocks": [
        {
          "type": "code",
          "language": "js",
          "text": "console.log(age);\n\nlet age = 18;"
        },
        {
          "type": "text",
          "text": "分析错误：\n\n\n\n正确写法："
        },
        {
          "type": "code",
          "language": "js",
          "text": "\n\n"
        }
      ]
    },
    {
      "title": "字符串01",
      "trail": [
        "js基础实战2-排错题-题目",
        "字符串01"
      ],
      "level": 2,
      "line": 153,
      "blocks": [
        {
          "type": "code",
          "language": "js",
          "text": "let username = 张三;"
        },
        {
          "type": "text",
          "text": "分析错误：\n\n\n\n正确写法："
        },
        {
          "type": "code",
          "language": "js",
          "text": "\n\n"
        }
      ]
    },
    {
      "title": "字符串02",
      "trail": [
        "js基础实战2-排错题-题目",
        "字符串02"
      ],
      "level": 2,
      "line": 193,
      "blocks": [
        {
          "type": "code",
          "language": "js",
          "text": "\nlet uname = '张三\"\n",
          "note": "原资料中含排错代码或不完整片段，保留错误供分析；不会自动执行。"
        },
        {
          "type": "text",
          "text": "分析错误：\n\n\n\n正确写法："
        },
        {
          "type": "code",
          "language": "js",
          "text": "\n\n"
        }
      ]
    },
    {
      "title": "数组",
      "trail": [
        "js基础实战2-排错题-题目",
        "数组"
      ],
      "level": 2,
      "line": 233,
      "blocks": [
        {
          "type": "code",
          "language": "js",
          "text": "// 需求：取出 星期六\n\nlet arr = ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日'];\n\nconsole.log(arr[6]);"
        },
        {
          "type": "text",
          "text": "分析错误：\n\n\n\n正确写法："
        },
        {
          "type": "code",
          "language": "js",
          "text": "\n\n"
        }
      ]
    },
    {
      "title": "自增",
      "trail": [
        "js基础实战2-排错题-题目",
        "自增"
      ],
      "level": 2,
      "line": 283,
      "blocks": [
        {
          "type": "code",
          "language": "js",
          "text": "// 让num自身增加1\n\nlet num = 10;\n\nnum + 1;"
        },
        {
          "type": "text",
          "text": "分析错误：\n\n\n\n正确写法："
        },
        {
          "type": "code",
          "language": "js",
          "text": "\n\n"
        }
      ]
    },
    {
      "title": "switch分支",
      "trail": [
        "js基础实战2-排错题-题目",
        "switch分支"
      ],
      "level": 2,
      "line": 335,
      "blocks": [
        {
          "type": "code",
          "language": "js",
          "text": "let num = prompt('请输入一个数字');\n\nswitch (num) {\n  case 1:\n    alert('用户您输入的是数字1');\n\n  case 2:\n    alert('用户您输入的是数字2');\n\n  case 3:\n    alert('用户您输入的是数字3');\n\n  default:\n    alert('用户您输入的是非1、2、3的数字');\n}"
        },
        {
          "type": "text",
          "text": "分析错误：\n\n\n\n正确写法："
        },
        {
          "type": "code",
          "language": "js",
          "text": "\n\n"
        }
      ]
    },
    {
      "title": "while循环",
      "trail": [
        "js基础实战2-排错题-题目",
        "while循环"
      ],
      "level": 2,
      "line": 397,
      "blocks": [
        {
          "type": "code",
          "language": "js",
          "text": "let num = 1;\n\nwhile (num <= 5) {\n  document.write(`月薪过万不是梦<br/>`);\n}"
        },
        {
          "type": "text",
          "text": "分析错误：\n\n\n\n正确写法："
        },
        {
          "type": "code",
          "language": "js",
          "text": "\n\n"
        }
      ]
    },
    {
      "title": "for循环",
      "trail": [
        "js基础实战2-排错题-题目",
        "for循环"
      ],
      "level": 2,
      "line": 447,
      "blocks": [
        {
          "type": "code",
          "language": "js",
          "text": "for (let i = 1; i <= 3;) {\n  document.write(`月薪过万不是梦 <br/>`);\n}"
        },
        {
          "type": "text",
          "text": "分析错误：\n\n\n\n正确写法："
        },
        {
          "type": "code",
          "language": "js",
          "text": "\n\n"
        }
      ]
    },
    {
      "title": "遍历数组",
      "trail": [
        "js基础实战2-排错题-题目",
        "遍历数组"
      ],
      "level": 2,
      "line": 491,
      "blocks": [
        {
          "type": "code",
          "language": "js",
          "text": "// 需求：取出数组中的每一项\n\nlet arr = ['马超', '赵云', '张飞', '关羽', '黄忠', '小黑', '小红'];\n\nfor (let i = 1; i < arr.length; i++) {\n  console.log(arr[i]);\n}"
        },
        {
          "type": "text",
          "text": "分析错误：\n\n\n\n正确写法："
        },
        {
          "type": "code",
          "language": "js",
          "text": "\n\n"
        }
      ]
    },
    {
      "title": "修改数组的项",
      "trail": [
        "js基础实战2-排错题-题目",
        "修改数组的项"
      ],
      "level": 2,
      "line": 543,
      "blocks": [
        {
          "type": "code",
          "language": "js",
          "text": "// 需求：将数组中的小白修改成 小灰灰\n\nlet arr = ['小黑', '小白', '小红'];\n\narr = '小灰灰';"
        },
        {
          "type": "text",
          "text": "分析错误：\n\n\n\n正确写法："
        },
        {
          "type": "code",
          "language": "js",
          "text": "\n\n"
        }
      ]
    },
    {
      "title": "操作数组",
      "trail": [
        "js基础实战2-排错题-题目",
        "操作数组"
      ],
      "level": 2,
      "line": 589,
      "blocks": [
        {
          "type": "code",
          "language": "js",
          "text": "// 需求：在数组arr的最后面添加 blue\n\nlet arr = ['red', 'green'];\n\narr.push = 'blue';"
        },
        {
          "type": "text",
          "text": "分析错误：\n\n\n\n正确写法："
        },
        {
          "type": "code",
          "language": "js",
          "text": "\n\n"
        }
      ]
    },
    {
      "title": "对象",
      "trail": [
        "js基础实战2-排错题-题目",
        "对象"
      ],
      "level": 2,
      "line": 637,
      "blocks": [
        {
          "type": "code",
          "language": "js",
          "text": "\n// phone 手机对象\n\n\n\nlet phone = {\n\n    size = 6.1\n\n    play = function () {\n\n        console.log('走起，吃鸡')\n\n    }\n\n}\n",
          "note": "原资料中含排错代码或不完整片段，保留错误供分析；不会自动执行。"
        },
        {
          "type": "text",
          "text": "分析错误：\n\n\n\n正确写法："
        },
        {
          "type": "code",
          "language": "js",
          "text": "\n\n"
        }
      ]
    },
    {
      "title": "遍历对象",
      "trail": [
        "js基础实战2-排错题-题目",
        "遍历对象"
      ],
      "level": 2,
      "line": 691,
      "blocks": [
        {
          "type": "code",
          "language": "js",
          "text": "let obj = {\n  uname: '小明',\n\n  age: 18,\n\n  sex: '男',\n\n  height: 200,\n};\n\n// 遍历obj对象，取出对象的属性名和属性值\n\nfor (let k in obj) {\n  console.log(k);\n\n  console.log(obj.k);\n}"
        },
        {
          "type": "text",
          "text": "分析错误：\n\n\n\n正确写法："
        },
        {
          "type": "code",
          "language": "js",
          "text": "\n\n"
        }
      ]
    }
  ]
};
