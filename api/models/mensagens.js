'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class mensagens extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  mensagens.init({
    texto: DataTypes.TEXT,
    titulo: DataTypes.STRING,
    remetente:DataTypes.INTEGER,
    destinatario:DataTypes.INTEGER,
    status:DataTypes.STRING
  }, {
    sequelize,
    modelName: 'mensagens',
  });
  return mensagens;
};