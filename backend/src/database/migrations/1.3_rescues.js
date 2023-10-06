'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('rescues', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      animal: {
        allowNull: false,
        type: Sequelize.STRING
      },
      walking: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      description: {
        allowNull: false,
        type: Sequelize.STRING
      },
      hour: {
        allowNull: false,
        type: Sequelize.STRING
      },
      adress: {
        allowNull: false,
        type: Sequelize.STRING
      },
      city: {
        allowNull: false,
        type: Sequelize.STRING
      },
      picture: {
        allowNull: false,
        type: Sequelize.STRING
      },
      status: {
        allowNull: false,
        type: Sequelize.TINYINT
      },
      created: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('rescues');
  }
};