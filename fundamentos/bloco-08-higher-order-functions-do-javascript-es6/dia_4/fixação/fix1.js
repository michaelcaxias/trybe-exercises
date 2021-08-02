const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const isEven = numbers.filter((element) => element % 2 === 0);
const sumAll = numbers.reduce((accumulator, number) => accumulator + number);
console.log(sumAll);