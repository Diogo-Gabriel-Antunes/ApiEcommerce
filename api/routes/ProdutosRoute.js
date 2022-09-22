const {Router} = require('express')
const ProdutosController = require('../controllers/ProdutosController')
const middleWare = require('../middlewares/auth')

const app = Router()

app.get('/produtos', ProdutosController.PegaTodosProdutos)
app.get('/produtos/:id', ProdutosController.pegaUmProduto)
app.get('/produtos/categoria/:idCategoria', ProdutosController.produtoPorCategoria)
app.post('/produtos',middleWare, ProdutosController.criaUmProduto)
app.put('/produtos/:id',middleWare, ProdutosController.atualizaUmProduto)
app.delete('/produtos/:id',middleWare, ProdutosController.deletaUmProduto)

module.exports = app