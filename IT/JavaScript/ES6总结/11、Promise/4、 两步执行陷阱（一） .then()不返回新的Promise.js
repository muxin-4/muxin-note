// 假如在.then()的函数里面不返回新的Promise，会怎样？
// https://www.imooc.com/video/16616

// 答：跳过当前.then,执行下一个then方法

console.log('here we go');
new Promise(resolve => {
  setTimeout(() => {
    resolve('hello');
  }, 2000);
})
  .then(value => {
    console.log(value);
    console.log('everyone');
    (function () {
      return new Promise(resolve => { // 这里必须return，否则会undefined
        setTimeout(() => {
          console.log('Mr.Laurence');
          resolve('Merry Xmas');
        }, 2000);
      });
    }());
    return false;
  })
  .then(value => {
    console.log(value + ' world');
  });

/**
 * 输出
 * here we go
 * Promise {<pending>}
 * hello
 * everyone
 * false world
 * Mr.Laurence
 */
