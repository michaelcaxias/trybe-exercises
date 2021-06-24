let porcentagem = 200;

let a = porcentagem >= 90;
let b = porcentagem >= 80;
let c = porcentagem >= 70;
let d = porcentagem >= 60;
let e = porcentagem >= 50; 
let f = porcentagem < 50;
let erro = porcentagem > 100 || porcentagem < 0;

if(erro){
    console.log("ERRO: O valor excede os limites de uma porcentagem")
}
else if(a){
    console.log("A")
}
else if(b){
    console.log("B")
}
else if(c){
    console.log("C")
}
else if(d){
    console.log("D")
}
else if(e){
    console.log("E")
}
else if(f){
    console.log("F")
}