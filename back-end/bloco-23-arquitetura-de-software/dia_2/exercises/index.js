const express = require("express");
const app = express();

app.use(express.json());

app.get("/ping", (req, res) => {
  res.status(200).json({ message: "pong!" });
});

app.get("/cep/:cep", (req, res) => {
  const { cep } = req.params;
  const validCep = /^[0-9]{8}$/;

  if (!validCep.test(cep)) {
    res
      .status(400)
      .json({ error: { code: "invalidData", message: "CEP inválido" } });
  } else {
    res.status(200).json({ cep });
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
