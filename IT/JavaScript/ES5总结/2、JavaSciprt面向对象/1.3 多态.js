/**
 * 多态：同一操作作用在不同对象上面，可以产生不同的解释和不同的执行结果。
 * 先看下面这段代码实现
 */
var makeSound = function(animal) {
  if (animal instanceof Duck) {
    console.log("嘎嘎嘎");
  }else if(animal instanceof Chicken) {
    console.log("咯咯咯");
  }
};

var Duck = function(){};
var Chicken = function(){};

makeSound(new Duck());// 嘎嘎嘎
makeSound(new Chicken());// 咯咯咯

/**
 * 上面的代码，如果增加一只动物，比如狗，显然狗的叫声是“汪汪汪”，此时我们必须得改动
 * makeSound函数，才能让狗发出叫声。代码修改总是很危险的，修改的地方越多，程序出错
 * 的可能性就越大，而且当动物的种类越来越多时，makeSound有可能变成一个巨大的函数。
 */
/**
 * 多态背后的思想是将“做什么”和“怎样去做以及谁去做分离开”，也就是将不变的事物，和可变的事物分离开
 * 在上面代码中，动物会叫，是不可变的，但不同类型的动物怎么叫是可变的。
 * 修改过后，程序是可扩展的，符合开放-封闭原则
 */
var makeSound = function (animal) {
  animal.sound();
};

var Duck = function () { };
Duck.prototype.sound = function() {
  console.log("嘎嘎嘎");
};

var Chicken = function () { };
Chicken.prototype.sound = function() {
  console.log("咯咯咯");
}

makeSound(new Duck());// 嘎嘎嘎
makeSound(new Chicken());// 咯咯咯

// 下面新增一只狗,这时只要简单的追加代码就可以了，而不用改动以前的makeSound函数
var Dog = function() {}
Dog.prototype.sound = function() {}
