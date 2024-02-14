'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class rescues extends Model {
    static associate(models) {
      // define association here
    }
  }
  rescues.init({
    animal: DataTypes.STRING,
    walking: DataTypes.BOOLEAN,
    description: DataTypes.TEXT('medium'),
    hour: DataTypes.STRING,
    adress: DataTypes.STRING,
    city: DataTypes.STRING,
    user: DataTypes.STRING,
    region: DataTypes.STRING,
    picture: DataTypes.STRING,
    new: DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'rescue',
    timestamps: true,
    updatedAt: false,
    createdAt: 'created'
  });
  return rescues;
};