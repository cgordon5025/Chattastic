const { Thread } = require('../models')

const threadData = [
    {
        text_content: "Hi I'm new to the forum!",
        user_id: 3,
        channel_id: 1
    },
    {
        text_content: "IM LOST PLS HALP",
        user_id: 2,
        channel_id: 1
    }
]

const seedThreads = () => Thread.bulkCreate(threadData)

module.exports = seedThreads