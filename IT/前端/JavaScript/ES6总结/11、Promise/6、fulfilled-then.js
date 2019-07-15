// 假如一个Promise已经完成了，再.then()会怎样？
// https://www.imooc.com/video/16615


console.log('start');

let promise = new Promise(resolve => {
  setTimeout(() => {
    console.log('the promise fulfilled');
    resolve('hello, world');
  }, 1000);
});

setTimeout(() => {
  promise.then(value => {
    console.log(value);
  });
}, 3000);

/**
 * start
 * 21
 * the promise fulfilled
 * hello, world
 */
