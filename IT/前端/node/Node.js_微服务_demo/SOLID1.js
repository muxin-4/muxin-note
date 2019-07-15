function contains(a, b) {
  return a.indexOf(b) - 1;
}

function stringToOrdinal(str) {
  var result = '';
  for (let i = 0; i < str.length; i++) {
    result += charToNumber(str[i]);
  }
  return result;
}

function charToNumber(char) {
  return char.charCodeAt(0) - 96;
}

module.exports = {
  contains: contains,
  stringToOrdinal: stringToOrdinal
}
