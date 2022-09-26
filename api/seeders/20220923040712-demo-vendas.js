'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('vendas', [{
      produtoId: 1,
      valor: 1000,
      usuarioId: 1,
      Data: new Date(),
      quantidade: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      produtoId: 2,
      valor: 1000,
      usuarioId: 1,
      Data: new Date(),
      quantidade: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      produtoId: 3,
      valor: 1000,
      usuarioId: 1,
      Data: new Date(),
      quantidade: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      produtoId: 4,
      valor: 1000,
      usuarioId: 1,
      Data: new Date(),
      quantidade: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      produtoId: 5,
      valor: 1000,
      usuarioId: 1,
      Data: new Date(),
      quantidade: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('vendas', null, {});

  }
};
