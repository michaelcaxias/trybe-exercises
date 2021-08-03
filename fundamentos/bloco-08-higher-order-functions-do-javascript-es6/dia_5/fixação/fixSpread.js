// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Maçã', 'Cupuaçu', 'Graviola', 'Bacuri'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Banana', 'Melância', 'Maracuja'];

const fruitSalad = (fruit, additional) => {
  return [...fruit, ...additional]
};

console.log(fruitSalad(specialFruit, additionalItens));