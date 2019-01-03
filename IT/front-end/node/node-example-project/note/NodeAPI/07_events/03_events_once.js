const EventEmitter = require('events');

class CustomEvent extends EventEmitter {}

const myEmitter = new CustomEvent();

myEmitter.once('test', () => {
  console.log('test event');
})

setInterval(() => {
  myEmitter.emit('test');
}, 500);
