const { Op } = require('sequelize');
const database = require('../models')

class MensagensController{

  static async PegaTodasMensagens(req,res){
    try{
      const mensagens = await database.mensagens.findAll()
      return res.status(200).json({mensagens})
    }catch(erro){
      return res.status(500).json(erro)
    }
  }

  static async pegaUmaMensagem(req,res){
    const {id} = req.params;
    try{
      const Mensagem = await database.mensagens.findOne({where:{id:Number(id)}})
      return res.status(200).json({Mensagem})
    }catch(erro){
      return res.status(500).json(erro)
    }
  }

  static async criaUmaMensagem(req,res){
    const {texto,titulo,remetente,destinatario,status} = req.body;
    const mensagemParaRemetente = {
      texto:texto,
      titulo:titulo,
      remetente:remetente,
      destinatario:destinatario,
      status:"Enviado"
    } 
    const mensagemParaDestinatario = {
      texto:texto,
      titulo:titulo,
      remetente:destinatario,
      destinatario:remetente,
      status:"Recebido"
    } 
   
    try{
      const MensagemRemetente = await database.mensagens.create(mensagemParaRemetente)
      const MensagemDestinatario= await database.mensagens.create(mensagemParaDestinatario)
      return res.status(200).json({MensagemRemetente,MensagemDestinatario})
    }catch(erro){
      return res.status(500).json(erro)
    }
  }
  static async atualizaUmaMensagem(req,res){
    const {id} = req.params;
    const novasInfos = req.body;
    try{
      await database.categoria.update(novasInfos,{where:{id:Number(id)}})
      const mensagem = await database.mensagens.findOne({where:{id:Number(id)}})
      return res.status(200).json({mensagem})
    }catch(erro){
      return res.status(500).json(erro)
    }
  }

  static async deletaUmaMensagem(req,res){
    const {id} = req.params;
    
    try{
      await database.mensagens.destroy({where:{id:Number(id)}})
      
      return res.status(200).json({Message:`mensagen de id ${id} foi deletado com sucesso`})
    }catch(erro){
      return res.status(500).json(erro)
    }
  }
  static async PegaTodasMensagensRecebidas(req,res){
    const {usuarioid} = req.params
    try{
      const mensagens = await database.mensagens.findAll({
        where:{
          destinatario:usuarioid,
          status:{
            [Op.substring]:"Recebido"}
          },
          order:[['id','DESC']]
        })
      return res.status(200).json({mensagens})
    }catch(erro){
      return res.status(500).json(erro)
    }
  }

}

module.exports = MensagensController