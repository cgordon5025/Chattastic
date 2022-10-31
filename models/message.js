const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Message extends Model { }

Message.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    text: {
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
    thread_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'thread',
        key: 'id'
      },
    },
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: "message",
  }
);

module.exports = Message;