
console.log(`let's go`);
function timeout(ms) {
  return new Promise((resolve, reject) => {
    // 一段耗时很长的异步操作
    setTimeout(resolve, ms, 'done');
  });
}

timeout(100).then((value) => {
  console.log(value);
});
