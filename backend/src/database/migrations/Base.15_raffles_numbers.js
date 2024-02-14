'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('raffles_numbers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      number: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      name: {
        allowNull: false,
        type: Sequelize.CHAR(100)
      },
      telefone: {
        allowNull: false,
        type: Sequelize.CHAR(100)
      },
      status: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
    });
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.dropTable('raffles_numbers');
  }
};