'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class news_and_events extends Model {
    // define association here
  }
  news_and_events.init({
    title: DataTypes.STRING,
    type: DataTypes.STRING,
    content: DataTypes.TEXT('long'),
    date: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'newAndEvent',
    timestamps: true,
    updatedAt: false,
    createdAt: 'created'
  });
  return news_and_events;
};