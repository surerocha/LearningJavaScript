//API Rest - Disciplina: Programação Web
//Autor: Sure Rocha

const express = require('express');
const app = express();
const port = 8000;

app.listen(port, ()=> {
  console.log('Hello API on port 8000');
})

//Rota raiz
app.get('/', function(req, res) {
res.send("Coloque os devidos endpoints na URL. -> Opções: /v1/:name ou /v2/:name ou /v3/pt-br/:name ou /v3/en-us/:name ou /v3/es-ar/:name");
})

//V1
app.get('/v1/:name', function(req, res) {
res.json({msg: "hello v1, "+ req.params.name});
})

//V2
app.get('/v2/:name', function(req, res) {
res.json({msg: "hello v2, "+ req.params.name});
})

//V3
app.get('/v3/pt-br/:name', function(req, res) {
res.json({msg: "Olá, querido "+ req.params.name});
})

app.get('/v3/en-us/:name', function(req, res) {
res.json({msg: "Hello, dear "+ req.params.name});
})

app.get('/v3/es-ar/:name', function(req, res) {
res.json({msg: "Hola, querido "+ req.params.name});
})

//CATCH ERROR 404
app.use((req, res, next) => {
  res.status(404).json({msg: 'Endpoint not found.'});
});
