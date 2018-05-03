// http://nodejs.cn/api/fs.html#fs_fs_rename_oldpath_newpath_callback
// 异步的 rename(2)。 完成回调只有一个可能的异常参数。
const fs = require('fs');

fs.rename('./text', 'test.txt', err => {
  if(err) throw err;

  console.log('done!');
});
