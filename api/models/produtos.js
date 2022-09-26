'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class produtos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
     static associate(models) {
      
    }
  }
  produtos.init({
    nome: DataTypes.STRING,
    preco: DataTypes.FLOAT,
    imagem: DataTypes.STRING,
    descricao: DataTypes.STRING,
    desconto:DataTypes.FLOAT,
    
    usuarioId:DataTypes.INTEGER
    //opcoes:DataTypes.STRING
    
  }, {
    sequelize,
    modelName: 'produtos',
  });
  return produtos;
};