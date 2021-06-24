//Exercicios JS
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
//ex 02
let sum = 0;
for (let index = 0; index < numbers.length; index += 1) {
    sum += numbers[index];
    console.log(sum);
}
//ex 03
let arithmeticAverage = sum / numbers.length;
console.log("A média aritmética é: " + arithmeticAverage);
//ex 04
if(arithmeticAverage > 20){
    console.log("valor maior que 20");
}
else{
    console.log("valor menor ou igual a 20");
}
//ex 05
let higherNumber = numbers[0];
for(let indexValue = 1; indexValue < numbers.length; indexValue += 1){
    if(numbers[indexValue] > higherNumber){
        higherNumber = numbers[indexValue]
    }
}
console.log(higherNumber)
//