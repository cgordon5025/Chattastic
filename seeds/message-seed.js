const { Message } = require('../models')

const messageData = [
    {
        text: "helllllllllo",
        user_id: 1,
        thread_id: 1,
        channel_id: 1
    },
    {
        text: "why hello to you too",
        user_id: 2,
        thread_id: 1,
        channel_id: 1
    }
]

const seedMessages = () => Message.bulkCreate(messageData)

module.exports = seedMessages