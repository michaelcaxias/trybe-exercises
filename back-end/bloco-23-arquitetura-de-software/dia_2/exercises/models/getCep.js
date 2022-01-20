const connection = require("./connection");

const getCep = async (cep) => {
  const [queryCep] = await connection.execute(
    "SELECT * FROM ceps WHERE cep = ?",
    [cep]
  );
  return queryCep;
};

module.exports = getCep;
