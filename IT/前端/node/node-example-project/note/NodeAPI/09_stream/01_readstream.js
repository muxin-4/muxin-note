// http://nodejs.cn/api/fs.html#fs_fs_createreadstream_path_options

const fs = require('fs');

const rs = fs.createReadStream('./readstream.js');

rs.pipe(process.stdout);
