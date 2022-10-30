const { Message } = require('../models')

const messageData = [
    {
        text: "Hello friend",
        user_id: 1,
        channel_id: 1
    },
    {
        text: "why hello to you too",
        user_id: 2,
        channel_id: 1
    }
]

const seedMessages = () => Message.bulkCreate(messageData)

module.exports = seedMessages