const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Thread extends Model { }

Thread.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    text_content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id'
      },
    },
    channel_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'channel',
        key: 'id'
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "thread",
  });

module.exports = Thread;
