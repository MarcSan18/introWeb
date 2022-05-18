const express = require('express');

const app = express();

const usuarios = [{
    nome: 'Marcelo',
    idade: 42,
}];

app.get('/usuarios', (request, response) => {
    const usuarioNovo = usuarios.push(nome, idade)

    response.json(usuarios);
});

app.listen(3000);
