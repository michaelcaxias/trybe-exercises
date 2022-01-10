const typeOfFunction = (a, b, c) => {
  if (typeof a !== 'number') return true;
  if (typeof b !== 'number') return true;
  if (typeof c !== 'number') return true;
}


const promisse = (a, b, c) => {
  return new Promise((resolve, reject) => {
    if (typeOfFunction(a, b, c)) {
      reject(new Error('Informe apenas números'));
    } else {
      const sum = (a + b) * c;
      sum < 50 ? reject(new Error('Valor muito baixo')) : resolve(sum);
    }
  });
};

const resolvePromisse = async () => {
  try {
    const result = await promisse(5, 2, 2);
    console.log(result);
  } catch (err) {
    console.log(err);
  }
}

resolvePromisse();