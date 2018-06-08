/**
 * 鸭子类型（duck typing）： 如果它走起路来像鸭子，叫起来也是鸭子，那么它就是鸭子。
 * 利用鸭子类型思想,我们可以实现面向接口编程，而不是面向实现编程
 * 例如，一个对象若有push和pop方法，并且这些方法提供了正确的实现，它就可以被当做栈来使用。
 * 一个对象如果有length属性，也可以依照下标来存取属性（最好还要拥有slice和splice等方法），这个对象就可以被当做数组来使用
 *
 * 下面，我们通过代码来理解鸭子类型。
 * 对于加入合唱团的动物，无需检查它们的类型，只要保证它们拥有duckSinging方法。
 */
var duck = {
  duckSinging: function () {
    console.log("嘎嘎嘎");
  }
};

var chicken = {
  duckSinging: function() {
    console.log("嘎嘎嘎");
  }
};

var choir  = []; // 合唱团

var joinChoir = function(animal) {
  if (animal && typeof animal.duckSinging === "function") {
    choir.push(animal);
    console.log("恭喜加入合唱团");
    console.log("合唱团已有成员数量" + choir.length);
  }
};

joinChoir(duck);// 恭喜加入合唱团
joinChoir(chicken);// 恭喜加入合唱团
