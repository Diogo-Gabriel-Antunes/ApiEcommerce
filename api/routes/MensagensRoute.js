const {Router} = require('express')
const MensagensController = require('../controllers/MensagensController')
const middleWare = require('../middlewares/auth')


const app = Router()

app.get('/mensagens', MensagensController.PegaTodasMensagens)
app.get('/mensagens/:id', MensagensController.pegaUmaMensagem)
app.get('/mensagens/recebidas/usuario/:usuarioid', MensagensController.PegaTodasMensagensRecebidas)
app.post('/mensagens', MensagensController.criaUmaMensagem)
app.put('/mensagens/:id',middleWare, MensagensController.atualizaUmaMensagem)
app.delete('/mensagens/:id',middleWare, MensagensController.deletaUmaMensagem)

module.exports = app