const assert = require('assert');

function myRemoveWithoutCopy(arr, item) {
  for (let index = 0, len = arr.length; index < len; index += 1) {
    if (arr[index] === item) {
      arr.splice(index, 1);
      index -= 1;
      len -= 1;
    }
  }

  return arr;
}

const expected = myRemoveWithoutCopy([1, 2, 3, 4], 3);
const expected2 = myRemoveWithoutCopy([1, 2, 3, 4], 5);

assert.deepStrictEqual(expected, [1, 2, 4]), 'Era esperado que o retorno fosse [1, 2, 4]';
assert.notDeepStrictEqual(expected, [1, 2, 3, 4], 'Era esperado que não houvesse o número 3');
assert.deepStrictEqual(expected2, [1, 2, 3, 4], 'Era esperado que o retorno fosse [1, 2, 3, 4]');