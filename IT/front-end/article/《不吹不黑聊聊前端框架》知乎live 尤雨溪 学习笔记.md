# 《不吹不黑聊聊前端框架》知乎live 尤雨溪 学习笔记

#### 内容大纲

- 前言：不同框架的定位与适用场景
- 组件的理解和分类
- 变化侦测机制
- 路由
- 状态和数据流管理
- 数据抓取和同步
- CSS 管理方案
- 构建工具链
- 同构/服务端渲染
- 跨平台渲染
- 类型系统
- 构建时优化
- 运行时优化
- Web Components 和框架的关系
- Web Assembly 和框架的关系





#### 1. 框架的选择

- 如果你对框架本身想解决的问题缺乏理解的话，那么是无法谈怎么进行选框架的
- 本次live对框架背后解决的问题进行梳理

#### 2. 组件

- react在组件中的启示

  - react在组件的贡献在于，组件可以是一个函数
  - 如果整个应用是一个大的函数，函数里可以调用别的函数，一个组件可以调用其它的函数
  - react最简单的一个组件就是一个函数，props进来，和返回一些virtutal DOM，jsx

- 组件的分类

  - 展示型的组件（数据进，DOM出）
  - 接入性组件[Container Components](https://medium.com/@learnreact/container-components-c0e67432e005),与数据层的`service`打交道，包含于服务器端和数据源打交道的逻辑，`Container`会把数据向下传递给展示型的组件
  - 交互型的组件,典型的例子，表单组件的封装和加强，会有比较复杂的交互逻辑，但是它会有很强的复用性
  - 功能型组件，例如vue router路由的`<router-view>`，`<transition>`，组件，本身不渲染任何内容，作为一种扩展、抽象机制存在。

- `vue template`模板和`react jsx`对比

  - jsx的优点
    - jsx本质上是一个javascript语法糖
    - jsx最大的优点是jsx获得了javascript这门语言最大的灵活度
    - jsx和render funtion最大的价值在于写第4类功能型组件的时候，是远超模板的
  - `vue template`模板的优点
    - 模板在写纯展示型的组件比jsx爽
    - 模板更强制性的把尽可能少的逻辑放在视图结构里
    - 展示型的组件，在逻辑上简单，在样式上有相当的复杂度
    - 逻辑少的模板，在写样式的时候，会有更多视图化的思考

  - 总结
    - jsx适合逻辑多的场景，模板适合逻辑少的场景

- `Colocation`

  - 把该放一起的东西放在一起
  - 跟几年前的HTML、CSS、JS分离对应

- `Separation of Concerns`

  - [关注点分离](https://link.zhihu.com/?target=https%3A//zh.wikipedia.org/wiki/%25E5%2585%25B3%25E6%25B3%25A8%25E7%2582%25B9%25E5%2588%2586%25E7%25A6%25BB)
  - 前端的关注点分离就是 HTML、CSS、JS 分离。

#### 3.Change detection 变化侦测和渲染机制

-  `Declarative Programming` 声明式编程
   -  你说有啥，就有啥。
-  `Imperative Programming `命令式编程
   -  你让我干啥，我就干啥。
   -  例如jQuery，像一坨意大利面



**view = render(state)**

给我一个 state（数据），我就造出一个 view（DOM）。

#### 4. 状态管理

总得来说前端对状态管理还没有达成共识，但又没有特别大的分歧。

可以了解一下 Flux、Redux、MobX、Vuex 和 Rx.js（反正名字里都有一个 x）。

状态管理主要涉及 event、state 和 view 的变化的管理，主要分歧在于 event 与 state 变化的管理方式，各种方案皆有优劣。













































