'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class users_adm extends Model {
  }
  users_adm.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    city: DataTypes.STRING,
    region: DataTypes.STRING,
    cep: DataTypes.STRING,
    new: DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'userAdm',
    tableName: "adm_users",
    timestamps: true,
    updatedAt: false,
    createdAt: 'created'
  });
  return users_adm;
};
