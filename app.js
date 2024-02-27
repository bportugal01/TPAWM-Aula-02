// Importando o módulo express
const express = require("express");
// Criando uma instância do express
const app = express();

// Rota principal
app.get("/", function (req, res) {
    res.end("<h1>Minha primeira rota com Express</h1>");
});

// Rota para cadastrar um produto
app.get("/cadastrar/:produto", function (req, res) {
    res.send("Cadastro de produto: " + req.params.produto);
});

// Rota para pesquisar um produto pelo modelo
app.get("/pesquisar/:produto/:modelo", function (req, res) {
    res.send("Pesquisa de produto: " + req.params.produto + "<br>" + " Modelo: " + req.params.modelo);
});

// Rota de contato
app.get("/contato/:sac/:produto", function (req, res) {
    res.send("Contato: " + req.params.sac + "<br>" + " Produto: " + req.params.produto);
});

// Iniciando o servidor na porta 8081
app.listen(8081, function () {
    console.log("O servidor está rodando na porta 8081!");
});
