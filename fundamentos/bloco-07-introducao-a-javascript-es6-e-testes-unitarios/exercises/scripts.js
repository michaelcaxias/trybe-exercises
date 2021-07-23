
/* ----- PARTE 1 ----- */

/* const testingScope = (escopo) => {
  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
    console.log(ifScope);
  } else {
    let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
}

testingScope(true); */

/* ----- PARTE 1.1 ----- */

/* const oddsAndEvens = [13, 3, 4, 10, 7, 2];

oddsAndEvens.sort((a, b) => {
  return a - b;
});

console.log(oddsAndEvens); */


/* ----- PARTE 2 ----- */

/* Solução encontrada em https://qastack.com.br/programming/3959211/what-is-the-fastest-factorial-function-in-javascript */

factorial = number => (number < 2) ? 1 : factorial(number - 1) * number;
/* console.log(factorial(5)) */

longestWord = (phrase) => {
  phrase.split(' ')
  
} 

console.log(longestWord("Antônio foi no banheiro e não sabemos o que aconteceu")) // retorna 'aconteceu'
