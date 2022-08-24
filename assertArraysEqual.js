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

