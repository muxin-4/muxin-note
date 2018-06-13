#Object.defineProperty

**Object.defineProperty** ，顾名思义，为对象定义属性。在js中我们可以通过下面这几种方法定义属性

```javascript
// (1) define someOne property name
someOne.name = 'cover';
//or use (2)
someOne['name'] = 'cover';
// or use (3) defineProperty
Object.defineProperty(someOne, 'name', {
    value : 'cover'
})
```

从上面看，貌似使用Object.defineProperty很麻烦，那为啥存在这样的方法呢？

带着疑问，我们来看下 Object.defineProperty的定义。

### what is Object.defineProperty
>
>`Object.defineProperty()` 方法会直接在一个对象上定义一个新属性，或者修改一个对象的现有属性， 并返回这个对象。

**语法**

> ```javascript
> Object.defineProperty(obj, prop, descriptor)
> ```

**参数**

- `obj`  必需。要在其上定义属性的对象。
- `prop` 必需。要定义或修改的属性的名称。
- `descriptor` 必需。将被定义或修改的属性描述符。

**属性的状态设置**

- 【value】： 属性的值，默认为 undefined。
- 【writable】： 该属性是否可写，如果设置成 false，则**任何对该属性改写的操作都无效（但不会报错）**，对于像前面例子中直接在对象上定义的属性，这个属性该特性默认值为为 false。


```javascript
var person = {};
Object.defineProperty(person, "name", {
	writable: false,
	value: "Nicholas"
});

console.log(person.name); // 输出 Nicholas
person.name = "Greg";
console.log(person.name); // 输出 Nicholas
```

- 【configurable]】：把configurable设置为false，表示不能从对象中删除属性。如果对这个属性调用delete，在非严格模式下什么也不会发生，严格模式下回导致错误。而且，一旦把属性定义为不可配置的，就不能再把它变回可配置的了。此时，再调用Object.defineProperty()方法修改除writable之外的特性，都会导致错误。
```javascript
var person = {};
Object.defineProperty(person, "name", {
	configurable: false,
	value: "Nicholas"
});

// 抛出错误 Uncaught TypeError: Cannot redefine property: name
Object.defineProperty(person, "name", {
	configurable: true,
	value: "Nicholas"
});
```

- 【enumerable】：表示能否通过for-in循环返回属性。像前面例子中那样直接在对象上定义的属性，它们的这个特性默认值为false。

**注意**

```javascript
//直接在对象上定义的属性，这个特性默认值为为 true
var someOne = { };
someOne.name = 'coverguo';
console.log(Object.getOwnPropertyDescriptor(someOne, 'name'));
//输出 Object {value: "coverguo", writable: true, enumerable: true, configurable: true}

//调用Object.defineProperty()方法时，如果不指定
var otherOne = {};
Object.defineProperty(otherOne, "name", {
    value:"coverguo" 
});  
console.log(Object.getOwnPropertyDescriptor(otherOne, 'name'));
//输出 Object {value: "coverguo", writable: false, enumerable: false, configurable: false}
```

- 【get】一旦目标对象访问该属性，就会调用这个方法，并返回结果。默认为 undefined。
- 【set】 一旦目标对象设置该属性，就会调用这个方法。默认为 undefined。

从上面，可以得知，我们可以通过使用Object.defineProperty，来定义和控制一些**特殊的属性**，如属性是否可读，属性是否可枚举，甚至修改属性的修改器（setter）和获取器(getter)

那什么场景和地方适合使用到特殊的属性呢？

### 实际运用







