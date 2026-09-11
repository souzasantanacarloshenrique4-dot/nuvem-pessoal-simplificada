const express = require('express');
const cors = require('cors');

const filesRoutes = require('./routes/filesRoutes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/files', filesRoutes);

app.get('/', (req, res) => {
  res.json({
    message: 'API da Nuvem Pessoal Simplificada está funcionando!'
  });
});

app.use((req, res) => {
  res.status(404).json({
    message: 'Rota não encontrada.'
  });
});

module.exports = app;
