const assert = require('assert');

const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten() {
  return arrays.reduce((accumulator, element) => accumulator.concat(element))
}

assert.deepStrictEqual(flatten(), ['1', '2', '3', true, 4, 5, 6]);

//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/concat