##4、原型模式和基于原型继承的JavaScript对象系统

JavaScript本身是一门基于原型的面向对象语言，它的对象系统就是使用原型模式来搭建的。

比如：

在IO语言中（一种基于原型的面向对象语言），Object（在IO语言中，根对象是Object）是Animal的原型，而Animal是Dog的原型，它们之间形成了一条原型链。当我们尝试调用Dog对象的某个方法时，而它本身也没有这个属性，那么请求会顺着原型链继续被委托给Animal对象的原型Oject对象。

这样一来便能得到继承的效果，看起来就像Animal是Dog的“父类”，Object是Animal的“父类”。

####**原型编程泛型规则**

1. 绝大部分的数据都是对象

​     JavaScript根对象是Object.prototype

2. 要得到一个对象，不是通过实例化类，而是找到一个对象作为原型并克隆它

- 要得到一个对象，只要显示的调用`var obj1 = new Object() ` 或者 `var obj2 = {}`
- 在JavaScript中我们不需要关心克隆的细节，这是JavaScript引擎内部实现的
- 实现过程：JavaScript通过克隆Object.prototype来得到一个新对象

3. 对象会记住它的原型
4. 如果对象无法响应某个请求，它会把这个请求委托给它自己的原型

####**原型链**

JavaScript依靠原型链实现继承。

原型链实现继承的两个方式

1.最常用原型继承方式（一个“类”继承一个对象）

```javascript
var obj = {name: 'sven'};
var A = function(){};
A.prototype = obj;
var a = new A();
console.log(a.name);  // 输出：sven
```

- 首先，尝试遍历对象a中的所有属性，但没有找到name这个属性。
- 查找name属性的这个请求被委托给对象a的构造器的原型，它被a.__proto__记录着并且指向A.prototype,而prototype被设置为对象obj
- 在obj中找到了name属性，并返回它的值

2. 一个“类”继承自另外一个“类”

```javascript
var A = function() {};

A.prototype = {name : 'sven'};



var B = function() {};

B.prototype = new A();



var b = new B();

console.log(b.name);

```

继承总是发生在对象和对象之间



####小结：

原型模式是一种设计模式，也是一种编程泛型，它构成了JavaScript这门语言的根本。通过原型实现的面向对象系统虽然简单，但能力同样强大。