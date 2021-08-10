const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

saudacoes[1](saudacoes[0]); // Olá

//produzir mesmo resultado



const greeting = [firstGreeting] = saudacoes;
console.log(firstGreeting);
