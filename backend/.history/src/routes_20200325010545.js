const express = require('express');

const routes = express.Router();

// Avisar o Express que todos os request transformar em json
routes.use(express.json());