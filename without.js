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

const without = function(source, itemsToRemove) {
  let remaining = [];
  //remaining.push("d");
  for (i = 0; i < source.length; i++) {
    let foundMatch = false;
    //remaining.push("q");
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (source[i] === itemsToRemove[j]) {
        foundMatch = true;
        //remaining.push(source[i]);
      }
    }
    if (foundMatch === false) {
      remaining.push(source[i]);
    }
  }
  console.log(remaining);
  //return remaining;
};

without([1, 2, 3], [1]) // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);