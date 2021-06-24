let salarioBruto = 3400;
let aliquotaINSS;
let aliquotaImpostoRenda;

if (salarioBruto <= 1556.94){
    aliquotaINSS = salarioBruto * 0.8
}
else if (salarioBruto <= 2594.92 ){
    aliquotaINSS = salarioBruto * 0.9
}
else if (salarioBruto <= 5189.82 ){
    aliquotaINSS = salarioBruto * 0.11
}
else if (salarioBruto <= 5189.82 ){
    aliquotaINSS = 570.88
}

let salarioBase = salarioBruto + aliquotaINSS;

if (salarioBase <= 1903.98) {
    aliquotaImpostoRenda = 0;
}
else if (salarioBase <=  2826.65) {
    aliquotaImpostoRenda = (salarioBase * 0.075) - 142.80
}
else if (salarioBase <=  3751.05) {
    aliquotaImpostoRenda = (salarioBase * 0.15) - 354.80
}
else if (salarioBase <=  4664.68) {
    aliquotaImpostoRenda = (salarioBase * 0.225) - 636.13
}
else {
    aliquotaImpostoRenda = (salarioBase * 0.275) - 869.36
}

console.log("Salário Base:", salarioBase)
console.log("Aliquota do INSS:", aliquotaINSS)
console.log("Aliquota do IR:", aliquotaImpostoRenda)
console.log("Salário: " + (salarioBase - aliquotaImpostoRenda))