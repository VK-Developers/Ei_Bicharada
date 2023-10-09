'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('rescues', [
      {
        animal: 'Shasha',
        walking: false,
        description: 'lorem lorem lorem lorem lorem lorem',
        hour: '12:30',
        adress: 'Rua Anton Ribom 4, apt 66',
        city: 'Santos',
        picture: 'loren loren',
        accepted: true,
        newRequest: false,
        userId: 2,
        created: new Date(),
      },
      {
        animal: 'Alistar',
        walking: true,
        description: 'lorem lorem lorem lorem lorem lorem',
        hour: '12:30',
        adress: 'Rua Anton Ribom 4, apt 66',
        city: 'Sao Vicente',
        picture: 'loren loren',
        accepted: false,
        newRequest: true,
        userId: 3,
        created: new Date(),
      },
      {
        animal: 'Nina',
        walking: false,
        description: 'lorem lorem lorem lorem lorem lorem',
        hour: '12:30',
        adress: 'Rua Anton Ribom 4, apt 66',
        city: 'Sao Vicente',
        picture: 'loren loren',
        accepted: false,
        newRequest: true,
        userId: 2,
        created: new Date(),
      },
      {
        animal: 'Blair',
        walking: true,
        description: 'lorem lorem lorem lorem lorem lorem',
        hour: '12:30',
        adress: 'Rua Anton Ribom 4, apt 66',
        city: 'Santos',
        picture: 'loren loren',
        accepted: false,
        newRequest: true,
        userId: 2,
        created: new Date(),
      },
      {
        animal: 'Alfredo',
        walking: true,
        description: 'lorem lorem lorem lorem lorem lorem',
        hour: '12:30',
        adress: 'Rua Anton Ribom 4, apt 66',
        city: 'San Maran',
        picture: 'loren loren',
        accepted: true,
        newRequest: false,
        userId: 1,
        created: new Date(),
      },
      {
        animal: 'Banguela',
        walking: false,
        description: 'lorem lorem lorem lorem lorem lorem',
        hour: '12:30',
        adress: 'Rua Anton Ribom 4, apt 66',
        city: 'Santos',
        picture: 'loren loren',
        accepted: false,
        newRequest: true,
        userId: 1,
        created: new Date(),
      },
    ], {});
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('rescues', null, {});
  }
};
