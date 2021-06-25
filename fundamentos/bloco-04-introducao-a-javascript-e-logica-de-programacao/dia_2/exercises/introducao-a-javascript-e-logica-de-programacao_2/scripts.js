//Exercicios JS
//ex 01

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for(let walk = 0; walk < numbers.length; walk +=1) {
    //console.log(numbers[walk])
}
//ex 02
let sum = 0;
for (let index = 0; index < numbers.length; index += 1) {
    sum += numbers[index];
}
console.log("A soma de tudo é: "+ sum);

//ex 03
let arithmeticAverage = sum / numbers.length;
console.log("A média aritmética é: " + arithmeticAverage);

//ex 04
if(arithmeticAverage > 20){
    console.log("Valor aritmético é maior que 20");
}
else{
    console.log("valor aritmético é menor ou igual a 20");
}

//ex 05
let higherNumber = numbers[0];
for(let indexValue = 0; indexValue < numbers.length; indexValue += 1){
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
let lowerNumber = numbers[0];
for(let indexValue = 1; indexValue < numbers.length; indexValue += 1){
    if(numbers[indexValue] < lowerNumber){
        lowerNumber = numbers[indexValue]
    }
}
console.log("O menor número é: "+ lowerNumber)

//ex 08
let listArray = [];

for(indexArray = 1; indexArray <= 25; indexArray+=1){
    listArray.push(indexArray);
}
console.log(listArray)

//ex 09
let division = 0;
for(indexDivision = 0; indexDivision < listArray.length; indexDivision+=1){
    division = listArray[indexDivision] / 2
    console.log("O resultado da divisão por 2 é: " + division)
}