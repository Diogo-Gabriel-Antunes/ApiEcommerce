const database = require('../models')



class CarrinhoController {

  static async PegaTodosCarrinhos(req, res) {
    try {
      const carrinhos = await database.carrinho.findAll()
      return res.status(200).json({ carrinhos })
    } catch (erro) {
      return res.status(500).json(erro)
    }
  }

  static async pegaUmCarrinho(req, res) {
    const { id } = req.params;
    try {
      const carrinho = await database.carrinho.findOne({ where: { id: Number(id) } })
      return res.status(200).json({ carrinho })
    } catch (erro) {
      return res.status(500).json(erro)
    }
  }

  static async criaUmCarrinho(req, res) {
    const infosCarrinho = req.body;
    try {
      const carrinho = await database.carrinho.create(infosCarrinho)
      return res.status(200).json({ carrinho })
    } catch (erro) {
      return res.status(500).json(erro)
    }
  }
  static async atualizaUmCarrinho(req, res) {
    const { id } = req.params;
    const novasInfos = req.body;
    try {
      await database.carrinho.update(novasInfos, { where: { id: Number(id) } })
      const carrinho = await database.carrinho.findOne({ where: { id: Number(id) } })
      return res.status(200).json({ carrinho })
    } catch (erro) {
      return res.status(500).json(erro)
    }
  }

  static async deletaUmCarrinho(req, res) {
    const { id } = req.params;

    try {
      await database.carrinho.destroy({ where: { id: Number(id) } })

      return res.status(200).json({ Message: `carrinho de id ${id} foi deletado com sucesso` })
    } catch (erro) {
      return res.status(500).json(erro)
    }
  }
  static async adicionaItemNoCarrinho(req, res) {
    const { usuarioId, produtoId } = req.params
    try {
      const usuario = await database.usuario.findOne({where:{id:Number(usuarioId)}})
      const carrinho = await database.carrinhoProdutos.create({
        produtoId: Number(produtoId),
        carrinhoId: Number(usuario.carrinhoId)
      })

      return res.status(200).json({ carrinho })
    } catch (erro) {
      return res.status(500).json({ erro })
    }
  }

  static async PedaProdutos(req, res) {
    const { usuarioId } = req.params

    try {
      const usuario = await database.usuario.findOne({ where: { id: usuarioId } })
      const carrinhos = await database.carrinhoProdutos.findAll({ where: { carrinhoId: usuario.carrinhoId } })
      let produtos = []
      for(const carrinho of carrinhos){
        const produto = await database.produtos.findOne({where:{id:carrinho.produtoId}})
        produtos.push(produto.dataValues)
      }
      

      
      return res.status(200).json({ carrinhos,produtos })
    } catch (erro) {
      return res.status(500).json({ erro })
    }
  }

  static async deletaItemNoCarrinho(req, res) {
    const { usuarioId, produtoId } = req.params
    try {
      const usuario = await database.usuario.findOne({where:{id:Number(usuarioId)}})
        await database.carrinhoProdutos.destroy({where:{
        produtoId: Number(produtoId),
        carrinhoId: Number(usuario.carrinhoId)
      }})

      return res.status(200).json({ message:"Item deletado do carrinho com sucesso" })
    } catch (erro) {
      return res.status(500).json({ erro })
    }
  }
}

module.exports = CarrinhoController