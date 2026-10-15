window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["b74748e39dc964373fc8"] = {
  "id": "b74748e39dc964373fc8",
  "title": "移动Web第三天.pdf",
  "treatment": "课件页级文本（配图回溯原件）",
  "sections": [
    {
      "title": "第1页",
      "level": 1,
      "page": 1,
      "blocks": [
        {
          "type": "text",
          "text": "移动  Web 第三题  \n01- 移动  Web 基础  \n谷歌模拟器  \n模拟移动设备，方便查看页面效果\n屏幕分辨率  \n分类：\n物理分辨率：硬件分辨率（出厂设置）\n逻辑分辨率：软件  / 驱动设置\n结论：制作网页参考  逻辑分辨率"
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
          "text": "视口  \n作用：显示  HTML 网页的区域，用来约束  HTML 的尺寸\n \nwidth=device-width ：视口宽度  = 设备宽度\ninitial-scale=1.0 ：缩放 1 倍（不缩放）\n二倍图  \n概念：设计稿里面每个元素的尺寸的倍数\n作用：防止图片在高分辨率屏幕下模糊失真\n使用方法：\n<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n \n  <!– 视口标签  -->\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n \n  <title>Document</title>\n</head>\n<body>\n  \n</body>\n</html>"
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
          "text": "适配方案  \n宽度适配：宽度自适应\n百分比布局\nFlex 布局\n等比适配：宽高等比缩放\nrem\nvw\n02-rem  \n简介  \nrem 单位，是相对单位\nrem 单位是相对于 HTML 标签的字号计算结果\n1rem = 1HTML 字号大小\n媒体查询  \n媒体查询能够检测视口的宽度，然后编写差异化的  CSS 样式\n当某个条件成立 , 执行对应的 CSS 样式\n @media (width:320px) {\n  html {\n    background-color: green;\n  }\n}"
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
          "text": "rem 布局  \n目前 rem 布局方案中，将网页等分成 10 份，  HTML 标签的字号为视口宽度的  1/10 。\nexible.js  \nexible.js 是手淘开发出的一个用来适配移动端的  js 库。\n核心原理就是根据不同的视口宽度给网页中  html 根节点设置不同的  font-size 。\n \nrem 移动适配  \nrem 单位尺寸\n1. 确定基准根字号\n查看设计稿宽度  →  确定参考设备宽度 ( 视口宽度 ) →  确定基准根字号（ 1/10 视口宽度）\n2. rem 单位的尺寸\nrem 单位的尺寸  = px 单位数值  / 基准根字号\n03-less  \nLess 是一个 CSS 预处理器 , Less 文件后缀是 .less 。扩充了  CSS 语言 , 使  CSS 具备一定的逻辑性、计算能力\n<body>\n  ......\n  <script src=\"./js/exible.js\"></script>\n</body>"
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
          "text": "注意：浏览器不识别  Less 代码，目前阶段，网页要引入对应的  CSS 文件\nVS Code 插件： Easy LESS ，保存  less 文件后自动生成对应的  CSS 文件\n注释  \n单行注释\n语法： // 注释内容\n快捷键： ctrl + /\n块注释\n语法： /* 注释内容  */\n快捷键：  Shift + Alt + A\n运算  \n加、减、乘直接书写计算表达式\n除法需要添加  小括号  或  .\n表达式存在多个单位以第一个单位为准\n嵌套  \n作用：快速生成后代选择器"
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
          "text": "提示：用  & 表示当前选择器，不会生成后代选择器，通常配合伪类或伪元素使用\n变量  \n概念：容器，存储数据\n作用：存储数据，方便使用和修改\n语法：\n定义变量： @ 变量名 : 数据 ; \n使用变量： CSS 属性： @ 变量名 ;\n \n导入  \n作用：导入  less 公共样式文件\n语法：导入 : @import “ 文件路径 ”;\n提示：如果是  less 文件可以省略后缀\n// 定义变量\n@myColor: pink;\n// 使用变量\n.box {\n  color: @myColor;\n}\na {\n  color: @myColor;\n}"
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
          "text": "导出  \n写法：在  less 文件的第一行添加  // out: 存储 URL\n提示：文件夹名称后面添加  /\n \n禁止导出  \n写法：在  less 文件第一行添加 :  // out: false \n \n04- 综合案例 - 极速问诊  \n@import './base.less';\n@import './common';\n// out: ./index.css\n// out: ./css/"
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
          "text": "准备工作  \n项目目录\nHTML 结构\n <link rel=\"stylesheet\" href=\"./iconfont/iconfont.css\">\n<link rel=\"stylesheet\" href=\"./css/index.css\">\n \n<body>\n  ......\n  <script src=\"./js/exible.js\"></script>\n</body>"
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
          "text": "less 样式\n \n头部布局  \nHTML 结构\n \nless 样式\n \n头部内容  \nHTML 结构\n \nless 样式\n \n// out: ../css/\n \n@import \"./base\";\n<!-- 头部  -->\n<header>1</header>\n// 头部\nheader {\n  display: ex;\n  justify-content: space-between;\n  padding: 0 (15 / @rootSize);\n  height: (44 / @rootSize);\n  background-color: pink;\n  line-height: (44 / @rootSize);\n}\n<a href=\"#\" class=\"back\"><span class=\"iconfont icon-left\"></span></a>\n<h3>极速问诊</h3>\n<a href=\"#\" class=\"note\">问诊记录</a>\n.icon-left {\n  font-size: (22 / @rootSize);\n}\n \nh3 {\n  font-size: (17 / @rootSize);\n}\n \n.note {\n  font-size: (15 / @rootSize);\n  color: #2CB5A5;\n}"
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
          "text": "banner 区域  \nHTML 结构\n \nless 样式\n \n问诊类型布局  \nHTML 结构\n \nless 样式\n<!-- banner -->\n<div class=\"banner\">\n  <img src=\"./assets/entry.png\" alt=\"\">\n  <p><span>20s</span> 快速匹配专业医生</p>\n</div>\n// banner\n.banner {\n  margin-top: (30 / @rootSize);\n  margin-bottom: (34 / @rootSize);\n  text-align: center;\n  img {\n    margin-bottom: (18 / @rootSize);\n    width: (240 / @rootSize);\n    height: (206 / @rootSize);\n  }\n \n  p {\n    font-size: (16 / @rootSize);\n    span {\n      color: #16C2A3;\n    }\n  }\n}\n<!-- 问诊类型  -->\n<div class=\"type\">\n  <ul>\n    <li>\n      <a href=\"#\">\n        <div class=\"pic\">1</div>\n        <div class=\"txt\">2</div>\n        <span class=\"iconfont icon-right\"></span>\n      </a>\n    </li>\n    <li>2</li>\n  </ul>\n</div>"
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
          "text": "问诊类型内容  \nHTML 结构\n \nless 样式\n \n// 问诊类型\n.type {\n  padding: 0 (15 / @rootSize);\n  li {\n    margin-bottom: (15 / @rootSize);\n    padding: 0 (15 / @rootSize);\n    height: (78 / @rootSize);\n    border: 1px solid #EDEDED;\n    border-radius: (4 / @rootSize);\n    a {\n      display: ex;\n      align-items: center;\n      // 内容在 78 里面垂直居中\n      height: (78 / @rootSize);\n    }\n  }\n}\n<div class=\"pic\">\n  <img src=\"./assets/type01.png\" alt=\"\">\n</div>\n<div class=\"txt\">\n  <h4>三甲图文问诊</h4>\n  <p>三甲主治及以上级别医生</p>\n</div>\n<span class=\"iconfont icon-right\"></span>\nimg {\n  margin-right: (14 / @rootSize);\n  width: (40 / @rootSize);\n  height: (40 / @rootSize);\n}\n.txt {\n  ex:1;\n  h4 {\n    font-size: (16 / @rootSize);\n    color: #3C3E42;\n    line-height: (24 / @rootSize);\n  }\n  p {\n    font-size: (13 / @rootSize);\n    color: #848484;\n  }\n}"
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
          "text": ".iconfont {\n  font-size: (16 / @rootSize);\n}"
        }
      ]
    }
  ]
};
