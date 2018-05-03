// 复杂场景，异步里面，调用异步，再调用异步 回调地域

/*
() => {
  () => {
    () => {

    }
  }
}
*/

const fs = require('fs');
const promisify = require('util').promisify;

// promise
const read = promisify(fs.readFile);

// read('./01_promisify.js').then(data => {
//   console.log(data.toString());
// }).catch(ex => {
//   console.log(ex);
// });


// async await
async function test() {
  try {
    const content = await read('./01_promisify.js');
    console.log(content.toString());
  } catch (err) {
    console.log(err);
  }
}

test();
