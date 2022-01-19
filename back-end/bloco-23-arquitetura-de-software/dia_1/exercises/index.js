const express = require('express');
const app = express();

const PORT = '3000';

app.use(express.json());

app.route('/user').get((req, res) => {
  res.status(200).json({ message: 'Hello World'});
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})