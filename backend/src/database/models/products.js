const { DataTypes } = require('sequelize')

const attributes = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING
  },
  price: {
    allowNull: false,
    type: DataTypes.FLOAT
  },
  description: {
    allowNull: false,
    type: DataTypes.STRING
  },
  inStock: {
    allowNull: false,
    type: DataTypes.BOOLEAN,
    field: 'in_stock'
  },
  qrCode: {
    allowNull: false,
    type: DataTypes.STRING,
    field: 'qr_code'
  },
  picture: {
    allowNull: false,
    type: DataTypes.STRING
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at'
  },
  updatedAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'updated_at'
  }
}

/**
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {import('sequelize').DataType} DataTypes 
 */
module.exports = (sequelize, _DataTypes) => {
  return sequelize.define(
    'products',
    attributes,
    {
      tableName: 'products',
    }
  );
};
