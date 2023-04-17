const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) throw new Error(`'arr' parameter must be an instance of the Array!`)
  let arred = arr.slice();
  let result = []
  for (let i = 0; i < arr.length; i++) {
    switch (arred[i]) {
      case '--discard-next': if (i == arred.length - 1) { arred.splice(i, 1) }
      else if (arred[i + 2] == '--double-prev') { arred.splice(i, 3); i = i - 1 } else if (arred[i + 2] == '--discard-prev') { arred.splice(i, 3); i = i - 1 } 
      else (arred.splice(i, 2), i = i - 2); break
      case '--discard-prev': (i == 0) ? (arred.splice(i, 1), i = i - 1) : (arred.splice(i - 1, 2), i = i - 2); break
      case '--double-next': (i == arred.length - 1) ? arred.splice(i, 1) : (arred.splice(i, 1, arred[i + 1])); break
      case '--double-prev': (i == 0) ? (arred.splice(i, 1), i = i - 1) : (arred.splice(i, 1, arred[i - 1])); break
    }
  }
  return arred
}



module.exports = {
  transform
};
