const express = require("express");
const validateCep = require("./services/validateCep");
const app = express();

app.use(express.json());

app.get("/ping", (req, res) => {
  res.status(200).json({ message: "pong!" });
});

app.get("/cep/:cep", (req, res) => {
  const { cep } = req.params;
  if(validateCep(cep).error) {
    return res.status(200).send(validateCep(cep).error)
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
