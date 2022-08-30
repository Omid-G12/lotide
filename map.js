const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

const map = function(array, callback) {
  
  let output = [];

  for (let item of array) {
    output.push(callback(item));
  }

  return output;
}

module.exports = map;

/* const words = ["ground", "control", "to", "major", "tom"];

const results1 = map(words, word => word[0]);
console.log(results1);

assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']); */