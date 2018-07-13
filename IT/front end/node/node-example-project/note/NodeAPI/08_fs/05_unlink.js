// http://nodejs.cn/api/fs.html#fs_fs_unlink_path_callback
// 删除文件
const fs = require('fs');

fs.unlink('./test.txt', err => {});
