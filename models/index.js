//we want to establish the connections and between the tables
const User = require("./User");
const Channel = require("./Channel");
const Thread = require("./Thread");
//Post to be added in later//
// const Post = require('./Post');

User.hasMany(Channel, {
  foreignKey:"id",
  onDelete: "CASCADE"
});

Channel.belongsTo(User, {
foreignKey:"id"
});

Channel.hasMany(Thread, {
  foreignKey: "id",
  onDelete: "CASCADE",
});

Thread.belongsTo(Channel, {
  foreignKey: "id",
});

module.exports = { User, Channel, Thread };

