// sum.test.js
const sum = require('../sum');
const myRemove = require('../myRemove');
const myFizzBuzz = require('../myFizzBuzz');
const myRemoveWithoutCopy = require('../myRemoveWithoutCopy');


describe('Função sum(a, b)', () => {
  it('Verifica se a soma de 4 + 5 retorna 9', () => {
    expect(sum(4, 5)).toBe(9)
  })
  it('Verifica se a soma de 0 + 0 retorna 0', () => {
    expect(sum(0, 0)).toBe(0)
  })
  it('Verifica se a soma de 5 + "5" retorna um erro', () => {
    expect(() => sum(4, '5')).toThrow(/parameters must be numbers/)
  })

});

describe('Função myRemove(arr, item)', () => {
  it('Verifica se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado', () => {
    let output = [1, 2, 4]
    expect(myRemove([1, 2, 3, 4], 3)).toEqual(output)
  })
  it('Verifica se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', () => {
    output = [1, 2, 3, 4];
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual(output)
  })
  it('Verifica se o array passado por parâmetro não sofreu alterações', () => {
    output = [1, 2, 3, 4];
    expect(myRemove([1, 2, 3, 4])).toEqual(output)
  })
  it('Verifica se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado', () => {
    output = [1, 2, 3, 4];
    expect(myRemove([1, 2, 3, 4], 5)).toEqual(output)
  })
});

describe('Função myRemoveWithoutCopy(arr, item)', () => {
  it('Verifica se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) retorna o array esperado', () => {
    output = [1, 2, 4]
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).toEqual(output)
  })
  it('Verifica se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', () => {
    output = [1, 2, 3, 4];
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).not.toEqual(output)
  })
  it('Verifica se o array passado por parâmetro sofreu alterações', () => {
    output = [1, 2, 3, 4];
    expect(myRemoveWithoutCopy([1, 2, 3, 4])).toEqual(output)
  })
  it('Verifica se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 5) retorna o array esperado', () => {
    output = [1, 2, 3, 4];
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 5)).toEqual(output)
  })
});

describe('Função myFizzBuzz(num)', () => {
  it('Verifica se a chamada myFizzBuzz(15) retorna o nome esperado', () => {
    output = 'fizzbuzz';
    expect(myFizzBuzz(15)).toEqual(output)
  })
  it('Verifica se a chamada myFizzBuzz(9) retorna o nome esperado', () => {
    output = 'fizz';
    expect(myFizzBuzz(9)).toEqual(output)
  })
  it('Verifica se a chamada myFizzBuzz(25) retorna o nome esperado', () => {
    output = 'buzz';
    expect(myFizzBuzz(25)).toEqual(output)
  })
  it('Verifica se a chamada myFizzBuzz(17) retorna o nome esperado', () => {
    output = 17;
    expect(myFizzBuzz(17)).toEqual(output)
  })
  it("Verifica se a chamada myFizzBuzz('não é um número') retorna false", () => {
    output = false;
    expect(myFizzBuzz('não é um numero')).toEqual(output)
  })
});

describe('Comparando dois objetos para verificar se são iguais', () => {

  const obj1 = {
    title: 'My Title',
    description: 'My Description',
  };
  
  const obj2 = {
    description: 'My Description',
    title: 'My Title',
  };
  
  const obj3 = {
    title: 'My Different Title',
    description: 'My Description',
  };

  it('Verifica se o objeto 1 é igual ao objeto 2', () => {
    expect(myFizzBuzz(obj1)).not.toEqual(obj2)
  })
  it('Verifica se o objeto 1 é igual ao objeto 3', () => {
    expect(myFizzBuzz(obj1)).not.toEqual(obj3)
  })
  it('Verifica se o objeto 2 é igual ao objeto 3', () => {
    expect(myFizzBuzz(obj2)).not.toEqual(obj3)
  })

});