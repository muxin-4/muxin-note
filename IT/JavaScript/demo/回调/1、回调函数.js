function invokeAdd(a, b) {
  return a() + b();
}

function one() {
  return 1;
}

function two() {
  return 2;
}

// 写法一
// invokeAdd(one, two);

// 写法二
invokeAdd(
  function () {
    return 1;
  },
  function () {
    return 2;
  }
);
