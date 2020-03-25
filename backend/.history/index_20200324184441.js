const express = require('express');

const app = express();

app.get('/', (request, response) => {
    response.send()
});

app.listen(3333);