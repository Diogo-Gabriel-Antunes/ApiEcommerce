const database = require('../models')

class CategoriaController{

  static async PegaTodasCategorias(req,res){
    try{
      const categorias = await database.categoria.findAll()
      return res.status(200).json({categorias})
    }catch(erro){
      return res.status(500).json(erro)
    }
  }

  static async pegaUmaCategoria(req,res){
    const {id} = req.params;
    try{
      const categoria = await database.categoria.findOne({where:{id:Number(id)}})
      return res.status(200).json({categoria})
    }catch(erro){
      return res.status(500).json(erro)
    }
  }

  static async criaUmaCategoria(req,res){
    const infosProduto = req.body;
    try{
      const categoria = await database.categoria.create(infosProduto)
      return res.status(200).json({categoria})
    }catch(erro){
      return res.status(500).json(erro)
    }
  }
  static async atualizaUmaCategoria(req,res){
    const {id} = req.params;
    const novasInfos = req.body;
    try{
      await database.categoria.update(novasInfos,{where:{id:Number(id)}})
      const categoria = await database.categoria.findOne({where:{id:Number(id)}})
      return res.status(200).json({categoria})
    }catch(erro){
      return res.status(500).json(erro)
    }
  }

  static async deletaUmaCategoria(req,res){
    const {id} = req.params;
    
    try{
      await database.categoria.destroy({where:{id:Number(id)}})
      
      return res.status(200).json({Message:`categoria de id ${id} foi deletado com sucesso`})
    }catch(erro){
      return res.status(500).json(erro)
    }
  }
  

}

module.exports = CategoriaController