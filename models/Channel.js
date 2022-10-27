const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Channel extends Model { }

Channel.init(
  {
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
  },
{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "channel",
  }
);

module.exports = Channel;
