//Copy your assertArraysEqual and eqArrays functions into this new file.
const eqArrays = require ('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

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
  return mid;
};

module.exports = middle;
