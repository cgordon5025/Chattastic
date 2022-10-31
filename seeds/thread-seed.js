const { Thread } = require('../models')

const threadData = [
    {
        text_content: "Hi I'm new to the forum!",
        user_id: 3,
        channel_id: 1
    },
    {
        text_content: "Any have good resources for mySQL debugging?",
        user_id: 2,
        channel_id: 1
    }
]

const seedThreads = () => Thread.bulkCreate(threadData)

module.exports = seedThreads