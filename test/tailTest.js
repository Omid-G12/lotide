const assert = require('chai').assert;
const assertArraysEqual = require('../assertArraysEqual');
const assertEqual = require('../assertEqual');
const tail = require('../tail');

describe('#tail', () => {
  it("it returns '3' for length of original input ['Yo Yo', 'Lighthouse', 'Labs']", () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    tail(words);
    assert.deepEqual(words.length, 3);
  });
  it("it returns ['Lighthouse', 'Labs'] for ['Yo Yo', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(['Yo Yo', 'Lighthouse', 'Labs']), ['Lighthouse', 'Labs']);
  });
  
});
