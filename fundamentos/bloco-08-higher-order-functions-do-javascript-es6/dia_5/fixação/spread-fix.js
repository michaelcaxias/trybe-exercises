// lista de frutas favoritas
const specialFruit = ['Maçã', 'Cupuaçu', 'Graviola', 'Bacuri'];

// lista de elementos adicionais
const additionalItens = ['Banana', 'Melância', 'Maracuja'];

const fruitSalad = (fruit, additional) => {
  return [...fruit, ...additional]
};

console.log(fruitSalad(specialFruit, additionalItens));