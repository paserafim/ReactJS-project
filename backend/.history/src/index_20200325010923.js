const express = require('express');
const routes = require('./routes');

const app = express();

// Avisar o Express que todos os request transformar em json
app.use(express.json());
app.use(routes);

app.listen(3333);



