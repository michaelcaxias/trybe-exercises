
const validateCep = (cep) => {
  const validCep = /^[0-9]{8}$/;

  if (!validCep.test(cep)) {
    return {
      error: {
        code: "invalidData",
        message: "CEP inválido"
      }
    };
  }
  return { cep };
}

module.exports = validateCep;



// app.get("/cep/:cep", (req, res) => {
//   const { cep } = req.params;
//   const validCep = /^[0-9]{8}$/;

//   if (!validCep.test(cep)) {
//     res
//       .status(400)
//       .json({ error: { code: "invalidData", message: "CEP inválido" } });
//   } else {
//     res.status(200).json({ cep });
//   }
// });