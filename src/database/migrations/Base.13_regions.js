'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('regions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      city: {
        allowNull: false,
        type: Sequelize.STRING
      },
      delegate: {
        allowNull: false,
        defaultValue: '',
        type: Sequelize.STRING
      },
      email: {
        allowNull: false,
        defaultValue: '',
        type: Sequelize.STRING
      },
      phone: {
        allowNull: false,
        defaultValue: '',
        type: Sequelize.STRING
      },
    });
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.dropTable('regions');
  }
};