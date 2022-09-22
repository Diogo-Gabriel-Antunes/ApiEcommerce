'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class categoria extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      categoria.hasMany(models.produtos,{
        foreignKey:'categoria_id'
      })
      
    }
  }
  categoria.init({
    categoria: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'categoria',
  });
  return categoria;
};