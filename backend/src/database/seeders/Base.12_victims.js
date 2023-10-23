'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('victims', [
      {
        name: 'Beatriz',
        email: 'beatriz@gmail.com',
        phone: '+55 55 55555-5555',
        created: new Date(),
      },
    ], {});
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('victims', null, {});
  }
};
