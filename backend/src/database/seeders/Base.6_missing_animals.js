'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('missing_animals', [
      {
        name: 'Pimpolho',
        description: 'lorem lorem lorem lorem lorem lorem',
        picture: 'https://www.atespets.com.br/missing-animals/1_Pimpolho.jpeg',
        created: new Date(),
      },
      {
        name: 'Tax',
        description: 'lorem lorem lorem lorem lorem lorem',
        picture: 'https://www.atespets.com.br/missing-animals/2_Tax.jpg',
        created: new Date(),
      },
      {
        name: 'Billy',
        description: 'lorem lorem lorem lorem lorem lorem',
        picture: 'https://www.atespets.com.br/missing-animals/3_Billy.webp',
        created: new Date(),
      },
      {
        name: 'Caramelo',
        description: 'lorem lorem lorem lorem lorem lorem',
        picture: 'https://www.atespets.com.br/missing-animals/4_Caramelo.jpg',
        created: new Date(),
      },
      {
        name: 'Amora',
        description: 'lorem lorem lorem lorem lorem lorem',
        picture: 'https://www.atespets.com.br/missing-animals/5_Amora.jpg',
        created: new Date(),
      },
      {
        name: 'Nina',
        description: 'lorem lorem lorem lorem lorem lorem',
        picture: 'https://www.atespets.com.br/missing-animals/6_Nina.jpg',
        created: new Date(),
      },
      {
        name: 'Jujuba',
        description: 'lorem lorem lorem lorem lorem lorem',
        picture: 'https://www.atespets.com.br/missing-animals/7_Jujuba.jpg',
        created: new Date(),
      },
      {
        name: 'Shasha',
        description: 'lorem lorem lorem lorem lorem lorem',
        picture: 'https://www.atespets.com.br/missing-animals/8_Shasha.jpg',
        created: new Date(),
      },
      {
        name: 'Alistar',
        description: 'lorem lorem lorem lorem lorem lorem',
        picture: 'https://www.atespets.com.br/missing-animals/9_Alistar.jpg',
        created: new Date(),
      }
    ], {});
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('missing_animals', null, {});
  }
};
