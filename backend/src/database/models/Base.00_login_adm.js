"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class adms extends Model {
    static associate(models) {
      // define association here
    }
  }
  adms.init(
    {
      email: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "adm",
      timestamps: false,
    }
  );
  return adms;
};
