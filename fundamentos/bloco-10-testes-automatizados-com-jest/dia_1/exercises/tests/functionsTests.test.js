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