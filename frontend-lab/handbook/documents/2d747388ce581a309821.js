window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["2d747388ce581a309821"] = {
  "id": "2d747388ce581a309821",
  "title": "14-渐变-径向.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "14-渐变-径向.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>Document</title>\n\n    <style>\n      div {\n        width: 100px;\n\n        height: 100px;\n\n        background-color: pink;\n\n        border-radius: 50%;\n\n        background-image: radial-gradient(\n          50px at center center,\n\n          red,\n          pink\n        );\n\n        background-image: radial-gradient(\n          50px 20px at center center,\n\n          red,\n          pink\n        );\n\n        background-image: radial-gradient(\n          50px at 50px 30px,\n\n          red,\n          pink 50%\n        );\n      }\n\n      button {\n        width: 100px;\n\n        height: 40px;\n\n        background-color: green;\n\n        border: 0;\n\n        border-radius: 5px;\n\n        color: #fff;\n\n        background-image: radial-gradient(\n          30px at 30px 20px,\n\n          rgba(255, 255, 255, 0.2),\n          transparent\n        );\n      }\n    </style>\n  </head>\n\n  <body>\n    <div></div>\n\n    <button>按钮</button>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
