let a = 30;
let b = 20;
let c = 10;
let maiorNumeroA = a > b && a > c;
let maiorNumeroB = b > c && b > a;
let maiorNumeroC = c > a && c > b;

if (maiorNumeroA) {
    console.log("O maior número é:", a)
}
else if(maiorNumeroB) {
    console.log("O maior número é:", b)
}
else if(maiorNumeroC){
    console.log("O maior número é:", c)
}