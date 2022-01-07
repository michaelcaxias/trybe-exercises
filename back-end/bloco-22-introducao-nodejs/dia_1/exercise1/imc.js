const readlineSync = require('readline-sync');

const weight = parseInt(readlineSync.questionInt('Enter your weight in kg: '));
const height = parseInt(readlineSync.questionInt('Enter your height in meters: '));

const calculateBMI = () => console.log(parseInt((weight / (height * height)) * 10000));
calculateBMI();