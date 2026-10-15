window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["2a5374ff24d2d00e0d7c"] = {
  "id": "2a5374ff24d2d00e0d7c",
  "title": "移动Web第四天.md",
  "treatment": "章节知识与练习",
  "sections": [
    {
      "title": "vw和vh基本使用",
      "trail": [
        "移动 Web 第四天",
        "01-vw适配方案",
        "vw和vh基本使用"
      ],
      "level": 3,
      "line": 9,
      "blocks": [
        {
          "type": "text",
          "text": "vw和vh是相对单位，相对视口尺寸计算结果\n\n\n\n* vw：viewport width（1vw = 1/100视口宽度 ）\n\n* vh：lviewport height ( 1vh = 1/100视口高度 )"
        }
      ]
    },
    {
      "title": "vw布局",
      "trail": [
        "移动 Web 第四天",
        "01-vw适配方案",
        "vw布局"
      ],
      "level": 3,
      "line": 23,
      "blocks": [
        {
          "type": "text",
          "text": "vw单位的尺寸 = px 单位数值 / ( 1/100 视口宽度 )"
        }
      ]
    },
    {
      "title": "vh问题",
      "trail": [
        "移动 Web 第四天",
        "01-vw适配方案",
        "vh问题"
      ],
      "level": 3,
      "line": 31,
      "blocks": [
        {
          "type": "text",
          "text": "vh是1/100视口高度，全面屏视口高度尺寸大，如果混用可能会导致盒子变形"
        }
      ]
    },
    {
      "title": "02-综合案例-酷我音乐",
      "trail": [
        "移动 Web 第四天",
        "02-综合案例-酷我音乐"
      ],
      "level": 2,
      "line": 39,
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
        "移动 Web 第四天",
        "02-综合案例-酷我音乐",
        "准备工作"
      ],
      "level": 3,
      "line": 47,
      "blocks": [
        {
          "type": "text",
          "text": "[课程配图见原资料]\n\n\n\n* HTML 结构"
        },
        {
          "type": "code",
          "language": "html",
          "text": "<link rel=\"stylesheet\" href=\"./iconfont/iconfont.css\" />\n\n<link rel=\"stylesheet\" href=\"./css/index.css\" />"
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
        "移动 Web 第四天",
        "02-综合案例-酷我音乐",
        "头部布局"
      ],
      "level": 3,
      "line": 85,
      "blocks": [
        {
          "type": "text",
          "text": "* HTML 结构"
        },
        {
          "type": "code",
          "language": "html",
          "text": "<!-- 头部 -->\n\n<header>\n  <div class=\"left\">left</div>\n\n  <a href=\"#\">下载APP</a>\n</header>"
        },
        {
          "type": "text",
          "text": "* less 样式"
        },
        {
          "type": "code",
          "language": "less",
          "text": "body {\n  background-color: #f9fafb;\n}\n\n@vw: 3.75vw;\n\n// 头部\n\nheader {\n  display: flex;\n\n  justify-content: space-between;\n\n  align-items: center;\n\n  padding: 0 (15 / @vw);\n\n  height: (50 / @vw);\n\n  background-color: #fff;\n}"
        }
      ]
    },
    {
      "title": "头部内容",
      "trail": [
        "移动 Web 第四天",
        "02-综合案例-酷我音乐",
        "头部内容"
      ],
      "level": 3,
      "line": 149,
      "blocks": [
        {
          "type": "text",
          "text": "* less 样式"
        },
        {
          "type": "code",
          "language": "less",
          "text": "header {\n  // 左边\n\n  .left {\n    width: (235 / @vw);\n\n    height: (50 / @vw);\n\n    background-image: url(../assets/head.png);\n\n    background-size: contain;\n\n    background-repeat: no-repeat;\n  }\n\n  a {\n    width: (80 / @vw);\n\n    height: (30 / @vw);\n\n    background-color: #ffe31b;\n\n    border-radius: (15 / @vw);\n\n    text-align: center;\n\n    line-height: (30 / @vw);\n\n    font-size: (14 / @vw);\n  }\n}"
        }
      ]
    },
    {
      "title": "搜索区域",
      "trail": [
        "移动 Web 第四天",
        "02-综合案例-酷我音乐",
        "搜索区域"
      ],
      "level": 3,
      "line": 201,
      "blocks": [
        {
          "type": "text",
          "text": "* HTML 结构"
        },
        {
          "type": "code",
          "language": "html",
          "text": "<!-- 搜索 -->\n\n<div class=\"search\">\n  <div class=\"txt\">\n    <span class=\"iconfont icon-sousuo\"></span>\n\n    <span>搜索你想听的歌曲</span>\n  </div>\n</div>"
        },
        {
          "type": "text",
          "text": "* less 样式"
        },
        {
          "type": "code",
          "language": "less",
          "text": "// 搜索\n\n.search {\n  padding: (10 / @vw) (15 / @vw);\n\n  height: (52 / @vw);\n\n  // background-color: pink;\n\n  .txt {\n    height: (32 / @vw);\n\n    background-color: #f2f4f5;\n\n    border-radius: (16 / @vw);\n\n    text-align: center;\n\n    line-height: (32 / @vw);\n\n    color: #a1a4b3;\n\n    font-size: (14 / @vw);\n\n    .iconfont {\n      font-size: (16 / @vw);\n    }\n  }\n}"
        }
      ]
    },
    {
      "title": "banner 区域",
      "trail": [
        "移动 Web 第四天",
        "02-综合案例-酷我音乐",
        "banner 区域"
      ],
      "level": 3,
      "line": 275,
      "blocks": [
        {
          "type": "text",
          "text": "* HTML 结构"
        },
        {
          "type": "code",
          "language": "html",
          "text": "<!-- banner -->\n\n<div class=\"banner\">\n  <ul>\n    <li>\n      <a href=\"#\"><img src=\"./assets/banner01.jpeg\" alt=\"\" /></a>\n    </li>\n  </ul>\n</div>"
        },
        {
          "type": "text",
          "text": "* less 样式"
        },
        {
          "type": "code",
          "language": "less",
          "text": "// banner\n\n.banner {\n  padding: 0 (15 / @vw);\n\n  height: (108 / @vw);\n\n  // background-color: pink;\n\n  ul {\n    li {\n      width: (345 / @vw);\n\n      height: (108 / @vw);\n\n      img {\n        width: 100%;\n\n        height: 100%;\n\n        // cover完全覆盖\n\n        // 缩放img，图片比例跟父级盒子比例不同，避免图片挤压变形\n\n        object-fit: cover;\n\n        border-radius: (5 / @vw);\n      }\n    }\n  }\n}"
        }
      ]
    },
    {
      "title": "标题公共样式",
      "trail": [
        "移动 Web 第四天",
        "02-综合案例-酷我音乐",
        "标题公共样式"
      ],
      "level": 3,
      "line": 351,
      "blocks": [
        {
          "type": "text",
          "text": "* HTML 结构"
        },
        {
          "type": "code",
          "language": "html",
          "text": "<!-- 排行榜 -->\n\n<div class=\"list\">\n  <!-- 标题 -->\n\n  <div class=\"title\">\n    <h4>酷我排行榜</h4>\n\n    <a href=\"#\">\n      更多\n      <span class=\"iconfont icon-right\"></span>\n    </a>\n  </div>\n</div>"
        },
        {
          "type": "text",
          "text": "* less 样式"
        },
        {
          "type": "code",
          "language": "less",
          "text": "// 排行榜\n\n.list {\n  margin-top: (20 / @vw);\n\n  padding: 0 (15 / @vw);\n}\n\n// 标题 → 公共样式\n\n.title {\n  display: flex;\n\n  justify-content: space-between;\n\n  margin-bottom: (16 / @vw);\n\n  line-height: (25 / @vw);\n\n  h4 {\n    font-size: (20 / @vw);\n  }\n\n  a {\n    font-size: (12 / @vw);\n\n    color: #a1a4b3;\n  }\n}"
        }
      ]
    },
    {
      "title": "排行榜内容",
      "trail": [
        "移动 Web 第四天",
        "02-综合案例-酷我音乐",
        "排行榜内容"
      ],
      "level": 3,
      "line": 431,
      "blocks": [
        {
          "type": "text",
          "text": "* HTML 结构"
        },
        {
          "type": "code",
          "language": "html",
          "text": "<!-- 内容 -->\n\n<div class=\"content\">\n  <ul>\n    <li>\n      <div class=\"pic\"><img src=\"./assets/icon_rank_hot.png\" alt=\"\" /></div>\n\n      <div class=\"txt\">\n        <a href=\"#\" class=\"more\">\n          酷我热歌榜\n          <span class=\"iconfont icon-right\"></span>\n        </a>\n\n        <a href=\"#\">1.樱花树下的约定（完整版） - 旺仔小乔</a>\n\n        <a href=\"#\">2.就让这大雨全都落下 - 容祖儿</a>\n\n        <a href=\"#\">3.缺氧 - 轩姨（相信光）</a>\n      </div>\n    </li>\n\n    <li>\n      <div class=\"pic\"><img src=\"./assets/icon_rank_new.png\" alt=\"\" /></div>\n\n      <div class=\"txt\">\n        <a href=\"#\" class=\"more\">\n          酷我新歌榜\n          <span class=\"iconfont icon-right\"></span>\n        </a>\n\n        <a href=\"#\">1.樱花树下的约定（完整版） - 旺仔小乔</a>\n\n        <a href=\"#\">2.就让这大雨全都落下 - 容祖儿</a>\n\n        <a href=\"#\">3.缺氧 - 轩姨（相信光）</a>\n      </div>\n    </li>\n\n    <li>\n      <div class=\"pic\"><img src=\"./assets/icon_rank_rise.png\" alt=\"\" /></div>\n\n      <div class=\"txt\">\n        <a href=\"#\" class=\"more\">\n          酷我飙升榜\n          <span class=\"iconfont icon-right\"></span>\n        </a>\n\n        <a href=\"#\">1.樱花树下的约定（完整版） - 旺仔小乔</a>\n\n        <a href=\"#\">2.就让这大雨全都落下 - 容祖儿</a>\n\n        <a href=\"#\">3.缺氧 - 轩姨（相信光）</a>\n      </div>\n    </li>\n  </ul>\n</div>"
        },
        {
          "type": "text",
          "text": "* less 样式"
        },
        {
          "type": "code",
          "language": "less",
          "text": "// 排行榜\n\n.list {\n  margin-top: (20 / @vw);\n\n  padding: 0 (15 / @vw);\n\n  li {\n    display: flex;\n\n    margin-bottom: (16 / @vw);\n\n    height: (105 / @vw);\n\n    background-color: #fff;\n\n    border-radius: (10 / @vw);\n\n    .pic {\n      margin-right: (20 / @vw);\n\n      img {\n        width: (105 / @vw);\n\n        height: (105 / @vw);\n\n        border-radius: (10 / @vw);\n      }\n    }\n\n    .txt {\n      a {\n        display: block;\n\n        font-size: (12 / @vw);\n\n        color: #a1a4b3;\n\n        line-height: 1.8;\n      }\n\n      .more {\n        font-size: (14 / @vw);\n\n        color: #333;\n\n        .iconfont {\n          font-size: (16 / @vw);\n        }\n      }\n    }\n  }\n}"
        }
      ]
    },
    {
      "title": "推荐歌单布局",
      "trail": [
        "移动 Web 第四天",
        "02-综合案例-酷我音乐",
        "推荐歌单布局"
      ],
      "level": 3,
      "line": 591,
      "blocks": [
        {
          "type": "text",
          "text": "* HTML 结构"
        },
        {
          "type": "code",
          "language": "html",
          "text": "<!-- 推荐歌单 -->\n\n<div class=\"recommend\">\n  <!-- 标题 -->\n\n  <div class=\"title\">\n    <h4>推荐歌单</h4>\n\n    <a href=\"#\">\n      更多\n      <span class=\"iconfont icon-right\"></span>\n    </a>\n  </div>\n\n  <!-- 内容 -->\n\n  <div class=\"content\">\n    <ul>\n      <li>1</li>\n\n      <li>1</li>\n\n      <li>1</li>\n\n      <li>1</li>\n\n      <li>1</li>\n\n      <li>1</li>\n    </ul>\n  </div>\n</div>"
        },
        {
          "type": "text",
          "text": "* less 样式"
        },
        {
          "type": "code",
          "language": "less",
          "text": "// 推荐歌单\n\n.recommend {\n  padding: 0 (15 / @vw);\n\n  ul {\n    display: flex;\n\n    flex-wrap: wrap;\n\n    justify-content: space-between;\n\n    li {\n      margin-bottom: (16 / @vw);\n\n      width: (105 / @vw);\n\n      height: (143 / @vw);\n\n      background-color: pink;\n    }\n  }\n}"
        }
      ]
    },
    {
      "title": "推荐歌单内容",
      "trail": [
        "移动 Web 第四天",
        "02-综合案例-酷我音乐",
        "推荐歌单内容"
      ],
      "level": 3,
      "line": 683,
      "blocks": [
        {
          "type": "text",
          "text": "* HTML 结构"
        },
        {
          "type": "code",
          "language": "html",
          "text": "<li>\n  <div class=\"pic\">\n    <img src=\"./assets/song01.jpeg\" alt=\"\" />\n\n    <div class=\"cover\">18.2W</div>\n  </div>\n\n  <div class=\"txt\">抖音嗨爆DJ！劲爆旋律萦绕双耳</div>\n</li>\n\n<li>\n  <div class=\"pic\">\n    <img src=\"./assets/song02.jpeg\" alt=\"\" />\n\n    <div class=\"cover\">18.2W</div>\n  </div>\n\n  <div class=\"txt\">抖音嗨爆DJ！劲爆旋律萦绕双耳</div>\n</li>\n\n<li>\n  <div class=\"pic\">\n    <img src=\"./assets/song03.jpeg\" alt=\"\" />\n\n    <div class=\"cover\">18.2W</div>\n  </div>\n\n  <div class=\"txt\">抖音嗨爆DJ！劲爆旋律萦绕双耳</div>\n</li>\n\n<li>\n  <div class=\"pic\">\n    <img src=\"./assets/song02.jpeg\" alt=\"\" />\n\n    <div class=\"cover\">18.2W</div>\n  </div>\n\n  <div class=\"txt\">抖音嗨爆DJ！劲爆旋律萦绕双耳</div>\n</li>\n\n<li>\n  <div class=\"pic\">\n    <img src=\"./assets/song03.jpeg\" alt=\"\" />\n\n    <div class=\"cover\">18.2W</div>\n  </div>\n\n  <div class=\"txt\">抖音嗨爆DJ！劲爆旋律萦绕双耳</div>\n</li>\n\n<li>\n  <div class=\"pic\">\n    <img src=\"./assets/song01.jpeg\" alt=\"\" />\n\n    <div class=\"cover\">18.2W</div>\n  </div>\n\n  <div class=\"txt\">抖音嗨爆DJ！劲爆旋律萦绕双耳</div>\n</li>"
        },
        {
          "type": "text",
          "text": "* less 样式"
        },
        {
          "type": "code",
          "language": "less",
          "text": "// 图片\n\n.pic {\n  position: relative;\n\n  width: (105 / @vw);\n\n  height: (105 / @vw);\n\n  img {\n    width: 100%;\n\n    height: 100%;\n\n    object-fit: cover;\n\n    border-radius: (10 / @vw);\n  }\n\n  .cover {\n    position: absolute;\n\n    left: 0;\n\n    bottom: 0;\n\n    width: (70 / @vw);\n\n    height: (28 / @vw);\n\n    background-color: rgba(0, 0, 0, 0.8);\n\n    border-radius: 0 (10 / @vw) 0 (10 / @vw);\n\n    text-align: center;\n\n    line-height: (28 / @vw);\n\n    color: #fff;\n\n    font-size: (14 / @vw);\n  }\n}\n\n// 文字\n\n.txt {\n  font-size: (14 / @vw);\n}"
        }
      ]
    },
    {
      "title": "下载区域",
      "trail": [
        "移动 Web 第四天",
        "02-综合案例-酷我音乐",
        "下载区域"
      ],
      "level": 3,
      "line": 849,
      "blocks": [
        {
          "type": "text",
          "text": "* HTML 结构"
        },
        {
          "type": "code",
          "language": "html",
          "text": "<!-- 安装，下载 -->\n\n<div class=\"download\">\n  <img src=\"./assets/logo.png\" alt=\"\" />\n\n  <p>安装酷我音乐 发现更多好音乐</p>\n\n  <span class=\"iconfont icon-right\"></span>\n</div>"
        },
        {
          "type": "text",
          "text": "* less 样式"
        },
        {
          "type": "code",
          "language": "less",
          "text": "// 下载\n\n.download {\n  position: fixed;\n\n  left: (15 / @vw);\n\n  bottom: (30 / @vw);\n\n  display: flex;\n\n  align-items: center;\n\n  padding: 0 (10 / @vw) 0 (15 / @vw);\n\n  width: (345 / @vw);\n\n  height: (45 / @vw);\n\n  background-color: #fff;\n\n  border-radius: (22 / @vw);\n\n  img {\n    margin-right: (10 / @vw);\n\n    width: (36 / @vw);\n\n    height: (36 / @vw);\n  }\n\n  p {\n    flex: 1;\n\n    font-size: (14 / @vw);\n  }\n\n  span {\n    width: (32 / @vw);\n\n    height: (32 / @vw);\n\n    background-color: #f2f3f5;\n\n    border-radius: 50%;\n\n    text-align: center;\n\n    line-height: (32 / @vw);\n\n    font-size: (16 / @vw);\n  }\n}"
        }
      ]
    },
    {
      "title": "头部固定",
      "trail": [
        "移动 Web 第四天",
        "02-综合案例-酷我音乐",
        "头部固定"
      ],
      "level": 3,
      "line": 949,
      "blocks": [
        {
          "type": "text",
          "text": "* less 样式"
        },
        {
          "type": "code",
          "language": "less",
          "text": "// 头部\n\nheader {\n  position: fixed;\n\n  left: 0;\n\n  top: 0;\n\n  display: flex;\n\n  justify-content: space-between;\n\n  align-items: center;\n\n  padding: 0 (15 / @vw);\n\n  // 固定定位的盒子，宽度靠内容撑开，希望宽度100%\n\n  width: 100%;\n\n  height: (50 / @vw);\n\n  background-color: #fff;\n}\n\n// 搜索\n\n.search {\n  // 头部固定定位，脱标不占位，搜索去最顶了，加上外边距挤下来即可\n\n  margin-top: (50 / @vw);\n\n  padding: (10 / @vw) (15 / @vw);\n\n  height: (52 / @vw);\n}"
        }
      ]
    }
  ]
};
