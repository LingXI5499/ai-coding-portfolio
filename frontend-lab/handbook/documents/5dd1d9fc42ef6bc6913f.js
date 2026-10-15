window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["5dd1d9fc42ef6bc6913f"] = {
  "id": "5dd1d9fc42ef6bc6913f",
  "title": "作业.md",
  "treatment": "章节知识与练习",
  "sections": [
    {
      "title": "练习题1：",
      "trail": [
        "JavaScript基础第三天作业",
        "主观题",
        "练习题1："
      ],
      "level": 3,
      "line": 9,
      "blocks": [
        {
          "type": "text",
          "text": "写一个程序，要求如下（★★） \n\n\n\n* 需求1：让用户输入五个有效年龄（0-100之间），**放入数组中**\n\n\n\n  * 必须输入五个有效年龄年龄，如果是无效年龄，则不能放入数组中\n\n* 需求2：打印出所有成年人的年龄 (数组筛选)\n\n* 需求3：打印出所有人总年龄 （累加）\n\n* 需求4：打印出所有人的平均年龄 （累加）\n\n* 需求5：打印出最大年龄和最小年龄 （最大值）"
        }
      ]
    },
    {
      "title": "练习题2：",
      "trail": [
        "JavaScript基础第三天作业",
        "主观题",
        "练习题2："
      ],
      "level": 3,
      "line": 35,
      "blocks": [
        {
          "type": "text",
          "text": "找出数组中 元素为10的下标，有则打印该下标，没有则打印-1\n\n\n\n* 例如: [88,20,10,100,50]  打印 2\n\n* 例如: [88,20,30,100,50]  打印-1\n\n\n\n ### 练习题3: \n\n\n\n使用for循环 - 求出数组元素的和 [5, 8, 9, 2, 1, 5]"
        }
      ]
    },
    {
      "title": "练习题4:",
      "trail": [
        "JavaScript基础第三天作业",
        "主观题",
        "练习题4:"
      ],
      "level": 3,
      "line": 59,
      "blocks": [
        {
          "type": "text",
          "text": "使用for循环 - 求出数组里大于5的i和 [4, 9, 5, 20, 3, 11]"
        }
      ]
    },
    {
      "title": "练习题5:",
      "trail": [
        "JavaScript基础第三天作业",
        "主观题",
        "练习题5:"
      ],
      "level": 3,
      "line": 71,
      "blocks": [
        {
          "type": "text",
          "text": "使用for循环 - 求出班级里同学们平均年龄[15, 19, 21, 33, 18, 24]"
        }
      ]
    },
    {
      "title": "练习题6:",
      "trail": [
        "JavaScript基础第三天作业",
        "主观题",
        "练习题6:"
      ],
      "level": 3,
      "line": 79,
      "blocks": [
        {
          "type": "text",
          "text": "计算[2, 6, 18, 15, 40] 中能被3整除的偶数的和"
        }
      ]
    },
    {
      "title": "练习题7：",
      "trail": [
        "JavaScript基础第三天作业",
        "主观题",
        "练习题7："
      ],
      "level": 3,
      "line": 87,
      "blocks": [
        {
          "type": "text",
          "text": "计算[2, 6, 18, 15, 40] 中能被3整除的偶数的个数"
        }
      ]
    },
    {
      "title": "练习题8：",
      "trail": [
        "JavaScript基础第三天作业",
        "主观题",
        "练习题8："
      ],
      "level": 3,
      "line": 95,
      "blocks": [
        {
          "type": "text",
          "text": "给一个数字数组，该数组中有很多数字0，将不为0的数据存入到一个新的数组中"
        }
      ]
    },
    {
      "title": "核心练习题",
      "trail": [
        "JavaScript基础第三天作业",
        "主观题",
        "核心练习题"
      ],
      "level": 3,
      "line": 103,
      "blocks": [
        {
          "type": "text",
          "text": "需求：\n\n\n\n根据用户输入的个数，页面可以渲染对应王者荣耀永雄的个数\n\n\n\n效果如下：\n\n\n\n <img src=\"assets/222.gif\">\n\n\n\n思路分析：\n\n\n\n1. 渲染图片比较多，我们可以把图片地址放入数组中，\n\n2. 图片名称是有序号排列的，比如1.webp  2.webp 此处可以使用循环方式重复渲染图片\n\n3. 渲染位置？ 可以考虑放到 box盒子里写script 即可"
        }
      ]
    },
    {
      "title": "拍错题1",
      "trail": [
        "JavaScript基础第三天作业",
        "排错题",
        "拍错题1"
      ],
      "level": 3,
      "line": 139,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<body>\n  <!-- 请问以下代码会出现什么问题，如何解决？ -->\n\n  <script>\n\n    // 需求： 求 1~100之间的累加和\n\n    // 注意： 此处有3个错误，找出并且修正\n\n    let sum\n\n    for (let i = 1; i < 100; i++;) {\n\n      sum += i\n\n    }\n\n    console.log(sum)\n  </script>\n</body>"
        }
      ]
    },
    {
      "title": "排错题2",
      "trail": [
        "JavaScript基础第三天作业",
        "排错题",
        "排错题2"
      ],
      "level": 3,
      "line": 173,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!-- bug:请你找到下面代码的bug,把数字1打印出来 -->\n\n<body>\n  <script>\n    let sum = 0;\n\n    let arr = [1, 2, 3, 4, 5];\n\n    for (let i = 1; i < arr.length; i++) {\n      console.log(arr[i]);\n    }\n  </script>\n</body>"
        }
      ]
    },
    {
      "title": "排错题3",
      "trail": [
        "JavaScript基础第三天作业",
        "排错题",
        "排错题3"
      ],
      "level": 3,
      "line": 203,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!-- bug:找到下面代码死循环的原因,并修改为正确的代码 -->\n\n<body>\n  <script>\n    for (let i = 1; i <= 5; i++) {\n      for (let j = 1; j <= 5; i++) {\n        console.log(`这是双重for循环`);\n      }\n    }\n  </script>\n</body>"
        }
      ]
    },
    {
      "title": "客观题",
      "trail": [
        "JavaScript基础第三天作业",
        "客观题"
      ],
      "level": 2,
      "line": 239,
      "blocks": [
        {
          "type": "text",
          "text": "请扫码做客观题\n\n\n\nPC端地址：https://ks.wjx.top/vm/eeLxrmN.aspx# \n\n\n\n二维码：\n\n\n\n [课程配图见原资料]\n\n\n\n关于pink老师抖音（黑马pink讲前端），领取学习路线图、面试宝典以及八大学科的基础视频哦~~\n\n\n\n [课程配图见原资料]"
        }
      ]
    }
  ]
};
