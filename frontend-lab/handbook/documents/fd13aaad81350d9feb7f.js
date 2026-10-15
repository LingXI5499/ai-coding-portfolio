window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["fd13aaad81350d9feb7f"] = {
  "id": "fd13aaad81350d9feb7f",
  "title": "移动web第一天.pdf",
  "treatment": "课件页级文本（配图回溯原件）",
  "sections": [
    {
      "title": "第1页",
      "level": 1,
      "page": 1,
      "blocks": [
        {
          "type": "text",
          "text": "移动  Web 第一天  \n目标：使用位移、缩放、旋转、渐变效果丰富网页元素的呈现方式。\n01- 平面转换  \n简介  \n作用：为元素添加动态效果，一般与过渡配合使用\n概念：改变盒子在平面内的形态（位移、旋转、缩放、倾斜）\n平面转换也叫  2D 转换，属性是  transform\n平移  \n \n取值\n像素单位数值\n百分比（参照盒子自身尺寸计算结果）\n正负均可\n技巧\ntranslate() 只写一个值，表示沿着  X 轴移动\n单独设置  X 或  Y 轴移动距离： translateX() 或  translateY()\n定位居中  \n方法一： margin\ntransform: translate(X轴移动距离 , Y轴移动距离 );"
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
          "text": "方法二：平移  →  百分比参照盒子自身尺寸计算结果 \n案例 - 双开门  \nHTML 结构\n \nCSS 样式\n \n<div class=\"father\">\n    <div class=\"left\"></div>\n    <div class=\"right\"></div>\n</div>\n* {"
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
          "text": "旋转  \n \n取值：角度单位是  deg \n技巧\n取值正负均可\n取值为正，顺时针旋转\n取值为负，逆时针旋转\n转换原点  \n    margin: 0;\n    padding: 0;\n}\n \n/* 1. 布局：父子结构，父级是大图，子级是左右小图  */\n.father {\n    display: ex;\n    margin: 0 auto;\n    width: 1366px;\n    height: 600px;\n    background-image: url(./images/bg.jpg);\n \n    overow: hidden;\n}\n \n.father .left,\n.father .right {\n    width: 50%;\n    height: 600px;\n    background-image: url(./images/fm.jpg);\n \n    transition: all .5s;\n}\n \n.father .right {\n    /* right 表示的取到精灵图右面的图片  */\n    background-position: right 0;\n}\n \n/* 2. 鼠标悬停的效果：左右移动  */\n.father:hover .left {\n    transform: translate(-100%);\n}\n \n.father:hover .right {\n    transform: translateX(100%);\n}\ntransform: rotate( 旋转角度 );"
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
          "text": "默认情况下，转换原点是盒子中心点 \n \n取值：\n方位名词（ left 、 top 、 right 、 bottom 、 center ）\n像素单位数值\n百分比\n案例 - 时钟  \n \ntransform-origin: 水平原点位置  垂直原点位置 ;\n.hour {\n  width: 6px;\n  height: 50px;\n  background-color: #333;\n  margin-left: -3px;\n  transform: rotate(15deg);\n  transform-origin: center bottom;\n}\n \n.minute {\n  width: 5px;\n  height: 65px;\n  background-color: #333;\n  margin-left: -3px;\n  transform: rotate(90deg);\n  transform-origin: center bottom;\n}\n \n.second {\n  width: 4px;\n  height: 80px;\n  background-color: red;\n  margin-left: -2px;"
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
          "text": "多重转换  \n多重转换技巧：先平移再旋转\n \n多重转换原理：以第一种转换方式坐标轴为准转换形态\n旋转会改变网页元素的坐标轴向\n先写旋转，则后面的转换效果的轴向以旋转后的轴向为准，会影响转换结果\n缩放  \n \n技巧\n通常，只为  scale() 设置一个值，表示  X 轴和  Y 轴等比例缩放\n取值大于 1 表示放大，取值小于 1 表示缩小\n案例 - 播放特效  \nCSS 样式\n \n  transform: rotate(240deg);\n  transform-origin: center bottom;\n}\ntransform: translate() rotate();\ntransform: scale( 缩放倍数 );\ntransform: scale(X轴缩放倍数 , Y轴缩放倍数 );\n/* 1. 摆放播放按钮：图片区域的中间  */\n.box li {\n  overow: hidden;\n}"
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
          "text": "倾斜  \n \n取值：角度度数  deg\n02- 渐变  \n渐变是多个颜色逐渐变化的效果，一般用于设置盒子背景 \n分类：\n线性渐变\n径向渐变\n \n.pic {\n  position: relative;\n}\n \n.pic::after {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  /* margin-left: -29px;\n  margin-top: -29px; */\n  /* transform: translate(-50%, -50%); */\n \n  content: '';\n  width: 58px;\n  height: 58px;\n  background-image: url(./images/play.png);\n  transform: translate(-50%, -50%) scale(5);\n  opacity: 0;\n \n  transition: all .5s;\n}\n/* 2. hover 效果：大按钮，看不见：透明是 0 →  小按钮，看得见：透明度 1 */\n.box li:hover .pic::after {\n  transform: translate(-50%, -50%) scale(1);\n  opacity: 1;\n}\ntransform: skew();"
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
          "text": "线性渐变  \n \n取值：\n渐变方向：可选\nto 方位名词\n角度度数\n终点位置：可选\n百分比\n案例 - 产品展示  \nHTML 结构\n \nCSS 样式\nbackground-image: linear-gradient(\n  渐变方向 ,\n  颜色1 终点位置 ,\n  颜色2 终点位置 ,\n  ......\n);\n<div class=\"box\">\n  <img src=\"./images/product.jpeg\" alt=\"\" />\n  <div class=\"title\">OceanStor Pacic 海量存储斩获 2021 Interop 金奖</div>\n  <div class=\"mask\"></div>\n</div>"
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
          "text": "径向渐变  \n \n取值：\n半径可以是 2 条，则为椭圆\n圆心位置取值：像素单位数值  / 百分比  / 方位名词\n03- 综合案例  \n.mask {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  background-image: linear-gradient(\n      transparent,\n      rgba(0,0,0,0.5)\n  );\n  opacity: 0;\n \n  transition: all .5s;\n}\n \n.box:hover .mask {\n  opacity: 1;\n}\nbackground-image: radial-gradient(\n  半径  at 圆心位置 ,\n  颜色1 终点位置 ,\n  颜色2 终点位置 ,\n  ......\n);"
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
          "text": "导航 - 频道  \n箭头旋转  \n \n频道列表  \n \n.x-header-nav .nav-item:hover .icon-down {\n  transform: rotate(-180deg);\n}\n.channel-layer {\n  position: absolute;\n  top: 60px;\n  left: 50%;\n  z-index: -2;\n  width: 1080px;\n  height: 120px;\n  padding: 10px;\n  margin-left: -540px;\n  color: #72727b;\n  background-color: #f5f5f5;\n  border: 1px solid #e4e4e4;\n  border-top: none;\n  transition: all 0.5s;\n  transform: translateY(-120px);\n}"
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
          "text": "渐变按钮  \n搜索按钮  \n \n登录按钮  \n \n客户端按钮  \n \n/* TODO 2. 弹窗频道  */\n.x-header-nav .nav-item:hover .channel-layer {\n  transform: translateY(0);\n}\n.x-header-search form .btn {\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 60px;\n  height: 40px;\n  line-height: 40px;\n  text-align: center;\n  background-color: #f86442;\n  border-top-right-radius: 20px;\n  border-bottom-right-radius: 20px;\n  background-image: linear-gradient(\n    to right,\n    rgba(255, 255, 255, 0.3),\n    #f86442\n  );\n}\n/* TODO 7. 渐变按钮  */\n.card .card-info .login {\n  padding: 3px 34px;\n  color: #f;\n  background-color: #7251;\n  border-radius: 30px;\n  box-shadow: 0 4px 8px 0 rgb(252 88 50 / 50%);\n  background-image: linear-gradient(\n    to right,\n    rgba(255, 255, 255, 0.2),\n    #7251\n  );\n}\n/* TODO 8. 径向渐变  */\n.download .dl .dl-btn {\n  width: 68px;\n  height: 34px;\n  line-height: 34px;"
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
          "text": "轮播图  \n \n猜你喜欢  \n \n  color: #f;\n  text-align: center;\n  border-radius: 4px;\n  background-image: radial-gradient(\n    50px at 10px 10px,\n    rgba(255, 255, 255, 0.5),\n    transparent\n  );\n}\n/* TODO 4. 摆放图片  */\n.banner .banner-list .banner-item.left {\n  z-index: 0;\n  transform: translate(-160px) scale(0.8);\n  transform-origin: left center;\n}\n \n.banner .banner-list .banner-item.right {\n  z-index: 0;\n  transform: translate(160px) scale(0.8);\n  transform-origin: right center;\n}\n/* TODO 5. 播放按钮和遮罩  */\n.album-item .album-item-box::after {\n  position: absolute;\n  left: 0;\n  top: 0;\n  content: '';\n  width: 100%;\n  height: 100%;\n  background: rgba(0,0,0,.5) url(../assets/play.png) no-repeat center / 20px;\n  opacity: 0;\n  transition: all .5s;\n}\n \n.album-item .album-item-box:hover::after {\n  opacity: 1;\n  background-size: 50px;\n}\n \n \n/* TODO 6. 图片缩放  */\n.album-item .album-item-box:hover img {\n  transform: scale(1.1);\n}"
        }
      ]
    }
  ]
};
