window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["917c96b687e92b9dd85d"] = {
  "id": "917c96b687e92b9dd85d",
  "title": "16-多级对象解构.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "16-多级对象解构.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>Document</title>\n  </head>\n\n  <body>\n    <script>\n      // const pig = {\n\n      //   name: '佩奇',\n\n      //   family: {\n\n      //     mother: '猪妈妈',\n\n      //     father: '猪爸爸',\n\n      //     sister: '乔治'\n\n      //   },\n\n      //   age: 6\n\n      // }\n\n      // // 多级对象解构\n\n      // const { name, family: { mother, father, sister } } = pig\n\n      // console.log(name)\n\n      // console.log(mother)\n\n      // console.log(father)\n\n      // console.log(sister)\n\n      const person = [\n        {\n          name: '佩奇',\n\n          family: {\n            mother: '猪妈妈',\n\n            father: '猪爸爸',\n\n            sister: '乔治',\n          },\n\n          age: 6,\n        },\n      ];\n\n      const [\n        {\n          name,\n          family: { mother, father, sister },\n        },\n      ] = person;\n\n      console.log(name);\n\n      console.log(mother);\n\n      console.log(father);\n\n      console.log(sister);\n    </script>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
