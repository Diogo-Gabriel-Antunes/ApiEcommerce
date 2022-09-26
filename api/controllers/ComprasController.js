const database = require('../models')

class ComprasController{

  static async PegaTodasCompras(req,res){
    try{
      const compras = await database.compras.findAll()
      return res.status(200).json({compras})
    }catch(erro){
      return res.status(500).json(erro)
    }
  }

  static async pegaUmaCompra(req,res){
    const {id} = req.params;
    try{
      const compra = await database.compras.findOne({where:{id:Number(id)}})
      return res.status(200).json({compra})
    }catch(erro){
      return res.status(500).json(erro)
    }
  }

  static async criaUmaCompra(req,res){
    const infosCompra = req.body;
    try{
      const compra = await database.compras.create(infosProduto)
      return res.status(200).json({compra})
    }catch(erro){
      return res.status(500).json(erro)
    }
  }
  static async atualizaUmaCompra(req,res){
    const {id} = req.params;
    const novasInfos = req.body;
    try{
      await database.compras.update(novasInfos,{where:{id:Number(id)}})
      const compra = await database.compras.findOne({where:{id:Number(id)}})
      return res.status(200).json({compra})
    }catch(erro){
      return res.status(500).json(erro)
    }
  }

  static async deletaUmaCompra(req,res){
    const {id} = req.params;
    
    try{
      await database.compras.destroy({where:{id:Number(id)}})
      
      return res.status(200).json({Message:`compra de id ${id} foi deletado com sucesso`})
    }catch(erro){
      return res.status(500).json(erro)
    }
  }

  static async pegaComprasDoUsuario(req,res){
    const {usuarioid} = req.params;
    try{
      const compras = await database.compras.findAll({where:{
        usuarioId:usuarioid
      },
      order:[['id','DESC']]
    })
      return res.status(200).json({compras})
    }catch(erro){
      return res.status(500).json(erro)
    }
  }
  

}

module.exports = ComprasController