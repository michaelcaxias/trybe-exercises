
//Fixaçao #1//
const name = "Michael";
const birthCity = "Belem";
const birthYear = "2002";
//console.log(name, birthCity, birthYear);

//Fixaçao #2
let patientId = 50;
let isEnrolled = true;
const patientInfo = {
  firstName: 'Ana',
  lastName: 'Santos',
};
const patientEmail = 'ana@email.com';
//console.log(typeof patientId, typeof isEnrolled, typeof patientInfo, typeof patientEmail);

//Fixação #3
var base = 5;
var altura = 8;
var area = 5*8;
var perimetro = 2* (base + altura);
//console.log("A àrea é:", area, "O perimetro é:", perimetro);

//Fixação #4 if/else
var nota = 90;
var notaMaiorQ = nota >= 80;
var notaMenorQ = nota < 80 && nota >= 60;
var notaRuim = nota < 60;

if (notaMaiorQ) {
    //console.log("Parabéns, você foi aprovada(o)!")
}

else if (notaMenorQ) {
    //console.log("Você está na nossa lista de espera")
}
else if (notaRuim) {
    //console.log("Você foi reprovada(o)")
}

//Fixação #5 switch/case
var candidataProsel = "aprovada"

switch (candidataProsel) {
    case "aprovada":
    //console.log("Aprovada");
    break;

    case "lista":
    //console.log("Lista");
    break;

    case "reprovada":
    //console.log("Reprovada");
    break;

    default:
    //.log("Não se aplica")
}
