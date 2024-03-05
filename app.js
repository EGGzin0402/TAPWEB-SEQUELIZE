const express = require("express")
const app = express()

var sequelize = require(__dirname+"/banco.js")

var porta = 8081

app.listen(porta, function(){
    console.log("Servidor Ativo!")
    console.log("Rodando na porta "+porta)
})

app.get("/", function(req, res){
    res.sendFile(__dirname+"/html/index.html")
})

app.get("/cadastrar/:nome/:endereco/:bairro/:cep/:cidade/:estado/:observacao", function(req, res){
    sequelize(req.params.nome, req.params.endereco, req.params.bairro, req.params.cep, req.params.cidade, req.params.estado, req.params.observacao)
    res.send("Cadastro feito")
})
