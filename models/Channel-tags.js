const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class ChannelTag extends Model { }

ChannelTag.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            reference: {
                model: "user",
                key: "id",
            },
        },
        channel_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            reference: {
                model: "channel",
                key: "id",
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: "channel_tag"
    }
);

module.exports = ChannelTag