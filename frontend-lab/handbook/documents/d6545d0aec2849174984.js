window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["d6545d0aec2849174984"] = {
  "id": "d6545d0aec2849174984",
  "title": "移动web第一天.md",
  "treatment": "章节知识与练习",
  "sections": [
    {
      "title": "移动 Web 第一天",
      "trail": [
        "移动 Web 第一天"
      ],
      "level": 1,
      "line": 1,
      "blocks": [
        {
          "type": "text",
          "text": "> 目标：使用位移、缩放、旋转、渐变效果丰富网页元素的呈现方式。"
        }
      ]
    },
    {
      "title": "简介",
      "trail": [
        "移动 Web 第一天",
        "01-平面转换",
        "简介"
      ],
      "level": 3,
      "line": 13,
      "blocks": [
        {
          "type": "text",
          "text": "作用：为元素添加动态效果，一般与过渡配合使用\n\n\n\n概念：改变盒子在平面内的形态（位移、旋转、缩放、倾斜）\n\n\n\n[课程配图见原资料]\n\n\n\n平面转换也叫 2D 转换，属性是 **transform**"
        }
      ]
    },
    {
      "title": "平移",
      "trail": [
        "移动 Web 第一天",
        "01-平面转换",
        "平移"
      ],
      "level": 3,
      "line": 33,
      "blocks": [
        {
          "type": "code",
          "language": "css",
          "text": "transform: translate(X轴移动距离, Y轴移动距离);"
        },
        {
          "type": "text",
          "text": "* 取值\n\n  * 像素单位数值\n\n  * 百分比（参照**盒子自身尺寸**计算结果）\n\n  * **正负**均可\n\n* 技巧\n\n  * translate() **只写一个值**，表示沿着 **X** 轴移动\n\n  * 单独设置 X 或 Y 轴移动距离：translateX() 或 translateY()"
        }
      ]
    },
    {
      "title": "定位居中",
      "trail": [
        "移动 Web 第一天",
        "01-平面转换",
        "定位居中"
      ],
      "level": 3,
      "line": 61,
      "blocks": [
        {
          "type": "text",
          "text": "* 方法一：margin\n\n\n\n[课程配图见原资料]\n\n\n\n* 方法二：平移 → 百分比参照盒子自身尺寸计算结果 \n\n\n\n[课程配图见原资料]"
        }
      ]
    },
    {
      "title": "案例-双开门",
      "trail": [
        "移动 Web 第一天",
        "01-平面转换",
        "案例-双开门"
      ],
      "level": 3,
      "line": 81,
      "blocks": [
        {
          "type": "text",
          "text": "[课程配图见原资料]\n\n\n\n* HTML 结构"
        },
        {
          "type": "code",
          "language": "html",
          "text": "<div class=\"father\">\n  <div class=\"left\"></div>\n\n  <div class=\"right\"></div>\n</div>"
        },
        {
          "type": "text",
          "text": "* CSS 样式"
        },
        {
          "type": "code",
          "language": "css",
          "text": "* {\n  margin: 0;\n\n  padding: 0;\n}\n\n/* 1. 布局：父子结构，父级是大图，子级是左右小图 */\n\n.father {\n  display: flex;\n\n  margin: 0 auto;\n\n  width: 1366px;\n\n  height: 600px;\n\n  background-image: url(./images/bg.jpg);\n\n  overflow: hidden;\n}\n\n.father .left,\n.father .right {\n  width: 50%;\n\n  height: 600px;\n\n  background-image: url(./images/fm.jpg);\n\n  transition: all 0.5s;\n}\n\n.father .right {\n  /* right 表示的取到精灵图右面的图片 */\n\n  background-position: right 0;\n}\n\n/* 2. 鼠标悬停的效果：左右移动 */\n\n.father:hover .left {\n  transform: translate(-100%);\n}\n\n.father:hover .right {\n  transform: translateX(100%);\n}"
        }
      ]
    },
    {
      "title": "旋转",
      "trail": [
        "移动 Web 第一天",
        "01-平面转换",
        "旋转"
      ],
      "level": 3,
      "line": 193,
      "blocks": [
        {
          "type": "code",
          "language": "css",
          "text": "transform: rotate(旋转角度);"
        },
        {
          "type": "text",
          "text": "* 取值：角度单位是 **deg** \n\n* 技巧\n\n  * 取值正负均可\n\n  * 取值为正，顺时针旋转\n\n  * 取值为负，逆时针旋转"
        }
      ]
    },
    {
      "title": "转换原点",
      "trail": [
        "移动 Web 第一天",
        "01-平面转换",
        "转换原点"
      ],
      "level": 3,
      "line": 217,
      "blocks": [
        {
          "type": "text",
          "text": "> 默认情况下，转换原点是盒子中心点"
        },
        {
          "type": "code",
          "language": "css",
          "text": "transform-origin: 水平原点位置 垂直原点位置;"
        },
        {
          "type": "text",
          "text": "取值：\n\n\n\n* **方位名词**（left、top、right、bottom、center）\n\n* 像素单位数值\n\n* 百分比"
        }
      ]
    },
    {
      "title": "案例-时钟",
      "trail": [
        "移动 Web 第一天",
        "01-平面转换",
        "案例-时钟"
      ],
      "level": 3,
      "line": 245,
      "blocks": [
        {
          "type": "text",
          "text": "[课程配图见原资料]"
        },
        {
          "type": "code",
          "language": "css",
          "text": ".hour {\n  width: 6px;\n\n  height: 50px;\n\n  background-color: #333;\n\n  margin-left: -3px;\n\n  transform: rotate(15deg);\n\n  transform-origin: center bottom;\n}\n\n.minute {\n  width: 5px;\n\n  height: 65px;\n\n  background-color: #333;\n\n  margin-left: -3px;\n\n  transform: rotate(90deg);\n\n  transform-origin: center bottom;\n}\n\n.second {\n  width: 4px;\n\n  height: 80px;\n\n  background-color: red;\n\n  margin-left: -2px;\n\n  transform: rotate(240deg);\n\n  transform-origin: center bottom;\n}"
        }
      ]
    },
    {
      "title": "多重转换",
      "trail": [
        "移动 Web 第一天",
        "01-平面转换",
        "多重转换"
      ],
      "level": 3,
      "line": 311,
      "blocks": [
        {
          "type": "text",
          "text": "多重转换技巧：先平移再旋转"
        },
        {
          "type": "code",
          "language": "css",
          "text": "transform: translate() rotate();"
        },
        {
          "type": "text",
          "text": "* 多重转换原理：以第一种转换方式坐标轴为准转换形态\n\n  * 旋转会改变网页元素的坐标轴向\n\n  * 先写旋转，则后面的转换效果的轴向以旋转后的轴向为准，会影响转换结果"
        }
      ]
    },
    {
      "title": "缩放",
      "trail": [
        "移动 Web 第一天",
        "01-平面转换",
        "缩放"
      ],
      "level": 3,
      "line": 335,
      "blocks": [
        {
          "type": "code",
          "language": "css",
          "text": "transform: scale(缩放倍数);\n\ntransform: scale(X轴缩放倍数, Y轴缩放倍数);"
        },
        {
          "type": "text",
          "text": "* 技巧\n\n  * 通常，只为 scale() 设置一个值，表示 X 轴和 Y 轴等比例缩放\n\n  * 取值大于1表示放大，取值小于1表示缩小"
        }
      ]
    },
    {
      "title": "案例-播放特效",
      "trail": [
        "移动 Web 第一天",
        "01-平面转换",
        "案例-播放特效"
      ],
      "level": 3,
      "line": 357,
      "blocks": [
        {
          "type": "text",
          "text": "[课程配图见原资料]\n\n\n\n* CSS 样式"
        },
        {
          "type": "code",
          "language": "css",
          "text": "/* 1. 摆放播放按钮：图片区域的中间 */\n\n.box li {\n  overflow: hidden;\n}\n\n.pic {\n  position: relative;\n}\n\n.pic::after {\n  position: absolute;\n\n  left: 50%;\n\n  top: 50%;\n\n  /* margin-left: -29px;\n\n  margin-top: -29px; */\n\n  /* transform: translate(-50%, -50%); */\n\n  content: '';\n\n  width: 58px;\n\n  height: 58px;\n\n  background-image: url(./images/play.png);\n\n  transform: translate(-50%, -50%) scale(5);\n\n  opacity: 0;\n\n  transition: all 0.5s;\n}\n\n/* 2. hover效果：大按钮，看不见：透明是0 → 小按钮，看得见：透明度1 */\n\n.box li:hover .pic::after {\n  transform: translate(-50%, -50%) scale(1);\n\n  opacity: 1;\n}"
        }
      ]
    },
    {
      "title": "倾斜",
      "trail": [
        "移动 Web 第一天",
        "01-平面转换",
        "倾斜"
      ],
      "level": 3,
      "line": 437,
      "blocks": [
        {
          "type": "code",
          "language": "css",
          "text": "transform: skew();"
        },
        {
          "type": "text",
          "text": "取值：角度度数 deg"
        }
      ]
    },
    {
      "title": "02-渐变",
      "trail": [
        "移动 Web 第一天",
        "02-渐变"
      ],
      "level": 2,
      "line": 453,
      "blocks": [
        {
          "type": "text",
          "text": "渐变是多个颜色逐渐变化的效果，一般用于设置盒子背景 \n\n\n\n分类：\n\n\n\n* 线性渐变\n\n\n\n[课程配图见原资料]\n\n\n\n* 径向渐变\n\n\n\n[课程配图见原资料]"
        }
      ]
    },
    {
      "title": "线性渐变",
      "trail": [
        "移动 Web 第一天",
        "02-渐变",
        "线性渐变"
      ],
      "level": 3,
      "line": 481,
      "blocks": [
        {
          "type": "code",
          "language": "css",
          "text": "background-image: linear-gradient(\n    渐变方向,\n\n    颜色1 终点位置,\n\n    颜色2 终点位置,\n\n    ......\n);"
        },
        {
          "type": "text",
          "text": "取值：\n\n\n\n* 渐变方向：可选\n\n  * to 方位名词\n\n  * 角度度数\n\n* 终点位置：可选\n\n  * 百分比"
        }
      ]
    },
    {
      "title": "案例-产品展示",
      "trail": [
        "移动 Web 第一天",
        "02-渐变",
        "案例-产品展示"
      ],
      "level": 3,
      "line": 519,
      "blocks": [
        {
          "type": "text",
          "text": "[课程配图见原资料]\n\n\n\n* HTML 结构"
        },
        {
          "type": "code",
          "language": "html",
          "text": "<div class=\"box\">\n  <img src=\"./images/product.jpeg\" alt=\"\" />\n\n  <div class=\"title\">OceanStor Pacific 海量存储斩获2021 Interop金奖</div>\n\n  <div class=\"mask\"></div>\n</div>"
        },
        {
          "type": "text",
          "text": "* CSS 样式"
        },
        {
          "type": "code",
          "language": "css",
          "text": ".mask {\n  position: absolute;\n\n  left: 0;\n\n  top: 0;\n\n  width: 100%;\n\n  height: 100%;\n\n  background-image: linear-gradient(transparent, rgba(0, 0, 0, 0.5));\n\n  opacity: 0;\n\n  transition: all 0.5s;\n}\n\n.box:hover .mask {\n  opacity: 1;\n}"
        }
      ]
    },
    {
      "title": "径向渐变",
      "trail": [
        "移动 Web 第一天",
        "02-渐变",
        "径向渐变"
      ],
      "level": 3,
      "line": 593,
      "blocks": [
        {
          "type": "code",
          "language": "css",
          "text": "background-image: radial-gradient(\n    半径 at 圆心位置,\n\n    颜色1 终点位置,\n\n    颜色2 终点位置,\n\n    ......\n);"
        },
        {
          "type": "text",
          "text": "取值：\n\n\n\n* 半径可以是2条，则为椭圆\n\n* 圆心位置取值：像素单位数值 / 百分比 / 方位名词"
        }
      ]
    },
    {
      "title": "03-综合案例",
      "trail": [
        "移动 Web 第一天",
        "03-综合案例"
      ],
      "level": 2,
      "line": 625,
      "blocks": [
        {
          "type": "text",
          "text": "[课程配图见原资料]"
        }
      ]
    },
    {
      "title": "箭头旋转",
      "trail": [
        "移动 Web 第一天",
        "03-综合案例",
        "导航-频道",
        "箭头旋转"
      ],
      "level": 4,
      "line": 637,
      "blocks": [
        {
          "type": "code",
          "language": "css",
          "text": ".x-header-nav .nav-item:hover .icon-down {\n  transform: rotate(-180deg);\n}"
        }
      ]
    },
    {
      "title": "频道列表",
      "trail": [
        "移动 Web 第一天",
        "03-综合案例",
        "导航-频道",
        "频道列表"
      ],
      "level": 4,
      "line": 653,
      "blocks": [
        {
          "type": "code",
          "language": "css",
          "text": ".channel-layer {\n  position: absolute;\n\n  top: 60px;\n\n  left: 50%;\n\n  z-index: -2;\n\n  width: 1080px;\n\n  height: 120px;\n\n  padding: 10px;\n\n  margin-left: -540px;\n\n  color: #72727b;\n\n  background-color: #f5f5f5;\n\n  border: 1px solid #e4e4e4;\n\n  border-top: none;\n\n  transition: all 0.5s;\n\n  transform: translateY(-120px);\n}\n\n/* TODO 2. 弹窗频道 */\n\n.x-header-nav .nav-item:hover .channel-layer {\n  transform: translateY(0);\n}"
        }
      ]
    },
    {
      "title": "搜索按钮",
      "trail": [
        "移动 Web 第一天",
        "03-综合案例",
        "渐变按钮",
        "搜索按钮"
      ],
      "level": 4,
      "line": 709,
      "blocks": [
        {
          "type": "code",
          "language": "css",
          "text": ".x-header-search form .btn {\n  position: absolute;\n\n  top: 0;\n\n  right: 0;\n\n  width: 60px;\n\n  height: 40px;\n\n  line-height: 40px;\n\n  text-align: center;\n\n  background-color: #f86442;\n\n  border-top-right-radius: 20px;\n\n  border-bottom-right-radius: 20px;\n\n  background-image: linear-gradient(\n    to right,\n\n    rgba(255, 255, 255, 0.3),\n    #f86442\n  );\n}"
        }
      ]
    },
    {
      "title": "登录按钮",
      "trail": [
        "移动 Web 第一天",
        "03-综合案例",
        "渐变按钮",
        "登录按钮"
      ],
      "level": 4,
      "line": 753,
      "blocks": [
        {
          "type": "code",
          "language": "css",
          "text": "/* TODO 7. 渐变按钮 */\n\n.card .card-info .login {\n  padding: 3px 34px;\n\n  color: #fff;\n\n  background-color: #ff7251;\n\n  border-radius: 30px;\n\n  box-shadow: 0 4px 8px 0 rgb(252 88 50 / 50%);\n\n  background-image: linear-gradient(\n    to right,\n\n    rgba(255, 255, 255, 0.2),\n    #ff7251\n  );\n}"
        }
      ]
    },
    {
      "title": "客户端按钮",
      "trail": [
        "移动 Web 第一天",
        "03-综合案例",
        "渐变按钮",
        "客户端按钮"
      ],
      "level": 4,
      "line": 789,
      "blocks": [
        {
          "type": "code",
          "language": "css",
          "text": "/* TODO 8. 径向渐变 */\n\n.download .dl .dl-btn {\n  width: 68px;\n\n  height: 34px;\n\n  line-height: 34px;\n\n  color: #fff;\n\n  text-align: center;\n\n  border-radius: 4px;\n\n  background-image: radial-gradient(\n    50px at 10px 10px,\n\n    rgba(255, 255, 255, 0.5),\n    transparent\n  );\n}"
        }
      ]
    },
    {
      "title": "轮播图",
      "trail": [
        "移动 Web 第一天",
        "03-综合案例",
        "轮播图"
      ],
      "level": 3,
      "line": 827,
      "blocks": [
        {
          "type": "code",
          "language": "css",
          "text": "/* TODO 4. 摆放图片 */\n\n.banner .banner-list .banner-item.left {\n  z-index: 0;\n\n  transform: translate(-160px) scale(0.8);\n\n  transform-origin: left center;\n}\n\n.banner .banner-list .banner-item.right {\n  z-index: 0;\n\n  transform: translate(160px) scale(0.8);\n\n  transform-origin: right center;\n}"
        }
      ]
    },
    {
      "title": "猜你喜欢",
      "trail": [
        "移动 Web 第一天",
        "03-综合案例",
        "猜你喜欢"
      ],
      "level": 3,
      "line": 861,
      "blocks": [
        {
          "type": "code",
          "language": "css",
          "text": "/* TODO 5. 播放按钮和遮罩 */\n\n.album-item .album-item-box::after {\n  position: absolute;\n\n  left: 0;\n\n  top: 0;\n\n  content: '';\n\n  width: 100%;\n\n  height: 100%;\n\n  background: rgba(0, 0, 0, 0.5) url(../assets/play.png) no-repeat center / 20px;\n\n  opacity: 0;\n\n  transition: all 0.5s;\n}\n\n.album-item .album-item-box:hover::after {\n  opacity: 1;\n\n  background-size: 50px;\n}\n\n/* TODO 6. 图片缩放 */\n\n.album-item .album-item-box:hover img {\n  transform: scale(1.1);\n}"
        }
      ]
    }
  ]
};
