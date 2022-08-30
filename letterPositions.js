//Previous code:
const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

//New Code:
const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " " && results[sentence[i]]) {
    
    results[sentence[i]].push(i);
    } else if (sentence[i] !== " ") {
      results[sentence[i]] = [i];
    }
  }  
  return results;
};

module.exports = letterPositions;

/* console.log(letterPositions("lighthouse in the house"));

assertArraysEqual(letterPositions("hello").e, [1]); */