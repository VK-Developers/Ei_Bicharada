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
  price: {
    allowNull: false,
    type: Sequelize.FLOAT
  },
  description: {
    allowNull: false,
    type: Sequelize.STRING
  },
  inStock: {
    allowNull: false,
    type: Sequelize.BOOLEAN,
    field: 'in_stock'
  },
  qrCode: {
    allowNull: false,
    type: Sequelize.STRING,
    field: 'qr_code'
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
    await queryInterface.createTable('products', attributes);
  },
  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('products');
  }
};