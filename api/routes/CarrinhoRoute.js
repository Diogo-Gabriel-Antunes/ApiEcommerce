const {Router} = require('express')
const CarrinhoController = require('../controllers/CarrinhoController')
const middleWare = require('../middlewares/auth')


const app = Router()

app.get('/carrinhos',CarrinhoController.PegaTodosCarrinhos)
app.get('/carrinhos/:id', CarrinhoController.pegaUmCarrinho)
app.get('/carrinhos/produtos/:usuarioId',CarrinhoController.PedaProdutos)
app.post('/carrinhos', middleWare,CarrinhoController.criaUmCarrinho)
app.post('/carrinhos/:usuarioId/:produtoId',middleWare, CarrinhoController.adicionaItemNoCarrinho)
app.put('/carrinhos/:id',middleWare, CarrinhoController.atualizaUmCarrinho)
app.delete('/carrinhos/:id',middleWare,CarrinhoController.deletaUmCarrinho)
app.delete('/carrinhos/:usuarioId/:produtoId',middleWare, CarrinhoController.deletaItemNoCarrinho)


module.exports = app