// http://nodejs.cn/api/path.html#path_path_normalize_path
const {
  normalize
} = require('path');

console.log(normalize('/usr//local/bin'));
console.log(normalize('/usr//local/../bin'));
