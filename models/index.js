//we want to establish the connections and between the tables
const User = require("./User");
const Channel = require("./Channel");
const Thread = require("./Thread");
const Message = require('./Message')
const ChannelTag = require('./Channel-tags')
//Post to be added in later//
// const Post = require('./Post');


User.hasMany(Channel, {
  foreignKey: 'user_id',
});

Channel.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: "SET NULL"
});

User.hasMany(Thread, {
  foreignKey: 'user_id'
});

Thread.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: "SET NULL"
});

User.hasMany(Message, {
  foreignKey: "user_id"
});

Message.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "SET NULL"
});

Channel.hasMany(Thread, {
  foreignKey: "channel_id",
});

Thread.belongsTo(Channel, {
  foreignKey: "channel_id",
  onDelete: "SET NULL",
});

Thread.hasMany(Message, {
  foreignKey: "thread_id"
});

Message.belongsTo(Thread, {
  foreignKey: "thread_id",
  onDelete: "SET NULL"
})

Channel.hasMany(Message, {
  foreignKey: "channel_id"
})
Message.belongsTo(Channel, {
  foreignKey: "channel_id",
  onDelete: "SET NULL"
})

module.exports = { User, Channel, Thread, Message, ChannelTag };

