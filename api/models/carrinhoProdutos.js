'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class carrinhoProdutos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      
    }
  }
  carrinhoProdutos.init({
    produtoId: DataTypes.INTEGER,
    carrinhoId:DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'carrinhoProdutos',
  });
  return carrinhoProdutos;
};