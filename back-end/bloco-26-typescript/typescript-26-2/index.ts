const readlineSync = require('readline-sync');

enum mounthsOfYear {
  January = 1,
  February = 2,
  March = 3,
  April = 4,
  May = 5,
  June = 6,
  July = 7,
  August = 8,
  September = 9,
  October = 10,
  November = 11,
  Decembe = 11
}

enum seasonsOfYear {
  Winter = 1,
  Spring = 2,
  Summer = 3,
  Autumn = 4
}

const month = readlineSync.question('Enter month: ');
const season = readlineSync.question('Enter hemisphere: ');