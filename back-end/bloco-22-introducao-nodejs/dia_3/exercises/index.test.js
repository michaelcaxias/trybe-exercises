const { expect } = require("chai");
const { checkValue, writeSpecificContet } = require("./index.js");
const fs = require("fs").promises;
const sinon = require("sinon");

describe("Verifica se a função checkValue está funcionando corretamente", () => {
  it("Verifica se a função gera um resultado positivo", () => {
    const value = checkValue(1);
    expect(value).to.be.a("string");
    expect(value).to.be.equal("positivo");
  });
  it("Verifica se a função gera um resultado negativo", () => {
    const value = checkValue(-1);
    expect(value).to.be.a("string");
    expect(value).to.be.equal("negativo");
  });
  it("Verifica se a função gera um resultado neutro", () => {
    const value = checkValue(0);
    expect(value).to.be.a("string");
    expect(value).to.be.equal("neutro");
  });
  it("Verifica se a função recebe apenas números", () => {
    const value = checkValue("string");
    expect(value).to.be.equal("o valor deve ser um número");
  });
});

describe("Verifica função writeSpecificContet", () => {
  beforeEach(() => {
    sinon.stub(fs, "writeFile");
  })
  afterEach(() => {
    fs.writeFile.restore();
  })
  it("Verifica se o valor do parâmetro é uma string", async () => {
    const value = await writeSpecificContet("teste.txt", "teste");
    expect(value).to.be.a('string');
  })
  it("Verifica se o valor do parâmetro foi escrito no arquivo", async () => {
    const value = await writeSpecificContet("teste.txt", "teste");
    expect(value).to.be.equals('ok');
  })
});
