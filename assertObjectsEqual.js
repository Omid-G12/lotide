const eqObjects = function(object1, object2) {
  let result = true;
  let keys = Object.keys(object1);
  if (Object.keys(object1).length !== Object.keys(object2).length) { //check if same number of keys
    result = false;
    //return result;
  }
  for (let key of keys) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])){ //check if value is array or not
      if (!eqArrays(object1[key], object2[key])) { //check if arrays are ===
        result = false;
      } 
    } else {
      if (object1[key] !== object2[key]) { //check if non-arrays are ===
        console.log(key);
        result = false;
  
      }
    }
    
  }
  
  return result;
};

const assertObjectEqual = function(actual, expected) {
  const inspect = require('util').inspect; // <= add this line
  //console.log(`Example label: ${inspect(actual)}`);
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
eqObjects(ab, ba); // => true
assertObjectEqual(ab, ba);