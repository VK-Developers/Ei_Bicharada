'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('homes', [
      {
        name: 'Vincenzo',
        phone: '+55 13 99999-9999',
        city: 'Santos',
        animal: 'gato',
        period: '15 dias',
        created: new Date(),
      },
      {
        name: 'Roberto',
        phone: '+55 13 99999-9999',
        city: 'Sao Vicente',
        animal: 'cao',
        period: '30 dias',
        created: new Date(),
      },
      {
        name: 'Michael',
        phone: '+55 13 99999-9999',
        city: 'Prai Grande',
        animal: 'ave',
        period: 'mais de 30 dias',
        created: new Date(),
      },
    ], {});
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('homes', null, {});
  }
};
