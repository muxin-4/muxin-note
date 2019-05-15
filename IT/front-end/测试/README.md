# 测试

enzyme: https://airbnb.io/enzyme/docs/api/



React 特别适合单元测试

- 组件化
- Functional Component
- 单向数据流
- 通用测试框架 - Jest
- 支持多平台，运行速度极快
- 内置代码覆盖率测试
- 为 React 提供了一些特殊的测试方法

断言库

- 判断一个值是否对应相应的结果





- React 官方测试工具 - ReactTestUtils
- Airbnb 基于官方的封装 - Enzyme



两种测试方法

- Shadow Rendering
  - 生成virtual DOM 的实例，测试他们的属性，不会渲染子组件，是测试无状态组件的良方，这些组件没有state，只有传入的属性
  - DOM Rendering
- DOM Rendering
  - 渲染真实的DOM 环境，可以渲染组件，以及子组件，同时可以调用生命周期函数，缺点是速度比较慢

