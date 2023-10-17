'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class contributions extends Model {
    // define association here
  }
  contributions.init({
    name: DataTypes.STRING,
    amount: DataTypes.FLOAT,
  }, {
    sequelize,
    modelName: 'contribution',
    timestamps: true,
    updatedAt: false,
    createdAt: 'date'
  });
  return contributions;
};