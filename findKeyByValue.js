//Copy your assertEqual function into this new file.

const assertEqual = require('./assertEqual');

//New Code:


const findKeyByValue = function(obj, value) {
  let keys = Object.keys(obj);
  for (let key of keys) {
    if (obj[key] === value) {
      return key;
    } 
  }
};

module.exports = findKeyByValue;

/* const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "comedy"); */