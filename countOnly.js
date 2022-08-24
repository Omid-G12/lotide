//Copy your assertEqual function into this new file.

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

//New code

const countOnly = function(allItems, itemsToCount) {
  let count = {};

  for (const key in itemsToCount) {
    let a = 0;
    for (let item of allItems) {
      
      if (item === key && itemsToCount[key] === true) {
        a += 1;
        count[item] = a;
      }
    }
  }
  console.log(count);
  return count;
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);