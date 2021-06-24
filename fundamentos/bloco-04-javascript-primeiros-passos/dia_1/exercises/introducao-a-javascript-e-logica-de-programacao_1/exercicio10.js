let valorCusto = 50;
let valorVenda = 55;

let impostoSobreOCusto = valorCusto * 20 / 100;
let valorCustoTotal = valorCusto + impostoSobreOCusto
let valorLucro = valorVenda - valorCustoTotal


console.log("O imposto é de:", impostoSobreOCusto + "$")
console.log("O valor do custo total é de:", valorCustoTotal + "$")
console.log("O valor do lucro é de:", valorLucro + "$")
