//ex02
console.log("EXERCICIO 2")

let n = 5;
let line = "";
let symbol = "*";

for (let index = 0; index < n; index +=1){
    line = line + symbol
    console.log(line)
}

// Definimos a variavel n que recebe um numero maior que 1
// A partir disso criamos a variavel line vazia que armazenara o simbolo posteriormente
// criamos a variavel symbol com o asteristico para usarmos posteriormente
// criamos um loop que vai de 0 e continuara sendo repetido enqunato for menor que n
// a cada repetiçao a variavel line soma com a variavel symbol, ou seja, a cada repetição
// é acrescentado um simbolo, até que no final fique uma escada.