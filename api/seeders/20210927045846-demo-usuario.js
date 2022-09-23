'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('usuarios', [{
      nome: "admin",
      email: "admin@email.com.br",
      senha: "$2b$12$BfFEX6PBP1H5etlNNscFaObuKwFE50D7MMMfYk0FvCPf0nHGtNHQa",
      role: "ADMIN",
      carrinhoId:1,
      createdAt:new Date(),
      updatedAt:new Date()
    }], {});

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('usuarios', null, {});

  }
};
