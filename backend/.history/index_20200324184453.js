const express = require('express');

const app = express();

app.get('/', (request, response) => {
    response.send('Olá Mundo!');
});

app.listen(3333);