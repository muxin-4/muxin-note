/**
 * 封装的目的是将信息隐藏。一般封装指的是封装数据、封装实现，
 * 其实还有更广义的封装，封装类型和封装变化
 *
 * JavaScript可以模拟出来public和private这两种特性
 * 下面代码是封装数据
 */


var myOject = (function() {
  var _name = 'sven'; // 私有(private) 变量
  return {
    getName: function() { // 公开(public) 方法
      return _name;
    }
  }
})();

console.log(myOject.getName()); // 输出： sven
console.log(myOject._name); // 输出： undefined


