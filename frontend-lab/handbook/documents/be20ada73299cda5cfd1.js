window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["be20ada73299cda5cfd1"] = {
  "id": "be20ada73299cda5cfd1",
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
          "text": "// out: ../css/\n\n// 导航\n\n.bg-body-tertiary {\n  background-color: transparent !important;\n\n  .navbar-collapse {\n    flex-grow: 0;\n  }\n}\n\n// 轮播图: 小于768图片高度250 max；大于等于768图片高度400 min；大于等于992图片高度500\n\n.carousel {\n  // 响应式 → 媒体查询\n\n  @media (max-width: 768px) {\n    .carousel-item {\n      height: 250px;\n    }\n  }\n\n  @media (min-width: 768px) {\n    .carousel-item {\n      height: 400px;\n    }\n  }\n\n  @media (min-width: 992px) {\n    .carousel-item {\n      height: 500px;\n    }\n  }\n\n  .carousel-item {\n    // height: 500px;\n\n    background-size: cover;\n\n    background-position: center 0;\n  }\n\n  .carousel-item:nth-child(1) {\n    background-image: url(../assets/uploads/banner_1.jpg);\n  }\n\n  .carousel-item:nth-child(2) {\n    background-image: url(../assets/uploads/banner_2.jpg);\n  }\n\n  .carousel-item:nth-child(3) {\n    background-image: url(../assets/uploads/banner_3.jpg);\n  }\n\n  .carousel-item:nth-child(4) {\n    background-image: url(../assets/uploads/banner_4.jpg);\n  }\n}\n\n// 开源项目\n\n// 视口宽度大于992；一行排4个盒子  col-lg-3\n\n// 视口宽度大于768；一行排2个盒子  col-md-6\n\n.project {\n  margin-top: 60px;\n\n  text-align: center;\n\n  .row {\n    div {\n      margin-bottom: 10px;\n\n      height: 200px;\n\n      // background-color: pink;\n\n      a {\n        // 块级的宽度和父级一样大\n\n        display: block;\n\n        height: 200px;\n\n        background-color: green;\n\n        border-radius: 4px;\n      }\n\n      &:nth-child(1) a {\n        background-color: #70c3ff;\n      }\n\n      &:nth-child(2) a {\n        background-color: #fd6a7f;\n      }\n\n      &:nth-child(3) a {\n        background-color: #7f8ea0;\n      }\n\n      &:nth-child(4) a {\n        background-color: #89d04f;\n      }\n    }\n  }\n}"
        }
      ]
    }
  ]
};
