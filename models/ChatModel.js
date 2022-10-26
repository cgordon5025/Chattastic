const {Tables, DataTypes } = require("sequelize");
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
    data_created: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue:DataTypes.NOW,
    },
    needed_funding: {
        type: DataTypes.FLOAT,
        allowNull: false,
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
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'chatModel',  
    }
);

module.exports = ChatModel;