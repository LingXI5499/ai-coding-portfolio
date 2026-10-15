window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["f093973ce2ef3f0f5342"] = {
  "id": "f093973ce2ef3f0f5342",
  "title": "移动Web第四天.pdf",
  "treatment": "课件页级文本（配图回溯原件）",
  "sections": [
    {
      "title": "第1页",
      "level": 1,
      "page": 1,
      "blocks": [
        {
          "type": "text",
          "text": "移动  Web 第四天  \n01-vw 适配方案  \nvw 和 vh 基本使用  \nvw 和 vh 是相对单位，相对视口尺寸计算结果\nvw ： viewport width （ 1vw = 1/100 视口宽度  ）\nvh ： lviewport height ( 1vh = 1/100 视口高度  )\nvw 布局  \nvw 单位的尺寸  = px 单位数值  / ( 1/100 视口宽度  ) \nvh 问题  \nvh 是 1/100 视口高度，全面屏视口高度尺寸大，如果混用可能会导致盒子变形 \n02- 综合案例 - 酷我音乐"
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
          "text": "准备工作  \nHTML 结构\n \nless 样式\n \n<link rel=\"stylesheet\" href=\"./iconfont/iconfont.css\">\n<link rel=\"stylesheet\" href=\"./css/index.css\">\n// out: ../css/\n \n@import \"./base\";"
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
          "text": "头部布局  \nHTML 结构\n \nless 样式\n \n头部内容  \nless 样式\n \n<!-- 头部  -->\n<header>\n  <div class=\"left\">left</div>\n  <a href=\"#\">下载 APP</a>\n</header>\nbody {\n  background-color: #f9fafb;\n}\n \n@vw:3.75vw;\n \n// 头部\nheader {\n  display: ex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 (15 / @vw);\n  height: (50 / @vw);\n  background-color: #f;\n}\nheader {\n  // 左边\n  .left {\n    width: (235 / @vw);\n    height: (50 / @vw);\n    background-image: url(../assets/head.png);\n    background-size: contain;\n    background-repeat: no-repeat;\n  }\n  a {\n    width: (80 / @vw);\n    height: (30 / @vw);\n    background-color: #e31b;\n    border-radius: (15 / @vw);\n    text-align: center;\n    line-height: (30 / @vw);\n    font-size: (14 / @vw);\n  }"
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
          "text": "搜索区域  \nHTML 结构\n \nless 样式\n \nbanner 区域  \nHTML 结构\n \nless 样式\n \n}\n<!-- 搜索  -->\n<div class=\"search\">\n  <div class=\"txt\">\n    <span class=\"iconfont icon-sousuo\"></span>\n    <span>搜索你想听的歌曲</span>\n  </div>\n</div>\n// 搜索\n.search {\n  padding: (10 / @vw) (15 / @vw);\n  height: (52 / @vw);\n  // background-color: pink;\n  .txt {\n    height: (32 / @vw);\n    background-color: #f2f4f5;\n    border-radius: (16 / @vw);\n    text-align: center;\n    line-height: (32 / @vw);\n    color: #a1a4b3;\n    font-size: (14 / @vw);\n    .iconfont {\n      font-size: (16 / @vw);\n    }\n  }\n}\n<!-- banner -->\n<div class=\"banner\">\n  <ul>\n    <li><a href=\"#\"><img src=\"./assets/banner01.jpeg\" alt=\"\"></a></li>\n  </ul>\n</div>\n// banner"
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
          "text": "标题公共样式  \nHTML 结构\n \nless 样式\n \n.banner {\n  padding: 0 (15 / @vw);\n  height: (108 / @vw);\n  // background-color: pink;\n  ul {\n    li {\n      width: (345 / @vw);\n      height: (108 / @vw);\n      img {\n        width: 100%;\n        height: 100%;\n        // cover 完全覆盖\n        // 缩放 img ，图片比例跟父级盒子比例不同，避免图片挤压变形\n        object-t: cover;\n        border-radius: (5 / @vw);\n      }\n    }\n  }\n}\n<!-- 排行榜  -->\n<div class=\"list\">\n  <!-- 标题  -->\n  <div class=\"title\">\n    <h4>酷我排行榜</h4>\n    <a href=\"#\">更多<span class=\"iconfont icon-right\"></span></a>\n  </div>\n</div>\n// 排行榜\n.list {\n  margin-top: (20 / @vw);\n  padding: 0 (15 / @vw);\n}\n \n// 标题  →  公共样式\n.title {\n  display: ex;\n  justify-content: space-between;\n  margin-bottom: (16 / @vw);\n  line-height: (25 / @vw);\n  h4 {\n    font-size: (20 / @vw);\n  }\n  a {"
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
          "text": "排行榜内容  \nHTML 结构\n \nless 样式\n \n    font-size: (12 / @vw);\n    color: #a1a4b3;\n  }\n}\n<!-- 内容  -->\n<div class=\"content\">\n  <ul>\n    <li>\n      <div class=\"pic\"><img src=\"./assets/icon_rank_hot.png\" alt=\"\"></div>\n      <div class=\"txt\">\n        <a href=\"#\" class=\"more\">酷我热歌榜<span class=\"iconfont icon-right\"></span></a>\n        <a href=\"#\">1. 樱花树下的约定（完整版）  - 旺仔小乔</a>\n        <a href=\"#\">2. 就让这大雨全都落下  - 容祖儿</a>\n        <a href=\"#\">3. 缺氧  - 轩姨（相信光）</a>\n      </div>\n    </li>\n    <li>\n      <div class=\"pic\"><img src=\"./assets/icon_rank_new.png\" alt=\"\"></div>\n      <div class=\"txt\">\n        <a href=\"#\" class=\"more\">酷我新歌榜<span class=\"iconfont icon-right\"></span></a>\n        <a href=\"#\">1. 樱花树下的约定（完整版）  - 旺仔小乔</a>\n        <a href=\"#\">2. 就让这大雨全都落下  - 容祖儿</a>\n        <a href=\"#\">3. 缺氧  - 轩姨（相信光）</a>\n      </div>\n    </li>\n    <li>\n      <div class=\"pic\"><img src=\"./assets/icon_rank_rise.png\" alt=\"\"></div>\n      <div class=\"txt\">\n        <a href=\"#\" class=\"more\">酷我飙升榜<span class=\"iconfont icon-right\"></span></a>\n        <a href=\"#\">1. 樱花树下的约定（完整版）  - 旺仔小乔</a>\n        <a href=\"#\">2. 就让这大雨全都落下  - 容祖儿</a>\n        <a href=\"#\">3. 缺氧  - 轩姨（相信光）</a>\n      </div>\n    </li>\n  </ul>\n</div>\n// 排行榜\n.list {\n  margin-top: (20 / @vw);\n  padding: 0 (15 / @vw);\n  li {\n    display: ex;\n    margin-bottom: (16 / @vw);"
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
          "text": "推荐歌单布局  \nHTML 结构\n \n    height: (105 / @vw);\n    background-color: #f;\n    border-radius: (10 / @vw);\n    .pic {\n      margin-right: (20 / @vw);\n      img {\n        width: (105 / @vw);\n        height: (105 / @vw);\n        border-radius: (10 / @vw);\n      }\n    }\n    .txt {\n      a {\n        display: block;\n        font-size: (12 / @vw);\n        color: #a1a4b3;\n        line-height: 1.8;\n      }\n \n      .more {\n        font-size: (14 / @vw);\n        color: #333;\n        .iconfont {\n          font-size: (16 / @vw);\n        }\n      }\n    }\n  }\n}\n<!-- 推荐歌单  -->\n<div class=\"recommend\">\n  <!-- 标题  -->\n  <div class=\"title\">\n    <h4>推荐歌单</h4>\n    <a href=\"#\">更多<span class=\"iconfont icon-right\"></span></a>\n  </div>\n  <!-- 内容  -->\n  <div class=\"content\">\n    <ul>\n      <li>1</li>\n      <li>1</li>\n      <li>1</li>\n      <li>1</li>\n      <li>1</li>\n      <li>1</li>\n    </ul>\n  </div>"
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
          "text": "less 样式\n \n推荐歌单内容  \nHTML 结构\n \n</div>\n// 推荐歌单\n.recommend {\n  padding: 0 (15 / @vw);\n  ul {\n    display: ex;\n    ex-wrap: wrap;\n    justify-content: space-between;\n    li {\n      margin-bottom: (16 / @vw);\n      width: (105 / @vw);\n      height: (143 / @vw);\n      background-color: pink;\n    }\n  }\n}\n<li>\n  <div class=\"pic\">\n    <img src=\"./assets/song01.jpeg\" alt=\"\">\n    <div class=\"cover\">18.2W</div>\n  </div>\n  <div class=\"txt\">抖音嗨爆 DJ ！劲爆旋律萦绕双耳</div>\n</li>\n<li>\n  <div class=\"pic\">\n    <img src=\"./assets/song02.jpeg\" alt=\"\">\n    <div class=\"cover\">18.2W</div>\n  </div>\n  <div class=\"txt\">抖音嗨爆 DJ ！劲爆旋律萦绕双耳</div>\n</li>\n<li>\n  <div class=\"pic\">\n    <img src=\"./assets/song03.jpeg\" alt=\"\">\n    <div class=\"cover\">18.2W</div>\n  </div>\n  <div class=\"txt\">抖音嗨爆 DJ ！劲爆旋律萦绕双耳</div>\n</li>\n<li>\n  <div class=\"pic\">\n    <img src=\"./assets/song02.jpeg\" alt=\"\">\n    <div class=\"cover\">18.2W</div>\n  </div>\n  <div class=\"txt\">抖音嗨爆 DJ ！劲爆旋律萦绕双耳</div>"
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
          "text": "less 样式\n \n下载区域  \nHTML 结构\n</li>\n<li>\n  <div class=\"pic\">\n    <img src=\"./assets/song03.jpeg\" alt=\"\">\n    <div class=\"cover\">18.2W</div>\n  </div>\n  <div class=\"txt\">抖音嗨爆 DJ ！劲爆旋律萦绕双耳</div>\n</li>\n<li>\n  <div class=\"pic\">\n    <img src=\"./assets/song01.jpeg\" alt=\"\">\n    <div class=\"cover\">18.2W</div>\n  </div>\n  <div class=\"txt\">抖音嗨爆 DJ ！劲爆旋律萦绕双耳</div>\n</li>\n// 图片\n.pic {\n  position: relative;\n  width: (105 / @vw);\n  height: (105 / @vw);\n  img {\n    width: 100%;\n    height: 100%;\n    object-t: cover;\n    border-radius: (10 / @vw);\n  }\n  .cover {\n    position: absolute;\n    left: 0;\n    bottom: 0;\n    width: (70 / @vw);\n    height: (28 / @vw);\n    background-color: rgba(0,0,0,0.8);\n    border-radius: 0 (10 / @vw) 0 (10 / @vw);\n    text-align: center;\n    line-height: (28 / @vw);\n    color: #f;\n    font-size: (14 / @vw);\n  }\n}\n// 文字\n.txt {\n  font-size: (14 / @vw);\n}"
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
          "text": "less 样式\n \n头部固定  \nless 样式\n \n<!-- 安装，下载  -->\n<div class=\"download\">\n  <img src=\"./assets/logo.png\" alt=\"\">\n  <p>安装酷我音乐  发现更多好音乐</p>\n  <span class=\"iconfont icon-right\"></span>\n</div>\n// 下载\n.download {\n  position: xed;\n  left: (15 / @vw);\n  bottom: (30 / @vw);\n \n  display: ex;\n  align-items: center;\n  padding: 0 (10 / @vw) 0 (15 / @vw);\n  width: (345 / @vw);\n  height: (45 / @vw);\n  background-color: #f;\n  border-radius: (22 / @vw);\n  img {\n    margin-right: (10 / @vw);\n    width: (36 / @vw);\n    height: (36 / @vw);\n  }\n  p {\n    ex: 1;\n    font-size: (14 / @vw);\n  }\n  span {\n    width: (32 / @vw);\n    height: (32 / @vw);\n    background-color: #f2f3f5;\n    border-radius: 50%;\n    text-align: center;\n    line-height: (32 / @vw);\n    font-size: (16 / @vw);\n  }\n}\n// 头部\nheader {\n  position: xed;\n  left: 0;"
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
          "text": "top: 0;\n  display: ex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 (15 / @vw);\n  // 固定定位的盒子，宽度靠内容撑开，希望宽度 100%\n  width: 100%;\n  height: (50 / @vw);\n  background-color: #f;\n}\n \n// 搜索\n.search {\n  // 头部固定定位，脱标不占位，搜索去最顶了，加上外边距挤下来即可\n  margin-top: (50 / @vw);\n  padding: (10 / @vw) (15 / @vw);\n  height: (52 / @vw);\n}"
        }
      ]
    }
  ]
};
