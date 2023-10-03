'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('users', [
      {
        name: 'Vincenzo',
        email: 'vincenzo@admin.com',
        phone: '+55 13 9999-9999',
        city: 'Santos',
        cep: '18274-635',
        created: new Date(),
      },
      {
        name: 'Kaio',
        email: 'kaio@admin.com',
        phone: '+55 13 9999-9999',
        city: 'Sao Vicente',
        cep: '13244-633',
        created: new Date(),
      },
      {
        name: 'Marcelo',
        email: 'marcelo@admin.com',
        phone: '+55 13 9999-9999',
        city: 'Araras',
        cep: '78374-730',
        created: new Date(),
      }
    ], {});
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
