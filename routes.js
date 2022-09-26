const {Router} = require('express')
const produtos = require('./api/routes/ProdutosRoute')
const categorias = require('./api/routes/CarrinhoRoute')
const carrinho = require('./api/routes/CarrinhoRoute')
const usuario = require('./api/routes/UsuarioRoute')
const vendas = require('./api/routes/VendasRoute')
const compras = require('./api/routes/ComprasRoute')
const mensagens = require('./api/routes/MensagensRoute')


const app = Router();

app.use(produtos,categorias,carrinho,usuario,vendas,compras,mensagens)

module.exports = app