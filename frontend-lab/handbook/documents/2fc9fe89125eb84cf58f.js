window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["2fc9fe89125eb84cf58f"] = {
  "id": "2fc9fe89125eb84cf58f",
  "title": "移动Web-day03.pdf",
  "treatment": "课件页级文本（配图回溯原件）",
  "sections": [
    {
      "title": "第1页",
      "level": 1,
      "page": 1,
      "blocks": [
        {
          "type": "text",
          "text": "移动 Web 第三天\n移动适配"
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
          "text": "移动适配"
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
          "text": "l rem\nl vw\n移动适配方案\nrem 适配方案 less"
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
          "text": "移动Web基础1"
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
          "text": "谷歌模拟器"
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
          "text": "l 屏幕分辨率：纵横向上的像素点数，单位是px\nl PC 分辨率\np 1920 * 1080\np 1366 * 768\np ……\nl 缩放 150%\np 1920 / 150%\np 1080 / 150%\nl 总结\np 硬件分辨率 → 物理分辨率（出厂设置） \np 缩放调节的分辨率 → 逻辑分辨率（软件/驱动设置） \n屏幕分辨率"
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
          "text": "结论：制作网页参考 逻辑分辨率\n屏幕分辨率"
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
          "text": "屏幕分辨率"
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
          "text": "l 手机屏幕尺寸不同，网页宽度均为100%\nl 网页的宽度和逻辑分辨率尺寸相同\n视口"
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
          "text": "l 视口：显示HTML网页的区域，用来约束HTML尺寸\nl width=device-width：视口宽度 = 设备宽度\nl initial-scale=1.0：缩放1倍（不缩放）\n视口\n<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n  <!– 视口标签 -->\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>Document</title>\n</head>\n<body>\n  \n</body>\n</html>"
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
          "text": "概念：设计稿里面每个元素的尺寸的倍数\n作用：防止图片在高分辨率屏幕下模糊失真\n二倍图"
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
          "text": "作用：防止图片在高分辨率屏幕下模糊失真\n二倍图"
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
          "text": "l 现阶段设计稿参考iPhone6/7/8，设备宽度375px产出设计稿。\nl 二倍图设计稿尺寸：750px。\n二倍图"
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
          "text": "适配方案2"
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
          "text": "l 宽度适配：宽度自适应\np 百分比布局\np Flex 布局\nl 等比适配：宽高等比缩放\np rem\np vw\n适配方案"
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
          "text": "rem 适配方案3"
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
          "text": "rem"
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
          "text": "l rem单位，是相对单位\nl rem单位是相对于HTML标签的字号计算结果\nl 1rem = 1HTML字号大小\nrem"
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
          "text": "l 思考\nl 1. 手机屏幕大小不同，分辨率不同， 如何设置不同的HTML标签字号？\nl 2. 设备宽度不同，HTML标签字号设置多少合适？\nrem"
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
          "text": "思考\nl 手机屏幕大小不同，分辨率不同， 如何设置不同的HTML标签字号？\np 媒体查询\nl 媒体查询能够检测视口的宽度，然后编写差异化的 CSS 样式\nl 当某个条件成立, 执行对应的CSS样式\n媒体查询\n@media (width:320px) {\n  html {\n    background-color: green;\n  }\n}"
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
          "text": "思考\nl 设备宽度不同，HTML标签字号设置多少合适？\np 设备宽度大，元素尺寸大\np 设备宽度小，元素尺寸小\nrem"
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
          "text": "目前rem布局方案中，将网页等分成10份， HTML标签的字号为视口宽度的 1/10\nrem"
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
          "text": "l flexible.js 是手淘开发出的一个用来适配移动端的 js 库。\nl 核心原理就是根据不同的视口宽度给网页中 html 根节点设置不同的 font-size。\nrem – flexible.js\n<body>\n  ......\n  <script src=\"./js/flexible.js\"></script>\n</body>"
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
          "text": "思考：\nl 工作中，书写代码的尺寸要参照设计稿尺寸，设计稿中是px还是rem？\nl 如何确定rem的数值？\nrem - 移动适配"
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
          "text": "l 目标: 计算68px是多少个rem?(设计稿适配375px视口)\nl N * 37.5 = 68\nl N = 68 / 37.5\nl rem单位尺寸\n1.  确定基准根字号\nØ 查看设计稿宽度 → 确定参考设备宽度(视口宽度) → 确定基准根字号（1/10视口宽度）\n2.  rem单位的尺寸\nØ rem单位的尺寸 = px单位数值 / 基准根字号\nrem - 移动适配"
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
          "text": "less4"
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
          "text": "l 思考：在px单位转换到rem单位过程中，哪项工作是最麻烦的？\nl 答：除法运算。CSS不支持计算写法。\nl 解决方案：可以通过Less实现。\nless"
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
          "text": "l Less是一个CSS预处理器, Less文件后缀是.less。扩充了 CSS 语言, 使 CSS 具备一定的逻辑性、计算能力\nl 注意：浏览器不识别 Less 代码，目前阶段，网页要引入对应的 CSS 文件\nl VS Code 插件：Easy LESS，保存 less文件后自动生成对应的 CSS 文件\nless – 简介"
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
          "text": "注释：\nl 单行注释\nØ 语法：// 注释内容\nØ 快捷键：ctrl + /\nl 块注释\nØ 语法：/* 注释内容 */\nØ 快捷键： Shift + Alt + A\nless – 注释"
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
          "text": "less – 运算\n运算：\nl 加、减、乘直接书写计算表达式\nl 除法需要添加 小括号 或 .\n注意：表达式存在多个单位以第一个单位为准"
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
          "text": "less – 嵌套\n作用：快速生成后代选择器\n提示：用 & 表示当前选择器，不会生成后代选择器，通常配合伪类或伪元素使用\n.father {\n  color: red;\n  .son {\n    width: 100px;\n  }\n}"
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
          "text": "less – 变量\n概念：容器，存储数据\n作用：存储数据，方便使用和修改\n语法：\nØ 定义变量：@变量名: 数据; \nØ 使用变量：CSS属性：@变量名;\n// 定义变量\n@myColor: pink;\n// 使用变量\n.box {\n  color: @myColor;\n}\na {\n  color: @myColor;\n}"
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
          "text": "less – 导入\n作用：导入 less 公共样式文件\n语法：导入: @import “文件路径”;\n提示：如果是 less 文件可以省略后缀\n@import './base.less';\n@import './common';"
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
          "text": "less – 导出\n写法：在 less 文件的第一行添加 // out: 存储URL\n提示：文件夹名称后面添加 /\n// out: ./index.css\n// out: ./css/"
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
          "text": "less – 禁止导出\n写法：在 less 文件第一行添加:  // out: false"
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
          "text": "案例\n 项目 – 极速问诊\nu 项目目录\nu 设计稿"
        }
      ]
    }
  ]
};
