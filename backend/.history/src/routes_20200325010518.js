const express = require('express');

const app = express();

// Avisar o Express que todos os request transformar em json
app.use(express.json());