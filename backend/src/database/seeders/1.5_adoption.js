'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('adoptions', [
      {
        name: 'Animal 01',
        description: 'lorem lorem lorem lorem lorem lorem',
        picture: 'loren loren',
        created: new Date(),
      },
      {
        name: 'Animal 02',
        description: 'lorem lorem lorem lorem lorem lorem',
        picture: 'loren loren',
        created: new Date(),
      },
      {
        name: 'Animal 03',
        description: 'lorem lorem lorem lorem lorem lorem',
        picture: 'loren loren',
        created: new Date(),
      },
      {
        name: 'Animal 04',
        description: 'lorem lorem lorem lorem lorem lorem',
        picture: 'loren loren',
        created: new Date(),
      },
      {
        name: 'Animal 05',
        description: 'lorem lorem lorem lorem lorem lorem',
        picture: 'loren loren',
        created: new Date(),
      },
      {
        name: 'Animal 06',
        description: 'lorem lorem lorem lorem lorem lorem',
        picture: 'loren loren',
        created: new Date(),
      },
      {
        name: 'Animal 07',
        description: 'lorem lorem lorem lorem lorem lorem',
        picture: 'loren loren',
        created: new Date(),
      },
      {
        name: 'Animal 08',
        description: 'lorem lorem lorem lorem lorem lorem',
        picture: 'loren loren',
        created: new Date(),
      },
      {
        name: 'Animal 09',
        description: 'lorem lorem lorem lorem lorem lorem',
        picture: 'loren loren',
        created: new Date(),
      },
      {
        name: 'Animal 10',
        description: 'lorem lorem lorem lorem lorem lorem',
        picture: 'loren loren',
        created: new Date(),
      },
      {
        name: 'Animal 11',
        description: 'lorem lorem lorem lorem lorem lorem',
        picture: 'loren loren',
        created: new Date(),
      },
    ], {});
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('adoptions', null, {});
  }
};
