const express = require('express');

const app = express();

app.get('/', (request, response) => {
    return response.json({
        evento: 'myApp',
        nome: 'Paulo Serafim';
    // return response.send('Olá World!');
});

app.listen(3333);