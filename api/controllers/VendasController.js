const { Op, Sequelize } = require('sequelize');
const { sequelize } = require('../models');
const database = require('../models')
const { QueryTypes } = require('sequelize');

class CategoriaController{

  static async PegaTodasVendas(req,res){
    try{
      const vendas = await database.vendas.findAll()
      return res.status(200).json({vendas})
    }catch(erro){
      return res.status(500).json(erro)
    }
  }

  static async pegaUmaVenda(req,res){
    const {id} = req.params;
    try{
      const venda = await database.vendas.findOne({where:{id:Number(id)}})
      return res.status(200).json({venda})
    }catch(erro){
      return res.status(500).json(erro)
    }
  }

  static async criaUmaVenda(req,res){
    const infosVenda = req.body;
    try{
      const venda = await database.vendas.create(infosVenda)
      return res.status(200).json({venda})
    }catch(erro){
      return res.status(500).json(erro)
    }
  }
  static async atualizaUmaVenda(req,res){
    const {id} = req.params;
    const novasInfos = req.body;
    try{
      await database.vendas.update(novasInfos,{where:{id:Number(id)}})
      const venda = await database.vendas.findOne({where:{id:Number(id)}})
      return res.status(200).json({venda})
    }catch(erro){
      return res.status(500).json(erro)
    }
  }

  static async deletaUmaVenda(req,res){
    const {id} = req.params;
    
    try{
      await database.vendas.destroy({where:{id:Number(id)}})
      
      return res.status(200).json({Message:`venda de id ${id} foi deletado com sucesso`})
    }catch(erro){
      return res.status(500).json(erro)
    }
  }
  static async vendaPorUsuario(req,res){
    const {usuarioid} = req.params
    try{
        const vendas = await database.vendas.findAll({
          where:{
            usuarioId:usuarioid
          },
          order:[['id','DESC']]
        
        })
        const totalGanhoQuery = await sequelize.query("select SUM((valor * quantidade)) AS total from vendas", { type: QueryTypes.SELECT });
        const totalVendido = await database.vendas.count("id",{
          where:{
            usuarioId:usuarioid
          }
        
        })
        const ProdutoMaisVendidoQuery = await database.vendas.findAll({
          attributes:[
            'produtoId',
            [sequelize.fn('SUM',sequelize.col('quantidade')),'total']
          ],
          where:{usuarioId:usuarioid},
          group:"produtoId",
          order: sequelize.literal('SUM(quantidade) DESC'),
          limit : 1,
                  
        })
        const ProdutoMaisVendido = await database.produtos.findOne({where:{id:ProdutoMaisVendidoQuery[0].produtoId}})
        const totalGanho = totalGanhoQuery[0].total
        const quantidadeDeProdutosVendidos = await database.vendas.sum('quantidade',{where:{usuarioId:usuarioid}})
        return res.status(200).json({vendas,totalGanho,totalVendido,ProdutoMaisVendido, quantidadeDeProdutosVendidos})
    }catch(erro){
      return res.status(500).json(erro)
    }
  }
  static async vendaPorUsuarioPorMes(req,res){
    const {usuarioid, ano, mes} = req.params
    
    try{
        const vendas = await database.vendas.findAll({
          where:{
            usuarioId:usuarioid,
            data:{
              [Op.lte]:`${ano}-${mes}-30`,
              [Op.gte]:`${ano}-${mes}-1`
            }
          },
          order:[['id','DESC']]
        
        })
        return res.status(200).json({vendas})
    }catch(erro){
      return res.status(500).json(erro)
    }
  }
 

}

module.exports = CategoriaController