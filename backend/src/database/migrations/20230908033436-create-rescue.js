const { Sequelize } = require('sequelize')

const attributes = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
  },
  name: {
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
  neighborhood: {
    allowNull: false,
    type: Sequelize.STRING
  },
  picture: {
    allowNull: false,
    type: Sequelize.STRING
  },
  createdAt: {
    allowNull: false,
    type: Sequelize.DATE,
    field: 'created_at'
  },
  updatedAt: {
    allowNull: false,
    type: Sequelize.DATE,
    field: 'updated_at'
  }
}

module.exports = {
  /**
   * @param {import('sequelize').QueryInterface} queryInterface 
   * @param {import('sequelize').Sequelize} Sequelize 
   */
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.createTable('rescue', attributes);
  },
  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('rescue');
  }
};