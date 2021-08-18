
const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 500);
};

test("Testa se a função uppercase() com a string 'teste' retorna 'TESTE'", (done) => {
  uppercase('teste', (string) => {
    try {
      expect(string).toBe('TESTE');
      done()
    } catch(error) {
      done(error)
    }
  });
});