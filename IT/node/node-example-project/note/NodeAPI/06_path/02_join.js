// http://nodejs.cn/api/path.html#path_path_join_paths
const {
  join
} = require('path');

console.log(join('/usr', 'local', 'bin/'));
console.log(join('/usr', '../local', 'bin/'));
