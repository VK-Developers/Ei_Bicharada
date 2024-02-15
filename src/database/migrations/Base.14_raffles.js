'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('raffles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      entrance: {
        allowNull: false,
        type: Sequelize.FLOAT
      },
      qtd: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      productPicture: {
        allowNull: false,
        type: Sequelize.STRING,
        field: 'product_picture'
      },
    });
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.dropTable('raffles');
  }
};