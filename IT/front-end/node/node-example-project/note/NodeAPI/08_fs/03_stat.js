// http://nodejs.cn/api/fs.html#fs_fs_stat_path_callback

const fs = require('fs');

fs.stat('./03_stat.jss', (err, stats) => {
  if (err) throw err;

  console.log(stats.isFile());
  console.log(stats.isDirectory());

  console.log(stats);
});
