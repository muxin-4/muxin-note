// http://nodejs.cn/api/fs.html#fs_fs_createwritestream_path_options

const fs = require('fs');

const ws = fs.createWriteStream('./test.txt');

const tid = setInterval(() => {
  const num = parseInt(Math.random() * 10);
  console.log(num);
  if (num < 7) {
    ws.write(num + '');
  } else {
    clearInterval(tid);
    ws.end();
  }
}, 200);

ws.on('finish', () => {
  console.log('done!');
});
