# 第 9 章、JavaScript中的类

**ECMAScript5中的近类解构**

```javascript
function PersonType(name) {
	this.name = name;
}

PersonType.prototype.sayName = function() {
	console.log(this.name);
}

var person = new PersonType("Nicholas");
person.sayName(); // outputs "Nicholas"

console.log(person instanceof PersonType); // true
console.log(person instanceof Object);     // true
```
- PersonType是一个构造函数，执行后创建一个名为name的属性；给PersonType的原型添加一个sayName()方法，所有PersonType对象的所有实例都将共享这个方法。
- 然后使用new操作符创建一个PersonType的实例person，并最终证实了person对象确实是PersonType的实例，且由于存在原型继承的特性，因而它也是Object的实例。

**ECMAScript6 类的声明**

```javascript
class PersonClass {
	// 等价于PersonType构造函数
	constructor(name) {
		this.name = name;
	}

	// 等价于PersonType.prototype.sayName
	sayName() {
		console.log(this.name);
	}
}

let person = new PersonClass("Nicholas");
person.sayName();	// outputs "Nicholas"

console.log(person instanceof PersonClass); // true
console.log(person instanceof Object);      // true

console.log(typeof PersonClass);            // "function"
console.log(typeof PersonClass.prototype.sayName);            // "function"
```

