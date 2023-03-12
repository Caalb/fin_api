const express = require("express");

const app = express();
app.use(express.json());

app.post('/account', (request, response) => {
  const { cpf, name } = request.body;
  response.json({ message: "Test" })
})

app.listen(3333)