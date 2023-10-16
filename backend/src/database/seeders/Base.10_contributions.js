'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('contributions', [
      {
        name: 'Vincenzo',
        cpf: '000.000.000-00',
        amount: 55.30,
        date: new Date(),
      },
      {
        name: 'Roberto',
        cpf: '000.000.000-00',
        amount: 20.50,
        date: new Date(),
      },
      {
        name: 'Michael',
        cpf: '000.000.000-00',
        amount: 100.00,
        date: new Date(),
      },
    ], {});
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('contributions', null, {});
  }
};
