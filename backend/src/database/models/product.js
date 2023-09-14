'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class products extends Model {
    // define association here
  }
  products.init({
    name: DataTypes.STRING,
    price: DataTypes.FLOAT,
    description: DataTypes.STRING,
    inStock: {
      type: DataTypes.BOOLEAN,
      field: 'in_stock'
    },
    qrCode: {
      type: DataTypes.STRING,
      field: 'qr_code'
    },
    picture: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'product',
    timestamps: true,
  });
  return products;
};