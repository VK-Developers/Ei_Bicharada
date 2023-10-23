'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('contributions', [
      {
        name: 'Vincenzo',
        amount: 55.30,
        region: 'Neverland',
        date: new Date(),
      },
      {
        name: 'Roberto',
        amount: 20.50,
        region: 'Neverland',
        date: new Date(),
      },
      {
        name: 'Michael',
        amount: 100.00,
        region: 'Neverland',
        date: new Date(),
      },
      {
        name: 'Vincenzo',
        amount: 45.30,
        region: 'Neverland',
        date: new Date(),
      },
      {
        name: 'Roberto',
        amount: 200.50,
        region: 'Neverland',
        date: new Date(),
      },
      {
        name: 'Vincenzo',
        amount: 155.30,
        region: 'Neverland',
        date: new Date(),
      },
    ], {});
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('contributions', null, {});
  }
};
