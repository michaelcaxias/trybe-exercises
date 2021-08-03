const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const isEven = (element) => element % 2 === 0;
const sumPair = (accumulator, number) => accumulator + number;
const sumAll = numbers.filter(isEven).reduce(sumPair);

console.log(sumAll);