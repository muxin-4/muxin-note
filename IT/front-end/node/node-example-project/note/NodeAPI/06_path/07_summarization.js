const path = require('path');

const mod = require('../../common.js简明用法/01_基本用法/01_cusmod');

console.log(mod.testVar);

// 总结请看README
console.log('__dirname', __dirname);
console.log('process.cwd()', process.cwd());
console.log('./', path.resolve('./'));
