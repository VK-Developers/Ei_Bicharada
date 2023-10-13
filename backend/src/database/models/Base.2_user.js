'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    static associate(models) {
      this.hasMany(models.rescue, {foreignKey: 'userId', as: 'rescues'})
    }
  }
  users.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    city: DataTypes.STRING,
    cep: DataTypes.STRING,
    accepted: DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'user',
    timestamps: true,
    updatedAt: false,
    createdAt: 'created'
  });
  return users;
};
