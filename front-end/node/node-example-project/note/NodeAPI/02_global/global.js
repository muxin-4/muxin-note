// 文档 https://nodejs.org/dist/latest-v9.x/docs/api/globals.html

// 局域变量 mod
const testVar = 1000;

// 全局变量 testVar2
global.testVar2 = 800;

module.exports.testVar = testVar;
