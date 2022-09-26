const {Router} = require('express')
const VendasController = require('../controllers/VendasController')
const middleWare = require('../middlewares/auth')


const app = Router()

app.get('/vendas', VendasController.PegaTodasVendas)
app.get('/vendas/:id', VendasController.pegaUmaVenda)
app.get('/vendas/usuario/:usuarioid', VendasController.vendaPorUsuario)
app.get('/vendas/usuario/:usuarioid/:ano/:mes', VendasController.vendaPorUsuarioPorMes)
app.post('/vendas',middleWare, VendasController.criaUmaVenda)
app.put('/vendas/:id',middleWare, VendasController.atualizaUmaVenda)
app.delete('/vendas/:id',middleWare, VendasController.deletaUmaVenda)

module.exports = app