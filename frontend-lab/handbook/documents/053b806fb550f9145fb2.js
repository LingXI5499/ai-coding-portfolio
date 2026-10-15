window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["053b806fb550f9145fb2"] = {
  "id": "053b806fb550f9145fb2",
  "title": "移动Web第二天.md",
  "treatment": "章节知识与练习",
  "sections": [
    {
      "title": "空间转换简介",
      "trail": [
        "移动 Web 第一天",
        "01-空间转换",
        "空间转换简介"
      ],
      "level": 3,
      "line": 9,
      "blocks": [
        {
          "type": "text",
          "text": "* 空间：是从坐标轴角度定义的 X 、Y 和 Z 三条坐标轴构成了一个立体空间，Z 轴位置与视线方向相同。\n\n* 空间转换也叫 3D转换\n\n* 属性：transform\n\n\n\n[课程配图见原资料]"
        }
      ]
    },
    {
      "title": "平移",
      "trail": [
        "移动 Web 第一天",
        "01-空间转换",
        "平移"
      ],
      "level": 3,
      "line": 25,
      "blocks": [
        {
          "type": "code",
          "language": "css",
          "text": "transform: translate3d(x, y, z);\n\ntransform: translateX();\n\ntransform: translateY();\n\ntransform: translateZ();"
        },
        {
          "type": "text",
          "text": "> 取值与平面转换相同\n\n>\n\n> 默认情况下，Z 轴平移没有效果，原因：电脑屏幕默认是平面，无法显示 Z 轴平移效果"
        }
      ]
    },
    {
      "title": "视距",
      "trail": [
        "移动 Web 第一天",
        "01-空间转换",
        "视距"
      ],
      "level": 3,
      "line": 51,
      "blocks": [
        {
          "type": "text",
          "text": "作用：指定了观察者与 Z=0 平面的距离，为元素添加透视效果\n\n\n\n透视效果：近大远小、近实远虚\n\n\n\n属性：(添加给父级，取值范围 800-1200)"
        },
        {
          "type": "code",
          "language": "css",
          "text": "perspective: 视距;"
        },
        {
          "type": "text",
          "text": "[课程配图见原资料]"
        }
      ]
    },
    {
      "title": "旋转",
      "trail": [
        "移动 Web 第一天",
        "01-空间转换",
        "旋转"
      ],
      "level": 3,
      "line": 79,
      "blocks": [
        {
          "type": "text",
          "text": "* Z 轴：rotateZ()\n\n\n\n[课程配图见原资料]\n\n\n\n* X 轴：rotateX()\n\n\n\n[课程配图见原资料]\n\n\n\n* Y 轴：rotateY()\n\n\n\n[课程配图见原资料]"
        }
      ]
    },
    {
      "title": "左手法则",
      "trail": [
        "移动 Web 第一天",
        "01-空间转换",
        "左手法则"
      ],
      "level": 3,
      "line": 107,
      "blocks": [
        {
          "type": "text",
          "text": "作用：根据旋转方向确定取值正负\n\n\n\n使用：左手握住旋转轴, 拇指指向正值方向, 其他四个手指弯曲方向为旋转正值方向 \n\n\n\n[课程配图见原资料]"
        }
      ]
    },
    {
      "title": "rotate3d-了解",
      "trail": [
        "移动 Web 第一天",
        "01-空间转换",
        "rotate3d-了解"
      ],
      "level": 3,
      "line": 123,
      "blocks": [
        {
          "type": "text",
          "text": "* rotate3d(x, y, z, 角度度数) ：用来设置自定义旋转轴的位置及旋转的角度\n\n* x，y，z 取值为0-1之间的数字"
        }
      ]
    },
    {
      "title": "立体呈现",
      "trail": [
        "移动 Web 第一天",
        "01-空间转换",
        "立体呈现"
      ],
      "level": 3,
      "line": 133,
      "blocks": [
        {
          "type": "text",
          "text": "作用：设置元素的子元素是位于 3D 空间中还是平面中\n\n\n\n属性名：transform-style\n\n\n\n属性值：\n\n\n\n* flat：子级处于平面中\n\n* preserve-3d：子级处于 3D 空间"
        }
      ]
    },
    {
      "title": "案例-3d导航",
      "trail": [
        "移动 Web 第一天",
        "01-空间转换",
        "案例-3d导航"
      ],
      "level": 3,
      "line": 155,
      "blocks": [
        {
          "type": "text",
          "text": "[课程配图见原资料]\n\n\n\n案例步骤：\n\n\n\n1. 搭建立方体\n\n   1. 绿色是立方体的前面\n\n   2. 橙色是立方体的上面\n\n2. 鼠标悬停，立方体旋转\n\n\n\n[课程配图见原资料]\n\n\n\n[课程配图见原资料]"
        },
        {
          "type": "code",
          "language": "css",
          "text": ".nav li {\n  position: relative;\n\n  width: 100px;\n\n  height: 40px;\n\n  line-height: 40px;\n\n  transition: all 0.5s;\n\n  transform-style: preserve-3d;\n\n  /* 为了看到橙色和绿色的移动过程，给立方体添加旋转 */\n\n  /* transform: rotateX(-20deg) rotateY(30deg); */\n}\n\n.nav li a {\n  position: absolute;\n\n  left: 0;\n\n  top: 0;\n\n  display: block;\n\n  width: 100%;\n\n  height: 100%;\n\n  text-align: center;\n\n  text-decoration: none;\n\n  color: #fff;\n}\n\n/* 立方体每个面都有独立的坐标轴，互不影响 */\n\n.nav li a:first-child {\n  background-color: green;\n\n  transform: translateZ(20px);\n}\n\n.nav li a:last-child {\n  background-color: orange;\n\n  transform: rotateX(90deg) translateZ(20px);\n}\n\n.nav li:hover {\n  transform: rotateX(-90deg);\n}"
        }
      ]
    },
    {
      "title": "缩放",
      "trail": [
        "移动 Web 第一天",
        "01-空间转换",
        "缩放"
      ],
      "level": 3,
      "line": 269,
      "blocks": [
        {
          "type": "code",
          "language": "css",
          "text": "transform: scale3d(x, y, z);\n\ntransform: scaleX();\n\ntransform: scaleY();\n\ntransform: scaleZ();"
        }
      ]
    },
    {
      "title": "02-动画",
      "trail": [
        "移动 Web 第一天",
        "02-动画"
      ],
      "level": 2,
      "line": 291,
      "blocks": [
        {
          "type": "text",
          "text": "* 过渡：实现两个状态间的变化过程\n\n* 动画：实现多个状态间的变化过程，动画过程可控（重复播放、最终画面、是否暂停）"
        }
      ]
    },
    {
      "title": "动画实现步骤",
      "trail": [
        "移动 Web 第一天",
        "02-动画",
        "动画实现步骤"
      ],
      "level": 3,
      "line": 301,
      "blocks": [
        {
          "type": "text",
          "text": "1. 定义动画"
        },
        {
          "type": "code",
          "language": "css",
          "text": "/* 方式一 */\n\n@keyframes 动画名称 {\n    from {\n  }\n\n    to {\n  }\n}\n\n/* 方式二 */\n\n@keyframes 动画名称 {\n    0% {\n  }\n\n    10% {\n  }\n\n    ......   100% {\n  }\n}"
        },
        {
          "type": "text",
          "text": "2. 使用动画"
        },
        {
          "type": "code",
          "language": "css",
          "text": "animation: 动画名称 动画花费时长;"
        }
      ]
    },
    {
      "title": "animation复合属性",
      "trail": [
        "移动 Web 第一天",
        "02-动画",
        "animation复合属性"
      ],
      "level": 3,
      "line": 353,
      "blocks": [
        {
          "type": "text",
          "text": "[课程配图见原资料]\n\n\n\n提示：\n\n\n\n* 动画名称和动画时长必须赋值\n\n* 取值不分先后顺序\n\n* 如果有两个时间值，第一个时间表示动画时长，第二个时间表示延迟时间"
        }
      ]
    },
    {
      "title": "animation拆分写法",
      "trail": [
        "移动 Web 第一天",
        "02-动画",
        "animation拆分写法"
      ],
      "level": 3,
      "line": 373,
      "blocks": [
        {
          "type": "text",
          "text": "[课程配图见原资料]"
        }
      ]
    },
    {
      "title": "案例-走马灯",
      "trail": [
        "移动 Web 第一天",
        "02-动画",
        "案例-走马灯"
      ],
      "level": 3,
      "line": 381,
      "blocks": [
        {
          "type": "text",
          "text": "[课程配图见原资料]\n\n\n\n* HTML 结构"
        },
        {
          "type": "code",
          "language": "html",
          "text": "<li><img src=\"./images/1.jpg\" alt=\"\" /></li>\n\n<li><img src=\"./images/2.jpg\" alt=\"\" /></li>\n\n<li><img src=\"./images/3.jpg\" alt=\"\" /></li>\n\n<li><img src=\"./images/4.jpg\" alt=\"\" /></li>\n\n<li><img src=\"./images/5.jpg\" alt=\"\" /></li>\n\n<li><img src=\"./images/6.jpg\" alt=\"\" /></li>\n\n<li><img src=\"./images/7.jpg\" alt=\"\" /></li>\n\n<!-- 替身：填补显示区域的露白 -->\n\n<li><img src=\"./images/1.jpg\" alt=\"\" /></li>\n\n<li><img src=\"./images/2.jpg\" alt=\"\" /></li>\n\n<li><img src=\"./images/3.jpg\" alt=\"\" /></li>"
        },
        {
          "type": "text",
          "text": "* CSS 样式"
        },
        {
          "type": "code",
          "language": "css",
          "text": ".box {\n  width: 600px;\n\n  height: 112px;\n\n  border: 5px solid #000;\n\n  margin: 100px auto;\n\n  overflow: hidden;\n}\n\n.box ul {\n  display: flex;\n\n  animation: move 6s infinite linear;\n}\n\n/* 定义位移动画；ul使用动画；鼠标悬停暂停动画 */\n\n@keyframes move {\n  0% {\n    transform: translate(0);\n  }\n\n  100% {\n    transform: translate(-1400px);\n  }\n}\n\n.box:hover ul {\n  animation-play-state: paused;\n}"
        },
        {
          "type": "text",
          "text": "> 无缝动画原理：复制开头图片到结尾位置（图片累加宽度 = 区域宽度）"
        }
      ]
    },
    {
      "title": "精灵动画",
      "trail": [
        "移动 Web 第一天",
        "02-动画",
        "精灵动画"
      ],
      "level": 3,
      "line": 487,
      "blocks": [
        {
          "type": "text",
          "text": "* 核心\n\n\n\n[课程配图见原资料]\n\n\n\n* 制作步骤\n\n\n\n  1.准备显示区域\n\n\n\n  盒子尺寸与一张精灵小图尺寸相同\n\n\n\n  2.定义动画\n\n\n\n  移动背景图（移动距离 = 精灵图宽度）\n\n\n\n  3.使用动画\n\n\n\n  steps(N)，N 与精灵小图个数相同"
        },
        {
          "type": "code",
          "language": "css",
          "text": "div {\n  width: 140px;\n\n  height: 140px;\n\n  border: 1px solid #000;\n\n  background-image: url(./images/bg.png);\n\n  animation: run 1s steps(12) infinite;\n}\n\n@keyframes run {\n  from {\n    background-position: 0 0;\n  }\n\n  to {\n    background-position: -1680px 0;\n  }\n}"
        }
      ]
    },
    {
      "title": "多组动画",
      "trail": [
        "移动 Web 第一天",
        "02-动画",
        "多组动画"
      ],
      "level": 3,
      "line": 565,
      "blocks": [
        {
          "type": "code",
          "language": "css",
          "text": "animation:\n    动画一,\n    动画二,\n  ......;"
        }
      ]
    },
    {
      "title": "03-综合案例-全名出游",
      "trail": [
        "移动 Web 第一天",
        "03-综合案例-全名出游"
      ],
      "level": 2,
      "line": 589,
      "blocks": [
        {
          "type": "text",
          "text": "[课程配图见原资料]"
        }
      ]
    },
    {
      "title": "背景",
      "trail": [
        "移动 Web 第一天",
        "03-综合案例-全名出游",
        "背景"
      ],
      "level": 3,
      "line": 597,
      "blocks": [
        {
          "type": "code",
          "language": "css",
          "text": "/* 大背景 */\n\n/* 默认状态HTML和body的高度是0，所以导致cover缩放背景图不成功 */\n\nhtml {\n  height: 100%;\n}\n\nbody {\n  height: 100%;\n\n  background: url(../images/f1_1.jpg) no-repeat center 0 / cover;\n\n  /* background-size: cover; */\n}"
        }
      ]
    },
    {
      "title": "云彩位置和动画",
      "trail": [
        "移动 Web 第一天",
        "03-综合案例-全名出游",
        "云彩位置和动画"
      ],
      "level": 3,
      "line": 627,
      "blocks": [
        {
          "type": "text",
          "text": "* HTML 结构"
        },
        {
          "type": "code",
          "language": "html",
          "text": "<!-- 云 -->\n\n<div class=\"cloud\">\n  <img src=\"./images/yun1.png\" alt=\"\" />\n\n  <img src=\"./images/yun2.png\" alt=\"\" />\n\n  <img src=\"./images/yun3.png\" alt=\"\" />\n</div>"
        },
        {
          "type": "text",
          "text": "* CSS 样式"
        },
        {
          "type": "code",
          "language": "css",
          "text": "/* 云 */\n\n.cloud img {\n  position: absolute;\n\n  left: 50%;\n}\n\n.cloud img:nth-child(1) {\n  margin-left: -250px;\n\n  top: 20px;\n\n  animation: cloud 1s infinite alternate linear;\n}\n\n.cloud img:nth-child(2) {\n  margin-left: 400px;\n\n  top: 100px;\n\n  animation: cloud 1s infinite alternate linear 0.4s;\n}\n\n.cloud img:nth-child(3) {\n  margin-left: -550px;\n\n  top: 200px;\n\n  animation: cloud 1s infinite alternate linear 0.6s;\n}\n\n@keyframes cloud {\n  100% {\n    transform: translate(20px);\n  }\n}"
        }
      ]
    },
    {
      "title": "文字动画",
      "trail": [
        "移动 Web 第一天",
        "03-综合案例-全名出游",
        "文字动画"
      ],
      "level": 3,
      "line": 717,
      "blocks": [
        {
          "type": "text",
          "text": "* HTML 结构"
        },
        {
          "type": "code",
          "language": "html",
          "text": "<!-- 文字 -->\n\n<div class=\"text\">\n  <img src=\"./images/font1.png\" alt=\"\" />\n</div>"
        },
        {
          "type": "text",
          "text": "* CSS 样式"
        },
        {
          "type": "code",
          "language": "css",
          "text": "/* 文字 */\n\n.text img {\n  position: absolute;\n\n  left: 50%;\n\n  top: 50%;\n\n  transform: translate(-50%, -50%);\n\n  animation: text 1s;\n}\n\n/* 默认 → 小 → 大 → 小 → 默认 */\n\n@keyframes text {\n  0% {\n    transform: translate(-50%, -50%) scale(1);\n  }\n\n  20% {\n    transform: translate(-50%, -50%) scale(0.1);\n  }\n\n  40% {\n    transform: translate(-50%, -50%) scale(1.4);\n  }\n\n  70% {\n    transform: translate(-50%, -50%) scale(0.8);\n  }\n\n  100% {\n    transform: translate(-50%, -50%) scale(1);\n  }\n}"
        }
      ]
    }
  ]
};
