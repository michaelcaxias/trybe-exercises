type Slices  = 4 | 6 | 8;

interface Pizza {
    flavor: string,
    slices: Slices
}

const pizzaMussarela: Pizza = {
  flavor: 'Mussarela',
  slices: 8
}

const pizzaVegan: Pizza = {
  flavor: 'Vegana',
  slices: 4
}

const candyPizza: Pizza = {
  flavor: 'Doce',
  slices: 6
}

console.log(pizzaMussarela);
console.log(pizzaVegan);
console.log(candyPizza);