// 分两次，顺序依次执行, .then 函数里面返回新的Promise
// https://www.imooc.com/video/16614]

console.log('here we go');
function timeout(ms) {
  return new Promise((resolve, reject) => {
    // 一段耗时很长的异步操作
    setTimeout(resolve, ms, 'hello');
  });
}

timeout(2000)
  .then(value => {
    console.log(value);
    return new Promise(resolve => { // 这里必须return，否则会undefined
      setTimeout(() => {
        console.log('test1');
        resolve('world1');
      }, 2000);
    });
  })
  .then(value => {
    console.log(value + ' world');
  });


/**
 * 输出
 * here we go
 * Promise {<pending>}
 * hello
 * test1
 * world1 world
 */
