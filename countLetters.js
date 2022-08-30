//Copy your assertEqual function into this new file.

const assertEqual = require('./assertEqual');
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

module.exports = countLetters;
//countLetters('lighthouse in the house')

