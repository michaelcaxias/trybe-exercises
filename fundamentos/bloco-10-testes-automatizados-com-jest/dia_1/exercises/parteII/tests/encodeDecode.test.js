const { encode, decode } = require('../challenges');
const challenges = require('../challenges');

describe('9 - Crie uma função que Codifique e Decodifique', () => {
  it('Testes dos exercícios 10.1', () => {
    expect(typeof encode).toBe('function');
    expect(typeof decode).toBe('function');
    expect(challenges.encode('a e i o u')).toBe('1 2 3 4 5');
    expect(challenges.decode('1 2 3 4 5')).toBe('a e i o u');
    expect(challenges.encode('g t k d p')).not.toBe('1 2 3 4 5');
    expect(challenges.decode('6 7 8 9')).not.toBe('a e i o u');
    expect(challenges.decode('1 2 3 4 5').length === 'a e i o u'.length).toBe(true);
  });

  it('Retorne uma string codificada quando a função encode for utilizada', () => {
    expect(challenges.encode('hello')).toBe('h2ll4');
    expect(challenges.encode('How are you today?')).toBe('H4w 1r2 y45 t4d1y?');
    expect(challenges.encode('This is an encoding test.')).toBe('Th3s 3s 1n 2nc4d3ng t2st.');
    expect(challenges.encode('go Trybe!')).toBe('g4 Tryb2!');
  });

  it('Retorne uma string decodificada quando a função decode for utilizada', () => {
    expect(challenges.decode('h2ll4')).toBe('hello');
    expect(challenges.decode('H4w 1r2 y45 t4d1y?')).toBe('How are you today?');
    expect(challenges.decode('Th3s 3s 1n 2nc4d3ng t2st.')).toBe('This is an encoding test.');
    expect(challenges.decode('g4 Tryb2!')).toBe('go Trybe!');
  });
});
