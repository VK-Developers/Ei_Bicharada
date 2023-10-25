'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class sponsors extends Model {
    // define association here
  }
  sponsors.init({
    name: DataTypes.STRING,
    picture: DataTypes.STRING,
    flier: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'sponsor',
    timestamps: false,
    updatedAt: false,
    createdAt: false
  });
  return sponsors;
};