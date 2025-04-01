const express = require('express');
<<<<<<< HEAD
=======
const path = require('node:path');
>>>>>>> 4dad90183fc35dfc8f62dcc35c2ffe15b4216fda

const server = express();
const PORT = process.env || 5000;

server.listen(PORT, () => console.log(`Servidor rodando em: http://localhost:${PORT}/`));