function init(options) {
  function charToNumber(char) {
    return char.charCodeAt(0) - 96;
  }

  function stringToOrdinal(str) {

  }
  var stringManipulation = new stringManipulation();

  stringManipulation.contains = function (a, b) {
    return a.indexOf(b) > -1;
  }
  stringManipulation.stringToOrdinal = function (str) {
    var result = '';
    for (let i = 0; i < str.length; i++) {
      result += charToNumber(str[i]);
    }
    return result;
  }
  return stringManipulation;
}

module.exports = init;
