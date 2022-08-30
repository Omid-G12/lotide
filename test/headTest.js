const assertEqual = require('../assertEqual');
const head = require('../head');

console.log(head([1, 2, 3, 4]));
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
console.log(head([]));