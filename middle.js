//Copy your assertArraysEqual and eqArrays functions into this new file.

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

//New code 

const middle = function(array) {
  let mid = [];
  
  if (array.length >= 3 && array.length % 2 !== 0) {
    let i = (array.length - 1) / 2;
    //console.log(i);
    mid.push(array[i]);
  } else if (array.length >= 3 && array.length % 2 === 0) {
    let i = (array.length)/2;
    //console.log(i);
    mid.push(array[i-1], array[i]);
  }
  console.log(mid);
  return mid;
};

assertArraysEqual(middle([1]), [])
assertArraysEqual(middle([1, 2]), [])
assertArraysEqual(middle([1, 2, 3]), [2])
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3])
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3])
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4])