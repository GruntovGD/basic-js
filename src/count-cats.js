const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(mat) {
  let acc = 0
  mat.forEach(el => {
    el.forEach(el =>(el == '^^') ? acc++ : acc)
  });
  return acc
}

module.exports = {
  countCats
};
