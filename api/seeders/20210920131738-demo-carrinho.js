'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
     await queryInterface.bulkInsert('carrinhos', [{
       createdAt:new Date(),
       updatedAt:new Date()
     },
     {
      createdAt:new Date(),
      updatedAt:new Date()
    }], {});
    
  },

  async down (queryInterface, Sequelize) {
    
      await queryInterface.bulkDelete('carrinhos', null, {});
     
  }
};
