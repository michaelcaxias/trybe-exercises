const getCep = require("../models/getCep");

const validateCep = (cep) => {
  const validCep = /^[0-9]{8}$/;

  if (!validCep.test(cep)) {
    return {
      error: {
        code: "invalidData",
        message: "CEP inválido",
      },
    };
  }
  if (!getCep(cep).length) {
    return { error: { code: "notFound", message: "CEP não encontrado" } };
  }
  return getCep(cep);
};

module.exports = validateCep;
