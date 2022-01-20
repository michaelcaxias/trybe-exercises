const getCep = require("../models/getCep");

const validateCep = async (cep) => {
  const validCep = /^[0-9]{8}$/;
  
  if (!validCep.test(cep)) {
    return {
      error: {
        code: "invalidData",
        message: "CEP inválido",
      },
    };
  }
  if (getCep(cep).length === 0) {
    return { error: { code: "notFound", message: "CEP não encontrado" } };
  }
  const cepExists = await getCep(cep);
  console.log(cepExists);
  return cepExists;
};

module.exports = validateCep;
