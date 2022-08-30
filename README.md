# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @omid-g12/lotide`

**Require it:**

`const _ = require('@omid-g12/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertEqual`: assertion for input === expected 
* `assertArraysEqual`: assertion for [input] === [expected]
* `assertObjectEqual`: assertion for {input} === {expected}
* `countLetters`: counts how many times each letter is used in a string
* `countOnly`: counts how many of the requested item is in a list
* `eqArrays`: check if [input] === [expected]
* `eqObjects`: check if {input} === {expected}
* `findKey`: finds the key of a item in an object with a nested object
* `findKeyByValue`: finds the key of an item based on its value
* `head`: returns the first item (head) of an array
* `letterPositions`: returns the position of a specific letter in a given string
* `map`: maps the requested value from a given array
* `middle`: returns the values between the first and last items (middle) of an array
* `tail`: returns all items except the head of an array
* `takeUntil`: iterated through an array until it reaches the requested element
* `without`: returns an array without the requested element 