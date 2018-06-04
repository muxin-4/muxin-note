# 第 5 章 CSS效果

# 1. 效果属性

1. [box-shadow](https://developer.mozilla.org/zh-CN/docs/Web/CSS/box-shadow)
- 营造层次感（立体感）
- 充当没有宽度的边框
- 特殊效果（例如机器猫）
2. text-shadow
- 营造层次感（立体感）
- 印刷品质感
3. border-radius
- 圆角矩形
- 圆形
- 半圆/扇形
- 一些奇怪的角角
5. background
- 纹理、图案
- 渐变
- 雪碧图动画
- 背景图尺寸适应

6. clip-path
- 对容器进行裁剪
- 常见几何图形
- 自定义路径


## 问题
1. 如何用一个div画XXX
- `box-shadow`无线投影
- `::before`
- `::after`
2. 如何产生不占空间的边框
- `box-shadow`
- `outline`
3. 需要你写一个border，但是盒模型宽度包含边框

- `box-sizing: border-box;`

4. 如何实现圆形元素（比如头像）

- `border-radius: 50%;`

5. 如何实现iOS图标的圆角

	 `clip-path	`:(svg)

  把矢量图形导出成 svg，通过clip-path裁剪我们的元素

6. 如何实现半圆、扇形等图形？

- `border-radius`组合
- 有无边框
- 边框粗细
- 圆角半径

7. 如何实现背景图居中显示/不重复/改变大小？

- `background-position`
- `background-repeat`
- `background-size(cover/contain)`

8. 如何平移/放大一个元素？

- `transform: translateX(100px)`
- `transform: scale(2)`

9. 如何实现3D效果？

   1.`perspective: 500px;`

   2.`transform-style: preserve-3d `

   3.`transform: translate rotate`