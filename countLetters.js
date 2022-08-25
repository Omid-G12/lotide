//Copy your assertEqual function into this new file.

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

//New code:

const countLetters = function(string) {
  let result = {};
  
  for (let letter of string) {
    if (letter !== " " && result[letter]) {
      result[letter] += 1;
    } else if (letter !== " ") {
      result[letter] = 1;
    }
  }
  console.log(result);
  return result;
};

countLetters('lighthouse in the house')

