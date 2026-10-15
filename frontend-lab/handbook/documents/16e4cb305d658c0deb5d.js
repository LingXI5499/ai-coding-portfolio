window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["16e4cb305d658c0deb5d"] = {
  "id": "16e4cb305d658c0deb5d",
  "title": "移动Web-day01.pdf",
  "treatment": "课件页级文本（配图回溯原件）",
  "sections": [
    {
      "title": "第1页",
      "level": 1,
      "page": 1,
      "blocks": [
        {
          "type": "text",
          "text": "移动 Web 第一天\n平面转换、渐变"
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
          "text": "平面转换1"
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
          "text": "⚫ 作用：为元素添加动态效果，一般与过渡配合使用\n⚫ 概念：改变盒子在平面内的形态（位移、旋转、缩放、倾斜）\n⚫ 平面转换又叫 2D 转换\n平面转换 transform"
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
          "text": "⚫ 属性\n⚫ 取值\n◆ 像素单位数值\n◆ 百分比（参照盒子自身尺寸计算结果）\n◆ 正负均可\n⚫ 技巧\n◆ translate() 只写一个值，表示沿着 X 轴移动\n◆ 单独设置 X 或 Y 轴移动距离：translateX() 或 translateY()\n平面转换 – 平移\ntransform: translate(X轴移动距离, Y轴移动距离);"
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
          "text": "总结总结\n1. 给盒子添加向左、向上的位移效果，属性取值为正还\n是负？\n负\n2. translate() 只写一个值表示哪个方向移动？\n水平（X 轴）\n3. 百分比取值参照什么计算最终结果？\n盒子自身尺寸"
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
          "text": "⚫ 方法一\n⚫ 方法二：百分比参照盒子自身尺寸计算结果\n平移实现居中效果"
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
          "text": "案例\n 双开门效果"
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
          "text": "案例\n 双开门效果"
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
          "text": "⚫ 属性\n◆ 角度单位是 deg\n⚫ 技巧\n◆ 取值正负均可\n◆ 取值为正，顺时针旋转\n◆ 取值为负，逆时针旋转\n平面转换 – 旋转\ntransform: rotate(旋转角度);"
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
          "text": "⚫ 默认情况下，转换原点是盒子中心点\n⚫ 属性\n⚫ 取值\n⚫ 方位名词（left、top、right、bottom、center）\n⚫ 像素单位数值\n⚫ 百分比\n平面转换 – 改变转换原点\ntransform-origin: 水平原点位置 垂直原点位置;"
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
          "text": "案例\n 案例-时钟\ntransform-origin: center bottom;"
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
          "text": "⚫ 多重转换技巧：先平移再旋转\n平面转换 – 多重转换\ntransform: translate() rotate();"
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
          "text": "⚫ 多重转换原理：以第一种转换方式坐标轴为准转换形态\n➢ 旋转会改变网页元素的坐标轴向\n➢ 先写旋转，则后面的转换效果的轴向以旋转后的轴向为准，会影响转换结果\n平面转换 – 多重转换"
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
          "text": "⚫ 思考: 改变元素的width或height属性能实现吗？\n⚫ 属性\n⚫ 技巧\n⚫ 通常，只为 scale() 设置一个值，表示 X 轴和 Y 轴等比例缩放\n⚫ 取值大于1表示放大，取值小于1表示缩小\n平面转换 – 缩放\ntransform: scale(缩放倍数);\ntransform: scale(X轴缩放倍数, Y轴缩放倍数);"
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
          "text": "案例\n 播放特效"
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
          "text": "⚫ 属性\n⚫ 取值\n⚫ 角度度数 deg\n平面转换 – 倾斜\ntransform: skew();"
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
          "text": "⚫ 渐变是多个颜色逐渐变化的效果，一般用于设置盒子背景\n⚫ 分类\n⚫ 线性渐变\n⚫ 径向渐变\n渐变"
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
          "text": "⚫ 属性\n⚫ 取值\n◆ 渐变方向：可选\n to 方位名词\n 角度度数\n◆ 终点位置：可选\n 百分比\n线性渐变\nbackground-image: linear-gradient(\n渐变方向,\n颜色1 终点位置,\n颜色2 终点位置,\n......\n);"
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
          "text": "案例\n 产品展示\nbackground-image: linear-gradient(\ntransparent,\nrgba(0, 0, 0, 0.6)\n);"
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
          "text": "⚫ 作用：给按钮添加高光效果\n⚫ 属性\n⚫ 取值\n⚫ 半径可以是2条，则为椭圆\n⚫ 圆心位置取值：像素单位数值 / 百分比 / 方位名词\n径向渐变\nbackground-image: radial-gradient(\n半径 at 圆心位置,\n颜色1 终点位置,\n颜色2 终点位置,\n......\n);"
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
          "text": "案例\n 综合案例 – 喜马拉雅"
        }
      ]
    }
  ]
};
