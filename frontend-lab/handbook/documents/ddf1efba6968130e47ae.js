window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["ddf1efba6968130e47ae"] = {
  "id": "ddf1efba6968130e47ae",
  "title": "index.less",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "index.less",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "less",
          "text": "// 导入base.less\n\n@import url(base.less);\n\n// 导入normalize.less\n\n@import url(normalize.less);\n\n// 声明基准值变量\n\n// width: (10 / 37.5rem)\n\n@baseSize: 37.5rem;\n\nbody {\n  background-color: #f0f0f0;\n}\n\n// 底部盒子\n\n.toolbar {\n  position: fixed;\n\n  left: 0;\n\n  bottom: 0;\n\n  width: 100%;\n\n  // height: 49px;\n\n  height: (49 / @baseSize);\n\n  background-color: #feca49;\n\n  display: flex;\n\n  justify-content: space-around;\n\n  align-items: center;\n\n  a {\n    color: #d78b09;\n\n    font-size: (11 / @baseSize);\n\n    display: flex;\n\n    // 主轴方向\n\n    flex-direction: column;\n\n    align-items: center;\n\n    i {\n      font-size: (20 / @baseSize);\n\n      margin-bottom: (4 / @baseSize);\n    }\n\n    &.active {\n      color: #fff;\n    }\n  }\n}\n\n// 页面主体\n\n.main {\n  padding-bottom: (55 / @baseSize);\n\n  .banner {\n    height: (160 / @baseSize);\n  }\n\n  // 乐园活动\n\n  .title {\n    height: (40 / @baseSize);\n\n    line-height: (40 / @baseSize);\n\n    padding-left: (15 / @baseSize);\n\n    h4 {\n      font-size: (14 / @baseSize);\n    }\n  }\n\n  // item\n\n  .item {\n    background-color: #fff;\n\n    padding-bottom: (15 / @baseSize);\n\n    margin-bottom: (10 / @baseSize);\n\n    .pic {\n      position: relative;\n\n      // 进行模块\n\n      .status {\n        position: absolute;\n\n        top: (-4 / @baseSize);\n\n        left: (15 / @baseSize);\n\n        width: (68 / @baseSize);\n\n        height: (29 / @baseSize);\n\n        background: url(../images/status_active.png) no-repeat;\n\n        background-size: 100% 100%;\n\n        font-size: (12 / @baseSize);\n\n        color: #fff;\n\n        text-align: center;\n\n        line-height: (25 / @baseSize);\n      }\n\n      // 收藏\n\n      .collect {\n        position: absolute;\n\n        top: (15 / @baseSize);\n\n        right: (18 / @baseSize);\n\n        color: #fff;\n\n        i {\n          font-size: (24 / @baseSize);\n        }\n      }\n    }\n\n    // 信息模块\n\n    .info {\n      h5 {\n        width: (300 / @baseSize);\n\n        padding: (10 / @baseSize) 0 (15 / @baseSize) (15 / @baseSize);\n\n        line-height: (21 / @baseSize);\n\n        font-size: (15 / @baseSize);\n\n        font-weight: 400;\n      }\n\n      .rest {\n        padding-left: (15 / @baseSize);\n\n        color: #b4b4b4;\n\n        font-size: (11 / @baseSize);\n\n        span:nth-child(1) {\n          margin-right: (15 / @baseSize);\n        }\n      }\n    }\n  }\n}"
        }
      ]
    }
  ]
};
