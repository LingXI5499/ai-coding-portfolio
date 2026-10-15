window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["377e256fcf21854255a0"] = {
  "id": "377e256fcf21854255a0",
  "title": "14-事件对象.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "14-事件对象.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>Document</title>\n  </head>\n\n  <body>\n    <!-- <button>点击</button> -->\n\n    <input type=\"text\" />\n\n    <script>\n      // const btn = document.querySelector('button')\n\n      // btn.addEventListener('click', function (e) {\n\n      //   console.log(e)\n\n      // })\n\n      const input = document.querySelector('input');\n\n      input.addEventListener('keyup', function (e) {\n        // console.log(11)\n\n        // console.log(e.key)\n\n        if (e.key === 'Enter') {\n          console.log('我按下了回车键');\n        }\n      });\n    </script>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
