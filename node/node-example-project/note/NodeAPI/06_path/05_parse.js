// http://nodejs.cn/api/path.html#path_path_parse_path

const {
  parse,
  format
} = require('path');
const filePath = '/usr/local/node_modules/n/package.json';

console.log(parse(filePath));
console.log(fromaparse(filePath));

