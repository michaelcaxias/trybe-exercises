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
console.log(expected)

assert.notStrictEqual(expected, [1, 2, 3, 4], 'Era esperado que não houvesse o número 3')
