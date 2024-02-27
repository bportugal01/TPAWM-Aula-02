

// Importando o módulo express
const express = require("express");

// Criando uma instância do express
const app = express();
const PORT = 8081;


// Rota principal
app.get("/", function (req, res) {
    res.end("<div style='text-align: center;'><h1 style='color: #686C36; background-color: #B8BC86;'>Minha primeira rota com Express</h1></div>");

    // a diferença de req e res é que req é a requisição e res é a resposta 
    // que o servidor vai enviar para o cliente
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

// Tratamento de rota não encontrada
app.use(function (req, res, next) {
    res.status(404).send("Desculpe, esta rota não foi encontrada.");
});

// Middleware para tratamento de erros
app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Algo deu errado!');
});

// Iniciando o servidor
app.listen(PORT, function () {
    console.log(`\nA porra do servidor está rodando na porta ${PORT}`);
    console.log("Servidor iniciado com sucesso!");
});

