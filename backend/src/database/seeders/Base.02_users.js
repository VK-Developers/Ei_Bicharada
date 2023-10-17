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
        region: 'Santa Isabel',
        created: new Date(),
      },
      {
        name: 'Marcelo',
        email: 'marcelojuvenal@gmail.com',
        phone: '+55 13 9999-9999',
        city: 'Sao Vicente',
        cep: '77834-258',
        region: 'Santa Isabel',
        created: new Date(),
      },
      {
        name: 'Fabio',
        email: 'humorsapiens2@hotmail.com',
        phone: '+55 13 9999-9999',
        city: 'Sao Vicente',
        cep: '11794-536',
        region: 'Santa Isabel',
        created: new Date(),
      },
    ], {});
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
