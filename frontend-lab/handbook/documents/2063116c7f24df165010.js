window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["2063116c7f24df165010"] = {
  "id": "2063116c7f24df165010",
  "title": "07-Bootstrap-栅格系统.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "07-Bootstrap-栅格系统.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>栅格系统</title>\n\n    <link rel=\"stylesheet\" href=\"./Bootstrap/css/bootstrap.min.css\" />\n  </head>\n\n  <body>\n    <!-- \n\n    视口宽度大于等于1200px，一行排4个盒子 → 3\n\n    视口宽度大于等于768px，一行排2个盒子\n\n    视口宽度大于等于576px，一行排1个盒子\n\n   -->\n\n    <!-- 版心 → row → 子级 -->\n\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-xl-3 col-md-6 col-sm-12\">1</div>\n\n        <div class=\"col-xl-3 col-md-6 col-sm-12\">2</div>\n\n        <div class=\"col-xl-3 col-md-6 col-sm-12\">3</div>\n\n        <div class=\"col-xl-3 col-md-6 col-sm-12\">4</div>\n      </div>\n    </div>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
