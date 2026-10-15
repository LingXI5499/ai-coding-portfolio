window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["36ac280ecf5e7a54d176"] = {
  "id": "36ac280ecf5e7a54d176",
  "title": "day01-HTML基础.md",
  "treatment": "章节知识与练习",
  "sections": [
    {
      "title": "导读",
      "trail": [],
      "level": 0,
      "line": 1,
      "blocks": [
        {
          "type": "text",
          "text": "> 阶段目标：掌握HTML、CSS常用布局技巧，能够独立制作网页。"
        }
      ]
    },
    {
      "title": "day01：HTML 基础",
      "trail": [
        "day01：HTML 基础"
      ],
      "level": 1,
      "line": 3,
      "blocks": [
        {
          "type": "text",
          "text": "> 目标：掌握标签基本语法，能够独立布局文章页。"
        }
      ]
    },
    {
      "title": "01-今日课程介绍",
      "trail": [
        "day01：HTML 基础",
        "01-今日课程介绍"
      ],
      "level": 2,
      "line": 7,
      "blocks": [
        {
          "type": "text",
          "text": "> 今日目标：掌握标签基本语法，能够独立布局文章页。"
        }
      ]
    },
    {
      "title": "核心技术点",
      "trail": [
        "day01：HTML 基础",
        "01-今日课程介绍",
        "核心技术点"
      ],
      "level": 3,
      "line": 11,
      "blocks": [
        {
          "type": "text",
          "text": "* 网页组成\n\n* 排版标签\n\n* 多媒体标签及属性\n\n* 综合案例一 - 个人简介\n\n  [课程配图见原资料]\n\n* 综合案例二 - Vue 简介\n\n  [课程配图见原资料]"
        }
      ]
    },
    {
      "title": "02-标签语法",
      "trail": [
        "day01：HTML 基础",
        "02-标签语法"
      ],
      "level": 2,
      "line": 28,
      "blocks": [
        {
          "type": "text",
          "text": "HTML 超文本标记语言——HyperText Markup Language。 \n\n* 超文本：链接\n* 标记：标签，带尖括号的文本\n\n[课程配图见原资料]"
        }
      ]
    },
    {
      "title": "标签结构",
      "trail": [
        "day01：HTML 基础",
        "02-标签语法",
        "标签结构"
      ],
      "level": 3,
      "line": 37,
      "blocks": [
        {
          "type": "text",
          "text": "* 标签要成对出现，中间包裹内容\n* <>里面放英文字母（标签名）\n* 结束标签比开始标签多 /\n* 标签分类：双标签和单标签"
        },
        {
          "type": "code",
          "language": "html",
          "text": "<strong>\n  需要加粗的文字\n  <strong>\n    <br />\n    <hr />\n  </strong>\n</strong>"
        },
        {
          "type": "text",
          "text": "[课程配图见原资料]"
        }
      ]
    },
    {
      "title": "03-HTML骨架",
      "trail": [
        "day01：HTML 基础",
        "03-HTML骨架"
      ],
      "level": 2,
      "line": 54,
      "blocks": [
        {
          "type": "text",
          "text": "* html：整个网页\n* head：网页头部，用来存放给浏览器看的信息，例如 CSS\n  * title：网页标题\n* body：网页主体，用来存放给用户看的信息，例如图片、文字"
        },
        {
          "type": "code",
          "language": "html",
          "text": "<html>\n  <head>\n    <title>网页标题</title>\n  </head>\n  <body>\n    网页主体\n  </body>\n</html>"
        },
        {
          "type": "text",
          "text": "> 提示\n>\n> VS Code 可以快速生成骨架：在 HTML 文件（.html）中，!（英文）配合 Enter / Tab 键"
        }
      ]
    },
    {
      "title": "04-标签的关系",
      "trail": [
        "day01：HTML 基础",
        "04-标签的关系"
      ],
      "level": 2,
      "line": 76,
      "blocks": [
        {
          "type": "text",
          "text": "> 作用：明确标签的书写位置，让代码格式更整齐\n\n* 父子关系（嵌套关系）：子级标签换行且缩进（Tab键）\n\n  [课程配图见原资料]\n\n* 兄弟关系（并列关系）：兄弟标签换行要对齐\n\n  [课程配图见原资料]"
        }
      ]
    },
    {
      "title": "05-注释",
      "trail": [
        "day01：HTML 基础",
        "05-注释"
      ],
      "level": 2,
      "line": 90,
      "blocks": [
        {
          "type": "text",
          "text": "概念：注释是对代码的解释和说明，能够提高程序的可读性，方便理解、查找代码。\n\n注释不会再浏览器中显示。\n\n在 VS Code 中，**添加 / 删除**注释的快捷键：**Ctrl + /**"
        },
        {
          "type": "code",
          "language": "html",
          "text": "<!-- 我是 HTML 注释 -->"
        }
      ]
    },
    {
      "title": "06-标题标签",
      "trail": [
        "day01：HTML 基础",
        "06-标题标签"
      ],
      "level": 2,
      "line": 102,
      "blocks": [
        {
          "type": "text",
          "text": "一般用在新闻标题、文章标题、网页区域名称、产品名称等等。"
        },
        {
          "type": "code",
          "language": "html",
          "text": "<h1>一级标题</h1>\n<h2>二级标题</h2>\n<h3>三级标题</h3>\n<h4>四级标题</h4>\n<h5>五级标题</h5>\n<h6>六级标题</h6>"
        },
        {
          "type": "text",
          "text": "显示特点：\n\n* 文字加粗\n* 字号逐渐减小\n* 独占一行（换行）\n\n> 经验\n>\n> 1. h1 标签在一个网页中只能用一次，用来放新闻标题或网页的 logo\n> 2. h2 ~ h6 没有使用次数的限制"
        }
      ]
    },
    {
      "title": "07-段落标签",
      "trail": [
        "day01：HTML 基础",
        "07-段落标签"
      ],
      "level": 2,
      "line": 126,
      "blocks": [
        {
          "type": "text",
          "text": "一般用在新闻段落、文章段落、产品描述信息等等。"
        },
        {
          "type": "code",
          "language": "html",
          "text": "<p>段落</p>"
        },
        {
          "type": "text",
          "text": "显示特点：\n\n* 独占一行\n* 段落之间存在间隙"
        }
      ]
    },
    {
      "title": "08-换行和水平线",
      "trail": [
        "day01：HTML 基础",
        "08-换行和水平线"
      ],
      "level": 2,
      "line": 139,
      "blocks": [
        {
          "type": "text",
          "text": "* 换行：br\n* 水平线：hr"
        },
        {
          "type": "code",
          "language": "html",
          "text": "<br />\n<hr />"
        }
      ]
    },
    {
      "title": "09-文本格式化标签",
      "trail": [
        "day01：HTML 基础",
        "09-文本格式化标签"
      ],
      "level": 2,
      "line": 149,
      "blocks": [
        {
          "type": "text",
          "text": "作用：为文本添加特殊格式，以突出重点。常见的文本格式：加粗、倾斜、下划线、删除线等。 \n\n[课程配图见原资料]\n\n> 提示：strong、em、ins、del 标签自带强调含义（语义）。"
        }
      ]
    },
    {
      "title": "10-图像标签",
      "trail": [
        "day01：HTML 基础",
        "10-图像标签"
      ],
      "level": 2,
      "line": 157,
      "blocks": [
        {
          "type": "text",
          "text": "作用：在网页中插入图片"
        },
        {
          "type": "code",
          "language": "html",
          "text": "<img src=\"图片的 URL\" />"
        },
        {
          "type": "text",
          "text": "src用于指定图像的位置和名称，是 <img> 的必须属性。"
        }
      ]
    },
    {
      "title": "图像属性",
      "trail": [
        "day01：HTML 基础",
        "10-图像标签",
        "图像属性"
      ],
      "level": 3,
      "line": 167,
      "blocks": [
        {
          "type": "text",
          "text": "[课程配图见原资料]"
        }
      ]
    },
    {
      "title": "属性语法",
      "trail": [
        "day01：HTML 基础",
        "10-图像标签",
        "属性语法"
      ],
      "level": 3,
      "line": 171,
      "blocks": [
        {
          "type": "text",
          "text": "* 属性名=\"属性值\"\n* 属性写在尖括号里面，标签名后面，标签名和属性之间用空格隔开，不区分先后顺序\n\n[课程配图见原资料]"
        }
      ]
    },
    {
      "title": "11-路径",
      "trail": [
        "day01：HTML 基础",
        "11-路径"
      ],
      "level": 2,
      "line": 178,
      "blocks": [
        {
          "type": "text",
          "text": "概念：路径指的是查找文件时，从**起点**到**终点**经历的**路线**。 \n\n路径分类：\n\n* 相对路径：从当前文件位置出发查找目标文件\n* 绝对路径：从盘符出发查找目标文件\n  * Windows 电脑从盘符出发\n  * Mac 电脑从根目录出发"
        }
      ]
    },
    {
      "title": "相对路径",
      "trail": [
        "day01：HTML 基础",
        "11-路径",
        "相对路径"
      ],
      "level": 3,
      "line": 189,
      "blocks": [
        {
          "type": "text",
          "text": "查找方式：从**当前文件位置**出发查找目标文件\n\n特殊符号：\n\n* **/** 表示进入某个文件夹里面          → 文件夹名/\n* **. ** 表示当前文件所在文件夹           → ./\n* **..** 表示当前文件的上一级文件夹 → ../   \n\n[课程配图见原资料]"
        }
      ]
    },
    {
      "title": "绝对路径",
      "trail": [
        "day01：HTML 基础",
        "11-路径",
        "绝对路径"
      ],
      "level": 3,
      "line": 201,
      "blocks": [
        {
          "type": "text",
          "text": "查找方式：Windows 电脑从盘符出发；Mac 电脑从根目录（/）出发"
        },
        {
          "type": "code",
          "language": "html",
          "text": "<img src=\"C:\\images\\mao.jpg\" />"
        },
        {
          "type": "text",
          "text": "> 提示\n>\n> 1. Windows 默认是 \\ ，其他系统是 /，建议统一写为 / \n> 2. 特殊的绝对路径 → 文件的在线网址：<https://www.itheima.com/images/logo.png> \"，应用场景：网页底部**友情链接**\n\n[课程配图见原资料]"
        }
      ]
    },
    {
      "title": "12-超链接标签",
      "trail": [
        "day01：HTML 基础",
        "12-超链接标签"
      ],
      "level": 2,
      "line": 216,
      "blocks": [
        {
          "type": "text",
          "text": "作用：点击跳转到其他页面。"
        },
        {
          "type": "code",
          "language": "html",
          "text": "<a href=\"https://www.baidu.com\">跳转到百度</a>"
        },
        {
          "type": "text",
          "text": "**href 属性值是跳转地址，是超链接的必须属性。**\n\n超链接默认是在当前窗口跳转页面，添加 **target=\"_blank\"** 实现**新窗口**打开页面。\n\n拓展：开发初期，不确定跳转地址，则 href 属性值写为 **#**，表示**空链接**，页面不会跳转，在当前页面刷新一次。"
        },
        {
          "type": "code",
          "language": "html",
          "text": "<a href=\"https://www.baidu.com/\">跳转到百度</a>\n\n<!-- 跳转到本地文件：相对路径查找 -->\n<!-- target=\"_blank\" 新窗口跳转页面 -->\n<a href=\"./01-标签的写法.html\" target=\"_blank\">跳转到01-标签的写法</a>\n\n<!-- 开发初期，不知道超链接的跳转地址，href属性值写#，表示空链接，不会跳转 -->\n<a href=\"#\">空链接</a>"
        }
      ]
    },
    {
      "title": "13-音频",
      "trail": [
        "day01：HTML 基础",
        "13-音频"
      ],
      "level": 2,
      "line": 241,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<audio src=\"音频的 URL\"></audio>"
        },
        {
          "type": "text",
          "text": "常用属性\n\n[课程配图见原资料]\n\n> 拓展：书写 HTML5 属性时，如果属性名和属性值相同，可以简写为一个单词。"
        },
        {
          "type": "code",
          "language": "html",
          "text": "<!-- 在 HTML5 里面，如果属性名和属性值完全一样，可以简写为一个单词 -->\n<audio src=\"./media/music.mp3\" controls loop autoplay></audio>"
        }
      ]
    },
    {
      "title": "14-视频",
      "trail": [
        "day01：HTML 基础",
        "14-视频"
      ],
      "level": 2,
      "line": 258,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<video src=\"视频的 URL\"></video>"
        },
        {
          "type": "text",
          "text": "常用属性\n\n[课程配图见原资料]"
        },
        {
          "type": "code",
          "language": "html",
          "text": "<!-- 在浏览器中，想要自动播放，必须有 muted 属性 -->\n<video src=\"./media/vue.mp4\" controls loop muted autoplay></video>"
        }
      ]
    },
    {
      "title": "15-综合案例一-个人简介",
      "trail": [
        "day01：HTML 基础",
        "15-综合案例一-个人简介"
      ],
      "level": 2,
      "line": 273,
      "blocks": [
        {
          "type": "text",
          "text": "> 网页制作思路：从上到下，先整体再局部，逐步分析制作\n>\n> 分析内容 → 写代码 → 保存 → 刷新浏览器，看效果\n\n[课程配图见原资料]"
        },
        {
          "type": "code",
          "language": "html",
          "text": "<h1>尤雨溪</h1>\n<hr />\n<p>\n  尤雨溪，前端框架\n  <a href=\"../17-综合案例二/vue简介.html\">Vue.js</a>\n  的作者，\n  <a href=\"#\">HTML5</a>\n  版Clear的打造人，独立开源开发者。曾就职于Google Creative Labs和Meteor Development\n  Group。由于工作中大量接触开源的项目\n  <a href=\"#\">JavaScript</a>\n  ，最后自己也走上了开源之路，现全职开发和维护\n  <a href=\"#\">Vue.js</a>\n  。\n</p>\n<img src=\"./photo.jpg\" alt=\"尤雨溪的照片\" title=\"尤雨溪\" />\n<h2>学习经历</h2>\n<p>\n  尤雨溪毕业于上海复旦附中，在美国完成大学学业，本科毕业于Colgate\n  University，后在Parsons设计学院获得Design & Technology艺术硕士学位，任职于纽约Google\n  Creative Lab。\n</p>\n<h2>主要成就</h2>\n<p>\n  尤雨溪\n  <strong>大学专业并非是计算机专业</strong>\n  ，在大学期间他学习专业是室内艺术和艺术史，后来读了美术设计和技术的硕士，\n  <ins>\n    正是在读硕士期间，他偶然接触到了JavaScript\n    ，从此被这门编程语言深深吸引，开启了自己的前端生涯\n  </ins>\n  。\n</p>\n<p>\n  2014年2月，开发了一个前端开发库Vue.js。Vue.js 是构建 Web 界面的 JavaScript\n  框架，是一个通过简洁的API提供高效的数据绑定和灵活的组件系统。\n</p>\n<h2>社会任职</h2>\n<p>\n  2016年9月3日，在南京的JSConf上，Vue作者尤雨溪正式宣布加盟阿里巴巴Weex团队，尤雨溪称他将以技术顾问的身份加入Weex团队来做\n  Vue 和 Weex 的 JavaScript runtime 整合，目标是让大家能用 Vue 的语法跨三端。\n</p>"
        }
      ]
    },
    {
      "title": "16-综合案例二-Vue简介",
      "trail": [
        "day01：HTML 基础",
        "16-综合案例二-Vue简介"
      ],
      "level": 2,
      "line": 297,
      "blocks": [
        {
          "type": "text",
          "text": "[课程配图见原资料]"
        },
        {
          "type": "code",
          "language": "html",
          "text": "<h1>Vue.js</h1>\n<p>\n  Vue (读音 /vjuː/，类似于 view) 是一套用于构建用户界面的渐进式JavaScript框架。 [5]\n  与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue\n  的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与现代化的工具链以及各种支持类库结合使用时，Vue\n  也完全能够为复杂的单页应用（SPA）提供驱动。\n</p>\n<p>\n  其作者为\n  <a href=\"../16-综合案例一/个人简介.html\" target=\"_blank\">尤雨溪</a>\n</p>\n<h2>主要功能</h2>\n<p>\n  Vue.js是一套构建用户界面的渐进式框架。与其他重量级框架不同的是，Vue采用自底向上增量开发的设计。Vue\n  的核心库只关注视图层，并且非常容易学习，非常容易与其它库或已有项目整合。另一方面，Vue\n  完全有能力驱动采用单文件组件和Vue生态系统支持的库开发的复杂单页应用。\n</p>\n<p>Vue.js 的目标是通过尽可能简单的 API 实现响应的数据绑定和组合的视图组件。</p>\n<p>\n  Vue.js\n  自身不是一个全能框架——它只聚焦于视图层。因此它非常容易学习，非常容易与其它库或已有项目整合。另一方面，在与相关工具和支持库一起使用时\n  [2] ，Vue.js 也能驱动复杂的单页应用。\n</p>\n<video src=\"../media/vue.mp4\" controls></video>"
        }
      ]
    }
  ]
};
