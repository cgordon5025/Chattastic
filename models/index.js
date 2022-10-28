//we want to establish the connections and between the tables
const User = require("./User");
const Channel = require("./Channel");
const Thread = require("./Thread");
const Message = require('./Message')
//Post to be added in later//
// const Post = require('./Post');


Channel.hasMany(Thread, {
  foreignKey: "id",
  onDelete: "CASCADE",
});

Thread.belongsTo(Channel, {
  foreignKey: "id",
});

module.exports = { User, Channel, Thread, Message };

