'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class regions extends Model {
    // define association here
  }
  regions.init({
    city: DataTypes.STRING,
    delegate: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'region',
    timestamps: false,
  });
  return regions;
};