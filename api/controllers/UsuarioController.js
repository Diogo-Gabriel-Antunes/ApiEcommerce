const database = require('../models')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const authConfig = require('../config/auth.json')

function geraToken(params={}){
  return jwt.sign({id:params,carrinhoId:params.carrinhoId},authConfig.secret,{
    expiresIn:86400,
  })
}

class UsuarioController{

  static async PegaTodasUsuarios(req,res){
    try{
      const usuarios = await database.usuario.findAll()
      return res.status(200).json({usuarios})
    }catch(erro){
      return res.status(500).json(erro)
    }
  }

  static async pegaUmaUsuario(req,res){
    const {id} = req.params;
    try{
      const Usuario = await database.usuario.findOne({where:{id:Number(id)}})
      return res.status(200).json({Usuario})
    }catch(erro){
      return res.status(500).json(erro)
    }
  }

  static async criaUmaUsuario(req,res){
    let infosUsuario = req.body;
    infosUsuario.senha = await bcrypt.hash(infosUsuario.senha, 12)
    const carrinho = await database.carrinho.create()
    infosUsuario.carrinhoId = carrinho.dataValues.id
   
    try{
      const Usuario = await database.usuario.create(infosUsuario)
      Usuario.senha = undefined;
      return res.status(200).json({Usuario,token:geraToken({id:Usuario.id,carrinhoId:Usuario.carrinhoId})})
    }catch(erro){
      return res.status(500).json(erro)
    }
  }
  static async atualizaUmaUsuario(req,res){
    const {id} = req.params;
    let novasInfos = req.body;
    novasInfos.senha = await bcrypt.hash(novasInfos.senha,12)
    try{
      await database.usuario.update(novasInfos,{where:{id:Number(id)}})
      const Usuario = await database.usuario.findOne({where:{id:Number(id)}})
      Usuario.senha = undefined;
      return res.status(200).json({Usuario})
    }catch(erro){
      return res.status(500).json(erro)
    }
  }

  static async deletaUmaUsuario(req,res){
    const {id} = req.params;
    
    try{
      await database.usuario.destroy({where:{id:Number(id)}})
      
      return res.status(200).json({Message:`Usuario de id ${id} foi deletado com sucesso`})
    }catch(erro){
      return res.status(500).json(erro)
    }
  }

  static async LoginUsuario(req,res){
    const infos = req.body;
    
    const usuario = await database.usuario.findOne({where:{email:infos.email}})
    if(!usuario){
      return res.status(404).json({message:`Usuario de email ${infos.email} não encontrado`})
    }
    if(!await bcrypt.compare(infos.senha,usuario.dataValues.senha)){
      return res.status(404).json({message:`A senha ${infos.senha} é uma senha invalida`})
    }
    usuario.senha = undefined;

    

    return res.send({
      usuario,token:geraToken({id:usuario.id})
    })
    
  }

  static async verificaAuthenticacao(req,res){
    const {token} = req.params
    jwt.verify(token,authConfig.secret,(err,decoded)=>{
      if(err) return res.status(401).send({auth:false})
  
      req.Usuarioid = decoded.id
      return res.status(200).json({auth:true})})

    
  }
  

}

module.exports = UsuarioController