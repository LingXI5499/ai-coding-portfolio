window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["7564c527ac6635dbda92"] = {
  "id": "7564c527ac6635dbda92",
  "title": "移动web第二天.xmind",
  "treatment": "思维导图主题树",
  "sections": [
    {
      "title": "主题树",
      "level": 1,
      "blocks": [
        {
          "type": "text",
          "text": "画布 1\n移动web第二天\n全天目标\n使用空间转换、动画效果丰富网页元素的呈现方式\n空间转换\n目标\n使用位移、缩放、旋转等空间转换效果丰富网页呈现方式\n学习内容\n空间转换介绍\n坐标轴\nX、Y、Z\nZ轴与用户视线方向重叠\n正数方向指向用户（屏幕外面）；负数方向指向屏幕里面\n属性\ntransform\n空间位移\n完整写法\ntranslate3d(x, y, z)\n某个坐标轴位移\ntranslateX()\ntranslateY()\ntranslateZ()\n视距\n作用\n产生近大远小，近实远虚的视觉效果\n概念\n视距：用户眼睛和屏幕的距离\n写法\nperspective: 值；\n添加给父级\n取值一般800-1200px之间\n空间旋转\n旋转\nrotateX()\nrotateY()\nrotateZ()\n左手法则\n左手握住旋转轴，大拇指指向坐标轴正值方向， 四根手指弯曲方向为旋转正值方向\n立体呈现\n让子级处于真正的3D空间内\ntransform-style: preserve-3d;\n子级处于3D空间里面\n案例-3D导航\n效果图\n缩放\nscale3d(x, y, z)\n某个坐标轴缩放\nscaleX()\nscaleY()\nscaleZ()\n动画\n使用关键帧动画效果，给网页元素添加动画特效，提升用户体验\n动画介绍\n基本使用\n定义动画\n@keyframes{\\n   from {}\\n   to {}\\n}\n@keyframes{\\n   0% {}\\n   20% {}\\n   50% {}\\n   100% {}\\n}\n使用动画\nanimation: 动画名称  动画时长;\nanimation属性\n复合属性\nanimation：动画名称  动画时长  速度曲线  延迟时间   重复次数  动画方向  执行完毕时状态；\n注意事项\n取值不分先后顺序\n必须赋值项：动画名称和动画时长\n若出现2个时间：第一个时间为动画时长， 第二个时间为延迟时间\n拆分写法（了解）\nanimation-name：动画名称\nanimation-duration：动画时长\nanimation-delay：延迟时间\nanimation-fill-mode：动画执行完毕时状态\nforwards：最后一帧状态\nbackwards：第一帧状态（默认值）\nanimation-timing-function：速度曲线\nsteps(数字) : 逐帧动画\nanimation-iteration-count：重复次数\ninfinite：无限循环\nanimation-direction：动画方向\nalternate：反向\nanimation-play-state：动画播放状态\npaused：暂停\n通常配合:hover使用\n案例-走马灯\n无缝动画\n复制开始图片到结束 → 填充显示区域，不漏白\n复制的图片宽度总和 == 显示区域的宽度\n逐帧动画\n精灵动画\n搭配精灵图使用\n核心\n动画速度曲线为steps(N)\nN与精灵图小图个数相同\n多组动画\n作用：一个元素添加多个动画效果\nanimation: 动画1，动画2，动画N；\n综合案例\n全民出游"
        }
      ]
    }
  ]
};
