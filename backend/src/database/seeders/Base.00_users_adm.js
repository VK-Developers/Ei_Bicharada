'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('adm_users', [
      {
        name: 'System Adm',
        email: 'atespets.app@gmail.com',
        phone: '+55 99 9999-9999',
        city: 'all',
        cep: '11111-111',
        region: 'all',
        created: new Date(),
      }
    ], {});
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('adm_users', null, {});
  }
};
