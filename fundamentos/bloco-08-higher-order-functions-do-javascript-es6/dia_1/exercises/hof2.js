const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const raffle = (num, callback) => {
  const result = callback(1, 5);
  console.log(`O número sorteado foi ${result}!`)
  return (num === result) ? 'Parabéns você ganhou!' : 'Tente novamente'
}

console.log(raffle(4, random))