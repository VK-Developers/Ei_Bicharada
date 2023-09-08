const { DataTypes } = require('sequelize')

const attibutes = {
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
  walking: {
    allowNull: false,
    type: DataTypes.BOOLEAN
  },
  description: {
    allowNull: false,
    type: DataTypes.STRING
  },
  hour: {
    allowNull: false,
    type: DataTypes.STRING
  },
  adress: {
    allowNull: false,
    type: DataTypes.STRING
  },
  neighborhood: {
    allowNull: false,
    type: DataTypes.STRING
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
    'rescue',
    attibutes,
    {
      tableName: 'rescue',
    }
  );
};
