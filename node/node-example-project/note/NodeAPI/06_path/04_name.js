const {
  basename,
  dirname,
  extname
} = require('path');

const filePath = '/usr/local/bin/no.txt';

console.log(basename(filePath)); // no.txt
console.log(dirname(filePath)); // /usr/local/bin
console.log(extname(filePath)); // .txt
