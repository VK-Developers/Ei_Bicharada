'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('adoptions', [
      {
        name: 'Simba',
        description: 'lorem lorem lorem lorem lorem lorem',
        picture: 'https://www.atespets.com.br/adoption/1_Simba.png',
        created: new Date(),
      },
      {
        name: 'Scar',
        description: 'lorem lorem lorem lorem lorem lorem',
        picture: 'https://www.atespets.com.br/adoption/2_Scar.png',
        created: new Date(),
      },
      {
        name: 'Mufasa',
        description: 'lorem lorem lorem lorem lorem lorem',
        picture: 'https://www.atespets.com.br/adoption/3_Mufasa.webp',
        created: new Date(),
      },
      {
        name: 'Nala',
        description: 'lorem lorem lorem lorem lorem lorem',
        picture: 'https://www.atespets.com.br/adoption/4_Nala.webp',
        created: new Date(),
      },
      {
        name: 'Sarabi',
        description: 'lorem lorem lorem lorem lorem lorem',
        picture: 'https://www.atespets.com.br/adoption/5_Sarabi.jpg',
        created: new Date(),
      },
      {
        name: 'Timao',
        description: 'lorem lorem lorem lorem lorem lorem',
        picture: 'https://www.atespets.com.br/adoption/6_Timao.jpg',
        created: new Date(),
      },
      {
        name: 'Zazu',
        description: 'lorem lorem lorem lorem lorem lorem',
        picture: 'https://www.atespets.com.br/adoption/7_Zazu.jpg',
        created: new Date(),
      },
      {
        name: 'Pumba',
        description: 'lorem lorem lorem lorem lorem lorem',
        picture: 'https://www.atespets.com.br/adoption/8_Pumba.jpeg',
        created: new Date(),
      },
      {
        name: 'Rafiki',
        description: 'lorem lorem lorem lorem lorem lorem',
        picture: 'https://www.atespets.com.br/adoption/9_Rafiki.jpg',
        created: new Date(),
      },
    ], {});
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('adoptions', null, {});
  }
};
