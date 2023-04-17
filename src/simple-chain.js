const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */

const chainMaker = {
  chainarr: [],
  getLength() {
    return this.chainarr.length
  },
  addLink(val) {
    this.chainarr.push(`( ${val} )`)
    return this
  },
  removeLink(pos) {
    if (pos < 1 || pos > this.getLength() || !Number.isInteger(pos)) {
      this.chainarr = [];
      throw new Error('You can\'t remove incorrect link!')
    }

    this.chainarr.splice(pos - 1, 1)
    return this;



  },
  reverseChain() {
    this.chainarr.reverse()
    return this
  },
  finishChain() {
    let a = this.chainarr.join('~~')
    this.chainarr = []
    return a

  }
};

module.exports = {
  chainMaker
};
