'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('contributions', [
      {
        name: 'adm',
        amount: 1000.00,
        region: 'all',
        date: new Date(),
      }
    ], {});
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('contributions', null, {});
  }
};
