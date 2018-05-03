// http://nodejs.cn/api/buffer.html
/*
  buf.length
  buf.toString()
  buf.fill()
  buf.equals()
  buf.indexof()
  buf.copy()
*/

const buf = Buffer.from('This is a test!');
console.log(buf.length);

const buf1 = Buffer.alloc(10);
buf1[0] = 2;
console.log(buf1.length);

console.log(buf.toString('base64'));

const buf3 = Buffer.allocUnsafe(10);
console.log(buf3);
console.log(buf3.fill(10, 2, 6));

const buf4 = Buffer.from('test');
const buf5 = Buffer.from('test');
const buf6 = Buffer.from('test!');

console.log(buf4.equals(buf5));
console.log(buf4.equals(buf6));

console.log(buf4.indexOf('es'));
console.log(buf4.indexOf('esa'));
