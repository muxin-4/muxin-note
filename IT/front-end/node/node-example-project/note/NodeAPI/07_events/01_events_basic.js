// http://nodejs.cn/api/events.html
const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('event', () => {
  console.log('触发了一个事件！');
});

setInterval(() => {
  myEmitter.emit('event');
}, 500);
