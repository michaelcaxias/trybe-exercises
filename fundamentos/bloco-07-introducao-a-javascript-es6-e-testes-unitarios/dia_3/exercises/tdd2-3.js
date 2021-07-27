const assert = require('assert');

const sumAllNumbers = (array) => {
  let output = 0;
  for (let index = 0; index < array.length; index += 1) {
    output += array[index];
  }
  return output
}

const numbers = [9, 23, 10, 3, 8];
const expected = 53;
const output = sumAllNumbers(numbers);

console.log(sumAllNumbers(numbers));

assert.strictEqual(typeof sumAllNumbers, 'function');
assert.strictEqual(output, expected);