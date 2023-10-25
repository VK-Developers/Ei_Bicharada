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
    type: DataTypes.STRING,
    duration: DataTypes.STRING,
    new: DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'home',
    timestamps: true,
    updatedAt: false,
    createdAt: 'created'
  });
  return homes;
};