const express = require("express")
const app = express()


app.get("/", function (req, res) {
    res.end("<h1>Minha primeira rota com Express</h1>")
})

app.get("/cadastrar/:item/:produto/:codigo", function (req, res) {
    res.send("Item: " + req.params.item + "<br>" + "Produto: " + req.params.produto + "<br>" + "Código: " + req.params.codigo)
    //res.send("<h1 style='color: #006400;'>Cadastro de usuário</h1>")
})

app.listen(8081, function () {
    console.log("A porra do servidor tá rodando na porta 8081!")
})

