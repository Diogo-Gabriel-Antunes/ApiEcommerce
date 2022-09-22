'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('produtos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome: {
        type: Sequelize.STRING
      },
      preco: {
        type: Sequelize.FLOAT
      },
      imagem: {
        type: Sequelize.STRING
      },
      descricao: {
        type: Sequelize.STRING
      },
     
      desconto:{
        type:Sequelize.INTEGER,
        allowNull:true
      },quantidade:{
        type:Sequelize.INTEGER,
        allowNull:false
      },
      categoria_id:{
        allowNull:false,
        type:Sequelize.INTEGER,
        references:{model:'categoria',key:"id"}
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
    await queryInterface.dropTable('produtos');
  }
};