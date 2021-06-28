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
console.log(isPalindrome('ana'))
//Exercicio 2 
function highestNumber(array) {
    let numberPosition = 0;
    for (let index = 1; index < array.length; index+=1){
        if (numberPosition < array[index]) {
            numberPosition = array[index];
        }
        else {
            numberPosition += 1
        }
    }
    return numberPosition - 1
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