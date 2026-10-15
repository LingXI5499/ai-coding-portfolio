window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["738bf5f744c703d3ed82"] = {
  "id": "738bf5f744c703d3ed82",
  "title": "17-浅拷贝的排错题.html",
  "treatment": "排错练习（不自动执行）",
  "sections": [
    {
      "title": "17-浅拷贝的排错题.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    <title>Document</title>\n  </head>\n  <body>\n    <script>\n      // 23行返回的就是false，因为是浅拷贝；说法对吗，为什么？\n      const old = {\n        name: '佩奇',\n        address: {\n          province: '北京',\n        },\n      };\n\n      const newObj = { ...old };\n\n      newObj.name = '乔治';\n      newObj.address.province = '美国';\n      console.log(newObj.address === old.address);\n    </script>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
