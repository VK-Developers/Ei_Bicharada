'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('contributions', [
      {
        name: 'Vincenzo',
        amount: 55.30,
        date: new Date(),
      },
      {
        name: 'Roberto',
        amount: 20.50,
        date: new Date(),
      },
      {
        name: 'Michael',
        amount: 100.00,
        date: new Date(),
      },
    ], {});
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('contributions', null, {});
  }
};
