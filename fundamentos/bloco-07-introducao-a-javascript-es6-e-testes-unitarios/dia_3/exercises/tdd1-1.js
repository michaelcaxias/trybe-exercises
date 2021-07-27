const assert = require('assert');

/* ----- Parte I ----- */

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

const expected = sum(4, 5);
const expected2 = sum(0, 0);

assert.strictEqual(expected, 9, 'O resultado da soma de 4 + 5 deve ser 9');
assert.strictEqual(expected2, 0, 'O resultado da soma de 0 + 0 deve ser 0');