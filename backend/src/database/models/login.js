"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class login extends Model {
    static associate(models) {
      // define association here
    }
  }
  login.init(
    {
      email: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "login",
      timestamps: false,
    }
  );
  return login;
};
