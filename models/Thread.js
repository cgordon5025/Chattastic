const { text } = require("express");
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Thread extends Model {}

Thread.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  text_content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  sequelize,
  timestamps: false,
  freezeTableName: true,
  underscored: true,
  modelName: "thread",
});

module.exports = Thread;
