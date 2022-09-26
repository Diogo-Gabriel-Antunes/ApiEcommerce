const {Router} = require('express')
const ComprasController = require('../controllers/ComprasController')
const middleWare = require('../middlewares/auth')


const app = Router()

app.get('/compras', ComprasController.PegaTodasCompras)
app.get('/compras/:id', ComprasController.pegaUmaCompra)
app.get('/compras/usuario/:usuarioid', ComprasController.pegaComprasDoUsuario)

app.post('/compras',middleWare, ComprasController.criaUmaCompra)
app.put('/compras/:id',middleWare, ComprasController.atualizaUmaCompra)
app.delete('/compras/:id',middleWare, ComprasController.deletaUmaCompra)

module.exports = app