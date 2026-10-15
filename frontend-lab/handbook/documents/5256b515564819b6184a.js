window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["5256b515564819b6184a"] = {
  "id": "5256b515564819b6184a",
  "title": "作业.md",
  "treatment": "章节知识与练习",
  "sections": [
    {
      "title": "客观题",
      "trail": [
        "客观题"
      ],
      "level": 2,
      "line": 1,
      "blocks": [
        {
          "type": "text",
          "text": "PC端地址：https://ks.wjx.top/vm/hgfFlVd.aspx# \n\n\n\n二维码扫码：\n\n\n\n [课程配图见原资料]"
        }
      ]
    },
    {
      "title": "练习题1：",
      "trail": [
        "客观题",
        "主观题",
        "练习题1："
      ],
      "level": 3,
      "line": 21,
      "blocks": [
        {
          "type": "text",
          "text": "点名: 每次刷新网页运行, 在控制台 随机输出一位同学的名字 [\"老赵\", \"老李\", \"小传\", \"小黑\"]，如果输出了，则数组中删除这个名字"
        },
        {
          "type": "code",
          "language": "html",
          "text": "这个课堂讲过，pink老师坚决不写答案"
        }
      ]
    },
    {
      "title": "练习题2：",
      "trail": [
        "客观题",
        "主观题",
        "练习题2："
      ],
      "level": 3,
      "line": 37,
      "blocks": [
        {
          "type": "text",
          "text": "声明对象\n\n\n\n目的: 复习对象的声明\n\n\n\n要求:\n\n\n\n1. 声明一个变量per, 类型为对象类型\n\n2. 该对象的属性为性别,年龄,爱好(3个)\n\n3. 该对象的方法有 说话, 吃饭(2个)\n\n4. 在控制台分别调用该对象的属性和方法"
        },
        {
          "type": "code",
          "language": "javascript",
          "text": "let per = {\n  sex: 'man', // 年龄,\n\n  age: 18, // 性别,\n\n  hobby: 'studyAndGame', // 爱好\n\n  speak: function () {\n    // 说话,\n\n    document.write(`speak方法被调用了--- <br>`);\n  },\n\n  eat: function () {\n    // 吃饭\n\n    document.write(`eat方法被调用了---`);\n  },\n};\n\n// 下面是调用部分\n\ndocument.write(`姓名:${per.sex} <br>`);\n\ndocument.write(`姓名:${per.age}<br>`);\n\ndocument.write(`姓名:${per.hobby}<br>`);\n\n// 调用方法\n\nper.speak();\n\nper.eat();"
        }
      ]
    },
    {
      "title": "练习题3：",
      "trail": [
        "客观题",
        "主观题",
        "练习题3："
      ],
      "level": 3,
      "line": 111,
      "blocks": [
        {
          "type": "text",
          "text": "调用对象的方法\n\n\n\n目的: 复习对象的使用\n\n\n\n要求:\n\n\n\n1. 对象声明完毕后, 调用对象中的吃饭的方法\n\n2. 提示: 对象中的方法本质是函数, 调用需要加()\n\n3. 方法也可以传递参数的"
        },
        {
          "type": "code",
          "language": "javascript",
          "text": "let per = {\n  sex: 'man', // 年龄,\n\n  age: 18, // 性别,\n\n  hobby: 'studyAndGame', // 爱好\n\n  speak: function () {\n    // 说话,\n\n    document.write(`speak方法被调用了---<br>`);\n  },\n\n  eat: function (f) {\n    // 吃饭\n\n    document.write(`我今天吃的是${f}`);\n  },\n};\n\n// 下面是调用部分\n\ndocument.write(`姓名:${per.sex} <br>`);\n\ndocument.write(`姓名:${per.age}<br>`);\n\ndocument.write(`姓名:${per.hobby}<br>`);\n\n// 调用方法\n\nper.speak();\n\nper.eat('苹果');"
        }
      ]
    },
    {
      "title": "练习题4：",
      "trail": [
        "客观题",
        "主观题",
        "练习题4："
      ],
      "level": 3,
      "line": 183,
      "blocks": [
        {
          "type": "text",
          "text": "猜数字游戏，设定次数，最多猜8次"
        },
        {
          "type": "code",
          "language": "javascript",
          "text": "function random(min, max) {\n  return Math.floor(Math.random() * (max - min + 1)) + min;\n}\n\n// 生成一个数字先,猜0-20之间的数\n\nlet num = random(0, 20);\n\nlet flag = true;\n\n// 最多猜8次\n\nfor (let i = 1; i <= 8; i++) {\n  let userNum = prompt('请输入您要猜的数字');\n\n  // 比较数字\n\n  if (userNum > num) {\n    alert('您猜的数字大了');\n  } else if (userNum < num) {\n    alert('您猜的数字小了');\n  } else {\n    flag = false;\n\n    alert('恭喜猜对了！');\n\n    break;\n  }\n}\n\nif (flag) {\n  alert('太笨了，这都猜不到！O(∩_∩)O');\n}"
        }
      ]
    },
    {
      "title": "练习题5：",
      "trail": [
        "客观题",
        "主观题",
        "练习题5："
      ],
      "level": 3,
      "line": 259,
      "blocks": [
        {
          "type": "text",
          "text": "完成课堂随机生成颜色的案例。"
        },
        {
          "type": "code",
          "language": "html",
          "text": "课堂案例，同学你能写出来吗？"
        }
      ]
    },
    {
      "title": "拓展作业1",
      "trail": [
        "客观题",
        "主观题",
        "拓展作业1"
      ],
      "level": 3,
      "line": 275,
      "blocks": [
        {
          "type": "text",
          "text": "**需求：** 利用对象数组渲染英雄列表案例\n\n\n\n**展示效果：**如下：\n\n\n\n[课程配图见原资料]\n\n\n\n功能1：\n\n\n\n1. 利用对象数组里面的数据来渲染页面，渲染多个数据\n\n2. 鼠标经过停留会显示`英雄名字`\n\n\n\n数据："
        },
        {
          "type": "code",
          "language": "javascript",
          "text": "let datas = [\n  { name: '司马懿', imgSrc: '01.jpg' },\n\n  { name: '女娲', imgSrc: '02.jpg' },\n\n  { name: '百里守约', imgSrc: '03.jpg' },\n\n  { name: '亚瑟', imgSrc: '04.jpg' },\n\n  { name: '虞姬', imgSrc: '05.jpg' },\n\n  { name: '张良', imgSrc: '06.jpg' },\n\n  { name: '安其拉', imgSrc: '07.jpg' },\n\n  { name: '李白', imgSrc: '08.jpg' },\n\n  { name: '阿珂', imgSrc: '09.jpg' },\n\n  { name: '墨子', imgSrc: '10.jpg' },\n\n  { name: '鲁班', imgSrc: '11.jpg' },\n\n  { name: '嬴政', imgSrc: '12.jpg' },\n\n  { name: '孙膑', imgSrc: '13.jpg' },\n\n  { name: '周瑜', imgSrc: '14.jpg' },\n\n  { name: 'XXX', imgSrc: '15.jpg' },\n\n  { name: 'XXX', imgSrc: '16.jpg' },\n\n  { name: 'XXX', imgSrc: '17.jpg' },\n\n  { name: 'XXX', imgSrc: '18.jpg' },\n\n  { name: 'XXX', imgSrc: '19.jpg' },\n\n  { name: 'XXX', imgSrc: '20.jpg' },\n];"
        },
        {
          "type": "text",
          "text": "答案："
        },
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\" />\n\n    <title>渲染英雄列表案例</title>\n\n    <link rel=\"stylesheet\" href=\"css/hero.css\" />\n  </head>\n\n  <body>\n    <!-- 利用对象数组渲染英雄列表案例 -->\n\n    <!-- <ul class=\"list\">\n\n\t\t\n\n\t</ul> -->\n\n    <script>\n      const datas = [\n        { name: '司马懿', imgSrc: '01.jpg' },\n\n        { name: '女娲', imgSrc: '02.jpg' },\n\n        { name: '百里守约', imgSrc: '03.jpg' },\n\n        { name: '亚瑟', imgSrc: '04.jpg' },\n\n        { name: '虞姬', imgSrc: '05.jpg' },\n\n        { name: '张良', imgSrc: '06.jpg' },\n\n        { name: '安其拉', imgSrc: '07.jpg' },\n\n        { name: '李白', imgSrc: '08.jpg' },\n\n        { name: '阿珂', imgSrc: '09.jpg' },\n\n        { name: '墨子', imgSrc: '10.jpg' },\n\n        { name: '鲁班', imgSrc: '11.jpg' },\n\n        { name: '嬴政', imgSrc: '12.jpg' },\n\n        { name: '孙膑', imgSrc: '13.jpg' },\n\n        { name: '周瑜', imgSrc: '14.jpg' },\n\n        { name: 'XXX', imgSrc: '15.jpg' },\n\n        { name: 'XXX', imgSrc: '16.jpg' },\n\n        { name: 'XXX', imgSrc: '17.jpg' },\n\n        { name: 'XXX', imgSrc: '18.jpg' },\n\n        { name: 'XXX', imgSrc: '19.jpg' },\n\n        { name: 'XXX', imgSrc: '20.jpg' },\n      ];\n\n      let str = '';\n\n      for (let i = 0; i < datas.length; i++) {\n        str += `\n\n\t\t\t\t<li><img src=\"./uploads/heros/${datas[i].imgSrc}\" title=\"${datas[i].name}\"></li>\n\n\t\t\t`;\n      }\n\n      document.write(`\n\n\t\t<ul class=\"list\">\n\n\t\t\t${str}\n\n\t\t</ul>\n\n\t\t`);\n    </script>\n  </body>\n</html>"
        }
      ]
    },
    {
      "title": "拓展作业2",
      "trail": [
        "客观题",
        "主观题",
        "拓展作业2"
      ],
      "level": 3,
      "line": 479,
      "blocks": [
        {
          "type": "text",
          "text": "需求： 根据数据完成表格渲染\n\n\n\n效果如下：\n\n\n\n[课程配图见原资料]\n\n\n\n功能需求：\n\n\n\n1. 表格行要求 编号、科目、成绩、和 删除链接\n\n2. 最后计算出总分 和 平均分\n\n\n\n数据如下："
        },
        {
          "type": "code",
          "language": "javascript",
          "text": "let data = [\n  { subject: '语文', score: 46 },\n\n  { subject: '数学', score: 80 },\n\n  { subject: '英语', score: 100 },\n];"
        },
        {
          "type": "text",
          "text": "答案："
        },
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <link rel=\"stylesheet\" href=\"./styles/index.css\" />\n\n    <title>Document</title>\n  </head>\n\n  <body>\n    <script>\n      // 核心数据\n\n      const data = [\n        { subject: '语文', score: 46 },\n\n        { subject: '数学', score: 80 },\n\n        { subject: '英语', score: 100 },\n      ];\n\n      let tr = '';\n\n      let total = 0; // 计算总分\n\n      for (let i = 0; i < data.length; i++) {\n        tr += `\n\n        <tr>\n\n            <td>${i + 1}</td>\n\n            <td>${data[i].subject}</td>\n\n            <td>${data[i].score}</td>\n\n            <td><a href=\"#\">删除</a></td>\n\n        </tr>\n\n      `;\n\n        total += data[i].score;\n      }\n\n      document.write(`\n\n    <div id=\"app\" class=\"score-case\">\n\n      <div class=\"table\">\n\n        <table>\n\n          <thead>\n\n            <tr>\n\n              <th>编号</th>\n\n              <th>科目</th>\n\n              <th>成绩</th>\n\n              <th>操作</th>\n\n            </tr>\n\n          </thead>\n\n          <tbody>\n\n            ${tr}\n\n          </tbody>\n\n          <tbody>\n\n            <tr>\n\n              <td colspan=\"5\">\n\n                <span class=\"none\">暂无数据</span>\n\n              </td>\n\n            </tr>\n\n          </tbody>\n\n\n\n          <tfoot>\n\n            <tr>\n\n              <td colspan=\"5\">\n\n                <span>总分：${total}</span>\n\n                <span style=\"margin-left: 50px\">平均分：${total / data.length}</span>\n\n              </td>\n\n            </tr>\n\n          </tfoot>\n\n        </table>\n\n      </div>\n\n\n\n    </div>\n\n    `);\n    </script>\n  </body>\n</html>"
        }
      ]
    },
    {
      "title": "排错题1",
      "trail": [
        "客观题",
        "排错题",
        "排错题1"
      ],
      "level": 3,
      "line": 683,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!-- bug:请你找到下面代码的2处BUG进行修改 -->\n\n<body>\n  <script>\n\n    let obj = {\n\n      name: '张三',\n\n      age: 20,\n\n      sex: '男',\n\n      address: '中国人'\n\n    }\n\n    // 获取姓名\n\n    console.log(obj.['name'])  // 错误1： 没有点\n\n\n\n    // 获取地址\n\n    console.log(obj.addres)  // 错误2： addres写错了，这是同学们最容易犯错误的地方，单词拼错\n  </script>\n</body>"
        }
      ]
    },
    {
      "title": "排错题2",
      "trail": [
        "客观题",
        "排错题",
        "排错题2"
      ],
      "level": 3,
      "line": 727,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!-- 请你找到下面代码的3处bug进行修改 -->\n\n<body>\n  <script>\n\n    let obj = {\n\n      name: '张三',\n\n      age: 20,\n\n      sex: '男',\n\n      address: '中国人',\n\n      sing: function () {\n\n        console.log('我会唱歌')\n\n      }   // 错误3： 这里少了一个逗号，这是同学很容易落下的\n\n      sum: function (x, y) {\n\n       return x + y\n\n      }\n\n    }\n\n\n\n    console.log(obj.sing)   // 错误1： 方法调用是  obj.sing()\n\n    console.log(obj.sum) // 错误2： 方法调用是  obj.sum()\n  </script>\n</body>"
        }
      ]
    },
    {
      "title": "关注pink老师",
      "trail": [
        "客观题",
        "关注pink老师"
      ],
      "level": 2,
      "line": 779,
      "blocks": [
        {
          "type": "text",
          "text": "经过基础5天学习，是不是很有收获呀，同时pink老师准备了很多资料给同学，看在辛苦的份上，没有一键三连的同学赶紧三连，同时记得关注我的抖音，里面经常发布各种资料哦~~~\n\n\n\n [课程配图见原资料]"
        }
      ]
    }
  ]
};
