const express = require('express');

const app = express();

app.get('/', (request, response) => {
    response.send('Olá Mubndo!');
});

app.listen(3333);