'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('products', [
      {
        name: 'Item 01',
        price: 10.90,
        description: 'lorem lorem lorem lorem lorem lorem',
        in_stock: true,
        picture: 'loren loren',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Item 02',
        price: 5.50,
        description: 'lorem lorem lorem lorem lorem lorem',
        in_stock: true,
        picture: 'loren loren',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Item 03',
        price: 30.00,
        description: 'lorem lorem lorem lorem lorem lorem',
        in_stock: true,
        picture: 'path/path/',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Item 04',
        price: 50.00,
        description: 'lorem lorem lorem lorem lorem lorem',
        in_stock: true,
        picture: 'path/path/',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Item 05',
        price: 19.90,
        description: 'lorem lorem lorem lorem lorem lorem',
        in_stock: true,
        picture: 'path/path/',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Item 06',
        price: 11.50,
        description: 'lorem lorem lorem lorem lorem lorem',
        in_stock: true,
        picture: 'path/path/',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Item 07',
        price: 21.79,
        description: 'lorem lorem lorem lorem lorem lorem',
        in_stock: true,
        picture: 'path/path/',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Item 08',
        price: 10.55,
        description: 'lorem lorem lorem lorem lorem lorem',
        in_stock: true,
        picture: 'path/path/',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Item 09',
        price: 67.80,
        description: 'lorem lorem lorem lorem lorem lorem',
        in_stock: true,
        picture: 'path/path/',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Item 10',
        price: 9.99,
        description: 'lorem lorem lorem lorem lorem lorem',
        in_stock: true,
        picture: 'path/path/',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Item 11',
        price: 10.00,
        description: 'lorem lorem lorem lorem lorem lorem',
        in_stock: true,
        picture: 'path/path/',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ], {});
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('products', null, {});
  }
};
