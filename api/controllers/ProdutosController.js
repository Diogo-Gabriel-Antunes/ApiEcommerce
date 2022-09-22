const database = require('../models')

class ProdutosController{

  static async PegaTodosProdutos(req,res){
    try{
      const produtos = await database.produtos.findAll()
      return res.status(200).json({produtos})
    }catch(erro){
      return res.status(500).json(erro)
    }
  }

  static async pegaUmProduto(req,res){
    const {id} = req.params;
    try{
      const Produto = await database.produtos.findOne({where:{id:Number(id)}})
      return res.status(200).json({Produto})
    }catch(erro){
      return res.status(500).json(erro)
    }
  }

  static async criaUmProduto(req,res){
    const infosProduto = req.body;
    try{
      const Produto = await database.produtos.create(infosProduto)
      return res.status(200).json({Produto})
    }catch(erro){
      return res.status(500).json(erro)
    }
  }
  static async atualizaUmProduto(req,res){
    const {id} = req.params;
    const novasInfos = req.body;
    try{
      await database.produtos.update(novasInfos,{where:{id:Number(id)}})
      const Produto = await database.produtos.findOne({where:{id:Number(id)}})
      return res.status(200).json({Produto})
    }catch(erro){
      return res.status(500).json(erro)
    }
  }

  static async deletaUmProduto(req,res){
    const {id} = req.params;
    
    try{
      await database.produtos.destroy({where:{id:Number(id)}})
      
      return res.status(200).json({Message:`Produto de id ${id} foi deletado com sucesso`})
    }catch(erro){
      return res.status(500).json(erro)
    }
  }
  static async produtoPorCategoria(req,res){
    const {idCategoria} = req.params;
    
    try{
      const produtosCategorizado = await database.produtos.findAll({where:{categoria_id:Number(idCategoria)}})
      
      return res.status(200).json({produtosCategorizado})
    }catch(erro){
      return res.status(500).json(erro)
    }
  }

}

module.exports = ProdutosController