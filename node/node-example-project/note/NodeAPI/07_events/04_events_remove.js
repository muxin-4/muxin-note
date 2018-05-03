const EventEmitter = require('events');

class CustomEvent extends EventEmitter {}

function fn1 () {
  console.log('fn1');
}

function fn2() {
  console.log('fn2');
}

const myEmitter = new CustomEvent();

myEmitter.on('test', fn1);
myEmitter.on('test', fn2);

setInterval(() => {
  myEmitter.emit('test');
}, 500);


setTimeout(() => {
  // myEmitter.removeListener('test', fn2); // 移除某个事件
  myEmitter.removeAllListeners('test'); // 移除所有事件 
}, 1500);
