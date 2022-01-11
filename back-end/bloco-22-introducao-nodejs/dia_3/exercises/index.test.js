const { expect } = require("chai");
const checkValue = require("./index.js");

describe("Verifica se a função checkValue está funcionando corretamente", () => {
  it("Verifica se a função gera um resultado positivo", () => {
    expect(checkValue(1)).to.be.a("string");
    expect(checkValue(1)).to.be.equal("positivo");
  });
  it("Verifica se a função gera um resultado negativo", () => {
    expect(checkValue(-1)).to.be.a("string");
    expect(checkValue(-1)).to.be.equal("negativo");
  });
  it("Verifica se a função gera um resultado neutro", () => {
    expect(checkValue(0)).to.be.a("string");
    expect(checkValue(0)).to.be.equal("neutro");
  });
  it("Verifica se a função recebe apenas números", () => {
    expect(checkValue('string')).to.be.equal('o valor deve ser um número');
  });
});
