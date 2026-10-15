window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["74833365cfd3c142f3de"] = {
  "id": "74833365cfd3c142f3de",
  "title": "移动Web第三天.md",
  "treatment": "章节知识与练习",
  "sections": [
    {
      "title": "谷歌模拟器",
      "trail": [
        "移动 Web 第三题",
        "01-移动 Web 基础",
        "谷歌模拟器"
      ],
      "level": 3,
      "line": 9,
      "blocks": [
        {
          "type": "text",
          "text": "模拟移动设备，方便查看页面效果\n\n\n\n[课程配图见原资料]"
        }
      ]
    },
    {
      "title": "屏幕分辨率",
      "trail": [
        "移动 Web 第三题",
        "01-移动 Web 基础",
        "屏幕分辨率"
      ],
      "level": 3,
      "line": 21,
      "blocks": [
        {
          "type": "text",
          "text": "分类：\n\n\n\n* 物理分辨率：硬件分辨率（出厂设置）\n\n* 逻辑分辨率：软件 / 驱动设置\n\n\n\n结论：**制作网页参考 逻辑分辨率** \n\n\n\n[课程配图见原资料]"
        }
      ]
    },
    {
      "title": "视口",
      "trail": [
        "移动 Web 第三题",
        "01-移动 Web 基础",
        "视口"
      ],
      "level": 3,
      "line": 43,
      "blocks": [
        {
          "type": "text",
          "text": "作用：显示 HTML 网页的区域，用来约束 HTML 的尺寸"
        },
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n     \n    <meta charset=\"UTF-8\" />\n\n     \n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <!– 视口标签 -->\n\n     \n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n     \n    <title>Document</title>\n  </head>\n\n  <body>\n     \n  </body>\n</html>"
        },
        {
          "type": "text",
          "text": "* width=device-width：视口宽度 = 设备宽度\n\n* initial-scale=1.0：缩放1倍（不缩放）"
        }
      ]
    },
    {
      "title": "二倍图",
      "trail": [
        "移动 Web 第三题",
        "01-移动 Web 基础",
        "二倍图"
      ],
      "level": 3,
      "line": 93,
      "blocks": [
        {
          "type": "text",
          "text": "概念：设计稿里面每个元素的尺寸的倍数\n\n\n\n作用：防止图片在高分辨率屏幕下模糊失真\n\n\n\n使用方法：\n\n\n\n[课程配图见原资料]"
        }
      ]
    },
    {
      "title": "适配方案",
      "trail": [
        "移动 Web 第三题",
        "01-移动 Web 基础",
        "适配方案"
      ],
      "level": 3,
      "line": 113,
      "blocks": [
        {
          "type": "text",
          "text": "* 宽度适配：宽度自适应\n\n  * 百分比布局\n\n  * Flex 布局\n\n\n\n* 等比适配：宽高等比缩放\n\n  * rem\n\n  * vw"
        }
      ]
    },
    {
      "title": "简介",
      "trail": [
        "移动 Web 第三题",
        "02-rem",
        "简介"
      ],
      "level": 3,
      "line": 137,
      "blocks": [
        {
          "type": "text",
          "text": "* rem单位，是相对单位\n\n* rem单位是相对于HTML标签的字号计算结果\n\n* 1rem = 1HTML字号大小"
        }
      ]
    },
    {
      "title": "媒体查询",
      "trail": [
        "移动 Web 第三题",
        "02-rem",
        "媒体查询"
      ],
      "level": 3,
      "line": 149,
      "blocks": [
        {
          "type": "text",
          "text": "媒体查询能够检测视口的宽度，然后编写差异化的 CSS 样式\n\n\n\n当某个条件成立, 执行对应的CSS样式\n\n\n\n[课程配图见原资料]"
        },
        {
          "type": "code",
          "language": "css",
          "text": "\n@media (width:320px) {\n\n  html {\n\n    background-color: green;\n\n  }\n\n}\n",
          "note": "原资料中含排错代码或不完整片段，保留错误供分析；不会自动执行。"
        }
      ]
    },
    {
      "title": "rem 布局",
      "trail": [
        "移动 Web 第三题",
        "02-rem",
        "rem 布局"
      ],
      "level": 3,
      "line": 181,
      "blocks": [
        {
          "type": "text",
          "text": "目前rem布局方案中，将网页等分成10份， HTML标签的字号为视口宽度的 1/10。\n\n\n\n[课程配图见原资料]"
        }
      ]
    },
    {
      "title": "flexible.js",
      "trail": [
        "移动 Web 第三题",
        "02-rem",
        "flexible.js"
      ],
      "level": 3,
      "line": 193,
      "blocks": [
        {
          "type": "text",
          "text": "flexible.js 是手淘开发出的一个用来适配移动端的 js 库。\n\n\n\n核心原理就是根据不同的视口宽度给网页中 html 根节点设置不同的 font-size。"
        },
        {
          "type": "code",
          "language": "html",
          "text": "<body>\n    ......  \n  <script src=\"./js/flexible.js\"></script>\n</body>"
        }
      ]
    },
    {
      "title": "rem 移动适配",
      "trail": [
        "移动 Web 第三题",
        "02-rem",
        "rem 移动适配"
      ],
      "level": 3,
      "line": 219,
      "blocks": [
        {
          "type": "text",
          "text": "rem单位尺寸\n\n\n\n1.  确定基准根字号\n\n\n\n* 查看设计稿宽度 → 确定参考设备宽度(视口宽度) → 确定基准根字号（1/10视口宽度）\n\n\n\n2.  rem单位的尺寸\n\n\n\n* **rem单位的尺寸 = px单位数值 / 基准根字号**"
        }
      ]
    },
    {
      "title": "03-less",
      "trail": [
        "移动 Web 第三题",
        "03-less"
      ],
      "level": 2,
      "line": 243,
      "blocks": [
        {
          "type": "text",
          "text": "Less是一个CSS预处理器, Less文件后缀是.less。扩充了 CSS 语言, 使 CSS 具备一定的逻辑性、计算能力\n\n\n\n注意：浏览器不识别 Less 代码，目前阶段，网页要引入对应的 CSS 文件\n\n\n\nVS Code 插件：Easy LESS，保存 less文件后自动生成对应的 CSS 文件\n\n\n\n[课程配图见原资料]"
        }
      ]
    },
    {
      "title": "注释",
      "trail": [
        "移动 Web 第三题",
        "03-less",
        "注释"
      ],
      "level": 3,
      "line": 263,
      "blocks": [
        {
          "type": "text",
          "text": "* 单行注释\n\n  * 语法：// 注释内容\n\n  * 快捷键：ctrl + /\n\n* 块注释\n\n  * 语法：/* 注释内容 */\n\n  * 快捷键： Shift + Alt + A"
        }
      ]
    },
    {
      "title": "运算",
      "trail": [
        "移动 Web 第三题",
        "03-less",
        "运算"
      ],
      "level": 3,
      "line": 281,
      "blocks": [
        {
          "type": "text",
          "text": "* 加、减、乘直接书写计算表达式\n\n* 除法需要添加 小括号 或 .\n\n* 表达式存在多个单位以第一个单位为准\n\n\n\n[课程配图见原资料]"
        }
      ]
    },
    {
      "title": "嵌套",
      "trail": [
        "移动 Web 第三题",
        "03-less",
        "嵌套"
      ],
      "level": 3,
      "line": 297,
      "blocks": [
        {
          "type": "text",
          "text": "作用：快速生成后代选择器\n\n\n\n[课程配图见原资料]\n\n\n\n提示：用 & 表示当前选择器，不会生成后代选择器，通常配合伪类或伪元素使用\n\n\n\n[课程配图见原资料]"
        }
      ]
    },
    {
      "title": "变量",
      "trail": [
        "移动 Web 第三题",
        "03-less",
        "变量"
      ],
      "level": 3,
      "line": 317,
      "blocks": [
        {
          "type": "text",
          "text": "概念：容器，存储数据\n\n\n\n作用：存储数据，方便使用和修改\n\n\n\n语法：\n\n\n\n* 定义变量：@变量名: 数据; \n\n* 使用变量：CSS属性：@变量名;"
        },
        {
          "type": "code",
          "language": "less",
          "text": "\n// 定义变量\n\n@myColor: pink;\n\n// 使用变量\n\n.box {\n\n  color: @myColor;\n\n}\n\na {\n\n  color: @myColor;\n\n}\n",
          "note": "原资料中含排错代码或不完整片段，保留错误供分析；不会自动执行。"
        }
      ]
    },
    {
      "title": "导入",
      "trail": [
        "移动 Web 第三题",
        "03-less",
        "导入"
      ],
      "level": 3,
      "line": 363,
      "blocks": [
        {
          "type": "text",
          "text": "作用：导入 less 公共样式文件\n\n\n\n语法：导入: @import “文件路径”;\n\n\n\n提示：如果是 less 文件可以省略后缀"
        },
        {
          "type": "code",
          "language": "less",
          "text": "@import './base.less';\n\n@import './common';"
        }
      ]
    },
    {
      "title": "导出",
      "trail": [
        "移动 Web 第三题",
        "03-less",
        "导出"
      ],
      "level": 3,
      "line": 389,
      "blocks": [
        {
          "type": "text",
          "text": "写法：在 less 文件的第一行添加 // out: 存储URL\n\n\n\n提示：文件夹名称后面添加 /"
        },
        {
          "type": "code",
          "language": "less",
          "text": "// out: ./index.css\n\n// out: ./css/"
        }
      ]
    },
    {
      "title": "禁止导出",
      "trail": [
        "移动 Web 第三题",
        "03-less",
        "禁止导出"
      ],
      "level": 3,
      "line": 411,
      "blocks": [
        {
          "type": "text",
          "text": "写法：在 less 文件第一行添加:  // out: false \n\n\n\n[课程配图见原资料]"
        }
      ]
    },
    {
      "title": "04-综合案例-极速问诊",
      "trail": [
        "移动 Web 第三题",
        "04-综合案例-极速问诊"
      ],
      "level": 2,
      "line": 427,
      "blocks": [
        {
          "type": "text",
          "text": "[课程配图见原资料]"
        }
      ]
    },
    {
      "title": "准备工作",
      "trail": [
        "移动 Web 第三题",
        "04-综合案例-极速问诊",
        "准备工作"
      ],
      "level": 3,
      "line": 435,
      "blocks": [
        {
          "type": "text",
          "text": "* 项目目录\n\n\n\n[课程配图见原资料]\n\n\n\n* HTML 结构"
        },
        {
          "type": "code",
          "language": "html",
          "text": "<link rel=\"stylesheet\" href=\"./iconfont/iconfont.css\" />\n\n<link rel=\"stylesheet\" href=\"./css/index.css\" />\n\n<body>\n    ......  \n  <script src=\"./js/flexible.js\"></script>\n</body>"
        },
        {
          "type": "text",
          "text": "* less 样式"
        },
        {
          "type": "code",
          "language": "less",
          "text": "// out: ../css/\n\n@import './base';"
        }
      ]
    },
    {
      "title": "头部布局",
      "trail": [
        "移动 Web 第三题",
        "04-综合案例-极速问诊",
        "头部布局"
      ],
      "level": 3,
      "line": 487,
      "blocks": [
        {
          "type": "text",
          "text": "* HTML 结构"
        },
        {
          "type": "code",
          "language": "html",
          "text": "<!-- 头部 -->\n\n<header>1</header>"
        },
        {
          "type": "text",
          "text": "* less 样式"
        },
        {
          "type": "code",
          "language": "less",
          "text": "// 头部\n\nheader {\n  display: flex;\n\n  justify-content: space-between;\n\n  padding: 0 (15 / @rootSize);\n\n  height: (44 / @rootSize);\n\n  background-color: pink;\n\n  line-height: (44 / @rootSize);\n}"
        }
      ]
    },
    {
      "title": "头部内容",
      "trail": [
        "移动 Web 第三题",
        "04-综合案例-极速问诊",
        "头部内容"
      ],
      "level": 3,
      "line": 533,
      "blocks": [
        {
          "type": "text",
          "text": "* HTML 结构"
        },
        {
          "type": "code",
          "language": "html",
          "text": "<a href=\"#\" class=\"back\"><span class=\"iconfont icon-left\"></span></a>\n\n<h3>极速问诊</h3>\n\n<a href=\"#\" class=\"note\">问诊记录</a>"
        },
        {
          "type": "text",
          "text": "* less 样式"
        },
        {
          "type": "code",
          "language": "less",
          "text": ".icon-left {\n  font-size: (22 / @rootSize);\n}\n\nh3 {\n  font-size: (17 / @rootSize);\n}\n\n.note {\n  font-size: (15 / @rootSize);\n\n  color: #2cb5a5;\n}"
        }
      ]
    },
    {
      "title": "banner 区域",
      "trail": [
        "移动 Web 第三题",
        "04-综合案例-极速问诊",
        "banner 区域"
      ],
      "level": 3,
      "line": 587,
      "blocks": [
        {
          "type": "text",
          "text": "* HTML 结构"
        },
        {
          "type": "code",
          "language": "html",
          "text": "<!-- banner -->\n\n<div class=\"banner\">\n  <img src=\"./assets/entry.png\" alt=\"\" />\n\n  <p>\n    <span>20s</span>\n    快速匹配专业医生\n  </p>\n</div>"
        },
        {
          "type": "text",
          "text": "* less 样式"
        },
        {
          "type": "code",
          "language": "less",
          "text": "// banner\n\n.banner {\n  margin-top: (30 / @rootSize);\n\n  margin-bottom: (34 / @rootSize);\n\n  text-align: center;\n\n  img {\n    margin-bottom: (18 / @rootSize);\n\n    width: (240 / @rootSize);\n\n    height: (206 / @rootSize);\n  }\n\n  p {\n    font-size: (16 / @rootSize);\n\n    span {\n      color: #16c2a3;\n    }\n  }\n}"
        }
      ]
    },
    {
      "title": "问诊类型布局",
      "trail": [
        "移动 Web 第三题",
        "04-综合案例-极速问诊",
        "问诊类型布局"
      ],
      "level": 3,
      "line": 657,
      "blocks": [
        {
          "type": "text",
          "text": "* HTML 结构"
        },
        {
          "type": "code",
          "language": "html",
          "text": "<!-- 问诊类型 -->\n\n<div class=\"type\">\n  <ul>\n    <li>\n      <a href=\"#\">\n        <div class=\"pic\">1</div>\n\n        <div class=\"txt\">2</div>\n\n        <span class=\"iconfont icon-right\"></span>\n      </a>\n    </li>\n\n    <li>2</li>\n  </ul>\n</div>"
        },
        {
          "type": "text",
          "text": "* less 样式"
        },
        {
          "type": "code",
          "language": "less",
          "text": "// 问诊类型\n\n.type {\n  padding: 0 (15 / @rootSize);\n\n  li {\n    margin-bottom: (15 / @rootSize);\n\n    padding: 0 (15 / @rootSize);\n\n    height: (78 / @rootSize);\n\n    border: 1px solid #ededed;\n\n    border-radius: (4 / @rootSize);\n\n    a {\n      display: flex;\n\n      align-items: center;\n\n      // 内容在78里面垂直居中\n\n      height: (78 / @rootSize);\n    }\n  }\n}"
        }
      ]
    },
    {
      "title": "问诊类型内容",
      "trail": [
        "移动 Web 第三题",
        "04-综合案例-极速问诊",
        "问诊类型内容"
      ],
      "level": 3,
      "line": 741,
      "blocks": [
        {
          "type": "text",
          "text": "- HTML 结构"
        },
        {
          "type": "code",
          "language": "html",
          "text": "<div class=\"pic\">\n  <img src=\"./assets/type01.png\" alt=\"\" />\n</div>\n\n<div class=\"txt\">\n  <h4>三甲图文问诊</h4>\n\n  <p>三甲主治及以上级别医生</p>\n</div>\n\n<span class=\"iconfont icon-right\"></span>"
        },
        {
          "type": "text",
          "text": "- less 样式"
        },
        {
          "type": "code",
          "language": "less",
          "text": "img {\n  margin-right: (14 / @rootSize);\n\n  width: (40 / @rootSize);\n\n  height: (40 / @rootSize);\n}\n\n.txt {\n  flex: 1;\n\n  h4 {\n    font-size: (16 / @rootSize);\n\n    color: #3c3e42;\n\n    line-height: (24 / @rootSize);\n  }\n\n  p {\n    font-size: (13 / @rootSize);\n\n    color: #848484;\n  }\n}\n\n.iconfont {\n  font-size: (16 / @rootSize);\n}"
        }
      ]
    }
  ]
};
