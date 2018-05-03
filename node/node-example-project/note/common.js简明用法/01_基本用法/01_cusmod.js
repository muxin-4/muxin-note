
// 其他文件调用暴露的接口testVar或者testFn时，会输出console.log('This is a module');
// 所以推荐用函数包裹起来，防止外界调用接口时，输出全局作用域的东西
console.log('This is a module');

const testVar = 100;

function test (){
  console.log(testVar)
}

// 暴露接口
// module.exports.testVar = testVar;
// module.exports.testFn = test;

// module.exports.testVar = testVar; 等价于 exports.testVar = testVar;

// 暴露多个接口时，module.exports可以用字面量，exports不可以用字面量
// 因为在common.js中，使用module.exports暴露接口，exports相当于module.exports的简写
// 如果exports使用字面量，就会改变exports对象的指向，改变后不指向module.exports,导致暴露出来的接口为undefined
// 使用字面量暴露接口，会覆盖上面这种单行暴露接口，module.exports.testVar = testVar;

// 一句话总结，暴露多个接口时使用module.exports
module.exports ={
  a: 1,
  b: 2,
  test: 3,
  testVar: testVar,
  testFn: test
}
