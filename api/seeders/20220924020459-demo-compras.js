'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('compras', [{
      valor: 1000,
      Data: new Date(),
      produtoId: 1,
      usuarioId: 1,
      quantidade: 2,
      status: "Pago",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      valor: 2000,
      Data: new Date(),
      produtoId: 2,
      usuarioId: 1,
      quantidade: 2,
      status: "Entregue",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      valor: 1000,
      Data: new Date(),
      produtoId: 1,
      usuarioId: 1,
      quantidade: 2,
      status: "Aguardando pagamento",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      valor: 1000,
      Data: new Date(),
      produtoId: 1,
      usuarioId: 1,
      quantidade: 2,
      status: "Aguardando pagamento",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      valor: 1000,
      Data: new Date(),
      produtoId: 1,
      usuarioId: 1,
      quantidade: 2,
      status: "Aguardando pagamento",
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('compras', null, {});

  }
};
