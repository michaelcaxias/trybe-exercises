const typeOfFunction = (a, b, c) => {
  if (typeof a !== 'number') return true;
  if (typeof b !== 'number') return true;
  if (typeof c !== 'number') return true;
}

const shuffleNumber = () => {
  return Math.floor(Math.random() * 101);
}


const promisse = (a, b, c) => {
  return new Promise((resolve, reject) => {
    if (typeOfFunction(a, b, c)) {
      reject(new Error('Informe apenas números'));
    } else {
      const sum = (a + b) * c;
      sum < 50 ? reject(new Error(`Valor muito baixo: ${sum}`)) : resolve(sum);
    }
  });
};

const resolvePromisse = async () => {
  try {
    const result = await promisse(
      shuffleNumber(),
      shuffleNumber(),
      shuffleNumber()
      );
    console.log(result);
  } catch (err) {
    console.log(err);
  }
}

resolvePromisse();