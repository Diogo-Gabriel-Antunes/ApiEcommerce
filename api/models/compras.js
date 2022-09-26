'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class compras extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  compras.init({
    valor: DataTypes.FLOAT,
    Data:DataTypes.DATEONLY,
    produtoId:DataTypes.INTEGER,
    usuarioId:DataTypes.INTEGER,
    status:DataTypes.STRING,
    quantidade:DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'compras',
  });
  return compras;
};