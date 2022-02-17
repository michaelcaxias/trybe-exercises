import {
  greeter,
  personAge,
  add, 
  sumArray,
  triangle,
  square,
  rectangle,
  losangle,
  trapaze,
  circle
} from './exercises'

console.log(greeter('Maria'));
console.log(personAge('Maria', 40));
console.log(`A soma do array é igual a ${sumArray([3, 6, 9])}`);

console.log(`Triângulo de base 10cm e altura 25cm: ${triangle(10, 25)}cm²`);
console.log(`Triângulo de base 5cm e altura 30cm: ${triangle(5, 30)}cm²`);
console.log(`Triângulo de base 100cm e altura 200cm: ${triangle(10, 25)}cm²`);

console.log(`Quadrado de lado 10cm: ${square(10)}cm²`);
console.log(`Quadrado de lado 5cm: ${square(5)}cm²`);
console.log(`Quadrado de lado 100cm: ${square(10)}cm²`);

console.log(`Retângulo de base 10cm e altura 25cm: ${rectangle(10, 25)}cm²`);
console.log(`Retângulo de base 5cm e altura 30cm: ${rectangle(5, 30)}cm²`);
console.log(`Retângulo de base 100cm e altura 200cm: ${rectangle(10, 25)}cm²`);

console.log(`
  Losangulo de diagonal maior 32cm e diagonal menor 18cm: ${losangle(32, 18)}
`)
console.log(`
  Losangulo de diagonal maior 200cm e diagonal menor 50cm: ${losangle(200, 50)}
`)
console.log(`
  Losangulo de diagonal maior 75cm e diagonal menor 25cm: ${losangle(75, 25)}
`)

console.log(`
Trapezio com base maior 100cm, base menor 70cm e altura 50cm: ${trapaze(100, 75, 50)}
`);
console.log(`
Trapezio com base maior 100cm, base menor 50cm e altura 35cm: ${trapaze(100, 50, 35)}
`);
console.log(`
Trapezio com base maior 150cm, base menor 120cm e altura 80cm: ${trapaze(150, 120, 80)}
`);

console.log(`Area do círculo de raio igual a 25cm: ${circle(25)}`);
console.log(`Area do círculo de raio igual a 100cm: ${circle(100)}`);
console.log(`Area do círculo de raio igual a 12,5cm: ${circle(12.5)}`);



