const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
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

module.exports = eqObjects;

/* const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
eqObjects(ab, ba); // => true
assertEqual(eqObjects(ab, ba), true);

const abc = { a: "1", b: "2", c: "3" };
eqObjects(ab, abc); // => false
assertEqual(eqObjects(ab, abc), false);

const db = { d: "4", b: "2" };
assertEqual(eqObjects(ab, db), false);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
eqObjects(cd, dc); // => true
assertEqual(eqObjects(cd, dc), true);

const cd2 = { c: "1", d: ["2", 3, 4] };
eqObjects(cd, cd2); // => false
assertEqual(eqObjects(cd, cd2), false); */