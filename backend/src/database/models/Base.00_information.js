"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class informations extends Model {
    static associate(models) {
      // define association here
    }
  }
  informations.init(
    {
      info: DataTypes.STRING,
      local: DataTypes.STRING,
      subLocal: {
        type: DataTypes.STRING,
        field: 'sub_local'
      },
    },
    {
      sequelize,
      modelName: "information",
      tableName: "informations",
      timestamps: false,
    }
  );
  return informations;
};
