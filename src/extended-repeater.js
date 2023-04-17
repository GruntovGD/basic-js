const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  if (options.addition === null) options.addition = 'null'
  let arr = [];
  let endarr=[];
  arr.length = options.additionRepeatTimes || 1
  endarr.length = options.repeatTimes  || 1
  return endarr.fill(str + arr.fill(options.addition).join(options.additionSeparator || '|')).join(options.separator || '+')
}

module.exports = {
  repeater
};
