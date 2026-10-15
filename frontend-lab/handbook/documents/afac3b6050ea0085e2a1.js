window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["afac3b6050ea0085e2a1"] = {
  "id": "afac3b6050ea0085e2a1",
  "title": "移动Web-day05.pdf",
  "treatment": "课件页级文本（配图回溯原件）",
  "sections": [
    {
      "title": "第1页",
      "level": 1,
      "page": 1,
      "blocks": [
        {
          "type": "text",
          "text": "移动 Web 第五天\n响应式网页"
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
          "text": "响应式网页"
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
          "text": "响应式网页\n解决方案：\n1. 媒体查询\n2. Bootstrap\n@media (条件) {\n  html {\n    background-color: green;\n  }\n}"
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
          "text": "媒体查询1"
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
          "text": "媒体查询\n媒体特性\nu max-width：最大宽度\nu min-width：最小宽度\n@media (width:320px) {\n  html {\n    background-color: green;\n  }\n}"
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
          "text": "媒体查询 – 书写顺序\n需求：\nl 默认网页背景色是灰色\nl 屏幕宽度大于等于 768px, 网页背景色是粉色\nl 屏幕宽度大于等于 992px, 网页背景色是绿色\nl 屏幕宽度大于等于 1200px, 网页背景色是skyblue\n提示\nu min-width（从小到大）\nu max-width（从大到小）\n768 992 1200"
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
          "text": "案例\n 案例 – 左侧隐藏\n需求：网页宽度小于等于768px则隐藏左侧区域"
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
          "text": "媒体查询 – 完整写法 – 了解\n关键词 / 逻辑操作符\nl and\nl only\nl not"
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
          "text": "媒体查询 – 完整写法 – 了解\n媒体类型是用来区分设备类型的，如屏幕设备、打印设备等，其中手机、电脑、平板都属于屏幕设备\n类型名称 值 描述\n屏幕 screen 带屏幕的设备\n打印预览 print 打印预览模式\n阅读器 speech 屏幕阅读模式\n不区分类型 all 默认值，包括以上3种情形"
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
          "text": "媒体查询 – 完整写法 – 了解\n媒体特性主要用来描述媒体类型的具体特征，如当前屏幕的宽高、分辨率、横屏或竖屏等。\n特性名称 属性 值\n视口的宽和高 width、height 数值\n视口最大宽或高 max-width、max-height 数值\n视口最小宽或高 min-width、min-height 数值\n屏幕方向 orientation portrait: 竖屏 \nlandscape: 横屏"
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
          "text": "媒体查询 – 外部CSS"
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
          "text": "Bootstrap2"
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
          "text": "Bootstrap"
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
          "text": "Bootstrap – 简介\nBootstrap 是由 Twitter 公司开发维护的前端 UI 框架，它提供了大量编写好的 CSS 样式，允许开发者结合一定 HTML \n结构及JavaScript，快速编写功能完善的网页及常见交互效果。\n中文官网: https://www.bootcss.com/"
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
          "text": "Bootstrap – 下载\n中文官网: https://www.bootcss.com/\n使用步骤：\n1. 下载：Bootstrap V5中文文档 → 进入中文文档 → 下载 →下载 Bootstrap 生产文件\n2. 使用"
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
          "text": "Bootstrap – 使用\n使用步骤：\n1. 引入 Bootstrap CSS 文件\n2. 调用类名：container：响应式布局版心类\n<link rel=\"stylesheet\" href=\"./Bootstrap/css/bootstrap.min.css\">\n<div class=\"container\">测试</div>"
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
          "text": "Bootstrap 栅格系统"
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
          "text": "Bootstrap – 栅格系统\n栅格化是指将整个网页的宽度分成12等份，每个盒子占用的对应的份数\n例如：一行排4个盒子，则每个盒子占 3份 即可（12 / 4 = 3）\n常用布局类\np col-*-*：列（例如：col-xxl-3）\np row：行"
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
          "text": "总结总结\n1. 栅格系统是将网页等分成多少份？\n12 份\n2. Bootstrap 5 中，栅格系统划分了多少个响应区间？\n6 个响应区间"
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
          "text": "Bootstrap – 全局样式\nButton类\np btn：默认样式\np btn-success：成功\np btn-warning：警告\np ……\np 按钮尺寸：btn-lg / btn-sm"
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
          "text": "Bootstrap – 全局样式\n表格类：\np table：默认样式\np table-striped：隔行变色\np table-success：表格颜色\np ……"
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
          "text": "Bootstrap – 组件（Components）\n1. 引入样式表\n2. 引入 js 文件\n3. 复制结构，修改内容"
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
          "text": "Bootstrap – 字体图标\n下载：\n导航 / Extend：图标库 → 安装 → 下载安装包 → bootstrap-icons-1.X.X.zip\n \n使用：\n1. 复制 fonts 文件夹到项目目录\n2. 网页引入 bootstrap-icons.css 文件\n3. 调用 CSS 类名（图标对应的类名）\n<i class=\"bi-android2\"></i>"
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
          "text": "综合案例3"
        }
      ]
    }
  ]
};
