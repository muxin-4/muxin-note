// vscode 编辑断点
function test(n) {
  // 复杂代码
  console.log(n);
}

for (let i = 0; i < 100; i++) {
  const n = parseInt(Math.random() * 100);
  test(n);
}
