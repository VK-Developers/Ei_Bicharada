'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class raffles extends Model {
    static associate(models) {
      this.belongsTo(models.region, {
        foreignKey: 'regionId', 
        as: 'raffleRegion'
      });

      this.hasMany(models.rafflesNumber, {
        foreignKey: 'raffleId',
        as: 'numbers'
      });
    }
  }
  raffles.init({
    name: DataTypes.STRING,
    entrance: DataTypes.FLOAT,
    qtd: DataTypes.INTEGER,
    productPicture: {
      type: DataTypes.STRING,
      field: 'product_picture'
    },
  }, {
    sequelize,
    modelName: 'raffle',
    timestamps: false,
  });
  return raffles;
};