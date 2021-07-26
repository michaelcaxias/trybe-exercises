const assert = require('assert');

const greetPeople = (people) => {
  let greeting = 'Hello ';
  let output = [];
  for (let index = 0; index < people.length; index += 1) {
    let sum = greeting + people[index];
    output.push(sum)
  }
  return output;
};

const parameter = ['Irina', 'Ashleigh', 'Elsa'];
const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];
const output = greetPeople(parameter)

assert.deepStrictEqual(output, result)