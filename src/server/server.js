const express = require('express');

const server = express();
const PORT = process.env || 5000;

server.listen(PORT, () => console.log(`Servidor rodando em: http://localhost:${PORT}/`));