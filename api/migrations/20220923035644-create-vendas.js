'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('vendas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      valor: {
        type: Sequelize.FLOAT
      },
      Data:{
        type: Sequelize.DATEONLY
      },
      usuarioId: {
        type: Sequelize.INTEGER,
        references:{model:"usuarios", key:"id"},
        allowNull: false,
        
      },
      produtoId:{
        type:Sequelize.INTEGER,
        references:{model:"produtos", key:"id"},
      },
      quantidade:{
        type:Sequelize.FLOAT
      }
      ,      
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('vendas');
  }
};