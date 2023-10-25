'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class products extends Model {
    static associate(models) {
      // define association here
    }
  }
  products.init({
    name: DataTypes.STRING,
    price: DataTypes.FLOAT,
    description: DataTypes.TEXT('medium'),
    inStock: {
      type: DataTypes.BOOLEAN,
      field: 'in_stock'
    },
    contact: DataTypes.STRING,
    pix: DataTypes.STRING,
    picture: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'product',
    timestamps: false,
  });
  return products;
};