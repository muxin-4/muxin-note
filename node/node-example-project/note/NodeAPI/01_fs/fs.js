// 文档：https://nodejs.org/dist/latest-v9.x/docs/api/fs.html
// 引用node模块,File System
const fs = require('fs')

fs.readFile('./fs.js', (err, data) => {
  if (err) throw err;
  console.log(data.toString());
});
