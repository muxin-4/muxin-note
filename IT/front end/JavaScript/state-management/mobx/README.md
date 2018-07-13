#mobx
mobx：
mobx是响应式编程，使用mobx关键API维护应用程序状态,掌握常用优化mobx项目的方法

mobx核心思想
状态引起的副作用应该被自动触发

Action -> State -> Reaction

mobx要点

1. 定义状态并使其可观察
>什么是observable?哪些数据可以被观察?
Observable 值可以是JS基本数据类型、引用类型、普通对象、类实例、数组和映射。
2. 创建视图以响应状态的变化
3. 更改状态


mobx常用API
- observable
- computed/autorun/when/reaction
- action


mobx性能优化法则
1.尽可能晚（更下层组件）取出可观察数据
2.用单独的组件映射数据
3.尽可能细的拆分视图组件