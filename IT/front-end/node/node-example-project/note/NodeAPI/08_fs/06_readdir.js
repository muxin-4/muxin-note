// http://nodejs.cn/api/fs.html#fs_fs_readdir_path_options_callback

const fs = require('fs');

fs.readdir('../', (err, files) => {
  if (err) throw err;
  console.log(files);
})
