const EventEmitter = require('events');

class CustomEvent extends EventEmitter {}

const myEmitter = new CustomEvent();

myEmitter.on('error', (err, time) => {
  console.log(err);
  console.log(time);
});

myEmitter.emit('error', new Error('oops!'), Date.now());
