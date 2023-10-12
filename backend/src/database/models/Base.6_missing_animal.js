'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class missing_animals extends Model {
    static associate(models) {
      // define association here
    }
  }

  missing_animals.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    picture: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'missingAnimal',
    tableName: "missing_animals",
    timestamps: true,
    updatedAt: false,
    createdAt: 'created'
  });
  
  return missing_animals;
};