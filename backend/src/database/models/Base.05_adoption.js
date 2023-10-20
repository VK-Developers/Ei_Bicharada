'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class adoptions extends Model {
    static associate(models) {
      // define association here
    }
  }

  adoptions.init({
    animal: DataTypes.STRING,
    name: DataTypes.STRING,
    description: DataTypes.TEXT('medium'),
    neutered: DataTypes.BOOLEAN,
    sex: DataTypes.BOOLEAN,
    user: DataTypes.STRING,
    region: DataTypes.STRING,
    picture: DataTypes.STRING,
    accepted: DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'adoption',
    timestamps: true,
    updatedAt: false,
    createdAt: 'created'
  });
  
  return adoptions;
};