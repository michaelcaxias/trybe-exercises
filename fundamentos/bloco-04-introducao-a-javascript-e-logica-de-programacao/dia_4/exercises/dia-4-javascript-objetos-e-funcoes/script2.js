//Exercicios Parte II - Funções
//Exercicio 1
function isPalindrome(string) {

    let word = string.toLowerCase().split('');
    let reverseWord = string.toLowerCase().split('').reverse();

    if (word.join() === reverseWord.join()) {
        return true;
    }
    else {
        return false;
    }
}
console.log(isPalindrome('anna'))
//Exercicio 2 
function highestNumber(array) {
    //max pegada por https://www.freecodecamp.org/news/three-ways-to-return-largest-numbers-in-arrays-in-javascript-5d977baa80a1/
    //apply -> https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Function/Apply
    return Math.max.apply(null, array)
    //o argumento null pegará todos os índices do array e colocará dentro do parametro do math.max, como se fosse math.max(numbers[0], numbers[1]....)
}
console.log(highestNumber([2, 3, 6, 7, 10, 1]))
//Exercicio 3
function lowestNumber(array) {
    let numberPosition = 0;
    for (let index = 1; index < array.length; index+=1){
        if (numberPosition > array[index]) {
            numberPosition = array[index];
        }
        else {
            numberPosition += 1
        }
    }
    return numberPosition
}
console.log(lowestNumber([2, 4, 6, 7, 10, 0, -3]))
//Exercicio 4
function maxCharacters(array) {
    
}