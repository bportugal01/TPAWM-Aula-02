const express = require("express")
const app = express()


app.get("/", function (req, res) {
    res.end("<h1>Minha primeira rota com Express</h1>")
})

app.get("/cadastrar/:produto", function (req, res) {
    res.send("Cadastro de produto: " + req.params.produto )


})

app.get("/pesquisar/:produto/:modelo", function (req, res) {
    res.send("Pesquisa de produto: " + req.params.produto +"<br>"+ " Modelo: " + req.params.modelo)
})

app.get("/contato/:sac/:produto", function (req, res) {
    res.send("Contato: " + req.params.sac +"<br>"+ " Produto: " + req.params.produto)
})
app.listen(8081, function () {
    console.log("A porra do servidor tá rodando na porta 8081!")
})

