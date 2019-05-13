const porta=3003
const express = require('express')
const bodyParser = require('body-parser')
const bancodedados = require('./bancodeDados')

app = express()

app.use(bodyParser.urlencoded({
    extended: true
}))

app.get('/produtos', (req, res, next)=> {
    res.send(bancodedados.getProdutos())
})
app.get('/produtos/:id', (req, res, next) =>{
    res.send(bancodedados.getProdutoById(req.params.id))
})

app.post('/produtos', (req, res, next) =>{
     const produto = bancodedados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)
})

app.listen(porta, () => {
    console.log(`servidor esta executanto na porta ${porta}`)
})