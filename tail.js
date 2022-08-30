const assertEqual = require('./assertEqual');

const tail = function(array) {
  console.log((array && array.length) ? array.slice(1) : undefined);
  
};

module.exports = tail;

