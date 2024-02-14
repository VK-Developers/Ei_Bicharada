'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('informations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      info: {
        allowNull: false,
        type: Sequelize.STRING
      },
      local: {
        allowNull: false,
        type: Sequelize.STRING
      },
      subLocal: {
        type: Sequelize.STRING,
        field: 'sub_local'
      }
    });
  },
  async down(queryInterface, _Sequelize) {
    await queryInterface.dropTable('informations');
  }
};