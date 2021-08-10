const person = {
  name: 'João',
  lastName: 'Jr',
  age: 34,
};

const teste = { age, lastName, name } = person;

console.log(name);