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

function techList() {
  // seu código aqui
}

function hydrate() {
  // seu código aqui
}

module.exports = {
  decode,
  encode,
  techList,
  hydrate,
};
