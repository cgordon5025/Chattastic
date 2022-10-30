const { Message } = require('../models')

const messageData = [
    {
        title: "WELCOME TO OUR SERVER",
        text: "stuff about the forum and what it can be used for. We can do real time messaging and updates, converse with friends and such please. please make new chanels etc",
        user_id: 1,
        channel_id: 1
    },
    {
        title: "ITS A DUMPSTER FIRE",
        text: "why hello to you too",
        user_id: 2,
        channel_id: 1
    }
]

const seedMessages = () => Message.bulkCreate(messageData)

module.exports = seedMessages