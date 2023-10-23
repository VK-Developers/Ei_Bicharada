'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class victims extends Model {
    // define association here
  }
  victims.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    new: DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'victim',
    timestamps: true,
    updatedAt: false,
    createdAt: 'created'
  });
  return victims;
};