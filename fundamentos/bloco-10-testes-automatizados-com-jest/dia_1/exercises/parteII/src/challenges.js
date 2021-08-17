
// Desafio 1
function compareTrue(n1, n2) {
  // eslint-disable-next-line sonarjs/prefer-single-boolean-return
  if (n1 === true && n2 === true) {
    return true;
  }
  // eslint-disable-next-line no-else-return
  else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}
// Desafio 4
function concatName(array) {
  let lastItem = array[array.length - 1];
  let firstItem = array[0];
  return `${lastItem}, ${firstItem}`;
}
// Desafio 5
function footballPoints(wins, ties) {
  let winPoints = wins * 3;
  let totalPoints = winPoints + ties;
  return totalPoints;
}
// Desafio 6
function highestCount(array) {
  // funções max e apply informadas pela fonte: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Function/Apply
  let higherNumber = Math.max.apply(null, array);
  let count = 0;
  for (let index in array) {
    if (higherNumber === array[index]) {
      count += 1;
    }
  }
  return count;
}
// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let mouseNumber = Math.abs(mouse);
  let cat1Number = Math.abs(cat1);
  let cat2Number = Math.abs(cat2);

  if (Math.abs(cat1Number - mouseNumber) < Math.abs(cat2Number - mouseNumber)) {
    return 'cat1';
  }
  if (Math.abs(cat2Number - mouseNumber) < Math.abs(cat1Number - mouseNumber)) {
    return 'cat2';
  }
  if (Math.abs(cat2Number - mouseNumber) === Math.abs(cat1Number - mouseNumber)) {
    return 'os gatos trombam e o rato foge';
  }
}
// Desafio 8
function fizzBuzz(array) {
  let ArrayNumbers = [];
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] % 3 === 0 && array[index] % 5 === 0) {
      ArrayNumbers.push('fizzBuzz');
    } else if (array[index] % 3 === 0 && array[index] % 5 !== 0) {
      ArrayNumbers.push('fizz');
    } else if (array[index] % 5 === 0 && array[index] % 3 !== 0) {
      ArrayNumbers.push('buzz');
    } else if (array[index] % 5 !== 0 && array[index] % 3 !== 0) {
      ArrayNumbers.push('bug!');
    }
  }
  return ArrayNumbers;
}
// Desafio 9
function encode(string) {
  let encoding = '';
  for (let index = 0; index < string.length; index += 1) {
    switch (string[index]) {
    case 'a':
      encoding += '1';
      break;
    case 'e':
      encoding += '2';
      break;
    case 'i':
      encoding += '3';
      break;
    case 'o':
      encoding += '4';
      break;
    case 'u':
      encoding += '5';
      break;
    default:
      encoding += string[index];
    }
  }
  return encoding;
}
function decode(string) {
  let encoding = '';
  for (let index = 0; index < string.length; index += 1) {
    switch (string[index]) {
    case '1':
      encoding += 'a';
      break;
    case '2':
      encoding += 'e';
      break;
    case '3':
      encoding += 'i';
      break;
    case '4':
      encoding += 'o';
      break;
    case '5':
      encoding += 'u';
      break;
    default:
      encoding += string[index];
    }
  }
  return encoding;
}
module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
