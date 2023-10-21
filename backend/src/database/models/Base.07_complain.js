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
    description: DataTypes.TEXT('medium'),
    hour: DataTypes.STRING,
    adress: DataTypes.STRING,
    city: DataTypes.STRING,
    user: DataTypes.STRING,
    region: DataTypes.STRING,
    picture: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'complain',
    timestamps: true,
    updatedAt: false,
    createdAt: 'created'
  });
  return complains;
};