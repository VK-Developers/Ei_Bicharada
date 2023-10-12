'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('users', [
      {
        name: 'Admin User',
        email: 'root@adm.com',
        phone: '+55 55 5555-5555',
        city: 'Neverland',
        cep: '11111-111',
        created: new Date(),
      },
      {
        name: 'Vincenzo',
        email: 'vincenzo@adm.com',
        phone: '+55 13 9999-9999',
        city: 'Santos',
        cep: '18274-635',
        created: new Date(),
      },
    ], {});
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
