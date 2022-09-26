'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('mensagens', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      texto: {
        type: Sequelize.TEXT
      },
      titulo: {
        type: Sequelize.STRING
      },
      remetente: {
        type: Sequelize.INTEGER,
        references:{model:"usuarios", key:"id"},
        allowNull: false,
        
      },
      destinatario: {
        type: Sequelize.INTEGER,
        references:{model:"usuarios", key:"id"},
        allowNull: false,
        
      },
      status: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('mensagens');
  }
};