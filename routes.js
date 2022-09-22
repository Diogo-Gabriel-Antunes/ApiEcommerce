const {Router} = require('express')
const produtos = require('./api/routes/ProdutosRoute')
const categorias = require('./api/routes/CarrinhoRoute')
const carrinho = require('./api/routes/CarrinhoRoute')
const usuario = require('./api/routes/UsuarioRoute')

const app = Router();

app.use(produtos,categorias,carrinho,usuario)

module.exports = app