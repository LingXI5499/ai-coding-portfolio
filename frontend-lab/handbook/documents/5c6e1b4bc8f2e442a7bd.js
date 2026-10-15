window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["5c6e1b4bc8f2e442a7bd"] = {
  "id": "5c6e1b4bc8f2e442a7bd",
  "title": "移动Webday05.pdf",
  "treatment": "课件页级文本（配图回溯原件）",
  "sections": [
    {
      "title": "第1页",
      "level": 1,
      "page": 1,
      "blocks": [
        {
          "type": "text",
          "text": "移动  Web 第五天  \n响应式布局方案\n媒体查询\nBootstrap 框架\n01- 媒体查询  \n基本写法  \nmax-width ：最大宽度（小于等于）\nmin-width ：最小宽度（大于等于）\n书写顺序  \nmin-width （从小到大）\nmax-width （从大到小）\n案例 - 左侧隐藏  \n需求：网页宽度小于等于 768px 则隐藏左侧区域"
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
          "text": "HTML 结构\n \nCSS 样式\n \n<div class=\"box\">\n  <div class=\"left\">left</div>\n  <div class=\"main\">\n    响应式网页效果响应式网页效果响应式网页效果响应式网页效果响应式网页效果响应式网页效果响应式网页效果响应式\n网页效果响应式网页效果响应式网页效果响应式网页效果响应式网页效果响应式网页效果响应式网页效果响应式网页效果\n响应式网页效果响应式网页效果响应式网页效果响应式网页效果响应式网页效果响应式网页效果响应式网页效果响应式网\n页效果响应式网页效果响应式网页效果响应式网页效果响应式网页效果响应式网页效果响应式网页效果响应式网页效果响\n应式网页效果响应式网页效果响应式网页效果响应式网页效果响应式网页效果响应式网页效果响应式网页效果响应式网页\n效果响应式网页效果响应式网页效果响应式网页效果响应式网页效果响应式网页效果响应式网页效果响应式网页效果响应\n式网页效果响应式网页效果响应式网页效果\n  </div>\n</div>\n.box {\n  display: ex;\n}\n \n.left {\n  width: 300px;\n  height: 500px;\n  background-color: pink;\n}\n \n.main {\n  ex: 1;\n  height: 500px;\n  background-color: skyblue;\n}"
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
          "text": "媒体查询 - 完整写法  \n关键词  / 逻辑操作符  \nand\nonly\nnot\n媒体类型  \n媒体类型用来区分设备类型\nscreen ：屏幕设备\n打印预览： print\n阅读器： speech\n不区分类型： all\n媒体特性  \n视口宽高： width / height\n视口最大宽高： max-width ； max-height\n视口最小宽高： min-width ； min-height\n屏幕方向： orientation\nprotrait ：竖屏\nlandscape ：横屏\n媒体查询 - 外部 CSS  \n02-Bootstrap  \n简介  \nBootstrap 是由  Twitter 公司开发维护的前端  UI 框架，它提供了大量编写好的  CSS 样式，允许开发者结合一定 \nHTML 结构及 JavaScript ，快速编写功能完善的网页及常见交互效果。 \n@media (max-width: 768px) {\n  .left {\n    display: none;\n  }\n}"
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
          "text": "中文官网 : https://www.bootcss.com/ \n使用步骤  \n下载  \n下载： Bootstrap V5 中文文档  →  进入中文文档  →  下载  → 下载  Bootstrap 生产文件\n使用  \n1. 引入  Bootstrap CSS 文件\n \n2. 调用类名：  container 响应式布局版心类\n \n栅格系统  \n作用：响应式布局\n栅格化是指将整个网页的宽度分成 12 等份，每个盒子占用的对应的份数\n例如：一行排 4 个盒子，则每个盒子占  3 份  即可（ 12 / 4 = 3 ）\nrow 类：行，可以让内容在一行排（ ex 布局）\n<link rel=\"stylesheet\" href=\"./Bootstrap/css/bootstrap.min.css\">\n<div class=\"container\">测试</div>"
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
          "text": "全局样式  \n按钮  \n类名\nbtn ：默认样式\nbtn-success ：成功\nbtn-warning ：警告\n……\n按钮尺寸： btn-lg / btn-sm\n表格  \n表格类：\ntable ：默认样式\ntable-striped ：隔行变色\ntable-success ：表格颜色\n……\n组件  \n1. 引入样式表\n2. 引入  js 文件\n3. 复制结构，修改内容"
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
          "text": "字体图标  \n下载  \n导航  / Extend ：图标库  →  安装  →  下载安装包  →  bootstrap-icons-1.X.X.zip\n使用  \n1. 复制  fonts 文件夹到项目目录\n2. 网页引入  bootstrap-icons.css 文件\n3. 调用  CSS 类名（图标对应的类名）\n \n03- 综合案例 -alloyTeam  \n准备工作  \nHTML 结构\n \nless 样式\n \n头部导航  \nHTML 结构\n \n<i class=\"bi-android2\"></i>\n<title>腾讯全端</title>\n<link rel=\"shortcut icon\" href=\"favicon.ico\" type=\"image/x-icon\">\n<!-- 层叠性：咱们的 css 要  层叠  框架的  -->\n<link rel=\"stylesheet\" href=\"./Bootstrap/css/bootstrap.min.css\">\n<link rel=\"stylesheet\" href=\"./Bootstrap/font/bootstrap-icons.css\">\n<link rel=\"stylesheet\" href=\"./css/index.css\">\n \n \n \n<script src=\"./Bootstrap/js/bootstrap.min.js\"></script>\n// out: ../css/\n<!-- 导航  -->\n<nav class=\"navbar navbar-expand-lg bg-body-tertiary xed-top\">\n  <div class=\"container\">\n    <a class=\"navbar-brand\" href=\"#\"><img src=\"./assets/images/logo.png\" alt=\"\"></a>\n    <button class=\"navbar-toggler\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#navbarNav\" aria-"
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
          "text": "less 样式\n \n轮播图图片  \nHTML 结构\n \ncontrols=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n      <ul class=\"navbar-nav\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link active\" aria-current=\"page\" href=\"#\">首页</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#\">博客</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#\">Github</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#\">TWeb Conf</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#\">SuperStar</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#\">Web 前端导航</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#\">关于</a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n// 导航\n.bg-body-tertiary {\n  background-color: transparent !important;\n  .navbar-collapse {\n    ex-grow: 0;\n  }\n}\n<!-- 轮播图  -->\n<div id=\"carouselExampleIndicators\" class=\"carousel slide\">\n  <div class=\"carousel-indicators\">\n    <button type=\"button\" data-bs-target=\"#carouselExampleIndicators\" data-bs-slide-to=\"0\" class=\"active\" aria-\ncurrent=\"true\" aria-label=\"Slide 1\"></button>\n    <button type=\"button\" data-bs-target=\"#carouselExampleIndicators\" data-bs-slide-to=\"1\" aria-label=\"Slide 2\">"
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
          "text": "less 样式\n \n</button>\n    <button type=\"button\" data-bs-target=\"#carouselExampleIndicators\" data-bs-slide-to=\"2\" aria-label=\"Slide 3\">\n</button>\n    <button type=\"button\" data-bs-target=\"#carouselExampleIndicators\" data-bs-slide-to=\"3\" aria-label=\"Slide 4\">\n</button>\n  </div>\n  <div class=\"carousel-inner\">\n    <div class=\"carousel-item active\">\n      \n    </div>\n    <div class=\"carousel-item\">\n      \n    </div>\n    <div class=\"carousel-item\">\n      \n    </div>\n    <div class=\"carousel-item\">\n      \n    </div>\n  </div>\n  <button class=\"carousel-control-prev\" type=\"button\" data-bs-target=\"#carouselExampleIndicators\" data-bs-\nslide=\"prev\">\n    <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n    <span class=\"visually-hidden\">Previous</span>\n  </button>\n  <button class=\"carousel-control-next\" type=\"button\" data-bs-target=\"#carouselExampleIndicators\" data-bs-\nslide=\"next\">\n    <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n    <span class=\"visually-hidden\">Next</span>\n  </button>\n</div>\n.carousel {\n  .carousel-item {\n    height: 500px;\n    background-size: cover;\n    background-position: center 0;\n  }\n  .carousel-item:nth-child(1) {\n    background-image: url(../assets/uploads/banner_1.jpg);\n  }\n  .carousel-item:nth-child(2) {\n    background-image: url(../assets/uploads/banner_2.jpg);\n  }\n  .carousel-item:nth-child(3) {\n    background-image: url(../assets/uploads/banner_3.jpg);\n  }\n  .carousel-item:nth-child(4) {\n    background-image: url(../assets/uploads/banner_4.jpg);\n  }"
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
          "text": "轮播图响应式  \nless 样式\n \n开源项目响应式  \nHTML 结构\n \n}\n// 轮播图 : 小于 768 图片高度 250 max ；大于等于 768 图片高度 400 min ；大于等于 992 图片高度 500\n.carousel {\n  // 响应式  →  媒体查询\n  @media (max-width: 768px) {\n    .carousel-item {\n      height: 250px;\n    }\n  }\n \n  @media (min-width: 768px) {\n    .carousel-item {\n      height: 400px;\n    }\n  }\n  @media (min-width: 992px) {\n    .carousel-item {\n      height: 500px;\n    }\n  }\n \n \n  .carousel-item {\n    // height: 500px;\n    background-size: cover;\n    background-position: center 0;\n  }\n}\n<!-- 开源项目  -->\n<div class=\"project container\">\n  <div class=\"title\">\n    <h2>OpenSource / 开源项目</h2>\n    <p>种类众多的开源项目，让你爱不释手</p>\n  </div>\n  <div class=\"content\">\n    <div class=\"row\">\n      <div class=\"col-lg-3 col-md-6\">1</div>\n      <div class=\"col-lg-3 col-md-6\">2</div>\n      <div class=\"col-lg-3 col-md-6\">3</div>\n      <div class=\"col-lg-3 col-md-6\">4</div>\n    </div>"
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
          "text": "less 样式\n \n开源项目内容布局  \nHTML 结构\n \nless 样式\n \n  </div>\n</div>\n// 开源项目\n// 视口宽度大于 992 ；一行排 4 个盒子   col-lg-3\n// 视口宽度大于 768 ；一行排 2 个盒子   col-md-6\n.project {\n  margin-top: 60px;\n  text-align: center;\n}\n<!-- 开源项目  -->\n<div class=\"project container\">\n  <div class=\"title\">\n    <h2>OpenSource / 开源项目</h2>\n    <p>种类众多的开源项目，让你爱不释手</p>\n  </div>\n  <div class=\"content\">\n    <div class=\"row\">\n      <div class=\"col-lg-3 col-md-6\"><a href=\"#\">1</a></div>\n      <div class=\"col-lg-3 col-md-6\"><a href=\"#\">1</a></div>\n      <div class=\"col-lg-3 col-md-6\"><a href=\"#\">1</a></div>\n      <div class=\"col-lg-3 col-md-6\"><a href=\"#\">1</a></div>\n    </div>\n  </div>\n</div>\n.project {\n  margin-top: 60px;\n  text-align: center;\n  .row {\n    div {\n      margin-bottom: 10px;\n      height: 200px;\n      // background-color: pink;\n      a {\n        // 块级的宽度和父级一样大\n        display: block;\n        height: 200px;\n        background-color: green;\n        border-radius: 4px;\n      }"
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
          "text": "&:nth-child(1) a {\n        background-color: #70c3;\n      }\n      &:nth-child(2) a {\n        background-color: #fd6a7f;\n      }\n      &:nth-child(3) a {\n        background-color: #7f8ea0;\n      }\n      &:nth-child(4) a {\n        background-color: #89d04f;\n      }\n    }\n  }\n}"
        }
      ]
    }
  ]
};
