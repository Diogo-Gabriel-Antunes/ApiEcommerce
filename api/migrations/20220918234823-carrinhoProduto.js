'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('carrinhoProdutos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      produtoId: {
        type: Sequelize.INTEGER,
        references:{model:"produtos", key:"id"},
        allowNull: false,
        onDelete:'CASCADE',
      }, 
      carrinhoId: {
        type: Sequelize.INTEGER,
        references:{model:"carrinhos", key:"id"},
        allowNull: false,
        onDelete:'CASCADE',
      },
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
    await queryInterface.dropTable('carrinhoProdutos');
  }
};