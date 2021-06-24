//Exercicios JS
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
//ex 02
let sum = 0;
for (let index = 0; index < numbers.length; index += 1) {
    sum += numbers[index]
    console.log(sum)
}
//ex 03
let arithmeticAverage = sum / numbers.length
console.log("A média aritmética é: " + arithmeticAverage)
