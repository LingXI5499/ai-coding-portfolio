window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["2198f717ed15c7689fc4"] = {
  "id": "2198f717ed15c7689fc4",
  "title": "移动Web第二天.pdf",
  "treatment": "课件页级文本（配图回溯原件）",
  "sections": [
    {
      "title": "第1页",
      "level": 1,
      "page": 1,
      "blocks": [
        {
          "type": "text",
          "text": "移动  Web 第一天  \n01- 空间转换  \n空间转换简介  \n空间：是从坐标轴角度定义的  X 、 Y 和  Z 三条坐标轴构成了一个立体空间， Z 轴位置与视线方向相同。\n空间转换也叫  3D 转换\n属性： transform\n平移  \n \n取值与平面转换相同\n默认情况下， Z 轴平移没有效果，原因：电脑屏幕默认是平面，无法显示  Z 轴平移效果\n视距  \n作用：指定了观察者与  Z=0 平面的距离，为元素添加透视效果\n透视效果：近大远小、近实远虚\n属性： ( 添加给父级，取值范围  800-1200)\n \ntransform: translate3d(x, y, z);\ntransform: translateX();\ntransform: translateY();\ntransform: translateZ();\nperspective: 视距 ;"
        }
      ]
    },
    {
      "title": "第2页",
      "level": 1,
      "page": 2,
      "blocks": [
        {
          "type": "text",
          "text": "旋转  \nZ 轴： rotateZ()\nX 轴： rotateX()\nY 轴： rotateY()"
        }
      ]
    },
    {
      "title": "第3页",
      "level": 1,
      "page": 3,
      "blocks": [
        {
          "type": "text",
          "text": "左手法则  \n作用：根据旋转方向确定取值正负\n使用：左手握住旋转轴 , 拇指指向正值方向 , 其他四个手指弯曲方向为旋转正值方向 \nrotate3d- 了解  \nrotate3d(x, y, z, 角度度数 ) ：用来设置自定义旋转轴的位置及旋转的角度\nx ， y ， z 取值为 0-1 之间的数字\n立体呈现  \n作用：设置元素的子元素是位于  3D 空间中还是平面中\n属性名： transform-style\n属性值：\nat ：子级处于平面中\npreserve-3d ：子级处于  3D 空间\n案例 -3d 导航  \n案例步骤："
        }
      ]
    },
    {
      "title": "第4页",
      "level": 1,
      "page": 4,
      "blocks": [
        {
          "type": "text",
          "text": "1. 搭建立方体\n1. 绿色是立方体的前面\n2. 橙色是立方体的上面\n2. 鼠标悬停，立方体旋转\n .nav li {\n  position: relative;\n  width: 100px;\n  height: 40px;\n  line-height: 40px;\n  transition: all 0.5s;\n \n  transform-style: preserve-3d;\n \n  /* 为了看到橙色和绿色的移动过程，给立方体添加旋转  */\n  /* transform: rotateX(-20deg) rotateY(30deg); */\n}\n \n.nav li a {\n  position: absolute;\n  left: 0;\n  top: 0;\n  display: block;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  text-decoration: none;\n  color: #f;\n}\n \n/* 立方体每个面都有独立的坐标轴，互不影响  */\n.nav li a:rst-child {\n  background-color: green;\n  transform: translateZ(20px);"
        }
      ]
    },
    {
      "title": "第5页",
      "level": 1,
      "page": 5,
      "blocks": [
        {
          "type": "text",
          "text": "缩放  \n \n \n02- 动画  \n过渡：实现两个状态间的变化过程\n动画：实现多个状态间的变化过程，动画过程可控（重复播放、最终画面、是否暂停）\n动画实现步骤  \n1. 定义动画\n \n2. 使用动画\n \nanimation 复合属性  \n}\n \n.nav li a:last-child {\n  background-color: orange;\n  transform: rotateX(90deg) translateZ(20px);\n}\n \n.nav li:hover {\n  transform: rotateX(-90deg);\n}\ntransform: scale3d(x, y, z);\ntransform: scaleX();\ntransform: scaleY();\ntransform: scaleZ();\n/* 方式一  */\n@keyframes 动画名称  {\n  from {}\n  to {}\n}\n \n/* 方式二  */\n@keyframes 动画名称  {\n  0% {}\n  10% {}\n  ......\n  100% {}\n}\nanimation: 动画名称  动画花费时长 ;"
        }
      ]
    },
    {
      "title": "第6页",
      "level": 1,
      "page": 6,
      "blocks": [
        {
          "type": "text",
          "text": "提示：\n动画名称和动画时长必须赋值\n取值不分先后顺序\n如果有两个时间值，第一个时间表示动画时长，第二个时间表示延迟时间\nanimation 拆分写法  \n案例 - 走马灯  \nHTML 结构"
        }
      ]
    },
    {
      "title": "第7页",
      "level": 1,
      "page": 7,
      "blocks": [
        {
          "type": "text",
          "text": "CSS 样式\n \n无缝动画原理：复制开头图片到结尾位置（图片累加宽度  = 区域宽度） \n精灵动画  \n核心\n<li><img src=\"./images/1.jpg\" alt=\"\" /></li>\n<li><img src=\"./images/2.jpg\" alt=\"\" /></li>\n<li><img src=\"./images/3.jpg\" alt=\"\" /></li>\n<li><img src=\"./images/4.jpg\" alt=\"\" /></li>\n<li><img src=\"./images/5.jpg\" alt=\"\" /></li>\n<li><img src=\"./images/6.jpg\" alt=\"\" /></li>\n<li><img src=\"./images/7.jpg\" alt=\"\" /></li>\n<!-- 替身：填补显示区域的露白  -->\n<li><img src=\"./images/1.jpg\" alt=\"\" /></li>\n<li><img src=\"./images/2.jpg\" alt=\"\" /></li>\n<li><img src=\"./images/3.jpg\" alt=\"\" /></li>\n.box {\n  width: 600px;\n  height: 112px;\n  border: 5px solid #000;\n  margin: 100px auto;\n  overow: hidden;\n}\n \n.box ul {\n  display: ex;\n  animation: move 6s innite linear;\n}\n \n/* 定义位移动画； ul 使用动画；鼠标悬停暂停动画  */\n@keyframes move {\n  0% {\n    transform: translate(0);\n  }\n  100% {\n    transform: translate(-1400px);\n  }\n}\n \n.box:hover ul {\n  animation-play-state: paused;\n}"
        }
      ]
    },
    {
      "title": "第8页",
      "level": 1,
      "page": 8,
      "blocks": [
        {
          "type": "text",
          "text": "制作步骤\n1. 准备显示区域\n盒子尺寸与一张精灵小图尺寸相同\n2. 定义动画\n移动背景图（移动距离  = 精灵图宽度）\n3. 使用动画\nsteps(N) ， N 与精灵小图个数相同 \n \n多组动画  \n \n \n03- 综合案例 - 全名出游  \ndiv {\n  width: 140px;\n  height: 140px;\n  border: 1px solid #000;\n  background-image: url(./images/bg.png);\n  animation: run 1s steps(12) innite;\n}\n \n@keyframes run {\n  from {\n    background-position: 0 0;\n  }\n  to {\n    background-position: -1680px 0;\n  }\n}\nanimation: \n  动画一 ,\n  动画二 ,\n  ... ...\n;"
        }
      ]
    },
    {
      "title": "第9页",
      "level": 1,
      "page": 9,
      "blocks": [
        {
          "type": "text",
          "text": "背景  \n \n云彩位置和动画  \nHTML 结构\n \nCSS 样式\n \n/* 大背景  */\n/* 默认状态 HTML 和 body 的高度是 0 ，所以导致 cover 缩放背景图不成功  */\nhtml {\n  height: 100%;\n}\nbody {\n  height: 100%;\n  background: url(../images/f1_1.jpg) no-repeat center 0 / cover;\n  /* background-size: cover; */\n}\n<!-- 云  -->\n<div class=\"cloud\">\n  <img src=\"./images/yun1.png\" alt=\"\">\n  <img src=\"./images/yun2.png\" alt=\"\">\n  <img src=\"./images/yun3.png\" alt=\"\">\n</div>\n/* 云  */\n.cloud img {\n  position: absolute;\n  left: 50%;\n}"
        }
      ]
    },
    {
      "title": "第10页",
      "level": 1,
      "page": 10,
      "blocks": [
        {
          "type": "text",
          "text": "文字动画  \nHTML 结构\n \nCSS 样式\n \n \n.cloud img:nth-child(1) {\n  margin-left: -250px;\n  top: 20px;\n  animation: cloud 1s innite alternate linear;\n}\n.cloud img:nth-child(2) {\n  margin-left: 400px;\n  top: 100px;\n  animation: cloud 1s innite alternate linear 0.4s;\n}\n.cloud img:nth-child(3) {\n  margin-left: -550px;\n  top: 200px;\n  animation: cloud 1s innite alternate linear 0.6s;\n}\n \n@keyframes cloud {\n  100% {\n    transform: translate(20px);\n  }\n}\n<!-- 文字  -->\n<div class=\"text\">\n  <img src=\"./images/font1.png\" alt=\"\">\n</div>\n/* 文字  */\n.text img {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  animation: text 1s;\n}\n \n/* 默认  →  小  →  大  →  小  →  默认  */\n@keyframes text {\n  0% {\n    transform: translate(-50%, -50%) scale(1);\n  }\n  20% {\n    transform: translate(-50%, -50%) scale(0.1);\n  }"
        }
      ]
    },
    {
      "title": "第11页",
      "level": 1,
      "page": 11,
      "blocks": [
        {
          "type": "text",
          "text": "40% {\n    transform: translate(-50%, -50%) scale(1.4);\n  }\n  70% {\n    transform: translate(-50%, -50%) scale(0.8);\n  }\n  100% {\n    transform: translate(-50%, -50%) scale(1);\n  }\n}"
        }
      ]
    }
  ]
};
