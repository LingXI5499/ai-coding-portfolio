window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["d471f1e8552f35bbeda1"] = {
  "id": "d471f1e8552f35bbeda1",
  "title": "移动web第三天.xmind",
  "treatment": "思维导图主题树",
  "sections": [
    {
      "title": "主题树",
      "level": 1,
      "blocks": [
        {
          "type": "text",
          "text": "画布 1\n移动web第三天\n全天目标\n使用rem布局方案，实现视口宽度不同，网页元素宽高等比缩放效果\n移动 Web 基础\n谷歌模拟器\n分辨率\n物理分辨率：硬件分辨率（出厂设置）\n逻辑分辨率：软件 / 驱动设置\n写网页参考逻辑分辨率\n视口\n显示 HTML 网页的区域，用来约束 HTML 尺寸\n  <meta name=\\\n二倍图\n概念：设计稿里面每个元素的尺寸的倍数\n作用：防止图片在高分辨率屏幕下模糊失真\n使用\nPxCook\nHTML版本\n适配方案\n宽度适配\n百分比布局\nFlex 布局\n等比适配\nrem\nvw\n目标\n实现在不同宽度的设备中，网页元素尺寸等比缩放效果\n学习内容\nrem介绍\n相对单位，相对于HTML标签字号计算尺寸\n1rem = 1HTML标签字号\n基本使用\n1. 给HTML标签添加字号\n2. 设置元素尺寸为rem单位\n媒体查询基本使用\n视口不同，添加不同的根字号\n@media (视口宽度) {\\n    差异化CSS样式\\n}\nrem布局流程\n1. 媒体查询添加根字号\n@media (视口宽度) {\\n    html {\\n        font-size: 37.5px;\\n    }\\n}\n2. flexible添加根字号\n<script src=\\\nrem = px尺寸 / 基准根字号\nless\n掌握Less常用语法\nless介绍\nCSS预处理器，让CSS具备逻辑和计算能力\n浏览器和网页不识别less，目前需要将less文件导出CSS文件，HTML引入CSS文件\n插件\nEasyLess\n语法\n注释\n单行\n// 注释内容\nctrl + /\n块\n/* 注释内容 */\nalt + shift + A\n嵌套\n作用\n生成后代选择器\n写法\n父选择器 {\\n    子选择器{}\\n}\n&\n表示当前选择器， 不会生成后代选择器\n运算\n完成常用数学计算\n除法\n(xx / xx)\nxx ./ xx\n变量\n存储数据，方便修改和使用\n用法\n1. 定义变量\n@变量名: 值;\n2. 使用变量\nCSS属性: @变量;\n导入\n引入其他less文件\n@import       ‘文件及路径’;\n导出\n导出CSS文件\nless文件第一行添加  // out：路径\n如果是文件夹 : 文件夹名/\n禁止导出CSS文件\nless文件第一行添加： // out: false\n综合案例-极速问诊\n效果图"
        }
      ]
    }
  ]
};
