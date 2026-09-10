const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

// As rotas da API serão registradas aqui.

app.use((req, res) => {
  res.status(404).json({ message: 'Rota não encontrada.' });
});

module.exports = app;
