window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["41fb53307833feead33a"] = {
  "id": "41fb53307833feead33a",
  "title": "渲染图片.html",
  "treatment": "排错练习（不自动执行）",
  "sections": [
    {
      "title": "渲染图片.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>渲染图片案例</title>\n\n    <style>\n      * {\n        margin: 0;\n\n        padding: 0;\n      }\n\n      li {\n        list-style: none;\n      }\n\n      .box {\n        display: flex;\n\n        flex-wrap: wrap;\n\n        width: 540px;\n\n        margin: 20px auto;\n      }\n\n      .box li {\n        width: 100px;\n\n        height: 100px;\n\n        margin: 0 10px 10px 0;\n      }\n\n      .box li:nth-child(5n + 1) {\n        margin-right: 0;\n      }\n\n      .box li img {\n        width: 100%;\n\n        height: 100%;\n\n        border: 2px solid #258df2;\n\n        border-radius: 10px 0 10px 0;\n      }\n    </style>\n  </head>\n\n  <body>\n    <ul class=\"box\">\n      <script>\n        let arr = [\n          './images/1.webp',\n\n          './images/2.webp',\n\n          './images/3.webp',\n\n          './images/4.webp',\n\n          './images/5.webp',\n\n          './images/6.webp',\n\n          './images/7.webp',\n\n          './images/8.webp',\n\n          './images/9.webp',\n\n          './images/10.webp',\n\n          './images/11.webp',\n\n          './images/12.webp',\n\n          './images/13.webp',\n\n          './images/14.webp',\n\n          './images/15.webp',\n\n          './images/16.webp',\n\n          './images/17.webp',\n\n          './images/18.webp',\n\n          './images/19.webp',\n\n          './images/20.webp',\n        ];\n\n        let num = prompt('请输入显示的英雄个数1~20之间：');\n\n        for (let i = 0; i < num; i++) {\n          document.write(`\n\n          <li>\n\n            <img src=\"${arr[i]}\" alt=\"\">\n\n          </li>\n\n        `);\n        }\n      </script>\n    </ul>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
