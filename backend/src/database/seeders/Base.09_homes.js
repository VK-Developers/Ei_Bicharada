'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('homes', [
      {
        name: 'Vincenzo',
        phone: '+55 13 99999-9999',
        city: 'Santos',
        type: 'gato',
        duration: '15 dias',
        created: new Date(),
      },
      {
        name: 'Roberto',
        phone: '+55 13 99999-9999',
        city: 'Sao Vicente',
        type: 'cao',
        duration: '30 dias',
        created: new Date(),
      },
      {
        name: 'Michael',
        phone: '+55 13 99999-9999',
        city: 'Prai Grande',
        type: 'ave',
        duration: 'mais de 30 dias',
        created: new Date(),
      },
    ], {});
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('homes', null, {});
  }
};
