const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
let row = 'ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
class VigenereCipheringMachine {
  constructor(val){
    this.reverse = val
  }
  encrypt(str, key) {
    if (arguments.length < 2 || !arguments[0]) { throw new Error('Incorrect arguments!')}
    let spaces = []
    str.split('').forEach((el, ind) => (el == ' ') ? spaces.push(ind) : 0)
    str = str.replace(/\s/g, '');
    key = key.padEnd(str.length, key).toUpperCase();    
    str = str.toUpperCase().split('')
    let result = str.map((el, ind) => (row.includes(el)) ? el = row[row.indexOf(key[ind]) + row.indexOf(el)]:el)
    spaces.forEach((el) => result.splice(el, 0, ' '))
    result = (this.reverse == false) ? result.reverse().join('') : result.join('')
    return result
  }
  decrypt(str, key) {
    if (arguments.length < 2 || !arguments[0]) { throw new Error('Incorrect arguments!')}
    let spaces = []
    str.split('').forEach((el, ind) => (el == ' ') ? spaces.push(ind) : 0)
    str = str.replace(/\s/g, '');
    key = key.padEnd(str.length, key).toUpperCase();
    str = str.toUpperCase().split('')
    let result = str.map((el, ind) => (row.includes(el)) ? el = row[(-row.indexOf(key[ind]) + row.lastIndexOf(el))] : el)
    spaces.forEach((el) => result.splice(el, 0, ' '))
    result = (this.reverse == false) ? result.reverse().join('') : result.join('')
    return result
  }
}

module.exports = {
  VigenereCipheringMachine
};
