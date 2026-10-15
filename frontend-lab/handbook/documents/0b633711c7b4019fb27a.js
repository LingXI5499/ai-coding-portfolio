window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["0b633711c7b4019fb27a"] = {
  "id": "0b633711c7b4019fb27a",
  "title": "作业.md",
  "treatment": "章节知识与练习",
  "sections": [
    {
      "title": "综合大练习：",
      "trail": [
        "JavaScript基础第三天作业",
        "主观题",
        "综合大练习："
      ],
      "level": 3,
      "line": 9,
      "blocks": [
        {
          "type": "text",
          "text": "写一个程序，要求如下（★★） \n\n\n\n* 需求1：让用户输入五个有效年龄（0-100之间），**放入数组中**\n\n\n\n  * 必须输入五个有效年龄年龄，如果是无效年龄，则不能放入数组中\n\n* 需求2：打印出所有成年人的年龄 (数组筛选)\n\n* 需求3：打印出所有人总年龄 （累加）\n\n* 需求4：打印出所有人的平均年龄 （累加）\n\n* 需求5：打印出最大年龄和最小年龄 （最大值）\n\n\n\n\n\n\n\n答案："
        },
        {
          "type": "code",
          "language": "javascript",
          "text": "/* 1.让用户输入五个有效年龄（0-100之间），放入数组中 */\n\n//1.声明累加数组\n\nlet arr = [];\n\n//2.循环遍历\n\nwhile (arr.length < 5) {\n  //输入年龄\n\n  let num = +prompt(`请输入第${arr.length + 1}个人有效年龄`);\n\n  //判断是否有效\n\n  if (num > 0 && num < 100) {\n    //添加到数组\n\n    arr.push(num);\n  }\n}\n\nconsole.log(arr);\n\n// 2. 打印输出成人的年龄  年龄 > 18\n\nfor (let i = 0; i < arr.length; i++) {\n  if (arr[i] >= 18) {\n    document.write(`已经成人的年龄是: ${arr[i]} <br>`);\n  }\n}\n\n//  需求3：打印出所有人总年龄 （累加）\n\nlet sum = 0;\n\nfor (let i = 0; i < arr.length; i++) {\n  sum += arr[i];\n}\n\ndocument.write(`所有人的年龄是: ${sum} <br>`);\n\n// 需求4：打印出所有人的平均年龄 （累加）\n\nlet average = 0;\n\naverage = sum / arr.length;\n\ndocument.write(`所有人的年龄是: ${average} <br>`);\n\n// 需求5：打印出最大年龄和最小年龄 （最大值）   假设法\n\nlet max = arr[0];\n\nlet min = arr[0];\n\nfor (let i = 1; i < arr.length; i++) {\n  if (max < arr[i]) {\n    max = arr[i];\n  }\n\n  if (min > arr[i]) {\n    min = arr[i];\n  }\n}\n\ndocument.write(`最大值是: ${max} <br>`);\n\ndocument.write(`最小值是: ${min} <br>`);\n\n// 需求5：打印出最大年龄和最小年龄 （最大值）   排序法\n\narr.sort(function (a, b) {\n  return a - b;\n}); // 升序\n\nlet min = arr[0]; //\n\nlet max = arr[arr.length - 1]; // 56"
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
      "line": 149,
      "blocks": [
        {
          "type": "text",
          "text": "找出数组中 元素为10的下标，有则打印该下标，没有则打印-1\n\n\n\n* 例如: [88,20,10,100,50]  打印 2\n\n* 例如: [88,20,30,100,50]  打印-1"
        },
        {
          "type": "code",
          "language": "javascript",
          "text": "// 找出数组中 元素为10的下标，有则打印该下标，没有则打印 - 1\n\nlet arr = [88, 20, 10, 100, 50];\n\nlet re = -1; // 用于存储结果,默认没有\n\nfor (let i = 0; i < arr.length; i++) {\n  if (arr[i] === 10) {\n    re = i; //如果找到则把当前索引号赋值给 re， 如果没有找到，则默认的是 -1\n\n    break; // 已经找到就退出\n  }\n}\n\nconsole.log(re);"
        },
        {
          "type": "text",
          "text": "### 练习题3: \n\n\n\n使用for循环 - 求出数组元素的和 [5, 8, 9, 2, 1, 5]"
        },
        {
          "type": "code",
          "language": "javascript",
          "text": "// 遇到数组 先把遍历写出来!!!!!!!!!!!!!!!=> 访问数组里面的单元的值\n\nlet arr = [5, 8, 9, 2, 1, 5];\n\nlet sum = 0;\n\nfor (let i = 0; i < arr.length; i++) {\n  // sum = sum + item\n\n  sum += item;\n}\n\nconsole.log(sum); // 30"
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
      "line": 223,
      "blocks": [
        {
          "type": "text",
          "text": "使用for循环 - 求出数组里大于5的i和 [4, 9, 5, 20, 3, 11]"
        },
        {
          "type": "code",
          "language": "javascript",
          "text": "let arr = [4, 9, 5, 20, 3, 11];\n\nfor (let i = 0; i < arr.length; i++) {\n  if (arr[i] > 5) {\n    sum += arr[i];\n  }\n}\n\nconsole.log(sum);"
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
      "line": 253,
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
      "line": 261,
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
      "line": 269,
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
      "line": 277,
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
      "line": 285,
      "blocks": [
        {
          "type": "text",
          "text": "需求：\n\n\n\n根据用户输入的个数，页面可以渲染对应王者荣耀永雄的个数\n\n\n\n效果如下：\n\n\n\n <img src=\"assets/222.gif\">\n\n\n\n思路分析：\n\n\n\n1. 渲染图片比较多，我们可以把图片地址放入数组中，\n\n2. 图片名称是有序号排列的，比如1.webp  2.webp 此处可以使用循环方式重复渲染图片\n\n3. 渲染位置？ 可以考虑放到 box盒子里写script 即可\n\n\n\n答案："
        },
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>渲染图片案例</title>\n\n    <style>\n      * {\n        margin: 0;\n\n        padding: 0;\n      }\n\n      li {\n        list-style: none;\n      }\n\n      .box {\n        display: flex;\n\n        flex-wrap: wrap;\n\n        width: 540px;\n\n        margin: 20px auto;\n      }\n\n      .box li {\n        width: 100px;\n\n        height: 100px;\n\n        margin: 0 10px 10px 0;\n      }\n\n      .box li:nth-child(5n + 1) {\n        margin-right: 0;\n      }\n\n      .box li img {\n        width: 100%;\n\n        height: 100%;\n\n        border: 2px solid #258df2;\n\n        border-radius: 10px 0 10px 0;\n      }\n    </style>\n  </head>\n\n  <body>\n    <ul class=\"box\">\n      <script>\n        let arr = [\n          './images/1.webp',\n\n          './images/2.webp',\n\n          './images/3.webp',\n\n          './images/4.webp',\n\n          './images/5.webp',\n\n          './images/6.webp',\n\n          './images/7.webp',\n\n          './images/8.webp',\n\n          './images/9.webp',\n\n          './images/10.webp',\n\n          './images/11.webp',\n\n          './images/12.webp',\n\n          './images/13.webp',\n\n          './images/14.webp',\n\n          './images/15.webp',\n\n          './images/16.webp',\n\n          './images/17.webp',\n\n          './images/18.webp',\n\n          './images/19.webp',\n\n          './images/20.webp',\n        ];\n\n        let num = prompt('请输入显示的英雄个数1~20之间：');\n\n        for (let i = 0; i < num; i++) {\n          document.write(`\n\n          <li>\n\n            <img src=\"${arr[i]}\" alt=\"\">\n\n          </li>\n\n        `);\n        }\n      </script>\n    </ul>\n  </body>\n</html>"
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
      "line": 503,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<body>\n  <!-- 请问以下代码会出现什么问题，如何解决？ -->\n\n  <script>\n\n    // 需求： 求 1~100之间的累加和\n\n    // 注意： 此处有3个错误，找出并且修正\n\n    let sum   //错误1： sum 必须初始化为0，如果默认是是undefined，相加结果是 NaN\n\n    for (let i = 1; i < 100; i++;) {  // 错误2： 从1开始，是小于等于。 错误3： i++ 后面不需要加分号\n\n      sum += i\n\n    }\n\n    console.log(sum)\n  </script>\n</body>"
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
      "line": 537,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!-- bug:请你找到下面代码的bug,把数字1打印出来 -->\n\n<body>\n  <script>\n    let sum = 0;\n\n    let arr = [1, 2, 3, 4, 5];\n\n    for (let i = 1; i < arr.length; i++) {\n      // 错误： i 从 0 开始\n\n      console.log(arr[i]);\n    }\n  </script>\n</body>"
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
      "line": 567,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!-- bug:找到下面代码死循环的原因,并修改为正确的代码 -->\n\n<body>\n  <script>\n    for (let i = 1; i <= 5; i++) {\n      for (let j = 1; j <= 5; i++) {\n        // 错误： 这里是j++ 不是i++ ，不是考察同学眼力，而是很多同学不小心就写这个了，要小心\n\n        console.log(`这是双重for循环`);\n      }\n    }\n  </script>\n</body>"
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
      "line": 603,
      "blocks": [
        {
          "type": "text",
          "text": "请扫码做客观题\n\n\n\nPC端地址：https://ks.wjx.top/vm/eeLxrmN.aspx# \n\n\n\n二维码：\n\n\n\n [课程配图见原资料]\n\n\n\n关于pink老师抖音（黑马pink讲前端），领取学习路线图、面试宝典以及八大学科的基础视频哦~~\n\n\n\n [课程配图见原资料]"
        }
      ]
    }
  ]
};
