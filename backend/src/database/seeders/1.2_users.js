'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('users', [
      {
        name: 'Vincenzo',
        email: 'vincenzo@adm.com',
        phone: '+55 13 9999-9999',
        city: 'Santos',
        created: new Date(),
      },
      {
        name: 'Kaio',
        email: 'kaio@adm.com',
        phone: '+55 13 9999-9999',
        city: 'Sao Vicente',
        created: new Date(),
      },
      {
        name: 'Marcelo',
        email: 'marcelo@adm.com',
        phone: '+55 13 9999-9999',
        city: 'Araras',
        created: new Date(),
      }
    ], {});
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
