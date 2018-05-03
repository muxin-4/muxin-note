// https://nodejs.org/en/docs/inspector/
// 1、使用chrome调试
// node --inspect-brk 05_debug.js

// 2、推荐使用vscode调试
// https://code.visualstudio.com/docs/editor/debugging#_launch-configurations
// "configurations": [
//   {
//     "type": "node",
//     "request": "launch",
//     "name": "Current file",
//     "program": "${file}",
//     "cwd": "${cwd}"
//   },
// ]

function test1() {
  const a = Math.random();
  const b = Math.random();

  const c = test2(a, b);
}

function test2(a, b) {
  if (a > b) {
    a += a * 2;
  } else {
    b -= a;
  }
  return a + b;
}

test1();
