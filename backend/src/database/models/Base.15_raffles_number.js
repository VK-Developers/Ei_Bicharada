'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class raffles_numbers extends Model {
    static associate(models) {
      this.belongsTo(models.raffle, {
        foreignKey: 'raffleId', 
        as: 'raffle'
      });
    }
  }
  raffles_numbers.init({
    number: DataTypes.INTEGER,
    name: DataTypes.CHAR(100),
    telefone: DataTypes.CHAR(100),
    status: DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'rafflesNumber',
    tableName: "raffles_numbers",
    timestamps: false,
  });
  return raffles_numbers;
};