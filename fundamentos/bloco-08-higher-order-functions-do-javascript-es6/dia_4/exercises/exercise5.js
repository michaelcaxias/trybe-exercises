const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  const counter = (accumulator, current) => (current.toLowerCase() === 'a')? accumulator + 1 : accumulator;
  const splitAllWords = (accumulator, current) => accumulator + current.split('').reduce(counter, 0);
  return names.reduce(splitAllWords, 0);
}

assert.deepStrictEqual(containsA(), 20);


const containA = (array) => {
  let accumulator = 0;
  for (let index = 0; index < names.length; index += 1) {
    for (let word = 0; word < names[index].length; word += 1) {
      if (names[index][word] === 'a' || names[index][word] === 'A') {
        accumulator += 1;
      }
    }
  }
  return accumulator
}
