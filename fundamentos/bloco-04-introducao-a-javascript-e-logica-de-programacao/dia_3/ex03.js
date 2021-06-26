
let n = 5;
let symbol = '*';
let line = '';
let inputPosition = n;

for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {

  for (let columnIndex = 0; columnIndex <= n; columnIndex += 1) {

    if (columnIndex < inputPosition) {

     line = line + ' ';

    } else {

     line = line + symbol;

    }
  }

  console.log (line);
 line = '';
  inputPosition -= 1;
};

// A cada repetição a variavel line é resetada e o inputPosition é decrementado, ou seja, o loop principal será repetido até zerar o inputPosition e quando isso acontecer, todos os espaços e asteristicos serão computados

