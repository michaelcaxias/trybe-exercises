//Exercicios JS
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//ex 02
let sum = 0;
for (let index = 0; index < numbers.length; index += 1) {
    sum += numbers[index];
  //  console.log(sum);
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
console.log("O maior número é: "+higherNumber)

//ex 06
let oddCount = 0;
for(let indexOdd = 0; indexOdd < numbers.length; indexOdd += 1){
    if(numbers[indexOdd] % 2 !== 0){
        oddCount += 1
    }
}

if (oddCount === 0) {
    console.log("nenhum valor ímpar encontrado");
}
else {
    console.log("A quantidade de valores impares é: " + oddCount);
}
//ex 07