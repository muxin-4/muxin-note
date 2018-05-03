// http://nodejs.cn/api/fs.html#fs_fs_rmdir_path_callback
const fs = require('fs');

fs.rmdir('./test', err => {});
