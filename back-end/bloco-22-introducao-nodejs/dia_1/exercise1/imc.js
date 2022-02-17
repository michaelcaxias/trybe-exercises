const readlineSync = require('readline-sync');

const weight = parseInt(readlineSync.questionInt('Enter your weight in kg: '));
const height = parseInt(readlineSync.questionInt('Enter your height in meters: '));

const calculateBMI = () => {
    const bmi = parseInt((weight / (height ** 2)) * 10000);
    console.log(`Your BMI is: ${bmi}`);
    if (bmi < 18.5) {
        console.log('You are underweight');
    } else if (bmi < 25) {
        console.log('You are normal weight');
    } else if (bmi < 30) {
        console.log('You are overweight');
    } else {
        console.log('You are obese');
    }
}
calculateBMI();