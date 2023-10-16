'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class complains extends Model {
    // define association here
  }
  complains.init({
    animal: DataTypes.STRING,
    walking: DataTypes.BOOLEAN,
    description: DataTypes.STRING,
    hour: DataTypes.STRING,
    adress: DataTypes.STRING,
    city: DataTypes.STRING,
    picture: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'complains',
    timestamps: true,
    updatedAt: false,
    createdAt: 'created'
  });
  return complains;
};