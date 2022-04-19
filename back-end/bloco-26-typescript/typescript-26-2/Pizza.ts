type Slices  = 4 | 6 | 8;
type Flavors = "Mussarela" | "Calabresa" | "Vegana" | "Doce";

interface Pizza {
    flavor: Flavors,
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