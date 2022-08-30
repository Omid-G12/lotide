const assertEqual = require('./assertEqual');

const eqArrays = function(arrOne, arrTwo) {
  let result = true;
  if (arrOne.join() === arrTwo.join()) {
    for (let i = 0; i < arrOne.length; i++) {
      if (arrOne[i] === arrTwo[i]) {;
        continue;
      } else {
        result = false;
      }
    }
  } else {
    result = false;
  }
  return result;
};

module.exports = eqArrays;

