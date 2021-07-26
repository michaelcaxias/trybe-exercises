const assert = require('assert');

const wordLengths = (array) => {
  let output = [];
  for (let index = 0; index < array.length; index += 1) {
    let length = array[index].length;
    output.push(length)
  }
  return output;
}

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepStrictEqual(output, expected);