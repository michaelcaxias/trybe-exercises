const fs = require("fs").promises;

const checkValue = (number) => {
  if (typeof number !== "number") {
    return "o valor deve ser um número";
  }
  if (number > 0) return "positivo";
  if (number < 0) return "negativo";
  else return "neutro";
};

const writeSpecificContet = async (fileName, fileContent) => {
  try {
    await fs.writeFile(fileName, fileContent);
    return "ok";
  } catch (error) {
    return "erro ao escrever no arquivo";
  }
};

module.exports = {
  checkValue,
  writeSpecificContet
};
