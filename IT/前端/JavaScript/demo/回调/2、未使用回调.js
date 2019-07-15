// 两个循环，如果数据量很大或循环操作很复杂的话，开销一定不小
function multiplyByTwo(a, b, c) {
  var i, ar = [];
  for (i = 0; i < 3; i++) {
    ar[i] = arguments[i] * 2;
  }
  return ar;
}

function addOne(a) {
  return a + 1;
}

var myarr = [];
myarr = multiplyByTwo(1, 2, 3);
for (var i = 0; i < 3; i++) {
  myarr[i] = addOne(myarr[i]);
}
myarr;
