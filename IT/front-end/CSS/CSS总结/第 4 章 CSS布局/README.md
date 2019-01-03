# 第 4 章 CSS布局
> 布局是CSS知识体系重中之重

## 1. 布局发展历史

- 早期以table为主（简单）
- 后来以技巧性布局为主（难）
- 现在有flexbox/grid（偏简单）
- 响应式布局是必备知识

## 2. 常用布局方法

- table 表格布局
- float 浮动 + margin
- inline-block 布局
- flexbox 布局
- grid 布局（相对用的少）
- 响应式布局


## 3. 布局方法
1.	响应式布局
- 一般处理屏幕大小问题
- 主要方法：
  - 隐藏+折行+自适应空间
  - rem / viewport / media query



## 4. 问题

1. 实现两栏（三栏）布局的方法
  1. 表格布局
  2. float + margin布局
  3. inline-block布局
  4. flex box布局
2. position: absolute/ fixed有什么不同?
- 前者相对于最近的absolute/relative定位
- 后者相对于屏幕(viewport)


3. display: inline-block的间隙
- 原因：字符间距
- 解决： 消灭字符或消灭间距
4. 为什么要清除浮动?
- 浮动元素不会占据父元素的布局空间，父元素布局的时候不会管浮动元素，浮动元素可能会超出父元素，从而对其它元素产生影响
5. 如何清除浮动?
- 让盒子负责自己的布局
- overflow: hidden(auto)
- ::after{clear: both}
6. ​如何设配移动端页面?
- viewport
- (vm)rem / viem / media query
- 设计上： 
  - 隐藏（不该在移动端显示的就不显示）
  - 折行（在pc端横排显示的，移动端可以少排，或者竖排）
  - 自适应（留一些自适应的空间，留些空间，可让内容可大可小）
7. ​




