window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["696973ccd2e496a83653"] = {
  "id": "696973ccd2e496a83653",
  "title": "移动Web-day02.pdf",
  "treatment": "课件页级文本（配图回溯原件）",
  "sections": [
    {
      "title": "第1页",
      "level": 1,
      "page": 1,
      "blocks": [
        {
          "type": "text",
          "text": "移动 Web 第二天\n空间转换、动画"
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
          "text": "空间转换1"
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
          "text": "l  空间：是从坐标轴角度定义的 X 、Y 和 Z 三条坐标轴构成了一个立体空间，Z 轴位置与视线方向相同。\nl  空间转换也叫 3D转换\nl  属性：transform\n空间转换"
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
          "text": "l 属性\nl 取值（正负均可）\nu 像素单位数值\nu 百分比（参照盒子自身尺寸计算结果）\nl 提示\nl 默认情况下，Z 轴平移没有效果\n空间转换 – 平移\ntransform: translate3d(x, y, z);\ntransform: translateX();\ntransform: translateY();\ntransform: translateZ();"
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
          "text": "作用：指定了观察者与 Z=0 平面的距离，为元素添加透视效果\n透视效果：近大远小、近实远虚\n属性：(添加给父级，取值范围 800-1200)\n视距 perspective\nperspective: 视距;"
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
          "text": "l transform: rotateZ(值);\nl transform: rotateX(值);\nl transform: rotateY(值);\n空间 – 旋转"
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
          "text": "l 左手法则 – 根据旋转方向确定取值正负\n左手握住旋转轴, 拇指指向正值方向, 其他四个手指弯曲方向为旋转正值方向\n空间 – 旋转"
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
          "text": "l 拓展\nØ rotate3d(x, y, z, 角度度数) ：用来设置自定义旋转轴的位置及旋转的角度\nØ x，y，z 取值为0-1之间的数字\n空间 – 旋转"
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
          "text": "作用：设置元素的子元素是位于 3D 空间中还是平面中\n属性名：transform-style\n属性值：\np flat：子级处于平面中\np preserve-3d：子级处于 3D 空间\n立体呈现 – transform-style"
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
          "text": "l 呈现立体图形步骤\n1. 父元素添加transform-style: preserve-3d；\n2. 子级定位\n3. 调整子盒子的位置（位移或旋转）\nl 提示\nl 空间内，转换元素都有自已独立的坐标轴，互不干扰\n立体呈现 – transform-style"
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
          "text": "案例\n 案例 – 3D 导航\n1. 搭建立方体\n• 绿色是立方体的前面\n• 橙色是立方体的上面\n2. 添加鼠标悬停的旋转效果"
        }
      ]
    },
    {
      "title": "第12页",
      "level": 1,
      "page": 12,
      "blocks": [
        {
          "type": "text",
          "text": "案例\n 案例 – 3D 导航\n定位 橙色旋转（X） 橙色位移（Z） 绿色位移（Z）"
        }
      ]
    },
    {
      "title": "第13页",
      "level": 1,
      "page": 13,
      "blocks": [
        {
          "type": "text",
          "text": "l 属性\n空间转换 – 缩放\ntransform: scale3d(x, y, z);\ntransform: scaleX();\ntransform: scaleY();\ntransform: scaleZ();"
        }
      ]
    },
    {
      "title": "第14页",
      "level": 1,
      "page": 14,
      "blocks": [
        {
          "type": "text",
          "text": "动画2"
        }
      ]
    },
    {
      "title": "第15页",
      "level": 1,
      "page": 15,
      "blocks": [
        {
          "type": "text",
          "text": "l 过渡：实现两个状态间的变化过程\nl 动画：实现多个状态间的变化过程，动画过程可控（重复播放、最终画面、是否暂停）\n动画 - animation"
        }
      ]
    },
    {
      "title": "第16页",
      "level": 1,
      "page": 16,
      "blocks": [
        {
          "type": "text",
          "text": "l 实现步骤\n1. 定义动画\n2. 使用动画\n动画 - animation\n@keyframes 动画名称 {\n  from {}\n  to {}\n}\n@keyframes 动画名称 {\n  0% {}\n  10% {}\n  ......\n  100% {}\n}\nanimation: 动画名称 动画花费时长;"
        }
      ]
    },
    {
      "title": "第17页",
      "level": 1,
      "page": 17,
      "blocks": [
        {
          "type": "text",
          "text": "提示：\nl 动画名称和动画时长必须赋值\nl 取值不分先后顺序\nl 如果有两个时间值，第一个时间表示动画时长，第二个时间表示延迟时间\n动画 - animation"
        }
      ]
    },
    {
      "title": "第18页",
      "level": 1,
      "page": 18,
      "blocks": [
        {
          "type": "text",
          "text": "动画 - animation\n属性 作用 取值\nanimation-name 动画名称\nanimation-duration 动画时长\nanimation-delay 延迟时间\nanimation-fill-mode 动画执行完毕时状态 forwards：最后一帧状态\nbackwards：第一帧状态\nanimation-timing-function 速度曲线 steps(数字)：逐帧动画\nanimation-iteration-count 重复次数 infinite为无限循环\nanimation-direction 动画执行方向 alternate为反向\nanimation-play-state 暂停动画 paused为暂停，通常配合:hover使用"
        }
      ]
    },
    {
      "title": "第19页",
      "level": 1,
      "page": 19,
      "blocks": [
        {
          "type": "text",
          "text": "案例\n 走马灯效果\nl 列表添加动画效果\nl 鼠标移入区域，列表动画暂停"
        }
      ]
    },
    {
      "title": "第20页",
      "level": 1,
      "page": 20,
      "blocks": [
        {
          "type": "text",
          "text": "案例 – 走马灯效果\nl 无缝动画原理：复制开头图片到结尾位置（图片累加宽度 = 区域宽度）\n1 2 3 4 5 6 7"
        }
      ]
    },
    {
      "title": "第21页",
      "level": 1,
      "page": 21,
      "blocks": [
        {
          "type": "text",
          "text": "动画 – 逐帧动画\n属性 作用 取值\nanimation-timing-function 速度曲线 steps(数字)：逐帧动画\n补间动画 逐帧动画"
        }
      ]
    },
    {
      "title": "第22页",
      "level": 1,
      "page": 22,
      "blocks": [
        {
          "type": "text",
          "text": "案例\n 逐帧动画\n核心原理：\n1. steps() 逐帧动画\n2. CSS 精灵图\n精灵动画制作步骤\n1. 准备显示区域\n盒子尺寸与一张精灵小图尺寸相同\n2. 定义动画\n移动背景图（移动距离 = 精灵图宽度）\n3. 使用动画\nsteps(N)，N 与精灵小图个数相同"
        }
      ]
    },
    {
      "title": "第23页",
      "level": 1,
      "page": 23,
      "blocks": [
        {
          "type": "text",
          "text": "动画 – 多组动画\nanimation: \n  run 1s steps(12) infinite,\n  move 3s linear forwards\n;"
        }
      ]
    },
    {
      "title": "第24页",
      "level": 1,
      "page": 24,
      "blocks": [
        {
          "type": "text",
          "text": "案例\n 全民出游"
        }
      ]
    }
  ]
};
