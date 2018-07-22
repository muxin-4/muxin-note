// 嵌套.then()
// https://www.imooc.com/video/16618

console.log('start');
new Promise(resolve => {
  console.log('Step 1');
  setTimeout(() => {
    resolve(100);
  }, 1000);
})
  .then(value => {
    return new Promise(resolve => {
      console.log('Step 1-1');
      setTimeout(() => {
        resolve(110);
      }, 1000);
    })
      .then(value => {
        console.log('Step 1-2');
        return value;
      })
      .then(value => {
        console.log('Step 1-3');
        return value;
      });
  })
  .then(value => {
    console.log(value);
    console.log('Step 2');
  });

/**
 * 输出
 * start
 * Step 1
 * Promise {<pending>}
 * Step 1-1
 * Step 1-2
 * Step 1-3
 * 110
 * Step 2
 */
