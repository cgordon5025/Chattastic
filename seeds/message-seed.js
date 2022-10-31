const { Message } = require('../models')

const messageData = [
    {
        text: "Welcome to the Site!",
        user_id: 1,
        thread_id: 1,
        channel_id: 1
    },
    {
        text: "Good to have you here!",
        user_id: 2,
        thread_id: 1,
        channel_id: 1
    }
]

const seedMessages = () => Message.bulkCreate(messageData)

module.exports = seedMessages