window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["782d5c6a1a663c98f527"] = {
  "id": "782d5c6a1a663c98f527",
  "title": "JavaScript基础第02天作业.md",
  "treatment": "章节知识与练习",
  "sections": [
    {
      "title": "核心知识点",
      "trail": [
        "一、每日作业-JavaScript第02天",
        "主观题",
        "核心知识点"
      ],
      "level": 3,
      "line": 5,
      "blocks": [
        {
          "type": "text",
          "text": "1. 打印0-20之间的整数, 将每个数输出到控制台\n\n2. 计算1-1000之间的累加和，并且打印输出到页面中\n\n3. 页面依次打印 100-200之间,可以被6整除的数字\n\n4. 用户弹窗输入两个数字，页面输出两个数字中的最大值（请使用三元运算符完成）\n\n5. **用户输入一个数，  计算 1 到这个数的累加和** \n\n   - 比如 用户输入的是 5， 则计算 1~5 之间的累加和\n   - 比如用户输入的是10， 则计算 1~10 之间的累加和\n\n6. **输出成绩案例（请使用if多分支来书写程序）**\n\n   题目描述：\n\n   接收用户输入的分数，根据分数输出对应的等级字母 A、B、C、D、E，\n\n   - 90分(含)以上 ，输出：A\n     80分(含)~ 90 分(不含)，输出：B\t\n      70分(含)~ 80 分(不含)，输出：C \t\n      60分(含)~ 70 分(不含)，输出：D   \t\n   - 60分(不含) 以下，输出 E\n\n7. **输出星期练习（请使用switch分支语句来书写程序）**\n\n   题目描述：\n\n   请用户输入1个星期数. 就将对应的英文的星期打印出来. \n\n   - 比如用户输入'星期一'， 则 页面可以打印  monday \n   - 英文自己查有道。比如星期一是  monday  星期二是 tuesday\n\n8. **用户登录验证**\n\n   题目描述：\n\n   接收用户输入的用户名和密码，若用户名为 “admin” ,且密码为 “123456” ,则提示用户登录成功!  否则，让用户一直输入。\n\n   ​"
        }
      ]
    },
    {
      "title": "综合案例变形",
      "trail": [
        "一、每日作业-JavaScript第02天",
        "主观题",
        "综合案例变形"
      ],
      "level": 3,
      "line": 49,
      "blocks": [
        {
          "type": "text",
          "text": "需求：根据用户选择计算两个数的结果：\n\n**题目描述：**\n\n打开页面出现一个提示框，注意是一直提示的，'请您选择 + - * / ，如果输入q，则是退出结束程序\n\n- 如果输入的是 + - * / 其中任何一个，比如用户输入是 + ，则是计算求和，如果用户输入是 *  则是计算乘积\n  - 则提示第一个弹窗，提示用户：'请您输入第一个数字'\n  - 输入完毕则继续提示第二个弹窗，提示用户：'请您输入第二个数字'\n  - 都输入完毕，则通过警示框 alert 输出结果\n- 如果输入是 q，则结束程序\n\n提示：多分支请使用 if 多分支来完成\n\n具体效果如图：\n\n <img src=\"assets/111.gif\">\n\n​"
        }
      ]
    },
    {
      "title": "排错题1",
      "trail": [
        "一、每日作业-JavaScript第02天",
        "排错题",
        "排错题1"
      ],
      "level": 3,
      "line": 73,
      "blocks": [
        {
          "type": "code",
          "language": "javascript",
          "text": "<!-- 请问以下代码会出现什么问题，如何解决？ -->\n<script>\n  // 需求： 求用户输入2个数字的和\n  let num1 = prompt('请输入第一个值')\n  let num2 = prompt('请输入第二个值')\n  alert(num1 + num2)\n</script>",
          "note": "原资料中含排错代码或不完整片段，保留错误供分析；不会自动执行。"
        }
      ]
    },
    {
      "title": "排错题2",
      "trail": [
        "一、每日作业-JavaScript第02天",
        "排错题",
        "排错题2"
      ],
      "level": 3,
      "line": 85,
      "blocks": [
        {
          "type": "code",
          "language": "javascript",
          "text": "<!-- 请问下面代码会出现什么问题，怎么去解决？ -->\n<script>\n  // 判断用户名的案例，用户会输入用户名\n  // 1. 如果用户名输入'迪丽热巴'，则页面弹出 '用户名输入正确'\n  // 2. 如果用户名输入不是'迪丽热巴'，否则弹出'用户名输入不正确'\n\n  let username = prompt('请输入用户名:')\n  if (username = '迪丽热巴') {\n    alert('用户名输入正确')\n  } else {\n    alert('用户名输入不正确')\n  }\n</script>",
          "note": "原资料中含排错代码或不完整片段，保留错误供分析；不会自动执行。"
        }
      ]
    },
    {
      "title": "排错题3",
      "trail": [
        "一、每日作业-JavaScript第02天",
        "排错题",
        "排错题3"
      ],
      "level": 3,
      "line": 103,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<body>\n  <!-- 请问以下代码会出什么问题？如何解决？ -->\n  <script>\n    // 需求，用户输入1~10之间的整数，则循环打印用户输入的次数\n    // 注意此处有2个错误，找出并且修正\n\n    let num = prompt('请输入一个1~10之间的整数');\n    let i = 1;\n    while (i < num) {\n      console.log(`我是第${i}句话`);\n    }\n  </script>\n</body>"
        }
      ]
    },
    {
      "title": "排错题4",
      "trail": [
        "一、每日作业-JavaScript第02天",
        "排错题",
        "排错题4"
      ],
      "level": 3,
      "line": 121,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<body>\n  <!-- bug:请你找到下面代码代码穿透的原因,并找到匹配不上case里面的值的问题进行修改 -->\n\n  <script>\n    // 需求： 用户输入1~4之间整数，对应输出 '春' '夏' '秋' '冬'\n    // 例如用户输入 1 则输出 '春' ，用户输入 2，则输出 '夏' 以此类推\n    // 注意： 此处有2个错误，找出并且修正\n    let num = +prompt('请你输入一个1-4之间的值');\n    switch (num) {\n      case '1':\n        alert('春');\n      case '2':\n        alert('夏');\n      case '3':\n        alert('秋');\n      case '4':\n        alert('冬');\n      default:\n        alert('请输入1~4之间整数');\n        break;\n    }\n  </script>\n</body>"
        }
      ]
    },
    {
      "title": "客观题",
      "trail": [
        "一、每日作业-JavaScript第02天",
        "客观题"
      ],
      "level": 2,
      "line": 151,
      "blocks": [
        {
          "type": "text",
          "text": "地址：https://ks.wjx.top/vm/tjmrvAg.aspx# \n\n请扫码做题 \n\n [课程配图见原资料]"
        }
      ]
    },
    {
      "title": "简答题：关键字汇总( 能够简单的说出来这些关键字干啥用的 )",
      "trail": [
        "一、每日作业-JavaScript第02天",
        "简答题：关键字汇总( 能够简单的说出来这些关键字干啥用的 )"
      ],
      "level": 2,
      "line": 161,
      "blocks": [
        {
          "type": "text",
          "text": "- let    声明变量\n- typeof   检测数据类型\n- if   条件语句如果\n- else   否则 \n- switch    分支语句   \n- case   选项\n- default      默认语句\n- while    \n- break    退出循环\n- continue    继续下一次循环"
        }
      ]
    },
    {
      "title": "关注pink老师",
      "trail": [
        "一、每日作业-JavaScript第02天",
        "关注pink老师"
      ],
      "level": 2,
      "line": 175,
      "blocks": [
        {
          "type": "text",
          "text": "关于pink老师抖音（黑马pink讲前端），领取学习路线图、面试宝典以及八大学科的基础视频哦~~\n\n [课程配图见原资料]"
        }
      ]
    }
  ]
};
