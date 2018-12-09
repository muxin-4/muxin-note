// 两个循环，如果数据量很大或循环操作很复杂的话，开销一定不小
function multiplyByTwo(a, b, c, callback) {
  var i, ar = [];
  for (i = 0; i < 3; i++) {
    ar[i] = callback(arguments[i] * 2);
  }
  return ar;
}

var myarr = [];
myarr = multiplyByTwo(1, 2, 3, function(a) {
  return a + 1;
});
