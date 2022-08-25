//Previous code:
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

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

console.log(letterPositions("lighthouse in the house"));

assertArraysEqual(letterPositions("hello").e, [1]);