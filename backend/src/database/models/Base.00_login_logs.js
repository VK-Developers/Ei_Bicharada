"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class login_logs extends Model {
    static associate(models) {
      // define association here
    }
  }
  login_logs.init(
    {
      name: DataTypes.STRING,
      phone: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'loginLog',
      tableName: "login_logs",
      timestamps: true,
      updatedAt: false,
      createdAt: 'acessed'
    }
  );
  return login_logs;
};
