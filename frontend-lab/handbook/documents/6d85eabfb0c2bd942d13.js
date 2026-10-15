window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["6d85eabfb0c2bd942d13"] = {
  "id": "6d85eabfb0c2bd942d13",
  "title": "README.md",
  "treatment": "章节知识与练习",
  "sections": [
    {
      "title": "Web APIs - 第6天笔记",
      "trail": [
        "Web APIs - 第6天笔记"
      ],
      "level": 1,
      "line": 1,
      "blocks": [
        {
          "type": "text",
          "text": "> 目标：能够利用正则表达式完成小兔鲜注册页面的表单验证，具备常见的表单验证能力\n\n\n\n- 正则表达式\n\n- 综合案例\n\n- 阶段案例"
        }
      ]
    },
    {
      "title": "正则表达式",
      "trail": [
        "Web APIs - 第6天笔记",
        "正则表达式"
      ],
      "level": 2,
      "line": 19,
      "blocks": [
        {
          "type": "text",
          "text": "**正则表达式**（Regular Expression）是一种字符串匹配的模式（规则）\n\n\n\n**使用场景：**\n\n\n\n- 例如验证表单：手机号表单要求用户只能输入11位的数字 (匹配)\n\n- 过滤掉页面内容中的一些敏感词(替换)，或从字符串中获取我们想要的特定部分(提取)等 \n\n\n\n [课程配图见原资料]"
        }
      ]
    },
    {
      "title": "正则基本使用",
      "trail": [
        "Web APIs - 第6天笔记",
        "正则表达式",
        "正则基本使用"
      ],
      "level": 3,
      "line": 49,
      "blocks": [
        {
          "type": "text",
          "text": "1. 定义规则"
        },
        {
          "type": "code",
          "language": "javascript",
          "text": "const reg = /表达式/;"
        },
        {
          "type": "text",
          "text": "- 其中` /   / `是正则表达式字面量\n\n   - 正则表达式也是`对象 `\n\n\n\n2. 使用正则\n\n\n\n   - `test()方法`   用来查看正则表达式与指定的字符串是否匹配\n\n   - 如果正则表达式与指定的字符串匹配 ，返回`true`，否则`false`"
        },
        {
          "type": "code",
          "language": "html",
          "text": "<body>\n  <script>\n    // 正则表达式的基本使用\n\n    const str = 'web前端开发';\n\n    // 1. 定义规则\n\n    const reg = /web/;\n\n    // 2. 使用正则  test()\n\n    console.log(reg.test(str)); // true  如果符合规则匹配上则返回true\n\n    console.log(reg.test('java开发')); // false  如果不符合规则匹配上则返回 false\n  </script>\n</body>"
        }
      ]
    },
    {
      "title": "元字符",
      "trail": [
        "Web APIs - 第6天笔记",
        "正则表达式",
        "元字符"
      ],
      "level": 3,
      "line": 111,
      "blocks": [
        {
          "type": "text",
          "text": "1. **普通字符:**\n\n\n\n- 大多数的字符仅能够描述它们本身，这些字符称作普通字符，例如所有的字母和数字。\n\n- 普通字符只能够匹配字符串中与它们相同的字符。    \n\n- 比如，规定用户只能输入英文26个英文字母，普通字符的话  /[abcdefghijklmnopqrstuvwxyz]/\n\n\n\n2. **元字符(特殊字符）**\n\n\n\n- 是一些具有特殊含义的字符，可以极大提高了灵活性和强大的匹配功能。\n\n- 比如，规定用户只能输入英文26个英文字母，换成元字符写法： /[a-z]/"
        }
      ]
    },
    {
      "title": "边界符",
      "trail": [
        "Web APIs - 第6天笔记",
        "正则表达式",
        "元字符",
        "边界符"
      ],
      "level": 4,
      "line": 137,
      "blocks": [
        {
          "type": "text",
          "text": "正则表达式中的边界符（位置符）用来提示字符所处的位置，主要有两个字符\n\n\n\n[课程配图见原资料]\n\n\n\n>如果 ^ 和 $ 在一起，表示必须是精确匹配"
        },
        {
          "type": "code",
          "language": "html",
          "text": "<body>\n  <script>\n    // 元字符之边界符\n\n    // 1. 匹配开头的位置 ^\n\n    const reg = /^web/;\n\n    console.log(reg.test('web前端')); // true\n\n    console.log(reg.test('前端web')); // false\n\n    console.log(reg.test('前端web学习')); // false\n\n    console.log(reg.test('we')); // false\n\n    // 2. 匹配结束的位置 $\n\n    const reg1 = /web$/;\n\n    console.log(reg1.test('web前端')); //  false\n\n    console.log(reg1.test('前端web')); // true\n\n    console.log(reg1.test('前端web学习')); // false\n\n    console.log(reg1.test('we')); // false\n\n    // 3. 精确匹配 ^ $\n\n    const reg2 = /^web$/;\n\n    console.log(reg2.test('web前端')); //  false\n\n    console.log(reg2.test('前端web')); // false\n\n    console.log(reg2.test('前端web学习')); // false\n\n    console.log(reg2.test('we')); // false\n\n    console.log(reg2.test('web')); // true\n\n    console.log(reg2.test('webweb')); // flase\n  </script>\n</body>"
        }
      ]
    },
    {
      "title": "量词",
      "trail": [
        "Web APIs - 第6天笔记",
        "正则表达式",
        "元字符",
        "量词"
      ],
      "level": 4,
      "line": 213,
      "blocks": [
        {
          "type": "text",
          "text": "量词用来设定某个模式重复次数\n\n\n\n[课程配图见原资料]\n\n\n\n> 注意： 逗号左右两侧千万不要出现空格"
        },
        {
          "type": "code",
          "language": "html",
          "text": "<body>\n  <script>\n    // 元字符之量词\n\n    // 1. * 重复次数 >= 0 次\n\n    const reg1 = /^w*$/;\n\n    console.log(reg1.test('')); // true\n\n    console.log(reg1.test('w')); // true\n\n    console.log(reg1.test('ww')); // true\n\n    console.log('-----------------------');\n\n    // 2. + 重复次数 >= 1 次\n\n    const reg2 = /^w+$/;\n\n    console.log(reg2.test('')); // false\n\n    console.log(reg2.test('w')); // true\n\n    console.log(reg2.test('ww')); // true\n\n    console.log('-----------------------');\n\n    // 3. ? 重复次数  0 || 1\n\n    const reg3 = /^w?$/;\n\n    console.log(reg3.test('')); // true\n\n    console.log(reg3.test('w')); // true\n\n    console.log(reg3.test('ww')); // false\n\n    console.log('-----------------------');\n\n    // 4. {n} 重复 n 次\n\n    const reg4 = /^w{3}$/;\n\n    console.log(reg4.test('')); // false\n\n    console.log(reg4.test('w')); // flase\n\n    console.log(reg4.test('ww')); // false\n\n    console.log(reg4.test('www')); // true\n\n    console.log(reg4.test('wwww')); // false\n\n    console.log('-----------------------');\n\n    // 5. {n,} 重复次数 >= n\n\n    const reg5 = /^w{2,}$/;\n\n    console.log(reg5.test('')); // false\n\n    console.log(reg5.test('w')); // false\n\n    console.log(reg5.test('ww')); // true\n\n    console.log(reg5.test('www')); // true\n\n    console.log('-----------------------');\n\n    // 6. {n,m}   n =< 重复次数 <= m\n\n    const reg6 = /^w{2,4}$/;\n\n    console.log(reg6.test('w')); // false\n\n    console.log(reg6.test('ww')); // true\n\n    console.log(reg6.test('www')); // true\n\n    console.log(reg6.test('wwww')); // true\n\n    console.log(reg6.test('wwwww')); // false\n\n    // 7. 注意事项： 逗号两侧千万不要加空格否则会匹配失败\n  </script>\n</body>"
        }
      ]
    },
    {
      "title": "范围",
      "trail": [
        "Web APIs - 第6天笔记",
        "正则表达式",
        "元字符",
        "范围"
      ],
      "level": 4,
      "line": 341,
      "blocks": [
        {
          "type": "text",
          "text": "表示字符的范围，定义的规则限定在某个范围，比如只能是英文字母，或者数字等等，用表示范围\n\n\n\n [课程配图见原资料]"
        },
        {
          "type": "code",
          "language": "html",
          "text": "<body>\n  <script>\n    // 元字符之范围  []\n\n    // 1. [abc] 匹配包含的单个字符， 多选1\n\n    const reg1 = /^[abc]$/;\n\n    console.log(reg1.test('a')); // true\n\n    console.log(reg1.test('b')); // true\n\n    console.log(reg1.test('c')); // true\n\n    console.log(reg1.test('d')); // false\n\n    console.log(reg1.test('ab')); // false\n\n    // 2. [a-z] 连字符 单个\n\n    const reg2 = /^[a-z]$/;\n\n    console.log(reg2.test('a')); // true\n\n    console.log(reg2.test('p')); // true\n\n    console.log(reg2.test('0')); // false\n\n    console.log(reg2.test('A')); // false\n\n    // 想要包含小写字母，大写字母 ，数字\n\n    const reg3 = /^[a-zA-Z0-9]$/;\n\n    console.log(reg3.test('B')); // true\n\n    console.log(reg3.test('b')); // true\n\n    console.log(reg3.test(9)); // true\n\n    console.log(reg3.test(',')); // flase\n\n    // 用户名可以输入英文字母，数字，可以加下划线，要求 6~16位\n\n    const reg4 = /^[a-zA-Z0-9_]{6,16}$/;\n\n    console.log(reg4.test('abcd1')); // false\n\n    console.log(reg4.test('abcd12')); // true\n\n    console.log(reg4.test('ABcd12')); // true\n\n    console.log(reg4.test('ABcd12_')); // true\n\n    // 3. [^a-z] 取反符\n\n    const reg5 = /^[^a-z]$/;\n\n    console.log(reg5.test('a')); // false\n\n    console.log(reg5.test('A')); // true\n\n    console.log(reg5.test(8)); // true\n  </script>\n</body>"
        }
      ]
    },
    {
      "title": "字符类",
      "trail": [
        "Web APIs - 第6天笔记",
        "正则表达式",
        "元字符",
        "字符类"
      ],
      "level": 4,
      "line": 437,
      "blocks": [
        {
          "type": "text",
          "text": "某些常见模式的简写方式，区分字母和数字\n\n\n\n[课程配图见原资料]\n\n\n\n [课程配图见原资料]"
        }
      ]
    },
    {
      "title": "替换和修饰符",
      "trail": [
        "Web APIs - 第6天笔记",
        "替换和修饰符"
      ],
      "level": 2,
      "line": 453,
      "blocks": [
        {
          "type": "text",
          "text": "replace 替换方法，可以完成字符的替换\n\n\n\n [课程配图见原资料]"
        },
        {
          "type": "code",
          "language": "html",
          "text": "<body>\n  <script>\n    // 替换和修饰符\n\n    const str = '欢迎大家学习前端，相信大家一定能学好前端，都成为前端大神';\n\n    // 1. 替换  replace  需求：把前端替换为 web\n\n    // 1.1 replace 返回值是替换完毕的字符串\n\n    // const strEnd = str.replace(/前端/, 'web') 只能替换一个\n  </script>\n</body>"
        },
        {
          "type": "text",
          "text": "修饰符约束正则执行的某些细节行为，如是否区分大小写、是否支持多行匹配等\n\n\n\n- i 是单词 ignore 的缩写，正则匹配时字母不区分大小写\n\n- g 是单词 global 的缩写，匹配所有满足正则表达式的结果"
        },
        {
          "type": "code",
          "language": "html",
          "text": "<body>\n  <script>\n    // 替换和修饰符\n\n    const str = '欢迎大家学习前端，相信大家一定能学好前端，都成为前端大神';\n\n    // 1. 替换  replace  需求：把前端替换为 web\n\n    // 1.1 replace 返回值是替换完毕的字符串\n\n    // const strEnd = str.replace(/前端/, 'web') 只能替换一个\n\n    // 2. 修饰符 g 全部替换\n\n    const strEnd = str.replace(/前端/g, 'web');\n\n    console.log(strEnd);\n  </script>\n</body>"
        }
      ]
    },
    {
      "title": "正则插件",
      "trail": [
        "Web APIs - 第6天笔记",
        "正则插件"
      ],
      "level": 2,
      "line": 531,
      "blocks": [
        {
          "type": "text",
          "text": "[课程配图见原资料]"
        }
      ]
    },
    {
      "title": "change 事件",
      "trail": [
        "Web APIs - 第6天笔记",
        "change 事件"
      ],
      "level": 2,
      "line": 543,
      "blocks": [
        {
          "type": "text",
          "text": "给input注册 change 事件，值被修改并且失去焦点后触发"
        }
      ]
    },
    {
      "title": "判断是否有类",
      "trail": [
        "Web APIs - 第6天笔记",
        "判断是否有类"
      ],
      "level": 2,
      "line": 551,
      "blocks": [
        {
          "type": "text",
          "text": "[课程配图见原资料]\n\n\n\n元素.classList.contains() 看看有没有包含某个类，如果有则返回true，么有则返回false"
        }
      ]
    }
  ]
};
