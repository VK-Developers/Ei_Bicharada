'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('regions', [
      {
        city: 'São Vicente',
      },
      {
        city: 'Santos',
      },
      {
        city: 'Praia Grande',
      },
      {
        city: 'Monguaga',
      },
      {
        city: 'Bertioga',
      },
      {
        city: 'Americana',
      },
      {
        city: 'Mogi das Cruzes',
      },
      {
        city: 'Itaquaquecetuba',
      },
      {
        city: 'Guararema',
      },
      {
        city: 'Suzano',
      },
      {
        city: 'Biritiba Mirim',
      },
      {
        city: 'Salesópolis',
      },
      {
        city: 'Guarulhos',
      },
      {
        city: 'Arujá',
      },
      {
        city: 'Santa Isabel',
      },
      {
        city: 'Ferraz de Vasconcelos',
      },
      {
        city: 'Poá',
      },
      {
        city: 'Rio Claro',
      },
      {
        city: 'Cordeirópolis',
      },
      {
        city: 'Limeira',
      },
      {
        city: 'Leme',
      },
      {
        city: 'Araras',
      },
      {
        city: 'Mogi Guaçu',
      },
      {
        city: 'Mogi Mirim',
      },
      {
        city: 'Conchal',
      },
      {
        city: 'Itanhaém',
      },
      {
        city: 'Cubatão',
      },
      {
        city: 'Peruíbe',
      },
      {
        city: 'Guarujá',
      },
      {
        city: 'Santa Cruz da Conceição',
      },
    ], {});
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('regions', null, {});
  }
};
