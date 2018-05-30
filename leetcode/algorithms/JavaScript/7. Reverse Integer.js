/**
 * @param {number} x
 * @return {number} result
 */
var reverse = function (x) {
  result = 0;
  while (x != 0) {
    lastDigit = (x % 10);
    x = (x - lastDigit) / 10;
    result = (result * 10) + lastDigit;
  }

  if (result >= 2147483647 || result <= -2147483647) {
    return 0;
  }

  return result;
};
