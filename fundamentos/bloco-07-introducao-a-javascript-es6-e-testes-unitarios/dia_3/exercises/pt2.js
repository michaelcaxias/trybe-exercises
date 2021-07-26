const assert = require('assert');

function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

const expected = myRemove([1, 2, 3, 4], 3);
const expected2 = myRemove([1, 2, 3, 4], 5);

console.log(expected)

assert.deepStrictEqual(expected, [1, 2, 4], 'Era esperado que o retorno fosse [1, 2, 4]')
assert.notStrictEqual(expected, [1, 2, 3, 4], 'Era esperado que não houvesse o número 3')
assert.deepStrictEqual(expected2, [1, 2, 3, 4], 'Era esperado que o retorno fosse [1, 2, 3, 4]')
