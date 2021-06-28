//ex01
console.log("EXERCICIO 1")

let n = 5;
let line = "";
let symbol = "*";
for (let index = 0; index < n; index+=1){
    line = line + symbol
}
for (let index = 0; index < n; index+=1){
    console.log(line)
}

// dado a variavel n com um numero maior que 1
// definimos uma variavel chamado square VAZIA que vai armazenar 5 vezes o nosso simbolo 
// feito isso criamos outra variavel chamada symbol que receberá o asteristico
// criamos um loop para repetir enquanto for menor do que o numero dado na variavel n 
// e a cada repetiçao o square soma ele mesmo com o simbolo, entao no final dará a quantidade n de simbolos em uma mesma linha 