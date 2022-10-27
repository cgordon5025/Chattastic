const {Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class ChatModel extends Model {}

ChatModel.init({
    id: {
        type:DataTypes.INTEGER,
        allowNull:false,
        primaryKey: true,
        autoIncrement:true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
    },
    user_id: {
        type:DataTypes.INTEGER,
        references: {
            model:"user",
            key: "id",
        },
    },
},
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'chatModel',  
    }
);

module.exports = ChatModel;