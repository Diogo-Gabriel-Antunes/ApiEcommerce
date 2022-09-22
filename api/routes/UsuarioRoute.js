const {Router} = require('express')
const UsuarioController = require('../controllers/UsuarioController')

const app = Router()

app.get('/usuarios', UsuarioController.PegaTodasUsuarios)
app.get('/usuarios/:id', UsuarioController.pegaUmaUsuario)
app.get('/usuarios/autenticado/:token', UsuarioController.verificaAuthenticacao)
app.post('/usuarios', UsuarioController.criaUmaUsuario)
app.post('/usuarios/login',UsuarioController.LoginUsuario)
app.put('/usuarios/:id', UsuarioController.atualizaUmaUsuario)
app.delete('/usuarios/:id',UsuarioController.deletaUmaUsuario)


module.exports = app