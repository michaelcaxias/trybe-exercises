const express = require("express");
const app = express();

const PORT = "3000";

// {
//   "firstName": "Calebe",
//   "lastName": "Junior",
//   "email": "calebe.junior@gmail.com",
//   "password": "d496d5ea2442"
// }

app.use(express.json());

app.route("/user").post((req, res) => {
  const { firstName, lastName, email, password } = req.body;
  const passwordValid = password.length >= 6;
  const emailValid = !email;
  const firstNameValid = !firstName;
  const lastNameValid = !lastName;

  const validaFields = firstName && lastName && email && passwordValid;
  return validaFields
    ? res.status(201).json({
        id: 1,
        firstName,
        lastName,
        email,
      })
    : res.status(400).json({
        error: true,
        message: `Os campos devem ser válidos`,
      });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
