'use strict';

/**
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {import('sequelize').DataType} DataTypes 
 */

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('rescue', [
      {
        name: 'Shasha',
        walking: false,
        description: 'lorem lorem lorem lorem lorem lorem',
        hour: '12:30',
        adress: 'Rua Anton Ribom 4, apt 66',
        neighborhood: 'San Maran',
        picture: 'loren loren',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Alistar',
        walking: true,
        description: 'lorem lorem lorem lorem lorem lorem',
        hour: '12:30',
        adress: 'Rua Anton Ribom 4, apt 66',
        neighborhood: 'San Maran',
        picture: 'loren loren',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Nina',
        walking: false,
        description: 'lorem lorem lorem lorem lorem lorem',
        hour: '12:30',
        adress: 'Rua Anton Ribom 4, apt 66',
        neighborhood: 'San Maran',
        picture: 'loren loren',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Blair',
        walking: true,
        description: 'lorem lorem lorem lorem lorem lorem',
        hour: '12:30',
        adress: 'Rua Anton Ribom 4, apt 66',
        neighborhood: 'San Maran',
        picture: 'loren loren',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Alfredo',
        walking: true,
        description: 'lorem lorem lorem lorem lorem lorem',
        hour: '12:30',
        adress: 'Rua Anton Ribom 4, apt 66',
        neighborhood: 'San Maran',
        picture: 'loren loren',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Banguela',
        walking: false,
        description: 'lorem lorem lorem lorem lorem lorem',
        hour: '12:30',
        adress: 'Rua Anton Ribom 4, apt 66',
        neighborhood: 'San Maran',
        picture: 'loren loren',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('rescue', null, {});
  }
};
