const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let max=0
  let buf
  let arr = []
  let arred = Array.from(String(n))
  for(let i = 0;i<6;i++){    
    arred.splice(i, 1)
    arr.push(+arred.join('')) 
    arred = Array.from(String(n))   
  }
  arr.length=n.toString().length
  arr.forEach(el=>max=(el>max)? el : max)
  return max
}

module.exports = {
  deleteDigit
};
