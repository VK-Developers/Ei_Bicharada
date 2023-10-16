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
        cep: '18274-635',
        created: new Date(),
      },
      {
        name: 'Kaio',
        email: 'kaio@adm.com',
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
