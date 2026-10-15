window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["0ef24ff1b174dff9230b"] = {
  "id": "0ef24ff1b174dff9230b",
  "title": "hero(学生练习).html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "hero(学生练习).html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\" />\n\n    <title>渲染英雄列表案例</title>\n\n    <link rel=\"stylesheet\" href=\"css/hero.css\" />\n  </head>\n\n  <body>\n    <!-- 利用对象数组渲染英雄列表案例 -->\n\n    <!-- <ul class=\"list\">\n\n\t\t\n\n\t</ul> -->\n\n    <script>\n      const datas = [\n        { name: '司马懿', imgSrc: '01.jpg' },\n\n        { name: '女娲', imgSrc: '02.jpg' },\n\n        { name: '百里守约', imgSrc: '03.jpg' },\n\n        { name: '亚瑟', imgSrc: '04.jpg' },\n\n        { name: '虞姬', imgSrc: '05.jpg' },\n\n        { name: '张良', imgSrc: '06.jpg' },\n\n        { name: '安其拉', imgSrc: '07.jpg' },\n\n        { name: '李白', imgSrc: '08.jpg' },\n\n        { name: '阿珂', imgSrc: '09.jpg' },\n\n        { name: '墨子', imgSrc: '10.jpg' },\n\n        { name: '鲁班', imgSrc: '11.jpg' },\n\n        { name: '嬴政', imgSrc: '12.jpg' },\n\n        { name: '孙膑', imgSrc: '13.jpg' },\n\n        { name: '周瑜', imgSrc: '14.jpg' },\n\n        { name: 'XXX', imgSrc: '15.jpg' },\n\n        { name: 'XXX', imgSrc: '16.jpg' },\n\n        { name: 'XXX', imgSrc: '17.jpg' },\n\n        { name: 'XXX', imgSrc: '18.jpg' },\n\n        { name: 'XXX', imgSrc: '19.jpg' },\n\n        { name: 'XXX', imgSrc: '20.jpg' },\n      ];\n\n      let str = '';\n\n      for (let i = 0; i < datas.length; i++) {\n        str += `\n\n\t\t\t\t<li><img src=\"./uploads/heros/${datas[i].imgSrc}\" title=\"${datas[i].name}\"></li>\n\n\t\t\t`;\n      }\n\n      document.write(`\n\n\t\t<ul class=\"list\">\n\n\t\t\t${str}\n\n\t\t</ul>\n\n\t\t`);\n    </script>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
