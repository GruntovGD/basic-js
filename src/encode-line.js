const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let bufferEl = str[0]
  let result = []
  let bufferArr = [0, '']
  for (let i = 0; i < str.length + 1; i++) {
    if (bufferEl == str[i]) {
      bufferArr[0] += 1;
      bufferArr[1] = bufferEl;
      bufferEl = str[i]
    }
    else {
      bufferEl = str[i]
      result.push((bufferArr[0]==1) ? bufferArr[1] : bufferArr.join(''));
      bufferArr = [0, '']
      i -= 1
    }
  }
  return result.join("")
}

module.exports = {
  encodeLine
};
