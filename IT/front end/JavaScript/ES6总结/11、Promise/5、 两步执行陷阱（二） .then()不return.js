// 假如在.then()的函数里面不返回新的return，会怎样？
// https://www.imooc.com/video/16616

// 答： 在下一个then方法里会产生undefined

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
      return new Promise(resolve => {
        setTimeout(() => {
          console.log('Mr.Laurence');
          resolve('Merry Xmas');
        }, 2000);
      });
    }());
    // return false; // 这里必须return，否则会undefined
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
 * undefined world
 * Mr.Laurence
 */
