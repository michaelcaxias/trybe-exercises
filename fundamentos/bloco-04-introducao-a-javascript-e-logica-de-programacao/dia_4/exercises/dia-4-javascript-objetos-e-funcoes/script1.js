//Exercicios Parte I - Objetos e For/In
let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim'
  };
let patinhasInfo = {
    personagem: 'Tio Patinhas',
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: 'O último MacPatinhas',
    recorrente: 'Sim'
  };

console.log('===== 1 =====')

console.log('Bem vinda, ' + info.personagem);

console.log('===== 2 =====')

console.log(info.recorrente);

console.log('===== 3 =====')

for(let chave in info) {
    console.log(chave)
}

console.log('===== 4 =====')

for(let chave in info) {
    console.log(info[chave])
}

console.log('===== 5 =====')

for (let properties in info) {
  if (properties === 'recorrente' && info.recorrente === 'Sim' && patinhasInfo.recorrente === 'Sim') {
    console.log('Ambos recorrentes')
  }
  else {
    console.log(info[properties] + ' e ' + patinhasInfo[properties])
  }
}