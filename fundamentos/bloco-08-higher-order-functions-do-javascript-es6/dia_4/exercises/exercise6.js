const assert = require('assert');

const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grade = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

function studentAverage() {
  return students.map((student, index) => {

    const sumOfNumbers = grade[index].reduce((accumulator, currentElement) => {
      return accumulator + currentElement;
    }, 0);

    return {
      name: student,
      average: sumOfNumbers / grade[index].length,
    }
  }
)};

const expected = [
  { name: 'Pedro Henrique', average: 7.8 },
  { name: 'Miguel', average: 9.2 },
  { name: 'Maria Clara', average: 8.8 },
];

assert.deepStrictEqual(studentAverage(), expected);