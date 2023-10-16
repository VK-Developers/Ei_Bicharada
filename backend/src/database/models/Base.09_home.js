'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class homes extends Model {
    // define association here
  }
  homes.init({
    name: DataTypes.STRING,
    phone: DataTypes.STRING,
    city: DataTypes.STRING,
    animal: DataTypes.STRING,
    period: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'home',
    timestamps: true,
    updatedAt: false,
    createdAt: 'created'
  });
  return homes;
};