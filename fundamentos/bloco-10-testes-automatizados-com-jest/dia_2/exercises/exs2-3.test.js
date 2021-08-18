const data = require('./data');

describe('2 - Verifique o funcionamento da função getUserName com a sintaxe promises', () => {

  it('Verifica se a chamada da função com o parâmetro 1 retorna Mark', () => {
    data.getUserName(1).then((resolve) => {
      expect(resolve).toBe('Mark');
    });
  });

  it('Verifica se a chamada da função com um ID inexistente retorna um erro',  () => {
    return data.getUserName(3).catch((reject) => {
      expect(reject.message).toEqual("User with 3 not found.");
    })
  });

});

describe('3 - Verifique o funcionamento da função getUserName com async/await', () => {

  it('Verifica se a chamada da função com o parâmetro 1 retorna Mark', async () => {
    const name = await data.getUserName(1)
    expect(name).toBe('Mark')
  });

  it('Verifica se a chamada da função com um ID inexistente retorna um erro', async () => {
    expect.assertions(1);
    try {
      await data.getUserName(3);
    } catch (error) {
      expect(error.message).toEqual('User with 3 not found.');
    }
  });

});