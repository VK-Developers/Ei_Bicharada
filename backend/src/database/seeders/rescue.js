'use strict';

/**
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {import('sequelize').DataType} DataTypes 
 */

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('rescues', [
      {
        name: 'Shasha',
        walking: false,
        description: 'lorem lorem lorem lorem lorem lorem',
        hour: '12:30',
        adress: 'Rua Anton Ribom 4, apt 66',
        city: 'Santos',
        picture: 'loren loren',
        created: new Date(),
      },
      {
        name: 'Alistar',
        walking: true,
        description: 'lorem lorem lorem lorem lorem lorem',
        hour: '12:30',
        adress: 'Rua Anton Ribom 4, apt 66',
        city: 'Sao Vicente',
        picture: 'loren loren',
        created: new Date(),
      },
      {
        name: 'Nina',
        walking: false,
        description: 'lorem lorem lorem lorem lorem lorem',
        hour: '12:30',
        adress: 'Rua Anton Ribom 4, apt 66',
        city: 'Sao Vicente',
        picture: 'loren loren',
        created: new Date(),
      },
      {
        name: 'Blair',
        walking: true,
        description: 'lorem lorem lorem lorem lorem lorem',
        hour: '12:30',
        adress: 'Rua Anton Ribom 4, apt 66',
        city: 'Santos',
        picture: 'loren loren',
        created: new Date(),
      },
      {
        name: 'Alfredo',
        walking: true,
        description: 'lorem lorem lorem lorem lorem lorem',
        hour: '12:30',
        adress: 'Rua Anton Ribom 4, apt 66',
        city: 'San Maran',
        picture: 'loren loren',
        created: new Date(),
      },
      {
        name: 'Banguela',
        walking: false,
        description: 'lorem lorem lorem lorem lorem lorem',
        hour: '12:30',
        adress: 'Rua Anton Ribom 4, apt 66',
        city: 'Santos',
        picture: 'loren loren',
        created: new Date(),
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('rescue', null, {});
  }
};
