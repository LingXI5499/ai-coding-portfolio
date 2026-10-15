window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["e610d6e0aef1e3299cee"] = {
  "id": "e610d6e0aef1e3299cee",
  "title": "hero(老师参考).html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "hero(老师参考).html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\" />\n\n    <title>Document</title>\n\n    <link rel=\"stylesheet\" href=\"css/hero.css\" />\n  </head>\n\n  <body>\n    <a href=\"javascript:\" id=\"create\">创建英雄列表</a>\n\n    <ul class=\"list\"></ul>\n\n    <!-- <script src=\"js/hero.js\"></script> -->\n\n    <script type=\"text/javascript\">\n      // 后的的数据\n\n      // datas = [{},{},{}]\n\n      let datas = [\n        { name: '司马懿', imgSrc: '01.jpg' },\n\n        { name: '女娲', imgSrc: '02.jpg' },\n\n        { name: '百里守约', imgSrc: '03.jpg' },\n\n        { name: '亚瑟', imgSrc: '04.jpg' },\n\n        { name: '虞姬', imgSrc: '05.jpg' },\n\n        { name: '张良', imgSrc: '06.jpg' },\n\n        { name: '安其拉', imgSrc: '07.jpg' },\n\n        { name: '李白', imgSrc: '08.jpg' },\n\n        { name: '阿珂', imgSrc: '09.jpg' },\n\n        { name: '墨子', imgSrc: '10.jpg' },\n\n        { name: '鲁班', imgSrc: '11.jpg' },\n\n        { name: '嬴政', imgSrc: '12.jpg' },\n\n        { name: '孙膑', imgSrc: '13.jpg' },\n\n        { name: '周瑜', imgSrc: '14.jpg' },\n\n        { name: 'XXX', imgSrc: '15.jpg' },\n\n        { name: 'XXX', imgSrc: '16.jpg' },\n\n        { name: 'XXX', imgSrc: '17.jpg' },\n\n        { name: 'XXX', imgSrc: '18.jpg' },\n\n        { name: 'XXX', imgSrc: '19.jpg' },\n\n        { name: 'XXX', imgSrc: '20.jpg' },\n      ];\n\n      // 功能:点击创建元素\n\n      // 点击a元素,创建新的li放到ul中\n\n      // 创建li,里面还有img,还有src地址,title属性\n\n      // 一个图片对应一个li,一个图片的地址和title实际上就是我们datas数组里面的一个对象\n\n      // 获取元素\n\n      let link = document.getElementById('create');\n\n      let list = document.querySelector('.list');\n\n      // 添加事件操作\n\n      link.addEventListener('click', function () {\n        // 几张图就要有几个li, 数组长度有多少,就是有几张图\n\n        // 遍历数组\n\n        for (let i = 0; i < datas.length; i++) {\n          // i = 2;\n\n          // 创建li\n\n          let newLi = document.createElement('li');\n\n          // 放到页面上\n\n          list.appendChild(newLi);\n\n          // 继续创建img\n\n          let img = document.createElement('img');\n\n          // 放到li里面\n\n          newLi.appendChild(img);\n\n          // <li><img src=\"uploads/heros/01.jpg\" title=\"司马懿\"></li>\n\n          // <li><img src=\"uploads/heros/02.jpg\" title=\"女娲\"></li>\n\n          // ......\n\n          // img的属性\n\n          // datas[i] == { name: '司马懿', imgSrc: '01.jpg' }\n\n          img.src = 'uploads/heros/' + datas[i].imgSrc;\n\n          img.title = datas[i].name;\n        }\n      });\n    </script>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
