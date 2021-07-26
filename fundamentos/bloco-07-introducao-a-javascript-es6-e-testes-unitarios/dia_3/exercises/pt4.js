const assert = require('assert');

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

const expected = myFizzBuzz(60);
const expected2 = myFizzBuzz(9);
const expected3 = myFizzBuzz(25);
const expected4 = myFizzBuzz(11);
const expected5 = myFizzBuzz('numero');

assert.deepStrictEqual(expected, 'fizzbuzz');
assert.deepStrictEqual(expected2, 'fizz');
assert.deepStrictEqual(expected3, 'buzz');
assert.deepStrictEqual(expected4, 11);
assert.deepStrictEqual(expected5, false);