'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('categoria', [{
      categoria:"Computadores",
      createdAt:new Date(),
      updatedAt:new Date()
    },{
      categoria:"Eletronicos",
      createdAt:new Date(),
      updatedAt:new Date()
    },{
      categoria:"Celulares",
      createdAt:new Date(),
      updatedAt:new Date()
  }], {});

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('categoria', null, {});

  }
};
