const {Router} = require('express')
const CategoriaController = require('../controllers/CategoriaController')
const middleWare = require('../middlewares/auth')


const app = Router()

app.get('/categorias', CategoriaController.PegaTodasCategorias)
app.get('/categorias/:id', CategoriaController.pegaUmaCategoria)

app.post('/categorias',middleWare, CategoriaController.criaUmaCategoria)
app.put('/categorias/:id',middleWare, CategoriaController.atualizaUmaCategoria)
app.delete('/categorias/:id',middleWare, CategoriaController.deletaUmaCategoria)

module.exports = app