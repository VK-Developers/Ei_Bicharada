'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.addColumn('raffles_numbers', 'raffleId', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'raffles',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    })
  },

  async down (queryInterface, _Sequelize) {
    return queryInterface.removeColumn('raffles_numbers', 'raffleId');
  }
};
