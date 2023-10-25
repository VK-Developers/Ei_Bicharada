'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('sponsors', [
      {
        name: 'Alfredo',
        picture: '/sponsors/alfredo/card.jpeg',
        flier: '/sponsors/alfredo/flier.jpeg',
      },
      {
        name: 'Banguela e Alistar',
        picture: '/sponsors/banguela_alistar/card.jpeg',
        flier: '/sponsors/banguela_alistar/flier.jpeg',
      },
    ], {});
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('sponsors', null, {});
  }
};
