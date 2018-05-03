// http://nodejs.cn/api/fs.html#fs_fs_readfile_path_options_callback
const fs = require('fs');

fs.readFile('./readfile.js', 'utf8', (err, data) => {
  if (err) throw err;

  console.log(data);
});

const data = fs.readFileSync('./readfile.js', 'utf-8');
console.log('Sync' + data);
