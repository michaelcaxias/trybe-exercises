// Ao chamar a função doingThings:
const wakeUp = () => 'Acordando!!';
const drinkCoffe = () => 'Bora tomar café!!';
const sleepNow = () => 'Partiu dormir!!';
const doingThings = (func) => func();

console.log(doingThings(sleepNow));
// Ela deve retornar o valor do respectivo parâmetro, neste caso:
// Acordando!!