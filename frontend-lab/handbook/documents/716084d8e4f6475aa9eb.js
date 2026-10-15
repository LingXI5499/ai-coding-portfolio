window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["716084d8e4f6475aa9eb"] = {
  "id": "716084d8e4f6475aa9eb",
  "title": "14-移动端轮播图.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "14-移动端轮播图.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>Document</title>\n\n    <link rel=\"stylesheet\" href=\"./css/swiper.min.css\" />\n\n    <style>\n      .box {\n        position: relative;\n\n        width: 800px;\n\n        height: 300px;\n\n        background-color: pink;\n\n        margin: 100px auto;\n      }\n\n      html,\n      body {\n        position: relative;\n\n        height: 100%;\n      }\n\n      body {\n        background: #eee;\n\n        font-family:\n          Helvetica Neue,\n          Helvetica,\n          Arial,\n          sans-serif;\n\n        font-size: 14px;\n\n        color: #000;\n\n        margin: 0;\n\n        padding: 0;\n      }\n\n      .swiper {\n        overflow: hidden;\n\n        width: 100%;\n\n        height: 100%;\n      }\n\n      .swiper-slide {\n        text-align: center;\n\n        font-size: 18px;\n\n        background: #fff;\n\n        /* Center slide text vertically */\n\n        display: -webkit-box;\n\n        display: -ms-flexbox;\n\n        display: -webkit-flex;\n\n        display: flex;\n\n        -webkit-box-pack: center;\n\n        -ms-flex-pack: center;\n\n        -webkit-justify-content: center;\n\n        justify-content: center;\n\n        -webkit-box-align: center;\n\n        -ms-flex-align: center;\n\n        -webkit-align-items: center;\n\n        align-items: center;\n      }\n\n      .swiper-slide img {\n        display: block;\n\n        width: 100%;\n\n        height: 100%;\n\n        object-fit: cover;\n      }\n    </style>\n  </head>\n\n  <body>\n    <div class=\"box\">\n      <!-- Swiper -->\n\n      <div class=\"swiper mySwiper\">\n        <div class=\"swiper-wrapper\">\n          <div class=\"swiper-slide\">Slide 1</div>\n\n          <div class=\"swiper-slide\">Slide 2</div>\n\n          <div class=\"swiper-slide\">Slide 3</div>\n\n          <div class=\"swiper-slide\">Slide 4</div>\n\n          <div class=\"swiper-slide\">Slide 5</div>\n\n          <div class=\"swiper-slide\">Slide 6</div>\n\n          <div class=\"swiper-slide\">Slide 7</div>\n\n          <div class=\"swiper-slide\">Slide 8</div>\n\n          <div class=\"swiper-slide\">Slide 9</div>\n        </div>\n\n        <div class=\"swiper-pagination\"></div>\n      </div>\n    </div>\n\n    <script src=\"./js/swiper.min.js\"></script>\n\n    <script>\n      var swiper = new Swiper('.mySwiper', {\n        // 小圆点\n\n        pagination: {\n          el: '.swiper-pagination',\n        },\n\n        // 自动播放\n\n        autoplay: {\n          delay: 1000, //1秒切换一次\n\n          disableOnInteraction: false, // 鼠标点击 触摸之后，自动继续播放\n        },\n\n        // 可以键盘控制\n\n        keyboard: {\n          enabled: true,\n\n          onlyInViewport: true,\n        },\n      });\n    </script>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
