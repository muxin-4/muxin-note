setImmediate(() => {
  console.log('setImmediate');
});

setTimeout(() => {
  console.log('timeout');
}, 0);

process.nextTick(() => {
  console.log('nextTick');
  process.nextTick(() => {
    console.log('nextTick');
  });
});
