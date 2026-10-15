window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["1d9379f3692ac2346de2"] = {
  "id": "1d9379f3692ac2346de2",
  "title": "hero.js",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "hero.js",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "javascript",
          "text": "// 后的的数据\n\nvar datas = [\n  { name: '司马懿', imgSrc: '01.jpg' },\n\n  { name: '女娲', imgSrc: '02.jpg' },\n\n  { name: '百里守约', imgSrc: '03.jpg' },\n\n  { name: '亚瑟', imgSrc: '04.jpg' },\n\n  { name: '虞姬', imgSrc: '05.jpg' },\n\n  { name: '张良', imgSrc: '06.jpg' },\n\n  { name: '安其拉', imgSrc: '07.jpg' },\n\n  { name: '李白', imgSrc: '08.jpg' },\n\n  { name: '阿珂', imgSrc: '09.jpg' },\n\n  { name: '墨子', imgSrc: '10.jpg' },\n\n  { name: '鲁班', imgSrc: '11.jpg' },\n\n  { name: '嬴政', imgSrc: '12.jpg' },\n\n  { name: '孙膑', imgSrc: '13.jpg' },\n\n  { name: '周瑜', imgSrc: '14.jpg' },\n\n  { name: 'XXX', imgSrc: '15.jpg' },\n\n  { name: 'XXX', imgSrc: '16.jpg' },\n\n  { name: 'XXX', imgSrc: '17.jpg' },\n\n  { name: 'XXX', imgSrc: '18.jpg' },\n\n  { name: 'XXX', imgSrc: '19.jpg' },\n\n  { name: 'XXX', imgSrc: '20.jpg' },\n];\n\n// 1. 获取元素\n\n// 1.1 获取按钮\n\nvar a = document.querySelector('#create');\n\n// 1.2 获取ul\n\nvar ul = document.querySelector('ul');\n\n// 2. 给按钮注册点击事件\n\na.onclick = function () {\n  // 2.1 循环遍历datas数据数组，取出一个对象，就创建一个li追加到ul中\n\n  for (var i = 0; i < datas.length; i++) {\n    var obj = datas[i];\n\n    // 就创建一个li追加到ul中\n\n    var newLi = document.createElement('li');\n\n    ul.appendChild(newLi);\n\n    // 2.2 创建一个img图片元素,追加到li中\n\n    var img = document.createElement('img');\n\n    newLi.appendChild(img);\n\n    // 2.3 把对象中的imgSrc的值取出来赋值给图片的src\n\n    img.src = 'uploads/heros/' + obj.imgSrc;\n\n    // 2.4 把对象中的name的值取出来赋值给图片的title\n\n    img.title = obj.name;\n  }\n};"
        }
      ]
    }
  ]
};
