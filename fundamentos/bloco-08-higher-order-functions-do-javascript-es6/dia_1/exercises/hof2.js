const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const raffle = (num) => {
  const result = random(1, 5);
  console.log(`O número sorteado foi ${result}!`)

  if (num === result) {
    return 'Parabéns você ganhou';
  } else {
    return 'Tente novamente';
  }
}

console.log(raffle(4))