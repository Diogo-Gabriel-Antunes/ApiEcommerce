'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class vendas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  vendas.init({
    produtoId:DataTypes.INTEGER,
    valor: DataTypes.FLOAT,
    usuarioId:DataTypes.INTEGER,
    Data:DataTypes.DATEONLY,
    quantidade:DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'vendas',
  });
  return vendas;
};