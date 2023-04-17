const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  try {
    if (arguments.length<1) { return "Unable to determine the time of year!" }
    if (date.hasOwnProperty('toString')) throw err;
    date = date.getMonth()    
    return (date >= 2 && date <= 4) ? 'spring' :
      (date >= 5 && date <= 7) ? 'summer' :
        (date >= 8 && date <= 10) ? 'autumn' : 'winter'
  }
  catch(err){
    throw new Error('Invalid date!')
  }
  
}

module.exports = {
  getSeason
};
