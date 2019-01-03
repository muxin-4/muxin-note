# 1、this

跟别的语言大相径庭的是，JavaScript的this总是指向一个对象，而**具体指向哪个对象是在运行时基于函数的执行环境动态绑定的**，而非函数被声明时的环境。

##1.this的指向

除去不常用的with和eval的情况，具体到实际应用中，this的指向大致可以分为以下4种。

- 作为对象的方法调用
- 作为普通函数调用
- 构造器调用
- Function.prototype.call或Function.prototype.apply调用

####1. 作为对象的方法调用(this指向该对象)

```javascript
var obj = {
    a: 1,
    getA: function() {
        console.log(this === obj); // 输出：true
        console.log(this.a);       // 输出：1
    }
}
obj.getA();
```

#### 2.作为普通函数调用(this指向全局对象)

```javascript
window.name = 'globalName';
var myObject = {
    name: 'sven',
    getName: function() {
        return this.name;
    }
};
var getName = myObject.getName;
console.log(getName());  // globalName
```



```javascript
window.name = 'globalName'
var getName = function() {
  return this.name;  
};
console.log(getName()); // 输出：globalName
```

####3.构造器调用

**通常情况下，构造器里的this就指向返回的这个对象**

```javascript
var MyClass = function() {
    console.log(this);
    this.name = 'sven';
};
var obj = new MyClass();
console.log(obj.name); // 输出： sven
```

**特殊情况**

**1. 用new调用构造器时，如果构造器显式地返回了一个object类型的对象，那么此次运算结果最终会返回这个对象，而不是我们之前期待的this**

```javascript
var MyClass = function() {
    this.name = 'sven';
    return { // 显式地返回一个对象
        name: 'anne'
    }
}
```



####4.Function.prototype.call或Function.prototype.apply调用 

跟普通的函数调用相比，用Function.prototype.call或Function.prototype.apply可以动态改变传入函数的this

```javascript
var obj1 = {
    name: 'sven',
    getName: function() {
        return this.name;
	}
};

var obj2 = {
    name: 'anne'
};

console.log(obj1.getName());    //  输出： sven
console.log(obj1.getName.call(obj2));    // 输出：anne
```

## 2.丢失的this

