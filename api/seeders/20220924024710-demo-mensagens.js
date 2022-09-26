'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('mensagens', [{
      texto: "O que aconteceu Com minha encomenda?",
      titulo: "Encomenda não foi entregue ainda",
      remetente: 1,
      destinatario: 2,
      status: "Enviado",
      createdAt:new Date(),
      updatedAt:new Date()
    },
    {
      texto: "O que aconteceu Com minha encomenda?",
      titulo: "Encomenda não foi entregue ainda",
      remetente: 1,
      destinatario: 2,
      status: "Recebido",
      createdAt:new Date(),
      updatedAt:new Date()
    },
    {
      texto: "O que aconteceu Com minha encomenda?",
      titulo: "Encomenda não foi entregue ainda",
      remetente: 1,
      destinatario: 2,
      status: "Enviado",
      createdAt:new Date(),
      updatedAt:new Date()
    },
    {
      texto: "O que aconteceu Com minha encomenda?",
      titulo: "Encomenda não foi entregue ainda",
      remetente: 1,
      destinatario: 2,
      status: "Recebido",
      createdAt:new Date(),
      updatedAt:new Date()
    },
    {
      texto: "O que aconteceu Com minha encomenda?",
      titulo: "Encomenda não foi entregue ainda",
      remetente: 1,
      destinatario: 2,
      status: "Enviado",
      createdAt:new Date(),
      updatedAt:new Date()
    },
    {
      texto: "O que aconteceu Com minha encomenda?",
      titulo: "Encomenda não foi entregue ainda",
      remetente: 1,
      destinatario: 2,
      status: "Recebido",
      createdAt:new Date(),
      updatedAt:new Date()
    },
    {
      texto: "O que aconteceu Com minha encomenda?",
      titulo: "Encomenda não foi entregue ainda",
      remetente: 1,
      destinatario: 2,
      status: "Enviado",
      createdAt:new Date(),
      updatedAt:new Date()
    },
    {
      texto: "O que aconteceu Com minha encomenda?",
      titulo: "Encomenda não foi entregue ainda",
      remetente: 1,
      destinatario: 2,
      status: "Recebido",
      createdAt:new Date(),
      updatedAt:new Date()
    },
    {
      texto: "O que aconteceu Com minha encomenda?",
      titulo: "Encomenda não foi entregue ainda",
      remetente: 1,
      destinatario: 2,
      status: "Enviado",
      createdAt:new Date(),
      updatedAt:new Date()
    },
    {
      texto: "O que aconteceu Com minha encomenda?",
      titulo: "Encomenda não foi entregue ainda",
      remetente: 1,
      destinatario: 2,
      status: "Recebido",
      createdAt:new Date(),
      updatedAt:new Date()
    }], {});

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('mensagens', null, {});

  }
};
