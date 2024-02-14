'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.addColumn('raffles', 'regionId', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'regions',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    })
  },

  async down (queryInterface, _Sequelize) {
    return queryInterface.removeColumn('raffles', 'regionId');
  }
};
