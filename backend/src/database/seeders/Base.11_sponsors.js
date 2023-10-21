'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('sponsors', [
      {
        name: 'Alfredo',
        picture: 'https://www.atespets.com.br/sponsors/alfredo.jpeg',
      },
      {
        name: 'Banguela e Alistar',
        picture: 'https://www.atespets.com.br/sponsors/banguela_alistar.jpeg',
      },
    ], {});
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('sponsors', null, {});
  }
};
