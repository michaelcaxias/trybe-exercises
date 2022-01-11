const checkValue = (number) => {
  if (typeof number !== "number") {
    return "o valor deve ser um número";
  }
  if (number > 0) return "positivo";
  if (number < 0) return "negativo";
  else return "neutro";
};

module.exports = checkValue;
