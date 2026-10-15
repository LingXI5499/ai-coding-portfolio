window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["57f0619f77b9c1f98df5"] = {
  "id": "57f0619f77b9c1f98df5",
  "title": "02--焦点图案例.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "02--焦点图案例.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>QQ音乐10屏轮播图</title>\n\n    <style>\n      .img-box {\n        width: 700px;\n\n        height: 320px;\n\n        margin: 50px auto 0;\n\n        background: #000;\n\n        position: relative;\n      }\n\n      .img-box .tip {\n        width: 700px;\n\n        height: 53px;\n\n        line-height: 53px;\n\n        position: absolute;\n\n        bottom: 0px;\n\n        background-color: rgba(0, 0, 0, 0.8);\n\n        z-index: 10;\n      }\n\n      .img-box .tip h3 {\n        width: 82%;\n\n        margin: 0;\n\n        margin-right: 20px;\n\n        padding-left: 20px;\n\n        color: #98e404;\n\n        font-size: 28px;\n\n        float: left;\n\n        font-weight: 500;\n\n        font-family: 'Microsoft Yahei', Tahoma, Geneva;\n      }\n\n      .img-box .tip a {\n        width: 30px;\n\n        height: 29px;\n\n        display: block;\n\n        float: left;\n\n        margin-top: 12px;\n\n        margin-right: 3px;\n      }\n\n      .img-box ul {\n        position: absolute;\n\n        bottom: 0;\n\n        right: 30px;\n\n        list-style: none;\n\n        z-index: 99;\n      }\n    </style>\n  </head>\n\n  <body>\n    <div class=\"img-box\">\n      <img class=\"pic\" src=\"images/b01.jpg\" alt=\"第1张图的描述信息\" />\n\n      <div class=\"tip\">\n        <h3 class=\"text\">挑战云歌单，欢迎你来</h3>\n      </div>\n    </div>\n\n    <script>\n      // 数据\n\n      const data = [\n        {\n          imgSrc: 'images/b01.jpg',\n\n          title: '挑战云歌单，欢迎你来',\n        },\n\n        {\n          imgSrc: 'images/b02.jpg',\n\n          title: '田园日记，上演上京记',\n        },\n\n        {\n          imgSrc: 'images/b03.jpg',\n\n          title: '甜蜜攻势再次回归',\n        },\n\n        {\n          imgSrc: 'images/b04.jpg',\n\n          title: '我为歌狂，生为歌王',\n        },\n\n        {\n          imgSrc: 'images/b05.jpg',\n\n          title: '年度校园主题活动',\n        },\n\n        {\n          imgSrc: 'images/b06.jpg',\n\n          title: 'pink老师新歌发布，5月10号正式推出',\n        },\n\n        {\n          imgSrc: 'images/b07.jpg',\n\n          title: '动力火车来到西安',\n        },\n\n        {\n          imgSrc: 'images/b08.jpg',\n\n          title: '钢铁侠3，英雄镇东风',\n        },\n\n        {\n          imgSrc: 'images/b09.jpg',\n\n          title: '我用整颗心来等你',\n        },\n      ];\n\n      // 1. 获取元素  图片  和  h3\n\n      const pic = document.querySelector('.pic');\n\n      const text = document.querySelector('.text');\n\n      // i 记录图片的张数\n\n      let i = 0;\n\n      // 2.开启定时器\n\n      setInterval(function () {\n        i++;\n\n        // 无缝衔接\n\n        if (i >= data.length) {\n          i = 0;\n        }\n\n        // 修改图片的src属性\n\n        // console.log(data[i].imgSrc)\n\n        pic.src = data[i].imgSrc;\n\n        // 修改文字内容\n\n        text.innerHTML = data[i].title;\n      }, 1000);\n    </script>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
